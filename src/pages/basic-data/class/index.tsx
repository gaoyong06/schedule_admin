// /schedule_admin/src/pages/basic-data/class/index.tsx
import { PlusOutlined } from '@ant-design/icons';
import type { ActionType, ProColumns } from '@ant-design/pro-components';
import { FooterToolbar, PageContainer, ProTable } from '@ant-design/pro-components';
import { Button, message, Modal } from 'antd';
import React, { useRef, useState } from 'react';
import { useModel } from '@umijs/max';
import {
  createClass,
  getClassesByOrg,
  updateClass,
  batchDeleteClasses,
} from '../../../services/api/class';
import OperationModal from './components/OperationModal';

/**
 * 添加班级
 *
 * @param fields
 */
const handleCreate = async (fields: API.Class) => {
  const hide = message.loading('正在添加');

  try {
    await createClass({ ...fields });
    hide();
    message.success('添加成功');
    return true;
  } catch (error) {
    hide();
    message.error('添加失败请重试！');
    return false;
  }
};

/**
 * 更新班级
 *
 * @param fields
 */
const handleUpdate = async (fields: API.Class) => {
  const hide = message.loading('正在修改');
  try {
    await updateClass(
      { id: fields.class_id ?? 0 }, // 只传递 id 作为 params
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
 * 批量删除班级
 *
 * @param selectedRows
 */

const handleBatchDelete = async (selectedRows: API.Class[]) => {
  const hide = message.loading('正在删除');
  if (!selectedRows) return true;

  try {
    await batchDeleteClasses({
      class_ids: selectedRows.map((row) => row.class_id ?? 0),
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

const ClassList: React.FC = () => {
  const [open, setVisible] = useState<boolean>(false);
  const actionRef = useRef<ActionType>();
  const [currentRow, setCurrentRow] = useState<Partial<API.Class> | undefined>(undefined);
  const [selectedRowsState, setSelectedRows] = useState<API.Class[]>([]);
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
  // 新建,编辑班级提交
  const handleSubmitCreateOrUpdate = async (method: 'create' | 'update', value: API.Class) => {
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
  // 删除班级提交(单个或批量)
  const handleSubmitDelete = async (values: API.Class[], isSelectedRows: boolean) => {
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

  // 新建班级弹窗
  const showCreateModal = () => {
    setCurrentRow(undefined);
    setVisible(true);
  };

  // 编辑班级弹窗
  const showUpdateModal = (item: API.Class) => {
    setCurrentRow(item);
    setVisible(true);
  };

  // 删除班级弹窗(单个,或批量删除)
  const showDeleteModal = (items: API.Class | API.Class[], isSelectedRows: boolean) => {
    const itemsArray = Array.isArray(items) ? items : [items];
    const itemsCount = itemsArray.length;
    let content: string;

    if (itemsCount === 1) {
      content = `确定删除 ${itemsArray[0].name} 吗？`;
    } else {
      content = `确定删除所选的 ${itemsCount} 个班级吗？`;
    }

    Modal.confirm({
      title: '删除班级',
      content: content,
      okText: '确认',
      cancelText: '取消',
      onOk: () => handleSubmitDelete(itemsArray, isSelectedRows),
    });
  };

  // 列表显示的行
  const columns: ProColumns<API.Class>[] = [
    {
      title: '序号',
      dataIndex: 'index',
      valueType: 'index',
    },
    {
      title: '班级名称',
      dataIndex: 'name',
      tip: '',
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
    <PageContainer content="设置课表中涉及的所有班级信息">
      <ProTable<API.Class, API.Pagination>
        headerTitle="全部"
        actionRef={actionRef}
        rowKey="class_id"
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
          const ret = await getClassesByOrg({
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

export default ClassList;
