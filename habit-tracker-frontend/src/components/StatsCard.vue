<template>
  <div class="stats-card" :class="[iconBgColor, trendColor]">
    <div class="stats-content">
      <div class="stats-text">
        <p class="stats-title">{{ title }}</p>
        <p class="stats-value">{{ value }}</p>
      </div>
      <div class="stats-icon">
        <span>{{ icon }}</span>
      </div>
    </div>
    
    <div v-if="trend" class="stats-trend">
      <span class="trend-icon">{{ trendIcon }}</span>
      <span class="trend-text">{{ trend }}</span>
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
    default: 'stats-card-purple'
  },
  trend: {
    type: String,
    default: ''
  },
  trendColor: {
    type: String,
    default: 'trend-positive'
  },
  trendIcon: {
    type: String,
    default: '↗️'
  }
})
</script>

<style scoped>
.stats-card {
  background: white;
  border-radius: 20px;
  padding: 24px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.stats-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, var(--gradient-start), var(--gradient-end));
}

.stats-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
}

.stats-content {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 16px;
}

.stats-text {
  flex: 1;
}

.stats-title {
  font-size: 14px;
  font-weight: 600;
  color: #666;
  margin: 0 0 8px 0;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.stats-value {
  font-size: 32px;
  font-weight: 700;
  color: #1a1a1a;
  margin: 0;
  line-height: 1;
}

.stats-icon {
  width: 48px;
  height: 48px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
}

.stats-trend {
  display: flex;
  align-items: center;
  font-size: 12px;
  font-weight: 500;
}

.trend-icon {
  margin-right: 4px;
  font-size: 14px;
}

.trend-text {
  font-weight: 600;
}

/* Color Variants */
.stats-card-orange::before {
  --gradient-start: #ff7e5f;
  --gradient-end: #feb47b;
}

.stats-card-orange .stats-icon {
  background: linear-gradient(135deg, #ff7e5f, #feb47b);
  color: white;
}

.stats-card-green::before {
  --gradient-start: #56ab2f;
  --gradient-end: #a8e6cf;
}

.stats-card-green .stats-icon {
  background: linear-gradient(135deg, #56ab2f, #a8e6cf);
  color: white;
}

.stats-card-blue::before {
  --gradient-start: #4facfe;
  --gradient-end: #00f2fe;
}

.stats-card-blue .stats-icon {
  background: linear-gradient(135deg, #4facfe, #00f2fe);
  color: white;
}

.stats-card-purple::before {
  --gradient-start: #667eea;
  --gradient-end: #764ba2;
}

.stats-card-purple .stats-icon {
  background: linear-gradient(135deg, #667eea, #764ba2);
  color: white;
}

/* Trend Colors */
.trend-positive {
  color: #10b981;
}

.trend-neutral {
  color: #f59e0b;
}

.trend-info {
  color: #3b82f6;
}

.trend-negative {
  color: #ef4444;
}

/* Responsive Design */
@media (max-width: 768px) {
  .stats-card {
    padding: 20px;
    border-radius: 16px;
  }
  
  .stats-value {
    font-size: 28px;
  }
  
  .stats-icon {
    width: 44px;
    height: 44px;
    font-size: 18px;
  }
}

@media (max-width: 480px) {
  .stats-card {
    padding: 16px;
  }
  
  .stats-value {
    font-size: 24px;
  }
  
  .stats-icon {
    width: 40px;
    height: 40px;
    font-size: 16px;
  }
}
</style>