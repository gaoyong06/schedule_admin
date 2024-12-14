// /schedule_admin/src/pages/basic-data/schedule/components/OperationModal.tsx
import { ModalForm, ProFormSelect, ProFormText, ProFormTextArea } from '@ant-design/pro-components';
import { Button } from 'antd';
import type { FC } from 'react';
import useStyles from '../style.style';

type OperationModalProps = {
  // 控制模态框的显示和隐藏。如果 open 为 true，模态框会显示；如果 open 为 false，模态框会隐藏
  open: boolean;
  // 表示当前正在编辑的课表数据。如果 current 有值，表示正在编辑一个已有的课表；如果 current 为 undefined，表示正在创建一个新的课表
  current: Partial<API.Schedule> | undefined;
  // 点击取消
  onCancel: () => void;
  // 表单提交时的回调函数。当用户提交表单时，会调用这个函数，并将表单数据作为参数传递给它
  onSubmit: (values: API.Schedule) => void;
  // 模态框的触发元素。通常是一个按钮或链接，用户点击它时会打开模态框
  children?: React.ReactNode;
};

const OperationModal: FC<OperationModalProps> = (props) => {
  const { styles } = useStyles();
  const { open, current, onCancel, onSubmit, children } = props;

  if (!open) {
    return null;
  }

  return (
    <ModalForm<API.Schedule>
      open={open}
      title={current ? '课表编辑' : '新建课表'}
      className={styles.standardListForm}
      width={640}
      onFinish={async (values) => {
        onSubmit(values);
      }}
      initialValues={current}
      submitter={{
        render: (_, dom) => dom,
      }}
      trigger={<>{children}</>}
      modalProps={{
        onCancel: () => onCancel(),
        destroyOnClose: true,
      }}
    >
      {current?.schedule_id && <ProFormText name="schedule_id" hidden />}
      <ProFormText
        name="name"
        label="课表名称"
        rules={[
          {
            required: true,
            message: '请输入课表名称',
          },
        ]}
        placeholder="请输入课表名称"
      />

      <ProFormSelect
        name="num_workdays"
        label="工作日"
        tooltip="每周工作几天"
        rules={[{ required: true, message: '请选择工作日' }]}
        options={[
          {
            value: 1,
            label: '1天',
          },
          {
            value: 2,
            label: '2天',
          },
          {
            value: 3,
            label: '3天',
          },
          {
            value: 4,
            label: '4天',
          },
          {
            value: 5,
            label: '5天',
          },
          {
            value: 6,
            label: '6天',
          },
          {
            value: 7,
            label: '7天',
          },
        ]}
      />
      <ProFormSelect
        name="num_days_off"
        label="假期"
        tooltip="每周休息几天"
        rules={[{ required: true, message: '请选择假期' }]}
        options={[
          {
            value: 0,
            label: '无',
          },
          {
            value: 1,
            label: '1天',
          },
          {
            value: 2,
            label: '2天',
          },
          {
            value: 3,
            label: '3天',
          },
          {
            value: 4,
            label: '4天',
          },
          {
            value: 5,
            label: '5天',
          },
          {
            value: 6,
            label: '6天',
          },
          {
            value: 7,
            label: '7天',
          },
        ]}
      />

      <ProFormSelect
        name="num_morning_reading_classes"
        label="早读课时"
        tooltip="早读上几节课"
        rules={[{ required: true, message: '请选择早读课时' }]}
        options={[
          {
            value: 0,
            label: '无',
          },
          {
            value: 1,
            label: '1节课',
          },
          {
            value: 2,
            label: '2节课',
          },
          {
            value: 3,
            label: '3节课',
          },
          {
            value: 4,
            label: '4节课',
          },
        ]}
      />

      <ProFormSelect
        name="num_forenoon_classes"
        label="上午课时"
        tooltip="上午几节课"
        rules={[{ required: true, message: '请选择上午课时' }]}
        options={[
          {
            value: 0,
            label: '无',
          },
          {
            value: 1,
            label: '1节课',
          },
          {
            value: 2,
            label: '2节课',
          },
          {
            value: 3,
            label: '3节课',
          },
          {
            value: 4,
            label: '4节课',
          },
          {
            value: 5,
            label: '5节课',
          },
        ]}
      />

      <ProFormSelect
        name="num_afternoon_classes"
        label="下午课时"
        tooltip="下午几节课"
        rules={[{ required: true, message: '请选择下午课时' }]}
        options={[
          {
            value: 0,
            label: '无',
          },
          {
            value: 1,
            label: '1节课',
          },
          {
            value: 2,
            label: '2节课',
          },
          {
            value: 3,
            label: '3节课',
          },
          {
            value: 4,
            label: '4节课',
          },
          {
            value: 5,
            label: '5节课',
          },
        ]}
      />
      <ProFormSelect
        name="num_night_classes"
        label="晚自习课时"
        tooltip="晚自习几节课"
        rules={[{ required: true, message: '请选择晚自习课时' }]}
        options={[
          {
            value: 0,
            label: '无',
          },
          {
            value: 1,
            label: '1节课',
          },
          {
            value: 2,
            label: '2节课',
          },
          {
            value: 3,
            label: '3节课',
          },
          {
            value: 4,
            label: '4节课',
          },
        ]}
      />
      <ProFormTextArea
        name="desc"
        label="备注"
        rules={[
          {
            message: '请输入至少五个字符的备注！',
            min: 5,
          },
        ]}
        placeholder="请输入至少五个字符"
      />
    </ModalForm>
  );
};

export default OperationModal;
