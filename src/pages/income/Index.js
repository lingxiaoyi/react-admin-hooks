import React, { Fragment, useState, useEffect } from 'react';
import { Input, Button } from 'antd';
import PanelLayout from '@/components/PanelLayout';
import FormLayout from './FormLayout';
import api from '@/services/api';
import { getFormatDate } from '@/utils/tools';
import useTable from '@/hooks/useTable';

const DEFAULT_FORMDATA = {
  startDate: getFormatDate(0),
  endDate: getFormatDate(0, -1),
  search: '',
}

export default () => {
  const [
    renderTable,
    onFormChange,
    queryLoading
  ] = useTable(api.getData, DEFAULT_FORMDATA);

  // useEffect(() => {
  //   api.test().then(res => {
  //     console.log(res)
  //   })
  // }, [])
  
  const columns = [
    {
      dataIndex: 'apptype',
      title: '账户'
    },
    {
      dataIndex: 'pv',
      title: '应用'
    },
    {
      dataIndex: 'ip',
      title: '广告位'
    },
    {
      dataIndex: 'purate',
      title: '数据状态',
      render: (text, record) => <span className="text-success">已发布</span>
    },
    {
      dataIndex: 'avg_open',
      title: '曝光',
    },
    {
      dataIndex: 'd_m_rate',
      title: '点击'
    },
    {
      dataIndex: 'uv',
      title: '分成前收益',
    },
    {
      dataIndex: 'openuv',
      title: '分成前CPM',
    },
    {
      dataIndex: 'news_uvrate',
      title: '分成比例',
    },
    {
      dataIndex: 'news_uv',
      title: '分成后收益',
    },
    {
      dataIndex: 'news_pvrate',
      title: '分成后CPM',
    },
    {
      dataIndex: 'appqid',
      title: '操作人',
    },
    {
      dataIndex: 'dt',
      title: '操作时间',
    },
  ]

  return (
    <Fragment>
      <FormLayout
        defaultValue={DEFAULT_FORMDATA}
        loading={queryLoading}
        onFormChange={onFormChange}/>
      <PanelLayout
        title="发布收益"
        toolbar={
          <Fragment>
            批量调节分成比例：
            <Input 
              style={{ 'width': 140 }}/>
            <Button
              className="ml20"
              type="primary">发布数据</Button>
          </Fragment>
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