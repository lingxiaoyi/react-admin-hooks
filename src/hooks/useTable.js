import React, { useState, useEffect } from 'react';
import TableLayout from '@/components/TableLayout';

export default (fetchApi, defaultParams = {}) => {
  const [list, setList] = useState([])
  const [count, setCount] = useState(0)
  const [loading, setLoading] = useState(false)
  const [queryLoading, setQueryLoading] = useState(false)
  const [params, setParams] = useState({
    ...defaultParams,
    page: 1,
    pageSize: 5,
  })

  function onPageChange(page, pageSize) {
    setParams({ ...params, page, pageSize })
  }

  function onFormChange(form) {
    setParams({ ...params, ...form })
    setQueryLoading(true)
  }

  useEffect(() => {
    console.log('query params: ', params)
    let mounted = true;
    setLoading(true)
    fetchApi(params).then(res => {
      if(res.code === 200 && res.data && mounted) {
        setLoading(false)
        setQueryLoading(false)
        setList(res.data.list)
        setCount(res.data.total_count)
      }
    })
    return () => {
      mounted = false;
      // console.log('destory---------------------')
    }
  }, [fetchApi, params])

  
  function renderTable(props = {}) {
    return (
      <TableLayout
        loading={loading}
        total={count}
        page={params.page}
        pageSize={params.pageSize}
        onPageChange={onPageChange}
        dataSource={list}
        {...props}/>
    )
  }
  
  return [
    renderTable,
    onFormChange,
    queryLoading,
  ]
}