<template>
  <aside class="sidebar" :class="{ 'sidebar-collapsed': isCollapsed }">
    <!-- Logo / App Name -->
    <div class="sidebar-header">
      <div class="logo" :class="{ 'logo-collapsed': isCollapsed }">
        <div class="logo-icon">H</div>
        <span v-if="!isCollapsed" class="logo-text">HabitFlow</span>
      </div>
      <button @click="$emit('toggle-collapse')" class="collapse-btn">
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path v-if="!isCollapsed" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
          <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>

    <!-- Navigation -->
    <nav class="sidebar-nav">
      <ul class="nav-list">
        <li v-for="item in navItems" :key="item.name">
          <router-link
            :to="item.path"
            class="nav-link"
            :class="{ 
              'nav-link-active': $route.path === item.path,
              'nav-link-collapsed': isCollapsed
            }"
            :title="isCollapsed ? item.name : ''"
          >
            <span class="nav-icon">{{ item.icon }}</span>
            <span v-if="!isCollapsed" class="nav-text">{{ item.name }}</span>
          </router-link>
        </li>
      </ul>
    </nav>

    <!-- Logout -->
    <div class="sidebar-footer">
      <button
        @click="logout"
        class="logout-btn"
        :class="{ 'logout-btn-collapsed': isCollapsed }"
        title="Logout"
      >
        <span class="logout-icon">➡️</span>
        <span v-if="!isCollapsed" class="logout-text">Logout</span>
      </button>
    </div>
  </aside>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from "vue-router";

defineProps({
  isCollapsed: {
    type: Boolean,
    default: false
  }
})

defineEmits(['toggle-collapse'])

const router = useRouter();

const navItems = ref([
  { name: 'Dashboard', path: '/', icon: '🏠' },
  { name: 'Add Habit', path: '/add', icon: '➕' },
  { name: 'Progress', path: '/progress', icon: '📊' },
  { name: 'Profile', path: '/profile', icon: '👤' }
])

const logout = () => {
  alert("Logout clicked!");
  router.push("/login");
}
</script>

<style scoped>
.sidebar {
  width: 256px;
  height: 100vh;
  background: white;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  transition: all 0.3s ease;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 40;
}

.sidebar-collapsed {
  width: 80px;
}

/* Sidebar Header */
.sidebar-header {
  padding: 24px 20px;
  border-bottom: 1px solid #f3f4f6;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.logo {
  display: flex;
  align-items: center;
  gap: 12px;
  transition: all 0.3s ease;
}

.logo-collapsed {
  justify-content: center;
}

.logo-icon {
  width: 40px;
  height: 40px;
  border-radius: 10px;
  background: linear-gradient(135deg, #667eea, #764ba2);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: 700;
  font-size: 16px;
  flex-shrink: 0;
}

.logo-text {
  font-size: 20px;
  font-weight: 700;
  color: #1f2937;
  white-space: nowrap;
}

.collapse-btn {
  width: 32px;
  height: 32px;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: white;
  color: #6b7280;
  cursor: pointer;
  transition: all 0.2s ease;
  flex-shrink: 0;
}

.collapse-btn:hover {
  background: #f9fafb;
  border-color: #d1d5db;
  color: #374151;
}

/* Navigation */
.sidebar-nav {
  flex: 1;
  padding: 20px 16px;
}

/* .nav-list {
  space-y: 4px;
} */

.nav-link {
  display: flex;
  align-items: center;
  padding: 12px 16px;
  border-radius: 8px;
  color: #6b7280;
  text-decoration: none;
  transition: all 0.2s ease;
  gap: 12px;
}

.nav-link:hover {
  background: #f9fafb;
  color: #374151;
}

.nav-link-active {
  background: #eff6ff;
  color: #2563eb;
  font-weight: 600;
}

.nav-link-collapsed {
  justify-content: center;
  padding: 12px;
}

.nav-icon {
  font-size: 18px;
  width: 20px;
  text-align: center;
  flex-shrink: 0;
}

.nav-text {
  font-size: 14px;
  font-weight: 500;
  white-space: nowrap;
  transition: opacity 0.3s ease;
}

.sidebar-collapsed .nav-text {
  opacity: 0;
  width: 0;
  overflow: hidden;
}

/* Sidebar Footer */
.sidebar-footer {
  padding: 20px;
  border-top: 1px solid #f3f4f6;
}

.logout-btn {
  display: flex;
  align-items: center;
  width: 100%;
  padding: 12px 16px;
  border-radius: 8px;
  color: #ef4444;
  background: white;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease;
  gap: 12px;
}

.logout-btn:hover {
  background: #fef2f2;
  color: #dc2626;
}

.logout-btn-collapsed {
  justify-content: center;
  padding: 12px;
}

.logout-icon {
  font-size: 16px;
  flex-shrink: 0;
}

.logout-text {
  font-size: 14px;
  font-weight: 500;
  white-space: nowrap;
  transition: opacity 0.3s ease;
}

.sidebar-collapsed .logout-text {
  opacity: 0;
  width: 0;
  overflow: hidden;
}
</style>