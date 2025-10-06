<template>
  <div class="login-container">
    <div class="login-card">
      <!-- Logo Section -->
      <div class="logo-section">
        <h1 class="welcome-title">Welcome Back</h1>
        <p class="welcome-subtitle">Sign in to access your school account</p>
      </div>

      <!-- Login Form -->
      <form @submit.prevent="handleLogin" class="login-form">
        <!-- Email Field -->
        <div class="form-group">
          <label for="email" class="form-label">Email Address *</label>
          <input
            id="email"
            v-model="form.email"
            type="email"
            required
            placeholder="Enter your email address"
            class="form-input"
            :class="{ 'error': errors.email }"
            @input="clearError('email')"
          />
          <div v-if="errors.email" class="error-message">
            {{ errors.email }}
          </div>
        </div>

        <!-- Password Field -->
        <div class="form-group">
          <label for="password" class="form-label">Password *</label>
          <input
            id="password"
            v-model="form.password"
            type="password"
            required
            placeholder="Enter your password"
            class="form-input"
            :class="{ 'error': errors.password }"
            @input="clearError('password')"
          />
          <div v-if="errors.password" class="error-message">
            {{ errors.password }}
          </div>
        </div>

        <!-- Remember Me & Forgot Password -->
        <div class="form-options">
          <label class="checkbox-label">
            <input
              type="checkbox"
              v-model="form.rememberMe"
              class="checkbox-input"
            />
            <span class="checkmark"></span>
            Remember me
          </label>
          <router-link to="/forgot-password" class="forgot-link">
            Forget password?
          </router-link>
        </div>

        <!-- reCAPTCHA Section -->
        <div class="captcha-section">
          <div class="captcha-box">
            <input
              type="checkbox"
              id="captcha"
              v-model="form.captcha"
              required
              class="captcha-checkbox"
            />
            <label for="captcha" class="captcha-label">
              <span class="captcha-icon">🤖</span>
              <span class="captcha-text">I'm not a robot</span>
            </label>
          </div>
          <div class="captcha-footer">
            <span class="captcha-terms">reCAPTCHA Privacy - Terms</span>
          </div>
        </div>

        <!-- Submit Button -->
        <button
          type="submit"
          class="login-button"
          :disabled="loading"
        >
          <span v-if="loading" class="button-loading">
            <div class="spinner"></div>
            Signing In...
          </span>
          <span v-else>Sign In</span>
        </button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

// Form data
const form = reactive({
  email: '',
  password: '',
  rememberMe: false,
  captcha: false
})

// UI state
const loading = ref(false)

// Error handling
const errors = reactive({
  email: '',
  password: ''
})

// Mock credentials for demonstration
const validCredentials = {
  email: 'student@school.edu',
  password: 'password123'
}

const clearError = (field) => {
  errors[field] = ''
}

const validateForm = () => {
  let isValid = true
  
  // Clear previous errors
  clearError('email')
  clearError('password')

  // Email validation
  if (!form.email) {
    errors.email = 'Please fill out this field.'
    isValid = false
  } else if (!/\S+@\S+\.\S+/.test(form.email)) {
    errors.email = 'Please enter a valid email address'
    isValid = false
  }

  // Password validation
  if (!form.password) {
    errors.password = 'Please fill out this field.'
    isValid = false
  } else if (form.password.length < 6) {
    errors.password = 'Password must be at least 6 characters'
    isValid = false
  }

  // reCAPTCHA validation
  if (!form.captcha) {
    alert('Please verify that you are not a robot')
    isValid = false
  }

  return isValid
}

const handleLogin = async () => {
  if (!validateForm()) return

  loading.value = true

  // Simulate API call
  try {
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    // Check credentials (in real app, this would be an API call)
    if (form.email === validCredentials.email && form.password === validCredentials.password) {
      // Store authentication state
      localStorage.setItem('isAuthenticated', 'true')
      localStorage.setItem('userEmail', form.email)
      
      // Store remember me preference
      if (form.rememberMe) {
        localStorage.setItem('rememberMe', 'true')
        localStorage.setItem('savedEmail', form.email)
      } else {
        localStorage.removeItem('savedEmail')
      }
      
      console.log('Login successful')
      
      // Navigate to dashboard
      router.push('/dashboard')
    } else {
      // Invalid credentials
      errors.email = 'These credentials do not match our records.'
    }
  } catch (error) {
    errors.email = 'An error occurred. Please try again.'
    console.error('Login error:', error)
  } finally {
    loading.value = false
  }
}

