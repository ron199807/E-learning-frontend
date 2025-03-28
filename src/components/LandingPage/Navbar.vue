<template>
  <header class="navbar" :class="{ 'navbar--scrolled': scrolled }">
    <div class="navbar__container">
      <div class="navbar__brand">
        <svg class="navbar__logo" width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" fill="#4f46e5"/>
          <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" fill="#4f46e5"/>
        </svg>
        <span class="navbar__brand-name">Btee</span>
      </div>

      <nav class="navbar__desktop-nav">
       <a href="#home" class=" navbar__link">Home</a>
        <a href="#courses" class="navbar__link">Courses</a>
        <a href="#features" class="navbar__link">Features</a>
        <a href="#testimonials" class="navbar__link">Testimonials</a>
        <a href="#pricing" class="navbar__link">Pricing</a>
        <router-link to="/digital_solutions" class="navbar__link"> digital-solutions</router-link>
      </nav>

      <div class="navbar__actions">
        <template v-if="!isAuthenticated">
          <router-link to="/login" class="navbar__login">Log in</router-link>
          <router-link to="/signup" class="navbar__button" @click="debugNavigation">Sign up</router-link>
        </template>
        <template v-else>
          <router-link to="/dashboard" class="navbar__link">Dashboard</router-link>
          <button @click="logout" class="navbar__button">Logout</button>
        </template>
        
        <button 
          @click="toggleMobileMenu" 
          class="navbar__mobile-toggle" 
          aria-label="Toggle menu"
          aria-expanded="mobileMenuOpen"
        >
          <span v-if="!mobileMenuOpen" class="navbar__hamburger">
            <span class="navbar__hamburger-line"></span>
            <span class="navbar__hamburger-line"></span>
            <span class="navbar__hamburger-line"></span>
          </span>
          <span v-else class="navbar__close">
            <span class="navbar__close-line"></span>
            <span class="navbar__close-line"></span>
          </span>
        </button>
      </div>
    </div>

    <!-- Mobile menu -->
    <transition name="slide-down">
      <div v-if="mobileMenuOpen" class="navbar__mobile-menu">
        <nav class="navbar__mobile-nav">
          <a href="#home" class="navbar__mobile-link" @click="closeMobileMenu">Home</a>
          <a href="#courses" class="navbar__mobile-link" @click="closeMobileMenu">Courses</a>
          <a href="#features" class="navbar__mobile-link" @click="closeMobileMenu">Features</a>
          <a href="#testimonials" class="navbar__mobile-link" @click="closeMobileMenu">Testimonials</a>
          <a href="#pricing" class="navbar__mobile-link" @click="closeMobileMenu">Pricing</a>
          <router-link to="/digital_solutions" class="navbar__mobile-link" @click="closeMobileMenu">digital-solutions</router-link>

          
          <div class="navbar__mobile-actions">
            <router-link 
              v-if="!isAuthenticated"
              to="/login" 
              class="navbar__mobile-link"
              @click="closeMobileMenu"
            >
              Log in
            </router-link>
            <router-link 
              v-if="!isAuthenticated"
              to="/signup" 
              class="navbar__mobile-button"
              @click="closeMobileMenu"
            >
              Sign up
            </router-link>
            <router-link 
              v-if="isAuthenticated"
              to="/dashboard" 
              class="navbar__mobile-link"
              @click="navigateToDashboard"
            >
              Dashboard
            </router-link>
            <button 
              v-if="isAuthenticated"
              @click="logout" 
              class="navbar__mobile-button"
            >
              Logout
            </button>
          </div>
        </nav>
      </div>
    </transition>
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
      document.body.style.overflow = this.mobileMenuOpen ? 'hidden' : '';
    },
    closeMobileMenu() {
      this.mobileMenuOpen = false;
      document.body.style.overflow = '';
    },
    handleScroll() {
      this.scrolled = window.scrollY > 10;
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
/* Base Styles */
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: rgba(255, 255, 255, 0.98);
  backdrop-filter: blur(10px);
  z-index: 1000;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
}

