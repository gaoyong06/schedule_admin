import { Button, Input, Modal, Table, Tree } from 'antd';
import { useState } from 'react';
import './index.less';

const { TreeNode } = Tree;

const SubjectRule = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [groupName, setGroupName] = useState('');
  const [treeData, setTreeData] = useState([]);
  const [selectedKeys, setSelectedKeys] = useState([]);
  const [subjectList, setSubjectList] = useState([
    { id: 1, name: '语文', priority: '上午', prohibit: '1' },
    { id: 2, name: '数学', priority: '上午', prohibit: '1' },
    { id: 3, name: '英语', priority: '上午', prohibit: '1' },
    { id: 4, name: '体育', priority: '下午', prohibit: '1' },
    { id: 5, name: '美术', priority: '下午', prohibit: '1' },
    // 其他科目...
  ]);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    if (groupName) {
      setTreeData([...treeData, { title: groupName, key: groupName }]);
      setGroupName('');
    }
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const onSelect = (selectedKeys, info) => {
    setSelectedKeys(selectedKeys);
  };

  const columns = [
    {
      title: '科目',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: '优先排课',
      dataIndex: 'priority',
      key: 'priority',
    },
    {
      title: '禁排',
      dataIndex: 'prohibit',
      key: 'prohibit',
    },
  ];

  return (
    <div className="subject-rule">
      <Button type="primary" onClick={showModal}>
        新增科目分组
      </Button>
      <Modal title="新增科目分组" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <Input
          placeholder="请输入分组名称"
          value={groupName}
          onChange={(e) => setGroupName(e.target.value)}
        />
      </Modal>
      <div className="tree-container">
        <Tree onSelect={onSelect} treeData={treeData}></Tree>
      </div>
      <div className="table-container">
        <Table dataSource={subjectList} columns={columns} rowKey="id" />
      </div>
    </div>
  );
};

export default SubjectRule;
