import request from '@/api/index'

export const getCall = () => {
  const url = '/Pickup/Monitor'
  const method = 'post'
  return request({
    method,
    url,
  })
}

export const initTodayRollCall = () => {
  const url = '/Init/InitTodayRollCall'
  const method = 'post'
  return request({
    method,
    url,
  })
}

export const initTodayPickup = () => {
  const url = '/Init/InitTodayPickup'
  const method = 'post'
  return request({
    method,
    url,
  })
}

// export const getLineInformation = () => {
//   const url = '/Auth/LineLogin'
//   const method = 'get'
//   return request({
//     method,
//     url,
//   })
// }

export const testLogin = (data) => {
  const url = '/Auth/Login'
  const method = 'post'
  return request({
    method,
    url,
    data,
  })
}

export const testLogout = () => {
  const url = '/Auth/Logout'
  const method = 'post'
  return request({
    method,
    url,
  })
}

export const checkQR = (data) => {
  const url = '/Pickup/Arrived' + addToUrl(data)
  const method = 'post'
  return request({
    method,
    url,
  })
}

export const getLineInformation = () => {
  const url = '/Auth/LineLogin'
  const method = 'get'
  return request({
    method,
    url,
  })
}

export const getLineLoginCallback = (data) => {
  const url = '/Auth/LineLoginCallback'+addToUrl(data)
  const method = 'get'
  return request({
    method,
    url,
    data
  })
}

export const getCaptcha = () => {
  const url = '/Auth/Captcha'
  const method = 'get'
  return request({
    method,
    url,
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

export const checkToken = () => {
  const url = '/Auth/Authorize'
  const method = 'post'
  return request({
    method,
    url
  })
}

export const getParentUser = (data) => {
  const url = '/Parent/GetParentUserListPagination'
  const method = 'post'
  return request({
    method,
    url,
    data
  })
}

export const getParentListByUser = (data) => {
  const url = '/Parent/GetParentListByUserPagination'
  const method = 'post'
  return request({
    method,
    url,
    data
  })
}

export const parentCreate = (data) => {
  const url = '/Parent/Create'
  const method = 'post'
  return request({
    method,
    url,
    data
  })
}

export const getRoleList = () => {
  const url = '/Select/GetRoleSelect'
  const method = 'post'
  return request({
    method,
    url
  })
}

export const getClassList = () => {
  const url = '/Select/GetClassSelect'
  const method = 'post'
  return request({
    method,
    url
  })
}

export const getStudentByClassIdList = (data) => {
  const url = '/Select/GetStudentSelectByClassId'
  const method = 'post'
  return request({
    method,
    url,
    data
  })
}

export const createParent = (data) => {
  const url = '/Parent/Create'
  const method = 'post'
  return request({
    method,
    url,
    data
  })
}

export const editParent = (data) => {
  const url = '/Parent/Edit'
  const method = 'post'
  return request({
    method,
    url,
    data
  })
}

export const deleteParent = (data) => {
  const url = '/Parent/SoftDelete'
  const method = 'post'
  return request({
    method,
    url,
    data
  })
}

const addToUrl = (payload) => {
  let str = '?'
  for(let key in payload){
      str += key + '=' + payload[key] + '&'
  }
  str = str.substring(0,str.length-1)
  return str
}