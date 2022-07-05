<template>
  <div>
    <form>
      <fieldset>
        <legend>Авторизация</legend>
        <p><label for="login">Имя <em>*</em></label><input type="text" id="login"></p>
        <p><label for="password">E-mail</label><input type="password" id="password"></p>
      </fieldset>
      <p><input type="submit" value="Войти"></p>
      <p></p>
    </form>
  </div>
</template>

<script>
export default {
  name: "AuthForm"
}
</script>

<style scoped>

</style>