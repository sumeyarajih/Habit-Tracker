<template>
  <div class="login-container">
    <div class="login-card">
      <!-- Logo Section -->
      <div class="logo-section">
        <div class="logo">
          <!-- Replace with your actual logo -->
          <div class="logo-placeholder">
            <span class="logo-icon">🎓</span>
            <span class="logo-text">EduSystem</span>
          </div>
        </div>
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
            :type="showPassword ? 'text' : 'password'"
            required
            placeholder="Enter your password"
            class="form-input"
            :class="{ 'error': errors.password }"
            @input="clearError('password')"
          />
          <button
            type="button"
            class="password-toggle"
            @click="showPassword = !showPassword"
          >
            {{ showPassword ? '🙈' : '👁️' }}
          </button>
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
            Forgot password?
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

        <!-- Sign Up Link -->
        <div class="signup-section">
          <p class="signup-text">
            Don't have an account? 
            <router-link to="/signup" class="signup-link">
              Sign up here
            </router-link>
          </p>
        </div>
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
const showPassword = ref(false)
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
    errors.email = 'Email is required'
    isValid = false
  } else if (!/\S+@\S+\.\S+/.test(form.email)) {
    errors.email = 'Please enter a valid email address'
    isValid = false
  }

  // Password validation
  if (!form.password) {
    errors.password = 'Password is required'
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
      // Successful login
      console.log('Login successful')
      router.push('/dashboard')
    } else {
      // Invalid credentials
      errors.email = 'These credentials do not match our records.'
    }
  } catch (error) {
    errors.email = 'An error occurred. Please try again.'
  } finally {
    loading.value = false
  }
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
  border-radius: 20px;
  padding: 40px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 440px;
  position: relative;
}

/* Logo Section */
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

.logo-icon {
  font-size: 32px;
}

.logo-text {
  font-size: 24px;
  font-weight: 700;
  color: #4f46e5;
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

/* Form Styles */
/* .login-form {
  space-y: 24px;
} */

.form-group {
  position: relative;
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

.form-input.error {
  border-color: #ef4444;
  background: #fef2f2;
}

.password-toggle {
  position: absolute;
  right: 12px;
  top: 42px;
  background: none;
  border: none;
  font-size: 18px;
  cursor: pointer;
  padding: 4px;
  border-radius: 4px;
  transition: background 0.2s ease;
}

.password-toggle:hover {
  background: #f3f4f6;
}

.error-message {
  color: #ef4444;
  font-size: 14px;
  margin-top: 8px;
  font-weight: 500;
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
}

.checkbox-input {
  display: none;
}

.checkmark {
  width: 18px;
  height: 18px;
  border: 2px solid #d1d5db;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
}

.checkbox-input:checked + .checkmark {
  background: #4f46e5;
  border-color: #4f46e5;
}

.checkbox-input:checked + .checkmark::after {
  content: '✓';
  color: white;
  font-size: 12px;
  font-weight: bold;
}

.forgot-link {
  color: #4f46e5;
  text-decoration: none;
  font-size: 14px;
  font-weight: 500;
  transition: color 0.2s ease;
}

.forgot-link:hover {
  color: #3730a3;
  text-decoration: underline;
}

/* CAPTCHA Section */
.captcha-section {
  background: #f8fafc;
  border: 2px solid #e2e8f0;
  border-radius: 12px;
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
  border-radius: 8px;
  transition: background 0.2s ease;
}

.captcha-label:hover {
  background: #f1f5f9;
}

.captcha-icon {
  font-size: 20px;
}

.captcha-text {
  font-size: 14px;
  font-weight: 500;
  color: #374151;
}

.captcha-checkbox:checked + .captcha-label {
  background: #f0f9ff;
}

.captcha-footer {
  text-align: center;
}

.captcha-terms {
  font-size: 12px;
  color: #6b7280;
}

/* Login Button */
.login-button {
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

.login-button:hover:not(:disabled) {
  background: #4338ca;
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(79, 70, 229, 0.3);
}

.login-button:disabled {
  opacity: 0.7;
  cursor: not-allowed;
  transform: none;
}

.button-loading {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
}

.spinner {
  width: 16px;
  height: 16px;
  border: 2px solid transparent;
  border-top: 2px solid white;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

/* Sign Up Section */
.signup-section {
  text-align: center;
  margin-top: 24px;
  padding-top: 24px;
  border-top: 1px solid #e5e7eb;
}

.signup-text {
  color: #6b7280;
  font-size: 14px;
  margin: 0;
}

.signup-link {
  color: #4f46e5;
  text-decoration: none;
  font-weight: 600;
  transition: color 0.2s ease;
}

.signup-link:hover {
  color: #3730a3;
  text-decoration: underline;
}

/* Responsive Design */
@media (max-width: 480px) {
  .login-container {
    padding: 16px;
    align-items: flex-start;
    padding-top: 40px;
  }

  .login-card {
    padding: 24px;
    border-radius: 16px;
  }

  .welcome-title {
    font-size: 24px;
  }

  .logo-text {
    font-size: 20px;
  }

  .form-options {
    flex-direction: column;
    gap: 12px;
    align-items: flex-start;
  }

  .form-input {
    padding: 14px;
  }
}
</style>