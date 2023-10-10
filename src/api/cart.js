import http from '@/utils/http'
export const addCart = (goodsId, goodsNum, goodsSkuId) => {
  return http.post('/cart/add', {
    goodsId,
    goodsNum,
    goodsSkuId
  })
}
export const getCartList = () => {
  return http.get('/cart/list')
}
export const changeCount = (goodsId, goodsNum, goodsSkuId) => {
  return http.post('/cart/update', {
    goodsId,
    goodsNum,
    goodsSkuId
  })
}
// 删除购物车
export const delSelect = (cartIds) => {
  return http.post('/cart/clear', {
    cartIds
  })
}
