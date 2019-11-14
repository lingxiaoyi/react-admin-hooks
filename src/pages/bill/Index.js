import React, { Fragment, useState, useEffect } from 'react';
import { Divider } from 'antd';
import PanelLayout from '@/components/PanelLayout';
import FormLayout from './FormLayout';
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
      dataIndex: 'dt',
      title: '日期'
    },
    {
      dataIndex: 'apptype',
      title: '账户'
    },
    {
      dataIndex: 'pv',
      title: '账户ID'
    },
    {
      dataIndex: 'ip',
      title: '曝光'
    },
    {
      dataIndex: 'purate',
      title: '点击',
    },
    {
      dataIndex: 'avg_open',
      title: '结算金额',
    },
    {
      dataIndex: 'd_m_rate',
      title: '结算单状态'
    },
    {
      dataIndex: 'news_pvrate',
      title: '支付进度',
    },
    {
      dataIndex: 'appqid',
      title: '操作人',
    },
    {
      dataIndex: 'news_uv',
      title: '最近操作时间',
    },
    {
      dataIndex: 'action',
      title: '操作',
      render: (text, record) => (
        <Fragment>
          <a>发布</a>
          <Divider type="vertical"/>
          <a>下载</a>
          <Divider type="vertical"/>
          <a>修改</a>
          <Divider type="vertical"/>
          <a>签订</a>
          <Divider type="vertical"/>
          <a>支付</a>
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
        title={
          "账单列表"
          // <span className="text-primary">当前已选择  2  行数据</span>
        }>
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