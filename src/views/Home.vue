
<template>
	<el-row class="container">
		<!-- 顶部 -->
		<el-col :span="24" class="header">
			<el-col :span="10" class="logo" :class="collapsed?'logo-collapse-width':'logo-width'">
				{{collapsed?'':sysName}}
			</el-col>
			<el-col :span="2">
				<div class="tools" @click.prevent="collapse">
					<i class="fa fa-align-justify"></i>
				</div>
			</el-col>
			<el-col :span="3">
					欢迎您，1111admin！
			</el-col>
			<el-col :span="2" class="setBtn">
				<div @click="dialogSet = true">
					个人设置
				</div>
			</el-col>
			<el-col :span="2" class="setBtn">
				<div @click="dialogPsw = true">
					修改密码
				</div>
			</el-col>
			<el-col :span="2" class="setBtn">
				<div @click.prevent="logout">
					退出登录
				</div>
			</el-col>
		</el-col>
		<!-- 顶部end -->

		<!-- 左侧导航 -->
		<el-col :span="24" class="main">
			<aside :class="collapsed?'menu-collapsed':'menu-expanded'">
				<!--导航菜单-->
				<el-menu :default-active="$route.path" class="el-menu-vertical-demo"
					 unique-opened router v-show="!collapsed">


					<template v-for="(item,index) in $router.options.routes" v-if="!item.hidden">
						<el-submenu :index="index+''" v-if="!item.leaf">
							<!-- 一级菜单 -->
							<template slot="title"><i :class="item.iconCls"></i>{{item.name}}</template>
							<!-- 二级菜单     判断是否有三级菜单 有  则继续循环-->
							<el-submenu v-for="(child,to) in item.children" :index="index+'-'+ to" v-if="!child.hidden && child.children">
								<template slot="title">{{child.name}}</template>
								<!-- 三级菜单 -->
								<el-menu-item  v-for="tag in child.children" :index="tag.path" :key="tag.path" v-if="!tag.hidden" @click="tagList(tag)">{{tag.name}}</el-menu-item>

							</el-submenu>
							<!-- 没有三级菜单时调用 -->
							<el-menu-item :index="child.path" :key="child.path" @click="tagList(child)" v-else>{{child.name}}</el-menu-item>
						</el-submenu>
						
						<!-- <el-submenu v-else :index="index+''">
							<template slot="title"><i :class="item.iconCls"></i>{{item.name}}</template>
							<el-menu-item v-for="child in item.children" v-if="!child.hidden">{{child.name}}</el-menu-item>
						</el-submenu> -->


						<el-menu-item v-if="item.leaf&&item.children.length>0" :index="item.children[0].path"><i :class="item.iconCls"></i>{{item.children[0].name}}444</el-menu-item>
					</template>

					<!-- <template v-for="(item,index) in meunList" >
						<el-submenu>
							<template slot="title"><i :class="item.iconCls"></i>{{item.name}}</template>
							<el-menu-item v-for="child in item.children" v-if="!child.hidden">{{child.name}}</el-menu-item>
						</el-submenu>
						<el-menu-item v-if="item.leaf&&item.children.length>0" ><i :class="item.iconCls"></i>{{item.children[0].name}}</el-menu-item>
					</template> -->

				</el-menu>
				<!--导航菜单-折叠后-->
				<ul class="el-menu el-menu-vertical-demo collapsed" v-show="collapsed" ref="menuCollapsed">
					<li v-for="(item,index) in $router.options.routes" v-if="!item.hidden" class="el-submenu item">
						<template v-if="!item.leaf">
							<div class="el-submenu__title" style="padding-left: 20px;" @mouseover="showMenu(index,true)" @mouseout="showMenu(index,false)"><i :class="item.iconCls"></i></div>
							<ul class="el-menu submenu" :class="'submenu-hook-'+index" @mouseover="showMenu(index,true)" @mouseout="showMenu(index,false)"> 
								<li v-for="child in item.children" v-if="!child.hidden" :key="child.path" class="el-menu-item" style="padding-left: 40px;" :class="$route.path==child.path?'is-active':''" @click="$router.push(child.path)">{{child.name}}</li>
							</ul>
						</template>
						<template v-else>
							<li class="el-submenu">
								<div class="el-submenu__title el-menu-item" style="padding-left: 20px;height: 56px;line-height: 56px;padding: 0 20px;" :class="$route.path==item.children[0].path?'is-active':''" @click="$router.push(item.children[0].path)"><i :class="item.iconCls"></i></div>
							</li>
						</template>
					</li>
				</ul>
			</aside>
			<section class="content-container">
				<div class="grid-content bg-purple-light">
					<el-col :span="1" >
						<router-link :to="{ name: '首页'}">
							<el-button  type="primary">首页</el-button>
						</router-link>
					</el-col>
					<el-col :span="22" class="breadcrumb-container">
						<!-- <strong class="title">{{$route.name}}</strong>
						<el-breadcrumb separator="/" class="breadcrumb-inner">
							<el-breadcrumb-item v-for="item in $route.matched" :key="item.path">
								{{ item.name }}
							</el-breadcrumb-item>
						</el-breadcrumb> -->

						<el-tag :key="tag" v-for="(tag,index) in dynamicTags" @click.native="colorbk" :closable="true" :close-transition="false" @close="handleClose(tag,index)">
							<router-link :to="{ name: tag.path}">
								<el-button style="margin-top:-5px;color:#fff"  type="text">{{tag.name}}</el-button>
							</router-link>
						</el-tag>
					</el-col>
					<el-col :span="1" v-if="dynamicTags.length > 0">
						<router-link :to="{ name: '首页'}">
							<el-button @click="shutAll" type="primary">全部关闭</el-button>
						</router-link>
					</el-col>
					<el-col :span="24" class="content-wrapper">
						<transition name="fade" mode="out-in">
							<router-view></router-view>
						</transition>
					</el-col>
				</div>
			</section>
		</el-col>
		<!-- 左侧导航end -->

		<!-- 个人设置弹框 -->
		<el-dialog title="我的个人设置" v-model="dialogSet" >
	  		<el-form :model="setForm">
				<el-row>
				  	<el-col :span="12">
					  	<el-form-item label="所属部门" :label-width="formLabelWidth">
					      	<el-input v-model="setForm.departMent" auto-complete="off"></el-input>
					    </el-form-item>
				  	</el-col>
			  		<el-col :span="12">
			  			<el-form-item label="工号" :label-width="formLabelWidth">
					      	<el-input v-model="setForm.jobNum" auto-complete="off"></el-input>
					    </el-form-item>
			  		</el-col>
				</el-row>
				<el-row>
				  	<el-col :span="12">
					  	<el-form-item label="姓名" :label-width="formLabelWidth">
					      	<el-input v-model="setForm.userName" auto-complete="off"></el-input>
					    </el-form-item>
				  	</el-col>
			  		<el-col :span="12">
			  			<el-form-item label="身份证号" :label-width="formLabelWidth">
					      	<el-input v-model="setForm.idCode" auto-complete="off"></el-input>
					    </el-form-item>
			  		</el-col>
				</el-row>
				<el-row>
				  	<el-col :span="12">
					  	<el-form-item label="联系电话" :label-width="formLabelWidth">
					      	<el-input v-model="setForm.phoNum" auto-complete="off"></el-input>
					    </el-form-item>
				  	</el-col>
			  		<el-col :span="12">
			  			<el-form-item label="电子邮件" :label-width="formLabelWidth">
					      	<el-input v-model="setForm.email" auto-complete="off"></el-input>
					    </el-form-item>
			  		</el-col>
				</el-row>
				<el-row>
				  	<el-col :span="12">
					  	<el-form-item label="性别" :label-width="formLabelWidth">
						    <el-select v-model="setForm.sex" placeholder="请选择活动区域" style="width:360px;">
						      	<el-option label="男" value="male"></el-option>
						      	<el-option label="女" value="female"></el-option>
						    </el-select>
				  		</el-form-item>
				  	</el-col>
			  		<el-col :span="12">
			  			<el-form-item label="界面皮肤" :label-width="formLabelWidth">
						    <el-select v-model="setForm.skin" placeholder="请选择皮肤" style="width:360px;">
						      	<el-option label="经典蓝" value="blue"></el-option>
						    </el-select>
				  		</el-form-item>
			  		</el-col>
				</el-row>
				<el-row>
				  	<el-col :span="12">
					  	<el-form-item label="联系地址" :label-width="formLabelWidth">
					      	<el-input v-model="setForm.address" auto-complete="off"></el-input>
					    </el-form-item>
				  	</el-col>
			  		<el-col :span="12">
			  			<el-form-item label="备注" :label-width="formLabelWidth">
					      	<el-input v-model="setForm.remark" auto-complete="off"></el-input>
					    </el-form-item>
			  		</el-col>
				</el-row>
		  </el-form>
		  <div slot="footer" class="dialog-footer">
		    	<el-button @click="dialogSet = false">取 消</el-button>
	   		 	<el-button type="primary" @click="dialogSet = false">确 定</el-button>
		  </div>			
		</el-dialog>
		<!-- 个人设置弹框end -->

		<!-- 修改密码弹框 -->
		<el-dialog title="修改密码" v-model="dialogPsw" size="tiny" class="dialogPsw">
	  		<el-form :model="pswForm">
				<el-form-item label="原密码" :label-width="formLabelWidth">
			      	<el-input v-model="pswForm.oldPassword" auto-complete="off"></el-input>
			    </el-form-item>
			    <el-form-item label="新密码" :label-width="formLabelWidth">
			      	<el-input v-model="pswForm.newPassword1" auto-complete="off"></el-input>
			    </el-form-item>
			    <el-form-item label="确认新密码" :label-width="formLabelWidth">
			      	<el-input v-model="pswForm.newPassword2" auto-complete="off"></el-input>
			    </el-form-item>
		  	</el-form>
		  	<div slot="footer" class="dialog-footer">
		    	<el-button @click="dialogPsw = false">取 消</el-button>
	   		 	<el-button type="primary" @click="dialogPsw = false">保存</el-button>
		  	</div>			
		</el-dialog>
		<!-- 修改密码弹框end -->
	</el-row>
