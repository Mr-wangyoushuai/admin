<template>
  <div id="home">
    <el-breadcrumb class="w-padding" separator="/">
      <el-breadcrumb-item>代理商列表</el-breadcrumb-item>
    </el-breadcrumb>
    <span v-for="(one,index) in options" :key="index">
      <el-select size="small" v-model="one.value" :placeholder="one.placeholder">
        <el-option
          v-for="item in one.optionsdetail"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
    </span>

    <el-radio size="small" v-model="radio" label="1">用户名</el-radio>
    <el-radio size="small" v-model="radio" label="2">用户编号</el-radio>
    <el-input size="small" width="160" v-model="input" :placeholder="radio==1? '用户名':'用户编号'"></el-input>

    <div class="block">
      <el-date-picker
        size="small"
        v-model="timeValue"
        type="daterange"
        range-separator="至"
        start-placeholder="开始日期"
        end-placeholder="结束日期">
      </el-date-picker>
    </div>

    <el-button size="small" type="primary" icon="el-icon-search">搜索</el-button>
    <el-button size="small" type="info">重置</el-button>
    <!--表格-->
    <div class="table">
      <el-table
        :data="tableData"
        stripe
        style="width: 100%;"
        :header-cell-style="headerStyle"
        :row-style="rowStyle"
        height="640"
      >
        <el-table-column
          v-for="item,index in headTable"
          :key="index"
          :prop="item.prop"
          :label="item.label"
        >
          <!--<template slot-scope="scope">-->
          <!--&lt;!&ndash;<span style="margin-left: 10px">{{scope.row}}</span>&ndash;&gt;-->
          <!--</template>-->
        </el-table-column>

        <el-table-column
          label="操作"
          width="100">
          <template slot-scope="scope">
            <el-button @click="handleClick(scope.row.id)" type="text" size="small">查看</el-button>
            <el-button type="text" size="small">编辑</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <!--分页-->
    <div class="foot-pagination">
      <div class="block">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage"
          :page-sizes="pageSizes"
          :page-size="pSize"
          layout="total, sizes, prev, pager, next, jumper"
          :total="totalElements"
        >
        </el-pagination>
      </div>
    </div>


  </div>
