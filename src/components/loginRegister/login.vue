<template>
    <section class="login">
      <section class="loginInp">
        <input type="text" v-model="phoneData" placeholder="请输入用户名">
        <button v-if="isShow" @click="send" class="sendMes" :disabled="isSend">
          <span v-if="!isSend && !reSend">发送验证码</span>
          <span v-if="!isSend && reSend">重新发送</span>
          <span v-if="isSend && !reSend">{{rTime}}秒后重新获取</span>
        </button>
        <input type="password" placeholder="请输入验证码" v-model="pwdData">
      </section>
      <section class="loginBtn">
        <button @click="login">登陆</button>
      </section>
    </section>
</template>

<script>
import { Toast } from 'mint-ui'
import axios from 'axios'
import config from '../../modules'
import md5 from 'js-md5'
export default {
  name: 'login',
  data () {
    return {
      isShow: false,
      regPhone: /^1(3|4|5|7|8)\d{9}$/,
      phoneData: '',
      pwdData: '',
      isSend: false,
      rTime: 60,
      reSend: false
    }
  },
  methods: {
    login () {
      const regPwd = /^\d{6}$/
      if (!this.regPhone.test(this.phoneData)) {
        Toast({
          message: '手机格式错误',
          position: 'center',
          duration: 1500
        })
      } else {
        this.isShow = true
        if (!regPwd.test(this.pwdData)) {
          Toast({
            message: '验证码错误',
            position: 'center',
            duration: 1500
          })
        } else {
          axios.post(config.host + 'mz/v4/api/login?__t=' + Date.now(), {
            username: this.phoneData,
            password: md5(this.pwdData),
            loginType: 1,
            code: '',
            codeKey: ''
          }).then(res => {
            if (res.data.status === 0) {
              axios.get(config.host + 'mz/v4/api/me', {
                params: {
                  __t: Date.now()
                },
                headers: {
                  'X-Genpx': JSON.stringify({
                    'co': 'maizuo',
                    'userId': res.data.data.data.id,
                    'cityId': '12',
                    'fingerprint': 'f2d5b5704383f0eac0997c028138b303',
                    'longitude': '',
                    'latitude': ''
                  })
                }
              }).then(res1 => {
                console.log(res1.data, '222222222')
              })
              Toast({
                message: '登陆成功',
                position: 'center',
                duration: 1500
              })
            } else {
              Toast({
                message: res.data.msg,
                position: 'center',
                duration: 1500
              })
            }
          })
        }
      }
    },
    send () {
      let that = this
      that.isSend = true
      that.reSend = false
      that.rTime = 60
      axios.post(config.host + 'mz/v4/api/code?__t=' + Date.now(), {
        mobile: that.phoneData,
        type: '2'
      }).then(res => {
        console.log(res.data)
      })
      let time = that.tTime
      let interval = window.setInterval(() => {
        if (--that.rTime <= 0) {
          that.rTime = time
          that.reSend = true
          that.isSend = false
          window.clearInterval(interval)
        }
      }, 1000)
    }
  },
  watch: {
    phoneData: function (val) {
      this.phoneData = val
      if (this.regPhone.test(this.phoneData)) {
        this.isShow = true
      } else {
        this.isShow = false
      }
    }
  }
}
</script>

<style scoped lang="scss">
  .login {
    padding: .2rem;
    .loginInp {
      display: flex;
      flex-direction: column;
      position: relative;
      input {
        margin-bottom: .1rem;
        height: .35rem;
        background: #ffffff;
        border: 1px solid #dedede;
        padding: 0 .05rem;
        -webkit-border-radius: .02rem;
        -moz-border-radius: .02rem;
        border-radius: .02rem;
      }
      .sendMes {
        position: absolute;
        right: 0;
        top: .01rem;
        font-size: .12rem;
        color: #ffffff;
        padding: 0 .1rem;
        background: #29a097;
        height: .33rem;
        line-height: .33rem;
        outline: none;
        border: none;
      }
    }
    .loginBtn {
      width: 2rem;
      margin: 0 auto;
      button {
        background: #fe8233;
        height: .3rem;
        width: 100%;
        -webkit-border-radius: .5rem;
        -moz-border-radius: .5rem;
        border-radius: .5rem;
        border: none;
        color: #ffffff;
        outline: none;
      }
    }
  }
</style>
