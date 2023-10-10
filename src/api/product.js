import http from '@/utils/http'
export const getProList = (obj) => {
  const { categoryId, goodsName, page } = obj
  return http({
    method: 'GET',
    url: '/goods/list',
    params: {
      categoryId,
      goodsName,
      page
    }
  })
}
export const getProDetail = (goodsId) => {
  return http({
    method: 'GET',
    url: '/goods/detail',
    params: {
      goodsId
    }
  })
}
export const getProComments = (goodsId, limit) => {
  return http({
    method: 'GET',
    url: '/comment/listRows',
    params: {
      goodsId,
      limit
    }
  })
}
