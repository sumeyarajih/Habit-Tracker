<template>
  <div class="app-container">
    <!-- Sidebar for desktop only -->
    <SideBar 
      :isCollapsed="isSidebarCollapsed" 
      @toggle-collapse="toggleSidebar" 
      class="hidden md:block fixed left-0 top-0 h-screen z-40" 
    />
    
    <!-- Mobile bottom navbar -->
    <MobileNavBar class="md:hidden fixed bottom-0 left-0 right-0 z-50" />
    
    <!-- Main content -->
    <main 
      class="flex-1 overflow-y-auto transition-all duration-300 min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100"
      :class="isSidebarCollapsed ? 'md:ml-20' : 'md:ml-64'"
    >
      <div class="pb-16 md:pb-0">
        <router-view />
      </div>
    </main>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import SideBar from './components/Sidebar.vue'
import MobileNavBar from './components/MobileNavBar.vue'

const isSidebarCollapsed = ref(false)

const toggleSidebar = () => {
  isSidebarCollapsed.value = !isSidebarCollapsed.value
}
</script>

<style>
.app-container {
  height: 100vh;
  overflow: hidden;
}

/* Ensure proper scrolling on mobile */
html, body {
  margin: 0;
  padding: 0;
  height: 100%;
}
</style>