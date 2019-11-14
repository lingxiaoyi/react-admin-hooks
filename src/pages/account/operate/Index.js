import React, { useState, useEffect, Fragment } from 'react';
import { Divider } from 'antd';
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
      dataIndex: 'uv',
      title: '操作',
      render: (text, record) => (
        <Fragment>
          <a className="text-gray">解禁</a>
          <Divider type="vertical"/>
          <a>分配权限</a>
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
      <PanelLayout title="运营账户列表">
        {renderTable({ columns })}
      </PanelLayout>
    </Fragment>
  )
}