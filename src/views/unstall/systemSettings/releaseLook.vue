<template>
    <section>
        <div  style="text-align: right;margin: 20px 0;">
            <router-link :to="{ path: '/SystemPush'}"   style="margin: 0 10px;">
                <el-button  type="primary">返回</el-button>
            </router-link>
        </div>
        <vue-editor v-model="content"></vue-editor>
    </section>
</template>

<script>
    import { VueEditor } from 'vue2-editor'

    export default {

        components: {
            VueEditor
        },

        data() {
            return {
                content: ''
            }
        },
        methods: {
            handleSavingContent: function() {
                // You have the content to save
                console.log(this.content);
            }
        }
    }

</script>

<style>
  
</style>