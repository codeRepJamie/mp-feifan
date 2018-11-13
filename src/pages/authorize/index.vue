<template>
  <div class="authorize">
    <image src="https://innmall-hotel.b0.upaiyun.com/toop_member/activity/authorize/identity.svg"
           class="identity-icon"/>
    <view class="tips-area">
      <text class="tips">小程序需要您的授权获取头像与昵称才能使用哦</text>
    </view>
    <button
      @tap="getUserInfo"
      open-type="getUserInfo"
    >
      授权
    </button>
  </div>
</template>

<script>

  export default {
    data () {
      return {}
    },

    components: {},

    methods: {
      getUserInfo () {
        wx.navigateBack();
      }
    },

    created () {

    },
  }
</script>

<style scoped>
  .authorize {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 190px;
  }

  .logo-icon {
    width: 414px;
    height: 181px;
  }

  .identity-icon {
    width: 230px;
    height: 150px;
  }

  .tips-area {
    width: 600px;
    margin-top: 64px;
    text-align: center;
  }

  .tips {
    font-size: 28px;
    line-height: 40px;
    color: #666;
  }

  button {
    margin: 26px auto 0;
    width: 720px;
    font-size: 32px;
    color: #fff;
    background: #C19E61;
  }
</style>
