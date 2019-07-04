<template>
  <div class="profile-dropdown flex-center">
    <span class="profile-dropdown__avatar-container">
      <!-- <slot/> -->
      <img src="https://www.coral3.com/ds/img/test.gif" alt="">
    </span>
    <vuestic-dropdown
      v-model="isShown"
      position="bottom"
    >
      <div
        v-for="option in options"
        :key="option.name"
        class="dropdown-item plain-link-item"
      >
        <router-link :to="{name: option.redirectTo}" class="plain-link"
                     href="#">
          {{ $t(`${option.name}`) }}
        </router-link>
      </div>
    </vuestic-dropdown>
  </div>
</template>

<script>
export default {
  name: 'profile-section',
  data () {
    return {
      isShown: false,
    }
  },
  props: {
    options: {
      type: Array,
      default: () => [
        {
          name: '简介',
          redirectTo: '',
        },
        {
          name: '登出',
          redirectTo: 'login',
        },
      ],
    },
  },
}
</script>

<style lang="scss">
@import '../../../../../vuestic-theme/vuestic-sass/resources/resources';

.profile-dropdown {
  cursor: pointer;

  &__avatar-container {
    display: inline-block;
    width: 50px;
    height: 50px;
    background-color: #4A4AFF;
    border-radius: 50%;
    border: 2px solid transparent;
    overflow: hidden;

    img {
      height: 100%;
      width: 100%;
    }
  }
}
</style>
