<template>
  <header class="header" :class="{ 'scrolled': scrolled }">
    <div class="container header-container">
      <div class="logo">
        <svg class="logo-icon" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
          <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
        </svg>
        <span class="logo-text">Btee</span>
      </div>
      <nav class="main-nav">
        <router-link to="/" class="nav-link">Home</router-link>
        <a href="#courses" class="nav-link">Courses</a>
        <a href="#features" class="nav-link">Features</a>
        <a href="#testimonials" class="nav-link">Testimonials</a>
        <a href="#pricing" class="nav-link">Pricing</a>
      </nav>
      <div class="header-actions">
        <router-link to="/login" class="login-link" v-if="!isAuthenticated">Log in</router-link>
        <router-link to="/signup" class="btn btn-primary" v-if="!isAuthenticated" @click="debugNavigation">Sign up</router-link>
        <router-link to="/dashboard" class="nav-link" v-if="isAuthenticated">Dashboard</router-link>
        <button @click="logout" class="btn btn-primary" v-if="isAuthenticated">Logout</button>
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
        <router-link to="/" class="mobile-nav-link" @click="closeMobileMenu">Home</router-link>
        <a href="#courses" class="mobile-nav-link" @click="closeMobileMenu">Courses</a>
        <a href="#features" class="mobile-nav-link" @click="closeMobileMenu">Features</a>
        <a href="#testimonials" class="mobile-nav-link" @click="closeMobileMenu">Testimonials</a>
        <a href="#pricing" class="mobile-nav-link" @click="closeMobileMenu">Pricing</a>
        <router-link to="/login" class="mobile-nav-link" @click="closeMobileMenu" v-if="!isAuthenticated">Log in</router-link>
        <router-link to="/signup" class="btn btn-primary mobile-btn" @click="closeMobileMenu" v-if="!isAuthenticated">Sign up</router-link>
        <router-link to="/dashboard" class="mobile-nav-link" @click="navigateToDashboard" v-if="isAuthenticated">Dashboard</router-link>
        <button @click="logout" class="btn btn-primary mobile-btn" v-if="isAuthenticated">Logout</button>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: 'AppNavbar',
  data() {
    return {
      mobileMenuOpen: false,
      scrolled: false
    };
  },
  computed: {
    isAuthenticated() {
      return this.$store.getters.isAuthenticated || localStorage.getItem('token')
    },
  },
  methods: {
    debugNavigation() {
      console.log('Sign Up link clicked');
    },

    navigateToDashboard() {
      console.log('Attempting to navigate to dashboard');
      console.log('Current auth state:', this.isAuthenticated);
      this.$router.push('/dashboard')
        .then(() => console.log('Navigation successful'))
        .catch(err => console.error('Navigation failed:', err));
  },

    async logout() {
      await this.$store.dispatch('logout');
      this.$router.push('/login');
    },
    toggleMobileMenu() {
      this.mobileMenuOpen = !this.mobileMenuOpen;
      if (this.mobileMenuOpen) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = '';
      }
    },
    closeMobileMenu() {
      this.mobileMenuOpen = false;
      document.body.style.overflow = '';
    },
    handleScroll() {
      this.scrolled = window.scrollY > 50;
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }
}
</script>

<style scoped>
.header {
  background-color: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  position: sticky;
  top: 0;
  z-index: 13;
  transition: all 0.3s ease;
  border-bottom: 1px solid transparent;
  width: 100%;
  
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
  text-decoration: none;
}

.nav-link:hover, .nav-link.active {
  color: --te;
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
  text-decoration: none;
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
  text-decoration: none;
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

.btn {
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  font-weight: 500;
  text-decoration: none;
  transition: all 0.3s ease;
}

.btn-primary {
  background-color: var(--primary);
  color: white;
  border: none;
}

.btn-primary:hover {
  background-color: var(--primary-dark);
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