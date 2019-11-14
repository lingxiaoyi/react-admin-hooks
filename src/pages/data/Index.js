import React, { Fragment, useState, useEffect } from 'react';
import { Button } from 'antd';
import PanelLayout from '@/components/PanelLayout';
import FormLayout from './FormLayout';
import useTable from '@/hooks/useTable';
import api from '@/services/api';
import { getFormatDate } from '@/utils/tools';

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

  const columns = [
    {
      dataIndex: 'dt',
      title: '日期'
    },
    {
      dataIndex: 'appqid',
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
      dataIndex: 'apptype',
      title: '请求',
    },
    {
      dataIndex: 'avg_open',
      title: '填充',
    },
    {
      dataIndex: 'd_m_rate',
      title: '展现'
    },
    {
      dataIndex: 'uv',
      title: '点击',
    },
    {
      dataIndex: 'video_pvrate',
      title: '填充率',
    },
    {
      dataIndex: 'news_pvrate',
      title: '曝光率',
    },
    {
      dataIndex: 'purate',
      title: '点击率',
    },
    {
      dataIndex: 'news_pv',
      title: '分成前收益',
    },
    {
      dataIndex: 'news_uv',
      title: '分成前CPM',
    },
    {
      dataIndex: 'news_uvrate',
      title: '分成后收益',
    },
    {
      dataIndex: 'video_pv',
      title: '分成后CPM',
    },
  ]
    
  return (
    <Fragment>
      <FormLayout
        defaultValue={DEFAULT_FORMDATA}
        loading={queryLoading}
        onFormChange={onFormChange}/>
      <PanelLayout
        title="数据报表"
        toolbar={
          <Button
            className="table-with-toolbar"
            type="primary">导出报表</Button>
        }>
        {
          renderTable({
            columns,
            tableKey: "table-admin-data",
            disCheckKeys: ['dt']
          })
        }
      </PanelLayout>
    </Fragment>
  )
}