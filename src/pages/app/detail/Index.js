import React, { Fragment } from 'react';
import { Form, Input, Button } from 'antd';

export default () => {
  return (
    <Fragment>
      <div className="main-subtitle">应用审核 / 应用详情</div>
      <div className="page-form">
        <Form layout="horizontal" className="form-flex">
          <Form.Item label="公司名称" required>
            <Input
              readOnly
              size="large"/>
          </Form.Item>
          <Form.Item label="用户ID" required>
            <Input
              readOnly
              size="large"/>
          </Form.Item>
          <Form.Item label="媒体名称" required>
            <Input
              readOnly
              size="large"/>
          </Form.Item>
          <Form.Item label="媒体ID" required>
            <Input
              readOnly
              size="large"/>
          </Form.Item>
          <Form.Item label="所属行业" required>
            <Input
              readOnly
              size="large"/>
          </Form.Item>
          <Form.Item label="媒体类型" required>
            <Input
              readOnly
              size="large"/>
          </Form.Item>
          <Form.Item label="接入方式" required>
            <Input
              readOnly
              size="large"/>
          </Form.Item>
          <Form.Item label="系统平台" required>
            <Input
              readOnly
              size="large"/>
          </Form.Item>
          <Form.Item label="下载地址" required>
            <Input
              readOnly
              size="large"/>
          </Form.Item>
          <Form.Item label="程序主包名" required>
            <Input
              readOnly
              size="large"/>
          </Form.Item>
          <Form.Item label="媒体简介" required>
            <Input.TextArea
              readOnly
              autosiz={{ minRows: 2 }}/>
          </Form.Item>
          <Form.Item label="域名白名单" required>
            <Input
              readOnly
              size="large"/>
          </Form.Item>
          <Form.Item>
            <div className="form-item-nolabel">
              <Button
                className="ant-btn-wide"
                size="large">审核拒绝</Button>
              <Button
                className="ant-btn-wide"
                size="large"
                type="primary">审核通过</Button>
            </div>
          </Form.Item>
        </Form>
      </div>
    </Fragment>
  )
}
