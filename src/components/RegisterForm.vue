<template>
  <div class="reg-form-main">
    <form class="reg-form">
      <fieldset class="reg-form__fields">
        <legend>Регистрация</legend>
        <p><label for="email">E-mail</label><input v-model="email" type="email" id="email"></p>
        <p><label for="password">Пароль</label><input v-model="pass" type="password" minlength="8" id="password"></p>
      </fieldset>
      <p><button v-on:click="register">Загеристрироваться</button></p>
    </form>
  </div>
</template>

<script>
export default {
  name: "RegisterForm",
  data(){
    return{
      email:'',
      pass:''
    }
  },
  methods:{
    register(){
      this.$store.dispatch('auth/register', {
        email: this.email,
        pass: this.pass
      })
    }
  }
}
</script>

<style scoped>
.reg-form{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50%;
}
.reg-form-main{
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
.reg-form__fields{
  display: flex;
  flex-direction: column;
  align-items: stretch;
}
</style>