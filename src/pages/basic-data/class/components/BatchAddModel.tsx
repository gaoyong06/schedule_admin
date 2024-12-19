import { ModalForm, ProFormList, ProFormDigit } from '@ant-design/pro-components';
import type { FC } from 'react';
import { Row, Col } from 'antd';

type BatchAddModelProps = {
  open: boolean;
  grades: API.Grade[];
  onCancel: () => void;
  onSubmit: (values: API.BatchCreateClassReq) => void;
  currentUser: API.UserInfoResponse | undefined;
  children?: React.ReactNode;
};

const BatchAddModel: FC<BatchAddModelProps> = (props) => {
  const { open, grades, onCancel, onSubmit, children, currentUser } = props;

  if (!open) {
    return null;
  }

  return (
    <ModalForm<API.BatchCreateClassReq>
      open={open}
      title="添加班级"
      width={500}
      onFinish={async (values) => {
        const gradeClassCounts = values.gradeClassCounts;

        console.log('===== onFinish =====');
        console.log(gradeClassCounts);

        // 直接传递 gradeClassCounts 数组
        onSubmit(gradeClassCounts);
      }}
      submitter={{
        render: (_, dom) => dom,
      }}
      modalProps={{
        onCancel: () => onCancel(),
        destroyOnClose: true,
      }}
      trigger={<>{children}</>}
    >
      <ProFormList
        name="gradeClassCounts"
        initialValue={grades.map((grade) => ({
          org_id: currentUser?.org_id,
          // TODO: stage_id后面再增加
          stage_id: 0,
          grade_id: grade.grade_id,
          grade_name: grade.name || '',
          class_count: undefined,
        }))}
        itemRender={(dom, listMeta) => {
          console.log(listMeta); // 检查 listMeta 的结构

          const gradeName = listMeta?.record?.grade_name || '未命名年级';
          return (
            <Row key={listMeta.index} gutter={8}>
              {/* 调整gutter值 */}
              <Col span={3}>
                <span>{gradeName}</span>
              </Col>
              <Col span={12}>
                <ProFormDigit
                  name="class_count"
                  placeholder="请输入班级数量"
                  rules={[
                    { required: true, message: '班级数量不能为空' },
                    // { min: 1, message: '班级数量至少为1' },
                  ]}
                  // validateTrigger="onChange"
                />
              </Col>
            </Row>
          );
        }}
        // 移除所有动作按钮
        actionRender={() => []}
        // 移除添加一行
        creatorButtonProps={false}
      />
    </ModalForm>
  );
};

export default BatchAddModel;
