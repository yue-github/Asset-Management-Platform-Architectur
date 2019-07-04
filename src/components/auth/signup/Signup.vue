<template>
  <div class="signup">
    <h2>{{ $t('创建新的帐户') }}</h2>
    <form method="post" action="/#/auth/signup" name="signup">
      <div class="form-group">
        <div class="input-group">
          <input type="text" id="email" class="placeHolder" required="required" placeholder="请输入邮箱"/>
          <!-- <label class="control-label" for="email">{{ $t('请输入邮箱') }}</label><i class="bar"></i> -->
        </div>
      </div>
      <div class="form-group">
        <div class="input-group">
          <input type="password" class="placeHolder" id="password" required="required" placeholder="请输入密码"/>
          <!-- <label class="control-label" for="password">{{ $t('auth.password') }}</label><i class="bar"></i> -->
        </div>
      </div>
      <vuestic-checkbox name="agree-to-terms" v-model="agreedToTerms">
        <template slot="label">
          {{ $t('我同意') }}
          <a class="link" href="#">{{ $t('相关协议') }}</a>
        </template>
      </vuestic-checkbox>
      <div
        class="d-flex align--center justify--space-between down-container">
        <button class="btn btn-primary" type="button">
          {{ $t('注册') }}
        </button>
        <router-link class='link pl-2 text-center' :to="{name: 'login'}">
          {{ $t('已经加入') }}
        </router-link>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'signup',
  data () {
    return {
      agreedToTerms: true,
    }
  },
}
</script>

<style lang="scss">
.signup {
  @include media-breakpoint-down(md) {
    width: 100%;
    padding-right: 2rem;
    padding-left: 2rem;
  }

  h2 {
    text-align: center;
  }
  width: 21.375rem;

  .down-container {
    margin-top: 2.6875rem;
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
