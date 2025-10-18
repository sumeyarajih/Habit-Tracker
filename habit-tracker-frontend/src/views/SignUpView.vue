<!-- SignupView.vue -->
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
        
        <!-- Right Section with Signup Form -->
        <div class="right-section">
          <div class="login-card">
            <!-- Logo/Header Section -->
            <div class="logo-section">
              <h1 class="welcome-title">Create Account</h1>
              <p class="welcome-subtitle">Sign up to start your journey</p>
            </div>

            <!-- Signup Form -->
            <form @submit.prevent="handleSignup" class="login-form">
              <!-- Full Name Field -->
              <div class="form-group">
                <label for="fullName" class="form-label">
                  Full Name *
                </label>
                <input
                  id="fullName"
                  v-model="form.fullName"
                  type="text"
                  required
                  placeholder="Enter your full name"
                  class="form-input"
                  :disabled="loading"
                  :class="{ 'disabled': loading }"
                />
              </div>

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
                  placeholder="Create a password"
                  class="form-input"
                  :disabled="loading"
                  :class="{ 'disabled': loading }"
                />
              </div>

              <!-- Confirm Password Field -->
              <div class="form-group">
                <label for="confirmPassword" class="form-label">
                  Confirm Password *
                </label>
                <input
                  id="confirmPassword"
                  v-model="form.confirmPassword"
                  type="password"
                  required
                  placeholder="Confirm your password"
                  class="form-input"
                  :disabled="loading"
                  :class="{ 'disabled': loading }"
                />
                <div v-if="passwordsMismatch" class="error-message">
                  Passwords do not match
                </div>
              </div>

              <!-- API Error Message -->
              <div v-if="apiError" class="error-message text-center mt-2 p-2 bg-red-50 border border-red-200 rounded">
                {{ apiError }}
              </div>

              <!-- Debug Info (remove in production) -->
              <div v-if="debugInfo" class="debug-info text-xs text-gray-500 mt-2 p-2 bg-yellow-50 border border-yellow-200 rounded">
                <strong>Debug Info:</strong> {{ debugInfo }}
              </div>

              <!-- Submit Button -->
              <button
                type="submit"
                :disabled="loading || passwordsMismatch"
                class="login-button"
                :class="{ 'disabled': loading || passwordsMismatch }"
              >
                <span v-if="loading" class="button-loading">
                  <div class="spinner"></div>
                  Creating Account...
                </span>
                <span v-else class="button-normal">
                  <span class="button-icon">→</span>
                  Sign Up
                </span>
              </button>
            </form>

            <!-- Login Link -->
            <p class="signup-text">
              Already have an account?
              <a href="/login" class="signup-link">
                Sign in
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, computed } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

// Form data
const form = reactive({
  fullName: '',
  email: '',
  password: '',
  confirmPassword: ''
})

// UI state
const loading = ref(false)
const apiError = ref('')
const debugInfo = ref('')

// Computed property to check if passwords match
const passwordsMismatch = computed(() => {
  return form.password && form.confirmPassword && form.password !== form.confirmPassword
})

