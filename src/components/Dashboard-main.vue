<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Sidebar Navigation with Animation -->
    <Transition name="slide">
      <div v-if="sidebarOpen || !isMobile" class="sidebar">
        <div class="sidebar-header">
          <div class="sidebar-logo">
            <BookOpen class="sidebar-icon" />
            <span class="sidebar-title">LearnHub</span>
          </div>
          <button @click="toggleSidebar" class="sidebar-close-btn">
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
      <div v-if="sidebarOpen && isMobile" @click="toggleSidebar" class="sidebar-overlay"></div>
    </Transition>

    <!-- Main Content -->
    <div class="main-content" :class="{ 'with-sidebar': !isMobile }">
      <!-- Top Navigation Bar -->
      <nav class="top-navbar">
        <div class="navbar-container">
          <div class="navbar-left">
            <!-- Hamburger Menu Button - Only visible on mobile -->
            <button @click="toggleSidebar" class="hamburger-menu" :class="{ 'is-active': sidebarOpen }">
              <span></span>
              <span></span>
              <span></span>
            </button>
            <div class="navbar-brand">
              <BookOpen class="navbar-logo" />
              <span class="navbar-title">LearnHub</span>
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

      <!-- Dashboard Content -->
      <main class="dashboard-content">
        <div class="content-container">
          <div class="dashboard-header animate-fadeIn">
            <h1 class="dashboard-title">Dashboard</h1>
            <p class="dashboard-subtitle">Welcome back, Alex! Here's your learning progress.</p>
          </div>

          <!-- Stats Overview -->
          <div class="stats-grid">
            <div class="stat-card animate-fadeIn" style="animation-delay: 0.1s">
              <div class="stat-content">
                <div class="stat-icon-wrapper">
                  <div class="stat-icon">
                    <BookOpen class="icon" />
                  </div>
                  <div class="stat-details">
                    <dl>
                      <dt class="stat-label">Courses in Progress</dt>
                      <dd>
                        <div class="stat-value">4</div>
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
            </div>

            <div class="stat-card animate-fadeIn" style="animation-delay: 0.2s">
              <div class="stat-content">
                <div class="stat-icon-wrapper">
                  <div class="stat-icon">
                    <CheckCircle class="icon" />
                  </div>
                  <div class="stat-details">
                    <dl>
                      <dt class="stat-label">Completed Courses</dt>
                      <dd>
                        <div class="stat-value">12</div>
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
            </div>

            <div class="stat-card animate-fadeIn" style="animation-delay: 0.3s">
              <div class="stat-content">
                <div class="stat-icon-wrapper">
                  <div class="stat-icon">
                    <Clock class="icon" />
                  </div>
                  <div class="stat-details">
                    <dl>
                      <dt class="stat-label">Learning Hours</dt>
                      <dd>
                        <div class="stat-value">87.5</div>
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
            </div>

            <div class="stat-card animate-fadeIn" style="animation-delay: 0.4s">
              <div class="stat-content">
                <div class="stat-icon-wrapper">
                  <div class="stat-icon">
                    <Award class="icon" />
                  </div>
                  <div class="stat-details">
                    <dl>
                      <dt class="stat-label">Certificates Earned</dt>
                      <dd>
                        <div class="stat-value">3</div>
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Course Progress -->
          <h2 class="section-title">Your Courses</h2>
          <div class="courses-grid">
            <div class="course-card animate-slideUp" style="animation-delay: 0.1s">
              <div class="course-content">
                <div class="course-header">
                  <h3 class="course-title">Web Development Fundamentals</h3>
                  <span class="course-badge">In Progress</span>
                </div>
                <div class="course-time">
                  <Clock class="course-time-icon" />
                  <p>8 hours left</p>
                </div>
                <div class="course-progress">
                  <div class="progress-header">
                    <span class="progress-label">Progress</span>
                    <span class="progress-percent">65%</span>
                  </div>
                  <div class="progress-bar-bg">
                    <div class="progress-bar-fill" style="width: 65%"></div>
                  </div>
                </div>
                <div class="course-actions">
                  <button class="continue-btn">Continue Learning</button>
                </div>
              </div>
            </div>

            <div class="course-card animate-slideUp" style="animation-delay: 0.2s">
              <div class="course-content">
                <div class="course-header">
                  <h3 class="course-title">Data Science Essentials</h3>
                  <span class="course-badge">In Progress</span>
                </div>
                <div class="course-time">
                  <Clock class="course-time-icon" />
                  <p>12 hours left</p>
                </div>
                <div class="course-progress">
                  <div class="progress-header">
                    <span class="progress-label">Progress</span>
                    <span class="progress-percent">40%</span>
                  </div>
                  <div class="progress-bar-bg">
                    <div class="progress-bar-fill" style="width: 40%"></div>
                  </div>
                </div>
                <div class="course-actions">
                  <button class="continue-btn">Continue Learning</button>
                </div>
              </div>
            </div>

            <div class="course-card animate-slideUp" style="animation-delay: 0.3s">
              <div class="course-content">
                <div class="course-header">
                  <h3 class="course-title">UX Design Principles</h3>
                  <span class="course-badge">In Progress</span>
                </div>
                <div class="course-time">
                  <Clock class="course-time-icon" />
                  <p>5 hours left</p>
                </div>
                <div class="course-progress">
                  <div class="progress-header">
                    <span class="progress-label">Progress</span>
                    <span class="progress-percent">75%</span>
                  </div>
                  <div class="progress-bar-bg">
                    <div class="progress-bar-fill" style="width: 75%"></div>
                  </div>
                </div>
                <div class="course-actions">
                  <button class="continue-btn">Continue Learning</button>
                </div>
              </div>
            </div>
          </div>

          <!-- Courses You May Like and Recent Activity -->
          <div class="two-column-grid">
            <!-- Courses You May Like -->
            <div class="panel animate-slideUp" style="animation-delay: 0.4s">
              <div class="panel-header">
                <h3 class="panel-title">Courses You May Like</h3>
              </div>
              <div class="panel-body">
                <ul class="course-list">
                  <li class="course-list-item">
                    <div class="course-list-content">
                      <div class="course-thumbnail">
                        <div class="thumbnail-wrapper">
                          <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80" alt="Programming" class="thumbnail-img" />
                        </div>
                      </div>
                      <div class="course-info">
                        <p class="course-info-title">Advanced JavaScript Patterns</p>
                        <p class="course-info-desc">Learn modern JavaScript design patterns and architecture</p>
                        <div class="course-rating">
                          <div class="rating-stars">
                            <Star class="star-icon filled" />
                            <Star class="star-icon filled" />
                            <Star class="star-icon filled" />
                            <Star class="star-icon filled" />
                            <StarHalf class="star-icon filled" />
                          </div>
                          <span class="rating-value">(4.5)</span>
                        </div>
                      </div>
                      <div>
                        <button class="add-course-btn">Add to List</button>
                      </div>
                    </div>
                  </li>
                  <li class="course-list-item">
                    <div class="course-list-content">
                      <div class="course-thumbnail">
                        <div class="thumbnail-wrapper">
                          <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80" alt="Machine Learning" class="thumbnail-img" />
                        </div>
                      </div>
                      <div class="course-info">
                        <p class="course-info-title">Machine Learning Fundamentals</p>
                        <p class="course-info-desc">Introduction to ML algorithms and practical applications</p>
                        <div class="course-rating">
                          <div class="rating-stars">
                            <Star class="star-icon filled" />
                            <Star class="star-icon filled" />
                            <Star class="star-icon filled" />
                            <Star class="star-icon filled" />
                            <Star class="star-icon filled" />
                          </div>
                          <span class="rating-value">(5.0)</span>
                        </div>
                      </div>
                      <div>
                        <button class="add-course-btn">Add to List</button>
                      </div>
                    </div>
                  </li>
                  <li class="course-list-item">
                    <div class="course-list-content">
                      <div class="course-thumbnail">
                        <div class="thumbnail-wrapper">
                          <img src="https://images.unsplash.com/photo-1558655146-d09347e92766?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80" alt="Mobile Development" class="thumbnail-img" />
                        </div>
                      </div>
                      <div class="course-info">
                        <p class="course-info-title">Mobile App Development with Flutter</p>
                        <p class="course-info-desc">Build cross-platform mobile apps with Flutter framework</p>
                        <div class="course-rating">
                          <div class="rating-stars">
                            <Star class="star-icon filled" />
                            <Star class="star-icon filled" />
                            <Star class="star-icon filled" />
                            <Star class="star-icon filled" />
                            <Star class="star-icon" />
                          </div>
                          <span class="rating-value">(4.0)</span>
                        </div>
                      </div>
                      <div>
                        <button class="add-course-btn">Add to List</button>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <!-- Recent Activity -->
            <div class="panel animate-slideUp" style="animation-delay: 0.5s">
              <div class="panel-header">
                <h3 class="panel-title">Recent Activity</h3>
              </div>
              <div class="panel-body">
                <ul class="activity-list">
                  <li class="activity-item">
                    <div class="activity-icon blue">
                      <CheckCircle class="activity-icon-svg" />
                    </div>
                    <div class="activity-content">
                      <p class="activity-title">Completed lesson: Introduction to APIs</p>
                      <p class="activity-subtitle">Web Development Fundamentals • 2 hours ago</p>
                    </div>
                  </li>
                  <li class="activity-item">
                    <div class="activity-icon purple">
                      <Award class="activity-icon-svg" />
                    </div>
                    <div class="activity-content">
                      <p class="activity-title">Earned badge: Python Basics</p>
                      <p class="activity-subtitle">Data Science Essentials • 1 day ago</p>
                    </div>
                  </li>
                  <li class="activity-item">
                    <div class="activity-icon blue">
                      <MessageSquare class="activity-icon-svg" />
                    </div>
                    <div class="activity-content">
                      <p class="activity-title">Posted in discussion: User Research Methods</p>
                      <p class="activity-subtitle">UX Design Principles • 2 days ago</p>
                    </div>
                  </li>
                  <li class="activity-item">
                    <div class="activity-icon yellow">
                      <FileText class="activity-icon-svg" />
                    </div>
                    <div class="activity-content">
                      <p class="activity-title">Submitted assignment: Data Visualization</p>
                      <p class="activity-subtitle">Data Science Essentials • 3 days ago</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, computed, watch } from 'vue';
