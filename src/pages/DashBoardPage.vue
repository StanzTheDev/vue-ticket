<template>
  <div class="min-h-screen bg-slate-50">
    <header class="bg-white border-b border-slate-200">
      <div class="max-w-7xl mx-auto px-6">
        <div class="flex justify-between items-center h-16">
          <div class="flex items-center space-x-8">
            <div class="flex items-center space-x-2">
              <div class="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center">
                <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
                </svg>
              </div>
              <span class="text-lg font-semibold text-slate-900">Paseo</span>
            </div>
            <nav class="hidden md:flex space-x-1">
              <router-link to="/dashboard" class="px-3 py-2 text-sm text-slate-900 bg-slate-100 rounded-lg font-medium">
                Dashboard
              </router-link>
              <router-link to="/tickets" class="px-3 py-2 text-sm text-slate-600 hover:text-slate-900 rounded-lg hover:bg-slate-100 transition">
                Tickets
              </router-link>
            </nav>
          </div>
          
          <div class="flex items-center space-x-4">
            <span class="text-sm text-slate-600">Hello, {{ user.name }}</span>
            <button @click="handleLogout" class="text-sm text-slate-600 hover:text-slate-900 transition">
              Logout
            </button>
          </div>
        </div>
      </div>
    </header>

    <main class="max-w-7xl mx-auto py-8 px-6">
      <div class="mb-8">
        <h1 class="text-2xl font-semibold text-slate-900 mb-1">
          Welcome back, {{ user.name }}
        </h1>
        <p class="text-slate-600 text-sm">Here's your dashboard overview</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <div class="bg-white rounded-lg border border-slate-200 p-5">
          <div class="flex items-center justify-between mb-3">
            <h3 class="text-sm font-medium text-slate-600">Total Tickets</h3>
            <div class="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center">
              <svg class="w-4 h-4 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
            </div>
          </div>
          <p class="text-3xl font-semibold text-slate-900">{{ stats.total }}</p>
        </div>
        
        <div class="bg-white rounded-lg border border-slate-200 p-5">
          <div class="flex items-center justify-between mb-3">
            <h3 class="text-sm font-medium text-slate-600">Open</h3>
            <div class="w-8 h-8 rounded-lg bg-emerald-50 flex items-center justify-center">
              <svg class="w-4 h-4 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
          </div>
          <p class="text-3xl font-semibold text-slate-900">{{ stats.open }}</p>
        </div>
        
        <div class="bg-white rounded-lg border border-slate-200 p-5">
          <div class="flex items-center justify-between mb-3">
            <h3 class="text-sm font-medium text-slate-600">In Progress</h3>
            <div class="w-8 h-8 rounded-lg bg-amber-50 flex items-center justify-center">
              <svg class="w-4 h-4 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
          </div>
          <p class="text-3xl font-semibold text-slate-900">{{ stats.inProgress }}</p>
        </div>
        
        <div class="bg-white rounded-lg border border-slate-200 p-5">
          <div class="flex items-center justify-between mb-3">
            <h3 class="text-sm font-medium text-slate-600">Resolved</h3>
            <div class="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center">
              <svg class="w-4 h-4 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
            </div>
          </div>
          <p class="text-3xl font-semibold text-slate-900">{{ stats.closed }}</p>
        </div>
      </div>

      <div class="bg-white rounded-lg border border-slate-200 p-6 mb-6">
        <h2 class="text-base font-semibold text-slate-900 mb-4">Quick Actions</h2>
        <div class="flex flex-wrap gap-3">
          <router-link 
            to="/tickets" 
            class="bg-slate-900 text-white px-5 py-2.5 rounded-lg hover:bg-slate-800 transition text-sm font-medium inline-flex items-center gap-2"
          >
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
            </svg>
            Manage Tickets
          </router-link>
          <router-link 
            to="/tickets" 
            class="bg-slate-100 text-slate-700 px-5 py-2.5 rounded-lg hover:bg-slate-200 transition text-sm font-medium inline-flex items-center gap-2"
          >
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
            </svg>
            New Ticket
          </router-link>
        </div>
      </div>

      <div class="bg-white rounded-lg border border-slate-200 p-6">
        <h2 class="text-base font-semibold text-slate-900 mb-4">Recent Tickets</h2>
        <div class="space-y-3">
          <div v-if="recentTickets.length === 0" class="text-center py-4">
            <p class="text-slate-600 text-sm">No tickets found. Create your first ticket to get started.</p>
          </div>
          <div 
            v-for="ticket in recentTickets" 
            :key="ticket.id" 
            class="flex items-start justify-between py-3 border-b border-slate-100 last:border-b-0"
          >
            <div class="flex-1 min-w-0">
              <h3 class="font-medium text-slate-900 text-sm mb-1">{{ ticket.title }}</h3>
              <p class="text-sm text-slate-600 truncate">{{ ticket.description }}</p>
            </div>
            <span 
              :class="[
                'ml-4 px-2.5 py-1 rounded-md text-xs font-medium border flex-shrink-0',
                ticket.status === 'open' ? 'bg-emerald-50 text-emerald-700 border-emerald-200' :
                ticket.status === 'in_progress' ? 'bg-amber-50 text-amber-700 border-amber-200' :
                'bg-slate-100 text-slate-600 border-slate-200'
              ]"
            >
              {{ ticket.status.replace('_', ' ') }}
            </span>
          </div>
        </div>
        <div class="mt-4 pt-4 border-t border-slate-100">
          <router-link 
            to="/tickets" 
            class="text-sm text-slate-600 hover:text-slate-900 font-medium inline-flex items-center gap-1"
          >
            View all tickets
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
          </router-link>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import { ref, computed, onMounted } from 'vue';
import { useRouter } from 'vue-router';

export default {
  name: 'DashboardPage',
  setup() {
    const router = useRouter();
    const user = ref({ name: '', email: '' });
    const tickets = ref([]);

    onMounted(() => {
      const savedUser = localStorage.getItem('user');
      if (!savedUser) {
        router.push('/login');
        return;
      }
      
      user.value = JSON.parse(savedUser);
      
      const savedTickets = localStorage.getItem(`tickets_${user.value.id}`);
      if (savedTickets) {
        tickets.value = JSON.parse(savedTickets);
      } else {
        tickets.value = [];
        localStorage.setItem(`tickets_${user.value.id}`, JSON.stringify([]));
      }
    });

    const handleLogout = () => {
      localStorage.removeItem('user');
      router.push('/login');
    };

    const stats = computed(() => ({
      total: tickets.value.length,
      open: tickets.value.filter(t => t.status === 'open').length,
      inProgress: tickets.value.filter(t => t.status === 'in_progress').length,
      closed: tickets.value.filter(t => t.status === 'closed').length,
    }));

    const recentTickets = computed(() => {
      return [...tickets.value]
        .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
        .slice(0, 3);
    });

    return {
      user,
      tickets,
      stats,
      recentTickets,
      handleLogout
    };
  }
};
</script>