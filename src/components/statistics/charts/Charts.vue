<template>
  <div class="charts-page">
    <span @click="goDashBoad">
       {{data}}
      许子豪，郑观广
    </span>
     
  </div>
</template>

<script>

export default {
  name: 'charts',
  components: {
   
  },
  data(){
   return{
     data:'你好，世界，你好-子豪，你好-观广'
   }
  },
  methods: {
    goDashBoad(){
      // 去监控大盘
      this.$router.push({
        path:'dashboard'
      });
    }
  },
}
</script>

<style lang="scss">
.widget.chart-widget {
  .widget-body {
    height: 550px;
  }
}
</style>
