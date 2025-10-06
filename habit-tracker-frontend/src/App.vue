<template>
  <div class="app-container">
    <!-- Sidebar for desktop - collapsible -->
    <SideBar 
      :isCollapsed="isSidebarCollapsed" 
      @toggle-collapse="toggleSidebar" 
      class="hidden md:block fixed left-0 top-0 h-screen z-40" 
    />
    
    <!-- Mobile bottom navbar -->
    <MobileNavBar class="md:hidden fixed bottom-0 left-0 right-0 z-50" />
    
    <!-- Main content -->
    <main 
      class="flex-1 transition-all duration-300 bg-gradient-to-br from-blue-50 to-indigo-100"
      :class="isSidebarCollapsed ? 'md:ml-20' : 'md:ml-64'"
    >
      <!-- Header -->
      <Header 
        :isSidebarCollapsed="isSidebarCollapsed"
        @toggle-sidebar="toggleSidebar" 
      />
      
      <!-- Router view with proper scrolling -->
      <div class="router-content">
        <router-view />
      </div>
    </main>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import SideBar from './components/Sidebar.vue'
import MobileNavBar from './components/MobileNavBar.vue'
import Header from './components/Header.vue'

const isSidebarCollapsed = ref(false)

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

/* Main content area */
main {
  flex: 1;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

/* Router content area - this is where scrolling happens */
.router-content {
  flex: 1;
  overflow-y: auto;
  padding-bottom: 80px; /* Space for mobile nav */
}

/* Remove the old pb-16 class from the template */
</style>

<style>
/* Global styles */
html, body {
  margin: 0;
  padding: 0;
  height: 100%;
  overflow: hidden; /* Prevent double scrollbars */
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
}

.router-content::-webkit-scrollbar-thumb:hover {
  background: #8b5cf6;
}

/* For Firefox */
.router-content {
  scrollbar-width: thin;
  scrollbar-color: #c4b5fd #f1f5f9;
}
</style>