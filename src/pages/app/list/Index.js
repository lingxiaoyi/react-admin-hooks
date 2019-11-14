import React, { useState, useEffect, Fragment } from 'react';
import { Link } from 'react-router-dom';
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
      dataIndex: 'news_pvrate',
      title: '修改人'
    },
    {
      dataIndex: 'appqid',
      title: '审核说明'
    },
    {
      dataIndex: 'd_m_rate',
      title: '修改时间'
    },
    {
      dataIndex: 'action',
      title: '操作',
      render: (text, record) => <Link to="/app/1">查看详情</Link>
    },
  ]
  
  return (
    <Fragment>
      <FormLayout
        defaultValue={DEFAULT_FORMDATA}
        loading={queryLoading}
        onFormChange={onFormChange}/>
      <PanelLayout title="应用列表">
        {
          renderTable({
            columns,
            rowSelection: {
              onChange: (selectedRowKeys, selectedRows) => {
                console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
              },
              getCheckboxProps: record => ({
                
              }),
            },
          })
        }
      </PanelLayout>
    </Fragment>
  )
}