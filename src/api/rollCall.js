import request from '@/api/index'

export const getClassList = () => {
    const url = '/Select/GetClassSelect'
    const method = 'post'
    return request({
      method,
      url
    })
}