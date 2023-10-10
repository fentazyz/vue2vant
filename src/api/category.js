import http from '@/utils/http'

export const getCategoryData = () => {
  return http({
    method: 'get',
    url: '/category/list'
  })
}
