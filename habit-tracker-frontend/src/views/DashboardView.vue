<template>
  <div class="dashboard-container">
    <!-- Header -->
    <div class="header-section">
      <h1 class="greeting-title">Good morning!</h1>
      <p class="greeting-subtitle">Let's make today productive. You have {{ todayHabitsCount }} habits to complete.</p>
    </div>

    <!-- Stats Cards -->
    <div class="stats-section">
      <div class="stats-grid">
        <!-- Current Streak -->
        <div class="stat-card">
          <div class="stat-header">
            <h3 class="stat-title">Current Streak</h3>
            <div class="stat-icon streak-icon">🔥</div>
          </div>
          <p class="stat-value">{{ currentStreak }} days</p>
        </div>

        <!-- Completion Rate -->
        <div class="stat-card">
          <div class="stat-header">
            <h3 class="stat-title">Completion Rate</h3>
            <div class="stat-icon completion-icon">📈</div>
          </div>
          <p class="stat-value">{{ completionRate }}%</p>
        </div>

        <!-- Total Habits -->
        <div class="stat-card">
          <div class="stat-header">
            <h3 class="stat-title">Total Habits</h3>
            <div class="stat-icon habits-icon">📝</div>
          </div>
          <p class="stat-value">{{ totalHabits }}</p>
        </div>
      </div>
    </div>

    <!-- Today's Habits -->
    <div class="habits-section">
      <h2 class="section-title">Today's Habits</h2>
      
      <div class="habits-list">
        <!-- Morning Meditation -->
        <div class="habit-item">
          <div class="habit-checkbox">
            <input type="checkbox" id="meditation" class="checkbox-input">
            <label for="meditation" class="checkbox-label"></label>
          </div>
          <div class="habit-content">
            <div class="habit-main">
              <h3 class="habit-title">Morning Meditation</h3>
              <p class="habit-description">10 minutes of mindfulness</p>
            </div>
            <div class="habit-meta">
              <span class="streak-badge">7 day streak</span>
              <span class="frequency-badge">Daily</span>
            </div>
          </div>
        </div>

        <!-- Drink Water -->
        <div class="habit-item">
          <div class="habit-checkbox">
            <input type="checkbox" id="water" class="checkbox-input">
            <label for="water" class="checkbox-label"></label>
          </div>
          <div class="habit-content">
            <div class="habit-main">
              <h3 class="habit-title">Drink Water</h3>
              <p class="habit-description">8 glasses throughout the day</p>
            </div>
            <div class="habit-meta">
              <span class="streak-badge">12 day streak</span>
              <span class="frequency-badge">Daily</span>
            </div>
          </div>
        </div>

        <!-- Read for 30 minutes -->
        <div class="habit-item">
          <div class="habit-checkbox">
            <input type="checkbox" id="reading" class="checkbox-input">
            <label for="reading" class="checkbox-label"></label>
          </div>
          <div class="habit-content">
            <div class="habit-main">
              <h3 class="habit-title">Read for 30 minutes</h3>
              <p class="habit-description">Personal development books</p>
            </div>
            <div class="habit-meta">
              <span class="streak-badge">3 day streak</span>
              <span class="frequency-badge">Daily</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// Mock data
const currentStreak = ref(12)
const completionRate = ref(87)
const totalHabits = ref(5)
const todayHabitsCount = ref(3)
</script>

<style scoped>
.dashboard-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 24px 20px;
  min-height: 100vh;
}

/* Header Section */
.header-section {
  text-align: center;
  margin-bottom: 40px;
  padding-top: 20px;
}

.greeting-title {
  font-size: 32px;
  font-weight: 700;
  color: #1f2937;
  margin: 0 0 8px 0;
  line-height: 1.2;
}

.greeting-subtitle {
  font-size: 16px;
  color: #6b7280;
  margin: 0;
  font-weight: 400;
}

/* Stats Section */
.stats-section {
  margin-bottom: 40px;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
}

