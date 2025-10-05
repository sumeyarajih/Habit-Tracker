<template>
  <nav class="mobile-nav">
    <router-link
      v-for="item in navItems"
      :key="item.name"
      :to="item.path"
      class="nav-item"
      :class="{ 'nav-item-active': $route.path === item.path }"
    >
      <span class="nav-icon">{{ item.icon }}</span>
      <span class="nav-label">{{ item.name }}</span>
    </router-link>
  </nav>
</template>

<script setup>
import { ref } from 'vue'

const navItems = ref([
  { name: 'Dashboard', path: '/', icon: '🏠' },
  { name: 'Add', path: '/add', icon: '➕' },
  { name: 'Progress', path: '/progress', icon: '📊' },
  { name: 'Profile', path: '/profile', icon: '👤' }
])
</script>

<style scoped>
.mobile-nav {
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 12px 16px;
  background: white;
  height: 70px;
  border-top: 1px solid #e5e7eb;
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px);
}

.nav-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 8px 12px;
  border-radius: 12px;
  text-decoration: none;
  transition: all 0.2s ease;
  flex: 1;
  max-width: 80px;
  color: #6b7280;
}

.nav-item:hover {
  background: #f9fafb;
}

.nav-item-active {
  background: #eff6ff;
  color: #2563eb;
  transform: translateY(-2px);
}

.nav-icon {
  font-size: 20px;
  margin-bottom: 4px;
  transition: transform 0.2s ease;
}

.nav-item-active .nav-icon {
  transform: scale(1.1);
}

.nav-label {
  font-size: 11px;
  font-weight: 500;
  text-align: center;
}

/* Hide on desktop */
@media (min-width: 768px) {
  .mobile-nav {
    display: none;
  }
}
</style>