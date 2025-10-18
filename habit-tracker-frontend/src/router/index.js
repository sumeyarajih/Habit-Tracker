// router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/LoginView.vue'
import DashboardView from '../views/DashboardView.vue'
import AddHabitView from '../views/AddHabitView.vue'
import ProgressView from '../views/ProgressView.vue'
import ProfileView from '../views/ProfileView.vue'
import SignUpView from '../views/SignUpView.vue'
import ForgotPasswordView from '../views/ForgotPasswordView.vue'

const routes = [
  {
    path: '/',
    name: 'Root',
    redirect: () => {
      // Check auth status and redirect accordingly
      const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true'
      return isAuthenticated ? '/dashboard' : '/login'
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginView,
    meta: { 
      requiresGuest: true,
      layout: 'auth' // Explicit layout type
    }
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: DashboardView,
    meta: { 
      requiresAuth: true,
      layout: 'app' // Explicit layout type
    }
  },
  {
    path: '/add',
    name: 'AddHabit',
    component: AddHabitView,
    meta: { 
      requiresAuth: true,
      layout: 'app'
    }
  },
  {
    path: '/progress',
    name: 'Progress',
    component: ProgressView,
    meta: { 
      requiresAuth: true,
      layout: 'app'
    }
  },
  {
    path: '/profile',
    name: 'Profile',
    component: ProfileView,
    meta: { 
      requiresAuth: true,
      layout: 'app'
    }
  },
  {
    path: '/signup',
    name: 'SignUp',
    component: SignUpView,
    meta: { 
      requiresGuest: true,
      layout: 'auth'
    }
  },
  {
    path: '/forgot-password',
    name: 'ForgotPassword',
    component: ForgotPasswordView,
    meta: { 
      requiresGuest: true,
      layout: 'auth'
    }
  },
  // 404 catch-all route
  {
    path: '/:pathMatch(.*)*',
    redirect: '/'
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    // Always scroll to top when navigating
    return { top: 0 }
  }
})

// Enhanced navigation guard
router.beforeEach((to, from, next) => {
  console.log('Navigation from:', from.path, 'to:', to.path)
  
  const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true'
  
  if (to.meta.requiresAuth && !isAuthenticated) {
    console.log('Auth required, redirecting to login')
    next('/login')
  } 
  else if (to.meta.requiresGuest && isAuthenticated) {
    console.log('Guest required, redirecting to dashboard')
    next('/dashboard')
  } 
  else {
    console.log('Navigation allowed')
    next()
  }
})

// Debug route changes
router.afterEach((to, from) => {
  console.log('Successfully navigated to:', to.path)
})

export default router