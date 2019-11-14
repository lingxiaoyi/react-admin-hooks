import React from 'react';
import '@/styles/panel.scss';

export default ({
  title,
  toolbar,
  children,
  ...props
}) => (
  <div className="main-panel" {...props}>
    <div className="main-panel-header">
      {
        title &&
        <h2 className="panel-header-title fl">{title}</h2>
      }
      <div className="panel-header-toolbar fr">{toolbar}</div>
    </div>
    <div className="main-panel-content">{children}</div>
  </div>
)