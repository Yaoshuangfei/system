<template>
	<section>
		<el-row>
			<el-col  :xs="24" :sm="24" :md="24" :lg="24" style="text-align: center;margin-top: 20px;color: #20a0ff;font-size: 16px;">发布新手产品</el-col>
			<el-col offset="1" :xs="22" :sm="22" :md="22" :lg="22" style="margin-top: 40px;border-bottom:1px solid #ddd;padding-bottom: 10px;">以下带*为必选项</el-col>
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