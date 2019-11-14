import React from 'react';
import { Modal, Form, Input, Select, Checkbox } from 'antd';
import './style.scss';

const { Option } = Select;

export default () => {
  return (
    <Modal
      visible={false}
      width={760}
      centered
      title={"编辑角色"}>
      <Form layout="inline" className="page-toolbar-form clearfix modal-form-auth">
        <Form.Item label="角色名称" required>
          <Input 
            placeholder="请输入角色名称"/>
        </Form.Item>
        <Form.Item label="角色类型" required>
          <Select
            placeholder="请选择角色类型">
            <Option value="1">开发者</Option>
            <Option value="2">运营管理</Option>
          </Select>
        </Form.Item>
        <Form.Item label="备注说明">
          <Input
            placeholder="请输入备注说明"/>
        </Form.Item>
      </Form>
      <div className="table-auth">
        <div className="table-auth-row table-auth-header clearfix">
          <span className="table-column table-column-1">主菜单</span>
          <span className="table-column table-column-2">子菜单</span>
          <span className="table-column table-column-3">功能</span>
          <span className="table-column table-column-4">权限</span>
        </div>
        <div className="table-auth-row table-auth-body clearfix">
          <div className="table-column table-column-1">
            <div className="table-column-menu">
              <span>发布收益</span>
              <span>数据报表</span>
              <span>用户管理</span>
              <span>账单管理</span>
              <span>应用审核</span>
            </div>
          </div>
          <div className="table-column table-column-2">
            <div className="table-column-sub">
              <div>开发者管理</div>
              <div>运营管理</div>
            </div>
          </div>
          <div className="table-column table-column-3">
            <div className="table-column-sub">
              <div className="table-column-part">
                <span>功能1</span>
                <span>功能2</span>
                <span>功能3</span>
              </div>
              <div className="table-column-part">
                <span>功能1</span>
                <span>功能2</span>
                <span>功能3</span>
              </div>
            </div>
          </div>
          <div className="table-column table-column-4">
            <div className="table-column-sub">
              <div className="table-column-part">
                <Checkbox/>
                <Checkbox/>
                <Checkbox/>
              </div>
              <div className="table-column-part">
                <Checkbox/>
                <Checkbox/>
                <Checkbox/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  )
}