import React, { useState, useEffect, Fragment } from 'react';
import { Divider, Modal, Transfer } from 'antd';
import PanelLayout from '@/components/PanelLayout';
import FormLayout from './FormLayout';
import api from '@/services/api';
import useTable from '@/hooks/useTable';

const DEFAULT_FORMDATA = {
  
}

export default () => {
  const [
    renderTable,
    onFormChange,
    queryLoading
  ] = useTable(api.getData, DEFAULT_FORMDATA);

  function handleResetPwd(id) {
    Modal.confirm({
      title: '是否确定重置此账户密码？',
      centered: true,
      onOk() {
        console.log('OK');
      },
      onCancel() {
        console.log('Cancel');
      },
    });
  }
  
  const columns = [
    {
      dataIndex: 'dt',
      title: '用户ID'
    },
    {
      dataIndex: 'pv',
      title: '用户名称'
    },
    {
      dataIndex: 'ip',
      title: '用户状态'
    },
    {
      dataIndex: 'purate',
      title: '主营应用',
    },
    {
      dataIndex: 'avg_open',
      title: '联系人',
    },
    {
      dataIndex: 'd_m_rate',
      title: '联系人邮箱'
    },
    {
      dataIndex: 'appqid',
      title: '联系人手机',
    },
    {
      dataIndex: 'news_uv',
      title: '联系地址',
    },
    {
      dataIndex: 'action',
      title: '操作',
      render: (text, record) => (
        <Fragment>
          <a className="text-gray">解禁</a>
          <Divider type="vertical"/>
          <a className="text-success" onClick={() => {}}>重置密码</a>
          <Divider type="vertical"/>
          <a onClick={() => {}}>分配权限</a>
        </Fragment>
      )
    },
  ]
  
  return (
    <Fragment>
      <FormLayout
        defaultValue={DEFAULT_FORMDATA}
        loading={queryLoading}
        onFormChange={onFormChange}/>
      <PanelLayout title="开发者账户列表">
        {renderTable({ columns })}
      </PanelLayout>
      <Modal
        centered
        title="权限分配"
        visible={false}>
        <Transfer
          dataSource={[]}
          showSearch/>
      </Modal>
    </Fragment>
  )
}