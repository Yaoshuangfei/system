<template>
	<section>
		<el-col  :xs="24" :sm="24" :md="24" :lg="24" style="margin:20px auto;margin-left: 25%;color: #20a0ff;font-size: 16px;">发送理财券短信</el-col>
		<el-col :offset="1" :xs="10" :sm="10" :md="10" :lg="10" style="margin-top: 20px;">
				<el-form label-width="150px"  :model="uploadDetails">
					<el-form-item>
						*不要对同一手机号频繁测试，同一个号码10分钟内只能接收3条
					</el-form-item>
					<el-form-item label="用户名：">
						<el-input v-model="uploadDetails.uploadImgs" type="textarea"></el-input>
						*用户名之间必须以英文","隔开
					</el-form-item>
					<el-form-item label="还款日期：">
						<el-date-picker
					      v-model="value"
					      type="datetime"
					      placeholder="选择日期时间">
					    </el-date-picker>
					</el-form-item>
					<el-form-item label="发放理财券金额：">
						<el-input v-model="uploadDetails.uploadImgs" style="width: 200px;" type="text"></el-input> 	元
						<el-col>*如果理财券是需要多张分开发,请用英文状态下的";"来进行隔开,如"2000;500",代表发两张理财券,一张2000元,一张500元</el-col>
					</el-form-item>
					<el-form-item label="券到期时间：">
						<el-date-picker
					      v-model="value1"
					      type="datetime"
					      placeholder="选择日期时间">
					    </el-date-picker>
					</el-form-item>
					<el-form-item label="备注内容：">
						<el-input v-model="uploadDetails.uploadImgs" style="width: 200px;" type="text"></el-input> *备注,比如"圣诞福利、抽奖发放、元旦福利等 
					</el-form-item>
					<el-form-item label="短信内容：">
						<el-input v-model="uploadDetails.uploadImgs" type="textarea"></el-input> 
						*如果短信内容中有百分号,请复制此百分 "％"
					</el-form-item>
					<!-- <el-form-item label="类型：">
						<el-select v-model="uploadDetails.poType" placeholder="请选择">
					    <el-option
					      v-for="item in options"
					      :key="item.value"
					      :label="item.label"
					      :value="item.value">
					    </el-option>
					  </el-select>
					</el-form-item> -->
					<!-- <el-form-item label="启动页图片：">
						<input type="file" style="position:absolute;opacity:0;width:70px;height:30px;margin-right:10px"  @change="upload" id="fileInput">
						<button type="button" class="el-button el-button--primary el-button--small">
							<span>点击上传</span>
						</button>
						<span style="display: block;font-size: 12px">{{ imageChange }}</span>
					</el-form-item> -->
					<el-col :span='24' style="margin-left:300px;">
						<el-button type="primary" @click.native="submitUpload" :loading="editLoading">点击发送</el-button>
					</el-col>
			    </el-form>
			</el-col>
	</section>
</template>

<script>
	import { state } from '../../vuex/state'
	import util from '../../common/js/util'
	import {baseUrl , editUser, addUser } from '../../api/api';

	export default {
		data() {
			return {
				value:'',
				value1:'',
				editLoading: false,
				//新增界面数据
				uploadDetails: {
					poType:'',
				},
                formData: new FormData(),
                fileImg: ''
			}
		},
        computed: {
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
			}
		},
		mounted() {
		}
	}
</script>

<style>

</style>