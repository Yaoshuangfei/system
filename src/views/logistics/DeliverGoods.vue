<template>
		<transition name="fade" mode="out-in">
			<router-view></router-view>
		</transition>
</template>

<script>
	import { state } from '../../vuex/state'
	import util from '../../common/js/util'
	import {baseUrl , editUser, addUser } from '../../api/api';

	export default {
		data() {
			return {
				keyvalue: '',
				expno:'',
				ddId:'',
				dpId:'',
				checked: true,
				value:'',
				value1:'',
				value2:'',
				selectSubjectStatus: [],
				options: [{
		          value: '0',
		          label: '全部'
		        }, {
		          value: '1',
		          label: '订单编号'
		        }, {
		          value: '2',
		          label: '快递单号'
		        }],
		        optionKey:[],
				filters: {
					name: '',
					status:'',
					type:''
				},
				users: [],
				total: 0,
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
			fahuoBtn(row){
				this.optionKey = []
				this.keyvalue =''
				this.expno = ''
				console.log(row)
				this.editFormVisible = true
				this.ddId = row.id
				this.dpId = row.storeId
			},
			keyup(){
				const _this = this
				const params = {
					expno:this.expno
				}
				$.ajax({
                    type:'POST',
                    dataType:'json',
                    url:baseUrl+"/api/orderMall/orderTracesByJson",
                    data:JSON.stringify(params),
                    contentType:'application/json;charset=utf-8',
                    error: function (XMLHttpRequest, textStatus, errorThrown) {},
                    success:function(data){
                    	console.log(data.data)
                    	_this.optionKey = []
                    	if(data.data !== null && data.data !== []){
                    		for(var i = 0;i<data.data.length;i++){
                    			const obj = {}
                    			obj.value = data.data[i].ShipperCode
                    			obj.label = data.data[i].ShipperName
                    			_this.optionKey.push(obj)
                    			_this.keyvalue = obj.value
                    		}
                    	}
                    	console.log(_this.optionKey)
                    }
                });
			},
			upSubmit() {
				console.log(this.keyvalue)
				console.log(this.expno)
				let express = ''
				for(var i = 0;i<this.optionKey.length;i++){
					if(this.keyvalue === this.optionKey[i].value){
						express = this.optionKey[i].label
					}
				}
				const _this = this
				const params = {
					id:this.ddId,
					storeId:this.dpId,
					expno:this.expno,
					expressName:express,
					expressCode:this.keyvalue,
				}
				console.log(params)
				$.ajax({
                    type:'POST',
                    dataType:'json',
                    url:baseUrl+"/api/orderMall/delivery",
                    data:JSON.stringify(params),
                    contentType:'application/json;charset=utf-8',
                    error: function (XMLHttpRequest, textStatus, errorThrown) {},
                    success:function(data){
                    	console.log(data)
                    	_this.editFormVisible = false
                    	_this.getlist()
                    }
                });
			},
			getlist(){
				const _this = this
				this.selectSubjectStatus = []
				const params = {
					pageNum:this.page,
					size:10,
					storeId:state.storeId,
					orderStatus:2,
					orderId:'',
					expno:''
				}
				if(this.filters.type !== ''){
					if(this.filters.type === '1'){
						params.orderId = this.filters.name
					}else if(this.filters.type === '2'){
						params.expno = this.filters.name
					}
				}
				console.log(params)
				$.ajax({
                    type:'POST',
                    dataType:'json',
                    url:baseUrl+"/api/orderMall/selectListAll",
                    data:JSON.stringify(params),
                    contentType:'application/json;charset=utf-8',
                    error: function (XMLHttpRequest, textStatus, errorThrown) {},
                    success:function(data){
                    	const info = data.data
                    	_this.total = info.total
                    	_this.selectSubjectStatus = info.list
                    	console.log(_this.selectSubjectStatus)
                    	for(var i = 0;i<_this.selectSubjectStatus.length;i++){
                    		_this.selectSubjectStatus[i].createTime = new Date(_this.selectSubjectStatus[i].createTime).toLocaleString()
                    	}
                    }
                });
			},

			delivery(value,expno,expressName,expressCode){
				const _this = this
				const params = {
					id:value,
					storeId:state.storeId,
					expno:expno,
					expressName:expressName,
					expressCode:expressCode
				}
				console.log(params)
				$.ajax({
                    type:'POST',
                    dataType:'json',
                    url:baseUrl+"/api/orderMall/delivery",
                    data:JSON.stringify(params),
                    contentType:'application/json;charset=utf-8',
                    error: function (XMLHttpRequest, textStatus, errorThrown) {},
                    success:function(data){
                    	console.log(data)
                    }
                });
			},
			handleCurrentChange(val) {
				this.page = val;
				this.getlist();
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
			this.getlist();
		}
	}

</script>

<style>

</style>