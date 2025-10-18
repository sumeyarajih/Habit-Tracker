<!-- LoginView.vue -->
<template>
  <div class="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 p-4">
    <div class="w-full max-w-6xl">
      <!-- Split Layout Container -->
      <div class="split-container">
        <!-- Left Section with Purple Background -->
        <div class="left-section">
          <div class="logo-section">
            <div class="logo-container">
              <div class="logo-icon">
                <img src="/habit-logo.png" alt="HabitFlow Logo" class="logo-image" />
              </div>
            </div>
            <h1 class="platform-title">Habit Flow</h1>
          </div>
        </div>
        
        <!-- Right Section with Login Form -->
        <div class="right-section">
          <div class="login-card">
            <!-- Logo/Header Section -->
            <div class="logo-section">
              <h1 class="welcome-title">Welcome </h1>
              <p class="welcome-subtitle">Sign in to access youraccount</p>
            </div>

            <!-- Login Form -->
            <form @submit.prevent="handleLogin" class="login-form">
              <!-- Email Field -->
              <div class="form-group">
                <label for="email" class="form-label">
                  Email Address *
                </label>
                <input
                  id="email"
                  v-model="form.email"
                  type="email"
                  required
                  placeholder="Enter your email"
                  class="form-input"
                  :disabled="loading"
                  :class="{ 'disabled': loading }"
                />
              </div>

              <!-- Password Field -->
              <div class="form-group">
                <label for="password" class="form-label">
                  Password *
                </label>
                <input
                  id="password"
                  v-model="form.password"
                  type="password"
                  required
                  placeholder="Enter your password"
                  class="form-input"
                  :disabled="loading"
                  :class="{ 'disabled': loading }"
                />
              </div>

              <!-- Remember Me & Forgot Password -->
              <div class="form-options">
                <label class="checkbox-label">
                  <input
                    type="checkbox"
                    v-model="form.rememberMe"
                    class="checkbox-input"
                    :disabled="loading"
                  />
                  <span class="checkmark"></span>
                  Remember me
                </label>
                <a href="/forgot-password" class="forgot-link">
                  Forgot password?
                </a>
              </div>

              <!-- reCAPTCHA Section -->
              <div class="captcha-section">
                <label class="captcha-label">
                  <input
                    type="checkbox"
                    v-model="form.captcha"
                    required
                    class="captcha-checkbox"
                    :disabled="loading"
                  />
                  <span class="captcha-checkmark"></span>
                  <span class="captcha-text">I'm not a robot</span>
                </label>
                <p class="captcha-footer">
                  reCAPTCHA Privacy - Terms
                </p>
              </div>

              <!-- Submit Button -->
              <button
                type="submit"
                :disabled="loading || !form.captcha"
                class="login-button"
                :class="{ 'disabled': loading || !form.captcha }"
              >
                <span v-if="loading" class="button-loading">
                  <div class="spinner"></div>
                  Signing In...
                </span>
                <span v-else class="button-normal">
                  <span class="button-icon">→</span>
                  Sign In
                </span>
              </button>
            </form>

            <!-- Sign Up Link -->
            <p class="signup-text">
              Don't have an account?
              <a href="/signup" class="signup-link">
                Sign up
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue'
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
const errorMessage = ref('')

const handleLogin = async () => {
  loading.value = true
  errorMessage.value = ''

  try {
    // Prepare the request data
    const loginData = {
      email: form.email,
      password: form.password
    }

    // Make API call to your backend
    const response = await fetch('http://127.0.0.1:8000/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify(loginData)
    })

    const data = await response.json()

    if (response.ok) {
      // Login successful
      console.log('Login successful:', data)
      
      // Store authentication state
      localStorage.setItem('isAuthenticated', 'true')
      localStorage.setItem('userEmail', form.email)
      localStorage.setItem('authToken', data.token || '')
      localStorage.setItem('userData', JSON.stringify(data.user || {}))
      
      // Store remember me preference
      if (form.rememberMe) {
        localStorage.setItem('rememberMe', 'true')
        localStorage.setItem('savedEmail', form.email)
      } else {
        localStorage.removeItem('savedEmail')
      }
      
      console.log('Login successful - redirecting to dashboard')
      
      // Navigate to dashboard
      router.push('/dashboard')
    } else {
      // Login failed - show error message from API
      errorMessage.value = data.message || 'Login failed. Please check your credentials and try again.'
      alert(errorMessage.value)
    }
  } catch (error) {
    console.error('Login error:', error)
    errorMessage.value = 'Network error. Please check your connection and try again.'
    alert(errorMessage.value)
  } finally {
    loading.value = false
  }
}

