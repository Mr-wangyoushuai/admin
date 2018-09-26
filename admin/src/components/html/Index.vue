<template>
  <el-container>
    <el-header>Header</el-header>
    <el-container>
      <el-aside width="220px">
        <!--<keep-alive>-->
          <left/>
        <!--</keep-alive>-->
      </el-aside>
      <el-main>
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </el-main>
    </el-container>
  </el-container>
</template>
<script>
  import left from '@/components/html/Aside.vue'
export default {
  name: 'bigBox',
  components: {
    left
  },
  data () {
    return{
      name: 'demo',
    }
  }
}
</script>

<style scoped lang="stylus">
@import '~@/assets/css/base.styl'
/*#demo*/
  /*color color*/
/*.el-container
  width: 100%;
  height:100%;
  position: absolute;
  left:0;
  top:0;*/
.el-container
  width: 100%;
  .el-header
    height 80px !important
    background: #4b4b4b

</style>

