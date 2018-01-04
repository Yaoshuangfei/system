import Login from './views/Login.vue'
import NotFound from './views/404.vue'
import Home from './views/Home.vue'
import Main from './views/Home/indexMain.vue'
import { state } from './vuex/state'

import DeliverGoods from './views/logistics/DeliverGoods.vue'
import StoreInformation from './views/Home/StoreInformation.vue'




// 产品管理
    import xinshou from './views/a_product_management/xinshou.vue'
    import routine from './views/a_product_management/routine.vue'
    import yuyue from './views/a_product_management/yuyue.vue'

    import producta from './views/a_product_management/producta.vue'
    import productb from './views/a_product_management/productb.vue'
    import productc from './views/a_product_management/productc.vue'
    import productd from './views/a_product_management/productd.vue'
    import producte from './views/a_product_management/producte.vue'
    import productf from './views/a_product_management/productf.vue'

    import interest from './views/a_product_management/interest.vue'
    import interesta from './views/a_product_management/interesta.vue'

// 运营管理
    import register from './views/b_operation_management/register.vue'
    import registera from './views/b_operation_management/registera.vue'
    import registerb from './views/b_operation_management/registerb.vue'
    import registerc from './views/b_operation_management/registerc.vue'
    import registerd from './views/b_operation_management/registerd.vue'

    import fbbanner from './views/b_operation_management/fbbanner.vue'
    import fbbannera from './views/b_operation_management/fbbannera.vue'

    import edition from './views/b_operation_management/edition.vue'
    import editiona from './views/b_operation_management/editiona.vue'
    import editionb from './views/b_operation_management/editionb.vue'
    import editionc from './views/b_operation_management/editionc.vue'

    import journalism from './views/b_operation_management/journalism.vue'
    import journalisma from './views/b_operation_management/journalisma.vue'
    import journalismb from './views/b_operation_management/journalismb.vue'
    import journalismc from './views/b_operation_management/journalismc.vue'

    import form from './views/b_operation_management/form.vue'
    import forma from './views/b_operation_management/forma.vue'
    import formb from './views/b_operation_management/formb.vue'
    import formc from './views/b_operation_management/formc.vue'
    import formd from './views/b_operation_management/formd.vue'
    import forme from './views/b_operation_management/forme.vue'
    import formf from './views/b_operation_management/formf.vue'
    import formg from './views/b_operation_management/formg.vue'
    import formh from './views/b_operation_management/formh.vue'
    import formi from './views/b_operation_management/formi.vue'
    import formj from './views/b_operation_management/formj.vue'
    import formk from './views/b_operation_management/formk.vue'
    import forml from './views/b_operation_management/forml.vue'
    import formm from './views/b_operation_management/formm.vue'
    import formn from './views/b_operation_management/formn.vue'
    import formo from './views/b_operation_management/formo.vue'
    
    import data from './views/b_operation_management/data.vue'
    import datab from './views/b_operation_management/datab.vue'
    import datac from './views/b_operation_management/datac.vue'
    import datad from './views/b_operation_management/datad.vue'
    import datae from './views/b_operation_management/datae.vue'
    import dataf from './views/b_operation_management/dataf.vue'
    import datag from './views/b_operation_management/datag.vue'
    import datah from './views/b_operation_management/datah.vue'
    import datam from './views/b_operation_management/datam.vue'
    import datan from './views/b_operation_management/datan.vue'

// 活动管理
    import activity from './views/c_activity_management/activity.vue'

