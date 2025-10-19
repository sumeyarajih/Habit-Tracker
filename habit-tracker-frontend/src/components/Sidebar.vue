<template>
  <aside class="sidebar" :class="{ 'sidebar-mobile': isMobile }">
    <!-- Overlay for mobile -->
    <div 
      v-if="isMobile && isSidebarOpen" 
      class="sidebar-overlay" 
      @click="$emit('toggle-sidebar')"
    ></div>
    
    <!-- Sidebar Content -->
    <div class="sidebar-content" :class="{ 'sidebar-open': isSidebarOpen }">
      <!-- Navigation -->
      <nav class="sidebar-nav">
        <ul class="nav-list">
          <li v-for="item in navItems" :key="item.name">
            <router-link
              :to="item.path"
              class="nav-link"
              :class="{ 'nav-link-active': $route.path === item.path }"
              @click="isMobile && $emit('toggle-sidebar')"
            >
              <span class="nav-icon">{{ item.icon }}</span>
              <span class="nav-text">{{ item.name }}</span>
            </router-link>
          </li>
        </ul>
      </nav>

      <!-- Logout -->
      <div class="sidebar-footer">
        <button
          @click="logout"
          class="logout-btn"
          title="Logout"
        >
          <span class="logout-icon">➡️</span>
          <span class="logout-text">Logout</span>
        </button>
      </div>
    </div>
  </aside>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from "vue-router";

const props = defineProps({
  isMobile: {
    type: Boolean,
    default: false
  },
  isSidebarOpen: {
    type: Boolean,
    default: false
  }
})

defineEmits(['toggle-sidebar'])

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
  position: fixed;
  left: 0;
  top: 0;
  z-index: 40;
}

.sidebar-mobile .sidebar-content {
  transform: translateX(-100%);
  transition: transform 0.3s ease;
}

.sidebar-mobile .sidebar-content.sidebar-open {
  transform: translateX(0);
}

.sidebar-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  z-index: 39;
}

.sidebar-content {
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  background: white;
  z-index: 41;
  position: relative;
  padding-top: 70px; /* Space for header */
}

/* Navigation */
.sidebar-nav {
  flex: 1;
  padding: 20px 16px;
}

.nav-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.nav-list li {
  margin-bottom: 4px;
}

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

.logout-icon {
  font-size: 16px;
  flex-shrink: 0;
}

.logout-text {
  font-size: 14px;
  font-weight: 500;
  white-space: nowrap;
}

/* Responsive Design */
@media (max-width: 767px) {
  .sidebar:not(.sidebar-mobile) {
    display: none;
  }
  
  .sidebar-mobile .sidebar-content {
    width: 280px;
  }
}

@media (min-width: 768px) {
  .sidebar-overlay {
    display: none;
  }
  
  .sidebar-mobile .sidebar-content {
    transform: translateX(0);
  }
}
</style>