<template>
  <div>
    <news-list
      v-for="item in lists"
      :key="item.id"
      :listItem="item"
    />
  </div>
</template>

<script>
  import newsList from '@/components/newsList'
  import methods from '../../utils/index'

  export default {
    data () {
      return {
        lists: []
      }
    },

    components: {
      newsList
    },

    methods: {},

    created () {
      methods.cloudRequest('/index/getNewsList')
        .then(res => {
          this.lists = res.list
        })
    }
  }
</script>

<style scoped>

</style>
