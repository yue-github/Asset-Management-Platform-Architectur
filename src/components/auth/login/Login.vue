<template>
  <div class="login">
    <h2>{{ $t('资产管理平台欢迎您') }}</h2>
    <form method="post" action="/auth/login" name="login">
      <div class="form-group">
        <div class="input-group">
          <input type="text" id="email" class="placeHolder" required="required" placeholder="请输入邮箱"/>
          <i class="bar"/>
        </div>
      </div>
      <div class="form-group">
        <div class="input-group">
          <input type="password" class="placeHolder" id="password" required="required" placeholder="请输入密码"/>
       <i class="bar"/>
        </div>
      </div>
      <div class="d-flex align--center justify--space-between">
        <button class="btn btn-primary" type="button" @click="login">
          {{ $t('登录') }}
        </button>
        <router-link class='link flex-center pl-2 text-center' :to="{name: 'signup'}">
          {{ $t('注册') }}
        </router-link>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'login',
  methods:{
    login(){
      this.$axios.get('testEnter')
      .then(res=>{
        console.log(res);
      })
       
    }
  }
}
</script>

<style lang="scss">
.login {

  @include media-breakpoint-down(md) {
    width: 100%;
    padding-right: 2rem;
    padding-left: 2rem;
    .down-container {
      display: none;
    }
  }

  h2 {
    text-align: center;
  }
  width: 21.375rem;

  .down-container {
    margin-top: 3.125rem;
  }
}
 
.placeHolder::-webkit-input-placeholder { /* WebKit browsers */ 

color: #4ae387; 

} 

.placeHolder:-moz-placeholder { /* Mozilla Firefox 4 to 18 */ 

color: #4ae387; 

} 

.placeHolder::-moz-placeholder { /* Mozilla Firefox 19+ */ 

color: #4ae387; 

} 

.placeHolder:-ms-input-placeholder { /* Internet Explorer 10+ */ 

color: #4ae387; 

} 

</style>
