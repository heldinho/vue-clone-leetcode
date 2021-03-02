<template>
  <div>
    <ul class="mt-5">
      <li><router-link to="/home/teste">Teste</router-link></li>
      <li><router-link to="/home/teste2">Teste2</router-link></li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data: () => ({})
}
</script>

<style lang="scss" scoped>
</style>
