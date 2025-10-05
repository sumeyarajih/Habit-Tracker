<template>
  <div class="add-habit-container">
    <!-- Header -->
    <div class="header">
      <h1 class="title">Add New Habit</h1>
      <p class="subtitle">Create a new habit to track your progress.</p>
    </div>

    <!-- Form -->
    <form @submit.prevent="addNewHabit" class="habit-form">
      <div class="form-grid">
        <!-- Habit Title -->
        <div class="form-group">
          <label for="title" class="form-label">
            Habit Title *
          </label>
          <input
            id="title"
            v-model="newHabit.title"
            type="text"
            required
            placeholder="e.g., Morning Meditation"
            class="form-input"
          />
        </div>

        <!-- Description -->
        <div class="form-group">
          <label for="description" class="form-label">
            Description
          </label>
          <textarea
            id="description"
            v-model="newHabit.description"
            rows="3"
            placeholder="e.g., 10 minutes of mindfulness"
            class="form-textarea"
          ></textarea>
        </div>

        <!-- Frequency -->
        <div class="form-group">
          <label class="form-label">
            Frequency *
          </label>
          <div class="frequency-grid">
            <button
              type="button"
              v-for="frequency in frequencies"
              :key="frequency"
              @click="newHabit.frequency = frequency"
              class="frequency-btn"
              :class="{ 'frequency-btn-active': newHabit.frequency === frequency }"
            >
              {{ frequency }}
            </button>
          </div>
        </div>

        <!-- Goal -->
        <div class="form-group">
          <label for="goal" class="form-label">
            Daily Goal
          </label>
          <input
            id="goal"
            v-model="newHabit.goal"
            type="text"
            placeholder="e.g., 8 glasses of water"
            class="form-input"
          />
        </div>
      </div>

      <!-- Submit Buttons -->
      <div class="form-actions">
        <button
          type="button"
          @click="$router.back()"
          class="btn-secondary"
        >
          Cancel
        </button>
        <button
          type="submit"
          class="btn-primary"
        >
          Add Habit
        </button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useHabitsStore } from '../stores/habits'

const router = useRouter()
const habitsStore = useHabitsStore()

const frequencies = ['Daily', 'Weekly', 'Monthly']

const newHabit = ref({
  title: '',
  description: '',
  frequency: 'Daily',
  goal: ''
})

const addNewHabit = () => {
  habitsStore.addHabit(newHabit.value)
  router.push('/')
}
</script>

<style scoped>
.add-habit-container {
  max-width: 600px;
  margin: 0 auto;
  padding: 24px 20px;
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

/* Header Styles */
.header {
  text-align: center;
  margin-bottom: 32px;
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

/* Form Styles */
.habit-form {
  background: white;
  border-radius: 20px;
  padding: 32px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px);
}

.form-grid {
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-bottom: 32px;
}

.form-group {
  display: flex;
  flex-direction: column;
}

.form-label {
  font-size: 14px;
  font-weight: 600;
  color: #1a1a1a;
  margin-bottom: 8px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.form-input,
.form-textarea {
  padding: 16px;
  border: 2px solid #e9ecef;
  border-radius: 12px;
  font-size: 16px;
  transition: all 0.2s ease;
  background: #f8f9fa;
}

.form-input:focus,
.form-textarea:focus {
  outline: none;
  border-color: #667eea;
  background: white;
  box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
}

.form-textarea {
  resize: vertical;
  min-height: 100px;
  font-family: inherit;
}

/* Frequency Grid */
.frequency-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
}

.frequency-btn {
  padding: 16px 12px;
  border: 2px solid #e9ecef;
  border-radius: 12px;
  background: #f8f9fa;
  font-size: 14px;
  font-weight: 500;
  color: #666;
  cursor: pointer;
  transition: all 0.2s ease;
}

.frequency-btn:hover {
  border-color: #667eea;
  color: #667eea;
  transform: translateY(-1px);
}

.frequency-btn-active {
  border-color: #667eea;
  background: #667eea;
  color: white;
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.3);
}

/* Form Actions */
.form-actions {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
  padding-top: 24px;
  border-top: 1px solid #e9ecef;
}

.btn-primary,
.btn-secondary {
  padding: 16px 24px;
  border: none;
  border-radius: 12px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
}

.btn-primary {
  background: #667eea;
  color: white;
}

.btn-primary:hover {
  background: #5a6fd8;
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.3);
}

.btn-secondary {
  background: #f8f9fa;
  color: #666;
  border: 2px solid #e9ecef;
}

.btn-secondary:hover {
  background: #e9ecef;
  transform: translateY(-1px);
}

/* Responsive Design */
@media (max-width: 768px) {
  .add-habit-container {
    padding: 20px 16px;
  }
  
  .title {
    font-size: 28px;
  }
  
  .habit-form {
    padding: 24px;
    border-radius: 16px;
  }
  
  .frequency-grid {
    grid-template-columns: 1fr;
  }
  
  .form-actions {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 480px) {
  .add-habit-container {
    padding: 16px 12px;
  }
  
  .title {
    font-size: 24px;
  }
  
  .habit-form {
    padding: 20px;
  }
  
  .form-input,
  .form-textarea,
  .btn-primary,
  .btn-secondary {
    padding: 14px;
  }
}
</style>