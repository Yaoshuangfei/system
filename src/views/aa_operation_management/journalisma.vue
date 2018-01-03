<template>
	<section>
		<!--工具条-->
		<!-- <el-col :span="24" class="toolbar" style="padding-bottom: 0px;background: #fff">
			<el-form :inline="true" :model="filters">
				<el-form-item>
					<el-button type="primary" v-on:click="addbanner">添加</el-button>
				</el-form-item>
			</el-form>
		</el-col> -->
		<el-col  :xs="24" :sm="24" :md="24" :lg="24" style="margin:20px auto;margin-left: 25%;color: #20a0ff;font-size: 16px;">发布新闻</el-col>
		<el-col :offset="1" :xs="22" :sm="22" :md="22" :lg="22" style="margin-top: 40px;border-bottom:1px solid #ddd;padding-bottom: 10px;">以下带<span style="color: red">*</span>为必选项</el-col>
		<el-col :offset="1" :xs="16" :sm="16" :md="16" :lg="16" style="margin-top: 20px;">
				<el-form label-width="150px"  :model="uploadDetails" :rules="rules" ref="uploadDetails" >.
					<el-form-item label="标题缩略图：">
						<input type="file" style="position:absolute;opacity:0;width:70px;height:30px;margin-right:10px"  @change="upload" id="fileInput">
						<button type="button" class="el-button el-button--primary el-button--small">
							<span>点击上传</span>
						</button>
						<!-- <button type="button" class="el-button el-button--primary el-button--small" id="btnClear" @click="clear">清空上传</button> -->
						<span style="display: block;font-size: 12px">{{ imageChange }}</span>
						<!--<button type="button" class="el-button el-button&#45;&#45;primary el-button&#45;&#45;small" id="btnClear" @click="clear">清空上传</button>-->
						<!--<span style="display: block;font-size: 12px">{{ imageChange }}</span>-->
					</el-form-item>
			       	<el-form-item label="公告标题：" prop="name">
						<el-input v-model="uploadDetails.uploadImgs" style="width: 500px;" type="text"></el-input>
					</el-form-item>
					<el-form-item label="公告类型：" prop="name">
						<el-select v-model="uploadDetails.poType" placeholder="请选择">
					    <el-option
					      v-for="item in options"
					      :key="item.value"
					      :label="item.label"
					      :value="item.value">
					    </el-option>
					  </el-select>
					</el-form-item>
					<el-form-item label="公告ID：" >
						<el-input v-model="uploadDetails.List" style="width: 500px;" type="text"></el-input>
					</el-form-item>
					<el-form-item label="活动链接：" >
						<el-input v-model="uploadDetails.List" style="width: 500px;" type="text"></el-input>
					</el-form-item>
					<el-form-item label="公告：" prop="name">
						<el-input v-model="uploadDetails.uploadImgs" style="width: 500px;" type="text"></el-input>
					</el-form-item>
					<el-form-item label="公告置顶：" prop="name">
						<el-radio-group v-model="radio">
						    <el-radio :label="1">是</el-radio>
						    <el-radio :label="0">否</el-radio>
						</el-radio-group>
					</el-form-item>
					<el-form-item label="描述：">
						<div id = 'editor-trigger' style="height: 480px"></div>
					</el-form-item>
					<el-col :span='24' style="margin-left:300px;">
						<el-button type="primary" @click.native="submitUpload" :loading="editLoading">预览</el-button>
						<el-button type="primary" @click.native="submitUpload" :loading="editLoading">发布</el-button>
					</el-col>
			    </el-form>
			</el-col>
	</section>
</template>

