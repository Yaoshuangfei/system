<template>
  <section>
    <!--工具条-->
    <!-- <el-col :span="24" class="toolbar" style="padding-bottom: 0px;background: #fff">
      <el-form :inline="true" :model="filters">
        <el-form-item>
          <el-input v-model="filters.name" placeholder="支付银行"></el-input>
        </el-form-item>
        <el-form-item label="状态">
          <el-select v-model="filters.status" clearable>
              <el-option v-for="item in selectSubjectStatus" :label="item.label" :value="item.value">
              </el-option>
            </el-select>
        </el-form-item>
        <el-form-item label="搜索类型">
            <el-select v-model="filters.type" clearable>
              <el-option v-for="item in options" :label="item.label" :value="item.value">
              </el-option>
            </el-select>
        </el-form-item>
        <el-form-item>
            <el-input v-model="filters.name"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" v-on:click="getUsers">查询</el-button>
        </el-form-item>
      </el-form>
    </el-col> -->
    <el-form :model="filters" label-width="180px" style="margin-left: 40px;margin-top: 40px">
      <el-form-item label="法人姓名">
        <el-input v-model="filters.name" style="width:400px"></el-input>
      </el-form-item>
      <el-form-item label="法人身份">
        <el-input v-model="filters.name" style="width:400px"></el-input>
      </el-form-item>
      <el-form-item label="手机号">
        <el-input v-model="filters.name" style="width:400px"></el-input>
      </el-form-item>
      <el-form-item label="对公账户账号">
        <el-input v-model="filters.name" style="width:400px"></el-input>
      </el-form-item>
      <el-form-item label="运营地址">
        <el-input v-model="filters.name" style="width:400px"></el-input>
      </el-form-item>
      <el-form-item label="上传法人身份证">
        <el-input v-model="filters.name" style="width:400px"></el-input>
      </el-form-item>
      <el-form-item label="上传法人手持身份证">
        <el-input v-model="filters.name" style="width:400px"></el-input>
      </el-form-item>
      <el-form-item label="上传营业执照">
        <el-input v-model="filters.name" style="width:400px"></el-input>
      </el-form-item>
      <el-form-item label="上传银行开户许可证">
        <el-input v-model="filters.name" style="width:400px"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">保存</el-button>
        <el-button>取消</el-button>
      </el-form-item>
  </el-form>
    <!--编辑界面-->
    <el-dialog title="订单详情" v-model="editFormVisible" :close-on-click-modal="false" >
      <el-form :model="orderDetails" label-width="160px" :rules="editFormRules" ref="editForm">
        <el-form-item label="订单号">
          <div>{{orderDetails.orderNumber }}</div>
          <!-- <el-input v-model="addForm.name" type="text" auto-complete="off"></el-input> -->
        </el-form-item>
        <el-form-item label="商品名称">
          <div>{{orderDetails.commodityName}}</div>
        </el-form-item>
        <el-form-item label="用户名">
          <div>{{orderDetails.userName }}</div>
        </el-form-item>
        <el-form-item label="实付金额">
          <div>{{orderDetails.amountPaid }}</div>
        </el-form-item>
        <el-form-item label="订单总价">
          <div>{{orderDetails.orderTotal }}</div>
        </el-form-item>
        <el-form-item label="订单状态">
          <div>{{orderDetails.orderStatus }}</div>
        </el-form-item>
        <el-form-item label="支付方式">
          <div>{{orderDetails.paymentMethod }}</div>
        </el-form-item>
        <el-form-item label="创建时间">
          <div>{{orderDetails.creationTime}}</div>
        </el-form-item>
        <el-form-item label="发货时间">
          <div>{{orderDetails.deliveryTime}}</div>
        </el-form-item>
        <el-col :span='24'></el-col>
      </el-form>
      <div slot="footer" class="dialog-footer" style="text-align: center;">
        <!-- <el-button type="primary" @click.native="editSubmit" :loading="editLoading">保存</el-button> -->
        <el-button type="primary" @click.native="editFormVisible = false">关闭</el-button>
      </div>
    </el-dialog>
  </section>
</template>

