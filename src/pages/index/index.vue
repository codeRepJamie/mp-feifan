<template>
  <div>
    <news-list/>
  </div>
</template>

<script>
  import newsList from '@/components/newsList'

  export default {
    data () {
      return {}
    },

    components: {
      newsList
    },

    methods: {},

    created () {
      wx.cloud.callFunction({
        // 云函数名称
        name: 'add',
        // 传给云函数的参数
        data: {
          a: 1,
          b: 2,
        },
      })
        .then(res => {
          console.log(res.result) // 3
        })
        .catch(console.error)
    }
  }
</script>

<style scoped>

</style>
