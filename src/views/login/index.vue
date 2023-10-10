<template>
  <div class="login">
    <van-nav-bar
      title="会员登录"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />
    <div class="login-main">
      <h2>手机号登录</h2>
      <p style="font-weight: 100;color: #858383;margin: 5% 0">未注册的手机号登录自动注册</p>
      <van-form @submit="onSubmit">
        <van-field
          v-model="user.phone"
          name="手机号"
          label="手机号"
          placeholder="手机号"
          :rules="[{ required: true, message: '请填写手机号' }]"
        />
        <div style="display: flex;justify-content: center;align-items: center">
          <van-field
            v-model="user.graph"
            style="flex: 8"
            type="text"
            name="验证码"
            label="验证码"
            placeholder="验证码"
            :rules="[{ required: true, message: '请填写图形验证码' }]"
          />
          <div style="flex: 4;width: 100%;height: 100%" @click="editimg">
            <img v-if="img"
                 style="width: 100%;height: 100%"
                 :src="img" alt=""/>
          </div>
        </div>
        <van-field
          v-model="user.message"
          center
          clearable
          type="number"
          name="验证码"
          label="验证码"
          placeholder="验证码"
          :rules="[{ required: true, message: '请填写验证码' }]"
        >
          <template #button>
            <van-button size="small" type="primary" :disabled="sencond!==totalSencond" @click="sendmsg">
              {{ sencond === totalSencond ? '发送验证码' : sencond + '秒后重新发送' }}
            </van-button>
          </template>
        </van-field>
        <div style="margin: 16px;">
          <van-button round block type="info" native-type="submit" @click="submit()">提交</van-button>
        </div>
      </van-form>
    </div>
  </div>
</template>
<script>
import { getimagecode, getmsg, Login } from '@/api/login'

export default {
  name: 'LoginIndex',
  data () {
    return {
      user: {
        phone: '',
        graph: '',
        message: ''
      },
      img: '',
      key: '',
      totalSencond: 60, // 总秒数
      sencond: 60, // 当前秒数
      timer: null // 存放定时器
    }
  },
  created () {
    this.Getimagecode()
  },
  methods: {
    onClickLeft () {
      this.$router.go(-1)
    },
    onClickRight () {
    },
    onSubmit () {

    },
    // 校验
    verify () {
      const reg = /^1(3[0-9]|5[0-3,5-9]|7[1-3,5-8]|8[0-9])\d{8}$/
      if (!reg.test(this.user.phone)) {
        return false
      } else if (this.user.graph === '' || this.user.graph.length !== 4) {
        return false
      }
      return true
    },
    async sendmsg () {
      if (!this.verify()) {
        this.$toast('请正确填写信息')
      } else {
        await getmsg(this.user.graph, this.key, this.user.phone)
        this.$toast('开始发送')
        this.timer = setInterval(() => {
          this.sencond--
          if (this.sencond <= 0) {
            clearInterval(this.timer)
            this.timer = null
            this.sencond = this.totalSencond
          }
        }, 1000)
      }
    },
    async Getimagecode () {
      const { data: { base64, key } } = await getimagecode()
      this.img = base64
      this.key = key
    },
    editimg () {
      this.Getimagecode()
    },
    // 提交
    async submit () {
      if (!this.verify() || this.user.message.length !== 6) {
        return false
      } else {
        const res = await Login(this.user.phone, this.user.message)
        this.$toast(res.message)
        this.$store.commit('User/setUserinfo', res.data)
        const url = this.$route.query.backUrl || '/'
        this.$router.replace(url)
        // console.log(res)
      }
    }
  },
  destroyed () {
    clearInterval(this.timer)
  }
}
</script>
<style scoped>
.login-main {
  width: 90%;
  height: 80vh;
  margin: 10% auto;
}
</style>