import { 
  Award, 
  Bell, 
  BookOpen, 
  Calendar, 
  CheckCircle, 
  Clock, 
  Crown,
  FileText, 
  GraduationCap, 
  LayoutDashboard, 
  Menu, 
  MessageSquare, 
  Search, 
  Settings, 
  Star,
  StarHalf,
  Users, 
  X 
} from 'lucide-vue-next';

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
  
  // Animate progress bars after component is mounted
  const progressBars = document.querySelectorAll('.progress-bar-fill');
  progressBars.forEach(bar => {
    const width = bar.style.width;
    bar.style.width = '0';
    setTimeout(() => {
      bar.style.width = width;
    }, 300);
  });
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

/* Main content styles */
.main-content {
  display: flex;
  flex: 1;
  flex-direction: column;
}

.main-content.with-sidebar {
  padding-left: 16rem;
}

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

@media (min-width: 640px) {
  .navbar-links {
    display: flex;
    margin-left: 1.5rem;
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

/* Stats grid styles */
.stats-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.25rem;
  margin-bottom: 2rem;
}

@media (min-width: 640px) {
  .stats-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .stats-grid {
    grid-template-columns: repeat(4, 1fr);
  }
}

.stat-card {
  overflow: hidden;
  border-radius: 0.5rem;
  background-color: white;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  transition: all 0.3s;
}

.stat-card:hover {
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
}

.stat-content {
  padding: 1.25rem;
}

.stat-icon-wrapper {
  display: flex;
  align-items: center;
}

.stat-icon {
  flex-shrink: 0;
}

.stat-icon .icon {
  height: 1.5rem;
  width: 1.5rem;
  color: #2563eb;
}

.stat-details {
  margin-left: 1.25rem;
  width: 0;
  flex: 1;
}

.stat-label {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 0.875rem;
  font-weight: 500;
  color: #6b7280;
}

.stat-value {
  font-size: 1.125rem;
  font-weight: 500;
  color: #111827;
}

/* Section title styles */
.section-title {
  margin-bottom: 1rem;
  font-size: 1.125rem;
  font-weight: 500;
  line-height: 1.5;
  color: #111827;
}

/* Courses grid styles */
.courses-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.25rem;
  margin-bottom: 2rem;
}

