import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'

export function useAuth() {
  const router = useRouter()
  const user = ref(null)
  const loading = ref(true)

  const initAuth = () => {
    const savedUser = localStorage.getItem('user')
    if (savedUser) {
      user.value = JSON.parse(savedUser)
    }
    
    const users = localStorage.getItem('users')
    if (!users) {
      const demoUser = {
        id: 'demo',
        name: 'Demo User',
        email: 'demo@example.com',
        password: 'password123',
        createdAt: new Date().toISOString()
      }
      localStorage.setItem('users', JSON.stringify([demoUser]))
    }
    
    loading.value = false
  }

  const login = (email, password) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const users = JSON.parse(localStorage.getItem('users') || '[]')
        const foundUser = users.find(u => u.email === email && u.password === password)
        
        if (foundUser) {
          const userData = { 
            id: foundUser.id, 
            name: foundUser.name, 
            email: foundUser.email 
          }
          user.value = userData
          localStorage.setItem('user', JSON.stringify(userData))
          resolve(userData)
        } else {
          reject(new Error('Invalid email or password'))
        }
      }, 1000)
    })
  }

  const signup = (name, email, password) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const users = JSON.parse(localStorage.getItem('users') || '[]')
        const existingUser = users.find(u => u.email === email)
        
        if (existingUser) {
          reject(new Error('User already exists'))
          return
        }

        const newUser = {
          id: Date.now().toString(),
          name,
          email,
          password,
          createdAt: new Date().toISOString()
        }

        users.push(newUser)
        localStorage.setItem('users', JSON.stringify(users))

        const userData = { 
          id: newUser.id, 
          name: newUser.name, 
          email: newUser.email 
        }
        user.value = userData
        localStorage.setItem('user', JSON.stringify(userData))
        resolve(userData)
      }, 1000)
    })
  }

  const logout = () => {
    user.value = null
    localStorage.removeItem('user')
    router.push('/login')
  }

  const isAuthenticated = computed(() => !!user.value)

  return {
    user: computed(() => user.value),
    loading: computed(() => loading.value),
    isAuthenticated,
    initAuth,
    login,
    signup,
    logout
  }
}