import { createRouter, createWebHashHistory } from 'vue-router'
import AuthorizationView from "@/views/AuthorizationView";
import RegistrationView from "@/views/RegistrationView";

const routes = [
  {
    path: '/',
    name: 'home',
    component: AuthorizationView
  },
  {
    path: '/register',
    name: 'register',
    component: RegistrationView
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
