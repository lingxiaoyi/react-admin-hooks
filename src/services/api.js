import axios from './request.js';

const mock = (data, time = 200) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve({ code: 200, data, msg: 'success' })
		}, time)
	})
}


const api = {
  // 登录
  // login: data => axios.post('auth/login', data),
  login: () => mock({ user: { username: '章鱼输入法', id: 2, token: 'abcde' } }, 500),
  logout: () => mock({}, 200),

  test: () => axios.get('tag/list'),

  // 获取权限列表
  getAuth: () => mock({'data': []}, 1000),

  /* mock */
  getData: data => mock({
    list: [{"appqid":"dftt_ewmst1","apptype":"东方头条","avg_open":"8.86","d_m_rate":"0.41","dt":"20190610","image_pv":0,"image_pvrate":0,"image_uv":0,"image_uvrate":0,"ip":"164689","news_onlinetime":"19分4秒","news_pv":1909826,"news_pvrate":44.25,"news_uv":111684,"news_uvrate":94.07,"onlineavg":"56分23秒","openuv":"157020","picture_onlinetime":"0分0秒","purate":"36.35","pv":"4315769","shortvideo_onlinetime":"15分11秒","shortvideo_pv":"1402319","shortvideo_pvrate":"32.49","shortvideo_uv":"31194","shortvideo_uvrate":"26.27","timeavg":"15分11秒","timeavgpage":"0分4秒","uv":"118730","video_onlinetime":"23分34秒","video_pv":999967,"video_pvrate":23.17,"video_uv":73114,"video_uvrate":61.58},{"appqid":"dftt_ewmst1","apptype":"东方头条","avg_open":"8.67","d_m_rate":"0.41","dt":"20190609","image_pv":0,"image_pvrate":0,"image_uv":0,"image_uvrate":0,"ip":"159297","news_onlinetime":"16分9秒","news_pv":1893857,"news_pvrate":43.46,"news_uv":111262,"news_uvrate":93.76,"onlineavg":"54分6秒","openuv":"156970","picture_onlinetime":"0分0秒","purate":"36.73","pv":"4358088","shortvideo_onlinetime":"15分4秒","shortvideo_pv":"1442468","shortvideo_pvrate":"33.10","shortvideo_uv":"32089","shortvideo_uvrate":"27.04","timeavg":"35分31秒","timeavgpage":"0分4秒","uv":"118662","video_onlinetime":"23分53秒","video_pv":1018254,"video_pvrate":23.36,"video_uv":73848,"video_uvrate":62.23},{"appqid":"dftt_ewmst1","apptype":"东方头条","avg_open":"8.58","d_m_rate":"0.41","dt":"20190608","image_pv":0,"image_pvrate":0,"image_uv":0,"image_uvrate":0,"ip":"156867","news_onlinetime":"15分31秒","news_pv":1860184,"news_pvrate":43.6,"news_uv":109830,"news_uvrate":93.76,"onlineavg":"52分51秒","openuv":"156453","picture_onlinetime":"0分0秒","purate":"36.42","pv":"4266079","shortvideo_onlinetime":"14分59秒","shortvideo_pv":"1413266","shortvideo_pvrate":"33.13","shortvideo_uv":"31374","shortvideo_uvrate":"26.78","timeavg":"34分17秒","timeavgpage":"0分4秒","uv":"117142","video_onlinetime":"23分31秒","video_pv":985210,"video_pvrate":23.09,"video_uv":72387,"video_uvrate":61.79}],
    total_count: 1234
  })
}

export default api