<template>
  <div id="app">
    <app-aside></app-aside>
    <router-view/>
     <go-top></go-top>
  </div>
</template>

<script>
import GoTop from '@inotom/vue-go-top';
import AppAside from "@/components/index/Aside.vue"
export default {
  name: 'App',
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
