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
  padding: 8px 4px;
  background: white;
  height: 70px;
  border-top: 1px solid #e5e7eb;
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px);
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 30;
}

.nav-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 8px 4px;
  border-radius: 12px;
  text-decoration: none;
  transition: all 0.2s ease;
  flex: 1;
  max-width: 80px;
  color: #6b7280;
  min-height: 50px;
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
  line-height: 1.2;
}

/* Hide on desktop */
@media (min-width: 768px) {
  .mobile-nav {
    display: none;
  }
}

/* Responsive adjustments */
@media (max-width: 480px) {
  .mobile-nav {
    padding: 6px 2px;
    height: 65px;
  }
  
  .nav-item {
    padding: 6px 2px;
    max-width: 70px;
    min-height: 45px;
  }
  
  .nav-icon {
    font-size: 18px;
  }
  
  .nav-label {
    font-size: 10px;
  }
}

@media (max-width: 360px) {
  .nav-label {
    font-size: 9px;
  }
  
  .nav-icon {
    font-size: 16px;
  }
}
</style>