<script>
	import { state } from '../../vuex/state'
	import util from '../../common/js/util'
	import {baseUrl , editUser, addUser } from '../../api/api';
	import wangEditor from 'wangEditor'

	export default {
		data() {
			return {
				radio: 1,
				checked: true,
				value:'',
				value1:'',
				value2:'',
				url:'',
				urls:'',
				options: [{
		          value: '1',
		          label: '隐藏公告(用作SEO优化)'
		        }, {
		          value: '2',
		          label: '平台公告'
		        }, {
		          value: '3',
		          label: '获奖公告'
		        }, {
		          value: '4',
		          label: '媒体公告'
		        }, {
		          value: '5',
		          label: '系统消息'
		        }, {
		          value: '6',
		          label: '活动中心'
		        }],
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
				rules: {
					name: [
						{ required: true, message: '新闻标题', trigger: 'blur' }
					]
				},
				//编辑界面数据
				editForm:{},

				addbannerdiv: false,//新增界面是否显示
                modifybannerdiv: false,//新增界面是否显示
				addLoading: false,
				//新增界面数据
				uploadDetails: {
					poType:'',
				},
				//新增界面数据
                modifyDetails: {
				},
				orderInformation:[{
					uploadImg :'145877458784524c',
					courierNumber :'145877458784524c22',
					userName:'吸引力量',
					amountPaid :'300',
					orderTotal :'900',
					orderStatus :'待付款',
					paymentMethod :'微信支付',
					creationTime:'2017-09-08 17:09',
					deliveryTime:'2017-09-08 17:09',
					commodityName:'雨花说'
				}],
                formData: new FormData(),
                fileImg: ''
			}
		},
        computed: {
        	wangEditor,
            // 实时更新上传图片的名字，仅读取，值只须为函数
            imageChange: function () {
                return this.fileImg
            }
        },
		methods: {
//		    清空上传
            clear(){
                let btn = document.getElementById("btnClear");
                let files = document.getElementById("fileInput");
                this.fileImg = '';
                // for IE, Opera, Safari, Chrome
                if (files !== null && files.value) {
                    //     files.outerHTML = files.outerHTML;
                    // } else { // FF(包括3.5)
                    files.value = "";
                    this.formData = new FormData()
                }
            },
		    //图片上传
            upload (event) {
                this.formData = new FormData()
                let file = event.target.files[0]
                // console.log(file)
                const self = this
                // const flag = this.flag
                if (file) {
                    console.log('存在file', file)
                    console.log(file.size)
                    this.fileImg = file.name
                    // console.log(this.formData)
                    this.formData.append('file', file);
                    console.log(this.formData);
                } else {
                    this.fileImg = ''
                    console.log('不存在file', file)
                    this.formData = new FormData()
                }
            },
            //添加
            submitUpload(){
                this.$confirm('确认发布吗？', '提示', {}).then(() => {
                    const _this= this;
                    _this.$http.post(baseUrl+'/api/attachment/upload', _this.formData, {
                        progress(event) {
                        }
                    })
                        .then(response => {
                            const info = JSON.parse(response.bodyText);
                            // const info = response.body
							_this.url = info.data[0].baseUri+info.data[0].uri;
                            _this.UploadImg();
                        }, error => _this.$emit('complete', 500, error.message))
                });
            },
//			图片上传ajax
			UploadImg(){
                const _this= this;
                const params = {
                    link:this.uploadDetails.uploadImgs,
                    picture:this.url,
                    orderSort:this.uploadDetails.List,
                    poType:this.uploadDetails.poType,
                    desc:this.uploadDetails.information,
                };
                console.log(params)
                var url = baseUrl+"/api/indexAdvert/add";
                var data =JSON.stringify(params);
                $.ajax({
                    type:'POST',
                    dataType:'json',
                    url:url,
                    data:data,
                    contentType:'application/json;charset=utf-8',
                    error: function (XMLHttpRequest, textStatus, errorThrown) {},
                    success:function(data){
                        if(!data.success){
                            alert(data.msg)
						}else{
                            _this.addbannerdiv = false;
                            _this.getlist();
						}
                    }
                });


			},
			getlist(){
				const _this = this;
                _this.orderInformation = [];
				const params = {
                    poType:''
				};
                var url = baseUrl+"/api/indexAdvert/find/page?pageNum="+_this.page+"&pageSize=10";
                var data =JSON.stringify(params);
                $.ajax({
                    type:'POST',
                    dataType:'json',
                    url:url,
                    data:data,
                    contentType:'application/json;charset=utf-8',
                    success:function(data){
                        if(!data.success){
                            alert(data.msg)
                        }else{
                        	console.log(data)
                            var _length 	= data.data.list;
                            _this.total 	= data.data.total;
                            for (var i = 0; i < _length.length; i++) {
                                _this.orderInformation.push(_length[i]);
                            }
                        }
                    }
                });
			},
			handleCurrentChange(val) {
				this.page = val;
				this.getlist();
			},
			//删除
            handleEdit: function (index, row) {
				this.$confirm('确认删除该记录吗?', '提示', {
					type: 'warning'
				}).then(() => {
                    const _this= this;
                    const params = {
                        id:row.id
                    };
                    var url = baseUrl+"/api/indexAdvert/delete/one";
                    var data =JSON.stringify(params);
                    $.ajax({
                        type:'POST',
                        dataType:'json',
                        url:url,
                        data:data,
                        contentType:'application/json;charset=utf-8',
                        error: function (XMLHttpRequest, textStatus, errorThrown) {},
                        success:function(data){
                            if(!data.success){
                                alert(data.msg)
                            }else{
                                _this.$message({
                                    message: '删除成功',
                                    type: 'success'
                                });
                                _this.getlist();
                            }
                        }
                    });
//					this.listLoading = true;
					//NProgress.start();
//					let para = { id: row.id };
//					removeUser(para).then((res) => {
//						this.listLoading = false;
//						//NProgress.done();
//						this.$message({
//							message: '删除成功',
//							type: 'success'
//						});
//						this.getUsers();
//					});
				}).catch(() => {

				});
			},
            //启用
            handEnabled: function (index, row) {
                this.$confirm('确认启用该广告位吗?', '提示', {
                    type: 'warning'
                }).then(() => {
                    const _this= this;
                    const params = {
                        id:row.id
                    };
                    var url = baseUrl+"/api/indexAdvert/enable";
                    var data =JSON.stringify(params);
                    $.ajax({
                        type:'POST',
                        dataType:'json',
                        url:url,
                        data:data,
                        contentType:'application/json;charset=utf-8',
                        error: function (XMLHttpRequest, textStatus, errorThrown) {},
                        success:function(data){
                            if(!data.success){
                                alert(data.msg)
                            }else{
                                _this.$message({
                                    message: '启用成功',
                                    type: 'success'
                                });
                                _this.getlist();
                            }
                        }
                    });
//					this.listLoading = true;
                    //NProgress.start();
//					let para = { id: row.id };
//					removeUser(para).then((res) => {
//						this.listLoading = false;
//						//NProgress.done();
//						this.$message({
//							message: '删除成功',
//							type: 'success'
//						});
//						this.getUsers();
//					});
                }).catch(() => {

                });
            },
            //禁用
            handDisabled: function (index, row) {
                this.$confirm('确认禁用该广告位吗?', '提示', {
                    type: 'warning'
                }).then(() => {
                    const _this= this;
                    const params = {
                        id:row.id
                    };
                    var url = baseUrl+"/api/indexAdvert/disable";
                    var data =JSON.stringify(params);
                    $.ajax({
                        type:'POST',
                        dataType:'json',
                        url:url,
                        data:data,
                        contentType:'application/json;charset=utf-8',
                        error: function (XMLHttpRequest, textStatus, errorThrown) {},
                        success:function(data){
                            if(!data.success){
                                alert(data.msg)
                            }else{
                                _this.$message({
                                    message: '禁用成功',
                                    type: 'success'
                                });
                                _this.getlist();
                            }
                        }
                    });
//					this.listLoading = true;
                    //NProgress.start();
//					let para = { id: row.id };
//					removeUser(para).then((res) => {
//						this.listLoading = false;
//						//NProgress.done();
//						this.$message({
//							message: '删除成功',
//							type: 'success'
//						});
//						this.getUsers();
//					});
                }).catch(() => {

                });
            },

//			修改
            handmodify: function (index, row) {
			    this.modifybannerdiv = true;
			    this.editForm = row;
            },


//            清空上传
            modifyclear(){
        let btn = document.getElementById("btnClears");
        let files = document.getElementById("fileInputs");
        this.fileImg = '';
        // for IE, Opera, Safari, Chrome
        if (files !== null && files.value) {
            //     files.outerHTML = files.outerHTML;
            // } else { // FF(包括3.5)
            files.value = "";
            this.formData = new FormData()
        }
    },
    //图片上传后修改
            modifyload (event) {
        this.formData = new FormData()
        let file = event.target.files[0]
        // console.log(file)
        const self = this
        // const flag = this.flag
        if (file) {
            console.log('存在file', file)
            this.fileImg = file.name
            // console.log(this.formData)
            this.formData.append('file', file);
            console.log(this.formData);
        } else {
            this.fileImg = ''
            console.log('不存在file', file)
            this.formData = new FormData()
        }
    },
    //修改
            modifyUpload(){
        this.$confirm('确认修改吗？', '提示', {}).then(() => {
            const _this= this;
            _this.$http.post('http://121.43.178.109:8080/ser/api/attachment/upload', _this.formData, {
                progress(event) {
                }
            })
                .then(response => {
                    const info = JSON.parse(response.bodyText);
                    _this.urls = info.data[0].baseUri+info.data[0].uri;
                    _this.modifyUploads();
                }, error => _this.$emit('complete', 500, error.message))
        });
    },
    //			图片上传ajax
            modifyUploads(){
        const _this= this;
        const params = {
            id:this.editForm.id,
            link:this.editForm.link,
            picture:this.urls,
            orderSort:this.editForm.orderSort,
            desc:this.editForm.desc,
        };
        var url = baseUrl+"/api/indexAdvert/update";
        var data =JSON.stringify(params);
        $.ajax({
            type:'POST',
            dataType:'json',
            url:url,
            data:data,
            contentType:'application/json;charset=utf-8',
            error: function (XMLHttpRequest, textStatus, errorThrown) {},
            success:function(data){
                if(!data.success){
                    alert(data.msg)
                }else{
                    _this.modifybannerdiv = false;
                    _this.getlist();
                }
            }
        });


    },




			//显示编辑界面
			seeBtn: function (index, row) {
				this.editFormVisible = true;
				this.uploadDetails = Object.assign({}, row);
			},
			//显示添加banner页面
			addbanner: function (index, row) {
				this.addbannerdiv = true;
				// this.uploadDetails = Object.assign({}, row);
			},
			//编辑

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
			},
            formatterTime(row,column){
                let curTime = row.createTime;
                curTime = new Date(curTime).toLocaleString()
                return curTime
            },
            formatterType(row,column){
                let type = ''
                if(row.status === 1){
                	type = '启用'
                }else{
                	type = '禁用'
                }
                return type
            },
            formatterpoType(row,column) {
            	return row.poType === 1 ?'首页':'店铺内'
            },
            initEditor(data) {
                const _this = this
                const editor = new wangEditor('editor-trigger')
                editor.config.uploadImgUrl = baseUrl+'/api/attachment/upload'
                editor.config.uploadHeaders = {
                    'contentType' : 'application/json;charset=utf-8'
                }

                editor.config.menus = [
                    'source',
                    '|',
                    'bold',
                    'underline',
                    'italic',
                    'strikethrough',
                    'eraser',
                    'forecolor',
                    'bgcolor',
                    '|',
                    'quote',
                    'fontfamily',
                    'fontsize',
                    'head',
                    'unorderlist',
                    'orderlist',
                    'alignleft',
                    'aligncenter',
                    'alignright',
                    '|',
                    'link',
                    'unlink',
                    'table',
                    // 'emotion',
                    '|',
                    'img',
                    '|',
                    'undo',
                    'redo',
                    'fullscreen'
                ]
                editor.onchange = function () {
                    // 编辑区域内容变化时，实时打印出当前内容
                    _this.test_html = this.$txt.html()
                    console.log(_this.test_html);
                }
                editor.create()
            },
		},
		mounted() {
			 // this.getlist();
			 this.initEditor()
		}
	}
</script>

<style>
	.inputW:{
		width: 300px;
	}
</style>