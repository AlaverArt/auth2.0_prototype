<template>
  <div>
    <button v-on:click="getUser">Получить информацию пользователя</button>
    <button v-on:click="logout">Выйти</button>
    <router-view/>
  </div>
</template>

<script>
export default {
  name:'App',
  methods:{
    getUser(){
      this.$store.dispatch('getUser');
    },
    logout(){
      this.$store.dispatch('auth/logout');
    }
  },
  beforeMount(){
    this.$store.dispatch('auth/initFromLS');
  }
}
</script>

<style>

</style>
