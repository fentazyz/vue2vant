import http from '@/utils/http'

// 获取首页数据
export const getHomeData = () => {
  return http({
    url: '/page/detail',
    method: 'get',
    params: {
      pageId: 0
    }
  })
}