</template>
<script>
  import {postRequest} from '@/service'
  let headTable = [
    {prop:'userName',label:'用户名'},
    {prop:'realName',label:'真实姓名'},
    {prop:'userCode',label:'用户编码'},
    {prop:"sex",label:'性别'},
    {prop:"wx",label:'微信'},
    {prop:"userType",label:'用户类型'},
    {prop:"orgName",label:'所属部门'},
    {prop:"esgin",label:'实名认证状态'}
  ];
  let tableData = [
    {esgin:0, curState:1,orgName:"华中大区-河南-三门峡市-渑池县",sex:"男",userCode:'12444534',userName:"13839808252",realName:'张三',userType:"代理商",wx:'12374545545'},
    {esgin:0, curState:1,orgName:"华中大区-河南-三门峡市-渑池县",sex:"男",userCode:'12444534',userName:"13839808252",realName:'张三',userType:"代理商",wx:'12374545545'},
    {esgin:0, curState:1,orgName:"华中大区-河南-三门峡市-渑池县",sex:"男",userCode:'12444534',userName:"13839808252",realName:'张三',userType:"代理商",wx:'12374545545'},
    {esgin:0, curState:1,orgName:"华中大区-河南-三门峡市-渑池县",sex:"男",userCode:'12444534',userName:"13839808252",realName:'张三',userType:"代理商",wx:'12374545545'},
    {esgin:0, curState:1,orgName:"华中大区-河南-三门峡市-渑池县",sex:"男",userCode:'12444534',userName:"13839808252",realName:'张三',userType:"代理商",wx:'12374545545'},
    {esgin:0, curState:1,orgName:"华中大区-河南-三门峡市-渑池县",sex:"男",userCode:'12444534',userName:"13839808252",realName:'张三',userType:"代理商",wx:'12374545545'},
    {esgin:0, curState:1,orgName:"华中大区-河南-三门峡市-渑池县",sex:"男",userCode:'12444534',userName:"13839808252",realName:'张三',userType:"代理商",wx:'12374545545'},
    {esgin:0, curState:1,orgName:"华中大区-河南-三门峡市-渑池县",sex:"男",userCode:'12444534',userName:"13839808252",realName:'张三',userType:"代理商",wx:'12374545545'},
    {esgin:1, curState:1,orgName:"华中大区-河南-三门峡市-渑池县",sex:"男",userCode:'12444534',userName:"13839808252",realName:'张三',userType:"代理商",wx:'12374545545'},
    {esgin:1, curState:1,orgName:"华中大区-河南-三门峡市-渑池县",sex:"男",userCode:'12444534',userName:"13839808252",realName:'张三',userType:"代理商",wx:'12374545545'},
    {esgin:0, curState:1,orgName:"华中大区-河南-三门峡市-渑池县",sex:"男",userCode:'12444534',userName:"13839808252",realName:'张三',userType:"代理商",wx:'12374545545'},{esgin:0, curState:1,orgName:"华中大区-河南-三门峡市-渑池县",sex:"男",userCode:'12444534',userName:"13839808252",realName:'张三',userType:"代理商",wx:'12374545545'},
    {esgin:1, curState:1,orgName:"华中大区-河南-三门峡市-渑池县",sex:"男",userCode:'12444534',userName:"13839808252",realName:'张三',userType:"代理商",wx:'12374545545'},
    {esgin:1, curState:1,orgName:"华中大区-河南-三门峡市-渑池县",sex:"男",userCode:'12444534',userName:"13839808252",realName:'张三',userType:"代理商",wx:'12374545545'},
    {esgin:0, curState:1,orgName:"华中大区-河南-三门峡市-渑池县",sex:"男",userCode:'12444534',userName:"13839808252",realName:'张三',userType:"代理商",wx:'12374545545'},{esgin:0, curState:1,orgName:"华中大区-河南-三门峡市-渑池县",sex:"男",userCode:'12444534',userName:"13839808252",realName:'张三',userType:"代理商",wx:'12374545545'},
    {esgin:1, curState:1,orgName:"华中大区-河南-三门峡市-渑池县",sex:"男",userCode:'12444534',userName:"13839808252",realName:'张三',userType:"代理商",wx:'12374545545'},
    {esgin:1, curState:1,orgName:"华中大区-河南-三门峡市-渑池县",sex:"男",userCode:'12444534',userName:"13839808252",realName:'张三',userType:"代理商",wx:'12374545545'},
    {esgin:0, curState:1,orgName:"华中大区-河南-三门峡市-渑池县",sex:"男",userCode:'12444534',userName:"13839808252",realName:'张三',userType:"代理商",wx:'12374545545'},{esgin:0, curState:1,orgName:"华中大区-河南-三门峡市-渑池县",sex:"男",userCode:'12444534',userName:"13839808252",realName:'张三',userType:"代理商",wx:'12374545545'},
    {esgin:1, curState:1,orgName:"华中大区-河南-三门峡市-渑池县",sex:"男",userCode:'12444534',userName:"13839808252",realName:'张三',userType:"代理商",wx:'12374545545'},
    {esgin:1, curState:1,orgName:"华中大区-河南-三门峡市-渑池县",sex:"男",userCode:'12444534',userName:"13839808252",realName:'张三',userType:"代理商",wx:'12374545545'},
    {esgin:0, curState:1,orgName:"华中大区-河南-三门峡市-渑池县",sex:"男",userCode:'12444534',userName:"13839808252",realName:'张三',userType:"代理商",wx:'12374545545'},{esgin:0, curState:1,orgName:"华中大区-河南-三门峡市-渑池县",sex:"男",userCode:'12444534',userName:"13839808252",realName:'张三',userType:"代理商",wx:'12374545545'},
    {esgin:1, curState:1,orgName:"华中大区-河南-三门峡市-渑池县",sex:"男",userCode:'12444534',userName:"13839808252",realName:'张三',userType:"代理商",wx:'12374545545'},
    {esgin:1, curState:1,orgName:"华中大区-河南-三门峡市-渑池县",sex:"男",userCode:'12444534',userName:"13839808252",realName:'张三',userType:"代理商",wx:'12374545545'},
    {esgin:0, curState:1,orgName:"华中大区-河南-三门峡市-渑池县",sex:"男",userCode:'12444534',userName:"13839808252",realName:'张三',userType:"代理商",wx:'12374545545'},
    {esgin:0, curState:1,orgName:"华中大区-河南-三门峡市-渑池县",sex:"男",userCode:'12444534',userName:"13839808252",realName:'张三',userType:"代理商",wx:'12374545545'}
    ]
  export default {
    name:'',
    data(){
      return{
        // 用户类型
        options:[
          {optionsdetail: [{value: '1', label: '创始人旗舰店'}, {value: '2', label: '旗舰店'}], placeholder:'请选择用户类型', value:''},
        // 实名认证
          {optionsdetail: [{value: '0',label: '未认证'}, {value: '1',label: '已认证'}, {value: '2',label: '已签署'}], placeholder:'实名认证状态', value:''},
        //后台认证
          {optionsdetail: [{value: '0', label: '未认证'}, {value: '1', label: '已认证'}], placeholder:'后台认证状态', value:''},
        ],
        // 单选
        radio:'1',
        input:'',
        //时间选择
        timeValue:'',
        //分页
        currentPage:0,
        pageSizes:[20, 40, 60, 80],
        pSize:20,
        //表
        tableData: tableData,
        headTable:headTable,
        totalElements:20,

      }
    },
    methods:{
      handleSizeChange(val) {
        this.pSize = val;
        this.requestData();
      },
      handleCurrentChange(val) {
        this.currentPage = val-1;
        this.requestData();
      },

      //表格操作
      handleClick(row) {
        console.log(row);
      },
      //表格表头样式设置
      headerStyle(row, column, rowIndex, columnIndex){
        if(row.columnIndex ==4){
          return{
            color:'#444ddd'
          }
        }else{
          return {
            color:'#555',
            'text-align': 'center'
          }
        }
      },
      rowStyle({row,rowIndex}){
        return {
          'text-align': 'center'
        }
      },
      // requestData(){
      //   let body = {
      //     page:this.currentPage,
      //     size:this.pSize,
      //   }
      //   postRequest('/api/web/user/',body)
      //     .then((res) => {
      //       this.tableData = res.data.content;
      //       console.log(this.tableData);
      //       this.totalElements = res.data.totalElements;
      //       //数据处理
      //       this.tableData = this.tableData.map(value=>{
      //         value.sex==1? value.sex='女': value.sex='男';
      //         value.userType==1? value.userType='代理商': value.userType='供应商';
      //         value.esgin==0? value.esgin='未认证': value.esgin==1? value.esgin='已认证' : value.esgin='已签署';
      //         return value
      //       })
      //       console.log(this.tableData)
      //     })
      // }
    },
    mounted(){
     // this.requestData();
    },
  }
</script>
<style scoped lang="stylus">
  @import "~@/assets/css/base.styl"
  .w-padding
    padding-bottom 20px;
  .el-select
    width: 150px;
    margin-left 5px
  .el-input
    display inline-block
    width: 200px;
  .el-radio
    margin-left 10px
  .el-radio+.el-radio
    margin-left 10px
  .block
    display: inline-block
    margin-left 15px
  .el-table thead
    background: #000
  .table
    width: 100%;
    height: auto;
    border: 1px solid #ccc;
    margin-top: 30px
    /*box-shadow 1px px 0px 50px #ccc;*/
  .foot-pagination >.block
    width: 400px;
    padding:30px 40px;
</style>

