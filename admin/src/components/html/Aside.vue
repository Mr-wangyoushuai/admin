<template>
  <div id="leftAside">
    <el-menu
      :style="height"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      :unique-opened= "openone"
      @close="handleClose"
      default-active="0">
      <el-menu-item index="0">
        <i class="el-icon-menu"></i>
        <span slot="title">首页</span>
      </el-menu-item>

      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>代理商管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="1-1">代理商-列表</el-menu-item>
          <el-menu-item index="1-2">代理商-添加</el-menu-item>
        </el-menu-item-group>
        <!--<el-submenu index="1-4">-->
        <!--<template slot="title">选项4</template>-->
        <!--<el-menu-item index="1-4-1">选项1</el-menu-item>-->
        <!--</el-submenu>-->
      </el-submenu>

      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>供应商管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="2-1">供应商-列表</el-menu-item>
          <el-menu-item index="2-2">供应商-添加</el-menu-item>
        </el-menu-item-group>
      </el-submenu>

      <el-submenu index="3">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>商品管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="3-1">商品-列表</el-menu-item>
          <el-menu-item index="3-2">商品-添加</el-menu-item>
          <el-menu-item index="3-3">商品-属性</el-menu-item>
          <el-menu-item index="3-4">属性-添加</el-menu-item>
          <el-menu-item index="3-5">分类-列表</el-menu-item>
          <el-menu-item index="3-6">类型-添加</el-menu-item>
        </el-menu-item-group>
      </el-submenu>

      <el-submenu index="4">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>订单管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="4-1">订单-列表</el-menu-item>
          <el-menu-item index="4-2">订单-统计</el-menu-item>
        </el-menu-item-group>
      </el-submenu>

      <el-submenu index="5">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>评价管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="5-1">评价-列表</el-menu-item>
        </el-menu-item-group>
      </el-submenu>

      <el-submenu index="6">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>订单管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="6-1">课程-列表</el-menu-item>
          <el-menu-item index="6-2">课程-添加</el-menu-item>
        </el-menu-item-group>
      </el-submenu>

      <el-submenu index="7">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>轮播图管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="7-1">轮播图-列表</el-menu-item>
          <el-menu-item index="7-2">轮播图-添加</el-menu-item>
        </el-menu-item-group>
      </el-submenu>

      <el-submenu index="8">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>消息管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="8-1">消息-列表</el-menu-item>
          <el-menu-item index="8-2">消息-添加</el-menu-item>
        </el-menu-item-group>
      </el-submenu>

      <el-submenu index="9">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>设置管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="9-1">合伙人</el-menu-item>
          <el-menu-item index="9-2">文章管理</el-menu-item>
          <el-menu-item index="9-3">天珑内容</el-menu-item>
        </el-menu-item-group>
      </el-submenu>

      <el-submenu index="10">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>系统管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="10-1">参数设置</el-menu-item>
        </el-menu-item-group>
      </el-submenu>

      <el-submenu index="11">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>机构管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="11-1">机构管理</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </div>



</template>
<script>
  export default {
    name: 'bigBox',
    data () {
      return{
        name: 'demo',
        openone:true,
        height:document.body.clientHeight
      }
    },
    mounted(){
      console.log(this.height)
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>

<style scoped lang="stylus">
  @import '~@/assets/css/base.styl'
  #leftAside
    height 674px
    overflow-y scroll
    overflow-x:hidden
    border-bottom 1px solid #E4E7ED


  /*#demo*/
  /*color color*/
  /*.el-container
    width: 100%;
    height:100%;
    position: absolute;
    left:0;
    top:0;*/
  /*.el-header*/
  /*background: #4b4b4b*/

</style>
