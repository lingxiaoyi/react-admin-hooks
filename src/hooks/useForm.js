import React, { useState } from 'react';
import { Button } from 'antd';

export default (onFormChange = () => {}, defaultValue = {}, loading = false) => {
  const [formData, setFormData] = useState({...defaultValue})

  function changeForm(k, v) {
    formData[k] = v;
    setFormData({...formData})
  }

  function renderButton() {
    return (
      <div className="page-toolbar-btns">
        <Button
          loading={loading}
          htmlType="submit"
          onClick={() => onFormChange(formData)}
          type="primary">筛选</Button>
        <a onClick={() => {setFormData({...defaultValue})}}>清空已选</a>
      </div>
    )
  }

  return [
    formData,
    changeForm,
    renderButton
  ]
}