<template>
  <div class="habit-card" :class="{ 'habit-card-completed': habit.completed }">
    <div class="habit-content">
      <div class="habit-header">
        <div class="checkbox-container">
          <input 
            type="checkbox" 
            :checked="habit.completed"
            @change="toggleHabit"
            class="habit-checkbox"
          />
          <span class="checkmark"></span>
        </div>
        <div class="habit-info">
          <h3 class="habit-title" :class="{ 'habit-title-completed': habit.completed }">
            {{ habit.title }}
          </h3>
          <p class="habit-description">{{ habit.description }}</p>
        </div>
      </div>
      
      <div class="habit-footer">
        <div class="habit-meta">
          <span class="meta-item streak">
            <span class="meta-dot streak-dot"></span>
            {{ habit.streak }} day streak
          </span>
          <span class="meta-item frequency">
            <span class="meta-dot frequency-dot"></span>
            {{ habit.frequency }}
          </span>
        </div>
        
        <button 
          @click="deleteHabit"
          class="delete-btn"
          title="Delete habit"
        >
          🗑️
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useHabitsStore } from '../stores/habits'

const props = defineProps({
  habit: {
    type: Object,
    required: true
  }
})

const habitsStore = useHabitsStore()

const toggleHabit = () => {
  habitsStore.toggleHabit(props.habit.id)
}

const deleteHabit = () => {
  if (confirm('Are you sure you want to delete this habit?')) {
    habitsStore.deleteHabit(props.habit.id)
  }
}
</script>

<style scoped>
.habit-card {
  background: white;
  border-radius: 16px;
  padding: 20px;
  box-shadow: 0 8px 25px rgba(109, 40, 217, 0.15);
  border: 2px solid transparent;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.habit-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 4px;
  height: 100%;
  background: linear-gradient(135deg, #8b5cf6, #6d28d9);
  transition: all 0.3s ease;
}

.habit-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 12px 35px rgba(109, 40, 217, 0.25);
  border-color: #8b5cf6;
}

.habit-card-completed {
  opacity: 0.7;
  background: #faf5ff;
}

.habit-card-completed::before {
  background: linear-gradient(135deg, #10b981, #34d399);
}

.habit-content {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.habit-header {
  display: flex;
  align-items: flex-start;
  gap: 12px;
}

/* Checkbox Styles */
.checkbox-container {
  position: relative;
  margin-top: 2px;
}

.habit-checkbox {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

.checkmark {
  display: block;
  width: 20px;
  height: 20px;
  border: 2px solid #e5e7eb;
  border-radius: 6px;
  position: relative;
  transition: all 0.2s ease;
  background: white;
}

.habit-checkbox:checked + .checkmark {
  background: #10b981;
  border-color: #10b981;
}

.habit-checkbox:checked + .checkmark::after {
  content: '✓';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-size: 12px;
  font-weight: bold;
}

.habit-checkbox:focus + .checkmark {
  border-color: #8b5cf6;
  box-shadow: 0 0 0 3px rgba(139, 92, 246, 0.1);
}

/* Habit Info */
.habit-info {
  flex: 1;
}

.habit-title {
  font-size: 16px;
  font-weight: 600;
  color: #1a1a1a;
  margin: 0 0 4px 0;
  line-height: 1.4;
}

.habit-title-completed {
  text-decoration: line-through;
  color: #9ca3af;
}

.habit-description {
  font-size: 14px;
  color: #6b7280;
  margin: 0;
  line-height: 1.4;
}

/* Habit Footer */
.habit-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.habit-meta {
  display: flex;
  align-items: center;
  gap: 16px;
}

.meta-item {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 12px;
  font-weight: 500;
}

.meta-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
}

.streak-dot {
  background: #f59e0b;
}

.frequency-dot {
  background: #8b5cf6; /* Purple color */
}

.streak {
  color: #f59e0b;
}

.frequency {
  color: #8b5cf6; /* Purple color */
}

/* Delete Button */
.delete-btn {
  background: none;
  border: none;
  font-size: 16px;
  cursor: pointer;
  padding: 6px;
  border-radius: 6px;
  transition: all 0.2s ease;
  opacity: 0.6;
}

.delete-btn:hover {
  opacity: 1;
  background: #fef2f2;
  color: #dc2626;
  transform: scale(1.1);
}

/* Responsive Design */
@media (max-width: 768px) {
  .habit-card {
    padding: 16px;
    border-radius: 12px;
  }
  
  .habit-header {
    gap: 10px;
  }
  
  .habit-title {
    font-size: 15px;
  }
  
  .habit-description {
    font-size: 13px;
  }
  
  .habit-meta {
    gap: 12px;
  }
  
  .meta-item {
    font-size: 11px;
  }
}

@media (max-width: 480px) {
  .habit-card {
    padding: 14px;
  }
  
  .checkmark {
    width: 18px;
    height: 18px;
  }
  
  .habit-title {
    font-size: 14px;
  }
  
  .habit-meta {
    flex-direction: column;
    gap: 8px;
    align-items: flex-start;
  }
  
  .habit-footer {
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
  }
  
  .delete-btn {
    align-self: flex-end;
  }
}
</style>