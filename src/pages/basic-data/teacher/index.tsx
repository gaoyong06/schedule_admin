// /schedule_admin/src/pages/basic-data/teacher/index.tsx
import { PlusOutlined } from '@ant-design/icons';
import type { ActionType, ProColumns } from '@ant-design/pro-components';
import { FooterToolbar, PageContainer, ProTable } from '@ant-design/pro-components';
import { Button, Badge, message, Modal } from 'antd';
import React, { useRef, useState } from 'react';
import { useModel } from '@umijs/max';
import {
  createTeacher,
  getTeachersByOrg,
  updateTeacher,
  batchDeleteTeachers,
} from '../../../services/api/teacher';
import OperationModal from './components/OperationModal';

/**
 * 添加教师
 *
 * @param fields
 */
const handleCreate = async (fields: API.Teacher) => {
  const hide = message.loading('正在添加');

  try {
    await createTeacher({ ...fields });
    hide();
    message.success('添加成功');
    return true;
  } catch (error) {
    hide();
    // message.error('添加失败请重试！');
    return false;
  }
};

/**
 * 更新教师
 *
 * @param fields
 */
const handleUpdate = async (fields: API.Teacher) => {
  const hide = message.loading('正在修改');
  try {
    await updateTeacher(
      { id: fields.teacher_id ?? 0 }, // 只传递 id 作为 params
      fields, // 将 fields 作为 body 传递
    );
    hide();
    message.success('修改成功');
    return true;
  } catch (error) {
    hide();
    message.error('修改失败请重试！');
    return false;
  }
};

/**
 * 批量删除教师
 *
 * @param selectedRows
 */

const handleBatchDelete = async (selectedRows: API.Teacher[]) => {
  const hide = message.loading('正在删除');
  if (!selectedRows) return true;

  try {
    await batchDeleteTeachers({
      teacher_ids: selectedRows.map((row) => row.teacher_id ?? 0),
    });
    hide();
    message.success('删除成功');
    return true;
  } catch (error) {
    hide();
    message.error('删除失败，请重试');
    return false;
  }
};

