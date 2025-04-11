<template>
  <div class="dashboard-header animate-fadeIn">
    <h1 class="dashboard-title">Dashboard</h1>
    <p class="dashboard-subtitle">Welcome back, Alex! Here's your learning progress.</p>
  </div>
</template>

<script setup>
// No props or imports needed for this simple component
</script>

<style scoped>
.dashboard-header {
  margin-bottom: 1.5rem;
}

.dashboard-title {
  font-size: 1.5rem;
  font-weight: 600;
  color: #111827;
}

.dashboard-subtitle {
  margin-top: 0.25rem;
  font-size: 0.875rem;
  color: #6b7280;
}

/* Animations */
.animate-fadeIn {
  animation: fadeIn 0.5s ease-in-out forwards;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>