@media (min-width: 640px) {
  .courses-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .courses-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

.course-card {
  overflow: hidden;
  border-radius: 0.5rem;
  background-color: white;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  transition: all 0.3s;
}

.course-card:hover {
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
}

.course-content {
  padding: 1.25rem;
}

.course-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.75rem;
}

.course-title {
  font-size: 0.875rem;
  font-weight: 500;
  color: #111827;
}

.course-badge {
  display: inline-flex;
  align-items: center;
  border-radius: 9999px;
  background-color: #dbeafe;
  padding: 0.125rem 0.625rem;
  font-size: 0.75rem;
  font-weight: 500;
  color: #1e40af;
}

.course-time {
  display: flex;
  align-items: center;
  font-size: 0.875rem;
  color: #6b7280;
  margin-bottom: 0.5rem;
}

.course-time-icon {
  margin-right: 0.375rem;
  height: 1rem;
  width: 1rem;
  flex-shrink: 0;
  color: #9ca3af;
}

.course-progress {
  margin-top: 1rem;
}

.progress-header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.25rem;
}

.progress-label, .progress-percent {
  font-size: 0.75rem;
  font-weight: 500;
  color: #6b7280;
}

.progress-bar-bg {
  height: 0.5rem;
  width: 100%;
  border-radius: 9999px;
  background-color: #e5e7eb;
}

