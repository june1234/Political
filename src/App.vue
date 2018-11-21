<template>
  <div id="app">
    <app-aside></app-aside>
    <router-view/>
     <go-top bg-color="#00a7e3"></go-top>
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
    /*font-family: 'Avenir', Helvetica, Arial, sans-serif;*/
  font-family: Helvetica Neue,Helvetica,Arial,sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;

  background-color: #f0f0f0;
    font-size: 16px;
    line-height: 1.42857;
    color: #333;
}
</style>
