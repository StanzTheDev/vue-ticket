<script setup>
import { ref } from 'vue'

// Define props using defineProps
const { msg } = defineProps({
  msg: String,
})

// Reactive state
const count = ref(0)
</script>

<template>
  <h1>{{ msg }}</h1>

  <div class="card">
    <button type="button" @click="count++">count is {{ count }}</button>
    <p>
      Edit <code>components/HelloWorld.vue</code> to test HMR
    </p>
  </div>

  <p>
    Check out
    <a
      href="https://vuejs.org/guide/quick-start.html#local"
      target="_blank"
      rel="noopener noreferrer"
    >
      create-vue
    </a>, the official Vue + Vite starter
  </p>

  <p>
    Learn more about IDE Support for Vue in the
    <a
      href="https://vuejs.org/guide/scaling-up/tooling.html#ide-support"
      target="_blank"
      rel="noopener noreferrer"
    >
      Vue Docs Scaling up Guide
    </a>.
  </p>

  <div class="min-h-screen flex items-center justify-center bg-gray-900">
    <h1 class="text-4xl font-bold text-blue-500">
      Tailwind is working 🎉
    </h1>
  </div>

  <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