// Check for saved email on component mount
onMounted(() => {
  const savedEmail = localStorage.getItem('savedEmail')
  if (savedEmail) {
    form.email = savedEmail
    form.rememberMe = true
  }
})
</script>

<style scoped>
/* Container Styles */
.min-h-screen {
  min-height: 100vh;
}

.flex {
  display: flex;
}

.items-center {
  align-items: center;
}

.justify-center {
  justify-content: center;
}

.bg-gradient-to-br {
  background: linear-gradient(135deg, #f5f7fa 0%, #e4e8f0 100%);
}

.p-4 {
  padding: 1rem;
}

.w-full {
  width: 100%;
}

.max-w-6xl {
  max-width: 72rem;
}

/* Split Layout Container */
.split-container {
  display: flex;
  width: 100%;
  height: 600px;
  background: white;
  border-radius: 1.5rem;
  overflow: hidden;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
}

/* Left Section */
.left-section {
  flex: 1;
  background: #6a11cb;
  padding: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: white;
  position: relative;
  overflow: hidden;
}

.left-section::before {
  content: "";
  position: absolute;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  top: -50px;
  left: -50px;
}

.left-section::after {
  content: "";
  position: absolute;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  bottom: -50px;
  right: -50px;
}

/* Left Section Logo */
.left-section .logo-section {
  text-align: center;
  margin-bottom: 2rem;
  z-index: 1;
}

.left-section .logo-container {
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;
}

.left-section .logo-icon {
  width: 7rem;  /* Change from 5rem to 7rem */
  height: 7rem; /* Change from 5rem to 7rem */
  background: rgba(255, 255, 255, 0.2);
  border-radius: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(10px);
}

.logo-image {
  width: 11rem;  /* Change from 3rem to 5rem */
  height: 11rem; /* Change from 3rem to 5rem */
  object-fit: contain;
}

.platform-title {
  font-size: 1.75rem;
  font-weight: 700;
  margin: 0 0 0.5rem 0;
}

.platform-subtitle {
  font-size: 1rem;
  opacity: 0.9;
  margin: 0;
}

/* Image Section */
.image-section {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1rem 0;
  z-index: 1;
}

.image-placeholder {
  width: 100%;
  height: 200px;
  background: rgba(255, 255, 255, 0.15);
  border-radius: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.placeholder-content {
  text-align: center;
}

.placeholder-icon {
  font-size: 3rem;
  display: block;
  margin-bottom: 0.5rem;
}

.placeholder-text {
  font-size: 0.875rem;
  opacity: 0.8;
  margin: 0;
}

/* Feature Section */
.feature-section {
  z-index: 1;
}

.feature-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.feature-icon {
  font-size: 1.5rem;
  background: rgba(255, 255, 255, 0.2);
  width: 3rem;
  height: 3rem;
  border-radius: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.feature-text h3 {
  font-size: 1rem;
  font-weight: 600;
  margin: 0 0 0.25rem 0;
}

.feature-text p {
  font-size: 0.875rem;
  opacity: 0.8;
  margin: 0;
}

/* Right Section */
.right-section {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
}

/* Login Card */
.login-card {
  width: 100%;
  max-width: 400px;
  padding: 0;
}

/* Logo Section */
.logo-section {
  text-align: center;
  margin-bottom: 2rem;
}

.welcome-title {
  font-size: 1.75rem;
  font-weight: 700;
  color: #0b0b0b;
  margin: 0 0 0.5rem 0;
}

.welcome-subtitle {
  font-size: 1rem;
  color: #0c0c0d;
  margin: 0;
}

/* Form Styles */
.login-form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.form-group {
  display: flex;
  flex-direction: column;
}

.form-label {
  display: block;
  font-size: 0.875rem;
  font-weight: 500;
  color: #b5bbc6;
  margin-bottom: 0.5rem;
}

.form-input {
  width: 100%;
  padding: 0.75rem 1rem;
  border: 1px solid #d1d5db;
  border-radius: 0.5rem;
  font-size: 0.875rem;
  transition: all 0.2s ease;
  background: white;
}

.form-input:focus {
  outline: none;
  border-color: #6a11cb;
  box-shadow: 0 0 0 3px rgba(106, 17, 203, 0.1);
}

.form-input.disabled {
  background-color: #f9fafb;
  cursor: not-allowed;
  opacity: 0.6;
}

/* Form Options */
.form-options {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.checkbox-label {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  font-size: 0.875rem;
  color: #374151;
}

.checkbox-input {
  display: none;
}

.checkmark {
  width: 1rem;
  height: 1rem;
  border: 1px solid #d1d5db;
  border-radius: 0.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
  background: white;
}

.checkbox-input:checked + .checkmark {
  background: #6a11cb;
  border-color: #6a11cb;
}

.checkbox-input:checked + .checkmark::after {
  content: '✓';
  color: white;
  font-size: 0.75rem;
  font-weight: bold;
}

.checkbox-input:disabled + .checkmark {
  background-color: #f9fafb;
  cursor: not-allowed;
}

.forgot-link {
  color: #6a11cb;
  text-decoration: none;
  font-size: 0.875rem;
}

.forgot-link:hover {
  text-decoration: underline;
}

/* CAPTCHA Section */
.captcha-section {
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 0.5rem;
  padding: 1rem;
}

.captcha-label {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  cursor: pointer;
}

.captcha-checkbox {
  display: none;
}

.captcha-checkmark {
  width: 1rem;
  height: 1rem;
  border: 1px solid #d1d5db;
  border-radius: 0.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
  background: white;
}

.captcha-checkbox:checked + .captcha-checkmark {
  background: #6a11cb;
  border-color: #6a11cb;
}

.captcha-checkbox:checked + .captcha-checkmark::after {
  content: '✓';
  color: white;
  font-size: 0.75rem;
  font-weight: bold;
}

.captcha-text {
  font-size: 0.875rem;
  font-weight: 400;
  color: #374151;
}

.captcha-footer {
  font-size: 0.75rem;
  color: #000000;
  text-align: center;
  margin: 0.5rem 0 0 0;
}

/* Login Button */
.login-button {
  width: 100%;
  padding: 0.75rem 1rem;
  background: linear-gradient(135deg, #6a11cb 0%, #2575fc 100%);
  color: white;
  border: none;
  border-radius: 0.5rem;
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
}

.login-button:hover:not(.disabled) {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(106, 17, 203, 0.3);
}

.login-button.disabled {
  background: #9ca3af;
  cursor: not-allowed;
  opacity: 0.6;
  transform: none;
  box-shadow: none;
}

.button-loading {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.button-normal {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.spinner {
  width: 1rem;
  height: 1rem;
  border: 2px solid transparent;
  border-top: 2px solid white;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

.button-icon {
  font-weight: bold;
}
/* Sign Up Text */
.signup-text {
  text-align: center;
  font-size: 0.875rem;
  color: #6b7280;
  margin: 0;
}

.signup-link {
  color: #6a11cb;
  font-weight: 500;
  text-decoration: none;
}

.signup-link:hover {
  text-decoration: underline;
}

/* Animations */
@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

/* Dark Mode Support */
@media (prefers-color-scheme: dark) {
  .login-card {
    background: transparent;
  }

  .welcome-title {
    color: #080808;
  }

  .welcome-subtitle {
    color: #060606;
  }

  .form-label {
    color: #0b0b0b;
  }

  .form-input {
    background: #cfd1d3;
    border-color: #a4aab2;
    color: #f9fafb;
  }

  .form-input:focus {
    border-color: #6a11cb;
  }

  .checkbox-label {
    color: #0c0c0c;
  }

  .captcha-section {
    background: #6a11cb;
    border-color: #4b5563;
  }

  .captcha-text {
    color: #050505;
  }

  .signup-text {
    color: #000000;
  }
}

/* Responsive Design */
@media (max-width: 768px) {
  .split-container {
    flex-direction: column;
    height: auto;
  }
  
  .left-section {
    padding: 2rem;
  }
  
  .image-placeholder {
    height: 150px;
  }
  
  .feature-item {
    margin-bottom: 1rem;
  }
  
  .form-options {
    flex-direction: column;
    gap: 1rem;
    align-items: flex-start;
  } 
}
</style>