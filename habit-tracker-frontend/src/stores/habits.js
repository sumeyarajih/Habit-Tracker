import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useHabitsStore = defineStore('habits', () => {
  const habits = ref([
    {
      id: 1,
      title: 'Morning Meditation',
      description: '10 minutes of mindfulness',
      streak: 7,
      frequency: 'Daily',
      completed: false,
      createdAt: new Date()
    },
    {
      id: 2,
      title: 'Drink Water',
      description: '8 glasses throughout the day',
      streak: 12,
      frequency: 'Daily',
      completed: false,
      createdAt: new Date()
    },
    {
      id: 3,
      title: 'Read for 30 minutes',
      description: 'Personal development books',
      streak: 3,
      frequency: 'Daily',
      completed: false,
      createdAt: new Date()
    },
    {
      id: 4,
      title: 'Exercise',
      description: '30 minutes of workout',
      streak: 5,
      frequency: 'Daily',
      completed: true,
      createdAt: new Date()
    },
    {
      id: 5,
      title: 'Journaling',
      description: 'Write daily reflections',
      streak: 2,
      frequency: 'Daily',
      completed: true,
      createdAt: new Date()
    }
  ])

  const currentStreak = computed(() => {
    return habits.value.reduce((max, habit) => Math.max(max, habit.streak), 0)
  })

  const completionRate = computed(() => {
    const completedCount = habits.value.filter(habit => habit.completed).length
    return Math.round((completedCount / habits.value.length) * 100)
  })

  const totalHabits = computed(() => habits.value.length)

  const todayHabits = computed(() => {
    return habits.value.filter(habit => !habit.completed)
  })

  function toggleHabit(id) {
    const habit = habits.value.find(h => h.id === id)
    if (habit) {
      habit.completed = !habit.completed
      if (habit.completed) {
        habit.streak += 1
      } else {
        habit.streak = Math.max(0, habit.streak - 1)
      }
    }
  }

  function addHabit(habit) {
    const newHabit = {
      id: Date.now(),
      ...habit,
      streak: 0,
      completed: false,
      createdAt: new Date()
    }
    habits.value.push(newHabit)
  }

  function deleteHabit(id) {
    habits.value = habits.value.filter(habit => habit.id !== id)
  }

  return {
    habits,
    currentStreak,
    completionRate,
    totalHabits,
    todayHabits,
    toggleHabit,
    addHabit,
    deleteHabit
  }
})