<template>
  <div class="app-container">
    <!-- Only show sidebar and header on authenticated routes -->
    <template v-if="showLayout">
      <SideBar 
        :isCollapsed="isSidebarCollapsed" 
        @toggle-collapse="toggleSidebar" 
        class="hidden md:block fixed left-0 top-0 h-screen z-40" 
      />
      
      <MobileNavBar class="md:hidden fixed bottom-0 left-0 right-0 z-50" />
      
      <main 
        class="flex-1 transition-all duration-300 bg-gradient-to-br from-blue-50 to-indigo-100"
        :class="isSidebarCollapsed ? 'md:ml-20' : 'md:ml-64'"
      >
        <Header 
          :isSidebarCollapsed="isSidebarCollapsed"
          @toggle-sidebar="toggleSidebar" 
        />
        
        <div class="router-content">
          <router-view />
        </div>
      </main>
    </template>
    
    <!-- Full page for login/signup pages -->
    <template v-else>
      <router-view />
    </template>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import SideBar from './components/Sidebar.vue'
import MobileNavBar from './components/MobileNavBar.vue'
import Header from './components/Header.vue'

const route = useRoute()
const isSidebarCollapsed = ref(false)

// Define which routes should show the full layout (authenticated routes)
const showLayout = computed(() => {
  const noLayoutRoutes = ['/', '/login', '/signup', '/forgot-password']
  return !noLayoutRoutes.includes(route.path)
})

const toggleSidebar = () => {
  isSidebarCollapsed.value = !isSidebarCollapsed.value
}
</script>

<style scoped>
.app-container {
  display: flex;
  height: 100vh;
  overflow: hidden;
}

main {
  flex: 1;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  position: relative;
}

.router-content {
  flex: 1;
  overflow-y: auto;
  overflow-x: hidden;
  padding-bottom: 80px;
  height: calc(100vh - 80px); /* Adjust based on header height */
}

/* Fix for mobile navbar space */
@media (max-width: 768px) {
  .router-content {
    padding-bottom: 80px; /* Space for mobile navbar */
  }
}

/* For desktop */
@media (min-width: 769px) {
  .router-content {
    padding-bottom: 20px; /* Less space needed on desktop */
  }
}
</style>

<style>
/* Global styles */
* {
  box-sizing: border-box;
}

html, body {
  margin: 0;
  padding: 0;
  height: 100%;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}

#app {
  height: 100%;
}

/* Custom scrollbar for the entire app */
.router-content::-webkit-scrollbar {
  width: 8px;
}

.router-content::-webkit-scrollbar-track {
  background: #f1f5f9;
  border-radius: 4px;
}

.router-content::-webkit-scrollbar-thumb {
  background: #c4b5fd;
  border-radius: 4px;
  transition: background 0.3s ease;
}

.router-content::-webkit-scrollbar-thumb:hover {
  background: #8b5cf6;
}

/* For Firefox */
.router-content {
  scrollbar-width: thin;
  scrollbar-color: #c4b5fd #f1f5f9;
}

/* Smooth scrolling */
html {
  scroll-behavior: smooth;
}

/* Ensure proper scrolling on mobile */
@media (max-width: 768px) {
  .router-content {
    -webkit-overflow-scrolling: touch; /* Smooth scrolling on iOS */
  }
}

/* Remove default focus outlines and add custom ones */
*:focus {
  outline: none;
}

.focus-visible:focus {
  outline: 2px solid #8b5cf6;
  outline-offset: 2px;
}
</style>