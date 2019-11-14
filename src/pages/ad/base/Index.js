import React, { useState, useEffect, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Divider, Button } from 'antd';
import PanelLayout from '@/components/PanelLayout';
import FormLayout from './FormLayout';
import BaseModal from './BaseModal';
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
      title: 'DSP上游',
    },
    {
      dataIndex: 'news_uv',
      title: '上游媒体ID'
    },
    {
      dataIndex: 'uv',
      title: '上游广告位ID'
    },
    {
      dataIndex: 'ip',
      title: '权重比例',
      render: (text) => <a>{text}</a>
    },
    {
      dataIndex: 'openuv',
      title: '平台'
    },
    {
      dataIndex: 'purate',
      title: '系统'
    },
    {
      dataIndex: 'd_m_rate',
      title: '广告样式'
    },
    {
      dataIndex: 'd_m_rate',
      title: '策略ID'
    },
    {
      dataIndex: 'd_m_rate',
      title: '修改人'
    },
    {
      dataIndex: 'd_m_rate',
      title: '修改时间'
    },
    {
      dataIndex: 'd_m_rate',
      title: '说明'
    },
    {
      dataIndex: 'action',
      title: '操作',
      render: (text, record) => <Fragment>
        <a>修改</a>
        <Divider type="vertical"/>
        <Link to="/ad/base/1">详情</Link>
        <Divider type="vertical"/>
        <a className="text-danger">删除</a>
      </Fragment>
    },
  ]
  
  return (
    <Fragment>
      <FormLayout
        defaultValue={DEFAULT_FORMDATA}
        loading={queryLoading}
        onFormChange={onFormChange}/>
      <PanelLayout
        title="打底策略列表"
        toolbar={
          <Button type="primary">新增打底策略</Button>
        }>
        {renderTable({ columns })}
      </PanelLayout>
      <BaseModal/>
    </Fragment>
  )
}