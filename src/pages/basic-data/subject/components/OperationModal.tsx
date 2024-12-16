// /schedule_admin/src/pages/basic-data/schedule/components/OperationModal.tsx
import { ModalForm, ProFormSelect, ProFormText, ProFormTextArea } from '@ant-design/pro-components';
import { Button } from 'antd';
import type { FC } from 'react';
import useStyles from '../style.style';

type OperationModalProps = {
  // 控制模态框的显示和隐藏。如果 open 为 true，模态框会显示；如果 open 为 false，模态框会隐藏
  open: boolean;
  // 表示当前正在编辑的课表数据。如果 current 有值，表示正在编辑一个已有的课表；如果 current 为 undefined，表示正在创建一个新的课表
  current: Partial<API.Subject> | undefined;
  // 点击取消
  onCancel: () => void;
  // 表单提交时的回调函数。当用户提交表单时，会调用这个函数，并将表单数据和操作类型（新建或编辑）作为参数传递给它
  onSubmit: (method: 'create' | 'update', values: API.Subject) => void;
  // 模态框的触发元素。通常是一个按钮或链接，用户点击它时会打开模态框
  children?: React.ReactNode;
  // 当前登录用户的信息
  currentUser: API.UserInfoResponse;
};

const OperationModal: FC<OperationModalProps> = (props) => {
  const { styles } = useStyles();
  const { open, current, onCancel, onSubmit, children, currentUser } = props;

  if (!open) {
    return null;
  }

  return (
    <ModalForm<API.Subject>
      open={open}
      title={current ? '科目编辑' : '新建科目'}
      className={styles.standardListForm}
      width={380}
      onFinish={async (values) => {
        const method = current ? 'update' : 'create';
        onSubmit(method, values);
      }}
      initialValues={{ ...current, org_id: currentUser.org_id }}
      submitter={{
        render: (_, dom) => dom,
      }}
      trigger={<>{children}</>}
      modalProps={{
        onCancel: () => onCancel(),
        destroyOnClose: true,
      }}
    >
      {current?.subject_id && <ProFormText name="subject_id" hidden />}
      <ProFormText name="org_id" hidden />
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
    </ModalForm>
  );
};

export default OperationModal;