// 财务管理
    import financia from './views/d_finance_management/financia.vue'
    import financiaa from './views/d_finance_management/financiaa.vue'
    import financiab from './views/d_finance_management/financiab.vue'
    import financiac from './views/d_finance_management/financiac.vue'

    import recharge from './views/d_finance_management/recharge.vue'
    import rechargea from './views/d_finance_management/rechargea.vue'
    import rechargeb from './views/d_finance_management/rechargeb.vue'
    import rechargec from './views/d_finance_management/rechargec.vue'

    import withdrawals from './views/d_finance_management/withdrawals.vue'
    import withdrawalsa from './views/d_finance_management/withdrawalsa.vue'
    import withdrawalsb from './views/d_finance_management/withdrawalsb.vue'
    import withdrawalsc from './views/d_finance_management/withdrawalsc.vue'
    import withdrawalsd from './views/d_finance_management/withdrawalsd.vue'
    import withdrawalse from './views/d_finance_management/withdrawalse.vue'
    import withdrawalsf from './views/d_finance_management/withdrawalsf.vue'
    import withdrawalsh from './views/d_finance_management/withdrawalsh.vue'

    import loan from './views/d_finance_management/loan.vue'


// 权限管理 
    import jurisdictiona from './views/e_jurisdiction_management/jurisdictiona.vue'
    import jurisdictionb from './views/e_jurisdiction_management/jurisdictionb.vue'
    import jurisdictionc from './views/e_jurisdiction_management/jurisdictionc.vue'
    import jurisdictiond from './views/e_jurisdiction_management/jurisdictiond.vue'
    import jurisdictione from './views/e_jurisdiction_management/jurisdictione.vue'
    import jurisdictionf from './views/e_jurisdiction_management/jurisdictionf.vue'
    import jurisdictiong from './views/e_jurisdiction_management/jurisdictiong.vue'
    import jurisdictionh from './views/e_jurisdiction_management/jurisdictionh.vue'

// 功能管理
    import thread from './views/f_function_management/thread.vue'

    import unbundlinga from './views/f_function_management/unbundlinga.vue'
    import unbundlingb from './views/f_function_management/unbundlingb.vue'

    import change from './views/f_function_management/change.vue'
    import changea from './views/f_function_management/changea.vue'

    import smsa from './views/f_function_management/smsa.vue'
    import smsb from './views/f_function_management/smsb.vue'
    import smsc from './views/f_function_management/smsc.vue'

    import vouchera from './views/f_function_management/vouchera.vue'
    import voucherb from './views/f_function_management/voucherb.vue'
    import voucherc from './views/f_function_management/voucherc.vue'
    import voucherd from './views/f_function_management/voucherd.vue'
    import vouchere from './views/f_function_management/vouchere.vue'

    import blacklist from './views/f_function_management/blacklist.vue'
    import blacklista from './views/f_function_management/blacklista.vue'

// 模块管理
    import coin_pursea from './views/g_modular_management/coin_pursea.vue'
    import coin_purseb from './views/g_modular_management/coin_purseb.vue'
    import coin_pursec from './views/g_modular_management/coin_pursec.vue'
    import coin_pursed from './views/g_modular_management/coin_pursed.vue'
    import coin_pursee from './views/g_modular_management/coin_pursee.vue'
    import coin_pursef from './views/g_modular_management/coin_pursef.vue'

    import invitinga from './views/g_modular_management/invitinga.vue'
    import invitingb from './views/g_modular_management/invitingb.vue'

// 历史下载
    import history from './views/h_history_management/history.vue'
    import historya from './views/h_history_management/historya.vue'
    import historyb from './views/h_history_management/historyb.vue'
    import historyc from './views/h_history_management/historyc.vue'

// 系统管理
    import system from './views/i_system_management/system.vue'
    import systema from './views/i_system_management/systema.vue'
    import systemb from './views/i_system_management/system.vue'




