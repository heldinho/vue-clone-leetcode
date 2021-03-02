<template>
  <div>
    <div id="nav">
      <router-link to="/login">Login</router-link> |
      <router-link to="/home">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'Main',
  data: () => ({})
}
</script>

<style lang="scss" scoped>
#nav {
  position: fixed;
  top: 0;
  margin: 0;
}
</style>
