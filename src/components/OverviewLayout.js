import React, { Component, Fragment } from 'react';
import { Form, DatePicker, Input, Select, Button } from 'antd';

export default ({ dataSource = [] }) => (
  <div className="overview-list clearfix">
    {
      dataSource.map(l =>
        <div className="overview-item" key={l.title}>
          <p>{ l.title }</p>
          <b>{ l.value }</b>
        </div>
      )
    }
  </div>
)