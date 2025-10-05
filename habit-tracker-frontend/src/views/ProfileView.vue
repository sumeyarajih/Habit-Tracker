<template>
  <div class="p-6 max-w-2xl mx-auto">
    <div class="mb-8">
      <h1 class="text-3xl font-bold text-gray-900">Your Profile</h1>
      <p class="text-gray-600 mt-2">Manage your account and preferences.</p>
    </div>

    <!-- Profile Card -->
    <div class="bg-white rounded-xl shadow-sm p-6 border border-gray-100 mb-6">
      <div class="flex items-center space-x-4 mb-6">
        <div class="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center text-white text-xl font-bold">
          U
        </div>
        <div>
          <h2 class="text-xl font-semibold text-gray-800">User Name</h2>
          <p class="text-gray-500">user@example.com</p>
        </div>
      </div>

      <!-- Stats -->
      <div class="grid grid-cols-2 gap-4 mb-6">
        <div class="text-center p-4 bg-gray-50 rounded-lg">
          <p class="text-2xl font-bold text-gray-800">{{ habitsStore.totalHabits }}</p>
          <p class="text-sm text-gray-500">Total Habits</p>
        </div>
        <div class="text-center p-4 bg-gray-50 rounded-lg">
          <p class="text-2xl font-bold text-gray-800">{{ habitsStore.currentStreak }}</p>
          <p class="text-sm text-gray-500">Current Streak</p>
        </div>
      </div>

      <!-- Settings -->
      <div class="space-y-4">
        <button class="w-full text-left p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors duration-200">
          🔔 Notification Settings
        </button>
        <button class="w-full text-left p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors duration-200">
          🌙 Dark Mode
        </button>
        <button class="w-full text-left p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors duration-200">
          🔒 Privacy & Security
        </button>
      </div>
    </div>

    <!-- App Info -->
    <div class="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
      <h3 class="text-lg font-semibold text-gray-800 mb-4">About HabitFlow</h3>
      <p class="text-gray-600 mb-4">
        HabitFlow helps you build and maintain positive habits through consistent tracking and motivation.
      </p>
      <div class="text-sm text-gray-500">
        <p>Version 1.0.0</p>
        <p class="mt-2">© 2024 HabitFlow. All rights reserved.</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useHabitsStore } from '../stores/habits'

const habitsStore = useHabitsStore()
</script>