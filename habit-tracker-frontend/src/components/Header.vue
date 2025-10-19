<template>
  <header class="header">
    <div class="header-content">
      <!-- Left Section - Menu Button and Logo -->
      <div class="header-left">
        <button 
          v-if="isMobile"
          @click="$emit('toggle-sidebar')"
          class="menu-btn"
          aria-label="Toggle sidebar"
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path 
              stroke-linecap="round" 
              stroke-linejoin="round" 
              stroke-width="2" 
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        
        <!-- App Logo and Name -->
        <div class="logo-section">
          <div class="logo-content">
            <img src="/habit-logo.png" alt="HabitFlow Logo" class="logo-image" />
            <div class="logo-info">
              <h1 class="logo-name">HabitFlow</h1>
              <p class="logo-tagline">Build Better Habits</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Right Section - Notification & Profile -->
      <div class="header-right">
        <!-- Notification Bell -->
        <button class="notification-btn" aria-label="Notifications">
          <svg class="bell-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path 
              stroke-linecap="round" 
              stroke-linejoin="round" 
              stroke-width="2" 
              d="M15 17h5l-5 5v-5zM10.5 3.75a6 6 0 0 0-6 6v2.25l-2.47 2.47a.75.75 0 0 0 .53 1.28h15.88a.75.75 0 0 0 .53-1.28L16.5 12V9.75a6 6 0 0 0-6-6z"
            />
          </svg>
          <span class="notification-dot"></span>
        </button>

        <!-- User Profile -->
        <div class="user-profile">
          <img 
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80" 
            alt="User Profile" 
            class="profile-image"
          />
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
defineProps({
  isMobile: {
    type: Boolean,
    default: false
  }
})

defineEmits(['toggle-sidebar'])
</script>

<style scoped>
.header {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 50;
  height: 70px;
}

.header-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  height: 100%;
  max-width: 100%;
}

/* Left Section */
.header-left {
  display: flex;
  align-items: center;
  gap: 16px;
}

.menu-btn {
  width: 40px;
  height: 40px;
  border: none;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.2);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
}

.menu-btn:hover {
  background: rgba(255, 255, 255, 0.3);
  transform: scale(1.05);
}

/* Logo Section in Header */
.logo-section {
  display: flex;
  align-items: center;
}

.logo-content {
  display: flex;
  align-items: center;
  gap: 12px;
}

.logo-image {
  width: 40px;
  height: 40px;
  border-radius: 10px;
  border: 2px solid rgba(255, 255, 255, 0.3);
  object-fit: cover;
  flex-shrink: 0;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
}

.logo-info {
  color: white;
}

.logo-name {
  font-size: 18px;
  font-weight: 700;
  margin: 0;
  line-height: 1.2;
}

.logo-tagline {
  font-size: 12px;
  opacity: 0.9;
  margin: 0;
  line-height: 1.2;
  font-weight: 400;
}

/* Right Section */
.header-right {
  display: flex;
  align-items: center;
  gap: 16px;
}

.notification-btn {
  position: relative;
  width: 40px;
  height: 40px;
  border: none;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.2);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
}

.notification-btn:hover {
  background: rgba(255, 255, 255, 0.3);
  transform: scale(1.05);
}

.bell-icon {
  width: 24px;
  height: 24px;
}

.notification-dot {
  position: absolute;
  top: 10px;
  right: 10px;
  width: 8px;
  height: 8px;
  background: #ff6b6b;
  border-radius: 50%;
  border: 2px solid #667eea;
}

.user-profile {
  display: flex;
  align-items: center;
}

.profile-image {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 2px solid rgba(255, 255, 255, 0.3);
  object-fit: cover;
  transition: all 0.3s ease;
}

.profile-image:hover {
  border-color: rgba(255, 255, 255, 0.6);
  transform: scale(1.05);
}

/* Responsive Design */
@media (max-width: 768px) {
  .header-content {
    padding: 0 16px;
  }

  .menu-btn,
  .notification-btn {
    width: 36px;
    height: 36px;
  }

  .profile-image {
    width: 36px;
    height: 36px;
  }

  .notification-dot {
    top: 8px;
    right: 8px;
    width: 6px;
    height: 6px;
  }
  
  .logo-name {
    font-size: 16px;
  }
  
  .logo-tagline {
    font-size: 10px;
  }
  
  .logo-image {
    width: 36px;
    height: 36px;
  }
}

@media (max-width: 480px) {
  .header-content {
    padding: 0 12px;
  }

  .header-left {
    gap: 12px;
  }

  .header-right {
    gap: 12px;
  }
  
  .logo-name {
    font-size: 14px;
  }
  
  .logo-tagline {
    display: none;
  }
}
</style>