import request from '@/api/index'

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
