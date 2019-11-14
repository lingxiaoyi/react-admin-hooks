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
        <Form.Item label="帐户">
          <Input/>
        </Form.Item>
        <Form.Item label="用户状态">
          <Select>
            <Option value="">不限</Option>
          </Select>
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