<template>
  <h1>
    <router-link :to = 'link'>{{msg}}</router-link>
  </h1>
</template>
<script>
  export default {
    props: ['link','msg']
  }
</script>
