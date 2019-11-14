import React, { useState } from 'react';
import { Form, Input, Select, Button } from 'antd';

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
        <Form.Item label="广告样式">
          <Select>
            <Option value="">不限</Option>
          </Select>
        </Form.Item>
        <Form.Item label="DSP上游">
          <Select>
            <Option value="">不限</Option>
          </Select>
        </Form.Item>
        <Form.Item label="关键词">
          <Input
            placeholder="广告位ID/媒体ID模糊搜索"/>
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