.navbar--scrolled {
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}

.navbar__container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 1.5rem;
  max-width: 1440px;
  margin: 0 auto;
  transition: padding 0.3s ease;
}

.navbar--scrolled .navbar__container {
  padding: 0.75rem 1.5rem;
}

/* Branding */
.navbar__brand {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.navbar__logo {
  width: 32px;
  height: 32px;
  flex-shrink: 0;
}

.navbar__brand-name {
  font-size: 1.5rem;
  font-weight: 700;
  color: #4f46e5;
  letter-spacing: -0.025em;
}

/* Desktop Navigation */
.navbar__desktop-nav {
  display: none;
  gap: 1.5rem;
}

.navbar__link {
  position: relative;
  font-size: 1rem;
  font-weight: 500;
  color: #4b5563;
  text-decoration: none;
  transition: color 0.2s ease;
  padding: 0.5rem 0;
}

.navbar__link:hover {
  color: #4f46e5;
}

.navbar__link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background-color: #4f46e5;
  transition: width 0.3s ease;
}

.navbar__link:hover::after {
  width: 100%;
}

/* Actions */
.navbar__actions {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.navbar__login {
  display: none;
  font-size: 1rem;
  font-weight: 500;
  color: #4b5563;
  text-decoration: none;
  transition: color 0.2s ease;
}

.navbar__login:hover {
  color: #4f46e5;
}

.navbar__button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem 1.25rem;
  font-size: 1rem;
  font-weight: 500;
  color: white;
  background-color: #4f46e5;
  border: none;
  border-radius: 0.375rem;
  cursor: pointer;
  transition: all 0.2s ease;
  text-decoration: none;
}

.navbar__button:hover {
  background-color: #4338ca;
  transform: translateY(-1px);
}

/* Mobile Toggle */
.navbar__mobile-toggle {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
}

.navbar__hamburger {
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: 24px;
}

.navbar__hamburger-line {
  height: 2px;
  width: 100%;
  background-color: #4b5563;
  transition: all 0.3s ease;
}

.navbar__close {
  position: relative;
  width: 24px;
  height: 24px;
}

.navbar__close-line {
  position: absolute;
  top: 50%;
  left: 0;
  width: 100%;
  height: 2px;
  background-color: #4b5563;
}

.navbar__close-line:first-child {
  transform: rotate(45deg);
}

.navbar__close-line:last-child {
  transform: rotate(-45deg);
}

/* Mobile Menu */
.slide-down-enter-active,
.slide-down-leave-active {
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.slide-down-enter-from,
.slide-down-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}

.navbar__mobile-menu {
  background-color: white;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  overflow: hidden;
}

.navbar__mobile-nav {
  display: flex;
  flex-direction: column;
  padding: 1rem 1.5rem;
}

.navbar__mobile-link {
  padding: 0.75rem 0;
  font-size: 1rem;
  font-weight: 500;
  color: #4b5563;
  text-decoration: none;
  border-bottom: 1px solid #f3f4f6;
  transition: color 0.2s ease;
}

.navbar__mobile-link:hover {
  color: #4f46e5;
}

.navbar__mobile-actions {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-top: 1rem;
  padding-top: 0.75rem;
  border-top: 1px solid #f3f4f6;
}

.navbar__mobile-button {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.75rem;
  font-size: 1rem;
  font-weight: 500;
  color: white;
  background-color: #4f46e5;
  border: none;
  border-radius: 0.375rem;
  cursor: pointer;
  transition: all 0.2s ease;
  text-decoration: none;
}

.navbar__mobile-button:hover {
  background-color: #4338ca;
}

/* Responsive Styles */
@media (min-width: 1024px) {
  .navbar__desktop-nav {
    display: flex;
  }
  
  .navbar__login {
    display: inline-flex;
  }
  
  .navbar__mobile-toggle {
    display: none;
  }
  
  .navbar__mobile-menu {
    display: none;
  }
}
</style>