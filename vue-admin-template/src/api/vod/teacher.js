import request from '@/utils/request'

const api_name = '/admin/vod/teacher'

export default {
    //讲师条件查询分页
    pageList(current, limit, searchObj) {
        return request({
            url: `${api_name}/queryTeacherPage/${current}/${limit}`,
            method: 'post',
            //使用json格式传递，写法 data:searchObj
            //使用普通格式传递，写法 params:searchObj
            data: searchObj
          })
    },

    //讲师条件查询分页
    removeTeacher(id) {
        return request({
            url: `${api_name}/remove/${id}`,
            method: 'delete'
          })
    },

    //讲师添加
    saveTeacher(teacher) {
        return request({
            url: `${api_name}/addTeacher`,
            method: 'post',
            data: teacher
          })
    },

    //根据id查询讲师
    getTeacherById(id) {
        return request({
            url: `${api_name}/getById/${id}`,
            method: 'get'
          })
    },

    //修改讲师
    updateTeacher(teacher) {
        return request({
            url: `${api_name}/updateTeacher`,
            method: 'post',
            data: teacher
          })
    },

    batchRemove(idList) {
        return request({
            url: `${api_name}/deleteBatch`,
            method: 'delete',
            data: idList
        })
    }


}