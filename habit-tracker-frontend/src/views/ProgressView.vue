<template>
  <div class="progress-container">
    <!-- Header -->
    <div class="header">
      <h1 class="title">Your Progress</h1>
      <p class="subtitle">Track your habit completion over time.</p>
    </div>

    <!-- Progress Overview -->
    <div class="progress-grid">
      <!-- Streak Calendar -->
      <div class="progress-card">
        <h3 class="card-title">Monthly Overview</h3>
        <div class="calendar-placeholder">
          <div class="calendar-icon">📅</div>
          <p class="placeholder-text">Calendar view coming soon</p>
        </div>
      </div>

      <!-- Habit Progress -->
      <div class="progress-card">
        <h3 class="card-title">Habit Progress</h3>
        <div class="habits-progress">
          <div 
            v-for="habit in habitsStore.habits" 
            :key="habit.id"
            class="habit-progress-item"
          >
            <div class="habit-info">
              <span class="habit-name">{{ habit.title }}</span>
              <span class="habit-streak">{{ habit.streak }} days</span>
            </div>
            <div class="progress-bar-container">
              <div 
                class="progress-bar" 
                :style="{ width: `${Math.min(100, (habit.streak / 30) * 100)}%` }"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- All Habits -->
    <div class="section">
      <h2 class="section-title">All Habits</h2>
      <div class="habits-grid">
        <HabitCard
          v-for="habit in habitsStore.habits"
          :key="habit.id"
          :habit="habit"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { useHabitsStore } from '../stores/habits'
import HabitCard from '../components/HabitCard.vue'

const habitsStore = useHabitsStore()
</script>

<style scoped>
.progress-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  min-height: calc(100vh - 140px); /* Account for header */
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  overflow-y: auto;
}

/* Header Styles */
.header {
  margin-bottom: 32px;
  padding-top: 20px;
}

.title {
  font-size: 32px;
  font-weight: 700;
  color: white;
  margin: 0 0 8px 0;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.subtitle {
  font-size: 16px;
  color: rgba(255, 255, 255, 0.8);
  margin: 0;
  font-weight: 400;
}

/* Progress Grid */
.progress-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 24px;
  margin-bottom: 40px;
}

/* Progress Card */
.progress-card {
  background: white;
  border-radius: 20px;
  padding: 24px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px);
}

.card-title {
  font-size: 20px;
  font-weight: 600;
  color: #1a1a1a;
  margin: 0 0 20px 0;
}

/* Calendar Placeholder */
.calendar-placeholder {
  text-align: center;
  padding: 40px 20px;
  background: #f8f9fa;
  border-radius: 12px;
  border: 2px dashed #e9ecef;
}

.calendar-icon {
  font-size: 48px;
  margin-bottom: 16px;
  opacity: 0.5;
}

.placeholder-text {
  font-size: 16px;
  color: #666;
  margin: 0;
  font-weight: 500;
}

/* Habits Progress */
.habits-progress {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.habit-progress-item {
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 12px 0;
  border-bottom: 1px solid #f1f3f4;
}

.habit-progress-item:last-child {
  border-bottom: none;
}

.habit-info {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.habit-name {
  font-size: 14px;
  font-weight: 500;
  color: #1a1a1a;
  flex: 1;
  margin-right: 12px;
}

.habit-streak {
  font-size: 12px;
  font-weight: 600;
  color: #667eea;
  background: #f0f4ff;
  padding: 4px 8px;
  border-radius: 12px;
  white-space: nowrap;
}

/* Progress Bar */
.progress-bar-container {
  width: 100%;
  height: 8px;
  background: #e9ecef;
  border-radius: 4px;
  overflow: hidden;
}

.progress-bar {
  height: 100%;
  background: linear-gradient(90deg, #667eea, #764ba2);
  border-radius: 4px;
  transition: width 0.8s ease-in-out;
  position: relative;
}

.progress-bar::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
  animation: shimmer 2s infinite;
}

@keyframes shimmer {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
}

/* Section Styles */
.section {
  margin-bottom: 40px;
}

.section-title {
  font-size: 24px;
  font-weight: 600;
  color: white;
  margin: 0 0 20px 0;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

/* Habits Grid */
.habits-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 16px;
}

/* Responsive Design */
@media (max-width: 1024px) {
  .progress-container {
    max-width: 100%;
    padding: 20px 16px;
  }
  
  .progress-grid {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  }
}

@media (max-width: 768px) {
  .progress-container {
    padding: 16px;
    min-height: calc(100vh - 120px);
  }
  
  .header {
    margin-bottom: 24px;
    padding-top: 10px;
  }
  
  .title {
    font-size: 28px;
  }
  
  .progress-grid {
    grid-template-columns: 1fr;
    gap: 20px;
  }
  
  .progress-card {
    padding: 20px;
    border-radius: 16px;
  }
  
  .habits-grid {
    grid-template-columns: 1fr;
  }
  
  .calendar-placeholder {
    padding: 32px 16px;
  }
  
  .calendar-icon {
    font-size: 40px;
  }
  
  .section-title {
    font-size: 22px;
  }
}

@media (max-width: 480px) {
  .progress-container {
    padding: 12px;
    min-height: calc(100vh - 100px);
  }
  
  .title {
    font-size: 24px;
  }
  
  .section-title {
    font-size: 20px;
  }
  
  .card-title {
    font-size: 18px;
  }
  
  .progress-card {
    padding: 16px;
  }
  
  .calendar-placeholder {
    padding: 24px 12px;
  }
  
  .calendar-icon {
    font-size: 36px;
  }
  
  .habit-name {
    font-size: 13px;
  }
  
  .habit-streak {
    font-size: 11px;
  }
}

/* Extra small devices */
@media (max-width: 360px) {
  .progress-container {
    padding: 8px;
  }
  
  .progress-card {
    padding: 12px;
  }
  
  .habits-grid {
    grid-template-columns: 1fr;
  }
}
</style>