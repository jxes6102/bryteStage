import request from '@/api/index'

export const getDataListByMonth = (data) => {
    const url = '/Schedule/GetDataListByMonth'
    const method = 'post'
    return request({
        method,
        url,
        data
    })
}
  
export const getDetailByDate = (data) => {
    const url = '/Schedule/DetailByDate'
    const method = 'post'
    return request({
        method,
        url,
        data
    })
}

export const scheduleEdit = (data) => {
    const url = '/Schedule/Edit'
    const method = 'post'
    return request({
        method,
        url,
        data
    })
}
