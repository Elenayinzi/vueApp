<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="helloworld"/>
    <ev/>
    <com :age="ages" @patch="msg">
      <h1 slot="a">我要加在上面</h1>
      <h1 slot="b">我要加在下面</h1>
    </com>
    <!-- <vuexx/> -->
    <pagea/>
    <pageb/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import './components/n'
import ev from './components/events.vue'
import com from './components/com.vue'
//import vuexx from './components/vuex.vue'
import pagea from './components/a.vue'
import pageb from './components/b.vue'

export default {
  name: 'app',
  components: {
    HelloWorld,
    ev,
    com,
    //vuexx,
    pagea,
    pageb
  },
  data(){
    return {
      ages: 180
    }
  },
  methods:{
    msg: function(ag){
      this.ages++;
      window.console.log(ag);
    }
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
