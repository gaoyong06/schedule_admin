import { Modal, Radio, Table, Tree } from 'antd';
import { useState } from 'react';
import './index.less';

const { TreeNode } = Tree;
const { Column } = Table;

const ClassRule = () => {
  const [selectedKeys, setSelectedKeys] = useState([]);
  const [scheduleData, setScheduleData] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedCell, setSelectedCell] = useState(null);
  const [selectedOption, setSelectedOption] = useState('standard');

  const treeData = [
    {
      title: '七年级',
      key: 'grade-7',
      children: [
        { title: '七年级1班', key: 'class-7-1' },
        { title: '七年级2班', key: 'class-7-2' },
        // 其他班级
      ],
    },
    {
      title: '八年级',
      key: 'grade-8',
      children: [
        { title: '八年级1班', key: 'class-8-1' },
        { title: '八年级2班', key: 'class-8-2' },
        // 其他班级
      ],
    },
    // 其他年级
  ];

  const onSelect = (selectedKeys, info) => {
    setSelectedKeys(selectedKeys);
  };

  const handleCellClick = (rowIndex, cellIndex) => {
    setSelectedCell({ rowIndex, cellIndex });
    setIsModalVisible(true);
  };

  const handleModalOk = () => {
    // 处理确认逻辑
    setIsModalVisible(false);
    const updatedData = [...scheduleData];
    updatedData[selectedCell.rowIndex][selectedCell.cellIndex] = selectedOption;
    setScheduleData(updatedData);
  };

  const handleModalCancel = () => {
    setIsModalVisible(false);
  };

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const renderScheduleTable = () => {
    const columns = [
      { title: '节次', dataIndex: 'period', key: 'period' },
      { title: '周一', dataIndex: 'monday', key: 'monday' },
      { title: '周二', dataIndex: 'tuesday', key: 'tuesday' },
      { title: '周三', dataIndex: 'wednesday', key: 'wednesday' },
      { title: '周四', dataIndex: 'thursday', key: 'thursday' },
      { title: '周五', dataIndex: 'friday', key: 'friday' },
    ];

    const dataSource = [
      {
        key: '1',
        period: '1',
        monday: '',
        tuesday: '',
        wednesday: '',
        thursday: '',
        friday: '',
      },
      {
        key: '2',
        period: '2',
        monday: '',
        tuesday: '',
        wednesday: '',
        thursday: '',
        friday: '',
      },
      {
        key: '3',
        period: '3',
        monday: '',
        tuesday: '',
        wednesday: '',
        thursday: '',
        friday: '',
      },
      {
        key: '4',
        period: '4',
        monday: '',
        tuesday: '',
        wednesday: '',
        thursday: '',
        friday: '',
      },
      {
        key: '5',
        period: '5',
        monday: '',
        tuesday: '',
        wednesday: '',
        thursday: '',
        friday: '',
      },
      {
        key: '6',
        period: '6',
        monday: '',
        tuesday: '',
        wednesday: '',
        thursday: '',
        friday: '',
      },
      {
        key: '7',
        period: '7',
        monday: '',
        tuesday: '',
        wednesday: '',
        thursday: '',
        friday: '',
      },
    ];

    return (
      <Table
        columns={columns}
        dataSource={dataSource}
        onCell={(record, rowIndex, columnIndex) => ({
          onClick: () => handleCellClick(rowIndex, columnIndex),
          style: {
            backgroundColor:
              dataSource[rowIndex][columns[columnIndex].dataIndex] === 'forbidden'
                ? '#ffcccc'
                : dataSource[rowIndex][columns[columnIndex].dataIndex] === 'excellent'
                ? '#ccffcc'
                : dataSource[rowIndex][columns[columnIndex].dataIndex] === 'good'
                ? '#ffffcc'
                : '#ffffff',
          },
        })}
      />
    );
  };

  return (
    <div className="class-rule">
      <div className="grade-class-area">
        <Tree
          onSelect={onSelect}
          selectedKeys={selectedKeys}
          style={{ width: 200, marginRight: 20 }}
        >
          {treeData.map((node) => (
            <TreeNode title={node.title} key={node.key}>
              {node.children &&
                node.children.map((child) => <TreeNode title={child.title} key={child.key} />)}
            </TreeNode>
          ))}
        </Tree>
      </div>
      <div className="subject-detail-area">
        <Table
          dataSource={[
            {
              key: '1',
              grade: '七年级',
              class: '七年级1班',
              subject: '语文',
              fixed: '是',
              prohibited: '否',
              hoursPerWeek: 1,
              totalHours: 1,
            },
          ]}
        >
          <Column title="年级" dataIndex="grade" key="grade" />
          <Column title="班级" dataIndex="class" key="class" />
          <Column title="科目" dataIndex="subject" key="subject" />
          <Column title="固排" dataIndex="fixed" key="fixed" />
          <Column title="禁排" dataIndex="prohibited" key="prohibited" />
          <Column title="每周课时" dataIndex="hoursPerWeek" key="hoursPerWeek" />
          <Column title="学时" dataIndex="totalHours" key="totalHours" />
        </Table>
      </div>
      <div className="schedule-area">{renderScheduleTable()}</div>
      <Modal
        title="设置固排禁排"
        visible={isModalVisible}
        onOk={handleModalOk}
        onCancel={handleModalCancel}
      >
        <Radio.Group onChange={handleOptionChange} value={selectedOption}>
          <Radio value="forbidden">禁排</Radio>
          <Radio value="excellent">非常好</Radio>
          <Radio value="good">较差</Radio>
          <Radio value="standard">标准</Radio>
        </Radio.Group>
      </Modal>
    </div>
  );
};

export default ClassRule;
