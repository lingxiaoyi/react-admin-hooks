import React from 'react';
import '@/styles/card.scss';

export default ({
  title,
  toolbar,
  children,
  ...props
}) => (
  <div className="main-card" {...props}>
    <div className="main-card-header clearfix">
      <h2 className="card-header-title fl">{title}</h2>
      <div className="card-header-toolbar fr">{toolbar}</div>
    </div>
    <div className="main-card-content scrollbar scrollbar-md">{children}</div>
  </div>
)