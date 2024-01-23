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

export const getRoleList = () => {
  const url = '/User/GetRoleList'
  const method = 'get'
  return request({
    method,
    url,
  })
}

export const getUserList = (data) => {
  const url = '/User/GetDataList'
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

const addToUrl = (payload) => {
  let str = '?'
  for(let key in payload){
      str += key + '=' + payload[key] + '&'
  }
  str = str.substring(0,str.length-1)
  return str
}