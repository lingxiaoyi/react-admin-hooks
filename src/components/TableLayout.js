import React, { Component, Fragment } from 'react';
import { Table, Button, Checkbox, Modal, Icon, Pagination } from 'antd';
import CardLayout from '@/components/CardLayout';

export default class extends Component {
  constructor(props) {
    super(props);
    let defaultShowKeys = [], defaultColumns = [];
    if(props.tableKey) {
      if(localStorage.getItem(props.tableKey)) {
        defaultShowKeys = localStorage.getItem(props.tableKey).split(',');
        defaultColumns = this.getShowColumns(localStorage.getItem(props.tableKey).split(','));
      } else {
        defaultShowKeys = this.getColumnsKeys(props.columns);
        defaultColumns = props.columns;
      }
    }
    this.state = {
      showModal: false,
      showColumns: defaultColumns || [],
      checkedKeys: defaultShowKeys || [],
      defaultShowKeys,
    }
  }

  getColumnsKeys = columns => columns.map(l => l.dataIndex)

  getShowColumns = keys => this.props.columns.filter(l => keys.indexOf(l.dataIndex) > -1)

  handleModalClose = type => {
    const { checkedKeys, defaultShowKeys } = this.state;
    if(type === 'ok') {
      localStorage.setItem(this.props.tableKey, checkedKeys);
      this.setState({
        showModal: false,
        showColumns: this.getShowColumns(checkedKeys),
        defaultShowKeys: checkedKeys
      })
    } else {
      this.setState({
        showModal: false,
        checkedKeys: defaultShowKeys
      })
    }
  }

  handleColsCheck = v => this.setState({ checkedKeys: v })
  
  // 分页或页码修改
  handlePageChange = (page, pageSize) => {
    this.props.onPageChange && this.props.onPageChange(page, pageSize);
  }
  
  render() {
    const {
      loading = false,
      dataSource,
      columns,
      rowKey = (record, i) => i,
      scroll = { x: '100%' },
      tableKey,
      disCheckKeys = [],
      page = 1,
      pageSize = 5,
      total = 0,
      ...props
    } = this.props;

    const {
      showModal,
      showColumns,
      checkedKeys
    } = this.state;

    return (
      <div className="table-with-btn">
        {
          tableKey &&
          <Fragment>
            <Button
              className="table-tr-btn"
              onClick={() => this.setState({ showModal: true })}>自定义设置</Button>
            <Modal
              centered
              width={760}
              title="修改自定义列"
              visible={showModal}
              onCancel={this.handleModalClose.bind(null, 'cancel')}
              onOk={this.handleModalClose.bind(null, 'ok')}>
              <div className="card-flex">
                <CardLayout title="全部列表项" style={{ flex: 2 }}>
                  <Checkbox.Group
                    className="checkbox-list"
                    value={checkedKeys}
                    onChange={this.handleColsCheck}>
                    {
                      columns.map(l =>
                        <Checkbox
                          disabled={disCheckKeys.indexOf(l.dataIndex) > -1}
                          value={l.dataIndex}
                          key={l.dataIndex}>{l.title}</Checkbox>
                      )
                    }
                  </Checkbox.Group>
                </CardLayout>

                <CardLayout title="您所选择的列">
                  {
                    columns.filter(l => checkedKeys.indexOf(l.dataIndex) > -1).map(l => 
                    <div className="card-list-item" key={l.dataIndex}>
                      <span>{l.title}</span>
                      {
                        disCheckKeys.indexOf(l.dataIndex) > -1 ?
                        <Icon type="lock"/> :
                        <Icon type="close" onClick={() => this.setState({ checkedKeys: checkedKeys.filter(m => m !== l.dataIndex) })}/>
                      }
                    </div>
                    )
                  }
                </CardLayout>
              </div>
            </Modal>
          </Fragment>
        }
        <Table
          size="small"
          bordered={false}
          loading={loading}
          dataSource={dataSource}
          columns={tableKey ? showColumns : columns}
          rowKey={rowKey}
          scroll={scroll}
          pagination={false}
          {...props} />
        {
          total ?
          <div className="table-page clearfix">
            <Pagination
              total={total}
              showTotal={total => `共 ${total} 条记录`}
              current={page}
              pageSize={pageSize}
              pageSizeOptions={['5', '10', '20', '50']}
              onChange={this.handlePageChange}
              onShowSizeChange={this.handlePageChange}
              showSizeChanger
              showQuickJumper/>
          </div> : <div className="table-page-none"></div>
        }
      </div>
    )
  }
}