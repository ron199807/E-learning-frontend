<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Import sidebar component -->
    <AppSidebar 
      :sidebarOpen="sidebarOpen" 
      :isMobile="isMobile" 
      @toggle-sidebar="toggleSidebar" 
    />

    <!-- Main Content -->
    <div class="main-content" :class="{ 'with-sidebar': !isMobile }">
      <!-- Import navbar component -->
      <AppNavbar 
        :sidebarOpen="sidebarOpen" 
        :isMobile="isMobile" 
        @toggle-sidebar="toggleSidebar" 
      />

      <!-- Dashboard Content -->
      <main class="dashboard-content">
        <div class="content-container">
          <!-- Dashboard header component -->
          <DashboardHeader />

          <!-- Stats overview component -->
          <StatsOverview />

          <!-- Course progress component -->
          <CourseProgress />

          <!-- Two column grid for recommended courses and activity -->
          <div class="two-column-grid">
            <!-- Recommended courses component -->
            <RecommendedCourses />
            
            <!-- Recent activity component -->
            <!-- <RecentActivity /> -->
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, computed, watch } from 'vue';
import AppSidebar from '@/components/dashboard/AppSidebar.vue';
import AppNavbar from '@/components/dashboard/AppNavbar.vue';
import DashboardHeader from '@/components/dashboard/DashboardHeader.vue';
import StatsOverview from '@/components/dashboard/StatsOverview.vue';
import CourseProgress from '@/components/dashboard/CourseProgress.vue';
import RecommendedCourses from '@/components/dashboard/RecommendedCourses.vue';
// import RecentActivity from './components/RecentActivity.vue';

// Initialize sidebar state based on screen size
const windowWidth = ref(window.innerWidth);
const isMobile = computed(() => windowWidth.value < 768);
const sidebarOpen = ref(false);

// Toggle sidebar function
const toggleSidebar = () => {
  sidebarOpen.value = !sidebarOpen.value;
};

// Handle window resize
const handleResize = () => {
  windowWidth.value = window.innerWidth;

  // On desktop, sidebar is always visible in the layout
  // On mobile, sidebar is hidden by default
  if (!isMobile.value && sidebarOpen.value) {
    // Prevent layout shift when transitioning from mobile to desktop
    document.body.style.overflow = '';
  }
};

// Watch for sidebar open state to manage body scroll on mobile
watch(sidebarOpen, (isOpen) => {
  if (isMobile.value) {
    if (isOpen) {
      // Prevent background scrolling when mobile sidebar is open
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }
});

onMounted(() => {
  window.addEventListener('resize', handleResize);
  handleResize(); // Initialize on mount
});

onBeforeUnmount(() => {
  window.removeEventListener('resize', handleResize);
  document.body.style.overflow = '';
});
</script>

<style scoped>
/* Base styles */
.min-h-screen {
  min-height: 100vh;
}

.bg-gray-50 {
  background-color: #f9fafb;
}

/* Main content styles */
.main-content {
  display: flex;
  flex: 1;
  flex-direction: column;
}

.main-content.with-sidebar {
  padding-left: 16rem;
}

/* Dashboard content styles */
.dashboard-content {
  flex: 1;
  overflow-y: auto;
  background-color: #f9fafb;
}

.content-container {
  max-width: 80rem;
  margin: 0 auto;
  padding: 1.5rem 1rem;
}

@media (min-width: 640px) {
  .content-container {
    padding: 1.5rem;
  }
}

@media (min-width: 768px) {
  .content-container {
    padding: 2rem;
  }
}

/* Two column grid styles */
.two-column-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.25rem;
}

@media (min-width: 1024px) {
  .two-column-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>