<script>
  import { state } from '../../vuex/state'
  import util from '../../common/js/util'
  import {baseUrl , editUser, addUser } from '../../api/api';

  export default {
    data() {
      return {
        radio: '0',
        checked: true,
        value:'',
        value1:true,
        value2:'',
        selectSubjectStatus: [
        {
          value:'0',
          label:'全部'
        },{
          value:'1',
          label:'待付款'
        },{
          value:'2',
          label:'待发货'
        },{
          value:'3',
          label:'已发货'
        },{
          value:'4',
          label:'待评价'
        },{
          value:'5',
          label:'退货'
        }],
        options: [{
              value: '0',
              label: '全部'
            }, {
              value: '1',
              label: '订单编号'
            }, {
              value: '2',
              label: '快递单号'
            }, {
              value: '3',
              label: '用户名'
            }],
        filters: {
          name: '',
          status:'',
          type:''
        },
        users: [],
        total: 100,
        page: 1,
        listLoading: false,
        sels: [],//列表选中列

        editFormVisible: false,//编辑界面是否显示
        editLoading: false,
        editFormRules: {
          name: [
            { required: true, message: '请输入姓名', trigger: 'blur' }
          ]
        },
        //编辑界面数据
        editForm: {
          id: 0,
          username: '',
          sex: -1,
          age: 0,
          birth: '',
          addr: ''
        },

        addFormVisible: false,//新增界面是否显示
        addLoading: false,
        //新增界面数据
        orderDetails: {
        },
        orderInformation:[{
          orderNumber :'145877458784524c',
          courierNumber :'145877458784524c',
          userName:'吸引力量',
          amountPaid :'300',
          orderTotal :'900',
          orderStatus :'待付款',
          paymentMethod :'微信支付',
          creationTime:'2017-09-08 17:09',
          deliveryTime:'2017-09-08 17:09',
          commodityName:'雨花说'
        }]
      }
    },
    methods: {
      //性别显示转换
      formatSex: function (row, column) {
        return row.sex == 1 ? '男' : row.sex == 0 ? '女' : '未知';
      },
      getlist(){
        const _this = this
        _this.table = []
        const params = {
          accountId:'1',
          accessToken:'',
          resourceType:'',
          page:{
            pageNum:_this.page,
            pageSize:'10'
          }
        }
        console.log(params)
        $.post(baseUrl+"/admin/banner/getBannerByPage",
               { param: JSON.stringify(params) },
               function(data){
                const info = eval('(' + data + ')');
                  const response = JSON.parse(info);
                  const list = response.obj.results
                  console.log(response)
                  // _this.page = response.obj.total
                  _this.total = response.obj.totalRecord
                  for(var i = 0;i<list.length;i++){
                    _this.table.push(list[i])
                  }
                }
            )
      },
      handleCurrentChange(val) {
        this.page = val;
        this.getUsers();
      },
      //获取用户列表
      getUsers() {
        let para = {
          page: this.page,
          name: this.filters.name
        };
        this.listLoading = true;
        //NProgress.start();
        getUserListPage(para).then((res) => {
          this.total = res.data.total;
          this.users = res.data.users;
          this.listLoading = false;
          //NProgress.done();
        });
      },
      //删除
      handleDel: function (index, row) {
        this.$confirm('确认删除该记录吗?', '提示', {
          type: 'warning'
        }).then(() => {
          this.listLoading = true;
          //NProgress.start();
          let para = { id: row.id };
          removeUser(para).then((res) => {
            this.listLoading = false;
            //NProgress.done();
            this.$message({
              message: '删除成功',
              type: 'success'
            });
            this.getUsers();
          });
        }).catch(() => {

        });
      },
      //显示编辑界面
      seeBtn: function (index, row) {
        this.editFormVisible = true;
        this.orderDetails = Object.assign({}, row);
      },
      //显示新增界面
      handleAdd: function () {
        this.addFormVisible = true;
        this.addForm = {
          name: '',
          sex: -1,
          age: 0,
          birth: '',
          addr: ''
        };
      },
      //编辑
      editSubmit: function () {
        this.$refs.editForm.validate((valid) => {
          if (valid) {
            this.$confirm('确认提交吗？', '提示', {}).then(() => {
              this.editLoading = true;
              //NProgress.start();
              let para = Object.assign({}, this.editForm);
              para.birth = (!para.birth || para.birth == '') ? '' : util.formatDate.format(new Date(para.birth), 'yyyy-MM-dd');
              editUser(para).then((res) => {
                this.editLoading = false;
                //NProgress.done();
                this.$message({
                  message: '提交成功',
                  type: 'success'
                });
                this.$refs['editForm'].resetFields();
                this.editFormVisible = false;
                this.getUsers();
              });
            });
          }
        });
      },
      //新增
      addSubmit: function () {
        this.$refs.addForm.validate((valid) => {
          if (valid) {
            this.$confirm('确认提交吗？', '提示', {}).then(() => {
              this.addLoading = true;
              //NProgress.start();
              let para = Object.assign({}, this.addForm);
              para.birth = (!para.birth || para.birth == '') ? '' : util.formatDate.format(new Date(para.birth), 'yyyy-MM-dd');
              addUser(para).then((res) => {
                this.addLoading = false;
                //NProgress.done();
                this.$message({
                  message: '提交成功',
                  type: 'success'
                });
                this.$refs['addForm'].resetFields();
                this.addFormVisible = false;
                this.getUsers();
              });
            });
          }
        });
      },
      selsChange: function (sels) {
        this.sels = sels;
      },
      //批量删除
      batchRemove: function () {
        var ids = this.sels.map(item => item.id).toString();
        this.$confirm('确认删除选中记录吗？', '提示', {
          type: 'warning'
        }).then(() => {
          this.listLoading = true;
          //NProgress.start();
          let para = { ids: ids };
          batchRemoveUser(para).then((res) => {
            this.listLoading = false;
            //NProgress.done();
            this.$message({
              message: '删除成功',
              type: 'success'
            });
            this.getUsers();
          });
        }).catch(() => {

        });
      }
    },
    mounted() {
      // this.getlist();
    }
  }

</script>

<style>
  
  .el-form-item__label{
    text-align: left;
  }
</style>