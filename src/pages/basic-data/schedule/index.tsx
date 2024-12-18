// /schedule_admin/src/pages/basic-data/schedule/index.tsx
import { createFromIconfontCN, DownOutlined, PlusOutlined } from '@ant-design/icons';
import { PageContainer } from '@ant-design/pro-components';
import { useModel, useRequest } from '@umijs/max';
import { Avatar, Badge, Button, Card, Dropdown, Input, List, Modal, Radio } from 'antd';
import dayjs from 'dayjs';
import type { FC } from 'react';
import React, { useState } from 'react';
import {
  createSchedule,
  deleteSchedule,
  getSchedulesByOrg,
  updateSchedule,
} from '../../../services/api/schedule';
import OperationModal from './components/OperationModal';
import useStyles from './style.style';
import { message } from 'antd';
import { SCHEDULE_STATUS_LABELS } from '@/constants/schedule-status';

const IconFont = createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js',
});

const animalIcons = [
  { icon: '🐰', color: '#ffd6e7' }, // 兔子
  { icon: '🦊', color: '#ffe4cc' }, // 狐狸
  { icon: '🐼', color: '#e8f4f8' }, // 熊猫
  { icon: '🦁', color: '#fff4cc' }, // 狮子
  { icon: '🐨', color: '#e6f3ff' }, // 考拉
  { icon: '🦉', color: '#f4e3ff' }, // 猫头鹰
  { icon: '🐱', color: '#ffe6e6' }, // 猫咪
];

