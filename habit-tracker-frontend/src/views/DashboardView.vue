<template>
  <div class="dashboard">
    <h1>Good morning! 🌅</h1>
    <p>Let's make today productive. You have {{ habits.length }} habits to complete.</p>

    <div class="stats">
      <StatsCard title="Current Streak" :value="`${streak} days`" />
      <StatsCard title="Completion Rate" :value="`${completionRate}%`" />
      <StatsCard title="Total Habits" :value="totalHabits.toString()" />
    </div>

    <h2>Today's Habits</h2>
    <HabitCard
      v-for="habit in habits"
      :key="habit.id"
      :habit="habit"
      @toggle="toggleHabit(habit.id)"
    />
  </div>
</template>

<script setup>
import { useHabitsStore } from '../stores/habits'
import StatsCard from '../components/StatsCard.vue'
import HabitCard from '../components/HabitCard.vue'

const stores = useHabitsStore()

const streak = stores.streak
const completionRate = stores.completionRate
const totalHabits = stores.totalHabits
const habits = stores.habits
const toggleHabit = stores.toggleHabit
</script>