const handleSignup = async () => {
  // Reset previous errors
  apiError.value = ''
  debugInfo.value = ''
  
  // Check if passwords match
  if (form.password !== form.confirmPassword) {
    apiError.value = 'Passwords do not match. Please check and try again.'
    return
  }

  // Validate required fields
  if (!form.fullName || !form.email || !form.password) {
    apiError.value = 'Please fill in all required fields.'
    return
  }

  // Validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(form.email)) {
    apiError.value = 'Please enter a valid email address.'
    return
  }

  loading.value = true

  try {
    debugInfo.value = 'Sending request to API...'
    
    // API call to register endpoint with timeout
    const controller = new AbortController()
    const timeoutId = setTimeout(() => controller.abort(), 10000) // 10 second timeout

    const response = await fetch('http://127.0.0.1:8000/api/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({
        name: form.fullName,
        email: form.email,
        password: form.password,
        password_confirmation: form.confirmPassword
      }),
      signal: controller.signal
    })

    clearTimeout(timeoutId)

    debugInfo.value = `Response status: ${response.status} ${response.statusText}`

    // Check if response is JSON
    const contentType = response.headers.get('content-type')
    if (!contentType || !contentType.includes('application/json')) {
      const textResponse = await response.text()
      debugInfo.value += ` | Non-JSON response: ${textResponse.substring(0, 100)}`
      throw new Error('Server returned non-JSON response')
    }

    const data = await response.json()
    debugInfo.value += ` | Response data: ${JSON.stringify(data).substring(0, 200)}`

    if (response.ok) {
      // Registration successful
      console.log('Registration successful:', data)
      
      // Store user data for OTP verification
      localStorage.setItem('tempUserData', JSON.stringify({
        fullName: form.fullName,
        email: form.email,
        userId: data.user?.id || data.id,
        authToken: data.token || data.access_token
      }))
      
      console.log('Signup successful - redirecting to OTP verification')
      
      // Navigate to OTP verification page
      router.push('/verify-otp')
    } else {
      // Handle API errors
      debugInfo.value += ` | Error response received`
      
      if (data.errors) {
        // Handle validation errors from Laravel
        const errorMessages = Object.values(data.errors).flat()
        apiError.value = errorMessages.join(', ')
      } else if (data.message) {
        apiError.value = data.message
      } else {
        apiError.value = `Registration failed (Status: ${response.status}). Please try again.`
      }
    }
  } catch (error) {
    console.error('Signup error:', error)
    debugInfo.value += ` | Error: ${error.message}`
    
    if (error.name === 'AbortError') {
      apiError.value = 'Request timeout. Please check if the server is running and try again.'
    } else if (error.message.includes('Failed to fetch')) {
      apiError.value = 'Cannot connect to server. Please check: 1) Backend server is running, 2) CORS is configured, 3) Network connectivity'
    } else if (error.message.includes('non-JSON')) {
      apiError.value = 'Server returned an unexpected response. Please check the backend API.'
    } else {
      apiError.value = `Network error: ${error.message}`
    }
  } finally {
    loading.value = false
  }
}

// Test function to check API connectivity (you can call this from browser console)
window.testApiConnection = async () => {
  try {
    const response = await fetch('http://127.0.0.1:8000/api/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: 'Test User',
        email: 'test@example.com',
        password: 'password',
        password_confirmation: 'password'
      })
    })
    console.log('API Test Response:', response)
    return response
  } catch (error) {
    console.error('API Test Error:', error)
    return error
  }
}
</script>

<style scoped>
/* All the same styles as before, just adding error message style */
.error-message {
  color: #ef4444;
  font-size: 0.875rem;
  margin-top: 0.25rem;
}

.text-center {
  text-align: center;
}

.mt-2 {
  margin-top: 0.5rem;
}

.debug-info {
  font-family: monospace;
}

.bg-red-50 {
  background-color: #fef2f2;
}

.border-red-200 {
  border-color: #fecaca;
}

.bg-yellow-50 {
  background-color: #fffbeb;
}

.border-yellow-200 {
  border-color: #fef3c7;
}

.p-2 {
  padding: 0.5rem;
}

.rounded {
  border-radius: 0.375rem;
}

.text-xs {
  font-size: 0.75rem;
}

.text-gray-500 {
  color: #6b7280;
}

/* Rest of the styles remain exactly the same as your original signup component */
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

.split-container {
  display: flex;
  width: 100%;
  height: 600px;
  background: white;
  border-radius: 1.5rem;
  overflow: hidden;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
}

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
  width: 7rem;
  height: 7rem;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(10px);
}

.logo-image {
  width: 11rem;
  height: 11rem;
  object-fit: contain;
}

.platform-title {
  font-size: 1.75rem;
  font-weight: 700;
  margin: 0 0 0.5rem 0;
}

.right-section {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
}

.login-card {
  width: 100%;
  max-width: 400px;
  padding: 0;
}

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

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

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

  .signup-text {
    color: #000000;
  }
}

@media (max-width: 768px) {
  .split-container {
    flex-direction: column;
    height: auto;
  }
  
  .left-section {
    padding: 2rem;
  }
}
</style>