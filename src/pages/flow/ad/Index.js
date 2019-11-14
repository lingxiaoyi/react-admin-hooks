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
      dataIndex: 'pv',
      title: '广告位',
      render: (text, record) => (
        <div>
          <span>{record.apptype}</span>
          <p>ID: {record.appqid}</p>
        </div>
      )
    },
    {
      dataIndex: 'news_uv',
      title: '应用'
    },
    {
      dataIndex: 'uv',
      title: '类型'
    },
    {
      dataIndex: 'ip',
      title: '状态'
    },
    {
      dataIndex: 'openuv',
      title: '广告位状态'
    },
    {
      dataIndex: 'purate',
      title: '分成比例'
    },
    {
      dataIndex: 'd_m_rate',
      title: '最近修改时间'
    },
    {
      dataIndex: 'action',
      title: '操作',
      render: (text, record) => <Fragment>
        <a>修改分成</a>
        <Divider type="vertical"/>
        <a className="text-danger">关闭</a>
        <Divider type="vertical"/>
        <a className="text-danger">封禁</a>
      </Fragment>
    },
  ]
  
  return (
    <Fragment>
      <FormLayout
        defaultValue={DEFAULT_FORMDATA}
        loading={queryLoading}
        onFormChange={onFormChange}/>
      <PanelLayout title="广告位列表">
        {renderTable({ columns })}
      </PanelLayout>
    </Fragment>
  )
}
