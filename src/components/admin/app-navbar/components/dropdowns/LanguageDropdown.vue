<template>
  <div class="language-dropdown flex-center">
    <span class="fa fa-gratipay font-color font-size"></span>
    <vuestic-dropdown
      class="language-dropdown__container"
      v-model="isShown"
      position="bottom"
    >
      <a class="dropdown-item"
         v-for="(option, id) in options"
         :key="id"
         :class="{ active: option.code === currentLanguage() }"
         @click="setLanguage(option.code)"
      >
        <!-- <span class="flag-icon flag-icon-small"
              :class="flagIconClass(option.code)"></span> -->
        <span class="fa fa-gratipay font-color"></span>
        <span class="dropdown-item__text ellipsis">
          {{ `${option.name}` | translate }}
        </span>
      </a>
    </vuestic-dropdown>
  </div>
</template>

<script>
import Vue from 'vue'

export default {
  name: 'language-dropdown',
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
          code: 'gb',
          name: '中文',
        },
        
      ],
    },
  },
  methods: {
    setLanguage (locale) {
      Vue.i18n.set(locale)
    },

    currentLanguage () {
      return Vue.i18n.locale() === 'en' ? 'gb' : Vue.i18n.locale()
    },

    flagIconClass (code) {
      return `flag-icon-${code}`
    },
  },
}
</script>

<style lang="scss">
@import '../../../../../vuestic-theme/vuestic-sass/resources/resources';
@import "~flag-icon-css/css/flag-icon.css";

.language-dropdown {
  cursor: pointer;
  .flag-icon-large {
    display: block;
    width: 31px;
    height: 23px;
  }

  @at-root {
    &__container {
      .flag-icon-small {
        min-width: 22px;
        height: 17px;
        margin-right: 12px;
      }
    }
  }
}
.font-color{
  color:red;
  margin-right:3px;
}
.font-size{
  font-size:38px;
  color:#4ae387;
}
</style>