const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;
const { Search } = Input;
const Info: FC<{
  title: React.ReactNode;
  value: React.ReactNode;
  bordered?: boolean;
}> = ({ title, value, bordered }) => {
  const { styles } = useStyles();
  return (
    <div className={styles.headerInfo}>
      <span>{title}</span>
      <p>{value}</p>
      {bordered && <em />}
    </div>
  );
};
const ListContent = ({
  data: { created_by, created_nickname, created_at, updated_at, status, name, desc },
}: {
  data: API.Schedule;
}) => {
  const { styles } = useStyles();

  const getBadgeStatus = (status: string | undefined) => {
    switch (status) {
      case 'pending':
        return 'default';
      case 'running':
        return 'processing';
      case 'success':
        return 'success';
      case 'failed':
        return 'error';
      case 'completed':
        return 'warning';
      case 'published':
        return 'default';
      default:
        return 'default';
    }
  };

  return (
    <div>
      <div className={styles.listContentItem}>
        <span>创建者</span>
        <p>{created_nickname}</p>
      </div>
      <div className={styles.listContentItem}>
        <span>创建时间</span>
        <p>{dayjs(created_at).format('YYYY-MM-DD HH:mm')}</p>
      </div>
      <div className={styles.listContentItem}>
        <span>最近修改</span>
        <p>{dayjs(updated_at).format('YYYY-MM-DD HH:mm')}</p>
      </div>
      <div className={styles.listContentItem}>
        <p>
          <Badge status={getBadgeStatus(status)} text={SCHEDULE_STATUS_LABELS[status]} />
        </p>
      </div>
    </div>
  );
};
export const ScheduleList: FC = () => {
  const { initialState } = useModel('@@initialState');
  const { currentUser } = initialState || {};

  const { styles } = useStyles();
  const [open, setVisible] = useState<boolean>(false);
  const [current, setCurrent] = useState<Partial<API.Schedule> | undefined>(undefined);
  const [list, setList] = useState<API.Schedule[]>([]);

  const {
    data: listData,
    loading,
    mutate,
  } = useRequest(
    () => {
      return getSchedulesByOrg({
        org_id: currentUser?.org_id || 0,
        current: 1,
        page_size: 50,
      });
    },
    {
      onSuccess: (result) => {
        setList(result.list);
      },
    },
  );

  const { run: postRun } = useRequest(
    (method: string, params: any) => {
      if (method === 'delete') {
        return deleteSchedule({ id: params.schedule_id });
      }
      if (method === 'update') {
        return updateSchedule({ id: params.schedule_id }, params);
      }
      return createSchedule(params);
    },
    {
      // 表示请求不会自动执行，需要手动调用 postRun
      manual: true,
      onSuccess: (result, params) => {
        if (params[0] === 'delete') {
          setList(list.filter((item) => item.schedule_id !== params[1].schedule_id));
        } else if (params[0] === 'update') {
          setList(list.map((item) => (item.schedule_id === params[1].schedule_id ? result : item)));
          handleCancel();
        } else if (params[0] === 'add') {
          setList([result, ...list]);
          handleCancel();
        } else {
          console.error(params[0], ' action failed');
        }
        message.success('操作成功');
      },
    },
  );

  const paginationProps = {
    showSizeChanger: false,
    showQuickJumper: false,
    pageSize: 10,
    total: list.length,
  };

  const showEditModal = (item: API.Schedule) => {
    setVisible(true);
    setCurrent(item);
  };

  const deleteItem = (schedule_id: number) => {
    postRun('delete', { schedule_id });
  };

  const editAndDelete = (key: string | number, currentItem: API.Schedule) => {
    if (key === 'edit') showEditModal(currentItem);
    else if (key === 'delete') {
      Modal.confirm({
        title: '删除课表',
        content: '确定删除该课表吗？',
        okText: '确认',
        cancelText: '取消',
        onOk: () => deleteItem(currentItem.schedule_id),
      });
    }
  };

  const extraContent = (
    <div>
      <Button
        type="primary"
        key="primary"
        onClick={() => {
          setCurrent(undefined); // 重置current状态
          setVisible(true);
        }}
        style={{
          marginRight: '16px',
        }}
      >
        <PlusOutlined />
        新建
      </Button>
    </div>
  );

  const MoreBtn: React.FC<{
    item: API.Schedule;
  }> = ({ item }) => (
    <Dropdown
      menu={{
        onClick: ({ key }) => editAndDelete(key, item),
        items: [
          {
            key: 'edit',
            label: '编辑',
          },
          {
            key: 'delete',
            label: '删除',
          },
        ],
      }}
    >
      <a>
        更多 <DownOutlined />
      </a>
    </Dropdown>
  );

  const handleCancel = () => {
    setVisible(false);
    setCurrent(undefined);
  };

  const handleSubmit = (values: API.Schedule) => {
    const method = values?.schedule_id ? 'update' : 'add';
    postRun(method, values);
  };

  return (
    <div>
      <PageContainer content="设置每周的上课天数，每天的上课节数">
        <div className={styles.standardList}>
          <Card
            className={styles.listCard}
            bordered={false}
            title="全部"
            style={{
              marginTop: 24,
            }}
            bodyStyle={{
              padding: '0 32px 40px 32px',
            }}
            extra={extraContent}
          >
            <List
              size="large"
              rowKey="schedule_id"
              loading={loading}
              pagination={paginationProps}
              dataSource={list}
              renderItem={(item: API.Schedule) => (
                <List.Item
                  actions={[
                    <a
                      key="edit"
                      onClick={(e) => {
                        e.preventDefault();
                        showEditModal(item);
                      }}
                    >
                      编辑
                    </a>,
                    <MoreBtn key="more" item={item} />,
                  ]}
                >
                  <List.Item.Meta
                    avatar={
                      <Avatar
                        shape="square"
                        size={48}
                        style={{
                          backgroundColor:
                            animalIcons[
                              (item.name || 'default')
                                .split('')
                                .reduce((acc, char) => acc + char.charCodeAt(0), 0) %
                                animalIcons.length
                            ].color,
                          fontSize: '28px',
                          display: 'flex',
                          justifyContent: 'center',
                          alignItems: 'center',
                          boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                          border: '2px solid #fff',
                          fontFamily: '"Segoe UI Emoji", "Noto Color Emoji", sans-serif',
                        }}
                      >
                        {
                          animalIcons[
                            (item.name || 'default')
                              .split('')
                              .reduce((acc, char) => acc + char.charCodeAt(0), 0) %
                              animalIcons.length
                          ].icon
                        }
                      </Avatar>
                    }
                    title={
                      // <a href={`/basic-data/schedule/detail/${item.schedule_id}`}>{item.name}</a>
                      item.name
                    }
                    description={
                      <div className={styles.description} title={item.desc}>
                        {item.desc}
                      </div>
                    }
                  />
                  <ListContent data={item} />
                </List.Item>
              )}
            />
          </Card>
        </div>
      </PageContainer>

      <OperationModal
        open={open}
        current={current}
        onCancel={handleCancel}
        onSubmit={handleSubmit}
        currentUser={currentUser}
      />
    </div>
  );
};

export default ScheduleList;
