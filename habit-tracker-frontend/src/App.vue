<template>
  <div class="app-container">
    <!-- Only show sidebar and header on authenticated routes -->
    <template v-if="showLayout">
      <SideBar 
        :isCollapsed="isSidebarCollapsed" 
        @toggle-collapse="toggleSidebar" 
        class="sidebar" 
      />
      
      <!-- Mobile Navbar -->
      <MobileNavBar class="mobile-nav" />
      
      <!-- Main Content Area -->
      <div 
        class="main-content"
        :class="{
          'sidebar-collapsed': isSidebarCollapsed,
          'sidebar-expanded': !isSidebarCollapsed
        }"
      >
        <Header 
          :isSidebarCollapsed="isSidebarCollapsed"
          @toggle-sidebar="toggleSidebar" 
        />
        
        <div class="router-content">
          <router-view />
        </div>
      </div>
    </template>
    
    <!-- Full page for login/signup pages -->
    <template v-else>
      <div class="full-page">
        <router-view />
      </div>
    </template>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import SideBar from './components/Sidebar.vue'
import MobileNavBar from './components/MobileNavBar.vue'
import Header from './components/Header.vue'

const route = useRoute()
const isSidebarCollapsed = ref(false)

// Debug route info
console.log('Current route:', route.path)

// Define which routes should show the full layout (authenticated routes)
const showLayout = computed(() => {
  const noLayoutRoutes = ['/login', '/signup', '/forgot-password']
  const shouldShow = !noLayoutRoutes.includes(route.path)
  console.log('Should show layout:', shouldShow, 'for route:', route.path)
  return shouldShow
})

const toggleSidebar = () => {
  isSidebarCollapsed.value = !isSidebarCollapsed.value
}

// Check authentication status on mount
onMounted(() => {
  const isAuth = localStorage.getItem('isAuthenticated')
  console.log('Auth status on mount:', isAuth)
})
</script>

<style scoped>
.app-container {
  width: 100%;
  height: 100vh;
  position: relative;
}

/* Full page layout for auth pages */
.full-page {
  width: 100%;
  height: 100vh;
  overflow: auto;
}

/* Sidebar styles */
.sidebar {
  position: fixed;
  left: 0;
  top: 0;
  height: 100vh;
  z-index: 40;
  display: none; /* Hidden on mobile by default */
}

@media (min-width: 768px) {
  .sidebar {
    display: block;
  }
}

/* Mobile navbar */
.mobile-nav {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 50;
  display: block;
}

@media (min-width: 768px) {
  .mobile-nav {
    display: none;
  }
}

/* Main content area */
.main-content {
  width: 100%;
  min-height: 100vh;
  background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%);
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
}

/* Desktop sidebar spacing */
@media (min-width: 768px) {
  .sidebar-expanded {
    margin-left: 16rem; /* 64 */
    width: calc(100% - 16rem);
  }
  
  .sidebar-collapsed {
    margin-left: 5rem; /* 20 */
    width: calc(100% - 5rem);
  }
}

/* Mobile full width */
@media (max-width: 767px) {
  .main-content {
    margin-left: 0 !important;
    width: 100% !important;
    padding-bottom: 80px; /* Space for mobile navbar */
  }
}

/* Router content area */
.router-content {
  flex: 1;
  overflow-y: auto;
  overflow-x: hidden;
  padding: 20px;
  min-height: calc(100vh - 80px); /* Adjust based on header height */
}

/* Ensure proper scrolling */
.router-content {
  -webkit-overflow-scrolling: touch;
}
</style>

<style>
/* Global reset styles */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html, body {
  height: 100%;
  width: 100%;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  overflow: hidden; /* Prevent body scroll */
}

#app {
  height: 100vh;
  width: 100vw;
}

/* Custom scrollbar */
.router-content::-webkit-scrollbar {
  width: 6px;
}

.router-content::-webkit-scrollbar-track {
  background: #f1f5f9;
  border-radius: 4px;
}

.router-content::-webkit-scrollbar-thumb {
  background: #c4b5fd;
  border-radius: 4px;
}

.router-content::-webkit-scrollbar-thumb:hover {
  background: #8b5cf6;
}

/* Remove blue highlight on mobile */
* {
  -webkit-tap-highlight-color: transparent;
}

/* Smooth transitions */
* {
  transition: background-color 0.2s ease;
}
</style>