</template>

<script>
	import { state } from '../vuex/state'
	import {baseUrl , editUser, addUser } from '../api/api';
	export default {
		data() {
			return {
				//导航菜单名称列表
				dynamicTags: [],

				sysName:'后台管理',
				arry:[],
				collapsed:false,
				sysUserName: '',
				sysUserAvatar: '',

				//表单label宽度
				formLabelWidth:'100px',

				//我的设置弹框参数
				dialogSet:false,
				setForm:{
					departMent: '',
					jobNum:'',
					userName:'',
					idCode:'',
					phoNum:'',
					email:'',
					sex:'',
					skin:'',
					address:'',
					remark:''
				},

				//修改密码弹框参数
				dialogPsw:false,
				pswForm:{
					oldPassword:'',
					newPassword1:'',
					newPassword2:'',
				}
			}
		},
		methods: {
			// 添加标签数组   及数组去重 
			tagList(row){
				console.log(row.name)
				let keyg = true//开关 
				// 当前选择数据 与已存在数组循环比较 若数组内已存在 这关闭开关
				for (var i = 0; i < this.dynamicTags.length; i++) {
					if(this.dynamicTags[i].path === row.name){
						keyg = false
					}
				}
				// 把当前选中的数据push到标签数组中  由开关来判断是否执行 
				if(keyg){
					console.log(1)
					const obj = {
						name:row.name.substring(4,0),
						path:row.name,
						_path:row.path
					}
					console.log(obj)
					this.dynamicTags.push(obj)
				}
			},
			// 清空标签数组
			shutAll(){
				this.dynamicTags = []
			},
			// 待定选中标签背景颜色切换
			colorbk(){
				console.log(111)
			},
			//   删除标签
			handleClose(tag,index) {
		        this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);//删除标签
		        // 判断是否是第一个标签 且数组大于1  if是  显示当前数组的第一个标签  else 显示当前删除标签的前一个标签路由
				if(index === 0 && this.dynamicTags.length > 0){
					const i = index
				    const _path = this.dynamicTags[i]._path
					this.$router.push({ path: _path });
				}else{
			        if(this.dynamicTags.length > 0){//判断当前数组是否存在 存在 则删除 不存在 则显示首页
			        	const i = index-1
				        const _path = this.dynamicTags[i]._path
				        console.log(_path)
				        this.$router.push({ path: _path });
			        }else{
			        	this.$router.push({ path: '/StoreInformation' });
			        }
				}
		      },
			getb(){
				const _this = this;
				$.ajax({
                    type:'GET',	
                    dataType:'jsonp',
                    url:baseUrl+"type=home",
                    // contentType:'application/json;charset=utf-8',
                    jsonp : 'jsonpCallback', //指定一个查询参数名称来覆盖默认的 jsonp 回调参数名 callback
                	jsonpCallback: 'jsonp', //设置回调函数名
                    success:function(response, status, xhr){
                    	// console.log('状态为：' + status + ',状态是：' + xhr.statusText);
                        console.log(response)
                        // _this.list = response.data
                        _this.ebu = response.data.Value
                        _this.rmb = response.data.Money
                    }
                });
			},
			onSubmit() {
				console.log('submit!');
			},
			handleopen() {
				//console.log('handleopen');
			},
			handleselect: function (a, b) {
			},
			//退出登录
			logout: function () {
				var _this = this;
				this.$confirm('确认退出管理后台吗?', '提示', {
					//type: 'warning'
				}).then(() => {
					sessionStorage.removeItem('user');
					_this.$router.push('/login');
				}).catch(() => {

				});
			},
			//折叠导航栏
			collapse:function(){
				this.collapsed=!this.collapsed;
			},
			showMenu(i,status){
				// this.$refs.menuCollapsed.getElementsByClassName('submenu-hook-'+i)[0].style.display=status?'block':'none';
			}
		},
		mounted() {
			var user = sessionStorage.getItem('user');
			if (user) {
				user = JSON.parse(user);
				this.sysUserName = user.name || '';
				this.sysUserAvatar = user.avatar || '';
			}
			this.arry = this.$router.options.routes
			// this.getb();
			// console.log(state.commissionLine)
			// if(state.commissionLine !== 3 && state.commissionLine !== 5){
			// 	console.log(1)
			// 	for(var i = 0;i<this.arry[5].children.length;i++){
			// 		if(this.arry[5].children[i].name === '分销规则管理'){
			// 			this.arry[5].children.splice(i,1)
			// 		}
			// 	}
			// 	state.keys = true
			// }else if(state.commissionLine === 3 || state.commissionLine === 5){
			// 	console.log(2)
			// 	if(state.keys){
			// 		const obj = {}
			// 		obj.name = '分销规则管理'
			// 		obj.path = "/rule"
			// 		this.arry[5].children.push(obj)
			// 	}
			// 	state.keys = false
			// }
		}
	}

