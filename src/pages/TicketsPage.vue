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
              <router-link to="/dashboard" class="px-3 py-2 text-sm text-slate-600 hover:text-slate-900 rounded-lg hover:bg-slate-100 transition">
                Dashboard
              </router-link>
              <router-link to="/tickets" class="px-3 py-2 text-sm text-slate-900 bg-slate-100 rounded-lg font-medium">
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
      <div class="flex justify-between items-start mb-8">
        <div>
          <h1 class="text-2xl font-semibold text-slate-900 mb-1">Tickets</h1>
          <p class="text-slate-600 text-sm">Manage and track support tickets</p>
        </div>
        <button
          @click="showForm = true"
          class="bg-slate-900 text-white px-4 py-2 rounded-lg hover:bg-slate-800 transition text-sm font-medium"
        >
          New Ticket
        </button>
      </div>

      <div class="bg-white rounded-lg border border-slate-200 p-4 mb-6">
        <div class="flex flex-wrap gap-2">
          <button
            @click="filter = 'all'"
            :class="[
              'px-3 py-1.5 rounded-lg transition text-sm font-medium',
              filter === 'all' ? 'bg-slate-900 text-white' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            ]"
          >
            All ({{ tickets.length }})
          </button>
          <button
            @click="filter = 'open'"
            :class="[
              'px-3 py-1.5 rounded-lg transition text-sm font-medium',
              filter === 'open' ? 'bg-slate-900 text-white' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            ]"
          >
            Open ({{ tickets.filter(t => t.status === 'open').length }})
          </button>
          <button
            @click="filter = 'in_progress'"
            :class="[
              'px-3 py-1.5 rounded-lg transition text-sm font-medium',
              filter === 'in_progress' ? 'bg-slate-900 text-white' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            ]"
          >
            In Progress ({{ tickets.filter(t => t.status === 'in_progress').length }})
          </button>
          <button
            @click="filter = 'closed'"
            :class="[
              'px-3 py-1.5 rounded-lg transition text-sm font-medium',
              filter === 'closed' ? 'bg-slate-900 text-white' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            ]"
          >
            Closed ({{ tickets.filter(t => t.status === 'closed').length }})
          </button>
        </div>
      </div>

      <div class="space-y-3">
        <div v-if="filteredTickets.length === 0" class="bg-white rounded-lg border border-slate-200 p-12 text-center">
          <div class="w-16 h-16 rounded-full bg-slate-100 flex items-center justify-center mx-auto mb-4">
            <svg class="w-8 h-8 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
            </svg>
          </div>
          <h3 class="text-lg font-semibold text-slate-900 mb-1">No tickets found</h3>
          <p class="text-slate-600 text-sm mb-4">
            {{ filter === 'all' ? "Create your first ticket to get started" : `No ${filter.replace('_', ' ')} tickets` }}
          </p>
          <button
            @click="showForm = true"
            class="bg-slate-900 text-white px-4 py-2 rounded-lg hover:bg-slate-800 transition text-sm font-medium"
          >
            New Ticket
          </button>
        </div>

        <div
          v-for="ticket in filteredTickets"
          :key="ticket.id"
          class="bg-white rounded-lg border border-slate-200 p-5 hover:border-slate-300 transition"
        >
          <div class="flex justify-between items-start mb-3">
            <div class="flex-1">
              <h3 class="text-base font-semibold text-slate-900 mb-1">{{ ticket.title }}</h3>
              <p class="text-slate-600 text-sm leading-relaxed">{{ ticket.description }}</p>
            </div>
            <div class="flex space-x-3 ml-4">
              <button
                @click="startEdit(ticket)"
                class="text-slate-600 hover:text-slate-900 transition text-sm"
              >
                Edit
              </button>
              <button
                @click="deleteConfirm = ticket"
                class="text-slate-600 hover:text-rose-600 transition text-sm"
              >
                Delete
              </button>
            </div>
          </div>

          <div class="flex flex-wrap items-center gap-2 text-xs">
            <span :class="['px-2 py-1 rounded-md font-medium border', getStatusColor(ticket.status)]">
              {{ ticket.status.replace('_', ' ') }}
            </span>
            
            <span :class="['px-2 py-1 rounded-md font-medium border', getPriorityColor(ticket.priority)]">
              {{ ticket.priority }}
            </span>
            
            <span class="text-slate-500">
              {{ new Date(ticket.createdAt).toLocaleDateString() }}
            </span>
          </div>
        </div>
      </div>

      <div v-if="showForm || editingTicket" class="fixed inset-0 bg-slate-900/20 backdrop-blur-sm flex items-center justify-center p-4 z-50">
        <div class="bg-white rounded-xl border border-slate-200 w-full max-w-2xl max-h-[90vh] overflow-y-auto">
          <div class="p-6">
            <h2 class="text-xl font-semibold text-slate-900 mb-5">
              {{ editingTicket ? 'Edit Ticket' : 'New Ticket' }}
            </h2>
            
            <div class="space-y-5">
              <div>
                <label class="block text-sm font-medium text-slate-700 mb-1.5">
                  Title
                </label>
                <input
                  type="text"
                  v-model="formData.title"
                  :class="[
                    'w-full px-4 py-2.5 border rounded-lg focus:ring-2 focus:ring-slate-900 focus:border-slate-900 outline-none transition text-slate-900',
                    errors.title ? 'border-rose-300' : 'border-slate-300'
                  ]"
                  placeholder="Enter ticket title"
                  @input="clearError('title')"
                />
                <p v-if="errors.title" class="text-rose-600 text-xs mt-1">{{ errors.title }}</p>
              </div>

              <div>
                <label class="block text-sm font-medium text-slate-700 mb-1.5">
                  Description
                </label>
                <textarea
                  v-model="formData.description"
                  rows="4"
                  :class="[
                    'w-full px-4 py-2.5 border rounded-lg focus:ring-2 focus:ring-slate-900 focus:border-slate-900 outline-none transition text-slate-900',
                    errors.description ? 'border-rose-300' : 'border-slate-300'
                  ]"
                  placeholder="Describe the issue..."
                  @input="clearError('description')"
                />
                <p v-if="errors.description" class="text-rose-600 text-xs mt-1">{{ errors.description }}</p>
              </div>

              <div class="grid grid-cols-2 gap-4">
                <div>
                  <label class="block text-sm font-medium text-slate-700 mb-1.5">
                    Status
                  </label>
                  <select
                    v-model="formData.status"
                    class="w-full px-4 py-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-900 focus:border-slate-900 outline-none transition text-slate-900"
                  >
                    <option value="open">Open</option>
                    <option value="in_progress">In Progress</option>
                    <option value="closed">Closed</option>
                  </select>
                </div>

                <div>
                  <label class="block text-sm font-medium text-slate-700 mb-1.5">
                    Priority
                  </label>
                  <select
                    v-model="formData.priority"
                    class="w-full px-4 py-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-900 focus:border-slate-900 outline-none transition text-slate-900"
                  >
                    <option value="low">Low</option>
                    <option value="medium">Medium</option>
                    <option value="high">High</option>
                  </select>
                </div>
              </div>

              <div class="flex justify-end space-x-3 pt-5 border-t border-slate-200">
                <button
                  type="button"
                  @click="cancelForm"
                  class="px-4 py-2 text-slate-600 hover:text-slate-900 transition text-sm"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  @click="editingTicket ? handleUpdateTicket() : handleCreateTicket()"
                  class="bg-slate-900 text-white px-4 py-2 rounded-lg hover:bg-slate-800 transition text-sm font-medium"
                >
                  {{ editingTicket ? 'Update' : 'Create' }}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div v-if="deleteConfirm" class="fixed inset-0 bg-slate-900/20 backdrop-blur-sm flex items-center justify-center p-4 z-50">
        <div class="bg-white rounded-xl border border-slate-200 w-full max-w-md">
          <div class="p-6">
            <h2 class="text-lg font-semibold text-slate-900 mb-2">Delete ticket?</h2>
            <p class="text-slate-600 text-sm mb-5">
              Are you sure you want to delete "<strong>{{ deleteConfirm.title }}</strong>"? This cannot be undone.
            </p>
            <div class="flex justify-end space-x-3">
              <button
                @click="deleteConfirm = null"
                class="px-4 py-2 text-slate-600 hover:text-slate-900 transition text-sm"
              >
                Cancel
              </button>
              <button
                @click="handleDeleteTicket(deleteConfirm.id)"
                class="bg-rose-600 text-white px-4 py-2 rounded-lg hover:bg-rose-700 transition text-sm font-medium"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import { ref, computed, onMounted } from 'vue';
