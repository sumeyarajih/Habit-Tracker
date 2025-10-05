<template>
  <div class="app-container">
    <!-- Sidebar for desktop - collapsible -->
    <SideBar :isCollapsed="isSidebarCollapsed" @toggle-collapse="toggleSidebar" class="hidden md:block" />
    
    <!-- Mobile bottom navbar -->
    <div class="md:hidden fixed bottom-0 left-0 right-0 bg-white shadow-lg z-50 border-t border-gray-200">
      <MobileNavBar />
    </div>
    
    <!-- Main content -->
    <main class="flex-1 overflow-y-auto transition-all duration-300" :class="isSidebarCollapsed ? 'md:ml-20' : 'md:ml-64'">
      <div class="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 pb-16 md:pb-0">
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
</style>