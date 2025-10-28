<template>
  <div class="min-h-screen bg-[#FAF9F6] flex items-center justify-center p-6">
    <div class="w-full max-w-md">
      <div class="text-center mb-8">
        <div class="inline-flex items-center justify-center w-12 h-12 rounded-full bg-slate-800 mb-4">
          <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
          </svg>
        </div>
        <h1 class="text-2xl font-semibold text-slate-900 mb-1">Create your account</h1>
        <p class="text-slate-500 text-sm">Start managing your tickets today</p>
      </div>

      <div class="bg-white rounded-xl shadow-sm border border-slate-200 p-8">
        <div v-if="error" class="bg-red-50 border border-red-100 text-red-600 px-4 py-3 rounded-lg mb-6 text-sm">
          {{ error }}
        </div>

        <form @submit.prevent="handleSignup" class="space-y-5">
          <div>
            <label class="block text-sm font-medium text-slate-700 mb-1.5">
              Full name
            </label>
            <input
              type="text"
              v-model="name"
              class="w-full px-4 py-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-900 focus:border-slate-900 outline-none transition text-slate-900"
              placeholder="John Doe"
              required
            />
          </div>

          <div>
            <label class="block text-sm font-medium text-slate-700 mb-1.5">
              Email address
            </label>
            <input
              type="email"
              v-model="email"
              class="w-full px-4 py-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-900 focus:border-slate-900 outline-none transition text-slate-900"
              placeholder="you@example.com"
              required
            />
          </div>

          <div>
            <label class="block text-sm font-medium text-slate-700 mb-1.5">
              Password
            </label>
            <input
              type="password"
              v-model="password"
              class="w-full px-4 py-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-900 focus:border-slate-900 outline-none transition text-slate-900"
              placeholder="Minimum 6 characters"
              required
            />
          </div>
          
          <div class="flex justify-center">
            <button
              type="submit"
              :disabled="loading"
              :class="['bg-[#a29e91] text-white py-2.5 px-4 rounded-lg hover:bg-[#857f70] transition duration-200 font-medium mt-6', { 'opacity-50 cursor-not-allowed': loading }]"
            >
              {{ loading ? 'Creating account...' : 'Create account' }}
            </button>
          </div>
        </form>

        <div class="mt-6 text-center">
          <p class="text-slate-600 text-sm">
            Already have an account?
            <router-link to="/login" class="text-slate-900 hover:underline font-medium">
              Sign in
            </router-link>
          </p>
        </div>
      </div>

      <div class="text-center mt-6">
        <router-link to="/" class="text-slate-500 hover:text-slate-700 text-sm inline-flex items-center gap-1">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to home
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAuth } from '../composables/useAuth'

export default {
  name: 'SignupPage',
  setup() {
    const { signup } = useAuth()
    const router = useRouter()
    
    const name = ref('')
    const email = ref('')
    const password = ref('')
    const error = ref('')
    const loading = ref(false)

    const handleSignup = async () => {
      loading.value = true
      error.value = ''

      if (!name.value || !email.value || !password.value) {
        error.value = 'All fields are required'
        loading.value = false
        return
      }

      if (password.value.length < 6) {
        error.value = 'Password must be at least 6 characters'
        loading.value = false
        return
      }

      try {
        await signup(name.value, email.value, password.value)
        router.push('/dashboard')
      } catch (err) {
        error.value = err.message
      } finally {
        loading.value = false
      }
    }

    return {
      name,
      email,
      password,
      error,
      loading,
      handleSignup
    }
  }
}
</script>