import { createRouter, createWebHistory } from 'vue-router'
import DashboardView from '../views/DashboardView.vue'
import AddHabitView from '../views/AddHabitView.vue'
import ProgressView from '../views/ProgressView.vue'
import ProfileView from '../views/ProfileView.vue'

const routes = [
  {
    path: '/',
    name: 'Dashboard',
    component: DashboardView
  },
  {
    path: '/add',
    name: 'AddHabit',
    component: AddHabitView
  },
  {
    path: '/progress',
    name: 'Progress',
    component: ProgressView
  },
  {
    path: '/profile',
    name: 'Profile',
    component: ProfileView
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router