.stat-card {
  background: white;
  border-radius: 16px;
  padding: 24px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  border: 1px solid #e5e7eb;
  transition: all 0.3s ease;
}

.stat-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
}

.stat-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 12px;
}

.stat-title {
  font-size: 14px;
  font-weight: 600;
  color: #6b7280;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin: 0;
}

.stat-icon {
  width: 40px;
  height: 40px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
}

.streak-icon {
  background: linear-gradient(135deg, #fed7aa, #fdba74);
}

.completion-icon {
  background: linear-gradient(135deg, #bbf7d0, #86efac);
}

.habits-icon {
  background: linear-gradient(135deg, #c7d2fe, #a5b4fc);
}

.stat-value {
  font-size: 32px;
  font-weight: 700;
  color: #1f2937;
  margin: 0;
  line-height: 1;
}

/* Habits Section */
.habits-section {
  margin-bottom: 40px;
}

.section-title {
  font-size: 24px;
  font-weight: 600;
  color: #1f2937;
  margin: 0 0 24px 0;
}

.habits-list {
  space-y: 16px;
}

.habit-item {
  background: white;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  border: 1px solid #f3f4f6;
  display: flex;
  align-items: flex-start;
  gap: 16px;
  transition: all 0.2s ease;
}

.habit-item:hover {
  border-color: #e5e7eb;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
}

/* Checkbox Styles */
.habit-checkbox {
  position: relative;
  margin-top: 2px;
}

.checkbox-input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

.checkbox-label {
  display: block;
  width: 20px;
  height: 20px;
  border: 2px solid #d1d5db;
  border-radius: 6px;
  position: relative;
  cursor: pointer;
  transition: all 0.2s ease;
  background: white;
}

.checkbox-input:checked + .checkbox-label {
  background: #10b981;
  border-color: #10b981;
}

.checkbox-input:checked + .checkbox-label::after {
  content: '✓';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-size: 12px;
  font-weight: bold;
}

/* Habit Content */
.habit-content {
  flex: 1;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 16px;
}

.habit-main {
  flex: 1;
}

.habit-title {
  font-size: 16px;
  font-weight: 600;
  color: #1f2937;
  margin: 0 0 4px 0;
  line-height: 1.4;
}

.habit-description {
  font-size: 14px;
  color: #6b7280;
  margin: 0;
  line-height: 1.4;
}

.habit-meta {
  display: flex;
  flex-direction: column;
  gap: 4px;
  align-items: flex-end;
}

.streak-badge,
.frequency-badge {
  font-size: 12px;
  font-weight: 500;
  padding: 4px 8px;
  border-radius: 12px;
  white-space: nowrap;
}

.streak-badge {
  background: #fef3c7;
  color: #92400e;
}

.frequency-badge {
  background: #dbeafe;
  color: #1e40af;
}

/* Responsive Design */
@media (max-width: 768px) {
  .dashboard-container {
    padding: 16px;
    padding-bottom: 80px; /* Space for bottom navbar */
  }

  .greeting-title {
    font-size: 28px;
  }

  .stats-grid {
    grid-template-columns: 1fr;
    gap: 16px;
  }

  .stat-card {
    padding: 20px;
  }

  .stat-value {
    font-size: 28px;
  }

  .section-title {
    font-size: 20px;
  }

  .habit-item {
    padding: 16px;
  }

  .habit-content {
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
  }

  .habit-meta {
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
  }
}

@media (max-width: 480px) {
  .dashboard-container {
    padding: 12px;
    padding-bottom: 80px;
  }

  .greeting-title {
    font-size: 24px;
  }

  .stat-card {
    padding: 16px;
  }

  .stat-value {
    font-size: 24px;
  }

  .habit-item {
    padding: 12px;
  }

  .habit-title {
    font-size: 15px;
  }

  .habit-description {
    font-size: 13px;
  }
}
</style>