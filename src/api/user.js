import http from '@/utils/http'

// 获取个人信息
export const getUserInfoDetail = () => {
  return http.get('/user/info')
}
