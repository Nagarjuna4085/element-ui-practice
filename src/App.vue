<template>
  <div id="app">
    <nav>
      <router-link to="/about">About</router-link>
      <br/>
      <router-link to="/home">Home</router-link>
      <router-link to="/layout">Layout Container</router-link>
      <router-link to="/uielements">Ui-Elements</router-link>
      <router-link to="PracticeUi">practice</router-link>


    </nav>
    <div>
      
    <HelloWorld msg="Welcome to Your Vue.js App"/>

    </div>
    <router-view></router-view>
  </div>

</template>

<script>
import HelloWorld from './components/LayoutView.vue'

export default {
  name: 'app',
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
