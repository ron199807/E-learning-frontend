<template>
  <header class="header" :class="{ 'scrolled': scrolled }">
    <div class="container header-container">
      <div class="logo">
        <svg class="logo-icon" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
          <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
        </svg>
        <span class="logo-text">EduLearn</span>
      </div>
      <nav class="main-nav">
        <a href="#" class="nav-link active">Home</a>
        <a href="#courses" class="nav-link">Courses</a>
        <a href="#features" class="nav-link">Features</a>
        <a href="#testimonials" class="nav-link">Testimonials</a>
        <a href="#pricing" class="nav-link">Pricing</a>
      </nav>
      <div class="header-actions">
        <a href="#" class="login-link">Log in</a>
        <a href="#" class="btn btn-primary">Sign up</a>
        <button @click="toggleMobileMenu" class="mobile-menu-toggle" aria-label="Toggle menu">
          <span v-if="!mobileMenuOpen" class="menu-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </span>
          <span v-else class="close-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </span>
        </button>
      </div>
    </div>
    <!-- Mobile menu -->
    <div class="mobile-menu" :class="{ 'active': mobileMenuOpen }">
      <nav class="mobile-nav">
        <a href="#" class="mobile-nav-link" @click="closeMobileMenu">Home</a>
        <a href="#courses" class="mobile-nav-link" @click="closeMobileMenu">Courses</a>
        <a href="#features" class="mobile-nav-link" @click="closeMobileMenu">Features</a>
        <a href="#testimonials" class="mobile-nav-link" @click="closeMobileMenu">Testimonials</a>
        <a href="#pricing" class="mobile-nav-link" @click="closeMobileMenu">Pricing</a>
        <a href="#" class="mobile-nav-link" @click="closeMobileMenu">Log in</a>
        <a href="#" class="btn btn-primary mobile-btn" @click="closeMobileMenu">Sign up</a>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const mobileMenuOpen = ref(false);
const scrolled = ref(false);

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value;
  if (mobileMenuOpen.value) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = '';
  }
};

const closeMobileMenu = () => {
  mobileMenuOpen.value = false;
  document.body.style.overflow = '';
};

const handleScroll = () => {
  scrolled.value = window.scrollY > 50;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<style scoped>
.header {
  background-color: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
  transition: all 0.3s ease;
  border-bottom: 1px solid transparent;
}

.header.scrolled {
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
}

.header-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 1.5rem;
  transition: padding 0.3s ease;
}

.scrolled .header-container {
  padding: 0.75rem 1.5rem;
}

.logo {
  display: flex;
  align-items: center;
}

.logo-icon {
  width: 32px;
  height: 32px;
  color: var(--primary);
  margin-right: 0.5rem;
}

.logo-text {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--primary);
  letter-spacing: -0.5px;
}

.main-nav {
  display: none;
}

.nav-link {
  margin: 0 1rem;
  color: var(--text-medium);
  font-weight: 500;
  transition: color 0.3s ease, transform 0.3s ease;
  position: relative;
  padding: 0.5rem 0;
}

.nav-link:hover, .nav-link.active {
  color: var(--primary);
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background-color: var(--primary);
  transition: width 0.3s ease;
}

.nav-link:hover::after, .nav-link.active::after {
  width: 100%;
}

.header-actions {
  display: flex;
  align-items: center;
}

.login-link {
  margin-right: 1rem;
  color: var(--text-medium);
  font-weight: 500;
  display: none;
}

.login-link:hover {
  color: var(--primary);
}

.mobile-menu-toggle {
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-medium);
  transition: color 0.3s ease;
}

.mobile-menu-toggle:hover {
  color: var(--primary);
}

.mobile-menu {
  background-color: white;
  padding: 0;
  max-height: 0;
  overflow: hidden;
  transition: all 0.5s cubic-bezier(0.19, 1, 0.22, 1);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.mobile-menu.active {
  max-height: 100vh;
  padding: 1rem 1.5rem;
}

.mobile-nav {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.mobile-nav-link {
  padding: 0.75rem 0;
  color: var(--text-medium);
  font-weight: 500;
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  transition: color 0.3s ease;
}

.mobile-nav-link:hover {
  color: var(--primary);
}

.mobile-nav-link:last-of-type {
  border-bottom: none;
}

.mobile-btn {
  margin-top: 0.5rem;
}

@media (min-width: 1024px) {
  .main-nav {
    display: flex;
  }
  
  .login-link {
    display: inline-block;
  }
  
  .mobile-menu-toggle {
    display: none;
  }
}
</style>