<template>
  <div class="p-6 max-w-2xl mx-auto">
    <div class="mb-8">
      <h1 class="text-3xl font-bold text-gray-900">Add New Habit</h1>
      <p class="text-gray-600 mt-2">Create a new habit to track your progress.</p>
    </div>

    <form @submit.prevent="addNewHabit" class="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
      <div class="space-y-6">
        <!-- Habit Title -->
        <div>
          <label for="title" class="block text-sm font-medium text-gray-700 mb-2">
            Habit Title *
          </label>
          <input
            id="title"
            v-model="newHabit.title"
            type="text"
            required
            placeholder="e.g., Morning Meditation"
            class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors duration-200"
          />
        </div>

        <!-- Description -->
        <div>
          <label for="description" class="block text-sm font-medium text-gray-700 mb-2">
            Description
          </label>
          <textarea
            id="description"
            v-model="newHabit.description"
            rows="3"
            placeholder="e.g., 10 minutes of mindfulness"
            class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors duration-200"
          ></textarea>
        </div>

        <!-- Frequency -->
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2">
            Frequency *
          </label>
          <div class="grid grid-cols-2 gap-3">
            <button
              type="button"
              v-for="frequency in frequencies"
              :key="frequency"
              @click="newHabit.frequency = frequency"
              class="p-3 border rounded-lg text-center transition-colors duration-200"
              :class="newHabit.frequency === frequency 
                ? 'border-purple-500 bg-purple-50 text-purple-700' 
                : 'border-gray-300 hover:border-gray-400'"
            >
              {{ frequency }}
            </button>
          </div>
        </div>

        <!-- Goal -->
        <div>
          <label for="goal" class="block text-sm font-medium text-gray-700 mb-2">
            Daily Goal
          </label>
          <input
            id="goal"
            v-model="newHabit.goal"
            type="text"
            placeholder="e.g., 8 glasses of water"
            class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors duration-200"
          />
        </div>

        <!-- Submit Button -->
        <div class="flex space-x-4 pt-4">
          <button
            type="button"
            @click="$router.back()"
            class="flex-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-200"
          >
            Cancel
          </button>
          <button
            type="submit"
            class="flex-1 px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors duration-200 font-medium"
          >
            Add Habit
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useHabitsStore } from '../stores/habits'

const router = useRouter()
const habitsStore = useHabitsStore()

const frequencies = ['Daily', 'Weekly', 'Monthly']

const newHabit = ref({
  title: '',
  description: '',
  frequency: 'Daily',
  goal: ''
})

const addNewHabit = () => {
  habitsStore.addHabit(newHabit.value)
  router.push('/')
}
</script>