import Vue from 'vue'
import VueRouter from 'vue-router'


import Create from '../components/Create.vue';
import Edit from '../components/Edit.vue';
import Index from '../components/Index.vue';

Vue.use(VueRouter)

const routes = [
  // {
  //   name: 'Create',
  //   path: '/create',
  //   component: Create
  // },
  {
    name: 'Index',
    path: '/',
    component: Index,

    children: [
      {
        path: '/create',
        component: Create,
        name: 'Create',
      },

      { path: '/:post_id/edit', component: Edit, name: 'edit' },
    ]
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
