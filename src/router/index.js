import { createRouter, createWebHistory } from 'vue-router'
import User from '../components/User.vue';
import Account from '../components/Account.vue';
import Transaction from '../components/Transaction.vue';


const routes = [
  {
    path: '/users',
    name: 'User',
    component: User,
  },
  {
    path: '/accounts',
    name: 'Account',
    component: Account,
  },
  {
    path: '/transactions',
    name: 'Transaction',
    component: Transaction,
  },
];


const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
