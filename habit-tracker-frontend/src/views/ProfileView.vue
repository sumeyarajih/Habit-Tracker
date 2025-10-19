<template>
  <div class="profile-container">
    <!-- Header -->
    <div class="header">
      <h1 class="title">Profile</h1>
      <p class="subtitle">Manage your account and track your progress</p>
    </div>

    <!-- Profile Overview -->
    <div class="profile-overview">
      <div class="profile-card">
        <!-- Avatar & Basic Info -->
        <div class="profile-header">
          <div class="avatar-section">
            <div class="avatar">
              <span class="avatar-text">U</span>
            </div>
            <div class="profile-info">
              <h2 class="user-name">User Name</h2>
              <p class="user-email">user@example.com</p>
              <button class="edit-profile-btn">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/>
                </svg>
                Edit Profile
              </button>
            </div>
          </div>
        </div>

        <!-- Stats Grid -->
        <div class="stats-grid">
          <div class="stat-item">
            <div class="stat-icon">📊</div>
            <div class="stat-content">
              <p class="stat-value">{{ habitsStore.totalHabits }}</p>
              <p class="stat-label">Total Habits</p>
            </div>
          </div>
          
          <div class="stat-item">
            <div class="stat-icon">🔥</div>
            <div class="stat-content">
              <p class="stat-value">{{ habitsStore.currentStreak }}</p>
              <p class="stat-label">Current Streak</p>
            </div>
          </div>
          
          <div class="stat-item">
            <div class="stat-icon">✅</div>
            <div class="stat-content">
              <p class="stat-value">{{ habitsStore.completionRate }}%</p>
              <p class="stat-label">Completion Rate</p>
            </div>
          </div>
          
          <div class="stat-item">
            <div class="stat-icon">⏱️</div>
            <div class="stat-content">
              <p class="stat-value">{{ totalDaysTracked }}</p>
              <p class="stat-label">Days Tracked</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Settings Section -->
    <div class="settings-section">
      <h3 class="section-title">Settings</h3>
      
      <div class="settings-grid">
        <!-- Account Settings -->
        <div class="settings-card">
          <div class="settings-header">
            <div class="settings-icon">👤</div>
            <h4 class="settings-title">Account</h4>
          </div>
          <div class="settings-options">
            <button class="settings-option">
              <span>Personal Information</span>
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
              </svg>
            </button>
            <button class="settings-option">
              <span>Change Password</span>
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
              </svg>
            </button>
            <button class="settings-option">
              <span>Email Preferences</span>
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
              </svg>
            </button>
          </div>
        </div>

        <!-- App Preferences -->
        <div class="settings-card">
          <div class="settings-header">
            <div class="settings-icon">⚙️</div>
            <h4 class="settings-title">Preferences</h4>
          </div>
          <div class="settings-options">
            <button class="settings-option">
              <span>Notification Settings</span>
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
              </svg>
            </button>
            <button class="settings-option">
              <span>Appearance</span>
              <div class="theme-toggle">
                <span class="theme-text">Light</span>
                <div class="toggle-switch">
                  <div class="toggle-knob"></div>
                </div>
              </div>
            </button>
            <button class="settings-option">
              <span>Language</span>
              <div class="language-select">
                <span>English</span>
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
                </svg>
              </div>
            </button>
          </div>
        </div>

        <!-- Support -->
        <div class="settings-card">
          <div class="settings-header">
            <div class="settings-icon">💬</div>
            <h4 class="settings-title">Support</h4>
          </div>
          <div class="settings-options">
            <button class="settings-option">
              <span>Help & Support</span>
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
              </svg>
            </button>
            <button class="settings-option">
              <span>Privacy Policy</span>
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
              </svg>
            </button>
            <button class="settings-option">
              <span>Terms of Service</span>
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- App Info -->
    <div class="app-info">
      <div class="app-info-card">
        <div class="app-header">
          <div class="app-icon">🚀</div>
          <div>
            <h4 class="app-title">HabitFlow</h4>
            <p class="app-version">Version 1.0.0</p>
          </div>
        </div>
        <p class="app-description">
          Build better habits, track your progress, and achieve your goals with HabitFlow.
        </p>
        <div class="app-footer">
          <p class="app-copyright">© 2024 HabitFlow. All rights reserved.</p>
          <button class="logout-btn">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"/>
            </svg>
            Log Out
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useHabitsStore } from '../stores/habits'

const habitsStore = useHabitsStore()

// Mock data for additional stats
const totalDaysTracked = ref(45)
</script>

<style scoped>
.profile-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  min-height: calc(100vh - 140px);
  background: linear-gradient(135deg, #f5f3ff 0%, #e0f2fe 100%);
}

/* Header */
.header {
  text-align: center;
  margin-bottom: 32px;
  padding-top: 20px;
}

.title {
  font-size: 36px;
  font-weight: 800;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin: 0 0 8px 0;
}

.subtitle {
  font-size: 16px;
  color: #6b7280;
  margin: 0;
  font-weight: 500;
}

/* Profile Overview */
.profile-overview {
  margin-bottom: 32px;
}

.profile-card {
  background: white;
  border-radius: 24px;
  padding: 32px;
  box-shadow: 0 20px 40px rgba(109, 40, 217, 0.1);
  border: 1px solid #e9d5ff;
}