.progress-bar-fill {
  height: 0.5rem;
  border-radius: 9999px;
  background-color: #3b82f6;
  transition: width 1s ease-in-out;
}

.course-actions {
  margin-top: 1rem;
}

.continue-btn {
  display: inline-flex;
  align-items: center;
  border-radius: 0.375rem;
  border: 1px solid transparent;
  background-color: #2563eb;
  padding: 0.5rem 0.75rem;
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 1;
  color: white;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  transition: all 0.3s;
}

.continue-btn:hover {
  background-color: #1d4ed8;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  transform: translateY(-1px);
}

.continue-btn:active {
  transform: translateY(0);
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

/* Panel styles */
.panel {
  overflow: hidden;
  border-radius: 0.5rem;
  background-color: white;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  transition: all 0.3s;
}

.panel:hover {
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
}

.panel-header {
  border-bottom: 1px solid #e5e7eb;
  padding: 1.25rem 1rem;
}

@media (min-width: 640px) {
  .panel-header {
    padding: 1.25rem 1.5rem;
  }
}

.panel-title {
  font-size: 1.125rem;
  font-weight: 500;
  line-height: 1.5;
  color: #111827;
}

.panel-body {
  padding: 1.25rem 1rem;
}

@media (min-width: 640px) {
  .panel-body {
    padding: 1.5rem;
  }
}

/* Course list styles */
.course-list {
  display: flex;
  flex-direction: column;
  border-top-width: 1px;
  border-color: #e5e7eb;
}

.course-list-item {
  padding: 1rem 0;
  transition: all 0.3s;
  border-radius: 0.375rem;
}

.course-list-item:hover {
  background-color: #f9fafb;
}

.course-list-content {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.course-thumbnail {
  flex-shrink: 0;
}

.thumbnail-wrapper {
  height: 4rem;
  width: 4rem;
  overflow: hidden;
  border-radius: 0.375rem;
  background-color: #f3f4f6;
}

.thumbnail-img {
  height: 100%;
  width: 100%;
  object-fit: cover;
}

.course-info {
  min-width: 0;
  flex: 1;
}

.course-info-title {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 0.875rem;
  font-weight: 500;
  color: #111827;
}

.course-info-desc {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 0.875rem;
  color: #6b7280;
}

.course-rating {
  display: flex;
  align-items: center;
  margin-top: 0.25rem;
}

.rating-stars {
  display: flex;
  align-items: center;
}

.star-icon {
  height: 1rem;
  width: 1rem;
  color: #d1d5db;
}

.star-icon.filled {
  color: #fbbf24;
}

.rating-value {
  margin-left: 0.25rem;
  font-size: 0.75rem;
  color: #6b7280;
}

.add-course-btn {
  display: inline-flex;
  align-items: center;
  border-radius: 0.375rem;
  border: 1px solid transparent;
  background-color: #dbeafe;
  padding: 0.375rem 0.625rem;
  font-size: 0.75rem;
  font-weight: 500;
  color: #1d4ed8;
  transition: all 0.3s;
}

.add-course-btn:hover {
  background-color: #bfdbfe;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  transform: translateY(-1px);
}

/* Activity list styles */
.activity-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.activity-item {
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  padding: 0.5rem;
  border-radius: 0.375rem;
  transition: all 0.3s;
}

.activity-item:hover {
  background-color: #f9fafb;
}

.activity-icon {
  display: flex;
  height: 2rem;
  width: 2rem;
  align-items: center;
  justify-content: center;
  border-radius: 9999px;
  flex-shrink: 0;
}

.activity-icon.blue {
  background-color: #dbeafe;
}

.activity-icon.purple {
  background-color: #f3e8ff;
}

.activity-icon.yellow {
  background-color: #fef3c7;
}

.activity-icon-svg {
  height: 1.25rem;
  width: 1.25rem;
}

.blue .activity-icon-svg {
  color: #2563eb;
}

.purple .activity-icon-svg {
  color: #9333ea;
}

.yellow .activity-icon-svg {
  color: #d97706;
}

.activity-content {
  min-width: 0;
  flex: 1;
}

.activity-title {
  font-size: 0.875rem;
  font-weight: 500;
  color: #111827;
}

.activity-subtitle {
  font-size: 0.875rem;
  color: #6b7280;
}

/* Animations */
.animate-fadeIn {
  animation: fadeIn 0.5s ease-in-out forwards;
}

.animate-slideUp {
  animation: slideUp 0.5s ease-out forwards;
  opacity: 0;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
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

/* Hamburger Menu - Only visible on mobile */
.hamburger-menu {
  display: none;
}

@media (max-width: 767px) {
  .hamburger-menu {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 2rem;
    height: 2rem;
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