const TeacherList: React.FC = () => {
  const [open, setVisible] = useState<boolean>(false);
  const actionRef = useRef<ActionType>();
  const [currentRow, setCurrentRow] = useState<Partial<API.Teacher> | undefined>(undefined);
  const [selectedRowsState, setSelectedRows] = useState<API.Teacher[]>([]);
  /** 国际化配置 */

  // 登录用户信息
  const { initialState } = useModel('@@initialState');
  const { currentUser } = initialState || {};

  // 新建,编辑弹窗点击取消按钮
  const handleCancel = () => {
    setVisible(false);
    setCurrentRow(undefined);
  };

  // 表单提交
  // 新建,编辑教师提交
  const handleSubmitCreateOrUpdate = async (method: 'create' | 'update', value: API.Teacher) => {
    if (method === 'create') {
      await handleCreate(value);
    } else if (method === 'update') {
      await handleUpdate(value);
    } else {
      console.error('Unsupported method:', method);
      return;
    }

    // 关闭弹窗
    setVisible(false);
    // 刷新列表
    actionRef.current?.reload();
  };

  // 表单提交
  // 删除教师提交(单个或批量)
  const handleSubmitDelete = async (values: API.Teacher[], isSelectedRows: boolean) => {
    await handleBatchDelete(values);
    // 批量删除时选中的行
    if (isSelectedRows) {
      setSelectedRows([]);
      actionRef.current?.reloadAndRest?.();
    } else {
      // 刷新列表
      actionRef.current?.reload();
    }
  };

  // 新建教师弹窗
  const showCreateModal = () => {
    setCurrentRow(undefined);
    setVisible(true);
  };

  // 编辑教师弹窗
  const showUpdateModal = (item: API.Teacher) => {
    setCurrentRow(item);
    setVisible(true);
  };

  // 删除教师弹窗(单个,或批量删除)
  const showDeleteModal = (items: API.Teacher | API.Teacher[], isSelectedRows: boolean) => {
    const itemsArray = Array.isArray(items) ? items : [items];
    const itemsCount = itemsArray.length;
    let content: string;

    if (itemsCount === 1) {
      content = `确定删除 ${itemsArray[0].name} 吗？`;
    } else {
      content = `确定删除所选的 ${itemsCount} 个教师吗？`;
    }

    Modal.confirm({
      title: '删除教师',
      content: content,
      okText: '确认',
      cancelText: '取消',
      onOk: () => handleSubmitDelete(itemsArray, isSelectedRows),
    });
  };

  // 列表显示的行
  const columns: ProColumns<API.Teacher>[] = [
    {
      title: '序号',
      dataIndex: 'index',
      valueType: 'index',
      render: (_, __, index) => {
        return <span style={{ color: '#999' }}>{index + 1}</span>; // 序号默认从 1 开始
      },
    },
    {
      title: '姓名',
      dataIndex: 'name',
      tip: '',
      render: (_, record) => {
        return <span style={{ fontWeight: 600 }}>{record.name}</span>;
      },
    },
    {
      title: '教师简称',
      dataIndex: 'short_name',
      tip: '',
    },
    {
      title: '主授科目',
      dataIndex: 'main_subject',
      tip: '',
      render: (_, record) => {
        // 根据 main_subject 的值返回对应的文字
        const subjectMap: { [key: number]: string } = {
          0: '-',
          1: '语文',
          2: '数学',
          3: '英语',
          4: '物理',
          5: '化学',
          // 其他科目...
        };
        return subjectMap[record?.main_subject ?? 0] || '-';
      },
    },
    {
      title: '手机号码',
      dataIndex: 'phone',
      tip: '',
    },
    {
      title: '在职状态',
      dataIndex: 'is_active',
      tip: '',
      render: (_, record) => {
        const statusMap: {
          [key: number]: {
            status: 'default' | 'success' | 'error' | 'warning' | 'processing';
            text: string;
          };
        } = {
          0: { status: 'default', text: '-' },
          1: { status: 'processing', text: '在职' },
          2: { status: 'default', text: '离职' },
        };
        return (
          <Badge
            status={statusMap[record?.is_active ?? 0].status}
            text={statusMap[record?.is_active ?? 0].text}
          />
        );
      },
    },
    {
      title: '操作',
      dataIndex: 'option',
      valueType: 'option',
      render: (_, record) => [
        <a
          key="update"
          onClick={(e) => {
            e.preventDefault();
            showUpdateModal(record);
          }}
        >
          编辑
        </a>,
        <a
          key="delete"
          onClick={(e) => {
            e.preventDefault();
            showDeleteModal(record, false);
          }}
        >
          删除
        </a>,
      ],
    },
  ];

  return (
    <PageContainer content="设置课表中涉及的所有教师信息">
      <ProTable<API.Teacher, API.Pagination>
        headerTitle="全部"
        actionRef={actionRef}
        rowKey="teacher_id"
        search={false}
        options={false}
        toolBarRender={() => [
          <Button
            type="primary"
            key="primary"
            onClick={() => {
              showCreateModal();
            }}
          >
            <PlusOutlined /> 新建
          </Button>,
        ]}
        // https://procomponents.ant.design/components/table?current=1&pageSize=5#api
        // params 是需要自带的参数
        // 这个参数优先级更高，会覆盖查询表单的参数
        // params={params}
        request={async (
          // 第一个参数 params 查询表单和 params 参数的结合
          // 第一个参数中一定会有 pageSize 和  current ，这两个参数是 antd 的规范
          params: T & {
            pageSize: number;
            current: number;
          },
          sort,
          filter,
        ) => {
          // 这里需要返回一个 Promise,在返回之前你可以进行数据转化
          // 如果需要转化参数可以在这里进行修改
          const ret = await getTeachersByOrg({
            org_id: currentUser?.org_id || 0,
            current: params.current,
            page_size: params.pageSize,
          });
          return {
            data: ret.data.list,
            // success 请返回 true，
            // 不然 table 会停止解析数据，即使有数据
            success: ret.success,
            // 不传会使用 data 的长度，如果是分页一定要传
            total: ret.data.total,
          };
        }}
        columns={columns}
        rowSelection={{
          onChange: (_, selectedRows) => {
            setSelectedRows(selectedRows);
          },
        }}
      />
      {selectedRowsState?.length > 0 && (
        <FooterToolbar
          extra={
            <div>
              已选择{' '}
              <a
                style={{
                  fontWeight: 600,
                }}
              >
                {selectedRowsState.length}
              </a>{' '}
              项
            </div>
          }
        >
          <Button onClick={() => showDeleteModal(selectedRowsState, true)}>批量删除</Button>
        </FooterToolbar>
      )}

      <OperationModal
        open={open}
        current={currentRow}
        onCancel={handleCancel}
        onSubmit={handleSubmitCreateOrUpdate}
        currentUser={currentUser}
      />
    </PageContainer>
  );
};

export default TeacherList;
