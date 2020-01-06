import Vue from 'vue';
import VueRouter from 'vue-router';
import itemList from '@/views/item-list.vue';

Vue.use(VueRouter);

const routes = [
  {
    path:'/:status?',
    name:'item-list',
    component: itemList
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
