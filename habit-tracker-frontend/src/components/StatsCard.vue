<template>
  <div class="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
    <div class="flex items-center justify-between">
      <div>
        <p class="text-sm text-gray-500">{{ title }}</p>
        <p class="text-2xl font-bold text-gray-800 mt-1">{{ value }}</p>
      </div>
      <div class="p-3 rounded-lg" :class="iconBgColor">
        <span class="text-xl">{{ icon }}</span>
      </div>
    </div>
    
    <div v-if="trend" class="mt-4 flex items-center text-sm" :class="trendColor">
      <span class="mr-1">{{ trendIcon }}</span>
      <span>{{ trend }}</span>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    required: true
  },
  value: {
    type: [String, Number],
    required: true
  },
  icon: {
    type: String,
    required: true
  },
  iconBgColor: {
    type: String,
    default: 'bg-purple-100 text-purple-600'
  },
  trend: {
    type: String,
    default: ''
  },
  trendColor: {
    type: String,
    default: 'text-green-600'
  },
  trendIcon: {
    type: String,
    default: '↗️'
  }
})
</script>