import request from '@/utils/request'

const api_name = '/admin/vod/course'

export default {

  //添加课程基本信息
  saveCourseInfo(courseInfo) {
    return request({
      url: `${api_name}/save`,
      method: 'post',
      data: courseInfo
    })
  },

  //课程列表
  getPageList(page, limit, searchObj) {
    return request({
      url: `${api_name}/${page}/${limit}`,
      method: 'get',
      params: searchObj
    })
  },
  
}