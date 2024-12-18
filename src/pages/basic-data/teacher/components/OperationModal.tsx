// /schedule_admin/src/pages/basic-data/schedule/components/OperationModal.tsx
import { ModalForm, ProFormText, ProFormSelect } from '@ant-design/pro-components';
import type { FC } from 'react';

type OperationModalProps = {
  // 控制模态框的显示和隐藏。如果 open 为 true，模态框会显示；如果 open 为 false，模态框会隐藏
  open: boolean;
  // 表示当前正在编辑的课表数据。如果 current 有值，表示正在编辑一个已有的课表；如果 current 为 undefined，表示正在创建一个新的课表
  current: Partial<API.Teacher> | undefined;
  // 点击取消
  onCancel: () => void;
  // 表单提交时的回调函数。当用户提交表单时，会调用这个函数，并将表单数据和操作类型（新建或编辑）作为参数传递给它
  onSubmit: (method: 'create' | 'update', values: API.Teacher) => void;
  // 模态框的触发元素。通常是一个按钮或链接，用户点击它时会打开模态框
  children?: React.ReactNode;
  // 当前登录用户的信息
  currentUser: API.UserInfoResponse | undefined;
};

const OperationModal: FC<OperationModalProps> = (props) => {
  const { open, current, onCancel, onSubmit, children, currentUser } = props;

  if (!open) {
    return null;
  }

  return (
    <ModalForm<API.Teacher>
      open={open}
      title={current ? '教师编辑' : '添加教师'}
      width={380}
      onFinish={async (values) => {
        const method = current ? 'update' : 'create';

        // 手动将 main_subject,is_active 转换为数字类型
        values.main_subject = Number(values.main_subject);
        values.is_active = Number(values.is_active);
        onSubmit(method, values);
      }}
      // ProFormSelect的内容回显,注意这里的数字也字符串的转换
      // API接口需要数字类型,ProFormSelect里面需要字符串类型
      // 两侧需要转换一下
      // https://www.codeleading.com/article/68006611014/
      initialValues={{
        ...current,
        org_id: currentUser?.org_id,
        main_subject: String(current?.main_subject),
        is_active: String(current?.is_active),
      }}
      submitter={{
        render: (_, dom) => dom,
      }}
      trigger={<>{children}</>}
      modalProps={{
        onCancel: () => onCancel(),
        destroyOnClose: true,
      }}
    >
      {current?.teacher_id && <ProFormText name="teacher_id" hidden />}
      <ProFormText name="org_id" hidden />
      <ProFormText
        label="姓名"
        rules={[
          {
            required: true,
            message: '教师信息为不能为空',
          },
        ]}
        width="md"
        name="name"
      />

      <ProFormText
        label="教师简称"
        rules={[
          {
            message: '教师简称为了便于在课程表单元格上显示',
          },
        ]}
        width="md"
        name="short_name"
      />

      <ProFormSelect
        name="main_subject"
        width="md"
        label="主授科目"
        valueEnum={{
          1: '语文',
          2: '数学',
          3: '英语',
        }}
      />
      <ProFormText
        label="手机号码"
        rules={[
          {
            message: '',
          },
        ]}
        width="md"
        name="phone"
      />

      <ProFormSelect
        name="is_active"
        width="md"
        label="在职状态"
        valueEnum={{
          '1': '在职',
          '2': '离职',
        }}
      />
    </ModalForm>
  );
};

export default OperationModal;
