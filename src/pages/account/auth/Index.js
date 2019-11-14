import React, { useState, useEffect, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Divider, Button } from 'antd';
import PanelLayout from '@/components/PanelLayout';
import FormLayout from './FormLayout';
import RoleModal from './RoleModal';
import AssignModal from './AssignModal';
import api from '@/services/api';
import { getFormatDate } from '@/utils/tools';
import useTable from '@/hooks/useTable';

const DEFAULT_FORMDATA = {
  startDate: getFormatDate(0),
  endDate: getFormatDate(0, -1),
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
      title: '角色名称'
    },
    {
      dataIndex: 'dt',
      title: '角色ID'
    },
    {
      dataIndex: 'ip',
      title: '角色类型',
      render: (text) => <a>运营管理</a>
    },
    {
      dataIndex: 'purate',
      title: '备注',
    },
    {
      dataIndex: 'avg_open',
      title: '修改时间',
    },
    {
      dataIndex: 'uv',
      title: '操作',
      render: (text, record) => (
        <Fragment>
          <a onClick={() => {}}>修改</a>
          <Divider type="vertical"/>
          <Link to="/account/auth/1">查看用户</Link>
          <Divider type="vertical"/>
          <a onClick={() => {}}>分配用户</a>
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
      <PanelLayout 
        title="用户权限"
        toolbar={
          <Button
            type="primary">新建角色</Button>
        }>
        {renderTable({ columns })}
      </PanelLayout>
      <RoleModal />
      <AssignModal />
    </Fragment>
  )
}