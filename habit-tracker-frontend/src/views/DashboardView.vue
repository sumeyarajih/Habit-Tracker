<template>
  <div class="dashboard-wrapper">
    <div class="dashboard-container">
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
          <HabitCard 
            v-for="habit in todayHabits" 
            :key="habit.id" 
            :habit="habit" 
          />
        </div>
      </div>

      <!-- Quote Section -->
      <div class="quote-section">
        <div class="quote-card">
          <p class="quote-text">
            "Success is the sum of small efforts repeated day in and day out."
          </p>
          <p class="quote-author">- Robert Collier</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import HabitCard from '../components/HabitCard.vue'

// Mock data
const currentStreak = ref(12)
const completionRate = ref(87)
const totalHabits = ref(5)

// Today's habits data
const todayHabits = ref([
  {
    id: 1,
    title: "Morning Meditation",
    description: "10 minutes of mindfulness",
    streak: 7,
    frequency: "Daily",
    completed: false
  },
  {
    id: 2,
    title: "Drink Water",
    description: "8 glasses throughout the day",
    streak: 12,
    frequency: "Daily",
    completed: true
  },
  {
    id: 3,
    title: "Read for 30 minutes",
    description: "Personal development books",
    streak: 3,
    frequency: "Daily",
    completed: false
  },
  {
    id: 4,
    title: "Exercise",
    description: "30 minutes of workout",
    streak: 5,
    frequency: "Daily",
    completed: false
  },
  {
    id: 5,
    title: "Journaling",
    description: "Write daily reflections",
    streak: 8,
    frequency: "Daily",
    completed: true
  },
  {
    id: 6,
    title: "Learn Spanish",
    description: "15 minutes of language practice",
    streak: 15,
    frequency: "Daily",
    completed: false
  }
])
</script>

<style scoped>
/* Full page wrapper with background */
.dashboard-wrapper {
  min-height: 100vh;
  background: linear-gradient(135deg, #f5f3ff 0%, #ede9fe 50%, #faf5ff 100%);
  overflow-y: auto;
}

/* Main container */
.dashboard-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  min-height: 100vh;
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
  box-shadow: 0 8px 25px rgba(109, 40, 217, 0.15);
  border: 1px solid #e9d5ff;
  transition: all 0.3s ease;
  width: 200px
}

.stat-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 35px rgba(109, 40, 217, 0.25);
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
  color: #6d28d9;
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
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
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
  color: #6d28d9;
  margin: 0 0 24px 0;
  text-align: center;
}

.habits-list {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

/* Quote Section */
.quote-section {
  margin-top: 40px;
  margin-bottom: 40px;
}

.quote-card {
  background: white;
  border-radius: 16px;
  padding: 32px;
  box-shadow: 0 10px 30px rgba(109, 40, 217, 0.2);
  border: 1px solid #e9d5ff;
  text-align: center;
  position: relative;
  overflow: hidden;
}

.quote-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 4px;
  background: linear-gradient(135deg, #8b5cf6, #6d28d9);
}

.quote-text {
  font-size: 18px;
  font-weight: 500;
  color: #1f2937;
  margin: 0 0 12px 0;
  line-height: 1.6;
  font-style: italic;
}

.quote-author {
  font-size: 14px;
  color: #6d28d9;
  margin: 0;
  font-weight: 600;
}

/* Responsive Design */
@media (max-width: 768px) {
  .dashboard-container {
    padding: 16px;
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

  .quote-card {
    padding: 24px;
  }

  .quote-text {
    font-size: 16px;
  }
}

@media (max-width: 480px) {
  .dashboard-container {
    padding: 12px;
  }

  .stat-card {
    padding: 16px;
  }

  .stat-value {
    font-size: 24px;
  }

  .quote-card {
    padding: 20px;
  }

  .quote-text {
    font-size: 15px;
  }
}

/* Custom Scrollbar for the entire page */
.dashboard-wrapper::-webkit-scrollbar {
  width: 8px;
}

.dashboard-wrapper::-webkit-scrollbar-track {
  background: #f1f5f9;
  border-radius: 4px;
}

.dashboard-wrapper::-webkit-scrollbar-thumb {
  background: #c4b5fd;
  border-radius: 4px;
}

.dashboard-wrapper::-webkit-scrollbar-thumb:hover {
  background: #8b5cf6;
}

/* Firefox scrollbar */
.dashboard-wrapper {
  scrollbar-width: thin;
  scrollbar-color: #c4b5fd #f1f5f9;
}

/* Smooth scrolling for the entire page */
html {
  scroll-behavior: smooth;
}
</style>