let routes = [
    {
        path: '/login',
        component: Login,
        name: '',
        hidden: true
    },
    {
        path: '/mian',
        component: Main,
        name: '',
        hidden: true
    },
    {
        path: '/',
        component: Home,
        name: '',
        iconCls: 'fa fa-address-card',
        leaf: true,//只有一个节点
        hidden: true,
        children: [
            { path: '/StoreInformation', component: StoreInformation, name: '首页' ,  hidden: true  }
        ]
    },
    {
        path: '/',
        component: Home,
        name: ' 产品管理',
        iconCls: 'el-icon-message',//图标样式class
        children: [
            // { path: '/main', component:Main, name: '主页', hidden: true },
            {  path: '/DeliverGoods', component:DeliverGoods, name: '产品发布' ,children:[
                { path: '/xinshou', component:xinshou, name: '发布新手产品' },
                { path: '/routine', component:routine, name: '发布常规产品' },
                { path: '/yuyue', component:yuyue, name: '发布预约产品' }
            ]},
            {  path: '/DeliverGoods', component:DeliverGoods,name: '产品信息' ,children:[
                { path: '/producta', component: producta, name: '产品发布记录' },
                { path: '/productb', component: productb, name: '查看预约产品' },
                { path: '/productc', component: productc, name: '产品统计' },
                { path: '/productd', component: productd, name: '在售产品' },
                { path: '/producte', component: producte, name: '投资记录' },
                { path: '/productf', component: productf, name: '虚拟投资列表' }
            ]},
            { path: '/DeliverGoods', component:DeliverGoods, name: '产品结算' ,children:[
                { path: '/interest', component: interest, name: '付息总表' },
                { path: '/interesta', component: interesta, name: '付息明细表' }
            ]}
        ]
    },
    {
        path: '/',
        component: Home,
        name: ' 运营管理',
        iconCls: 'el-icon-message',//图标样式class
        children: [
            // { path: '/main', component:Main, name: '主页', hidden: true },
            {  path: '/DeliverGoods', component:DeliverGoods, name: '注册管理' ,children:[
                { path: '/register', component:register, name: '注册用户信息' },
                { path: '/registera', component:registera, name: '渠道注册信息' },
                { path: '/registerb', component:registerb, name: '平台注册人数' },
                { path: '/registerc', component:registerc, name: '注册人数日统计' },
                { path: '/registerd', component:registerd, name: '注册当日投资统计' }
            ]},
            {  path: '/DeliverGoods', component:DeliverGoods,name: 'Banner管理' ,children:[
                { path: '/fbbanner', component: fbbanner, name: '发布Banner' },
                { path: '/fbbannera', component: fbbannera, name: 'Banner展示' },
            ]},
            { path: '/DeliverGoods', component:DeliverGoods, name: '版本管理' ,children:[
                { path: '/edition', component: edition, name: '发布版本' },
                { path: '/editiona', component: editiona, name: '版本展示' },
                { path: '/editionb', component: editionb, name: '启动页上传' },
                { path: '/editionc', component: editionc, name: '启动页展示' }
            ]},
            {  path: '/DeliverGoods', component:DeliverGoods, name: '新闻公告' ,children:[
                { path: '/journalism', component:journalism, name: '公告展示' },
                { path: '/journalisma', component:journalisma, name: '发布公告' },
                { path: '/journalismb', component:journalismb, name: '新闻列表' },
                { path: '/journalismc', component:journalismc, name: '新闻管理' }
            ]},
            {  path: '/DeliverGoods', component:DeliverGoods,name: '报表统计' ,children:[
                { path: '/form', component: form, name: '安卓聚到汇总' },
                { path: '/forma', component: forma, name: '渠道投资计划(新)' },
                { path: '/formb', component: formb, name: '平台渠道统计' },
                { path: '/formc', component: formc, name: 'IOS渠道统计汇总' },
                { path: '/formd', component: formd, name: '渠道成本' },
                { path: '/formd', component: formd, name: '每日投资统计' },
                { path: '/forme', component: forme, name: '平台投资情况' },
                { path: '/formf', component: formf, name: '数据统计' },
                { path: '/formg', component: formg, name: '用户转换数据' },
                { path: '/formh', component: formh, name: '充值提现数据报表' },
                { path: '/formi', component: formi, name: '运营数据' },
                { path: '/formj', component: formj, name: '渠道关键字查询' },
                { path: '/formk', component: formk, name: '注册投资充值提现' },
                { path: '/forml', component: forml, name: '用户投资统计' },
                { path: '/formm', component: formm, name: 'wap用户投资统计' },
                { path: '/formn', component: formn, name: '访客渠道投资统计' }
            ]},
            { path: '/DeliverGoods', component:DeliverGoods, name: '数据分析' ,children:[
                { path: '/data', component: data, name: '地域统计' },
                { path: '/datab', component: datab, name: '用户数据分析' },
                { path: '/datac', component: datac, name: '用户年龄分布表' },
                { path: '/datad', component: datad, name: '用户评论' },
                { path: '/datae', component: datae, name: '用户投资记录分析' },
                { path: '/dataf', component: dataf, name: '金额排行榜' },
                { path: '/datag', component: datag, name: '性别统计' },
                { path: '/datah', component: datah, name: '投资分析曲线' },
                { path: '/datam', component: datam, name: '银行卡数据统计' },
                { path: '/datan', component: datan, name: '绑卡用户信息统计' }
            ]}
        ]
    },
    {
        path: '/',
        component: Home,
        name: ' 活动管理',
        iconCls: 'el-icon-message',//图标样式class
        children: [
            // { path: '/main', component:Main, name: '主页', hidden: true },
            {  path: '/DeliverGoods', component:DeliverGoods, name: '情人节' ,children:[
                { path: '/activity', component:activity, name: '情人节活动' }
            ]}
        ]
    },
    {
        path: '/',
        component: Home,
        name: ' 财务管理',
        iconCls: 'el-icon-message',//图标样式class
        children: [
            // { path: '/main', component:Main, name: '主页', hidden: true },
            {  path: '/DeliverGoods', component:DeliverGoods, name: '财务数据' ,children:[
                { path: '/financia', component:financia, name: '预留金额' },
                { path: '/financiaa', component:financiaa, name: '一周不可动金额' },
                { path: '/financiab', component:financiab, name: '平台可用金额' },
                { path: '/financiac', component:financiac, name: '资金速冻明细' }
            ]},
            {  path: '/DeliverGoods', component:DeliverGoods,name: '充值管理' ,children:[
                { path: '/recharge', component: recharge, name: '充值记录' },
                { path: '/rechargea', component: rechargea, name: '企业充值记录' },
                { path: '/rechargeb', component: rechargeb, name: '充值记录统计' },
                { path: '/rechargec', component: rechargec, name: '充值手续费' },
            ]},
            { path: '/DeliverGoods', component:DeliverGoods, name: '提现管理' ,children:[
                { path: '/withdrawals', component: withdrawals, name: '企业提现记录' },
                { path: '/withdrawalsa', component: withdrawalsa, name: '提现记录' },
                { path: '/withdrawalsb', component: withdrawalsb, name: '异常提现记录' },
                { path: '/withdrawalsc', component: withdrawalsc, name: '提现记录统计' },
                { path: '/withdrawalsd', component: withdrawalsd, name: '提现手续费' },
                { path: '/withdrawalse', component: withdrawalse, name: '手动提现' },
                { path: '/withdrawalsf', component: withdrawalsf, name: '实际提现率' },
                { path: '/withdrawalsh', component: withdrawalsh, name: '手动提现记录' }
            ]},
            {  path: '/DeliverGoods', component:DeliverGoods, name: '借款业务' ,children:[
                { path: '/loan', component:loan, name: '借款申请' }
            ]}
        ]
    },
    {
        path: '/',
        component: Home,
        name: ' 权限管理',
        iconCls: 'el-icon-message',//图标样式class
        children: [
            { path: '/jurisdictiona', component: jurisdictiona, name: '部门列表' },
            { path: '/jurisdictionb', component: jurisdictionb, name: '添加部门' },
            { path: '/jurisdictionc', component: jurisdictionc, name: '管理员列表' },
            { path: '/jurisdictiond', component: jurisdictiond, name: '添加管路员' },
            { path: '/jurisdictione', component: jurisdictione, name: '模块列表展示' },
            { path: '/jurisdictionf', component: jurisdictionf, name: '添加新模块' },
            { path: '/jurisdictiong', component: jurisdictiong, name: '角色列表展示' },
            { path: '/jurisdictionh', component: jurisdictionh, name: '添加新角色' },
        ]
    },
    {
        path: '/',
        component: Home,
        name: ' 功能管理',
        iconCls: 'el-icon-message',//图标样式class
        children: [
            { path: '/thread', component:thread, name: '线程管理' },
            {  path: '/DeliverGoods', component:DeliverGoods, name: '解绑管理' ,children:[
                { path: '/unbundlinga', component:unbundlinga, name: '解绑银行卡' },
                { path: '/unbundlingb', component:unbundlingb, name: '无验证码解绑卡' }
            ]},
            {  path: '/DeliverGoods', component:DeliverGoods,name: '更改账号' ,children:[
                { path: '/change', component: change, name: '账号变更列表' },
                { path: '/changea', component: changea, name: '无验证更改账号' },
            ]},
            { path: '/DeliverGoods', component:DeliverGoods, name: '短信管理' ,children:[
                { path: '/smsa', component: smsa, name: '发送短信' },
                { path: '/smsb', component: smsb, name: '发送理财券短信' },
                { path: '/smsc', component: smsc, name: '短信列表' }
            ]},
            { path: '/DeliverGoods', component:DeliverGoods, name: '券包管理' ,children:[
                { path: '/vouchera', component: vouchera, name: '发送投资券' },
                { path: '/voucherb', component: voucherb, name: '已使用的投资券' },
                { path: '/voucherc', component: voucherc, name: '发送投资券(多个)' },
                { path: '/voucherd', component: voucherd, name: '发送群体投资券' },
                { path: '/vouchere', component: vouchere, name: '投资券记录' }
            ]},
            { path: '/DeliverGoods', component:DeliverGoods, name: '黑名单管理' ,children:[
                { path: '/blacklist', component: blacklist, name: '添加黑名单' },
                { path: '/blacklista', component: blacklista, name: '黑名单列表' }
            ]},
        ]
    },
    {
        path: '/',
        component: Home,
        name: ' 模块管理',
        iconCls: 'el-icon-message',//图标样式class
        children: [
            // { path: '/main', component:Main, name: '主页', hidden: true },
            {  path: '/DeliverGoods', component:DeliverGoods, name: '零钱包' ,children:[
                { path: '/coin_pursea', component:coin_pursea, name: '用户零钱包信息' },
                { path: '/coin_purseb', component:coin_purseb, name: '零钱包转入记录' },
                { path: '/coin_pursec', component:coin_pursec, name: '零钱包转出记录' },
                { path: '/coin_pursed', component:coin_pursed, name: '零钱包不可动金额' },
                { path: '/coin_pursee', component:coin_pursee, name: '零钱包数据报表' },
                { path: '/coin_pursef', component:coin_pursef, name: '异常转出记录' }
            ]},
            {  path: '/DeliverGoods', component:DeliverGoods,name: '邀请好友' ,children:[
                { path: '/invitinga', component: invitinga, name: '邀请投资奖励记录' },
                { path: '/invitingb', component: invitingb, name: '邀请好友列表' },
            ]}
        ]
    },
    {
        path: '/',
        component: Home,
        name: ' 历史下载',
        iconCls: 'el-icon-message',//图标样式class
        children: [
            { path: '/history', component: history, name: '产品报表' },
            { path: '/historya', component: historya, name: '运营报表' },
            { path: '/historyb', component: historyb, name: '财务报表' },
            { path: '/historyc', component: historyc, name: '券报表' }
        ]
    },
    {
        path: '/',
        component: Home,
        name: ' 系统管理',
        iconCls: 'el-icon-message',//图标样式class
        children: [
            { path: '/system', component: system, name: '系统监控' },
            { path: '/systema', component: systema, name: '操作日志' },
            { path: '/systemb', component: systemb, name: '项目配置' }
        ]
    },
    {
        path: '*',
        hidden: true,
        redirect: { path: '/404' }
    }
];

export default routes;