<template>
  <div>
    <h1>this is me page ,welcome !</h1>
    <!--<h3><router-link to="/one">one</router-link></h3>-->
    <!--<h3><router-link to="/hello">hello</router-link></h3>-->
    <My key="1" link="/one" msg="one"></My>
    <My key="2" link="/hello" msg="hello"></My>
  </div>
</template>
<script>
  import My from './li'
  export default {
    metaInfo: {
      title:'预渲染的首页',
      meta:[{
        name: 'keywords',
        content: 'two'
      },
        {
          name: 'description',
          content: '66666666666666'
        }]
    },
    components: {
      My
    }
  }
</script>
