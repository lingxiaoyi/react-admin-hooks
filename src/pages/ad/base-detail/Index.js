import React, { useState, useEffect, Fragment } from 'react';
import { Popconfirm, Button, Form, Input } from 'antd';
import PanelLayout from '@/components/PanelLayout';
import useTable from '@/hooks/useTable';
import api from '@/services/api';
import './style.scss';

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
    },
    {
      dataIndex: 'news_uv',
      title: '应用ID'
    },
    {
      dataIndex: 'uv',
      title: '应用版本'
    },
    {
      dataIndex: 'openuv',
      title: '广告类型'
    },
    {
      dataIndex: 'ip',
      title: '权重比例',
      render: (text) => <Popconfirm
        title={
          <Fragment>
            修改权重比例
            <Input 
              style={{"display": "block", "width": 160, "marginTop": 5}}/>
          </Fragment>
        }>
        <a>{text}</a>
      </Popconfirm>
    },
    {
      dataIndex: 'purate',
      title: '修改人'
    },
    {
      dataIndex: 'd_m_rate',
      title: '修改时间'
    },
    {
      dataIndex: 'action',
      title: '操作',
      render: (text, record) => <a className="text-danger">删除</a>
    },
  ]
  
  return (
    <Fragment>
      <div className="info-list">
        <div className="info-item">DSP上游：穿山甲</div>
        <div className="info-item">平台：APP</div>
        <div className="info-item">系统：ios</div>
        <div className="info-item">上游媒体ID：ssdsd</div>
        <div className="info-item">上游广告位ID：ssdsd</div>
      </div>
      <PanelLayout
        toolbar={
          <Form layout="inline">
            <Form.Item label="关键词">
              <Input 
                placeholder="应用名称/应用ID模糊搜索"/>
            </Form.Item>
            <Form.Item>
              <Button
                loading={queryLoading}
                type="primary">查询</Button>
            </Form.Item>
          </Form>
        }>
        {renderTable({ columns })}
      </PanelLayout>
    </Fragment>
  )
}