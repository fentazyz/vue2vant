import http from '@/utils/http'
// 获取图形验证码
export const getimagecode = () => {
  return http({
    url: '/captcha/image',
    method: 'get'
  })
}
// 获取短信验证码
export const getmsg = (captchaCode, captchaKey, mobile) => {
  return http.post(
    '/captcha/sendSmsCaptcha', {
      form:
        {
          captchaCode,
          captchaKey,
          mobile
        }
    }
  )
}
export const Login = (mobile, smsCode) => {
  return http.post('passport/login', {
    form: {
      isParty: false,
      partyData: [],
      mobile,
      smsCode
    }
  })
}
