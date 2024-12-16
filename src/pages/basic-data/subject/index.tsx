// /schedule_admin/src/pages/basic-data/subject/index.tsx
import { PlusOutlined } from '@ant-design/icons';
import type { ActionType, ProColumns, ProDescriptionsItemProps } from '@ant-design/pro-components';
import {
  FooterToolbar,
  ModalForm,
  PageContainer,
  ProDescriptions,
  ProFormText,
  ProFormTextArea,
  ProTable,
} from '@ant-design/pro-components';
import { Button, Drawer, Input, message } from 'antd';
import React, { useRef, useState } from 'react';
import type { FormValueType } from './components/UpdateForm';
import UpdateForm from './components/UpdateForm';
import { useModel, useRequest } from '@umijs/max';
import {
  createSubject,
  deleteSubject,
  getSubjectsByOrg,
  updateSubject,
} from '../../../services/api/subject';

/**
 * 添加节点
 *
 * @param fields
 */
const handleAdd = async (fields: API.Subject) => {
  const hide = message.loading('正在添加');

  try {
    await createSubject({ ...fields });
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
 * 更新节点
 *
 * @param fields
 */

const handleUpdate = async (fields: FormValueType, currentRow?: API.Subject) => {
  const hide = message.loading('正在修改');

  try {
    await updateSubject({
      id: currentRow?.subject_id ?? 0,
      ...fields,
    });
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
 * 删除节点
 *
 * @param selectedRows
 */

const handleRemove = async (selectedRows: API.Subject[]) => {
  const hide = message.loading('正在删除');
  if (!selectedRows) return true;

  try {
    await deleteSubject({
      ids: selectedRows.map((row) => row.subject_id ?? 0),
    });
    hide();
    message.success('删除成功，即将刷新');
    return true;
  } catch (error) {
    hide();
    message.error('删除失败，请重试');
    return false;
  }
};

const TableList: React.FC = () => {
  /** 新建窗口的弹窗 */
  const [createModalVisible, handleModalVisible] = useState<boolean>(false);
  /** 分布更新窗口的弹窗 */

  const [updateModalVisible, handleUpdateModalVisible] = useState<boolean>(false);
  const actionRef = useRef<ActionType>();
  const [currentRow, setCurrentRow] = useState<API.Subject>();
  const [selectedRowsState, setSelectedRows] = useState<API.Subject[]>([]);
  /** 国际化配置 */

  // 登录用户信息
  const { initialState } = useModel('@@initialState');
  const { currentUser } = initialState || {};

  const columns: ProColumns<API.Subject>[] = [
    // {
    //   title: '序号',
    //   dataIndex: 'index',
    //   tip: '',
    //   render: (dom, entity) => {
    //     return (
    //       <a
    //         onClick={() => {
    //           setCurrentRow(entity);
    //           setShowDetail(true);
    //         }}
    //       >
    //         {dom}
    //       </a>
    //     );
    //   },
    // },
    {
      title: '科目名称',
      dataIndex: 'name',
      tip: '',
    },
    {
      title: '科目简称',
      dataIndex: 'short_name',
      valueType: 'textarea',
    },
    {
      title: '操作',
      dataIndex: 'option',
      valueType: 'option',
      render: (_, record) => [
        <a
          key="config"
          onClick={() => {
            handleUpdateModalVisible(true);
            setCurrentRow(record);
          }}
        >
          配置
        </a>,
        <a key="subscribeAlert" href="https://procomponents.ant.design/">
          订阅警报
        </a>,
      ],
    },
  ];

  return (
    <PageContainer content="设置课表中涉及的所有科目信息">
      <ProTable<API.Subject, API.Pagination>
        headerTitle="全部"
        actionRef={actionRef}
        rowKey="subject_id"
        search={false}
        toolBarRender={() => [
          <Button
            type="primary"
            key="primary"
            onClick={() => {
              handleModalVisible(true);
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
          const ret = await getSubjectsByOrg({
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
            total: ret.data.list.total,
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
          <Button
            onClick={async () => {
              await handleRemove(selectedRowsState);
              setSelectedRows([]);
              actionRef.current?.reloadAndRest?.();
            }}
          >
            批量删除
          </Button>
        </FooterToolbar>
      )}
      <ModalForm
        title="新建科目"
        width="400px"
        open={createModalVisible}
        onVisibleChange={handleModalVisible}
        onFinish={async (value) => {
          const success = await handleAdd(value as API.Subject);
          if (success) {
            handleModalVisible(false);
            if (actionRef.current) {
              actionRef.current.reload();
            }
          }
        }}
      >
        <ProFormText name="org_id" initialValue={currentUser?.org_id || 0} hidden />
        <ProFormText
          label="科目名称"
          rules={[
            {
              required: true,
              message: '科目名称为不能为空',
            },
          ]}
          width="md"
          name="name"
        />
        <ProFormText
          label="科目简称"
          rules={[
            {
              message: '',
            },
          ]}
          width="md"
          name="short_name"
        />
        {/* <ProFormTextArea width="md" name="desc" /> */}
      </ModalForm>
      <UpdateForm
        onSubmit={async (value) => {
          const success = await handleUpdate(value, currentRow);

          if (success) {
            handleUpdateModalVisible(false);
            setCurrentRow(undefined);

            if (actionRef.current) {
              actionRef.current.reload();
            }
          }
        }}
        onCancel={() => {
          handleUpdateModalVisible(false);
          setCurrentRow(undefined);
        }}
        updateModalVisible={updateModalVisible}
        values={currentRow || {}}
      />
    </PageContainer>
  );
};

export default TableList;
