import { createRouter, createWebHashHistory } from 'vue-router'
import AuthorizationView from "@/views/AuthorizationView";

const routes = [
  {
    path: '/',
    name: 'home',
    component: AuthorizationView
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
