const INFO_KEY = 'hm_shopping_info'
const HISTORY_KEY = 'hm_history_list'
// 获取个人信息
export const getinfo = () => {
  const defaultObj = { token: '', userId: '' }
  const result = sessionStorage.getItem(INFO_KEY)
  return result ? JSON.parse(result) : defaultObj
}
// 保存个人信息
export const setinfo = (obj) => {
  sessionStorage.setItem(INFO_KEY, JSON.stringify(obj))
}
// 移除个人信息
export const remove = () => {
  sessionStorage.removeItem(INFO_KEY)
}
// 获取搜索历史
export const getHistory = () => {
  const result = localStorage.getItem(HISTORY_KEY)
  return result ? JSON.parse(result) : []
}
// 设置搜索历史
export const setHistory = (arr) => {
  localStorage.setItem(HISTORY_KEY, JSON.stringify(arr))
}
