<template>
  <div class="signup-container">
    <div class="signup-card">
      <div class="logo-section">
        <div class="logo">
          <div class="logo-placeholder">
            <img src="/habit-logo.png" alt="HabitFlow Logo" class="logo-image" />
          </div>
        </div>
        <h1 class="welcome-title">Create Account</h1>
        <p class="welcome-subtitle">Sign up to start building habits</p>
      </div>
      
      <form @submit.prevent="handleSignUp" class="signup-form">
        <div class="form-group">
          <label for="fullName" class="form-label">Full Name *</label>
          <input
            id="fullName"
            v-model="form.fullName"
            type="text"
            required
            placeholder="Enter your full name"
            class="form-input"
          />
        </div>
        
        <div class="form-group">
          <label for="email" class="form-label">Email Address *</label>
          <input
            id="email"
            v-model="form.email"
            type="email"
            required
            placeholder="Enter your email address"
            class="form-input"
          />
        </div>
        
        <div class="form-group">
          <label for="password" class="form-label">Password *</label>
          <input
            id="password"
            v-model="form.password"
            type="password"
            required
            placeholder="Create a password"
            class="form-input"
          />
        </div>
        
        <button type="submit" class="signup-button">
          Create Account
        </button>
        
        <div class="login-section">
          <p class="login-text">
            Already have an account? 
            <router-link to="/login" class="login-link">
              Sign in here
            </router-link>
          </p>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const form = reactive({
  fullName: '',
  email: '',
  password: ''
})

const handleSignUp = () => {
  // Simulate sign up process
  console.log('Sign up form submitted', form)
  // After successful sign up, redirect to login
  router.push('/login')
}
</script>

<style scoped>
.signup-container {
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
}

.signup-card {
  background: white;
  border-radius: 20px;
  padding: 40px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 440px;
}

.logo-section {
  text-align: center;
  margin-bottom: 32px;
}

.logo-placeholder {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  margin-bottom: 24px;
}

.welcome-title {
  font-size: 28px;
  font-weight: 700;
  color: #1f2937;
  margin: 0 0 8px 0;
}

.welcome-subtitle {
  font-size: 16px;
  color: #6b7280;
  margin: 0;
}

.form-group {
  margin-bottom: 20px;
}

.form-label {
  display: block;
  font-size: 14px;
  font-weight: 600;
  color: #374151;
  margin-bottom: 8px;
}

.form-input {
  width: 100%;
  padding: 16px;
  border: 2px solid #e5e7eb;
  border-radius: 12px;
  font-size: 16px;
  transition: all 0.2s ease;
  background: #f9fafb;
  box-sizing: border-box;
}

.form-input:focus {
  outline: none;
  border-color: #4f46e5;
  background: white;
  box-shadow: 0 0 0 3px rgba(79, 70, 229, 0.1);
}

.signup-button {
  width: 100%;
  padding: 16px;
  background: #4f46e5;
  color: white;
  border: none;
  border-radius: 12px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  margin: 16px 0;
}

.signup-button:hover {
  background: #4338ca;
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(79, 70, 229, 0.3);
}

.login-section {
  text-align: center;
  margin-top: 24px;
  padding-top: 24px;
  border-top: 1px solid #e5e7eb;
}

.login-text {
  color: #6b7280;
  font-size: 14px;
  margin: 0;
}

.login-link {
  color: #4f46e5;
  text-decoration: none;
  font-weight: 600;
  transition: color 0.2s ease;
}

.login-link:hover {
  color: #3730a3;
  text-decoration: underline;
}
</style>