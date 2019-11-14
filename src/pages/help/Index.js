import React, { useState, useEffect } from 'react';
import { range } from 'lodash';

// 模拟列表数据请求
const fetchList = ({ page = 1, size = 10 }) =>
	new Promise(resolve => resolve(range((page - 1) * size, page * size)));

const usePagination = (fetchApi) => {
  const [page, setPage] = useState(1); // 初始页码为: 1
  const [list, setList] = useState([]); // 初始列表数据为空数组: []

  useEffect(() => {
    fetchApi({ page }).then(setList);
  }, [fetchApi, page]); // 当page变更时，触发effect

  const prevPage = () => setPage(currentPage => currentPage - 1);
  const nextPage = () => setPage(currentPage => currentPage + 1);

  return [list, { page }, { prevPage, nextPage }];
};

function renderCommonList({ ListComponent, fetchApi }) {
  const [list, { page }, { prevPage, nextPage }] = usePagination(fetchApi);
  return (
    <div>
      <ListComponent list={list} />
      <div>
        <button type="button" onClick={prevPage}>
          上一页
        </button>
        <label>当前页: {page}</label>
        <button type="button" onClick={nextPage}>
          下一页
        </button>
      </div>
    </div>
  );
}
  
export default function List() {

  function ListComponent({ list }) {
    return (
      <ul>
        {list.map((item, key) => (
          <li key={key}>{item}</li>
        ))}
      </ul>
    );
  }
  
  return renderCommonList({
    ListComponent,
    fetchApi: fetchList,
  });
}