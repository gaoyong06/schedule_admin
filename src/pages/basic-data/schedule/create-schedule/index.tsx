import {
  PageContainer,
  ProForm,
  ProFormDateRangePicker,
  ProFormDependency,
  ProFormDigit,
  ProFormRadio,
  ProFormSelect,
  ProFormText,
  ProFormTextArea,
} from '@ant-design/pro-components';
import { useRequest } from '@umijs/max';
import { Card, message } from 'antd';
import type { FC } from 'react';
import { fakeSubmitForm } from './service';
import useStyles from './style.style';
const CreateSchedule: FC<Record<string, any>> = () => {
  const { styles } = useStyles();
  const { run } = useRequest(fakeSubmitForm, {
    manual: true,
    onSuccess: () => {
      message.success('提交成功');
    },
  });
  const onFinish = async (values: Record<string, any>) => {
    run(values);
  };
  return (
    <PageContainer content="表单页用于向用户收集或验证信息，基础表单常见于数据项较少的表单场景。">
      <Card bordered={false}>
        <ProForm
          hideRequiredMark
          style={{
            margin: 'auto',
            marginTop: 8,
            maxWidth: 600,
          }}
          name="basic"
          layout="vertical"
          initialValues={{
            public: '1',
          }}
          onFinish={onFinish}
        >
          <ProFormText
            width="md"
            label="课表名称"
            name="title"
            rules={[
              {
                required: true,
                message: '请输入课表名称',
              },
            ]}
            placeholder="请输入课表名称"
          />
          <ProFormSelect
            width="md"
            label="工作日"
            tooltip="每周工作几天"
            name="num_workdays"
            rules={[{ required: true, message: '请选择工作日' }]}
            options={[
              {
                value: '1',
                label: '1天',
              },
              {
                value: '2',
                label: '2天',
              },
              {
                value: '3',
                label: '3天',
              },
              {
                value: '4',
                label: '4天',
              },
              {
                value: '5',
                label: '5天',
              },
              {
                value: '6',
                label: '6天',
              },
              {
                value: '7',
                label: '7天',
              },
            ]}
          />
          <ProFormSelect
            width="md"
            label="假期"
            tooltip="每周休息几天"
            name="num_days_off"
            rules={[{ required: true, message: '请选择假期' }]}
            options={[
              {
                value: '1',
                label: '1天',
              },
              {
                value: '2',
                label: '2天',
              },
              {
                value: '3',
                label: '3天',
              },
              {
                value: '4',
                label: '4天',
              },
              {
                value: '5',
                label: '5天',
              },
              {
                value: '6',
                label: '6天',
              },
              {
                value: '7',
                label: '7天',
              },
            ]}
          />

          <ProFormSelect
            width="md"
            label="早读课时"
            tooltip="早读上几节课"
            name="num_morning_reading_classes"
            rules={[{ required: true, message: '请选择早读课时' }]}
            options={[
              {
                value: '1',
                label: '1节',
              },
              {
                value: '2',
                label: '2节',
              },
              {
                value: '3',
                label: '3节',
              },
              {
                value: '4',
                label: '4节',
              },
            ]}
          />

          <ProFormSelect
            width="md"
            label="上午课时"
            tooltip="上午几节课"
            name="num_forenoon_classes"
            rules={[{ required: true, message: '请选择上午课时' }]}
            options={[
              {
                value: '1',
                label: '1节',
              },
              {
                value: '2',
                label: '2节',
              },
              {
                value: '3',
                label: '3节',
              },
              {
                value: '4',
                label: '4节',
              },
              {
                value: '5',
                label: '5节',
              },
            ]}
          />

          <ProFormSelect
            width="md"
            label="下午课时"
            tooltip="下午几节课"
            name="num_afternoon_classes"
            rules={[{ required: true, message: '请选择下午课时' }]}
            options={[
              {
                value: '1',
                label: '1节',
              },
              {
                value: '2',
                label: '2节',
              },
              {
                value: '3',
                label: '3节',
              },
              {
                value: '4',
                label: '4节',
              },
              {
                value: '5',
                label: '5节',
              },
            ]}
          />
          <ProFormSelect
            width="md"
            label="晚自习课时"
            tooltip="晚自习几节课"
            name="num_night_classes"
            rules={[{ required: true, message: '请选择晚自习课时' }]}
            options={[
              {
                value: '1',
                label: '1节',
              },
              {
                value: '2',
                label: '2节',
              },
              {
                value: '3',
                label: '3节',
              },
              {
                value: '4',
                label: '4节',
              },
            ]}
          />
        </ProForm>
      </Card>
    </PageContainer>
  );
};
export default CreateSchedule;
