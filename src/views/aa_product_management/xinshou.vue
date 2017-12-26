<template>
	<section>
		<el-row>
			<el-col  :xs="24" :sm="24" :md="24" :lg="24" style="text-align: center;margin-top: 20px;color: #20a0ff;font-size: 16px;">发布新手产品</el-col>
			<el-col offset="1" :xs="22" :sm="22" :md="22" :lg="22" style="margin-top: 40px;border-bottom:1px solid #ddd;padding-bottom: 10px;">以下带*为必选项</el-col>
			<el-col offset="2" :xs="10" :sm="10" :md="10" :lg="10" style="margin-top: 20px;">
				<el-form label-width="150px" :rules="rules" >
			        <el-form-item label="产品名称:">
			          <el-input  style="width:500px;"></el-input>
			        </el-form-item>
			        <el-form-item label="发起企业:">
			          <el-input  style="width:500px;"></el-input>
			        </el-form-item>
			        <el-form-item label="发起人联系电话:">
			          <el-input  style="width:500px;"></el-input>
			        </el-form-item>
			        <el-form-item label="项目总额:">
			          <el-input  style="width:500px;"></el-input>
			        </el-form-item>
			        <el-form-item label="理财期限:">
			          <el-input  style="width:500px;"></el-input>
			        </el-form-item>
			        <el-form-item label="还款方式:">
			          <el-input  style="width:500px;"></el-input>
			        </el-form-item>
			        <el-form-item label="自动进入已售罄时间:">
			          <el-input  style="width:500px;"></el-input>
			        </el-form-item>
			        <el-form-item label="手机活动链接:">
			          <el-input  style="width:500px;"></el-input>
			        </el-form-item>
			        <el-form-item label="产品标签:">
			          <el-input type="textarea" :rows="6" style="width:500px;"></el-input>
			        </el-form-item>
			        <el-form-item label="资金保障:">
			          <el-input type="textarea" :rows="6"  style="width:500px;"></el-input>
			        </el-form-item>
			        <el-form-item label="项目介绍:">
			          <el-input type="textarea" :rows="6"  style="width:500px;"></el-input>
			        </el-form-item>
			        <el-form-item label="项目图片:">
			          <el-input  style="width:500px;"></el-input>
			        </el-form-item>
			    </el-form>
			</el-col>
			<el-col offset="1" :xs="11" :sm="11" :md="11" :lg="11" style="margin-top: 20px;">
				<el-form label-width="150px" >
			        <el-form-item label="投资类别:">
			          <el-input  style="width:500px;"></el-input>
			        </el-form-item>
			        <el-form-item label="证件号:">
			          <el-input  style="width:500px;"></el-input>
			        </el-form-item>
			        <el-form-item label="发起人联系地址:">
			          <el-input  style="width:500px;"></el-input>
			        </el-form-item>
			        <el-form-item label="起投总额:">
			          <el-input  style="width:500px;"></el-input>
			        </el-form-item>
			        <el-form-item label="年化总收益:">
			          <el-input  style="width:500px;"></el-input>
			        </el-form-item>
			        <el-form-item label="起息日:">
			          <el-input  style="width:500px;"></el-input>
			        </el-form-item>
			        <el-form-item label="活动标语:">
			          <el-input  style="width:500px;"></el-input>
			        </el-form-item>
			        <el-form-item label="网站活动链接:">
			          <el-input style="width:500px;"></el-input>
			        </el-form-item>
			        <el-form-item label="还款来源:">
			          <el-input type="textarea" :rows="6"  style="width:500px;"></el-input>
			        </el-form-item>
			        <el-form-item label="产品类型介绍:">
			          <el-input type="textarea" :rows="6"  style="width:500px;"></el-input>
			        </el-form-item>
			        <el-form-item label="项目特点:">
			          <el-input type="textarea" :rows="6"  style="width:500px;"></el-input>
			        </el-form-item>
			    </el-form>
			</el-col>
			<el-col offset="1" :xs="22" :sm="22" :md="22" :lg="22" style="margin-top: 140px;margin-bottom: 200px;text-align: center;">
					<el-button type="primary">发布</el-button>
			</el-col>
		</el-row>
	</section>
</template>

<script>
	import { state } from '../../vuex/state'
	import util from '../../common/js/util'
	import {baseUrl , editUser, addUser } from '../../api/api';

	export default {
		data() {
			return {
				rules:{}
			}
		},
        computed: {

        },
		methods: {

		},
		mounted() {
			 // this.getlist();
		}
	}
</script>

<style>

</style>