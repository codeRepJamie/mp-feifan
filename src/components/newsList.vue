<template>
  <div class="newsList">
    <h1 class="title">{{listItem.title}}</h1>
    <div class="subtitle">
      <span class="author">{{listItem.author}}</span>
      <span class="time">{{formatTime}}</span>
    </div>
  </div>
</template>

<script>
  import moment from 'moment';

  export default {
    props: ['listItem'],
    computed: {
      formatTime () {
        return moment(this.listItem.time).format('MM月DD日 hh:mm:ss')
      }
    }
  }
</script>

<style>

</style>
