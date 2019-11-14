import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Form, Input, Button, Checkbox } from 'antd';
import '@/styles/login.scss';
import api from '@/services/api';
import { useAuthStore } from '@/hooks/useAuth';

export default Form.create({ name: 'login' })(({ form }) => {
  const [loading, setLoading] = useState(false)
  const [state, dispatch] = useAuthStore()
  
  function handleSubmit(e) {
    e.preventDefault()
    form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values)
        setLoading(true)
        dispatch({type: 'login', payload: values}).then(res => res && setLoading(false))
      }
    })
  }
  
  const { getFieldDecorator } = form;
  
  return (
    <div className="login-page">
      <div className="login-panel">
        <div className="login-header">SSP运营后台登录</div>
        <div className="login-content">
          <Form onSubmit={handleSubmit} className="login-form">
            <Form.Item>
              {getFieldDecorator('username', {
                rules: [{ required: true, message: '用户名不能为空' }],
              })(
                <Input
                  size="large"
                  placeholder="用户名"/>
              )}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator('password', {
                rules: [{ required: true, message: '密码不能为空' }],
              })(
                <Input
                  size="large"
                  type="password"
                  placeholder="请输入密码"/>
              )}
            </Form.Item>
            <Form.Item>
              <Button
                block
                size="large"
                type="primary"
                className="mt10"
                loading={loading}
                htmlType="submit">登录</Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  )
})