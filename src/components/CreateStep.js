import React from 'react';
import '@/styles/create-step.scss';

export default ({ current = 0 }) => (
  <div className="create-step">
    <div className="create-step-item clearfix">
      <div className={`${ current === 0 ? 'active ' : '' }create-step-num`}>1</div>
      <div className="create-step-text">
        <h2>创建媒体</h2>
        <p>填写应用信息创建媒体</p>
      </div>
    </div>
    <div className="create-step-item clearfix">
      <div className={`${ current === 1 ? 'active ' : '' }create-step-num`}>2</div>
      <div className="create-step-text">
        <h2>创建广告位</h2>
        <p>选择对应媒体创建其广告位以获取广告位ID</p>
      </div>
    </div>
    <div className="create-step-item clearfix">
      <div className={`${ current === 2 ? 'active ' : '' }create-step-num`}>3</div>
      <div className="create-step-text">
        <h2>请求广告</h2>
        <p>配置获得的广告位ID具体操作参考左侧导航页"接入帮助"</p>
      </div>
    </div>
  </div>
)