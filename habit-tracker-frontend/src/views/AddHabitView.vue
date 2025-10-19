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
            placeholder="e.g., Drink 8 glasses of water"
            class="form-input"
          />
        </div>

        <!-- Category -->
        <div class="form-group">
          <label for="category" class="form-label">
            Category
          </label>
          <select
            id="category"
            v-model="newHabit.category"
            class="form-select"
          >
            <option value="Health">Health</option>
            <option value="Fitness">Fitness</option>
            <option value="Productivity">Productivity</option>
            <option value="Learning">Learning</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <!-- Description -->
        <div class="form-group">
          <label for="description" class="form-label">
            Description (Optional)
          </label>
          <textarea
            id="description"
            v-model="newHabit.description"
            rows="3"
            placeholder="Add any notes or details about this habit"
            class="form-textarea"
          ></textarea>
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

const newHabit = ref({
  title: '',
  category: 'Health',
  description: ''
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
  padding: 20px;
  min-height: calc(100vh - 140px); /* Account for header */
  display: flex;
  flex-direction: column;
}

/* Header Styles */
.header {
  text-align: center;
  margin-bottom: 32px;
  padding-top: 20px;
}

.title {
  font-size: 32px;
  font-weight: 700;
  color: #6d28d9;
  margin: 0 0 8px 0;
}

.subtitle {
  font-size: 16px;
  color: #7c3aed;
  margin: 0;
  font-weight: 400;
}

/* Form Styles */
.habit-form {
  background: white;
  border-radius: 16px;
  padding: 32px;
  box-shadow: 0 10px 25px rgba(109, 40, 217, 0.15);
  border: 1px solid #e9d5ff;
  flex: 1;
  display: flex;
  flex-direction: column;
}

.form-grid {
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-bottom: 32px;
  flex: 1;
}

.form-group {
  display: flex;
  flex-direction: column;
}

.form-label {
  font-size: 14px;
  font-weight: 600;
  color: #6d28d9;
  margin-bottom: 8px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.form-input,
.form-textarea,
.form-select {
  padding: 16px;
  border: 2px solid #e9d5ff;
  border-radius: 12px;
  font-size: 16px;
  transition: all 0.2s ease;
  background: white;
  box-shadow: 0 2px 5px rgba(109, 40, 217, 0.05);
  width: 100%;
}

.form-input:focus,
.form-textarea:focus,
.form-select:focus {
  outline: none;
  border-color: #8b5cf6;
  box-shadow: 0 0 0 3px rgba(139, 92, 246, 0.1);
}

.form-textarea {
  resize: vertical;
  min-height: 100px;
  font-family: inherit;
}

.form-select {
  cursor: pointer;
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%236d28d9'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 16px center;
  background-size: 20px;
}

/* Form Actions */
.form-actions {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
  padding-top: 24px;
  border-top: 1px solid #f3e8ff;
  margin-top: auto;
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
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
}

.btn-primary {
  background: #7c3aed;
  color: white;
}

.btn-primary:hover {
  background: #6d28d9;
  transform: translateY(-2px);
  box-shadow: 0 6px 12px rgba(109, 40, 217, 0.2);
}

.btn-secondary {
  background: white;
  color: #7c3aed;
  border: 2px solid #ddd6fe;
}

.btn-secondary:hover {
  background: #f5f3ff;
  transform: translateY(-2px);
  box-shadow: 0 6px 12px rgba(109, 40, 217, 0.1);
}

/* Responsive Design */
@media (max-width: 768px) {
  .add-habit-container {
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
  
  .habit-form {
    padding: 24px;
    border-radius: 12px;
  }
  
  .form-actions {
    grid-template-columns: 1fr;
  }
  
  .form-grid {
    gap: 20px;
    margin-bottom: 24px;
  }
}

@media (max-width: 480px) {
  .add-habit-container {
    padding: 12px;
    min-height: calc(100vh - 100px);
  }
  
  .title {
    font-size: 24px;
  }
  
  .habit-form {
    padding: 20px;
  }
  
  .form-input,
  .form-textarea,
  .form-select,
  .btn-primary,
  .btn-secondary {
    padding: 14px;
    font-size: 14px;
  }
  
  .form-label {
    font-size: 13px;
  }
}

/* Extra small devices */
@media (max-width: 360px) {
  .add-habit-container {
    padding: 8px;
  }
  
  .habit-form {
    padding: 16px;
  }
  
  .form-input,
  .form-textarea,
  .form-select {
    padding: 12px;
  }
}
</style>