<template>
  <div>
    <h1>one!</h1>
    <router-link to="/hello">hello</router-link>
    <router-link to="/me">me 首页</router-link>
    <h1 @click="getData()">获取数据</h1>
  </div>
</template>
<script>
  export default {
    created() {
      this.getData();

    },
    data() {
      return {

      }
    },
    methods: {
      getData() {
        var headers = new Headers({
          'Accept': 'application/json',
          'Cache-Control': 'max-age=3600'
        });
        var request = new Request('/api', {headers: headers});

        fetch(request).then(function(response) {
          console.log(response);
        });
      }
    }
  }
</script>
