<template>
  <div class="stats-card" :class="[iconBgColor, trendColor]">
    <div class="stats-content">
      <div class="stats-text">
        <p class="stats-title">{{ title }}</p>
        <p class="stats-value">{{ value }}</p>
        <div v-if="trend" class="stats-trend">
          <span class="trend-icon">{{ trendIcon }}</span>
          <span class="trend-text">{{ trend }}</span>
        </div>
      </div>
      <div class="stats-icon">
        <span>{{ icon }}</span>
      </div>
    </div>
    
    <div v-if="description" class="stats-description">
      <p>{{ description }}</p>
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
  },
  description: {
    type: String,
    default: ''
  }
})
</script>

<style scoped>
.stats-card {
  background: white;
  border-radius: 16px;
  padding: 24px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  border: 1px solid #f0f0f0;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  width: 100%;
  height: fit-content;
  min-height: 140px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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
  transform: translateY(-2px);
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
}

.stats-content {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 12px;
  flex: 1;
}

.stats-text {
  flex: 1;
  min-width: 0;
}

.stats-title {
  font-size: 14px;
  font-weight: 600;
  color: #6b7280;
  margin: 0 0 8px 0;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.stats-value {
  font-size: 32px;
  font-weight: 700;
  color: #1a1a1a;
  margin: 0 0 12px 0;
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
  flex-shrink: 0;
  margin-left: 16px;
}

.stats-trend {
  display: flex;
  align-items: center;
  font-size: 13px;
  font-weight: 500;
  margin-top: 4px;
}

.trend-icon {
  margin-right: 6px;
  font-size: 14px;
}

.trend-text {
  font-weight: 600;
}

.stats-description {
  margin-top: 12px;
  padding-top: 12px;
  border-top: 1px solid #f0f0f0;
}

.stats-description p {
  font-size: 13px;
  color: #6b7280;
  margin: 0;
  line-height: 1.4;
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
@media (max-width: 1024px) {
  .stats-card {
    padding: 20px;
    min-height: 130px;
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

@media (max-width: 768px) {
  .stats-card {
    padding: 18px;
    border-radius: 14px;
    min-height: 120px;
  }
  
  .stats-value {
    font-size: 26px;
  }
  
  .stats-icon {
    width: 40px;
    height: 40px;
    font-size: 16px;
    margin-left: 12px;
  }
  
  .stats-title {
    font-size: 13px;
  }
}

@media (max-width: 480px) {
  .stats-card {
    padding: 16px;
    min-height: 110px;
  }
  
  .stats-value {
    font-size: 24px;
  }
  
  .stats-icon {
    width: 36px;
    height: 36px;
    font-size: 16px;
    margin-left: 10px;
  }
  
  .stats-content {
    margin-bottom: 8px;
  }
}
</style>