<template>
  <!-- Top Navigation Bar -->
  <nav class="top-navbar">
    <div class="navbar-container">
      <div class="navbar-left">
        <!-- Hamburger Menu Button - Only visible on mobile -->
        <button @click="$emit('toggle-sidebar')" class="hamburger-menu" :class="{ 'is-active': sidebarOpen }">
          <span></span>
          <span></span>
          <span></span>
        </button>
        <div class="navbar-brand">
          <BookOpen class="navbar-logo" />
          <span class="navbar-title">Btee</span>
        </div>
        <div class="navbar-links">
          <a href="#" class="nav-link active">Home</a>
          <a href="#" class="nav-link">Explore</a>
          <a href="#" class="nav-link">Community</a>
          <a href="#" class="nav-link">Resources</a>
        </div>
      </div>
      <div class="navbar-right">
        <div class="search-container">
          <div class="search-input-wrapper">
            <input
              class="search-input"
              placeholder="Search..."
              type="search"
            />
            <div class="search-icon-wrapper">
              <Search class="search-icon" />
            </div>
          </div>
        </div>
        <div class="navbar-actions">
          <button class="notification-btn">
            <span class="sr-only">View notifications</span>
            <Bell class="notification-icon" />
          </button>
          <div class="user-profile">
            <div>
              <button class="profile-btn">
                <img
                  class="profile-img"
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue'
import { Bell, BookOpen, Search } from 'lucide-vue-next';

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
/* Top navbar styles */
.top-navbar {
  background-color: #2563eb;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 10;
}

.navbar-container {
  max-width: 80rem;
  margin: 0 auto;
  padding: 0 1rem;
  display: flex;
  height: 4rem;
  justify-content: space-between;
}

.navbar-left {
  display: flex;
  align-items: center;
}

.navbar-brand {
  display: flex;
  flex-shrink: 0;
  align-items: center;
}

.navbar-logo {
  height: 2rem;
  width: 2rem;
  color: white;
}

.navbar-title {
  margin-left: 0.5rem;
  font-size: 1.25rem;
  font-weight: 700;
  color: white;
}

.navbar-links {
  display: none;
}

.nav-link {
  text-decoration: none;
}

@media (min-width: 640px) {
  .navbar-container {
    max-width: 100%;
  }
  .navbar-links {
    display: flex;
    margin-left: .5rem;
    gap: 2rem;
  }
}

.navbar-right {
  display: flex;
  align-items: center;
}

.search-container {
  display: none;
  flex-shrink: 0;
}

@media (min-width: 640px) {
  .search-container {
    display: block;
  }
}

.search-input-wrapper {
  position: relative;
}

.search-input {
  display: block;
  width: 100%;
  border-radius: 0.375rem;
  border: 0;
  background-color: #3b82f6;
  padding: 0.375rem 0.75rem 0.375rem 2.5rem;
  font-size: 0.875rem;
  color: white;
  transition: all 0.3s;
}

.search-input::placeholder {
  color: #bfdbfe;
}

.search-input:focus {
  background-color: white;
  color: #111827;
  outline: none;
  box-shadow: 0 0 0 2px white;
}

.search-input:focus::placeholder {
  color: #9ca3af;
}

.search-icon-wrapper {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  padding-left: 0.75rem;
  pointer-events: none;
}

.search-icon {
  height: 1rem;
  width: 1rem;
  color: #bfdbfe;
}

.navbar-actions {
  display: flex;
  align-items: center;
  margin-left: 1rem;
}

@media (min-width: 768px) {
  .navbar-actions {
    margin-left: 1.5rem;
  }
}

.notification-btn {
  border-radius: 9999px;
  background-color: #3b82f6;
  padding: 0.25rem;
  color: #dbeafe;
  transition: all 0.3s;
}

.notification-btn:hover {
  background-color: #60a5fa;
  color: white;
}

.notification-icon {
  height: 1.5rem;
  width: 1.5rem;
}

.user-profile {
  position: relative;
  margin-left: 0.75rem;
}

.profile-btn {
  display: flex;
  max-width: 8rem;
  align-items: center;
  border-radius: 9999px;
  background-color: #3b82f6;
  font-size: 0.875rem;
}

.profile-img {
  height: 2rem;
  width: 2rem;
  border-radius: 9999px;
  border: 2px solid #93c5fd;
}

/* Hamburger Menu - Only visible on mobile */
.hamburger-menu {
  display: none;
}

@media (max-width: 767px) {
  .hamburger-menu {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 1.5rem;
    height: 1.5rem;
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 0;
    margin-right: 0.5rem;
    z-index: 10;
  }
}

.hamburger-menu:focus {
  outline: none;
}

.hamburger-menu span {
  width: 2rem;
  height: 0.25rem;
  background: white;
  border-radius: 10px;
  transition: all 0.3s linear;
  position: relative;
  transform-origin: 1px;
}

.hamburger-menu.is-active span:first-child {
  transform: rotate(45deg);
}

.hamburger-menu.is-active span:nth-child(2) {
  opacity: 0;
}

.hamburger-menu.is-active span:nth-child(3) {
  transform: rotate(-45deg);
}

/* Improved Navigation Links */
.nav-link {
  position: relative;
  display: inline-flex;
  align-items: center;
  border-bottom: 2px solid transparent;
  padding: 0 0.25rem;
  padding-top: 0.25rem;
  font-size: 0.875rem;
  font-weight: 500;
  color: #dbeafe;
  transition: all 0.3s ease;
}

.nav-link::after {
  content: '';
  position: absolute;
  width: 0;
  height: 2px;
  bottom: -2px;
  left: 0;
  background-color: white;
  transition: width 0.3s ease;
}

.nav-link:hover {
  color: white;
}

.nav-link:hover::after {
  width: 100%;
}

.nav-link.active {
  color: white;
  border-bottom-color: white;
}

.nav-link.active::after {
  width: 100%;
}

/* Screen reader only */
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}
</style>