// Check for saved email on component mount
const savedEmail = localStorage.getItem('savedEmail')
if (savedEmail) {
  form.email = savedEmail
  form.rememberMe = true
}
</script>

<style scoped>
.login-container {
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
}

.login-card {
  background: white;
  border-radius: 12px;
  padding: 40px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 420px;
}

/* Logo Section */
.logo-section {
  text-align: center;
  margin-bottom: 32px;
}

.welcome-title {
  font-size: 24px;
  font-weight: 600;
  color: #1f2937;
  margin: 0 0 8px 0;
}

.welcome-subtitle {
  font-size: 14px;
  color: #6b7280;
  margin: 0;
}

/* Form Styles */
.form-group {
  margin-bottom: 20px;
}

.form-label {
  display: block;
  font-size: 14px;
  font-weight: 500;
  color: #374151;
  margin-bottom: 6px;
}

.form-input {
  width: 100%;
  padding: 12px 16px;
  border: 1px solid #d1d5db;
  border-radius: 6px;
  font-size: 14px;
  transition: all 0.2s ease;
  background: white;
  box-sizing: border-box;
}

.form-input:focus {
  outline: none;
  border-color: #3b82f6;
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
}

.form-input.error {
  border-color: #ef4444;
}

.form-input::placeholder {
  color: #9ca3af;
}

.error-message {
  color: #ef4444;
  font-size: 12px;
  margin-top: 4px;
  font-weight: 400;
}

/* Form Options */
.form-options {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px 0;
}

.checkbox-label {
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  font-size: 14px;
  color: #374151;
  font-weight: 400;
}

.checkbox-input {
  display: none;
}

.checkmark {
  width: 16px;
  height: 16px;
  border: 1px solid #d1d5db;
  border-radius: 3px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
  background: white;
}

.checkbox-input:checked + .checkmark {
  background: #3b82f6;
  border-color: #3b82f6;
}

.checkbox-input:checked + .checkmark::after {
  content: '✓';
  color: white;
  font-size: 10px;
  font-weight: bold;
}

.forgot-link {
  color: #3b82f6;
  text-decoration: none;
  font-size: 14px;
  font-weight: 400;
}

.forgot-link:hover {
  text-decoration: underline;
}

/* CAPTCHA Section */
.captcha-section {
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 6px;
  padding: 16px;
  margin: 24px 0;
}

.captcha-box {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 8px;
}

.captcha-checkbox {
  display: none;
}

.captcha-label {
  display: flex;
  align-items: center;
  gap: 12px;
  cursor: pointer;
  padding: 8px;
  border-radius: 4px;
  transition: background 0.2s ease;
}

.captcha-label:hover {
  background: #f1f5f9;
}

.captcha-icon {
  font-size: 18px;
}

.captcha-text {
  font-size: 14px;
  font-weight: 400;
  color: #374151;
}

.captcha-checkbox:checked + .captcha-label {
  background: #f0f9ff;
}

.captcha-footer {
  text-align: center;
}

.captcha-terms {
  font-size: 11px;
  color: #6b7280;
}

/* Login Button */
.login-button {
  width: 100%;
  padding: 12px 16px;
  background: #3b82f6;
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  margin-top: 8px;
}

.login-button:hover:not(:disabled) {
  background: #2563eb;
}

.login-button:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.button-loading {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
}

.spinner {
  width: 14px;
  height: 14px;
  border: 2px solid transparent;
  border-top: 2px solid white;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

/* Responsive Design */
@media (max-width: 480px) {
  .login-container {
    padding: 16px;
  }

  .login-card {
    padding: 32px 24px;
    border-radius: 8px;
  }

  .welcome-title {
    font-size: 22px;
  }

  .form-options {
    flex-direction: column;
    gap: 12px;
    align-items: flex-start;
  }
}
</style>