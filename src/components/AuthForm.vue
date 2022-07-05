<template>
  <div class="auth-form-main">
    <form class="auth-form">
      <fieldset class="auth-form__fields">
        <legend>Авторизация</legend>
        <p><label for="email">E-mail</label><input v-model="email" type="email" id="email"></p>
        <p><label for="password">Пароль</label><input v-model="pass" type="password" id="password"></p>
      </fieldset>
      <p><button v-on:click="login">Войти</button></p>
      <p><router-link to="register"></router-link></p>
    </form>
  </div>
</template>

<script>
export default {
  name: "AuthForm",
  data(){
    return{
      email:"",
      pass:""
    }
  },
  methods:{
    login(){
      this.$store.commit('setEmail', this.email);

      this.$store.dispatch('auth/login', {
        email: this.email,
        pass: this.pass
      });
    }
  }
}
</script>

<style scoped>
.auth-form{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50%;
}
.auth-form-main{
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
.auth-form__fields{
  display: flex;
  flex-direction: column;
  align-items: stretch;
}
</style>