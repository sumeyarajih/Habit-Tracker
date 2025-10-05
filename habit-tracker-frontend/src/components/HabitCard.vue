<template>
  <div class="habit-card">
    <input type="checkbox" :checked="habit.completed" @change="$emit('toggle')" />
    <div>
      <h4>{{ habit.name }}</h4>
      <p>{{ habit.description }}</p>
    </div>
    <span>{{ habit.streak }} day streak</span>
  </div>
</template>

<script setup>
defineProps({
  habit: Object
})
</script>

<style scoped>
.habit-card {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #fafafa;
  padding: 12px;
  margin-bottom: 8px;
  border-radius: 8px;
}
</style>
