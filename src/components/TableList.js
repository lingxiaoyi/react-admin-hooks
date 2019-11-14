import React, { Component, Fragment } from 'react';
import { Spin, Pagination, Checkbox } from 'antd';
import '@/styles/table-list.scss';

export default class extends Component {
  constructor(props) {
    super(props)
    this.state = {
      checkedKeys: props.checkedKeys || []
    }
  }

  // 翻页
  handlePageChange = (page, pageSize) => {
    let { onPageChange = () => {} } = this.props;
    this.setState({ checkedKeys: [] });
    onPageChange(page, pageSize);
  }
  
  // 行选中
  handleRowCheck = e => {
    e.stopPropagation();
    let oldSelectedKeys = this.state.checkedKeys;
    if(e.target.checked) {
      oldSelectedKeys.push(e.target.value);
    } else {
      oldSelectedKeys.splice(oldSelectedKeys.indexOf(e.target.value), 1);
    }
    let { onCheckChange = () => {} } = this.props;
    this.setState({ checkedKeys: oldSelectedKeys }, () => {
      onCheckChange(this.state.checkedKeys);
    });
  }

  // 全选或者全不选
  handleCheckAll = e => {
    let { dataSource, checkKey, onCheckChange = () => {} } = this.props;
    let allCheckedKeys = dataSource.map(l => l[checkKey]);
    this.setState({ checkedKeys : e.target.checked ? allCheckedKeys : [] }, () => {
      onCheckChange(this.state.checkedKeys);
    });
  }
  
  render() {
    const {
      loading = false,
      listKey,
      columns = [],
      dataSource = [],
      page,
      pageSize,
      total,
      onRowClick = () => {},
      checkKey,
    } = this.props;

    let allCheckedKeys = [];
    if(checkKey) {
      allCheckedKeys = dataSource.map(l => l[checkKey]);
    }
    
    const {
      checkedKeys
    } = this.state;

    return (
      <Fragment>
        <div className="table-list">
          <Spin spinning={loading}>
            <div className="table-item table-item-header">
              {
                checkKey && dataSource.length ?
                <span style={{ 'width': 20 }}>
                  <Checkbox 
                    checked={allCheckedKeys.length && checkedKeys.length === allCheckedKeys.length}
                    indeterminate={checkedKeys.length && checkedKeys.length < allCheckedKeys.length}
                    onChange={this.handleCheckAll} />
                </span>
                : null
              }
              {
                columns.map(col => 
                  <span 
                    style={{ 'width': col.width + 'px' }}
                    key={col.dataIndex}>
                    {col.title}
                  </span>
                )
              }
            </div>
            <div className="table-list-content scrollbar scrollbar-md">
              <div className="table-item-wrap">
                {
                  dataSource.map((item, i) => 
                    <div 
                      className="table-item"
                      key={item[listKey] || item.id || 'table-list-'+i}
                      onClick={() => onRowClick(item, i)}>
                      {
                        checkKey && dataSource.length ?
                        <span style={{ 'width': 20 }}>
                          <Checkbox 
                            checked={checkedKeys.indexOf(item[checkKey]) > -1}
                            value={item[checkKey]}
                            onClick={this.handleRowCheck} />
                        </span>
                        : null
                      }
                      {
                        columns.map(col => 
                          <span 
                            style={{ 'width': col.width + 'px' }}
                            key={col.dataIndex}>
                            {
                              col.render ? col.render(item[col.dataIndex], item, i) : item[col.dataIndex]
                            }
                          </span>
                        )
                      }
                    </div>
                  )
                }
              </div>
            </div>
          </Spin>
        </div>
        {
          page ? 
          <Pagination
            className="mt10 tr"
            showQuickJumper
            showSizeChanger
            showTotal={total => `共 ${total} 条`}
            current={page}
            pageSize={pageSize}
            total={total}
            pageSizeOptions={['10', '15', '20', '50']}
            onChange={this.handlePageChange}
            onShowSizeChange={(page, pageSize) => this.handlePageChange(1, pageSize)} /> : null
        }
      </Fragment>
    )
  }
}