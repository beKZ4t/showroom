<template>
  <div class="main">
    <div class="login">
      <div class="header_login">
        <div class="first">Login here</div>
        <div class="second">
          <p>Welcome back you’ve
          been missed!</p></div>
        <div class="email">E-mail </div>
        <div class="input-container">
          <img class="input-icon" src="@/assets/images/email.png" alt="">
          <input type="email" placeholder="E-mail" v-model="email">
        </div>
        <div class="password">Password </div>
        <div class="input-container">
          <img class="input-icon" src="@/assets/images/password.png" alt="">
          <input type="password" placeholder="Password" v-model="password">
        </div>
        <div class="forgot">Forgot password?</div>
        <button type="button" @click="this.$router.push('/profile')">Login</button>
        <div class="create">Don't have an account yet? <div class="red_create" @click="this.$router.push('/register')">Create Account</div></div>
      </div>
    </div>
  </div>
</template>

<script>


export default {
  name: "index",
  data() {
    return {
      email: "",
      password: ""
    }
  },
  mounted() {
    window.scrollTo(0, 0);
  },

}
</script>

<style scoped>
h1{
  color: black;

}
.end_text{
  font-size: 18px;
  font-family: Brains-regular, system-ui;
  color: #1E1E1E;
  margin-top: 162px;
  display: flex;
  justify-content: center;
}
.main{
  max-width: 90%;
  margin-right: auto;
  margin-left: auto;

}
.red_create{
  color: #3E6CDE;
  font-family: Poppins-bold, system-ui;
  margin-left: 10px;
  cursor: pointer;
}
.red{
  color: #E22D2D;
  margin-left: 7px;
}
button{
  width: 397px;
  height: 60px;
  background-color: #3E6CDE;
  color: #FFFFFF;
  border-radius: 10px;
  font-size: 18px;
  margin-bottom: 21px;
  cursor: pointer;
  border: none;
}
.forgot{
  color: #3E6CDE;
  margin-top: 19px;
  margin-bottom: 15px;
  font-size: 16px;
  font-family: Poppins-bold, system-ui;
  display: flex;
  justify-content: end;
}

.login{
  width: 397px;
  height: 442px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  justify-content: center;
}

.first{
  font-size: 30px;
  display: flex;
  justify-content: center;
  margin-top: 116px;
  color: #3E6CDE;
  font-family: Poppins-bold, system-ui;
}
.second{

  text-align: center;
  width: 225px;
  font-size: 20px;
  font-family: Poppins-semibold, system-ui;
  display: flex;
  justify-content: center;
  color: black;
  margin: 26px auto 9px;
}
.second p{
  justify-content: center;
  display: flex;
  margin-left: auto;
  margin-right: auto;
}
.email{
  font-size: 16px;
  font-family: Poppins-regular, system-ui;
  margin-bottom: 7px;
  display: flex ;

}
.password{
  font-size: 16px;
  font-family: Poppins-regular, system-ui;
  margin-bottom: 7px;
  display: flex;

}

.input-container {
  align-items: center;
  padding: 9px 19px;
  display: flex;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  margin-bottom: 14px;
  background-color: #F1F4FF;
}

.input-icon {
  display: inline-block;
  vertical-align: middle;
  width: 24px;
  height: 24px;
}

input {
  padding-top: 9px;
  padding-bottom: 9px;
  margin-left: 15px;
  flex: 1;
  display: inline-block;
  background: #F1F4FF;
  border: none;
  outline: none;
  font-size: 16px;
  font-family: Poppins-regular, system-ui;
  color: black;
}
input:focus {
  border: none;
  outline: none;
}
::placeholder {
  color: rgba(0, 0, 0, 0.5);
}

.email_input{
  height: 60px;
  width: 397px;
  border-radius: 10px;
  margin-bottom: 17px;
  background-size: auto 30%;
  border: 1px solid #00000030;
  font-size: 16px;
  font-family: Brains-regular, system-ui;
}
.create{
  display: flex;
  justify-content: center;
  font-size: 16px;
  font-family: Poppins-regular, system-ui;
}
</style>