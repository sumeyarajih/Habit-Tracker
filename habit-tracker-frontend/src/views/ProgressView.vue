<template>
  <div class="p-6 max-w-6xl mx-auto">
    <div class="mb-8">
      <h1 class="text-3xl font-bold text-gray-900">Your Progress</h1>
      <p class="text-gray-600 mt-2">Track your habit completion over time.</p>
    </div>

    <!-- Progress Overview -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
      <!-- Streak Calendar -->
      <div class="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
        <h3 class="text-lg font-semibold text-gray-800 mb-4">Monthly Overview</h3>
        <div class="text-center py-8 text-gray-500">
          <div class="text-4xl mb-2">📅</div>
          <p>Calendar view coming soon</p>
        </div>
      </div>

      <!-- Habit Progress -->
      <div class="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
        <h3 class="text-lg font-semibold text-gray-800 mb-4">Habit Progress</h3>
        <div class="space-y-4">
          <div 
            v-for="habit in habitsStore.habits" 
            :key="habit.id"
            class="flex items-center justify-between"
          >
            <span class="text-gray-700">{{ habit.title }}</span>
            <div class="flex items-center space-x-2">
              <span class="text-sm text-gray-500">{{ habit.streak }} days</span>
              <div class="w-20 bg-gray-200 rounded-full h-2">
                <div 
                  class="bg-purple-600 h-2 rounded-full" 
                  :style="{ width: `${Math.min(100, (habit.streak / 30) * 100)}%` }"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- All Habits -->
    <div class="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
      <h3 class="text-lg font-semibold text-gray-800 mb-4">All Habits</h3>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <HabitCard
          v-for="habit in habitsStore.habits"
          :key="habit.id"
          :habit="habit"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { useHabitsStore } from '../stores/habits'
import HabitCard from '../components/HabitCard.vue'

const habitsStore = useHabitsStore()
</script>