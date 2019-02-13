import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/auth/Login.vue'
import Register from '@/components/auth/Register.vue'
import Dashboard from '@/components/dashboard/Home.vue'
import Orders from '@/components/orders/list.vue'
import OrdersNew from '@/components/orders/new.vue'
import Invoice from '@/components/orders/invoice.vue'
import genealogyScoreBinary from '@/components/genealogy/scorebinary.vue'
import genealogyScoreUnilevel from '@/components/genealogy/scoreunilevel.vue'
import FinancialWithdraw from '@/components/financial/withdraw.vue'
import FinancialWithdrawDetails from '@/components/financial/withdraw/details.vue'
import FinancialTransactions from '@/components/financial/transactions.vue'
import GenealogyUnilevel from '@/components/genealogy/unilevel.vue'
import GenealogyBinary from '@/components/genealogy/binary.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login,
      meta: {
        forVisitors: true
      }
    },
    {
      path: '/register',
      name: 'Register',
      component: Register,
      meta: {
        forVisitors: true
      }
    },
    {
      path: '/',
      name: 'Dashboard',
      component: Dashboard,
      meta: {
        forAuth: true
      }
    },
    {
      path: '/orders',
      name: 'Orders',
      component: Orders,
      meta: {
        forAuth: true
      }
    },
    {
      path: '/orders/new',
      name: 'OrdersNew',
      component: OrdersNew,
      meta: {
        forAuth: true
      }
    },
    {
      path: '/orders/invoice/:id',
      name: 'Invoice',
      component: Invoice,
      props: true,
      meta: {
        forAuth: true
      }
    },

    {
      path: '/genealogy/score/binary',
      name: 'genealogyScoreBinary',
      component: genealogyScoreBinary,
      props: true,
      meta: {
        forAuth: true
      }
    },

    {
      path: '/genealogy/score/unilevel',
      name: 'genealogyScoreUnilevel',
      component: genealogyScoreUnilevel,
      props: true,
      meta: {
        forAuth: true
      }
    },

    {
      path: '/financial/withdraw',
      name: 'FinancialWithdraw',
      component: FinancialWithdraw,
      meta: {
        forAuth: true
      }
    },


    {
      path: '/financial/withdraw/details/:id',
      name: 'FinancialWithdrawDetails',
      component: FinancialWithdrawDetails,
      props: true,
      meta: {
        forAuth: true
      }
    },

    {
      path: '/genealogy/unilevel',
      name: 'GenealogyUnilevel',
      component: GenealogyUnilevel,
      meta: {
        forAuth: true
      }
    },
    {
      path: '/genealogy/binary',
      name: 'GenealogyBinary',
      component: GenealogyBinary,
      meta: {
        forAuth: true
      }
    },
    {
      path: '/genealogy/binary/:user_id',
      name: 'GenealogyBinaryUser',
      component: GenealogyBinary,
      props: true,
      meta: {
        forAuth: true
      }
    },
    {
      path: '/financial/transactions',
      name: 'FinancialTransactions',
      component: FinancialTransactions,
      meta: {
        forAuth: true
      }
    },
  ],
  mode: 'history'
})
