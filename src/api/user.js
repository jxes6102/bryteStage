import request from '@/api/index'

export const getRoleList = () => {
    const url = '/Select/GetRoleSelect'
    const method = 'post'
    return request({
        method,
        url
    })
}

export const getUserList = (data) => {
    const url = '/User/GetDataListPagination'
    const method = 'post'
    return request({
        method,
        url,
        data
    })
}

export const setUserEdit = (data) => {
    const url = '/User/Edit'
    const method = 'post'
    return request({
        method,
        url,
        data
    })
}