</script>

<style scoped lang="scss">
	@import '~scss_vars';
	.container {
		position: absolute;
		background: #fff;
		top: 0px;
		bottom: 0px;
		width: 100%;
		.header {
			height: 60px;
			line-height: 60px;
			background: $color-primary;
			color:#fff;
			.userinfo {
				text-align: right;
				padding-right: 35px;
				float: right;
				.userinfo-inner {
					cursor: pointer;
					color:#fff;
					img {
						width: 40px;
						height: 40px;
						border-radius: 20px;
						margin: 10px 0px 10px 10px;
						float: right;
					}
				}
			}
			.logo {
				//width:230px;
				height:60px;
				font-size: 22px;
				padding-left:20px;
				padding-right:20px;
				border-color: rgba(238,241,146,0.3);
				border-right-width: 1px;
				/*border-right-style: solid;*/
				img {
					width: 40px;
					float: left;
					margin: 10px 10px 10px 18px;
				}
				.txt {
					color:#fff;
				}
			}
			.logo-width{
				width:230px;
			}
			.logo-collapse-width{
				width:60px
			}
			.tools{
				padding: 0px 23px;
				width:14px;
				height: 60px;
				line-height: 60px;
				cursor: pointer;
			}
		}
		.footer {

		}
		.main {
			display: flex;
			/*background: #324057;*/
			position: absolute;
			top: 60px;
			bottom: 0px;
			overflow: hidden;
			aside {
				flex:0 0 230px;
				width: 230px;
				/*// position: absolute;*/
				/*// top: 0px;*/
				/*// bottom: 0px;*/
				.el-menu{
					height: 100%;
				}
				.collapsed{
					width:60px;
					.item{
						position: relative;
					}
					.submenu{
						position:absolute;
						top:0px;
						left:60px;
						z-index:99999;
						height:auto;
						display:none;
					}

				}
			}
			.menu-collapsed{
				flex:0 0 60px;
				width: 60px;
				overflow-y: auto;
			}
			.menu-expanded{
				flex:0 0 230px;
				width: 230px;
				overflow-y: auto;
			}
			.content-container {
				/*// background: #f1f2f7;*/
				flex:1;
				/*// position: absolute;*/
				/*// right: 0px;*/
				/*// top: 0px;*/
				/*// bottom: 0px;*/
				/*// left: 230px;*/
				overflow-y: scroll;
				padding: 20px;
				.breadcrumb-container {
					//margin-bottom: 15px;
					.title {
						width: 200px;
						float: left;
						color: #475669;
					}
					.breadcrumb-inner {
						float: right;
					}
				}
				.content-wrapper {
					background-color: #fff;
					box-sizing: border-box;
					margin-top: 10px;
					border-top: 1px solid #ddd;
				}
			}
		}
	}
</style>
<style type="text/css">
	.el-tag{
	    background-color: #20a0ff;
	    padding: 0 5px;
	    height: 36px;
	    line-height: 36px;
	    font-size: 12px;
	    color: #fff;
	    width: 80px;
	    margin-right: 5px;
	    box-sizing: border-box;
	    border: 1px solid transparent;
	    white-space: nowrap;
	}
	.el-tag .el-icon-close {
	    border-radius: 50%;
	    text-align: center;
	    position: relative;
	    cursor: pointer;
	    font-size: 12px;
	    -ms-transform: scale(.75,.75);
	    transform: scale(.75,.75);
	    height: 18px;
	    width: 18px;
	    line-height: 18px;
	    vertical-align: middle;
	    top: -4px;
	    right: 0px;
	}

	.setBtn{text-align: center;cursor: pointer;}
	.setBtn:hover{background-color: #4DB3FF;}
	/*设置滚动条宽度*/
	::-webkit-scrollbar{width:4px;}

	.el-message-box{
		text-align: center;
	}
	.el-message-box__title{text-align: left;}

	.dialogPsw .el-dialog--tiny{width:20%;}
</style>