.profile-header {
  margin-bottom: 32px;
}

.avatar-section {
  display: flex;
  align-items: center;
  gap: 20px;
}

.avatar {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: linear-gradient(135deg, #8b5cf6, #6d28d9);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 32px;
  font-weight: 700;
  color: white;
  box-shadow: 0 8px 20px rgba(139, 92, 246, 0.3);
}

.avatar-text {
  font-size: 32px;
  font-weight: 700;
}

.profile-info {
  flex: 1;
}

.user-name {
  font-size: 24px;
  font-weight: 700;
  color: #1f2937;
  margin: 0 0 4px 0;
}

.user-email {
  font-size: 16px;
  color: #6b7280;
  margin: 0 0 16px 0;
}

.edit-profile-btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  color: #475569;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
}

.edit-profile-btn:hover {
  background: #f1f5f9;
  transform: translateY(-1px);
}

/* Stats Grid */
.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 20px;
}

.stat-item {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 20px;
  background: #f8fafc;
  border-radius: 16px;
  border: 1px solid #f1f5f9;
  transition: all 0.2s ease;
}

.stat-item:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
}

.stat-icon {
  font-size: 24px;
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
}

.stat-content {
  flex: 1;
}

.stat-value {
  font-size: 24px;
  font-weight: 700;
  color: #1f2937;
  margin: 0 0 4px 0;
  line-height: 1;
}

.stat-label {
  font-size: 12px;
  color: #6b7280;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin: 0;
}

/* Settings Section */
.settings-section {
  margin-bottom: 32px;
}

.section-title {
  font-size: 24px;
  font-weight: 700;
  color: #1f2937;
  margin: 0 0 20px 0;
}

.settings-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 24px;
}

.settings-card {
  background: white;
  border-radius: 20px;
  padding: 24px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.08);
  border: 1px solid #f1f5f9;
}

.settings-header {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 20px;
}

.settings-icon {
  font-size: 20px;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f0f9ff;
  border-radius: 10px;
}

.settings-title {
  font-size: 18px;
  font-weight: 600;
  color: #1f2937;
  margin: 0;
}

.settings-options {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.settings-option {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
  background: #f8fafc;
  border: 1px solid #f1f5f9;
  border-radius: 12px;
  color: #374151;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
}

.settings-option:hover {
  background: #f1f5f9;
  transform: translateX(4px);
}

.theme-toggle,
.language-select {
  display: flex;
  align-items: center;
  gap: 8px;
  color: #6b7280;
}

.toggle-switch {
  width: 44px;
  height: 24px;
  background: #cbd5e1;
  border-radius: 12px;
  position: relative;
  cursor: pointer;
  transition: background 0.2s ease;
}

.toggle-knob {
  position: absolute;
  top: 2px;
  left: 2px;
  width: 20px;
  height: 20px;
  background: white;
  border-radius: 50%;
  transition: transform 0.2s ease;
}

.theme-text {
  font-size: 12px;
  font-weight: 500;
}

/* App Info */
.app-info {
  margin-bottom: 32px;
}

.app-info-card {
  background: white;
  border-radius: 20px;
  padding: 24px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.08);
  border: 1px solid #f1f5f9;
}

.app-header {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 16px;
}

.app-icon {
  font-size: 32px;
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #8b5cf6, #6d28d9);
  border-radius: 16px;
  color: white;
}

.app-title {
  font-size: 20px;
  font-weight: 700;
  color: #1f2937;
  margin: 0 0 4px 0;
}

.app-version {
  font-size: 14px;
  color: #6b7280;
  margin: 0;
}

.app-description {
  font-size: 14px;
  color: #6b7280;
  line-height: 1.6;
  margin: 0 0 20px 0;
}

.app-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 16px;
  border-top: 1px solid #f1f5f9;
}

.app-copyright {
  font-size: 12px;
  color: #9ca3af;
  margin: 0;
}

.logout-btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  background: #fef2f2;
  border: 1px solid #fecaca;
  border-radius: 12px;
  color: #dc2626;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
}

.logout-btn:hover {
  background: #fee2e2;
  transform: translateY(-1px);
}

/* Responsive Design */
@media (max-width: 768px) {
  .profile-container {
    padding: 16px;
    min-height: calc(100vh - 120px);
  }
  
  .title {
    font-size: 28px;
  }
  
  .profile-card {
    padding: 24px;
    border-radius: 20px;
  }
  
  .avatar-section {
    flex-direction: column;
    text-align: center;
    gap: 16px;
  }
  
  .stats-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
  }
  
  .settings-grid {
    grid-template-columns: 1fr;
  }
  
  .stat-item {
    padding: 16px;
  }
  
  .app-footer {
    flex-direction: column;
    gap: 16px;
    align-items: flex-start;
  }
}

@media (max-width: 480px) {
  .profile-container {
    padding: 12px;
    min-height: calc(100vh - 100px);
  }
  
  .title {
    font-size: 24px;
  }
  
  .profile-card {
    padding: 20px;
  }
  
  .stats-grid {
    grid-template-columns: 1fr;
  }
  
  .avatar {
    width: 60px;
    height: 60px;
    font-size: 24px;
  }
  
  .user-name {
    font-size: 20px;
  }
  
  .section-title {
    font-size: 20px;
  }
}
</style>