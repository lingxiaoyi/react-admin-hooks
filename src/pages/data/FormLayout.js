import React, { useState } from 'react';
import { Form, DatePicker, Input, Select, Button } from 'antd';
import moment from 'moment';

const { RangePicker } = DatePicker;
const { Option } = Select;

export default ({
  loading,
  defaultValue,
  onFormChange = () => {}
}) => {

  const [formData, setFormData] = useState({...defaultValue})

  function changeForm(k, v) {
    formData[k] = v;
    setFormData({...formData})
  }

  return (
    <div className="page-toolbar">
      <Form className="page-toolbar-form" layout="inline">
        <Form.Item label="时间">
          <RangePicker
            allowClear={false}
            onChange={(M, date) => {
              changeForm('startDate', date[0].split('-').join(''))
              changeForm('endDate', date[1].split('-').join(''))
            }}
            value={[moment(formData.startDate, 'YYYYMMDD'), moment(formData.endDate, 'YYYYMMDD')]} />
        </Form.Item>
        <Form.Item label="广告位类型">
          <Select>
            <Option value="">不限</Option>
          </Select>
        </Form.Item>
        <Form.Item label="帐户">
          <Select>
            <Option value="">不限</Option>
          </Select>
        </Form.Item>
        <Form.Item label="应用/广告位">
          <Input/>
        </Form.Item>
      </Form>
      <div className="page-toolbar-btns">
        <Button
        loading={loading}
        htmlType="submit"
        onClick={() => onFormChange(formData)}
        type="primary">筛选</Button>
        <a onClick={() => {setFormData({...defaultValue})}}>清空已选</a>
      </div>
    </div>
  )
}