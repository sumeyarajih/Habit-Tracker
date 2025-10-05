<template>
  <aside class="w-64 bg-white h-screen shadow-md flex flex-col">
    <!-- Logo / App Name -->
    <div class="p-6 flex items-center space-x-3 border-b">
      <div class="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center text-white font-bold">
        H
      </div>
      <span class="font-semibold text-lg">HabitFlow</span>
    </div>

    <!-- Navigation -->
    <nav class="flex-1 p-4">
      <ul class="space-y-2">
        <li>
          <router-link
            to="/"
            class="flex items-center p-2 rounded hover:bg-gray-100"
            :class="{ 'bg-gray-100 font-semibold': $route.path === '/' }"
          >
            <span class="mr-3">🏠</span> Dashboard
          </router-link>
        </li>

        <li>
          <router-link
            to="/add"
            class="flex items-center p-2 rounded hover:bg-gray-100"
            :class="{ 'bg-gray-100 font-semibold': $route.path === '/add' }"
          >
            <span class="mr-3">➕</span> Add Habit
          </router-link>
        </li>

        <li>
          <router-link
            to="/progress"
            class="flex items-center p-2 rounded hover:bg-gray-100"
            :class="{ 'bg-gray-100 font-semibold': $route.path === '/progress' }"
          >
            <span class="mr-3">📊</span> Progress
          </router-link>
        </li>

        <li>
          <router-link
            to="/profile"
            class="flex items-center p-2 rounded hover:bg-gray-100"
            :class="{ 'bg-gray-100 font-semibold': $route.path === '/profile' }"
          >
            <span class="mr-3">👤</span> Profile
          </router-link>
        </li>
      </ul>
    </nav>

    <!-- Logout -->
    <div class="p-4 border-t">
      <button
        @click="logout"
        class="flex items-center p-2 w-full text-red-600 hover:bg-red-50 rounded"
      >
        <span class="mr-3">➡️</span> Logout
      </button>
    </div>
  </aside>
</template>

<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

const logout = () => {
  // Example logout function
  alert("Logout clicked!");
  // Add your logout logic here, then redirect
  router.push("/login");
};
</script>
