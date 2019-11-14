import React, { useState, useEffect, Fragment } from 'react';
import PanelLayout from '@/components/PanelLayout';
import api from '@/services/api';
import './style.scss';
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
      dataIndex: 'news_uv',
      title: '用户名称'
    },
    {
      dataIndex: 'uv',
      title: '用户ID'
    },
    {
      dataIndex: 'ip',
      title: '添加时间'
    },
  ]
  
  return (
    <Fragment>
      <div className="auth-info-header">
        <p>权限管理 / 用户权限</p>
        <h2>一个名字</h2>
        <h3>角色ID：27687</h3>
      </div>
      
      <PanelLayout title="用户权限">
        {renderTable({ columns })}
      </PanelLayout>
    </Fragment>
  )
}
