import http from '@/utils/http'
export const getAddressList = () => {
  return http.get('/address/list')
}
