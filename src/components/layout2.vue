<template>
  <div >
    <app-aside></app-aside>
    <router-view/>
     <go-top bg-color="#00a7e3"></go-top>
  </div>
</template>

<script>
import GoTop from '@inotom/vue-go-top'
import AppAside from "@/components/index/Aside2.vue"
export default {
  name: 'layout2',
  data(){
    return {

    }
  },
  components:{
    AppAside,
    GoTop
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
