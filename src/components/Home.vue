/*
**对于路由懒加载的使用
*/
<template>
  <div class="home">
    <div class="content">
      <h1>vue测试组件</h1>
      <button @click="exchange()">切换</button>
      <div v-if="isShow">
        <AsyncList />
      </div>
    </div>
  </div>
</template>

<script>
// import List from './List.vue'
import LoadingComponent from './LoadingComponent'
import ErrorComponent from './ErrorComponent'

// const AsyncList = () => ({
//   component: import('./List'),
//   loading: LoadingComponent,
//   error: ErrorComponent,
//   delay: 200,
//   timeout: 500
// })

/**引入组件时采用 */
const AsyncList = () => ({
  component: new Promise((resolve) => {
    setTimeout(() => {
      resolve(import('./List'))
    }, 200)
  }),
  loading: LoadingComponent,
  error: ErrorComponent,
  // delay: 200,
  timeout: 500
})

export default {
  name: 'Home',

  components: {
    AsyncList
  },

  data () {
    return {
      isShow: false
    }
  },

  methods: {
    exchange () {
      this.isShow = !this.isShow
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.home {
  width: 100%;
  margin-top: 100px;
}

.content {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.content button {
  width: 50px;
}
</style>