import { useRouter } from 'vue-router';

export default {
  name: 'TicketsPage',
  setup() {
    const router = useRouter();
    const user = ref({ name: '', email: '' });
    const tickets = ref([]);
    const showForm = ref(false);
    const editingTicket = ref(null);
    const deleteConfirm = ref(null);
    const filter = ref('all');

    const formData = ref({
      title: '',
      description: '',
      status: 'open',
      priority: 'medium'
    });

    const errors = ref({});

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

    const updateTickets = (newTickets) => {
      tickets.value = newTickets;
      localStorage.setItem(`tickets_${user.value.id}`, JSON.stringify(newTickets));
    };

    const filteredTickets = computed(() => {
      if (filter.value === 'all') return tickets.value;
      return tickets.value.filter(ticket => ticket.status === filter.value);
    });

    const validateForm = () => {
      const newErrors = {};
      if (!formData.value.title.trim()) {
        newErrors.title = 'Title is required';
      } else if (formData.value.title.length < 3) {
        newErrors.title = 'Title must be at least 3 characters';
      }
      if (!formData.value.description.trim()) {
        newErrors.description = 'Description is required';
      } else if (formData.value.description.length < 10) {
        newErrors.description = 'Description must be at least 10 characters';
      }
      return newErrors;
    };

    const clearError = (field) => {
      if (errors.value[field]) {
        errors.value[field] = '';
      }
    };

    const handleCreateTicket = () => {
      const validationErrors = validateForm();
      
      if (Object.keys(validationErrors).length > 0) {
        errors.value = validationErrors;
        return;
      }

      const newTicket = {
        id: Date.now().toString(),
        ...formData.value,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        userId: user.value.id
      };

      const updatedTickets = [...tickets.value, newTicket];
      updateTickets(updatedTickets);
      formData.value = { title: '', description: '', status: 'open', priority: 'medium' };
      showForm.value = false;
      errors.value = {};
    };

    const startEdit = (ticket) => {
      editingTicket.value = ticket;
      formData.value = {
        title: ticket.title,
        description: ticket.description,
        status: ticket.status,
        priority: ticket.priority
      };
    };

    const handleUpdateTicket = () => {
      const validationErrors = validateForm();
      
      if (Object.keys(validationErrors).length > 0) {
        errors.value = validationErrors;
        return;
      }

      const updatedTickets = tickets.value.map(ticket =>
        ticket.id === editingTicket.value.id 
          ? { ...ticket, ...formData.value, updatedAt: new Date().toISOString() }
          : ticket
      );

      updateTickets(updatedTickets);
      editingTicket.value = null;
      formData.value = { title: '', description: '', status: 'open', priority: 'medium' };
      errors.value = {};
    };

    const handleDeleteTicket = (id) => {
      const updatedTickets = tickets.value.filter(ticket => ticket.id !== id);
      updateTickets(updatedTickets);
      deleteConfirm.value = null;
    };

    const cancelForm = () => {
      showForm.value = false;
      editingTicket.value = null;
      formData.value = { title: '', description: '', status: 'open', priority: 'medium' };
      errors.value = {};
    };

    const handleLogout = () => {
      localStorage.removeItem('user');
      router.push('/login');
    };

    const getStatusColor = (status) => {
      switch (status) {
        case 'open': return 'bg-emerald-50 text-emerald-700 border-emerald-200';
        case 'in_progress': return 'bg-amber-50 text-amber-700 border-amber-200';
        case 'closed': return 'bg-slate-100 text-slate-600 border-slate-200';
        default: return 'bg-slate-100 text-slate-600 border-slate-200';
      }
    };

    const getPriorityColor = (priority) => {
      switch (priority) {
        case 'high': return 'bg-rose-50 text-rose-700 border-rose-200';
        case 'medium': return 'bg-blue-50 text-blue-700 border-blue-200';
        case 'low': return 'bg-slate-100 text-slate-600 border-slate-200';
        default: return 'bg-slate-100 text-slate-600 border-slate-200';
      }
    };

    return {
      user,
      tickets,
      showForm,
      editingTicket,
      deleteConfirm,
      filter,
      formData,
      errors,
      filteredTickets,
      clearError,
      handleCreateTicket,
      startEdit,
      handleUpdateTicket,
      handleDeleteTicket,
      cancelForm,
      handleLogout,
      getStatusColor,
      getPriorityColor
    };
  }
};
</script>