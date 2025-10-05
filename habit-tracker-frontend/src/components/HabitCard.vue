<template>
  <div class="bg-white rounded-xl shadow-sm p-4 border border-gray-100 hover:shadow-md transition-shadow duration-200">
    <div class="flex items-start justify-between">
      <div class="flex-1">
        <div class="flex items-center space-x-3">
          <input 
            type="checkbox" 
            :checked="habit.completed"
            @change="toggleHabit"
            class="w-5 h-5 text-purple-600 bg-gray-100 border-gray-300 rounded focus:ring-purple-500 focus:ring-2"
          />
          <div>
            <h3 class="font-semibold text-gray-800" :class="{ 'line-through text-gray-400': habit.completed }">
              {{ habit.title }}
            </h3>
            <p class="text-sm text-gray-500 mt-1">{{ habit.description }}</p>
          </div>
        </div>
        
        <div class="flex items-center justify-between mt-4">
          <div class="flex items-center space-x-4 text-sm text-gray-600">
            <span class="flex items-center">
              <span class="w-2 h-2 bg-orange-400 rounded-full mr-1"></span>
              {{ habit.streak }} day streak
            </span>
            <span class="flex items-center">
              <span class="w-2 h-2 bg-blue-400 rounded-full mr-1"></span>
              {{ habit.frequency }}
            </span>
          </div>
          
          <button 
            @click="deleteHabit"
            class="text-red-400 hover:text-red-600 transition-colors duration-200 p-1"
          >
            🗑️
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useHabitsStore } from '../stores/habits'

const props = defineProps({
  habit: {
    type: Object,
    required: true
  }
})

const habitsStore = useHabitsStore()

const toggleHabit = () => {
  habitsStore.toggleHabit(props.habit.id)
}

const deleteHabit = () => {
  if (confirm('Are you sure you want to delete this habit?')) {
    habitsStore.deleteHabit(props.habit.id)
  }
}
</script>