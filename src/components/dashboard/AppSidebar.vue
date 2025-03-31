<template>
  <!-- Sidebar Navigation with Animation -->
  <Transition name="slide">
    <div v-if="sidebarOpen || !isMobile" class="sidebar">
      <div class="sidebar-header">
        <div class="sidebar-logo">
          <BookOpen class="sidebar-icon" />
          <span class="sidebar-title">LearnHub</span>
        </div>
        <button @click="$emit('toggle-sidebar')" class="sidebar-close-btn">
          <X class="sidebar-close-icon" />
        </button>
      </div>
      <nav class="sidebar-nav">
        <div class="sidebar-menu">
          <a href="#" class="sidebar-menu-item active">
            <LayoutDashboard class="sidebar-menu-icon" />
            Dashboard
          </a>
          <a href="#" class="sidebar-menu-item">
            <GraduationCap class="sidebar-menu-icon" />
            My Courses
          </a>
          <a href="#" class="sidebar-menu-item">
            <Calendar class="sidebar-menu-icon" />
            Schedule
          </a>
          <a href="#" class="sidebar-menu-item">
            <MessageSquare class="sidebar-menu-icon" />
            Messages
          </a>
          <a href="#" class="sidebar-menu-item">
            <FileText class="sidebar-menu-icon" />
            Assignments
          </a>
          <a href="#" class="sidebar-menu-item">
            <Settings class="sidebar-menu-icon" />
            Settings
          </a>
        </div>
      </nav>
      
      <!-- Premium Badge -->
      <div class="premium-badge">
        <div class="premium-badge-content">
          <Crown class="premium-icon" />
          <div class="premium-text">
            <h4 class="premium-title">Premium Plan</h4>
            <p class="premium-description">Unlock all features</p>
          </div>
        </div>
        <button class="premium-button">Upgrade Now</button>
      </div>
    </div>
  </Transition>

  <!-- Overlay for mobile sidebar -->
  <Transition name="fade">
    <div v-if="sidebarOpen && isMobile" @click="$emit('toggle-sidebar')" class="sidebar-overlay"></div>
  </Transition>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue'
import { BookOpen, Calendar, Crown, FileText, GraduationCap, LayoutDashboard, MessageSquare, Settings, X } from 'lucide-vue-next';

defineProps({
  sidebarOpen: {
    type: Boolean,
    required: true
  },
  isMobile: {
    type: Boolean,
    required: true
  }
});

defineEmits(['toggle-sidebar']);
</script>

<style scoped>
/* Sidebar styles */
.sidebar {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  z-index: 30;
  width: 16rem;
  transform: translateX(0);
  background-color: white;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  display: flex;
  flex-direction: column;
}

.sidebar-header {
  display: flex;
  height: 4rem;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #e5e7eb;
  padding: 0 1rem;
}

.sidebar-logo {
  display: flex;
  align-items: center;
}

.sidebar-icon {
  height: 1.5rem;
  width: 1.5rem;
  color: #2563eb;
}

.sidebar-title {
  margin-left: 0.5rem;
  font-size: 1.125rem;
  font-weight: 600;
}

.sidebar-close-btn {
  border-radius: 0.375rem;
  padding: 0.25rem;
  color: #6b7280;
  transition: background-color 0.3s, color 0.3s;
}

.sidebar-close-btn:hover {
  background-color: #f3f4f6;
  color: #2563eb;
}

.sidebar-close-icon {
  height: 1.25rem;
  width: 1.25rem;
}

.sidebar-nav {
  margin-top: 1.25rem;
  padding: 0 0.5rem;
  flex: 1;
}

.sidebar-menu {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.sidebar-menu-item {
  display: flex;
  align-items: center;
  border-radius: 0.375rem;
  padding: 0.5rem 0.75rem;
  font-size: 0.875rem;
  font-weight: 500;
  color: #4b5563;
  transition: all 0.3s;
}

.sidebar-menu-item:hover {
  background-color: #eff6ff;
  color: #1d4ed8;
}

.sidebar-menu-item.active {
  background-color: #eff6ff;
  color: #1d4ed8;
}

.sidebar-menu-icon {
  margin-right: 0.75rem;
  height: 1.25rem;
  width: 1.25rem;
}

/* Premium Badge */
.premium-badge {
  margin-top: auto;
  margin-bottom: 1rem;
  margin-left: 0.75rem;
  margin-right: 0.75rem;
  padding: 1rem;
  border-radius: 0.5rem;
  background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%);
  color: white;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
}

.premium-badge-content {
  display: flex;
  align-items: center;
  margin-bottom: 0.75rem;
}

.premium-icon {
  height: 1.5rem;
  width: 1.5rem;
  color: #fbbf24;
  margin-right: 0.75rem;
}

.premium-text {
  flex: 1;
}

.premium-title {
  font-weight: 600;
  font-size: 0.875rem;
}

.premium-description {
  font-size: 0.75rem;
  opacity: 0.9;
}

.premium-button {
  width: 100%;
  padding: 0.5rem;
  border-radius: 0.375rem;
  background-color: rgba(255, 255, 255, 0.2);
  color: white;
  font-size: 0.75rem;
  font-weight: 500;
  text-align: center;
  transition: all 0.3s;
}

.premium-button:hover {
  background-color: rgba(255, 255, 255, 0.3);
  transform: translateY(-1px);
}

.sidebar-overlay {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 20;
  background-color: rgba(0, 0, 0, 0.5);
}

/* Transitions */
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.3s ease;
}

.slide-enter-from,
.slide-leave-to {
  transform: translateX(-100%);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>