// src/store/habits.js
import { defineStore } from 'pinia'

export const useHabitsStore = defineStore('habits', {
  state: () => ({
    streak: 12,
    completionRate: 87,
    totalHabits: 5,
    habits: [
      { id: 1, name: 'Morning Meditation', description: '10 minutes of mindfulness', completed: false, streak: 7 },
      { id: 2, name: 'Drink Water', description: '8 glasses throughout the day', completed: true, streak: 12 },
      { id: 3, name: 'Read for 30 minutes', description: 'Personal development books', completed: false, streak: 3 },
    ]
  }),
  actions: {
    toggleHabit(id) {
      const habit = this.habits.find(h => h.id === id)
      if (habit) habit.completed = !habit.completed
    }
  }
})
