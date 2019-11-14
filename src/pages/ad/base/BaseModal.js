import React, { Component } from 'react';
import { Modal, Form, Input, Select, Checkbox } from 'antd';
import './style.scss';

const { Option } = Select;

export default class extends Component {
  render() {
    return (
      <Modal
        visible={false}
        width={900}
        centered
        title={"新增外输广告打底策略"}>
        <Form layout="inline" className="page-toolbar-form clearfix modal-form-base">
          <Form.Item label="平台">
            <Select
              placeholder="请选择">
              <Option value="1">开发者</Option>
              <Option value="2">运营管理</Option>
            </Select>
          </Form.Item>
          <Form.Item label="系统">
            <Select
              placeholder="请选择">
              <Option value="1">开发者</Option>
              <Option value="2">运营管理</Option>
            </Select>
          </Form.Item>
          <Form.Item label="DSP上游">
            <Select
              placeholder="请选择">
              <Option value="1">开发者</Option>
              <Option value="2">运营管理</Option>
            </Select>
          </Form.Item>
          <Form.Item label="超时时间">
            <Input
              placeholder="请输入"/>
          </Form.Item>
          <Form.Item label="上游媒体ID">
            <Input
              placeholder="请输入"/>
          </Form.Item>
          <Form.Item label="上游广告位ID">
            <Input
              placeholder="请输入"/>
          </Form.Item>
          <Form.Item label="app报名">
            <Input
              placeholder="请输入"/>
          </Form.Item>
          <Form.Item label="app版本号">
            <Input
              placeholder="请输入"/>
          </Form.Item>
          <Form.Item label="权重比例">
            <Input
              placeholder="请输入"/>
          </Form.Item>
          <Form.Item label="说明">
            <Input
              placeholder="请输入"/>
          </Form.Item>
          <Form.Item label="广告样式" className="form-item-full">
            <Checkbox.Group className="checkbox-list">
              <Checkbox value="1">大图</Checkbox>
              <Checkbox value="2">三图</Checkbox>
              <Checkbox value="3">单图</Checkbox>
              <Checkbox value="4">开屏</Checkbox>
              <Checkbox value="5">激励视频</Checkbox>
            </Checkbox.Group>
          </Form.Item>
          <Form.Item label="地域屏蔽" className="form-item-full">
            <Checkbox.Group className="checkbox-list">
              <Checkbox value="1">北京</Checkbox>
              <Checkbox value="2">安徽</Checkbox>
              <Checkbox value="3">福建</Checkbox>
              <Checkbox value="4">甘肃</Checkbox>
              <Checkbox value="5">黑龙江</Checkbox>
              <Checkbox value="1">北京</Checkbox>
              <Checkbox value="2">安徽</Checkbox>
              <Checkbox value="3">福建</Checkbox>
              <Checkbox value="4">甘肃</Checkbox>
              <Checkbox value="5">黑龙江</Checkbox>
              <Checkbox value="1">北京</Checkbox>
              <Checkbox value="2">安徽</Checkbox>
              <Checkbox value="3">福建</Checkbox>
              <Checkbox value="4">甘肃</Checkbox>
              <Checkbox value="5">黑龙江</Checkbox>
              <Checkbox value="1">北京</Checkbox>
              <Checkbox value="2">安徽</Checkbox>
              <Checkbox value="3">福建</Checkbox>
              <Checkbox value="4">甘肃</Checkbox>
              <Checkbox value="5">黑龙江</Checkbox>
              <Checkbox value="1">北京</Checkbox>
              <Checkbox value="2">安徽</Checkbox>
              <Checkbox value="3">福建</Checkbox>
              <Checkbox value="4">甘肃</Checkbox>
              <Checkbox value="5">黑龙江</Checkbox>
            </Checkbox.Group>
          </Form.Item>
          <Form.Item label="广告类型" className="form-item-full">
            <Checkbox.Group className="checkbox-list">
              <Checkbox value="1">落地页</Checkbox>
              <Checkbox value="2">下载</Checkbox>
              <Checkbox value="3">唤醒</Checkbox>
            </Checkbox.Group>
          </Form.Item>
          <Form.Item label="应用版本" className="form-item-full">
            <Checkbox.Group className="checkbox-list">
              <Checkbox value="1">1.0</Checkbox>
              <Checkbox value="2">1.1</Checkbox>
              <Checkbox value="3">1.2</Checkbox>
              <Checkbox value="4">1.3</Checkbox>
              <Checkbox value="5">1.4</Checkbox>
            </Checkbox.Group>
          </Form.Item>
          <Form.Item label="应用选择" className="form-item-full">
            <Checkbox.Group className="checkbox-list">
              <Checkbox value="1">应用1</Checkbox>
              <Checkbox value="2">应用2</Checkbox>
              <Checkbox value="3">应用3</Checkbox>
              <Checkbox value="4">应用4</Checkbox>
              <Checkbox value="5">应用5</Checkbox>
            </Checkbox.Group>
          </Form.Item>
        </Form>
      </Modal>
    )
  }
}