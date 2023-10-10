import http from '@/utils/http'

export const checkOrder = (mode, obj) => {
  return http.get('/checkout/order', {
    params: {
      mode,
      delivery: 0,
      couponId: 0,
      isUsePoints: 0,
      ...obj
    }
  })
}

export const submitOrder = (mode, params) => {
  return http.post('/checkout/submit', {
    mode,
    delivery: 10, // 物流方式  配送方式 (10快递配送 20门店自提)
    couponId: 0, // 优惠券 id
    payType: 10, // 余额支付
    isUsePoints: 0, // 是否使用积分
    ...params
  })
}
export const getMyOrderList = (dataType, page) => {
  return http.get('/order/list', {
    params: {
      dataType,
      page
    }
  })
}
