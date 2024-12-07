import { ModalForm, ProFormSelect, ProFormText, ProFormTextArea } from '@ant-design/pro-components';
import { Button, Result } from 'antd';
import type { FC } from 'react';
import type { BasicListItemDataType } from '../data';
import useStyles from '../style.style';
type OperationModalProps = {
  done: boolean;
  open: boolean;
  current: Partial<BasicListItemDataType> | undefined;
  onDone: () => void;
  onSubmit: (values: BasicListItemDataType) => void;
  children?: React.ReactNode;
};
const OperationModal: FC<OperationModalProps> = (props) => {
  const { styles } = useStyles();
  const { done, open, current, onDone, onSubmit, children } = props;
  if (!open) {
    return null;
  }
  return (
    <ModalForm<BasicListItemDataType>
      open={open}
      title={done ? null : current ? '课表编辑' : '新建课表'}
      className={styles.standardListForm}
      width={640}
      onFinish={async (values) => {
        onSubmit(values);
      }}
      initialValues={current}
      submitter={{
        render: (_, dom) => (done ? null : dom),
      }}
      trigger={<>{children}</>}
      modalProps={{
        onCancel: () => onDone(),
        destroyOnClose: true,
        bodyStyle: done
          ? {
              padding: '72px 0',
            }
          : {},
      }}
    >
      {!done ? (
        <>
          <ProFormText
            name="title"
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
            name="numWorkdays"
            label="工作日"
            tooltip="每周工作几天"
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
            name="numDaysOff"
            label="假期"
            tooltip="每周休息几天"
            rules={[{ required: true, message: '请选择假期' }]}
            options={[
              {
                value: '0',
                label: '无',
              },
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
            name="numMorningReadingClasses"
            label="早读课时"
            tooltip="早读上几节课"
            rules={[{ required: true, message: '请选择早读课时' }]}
            options={[
              {
                value: '0',
                label: '无',
              },
              {
                value: '1',
                label: '1节课',
              },
              {
                value: '2',
                label: '2节课',
              },
              {
                value: '3',
                label: '3节课',
              },
              {
                value: '4',
                label: '4节课',
              },
            ]}
          />

          <ProFormSelect
            name="numForenoonClasses"
            label="上午课时"
            tooltip="上午几节课"
            rules={[{ required: true, message: '请选择上午课时' }]}
            options={[
              {
                value: '0',
                label: '无',
              },
              {
                value: '1',
                label: '1节课',
              },
              {
                value: '2',
                label: '2节课',
              },
              {
                value: '3',
                label: '3节课',
              },
              {
                value: '4',
                label: '4节课',
              },
              {
                value: '5',
                label: '5节课',
              },
            ]}
          />

          <ProFormSelect
            name="numAfternoonClasses"
            label="下午课时"
            tooltip="下午几节课"
            rules={[{ required: true, message: '请选择下午课时' }]}
            options={[
              {
                value: '0',
                label: '无',
              },
              {
                value: '1',
                label: '1节课',
              },
              {
                value: '2',
                label: '2节课',
              },
              {
                value: '3',
                label: '3节课',
              },
              {
                value: '4',
                label: '4节课',
              },
              {
                value: '5',
                label: '5节课',
              },
            ]}
          />
          <ProFormSelect
            name="numNightClasses"
            label="晚自习课时"
            tooltip="晚自习几节课"
            rules={[{ required: true, message: '请选择晚自习课时' }]}
            options={[
              {
                value: '0',
                label: '无',
              },
              {
                value: '1',
                label: '1节课',
              },
              {
                value: '2',
                label: '2节课',
              },
              {
                value: '3',
                label: '3节课',
              },
              {
                value: '4',
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
        </>
      ) : (
        <Result
          status="success"
          title="操作成功"
          subTitle="一系列的信息描述，很短同样也可以带标点。"
          extra={
            <Button type="primary" onClick={onDone}>
              知道了
            </Button>
          }
          className={styles.formResult}
        />
      )}
    </ModalForm>
  );
};
export default OperationModal;
