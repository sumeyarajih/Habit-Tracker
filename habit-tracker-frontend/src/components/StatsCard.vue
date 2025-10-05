<template>
  <div class="card">
    <h3>{{ title }}</h3>
    <p class="value">{{ value }}</p>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  value: String
})
</script>

<style scoped>
.card {
  background: #fff;
  padding: 16px;
  border-radius: 12px;
  box-shadow: 0 2px 6px rgba(0,0,0,0.1);
  text-align: center;
}
.value {
  font-size: 20px;
  font-weight: bold;
}
</style>
