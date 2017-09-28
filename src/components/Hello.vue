<template>
  <div class="wrap">
    <ul>
      <li v-for="item in data">年龄：{{item.name}}，性别：{{item.age}}</li>
    </ul>
    <router-link to="/one">one</router-link>
    <br>
    <router-link to="/me">me首页</router-link>
    <div>
      <button @click="add()">按钮</button>
    </div>
    <div>
      <button @click="back()">back</button>
    </div>
  </div>
</template>

<script>
  var arr = [
    {name: 'htl',age: 26}
  ]
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      data: arr,
    }
  },
  beforeRouteEnter (to, from, next) {
    // 在渲染该组件的对应路由被 confirm 前调用
    // 不！能！获取组件实例 `this`
    // 因为当钩子执行前，组件实例还没被创建
    console.log(to);
    console.log(from);
    next();
  },
  methods: {
    add() {
      this.data[0].name = 'cc'
//     this.data[1] = this.$set(this.data,{'heheh':66}) ;
//      console.log(this.data)
//      this.data.push({name: 'cc',age:18})
    },
    back() {
      this.$router.go(-1)
    },

  },
  metaInfo: {
    title:'预渲染的Hello页面',
    meta:[{
      name: 'keywords',
      content: 'hello'
    },
      {
        name: 'description',
        content: 'hellohellohellohello'
      }]
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}


a {
  color: #42b983;
}
</style>
