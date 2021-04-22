/*
**动态组件的创建方式
*/
<template>
  <div class="day2">
    <h1>Vue中动态组件的使用</h1>
    <div v-for="item in newsCompType" :key="item.id">
      <component :is="item.type"></component>
    </div>
  </div>
</template>

<script>
import newsData from '../data/news'
import newsVideo from './newsVideo'
import newsImage from './newsImage'
import newsText from './newsText'

export default {
  name: 'day2',
  data () {
    return {
      newsData,
      newsName: 'newsImage'
    }
  },

  computed: {
    newsCompType () {
      return this.newsData.map((item) => {
        return {
          ...item,
          type: 'news-' + item.type
        }
      })
    }
  },

  components: {
    newsVideo,
    newsImage,
    newsText
  }

}
</script>

<style>
.day2 {
  width: 100%;
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

</style>
