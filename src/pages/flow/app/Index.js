import React, { useState, useEffect } from 'react';
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
      dataIndex: 'pv',
      title: '应用名称',
      render: (text, record) => (
        <div>
          <span>{record.apptype}</span>
          <p>ID: {record.appqid}</p>
        </div>
      )
    },
    {
      dataIndex: 'news_uv',
      title: '帐号'
    },
    {
      dataIndex: 'uv',
      title: '系统平台'
    },
    {
      dataIndex: 'ip',
      title: '接入方式'
    },
    {
      dataIndex: 'openuv',
      title: '分成比例'
    },
    {
      dataIndex: 'purate',
      title: '状态'
    },
    {
      dataIndex: 'd_m_rate',
      title: '修改时间'
    },
    {
      dataIndex: 'action',
      title: '操作',
      render: (text, record) => <>
        <a>查看详情</a>
        <Divider type="vertical"/>
        <a>修改分成</a>
      </>
    },
  ]
  
  return (
    <>
      <FormLayout
        defaultValue={DEFAULT_FORMDATA}
        loading={queryLoading}
        onFormChange={onFormChange}/>
      <PanelLayout title="应用列表">
        {renderTable({ columns })}
      </PanelLayout>
    </>
  )
}