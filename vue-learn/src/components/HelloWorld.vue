<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div v-html="msg1" v-bind:id="id"></div>
    <div>{{ number+1 }}</div>
    <p v-if="seen">你看的到了</p>
    <p v-else>你看不到了</p>
    <div v-n="3"></div>
    <div :class="[a1,a2]">我借你{{money}},你还我{{a}},还剩{{b}}</div>
    <div :class="{'test3 test1 test2':a3}"></div>
    <div :class="obj">style obj</div>
    <ul>
      <li v-for="(item,idx) in list" :key="item">{{item}},{{idx}}</li>
    </ul>
    <ul>
      <template v-for="item in list">
        <li :key="item+1">hello</li>
        <li :key="item">{{item}}</li>
      </template>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data(){
    return{
      msg1: '<span style="color:#000;">helloworld</span>',
      id: 'txt',
      number: 1,
      seen: true,
      money:1000,
      a:11,
      a1:'test1',
      a2:'test2',
      a3:true,
      obj:{
        'test-1':true
      },
      list:['a','b','c','d','f']
    }
  },
  computed:{
    b:function(){
      return this.money - this.a
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
</style>
