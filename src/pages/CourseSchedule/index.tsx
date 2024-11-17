import { Button, Card, Checkbox, message } from 'antd';
import { useState } from 'react';
import './index.less';

const CourseSchedule = () => {
  const [selectedGrades, setSelectedGrades] = useState([]);
  const [selectedClasses, setSelectedClasses] = useState([]);

  const grades = [
    { label: '七年级', value: 'grade7' },
    { label: '八年级', value: 'grade8' },
    { label: '九年级', value: 'grade9' },
  ];

  const classes = [
    { label: '七年级1班', value: 'grade7_class1' },
    { label: '七年级2班', value: 'grade7_class2' },
    { label: '七年级3班', value: 'grade7_class3' },
    { label: '七年级4班', value: 'grade7_class4' },
    { label: '七年级5班', value: 'grade7_class5' },
    { label: '七年级6班', value: 'grade7_class6' },
    { label: '八年级1班', value: 'grade8_class1' },
    { label: '八年级2班', value: 'grade8_class2' },
    { label: '八年级3班', value: 'grade8_class3' },
    { label: '八年级4班', value: 'grade8_class4' },
    { label: '八年级5班', value: 'grade8_class5' },
    { label: '八年级6班', value: 'grade8_class6' },
    { label: '九年级1班', value: 'grade9_class1' },
    { label: '九年级2班', value: 'grade9_class2' },
    { label: '九年级3班', value: 'grade9_class3' },
    { label: '九年级4班', value: 'grade9_class4' },
    { label: '九年级5班', value: 'grade9_class5' },
    { label: '九年级6班', value: 'grade9_class6' },
  ];

  const handleGradeChange = (e) => {
    setSelectedGrades(e);
  };

  const handleClassChange = (e) => {
    setSelectedClasses(e);
  };

  const startScheduling = () => {
    if (selectedGrades.length === 0 || selectedClasses.length === 0) {
      message.error('请选择年级和班级');
      return;
    }
    message.success('开始排课');
    // 在这里添加排课逻辑
  };

  return (
    <div className="course-schedule">
      <div className="course-schedule-left">
        <Card title="年级选择">
          <Checkbox.Group options={grades} value={selectedGrades} onChange={handleGradeChange} />
        </Card>
        <Card title="班级选择">
          <Checkbox.Group options={classes} value={selectedClasses} onChange={handleClassChange} />
        </Card>
      </div>
      <div className="course-schedule-right">
        <Button type="primary" onClick={startScheduling}>
          开始排课
        </Button>
        <div className="scheduling-result">{/* 排课结果显示区域 */}</div>
      </div>
    </div>
  );
};

export default CourseSchedule;
