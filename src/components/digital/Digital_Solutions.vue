<template>
  <div class="digital-solutions">
    <!-- Header -->
    <header class="header">
      <div class="container header__container">
        <router-link to="/" class="header__back-link">
          <arrow-left-icon class="header__back-icon" />
        </router-link>
        <h1 class="header__logo">Btee-Solutions</h1>
        <nav class="header__nav">
          <ul class="header__nav-list">
            <li><a href="#services" class="header__nav-link">Services</a></li>
            <li><a href="#contact" class="header__nav-link">Contact</a></li>
          </ul>
        </nav>
        <button class="header__mobile-toggle" @click="mobileMenuOpen = !mobileMenuOpen">
          <menu-icon v-if="!mobileMenuOpen" class="header__mobile-icon" />
          <x-icon v-else class="header__mobile-icon" />
        </button>
      </div>
      <div v-if="mobileMenuOpen" class="header__mobile-menu">
        <ul class="header__mobile-list">
          <li><a href="#services" class="header__mobile-link" @click="mobileMenuOpen = false">Services</a></li>
          <li><a href="#contact" class="header__mobile-link" @click="mobileMenuOpen = false">Contact</a></li>
        </ul>
      </div>
    </header>

    <!-- Main Content -->
    <main>
      <!-- Hero Banner -->
      <section class="hero">
        <div class="container hero__container">
          <h2 class="hero__title">Innovative Digital Solutions</h2>
          <p class="hero__subtitle">
            Transforming ideas into powerful digital experiences
          </p>
          <a href="#contact" class="hero__cta-button">
            Get Started
          </a>
        </div>
      </section>

      <!-- Services Section -->
      <section id="services" class="services">
        <div class="container">
          <h2 class="section-title">Our Services</h2>
          
          <div class="services__grid">
            <!-- UI/UX Design -->
            <div class="service-card">
              <div class="service-card__header">
                <layout-icon class="service-card__icon" />
                <h3 class="service-card__title">UI/UX Design</h3>
              </div>
              <p class="service-card__description">
                Create intuitive and engaging user experiences with our expert design team.
              </p>
            </div>

            <!-- Web Development -->
            <div class="service-card">
              <div class="service-card__header">
                <code-icon class="service-card__icon" />
                <h3 class="service-card__title">Web Development</h3>
              </div>
              <p class="service-card__description">
                Build responsive, high-performance websites and web applications.
              </p>
            </div>

            <!-- Data Science Consultancy -->
            <div class="service-card">
              <div class="service-card__header">
                <bar-chart-icon class="service-card__icon" />
                <h3 class="service-card__title">Data Science Consultancy</h3>
              </div>
              <p class="service-card__description">
                Unlock insights from your data with advanced analytics and machine learning.
              </p>
            </div>

            <!-- Mobile App Development -->
            <div class="service-card">
              <div class="service-card__header">
                <smartphone-icon class="service-card__icon" />
                <h3 class="service-card__title">Mobile App Development</h3>
              </div>
              <p class="service-card__description">
                Create native and cross-platform mobile applications for iOS and Android.
              </p>
            </div>

            <!-- Cloud Solutions -->
            <div class="service-card">
              <div class="service-card__header">
                <cloud-icon class="service-card__icon" />
                <h3 class="service-card__title">Cloud Solutions</h3>
              </div>
              <p class="service-card__description">
                Optimize your infrastructure with scalable and secure cloud services.
              </p>
            </div>

            <!-- Digital Marketing -->
            <div class="service-card">
              <div class="service-card__header">
                <trending-up-icon class="service-card__icon" />
                <h3 class="service-card__title">Digital Marketing</h3>
              </div>
              <p class="service-card__description">
                Grow your online presence with SEO, content marketing, and social media strategies.
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- Contact Form Section -->
      <section id="contact" class="contact">
        <div class="container">
          <h2 class="section-title">Get In Touch</h2>
          
          <div class="contact__form-container">
            <form @submit.prevent="submitForm" class="contact-form">
              <div class="contact-form__row">
                <div class="form-group">
                  <label for="firstName" class="form-label">First Name</label>
                  <input 
                    type="text" 
                    id="firstName" 
                    v-model="form.firstName" 
                    class="form-input"
                    :class="{'form-input--error': errors.firstName}"
                    required
                  >
                  <p v-if="errors.firstName" class="form-error">{{ errors.firstName }}</p>
                </div>
                
                <div class="form-group">
                  <label for="lastName" class="form-label">Last Name</label>
                  <input 
                    type="text" 
                    id="lastName" 
                    v-model="form.lastName" 
                    class="form-input"
                    :class="{'form-input--error': errors.lastName}"
                    required
                  >
                  <p v-if="errors.lastName" class="form-error">{{ errors.lastName }}</p>
                </div>
              </div>
              
              <div class="form-group">
                <label for="email" class="form-label">Email Address</label>
                <input 
                  type="email" 
                  id="email" 
                  v-model="form.email" 
                  class="form-input"
                  :class="{'form-input--error': errors.email}"
                  required
                >
                <p v-if="errors.email" class="form-error">{{ errors.email }}</p>
              </div>
              
              <div class="form-group">
                <label for="service" class="form-label">Service Interested In</label>
                <select 
                  id="service" 
                  v-model="form.service" 
                  class="form-select"
                  required
                >
                  <option value="" disabled>Select a service</option>
                  <option value="ui-ux">UI/UX Design</option>
                  <option value="web-dev">Web Development</option>
                  <option value="data-science">Data Science Consultancy</option>
                  <option value="mobile-app">Mobile App Development</option>
                  <option value="cloud">Cloud Solutions</option>
                  <option value="marketing">Digital Marketing</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div class="form-group">
                <label for="message" class="form-label">Message</label>
                <textarea 
                  id="message" 
                  v-model="form.message" 
                  rows="4" 
                  class="form-textarea"
                  :class="{'form-textarea--error': errors.message}"
                  required
                ></textarea>
                <p v-if="errors.message" class="form-error">{{ errors.message }}</p>
              </div>
              
              <div class="form-group form-group--checkbox">
                <input 
                  type="checkbox" 
                  id="consent" 
                  v-model="form.consent" 
                  class="form-checkbox"
                  required
                >
                <label for="consent" class="form-checkbox-label">
                  I consent to Btee-Solutions processing my data to contact me.
                </label>
              </div>
              
              <div class="form-group">
                <button 
                  type="submit" 
                  class="submit-button"
                  :disabled="isSubmitting"
                >
                  <span v-if="isSubmitting">Sending...</span>
                  <span v-else>Send Message</span>
                </button>
              </div>
              
              <div v-if="formSubmitted" class="form-success">
                Thank you for your message! We'll get back to you shortly.
              </div>
            </form>
          </div>
        </div>
      </section>
    </main>

    <!-- Footer -->
    <footer class="footer">
      <div class="container">
        <div class="footer__grid">
          <div class="footer__column">
            <h3 class="footer__logo">Btee-Solutions</h3>
            <p class="footer__description">
              Transforming ideas into powerful digital experiences.
            </p>
          </div>
          
          <div class="footer__column">
            <h4 class="footer__heading">Quick Links</h4>
            <ul class="footer__links">
              <li><a href="#services" class="footer__link">Services</a></li>
              <li><a href="#contact" class="footer__link">Contact</a></li>
            </ul>
          </div>
          
          <div class="footer__column">
            <h4 class="footer__heading">Contact Us</h4>
            <address class="footer__address">
              <p>Lusaka City, Zambia</p>
              <p class="footer__contact-info">info@Btee-solutions.com</p>
              <p>+(2609) 6683-9700</p>
            </address>
          </div>
        </div>
        
        <div class="footer__bottom">
          <p>&copy; {{ new Date().getFullYear() }} Btee-Solutions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue';
import { 
  Menu as MenuIcon, 
  X as XIcon, 
  Layout as LayoutIcon, 
  Code as CodeIcon, 
  BarChart as BarChartIcon,
  Smartphone as SmartphoneIcon,
  Cloud as CloudIcon,
  TrendingUp as TrendingUpIcon,
  ArrowLeft as ArrowLeftIcon
} from 'lucide-vue-next';

// Mobile menu state
const mobileMenuOpen = ref(false);

// Form state
const form = reactive({
  firstName: '',
  lastName: '',
  email: '',
  service: '',
  message: '',
  consent: false
});

const errors = reactive({
  firstName: '',
  lastName: '',
  email: '',
  message: ''
});

const isSubmitting = ref(false);
const formSubmitted = ref(false);

// Set active nav links based on scroll position
onMounted(() => {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.header__nav-link, .header__mobile-link');
  
  const setActiveLink = () => {
    const scrollPosition = window.scrollY;
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 100;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute('id');
      
      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });
      }
    });
  };
  
  window.addEventListener('scroll', setActiveLink);
  setActiveLink(); // Set initial active state
});

// Form validation
const validateForm = () => {
  let isValid = true;
  
  // Reset errors
  Object.keys(errors).forEach(key => {
    errors[key] = '';
  });
  
  // Validate first name
  if (!form.firstName.trim()) {
    errors.firstName = 'First name is required';
    isValid = false;
  }
  
  // Validate last name
  if (!form.lastName.trim()) {
    errors.lastName = 'Last name is required';
    isValid = false;
  }
  
  // Validate email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!form.email.trim()) {
    errors.email = 'Email is required';
    isValid = false;
  } else if (!emailRegex.test(form.email)) {
    errors.email = 'Please enter a valid email address';
    isValid = false;
  }
  
  // Validate message
  if (!form.message.trim()) {
    errors.message = 'Message is required';
    isValid = false;
  } else if (form.message.trim().length < 10) {
    errors.message = 'Message must be at least 10 characters';
    isValid = false;
  }
  
  return isValid;
};

// Form submission
const submitForm = async () => {
  if (!validateForm()) {
    return;
  }
  
  isSubmitting.value = true;
  
  try {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Reset form after successful submission
    Object.keys(form).forEach(key => {
      if (key !== 'consent') {
        form[key] = '';
      }
    });
    form.consent = false;
    
    formSubmitted.value = true;
    
    // Hide success message after 5 seconds
    setTimeout(() => {
      formSubmitted.value = false;
    }, 5000);
  } catch (error) {
    console.error('Form submission error:', error);
  } finally {
    isSubmitting.value = false;
  }
};
</script>

<style scoped>
/* Global styles */
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  line-height: 1.6;
  color: #333;
}

.container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.section-title {
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 3rem;
}

/* Header styles */
.header {
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 100;
}

.header__container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;
  position: relative;
}

/* Back link animations */
.header__back-link {
  color: #666;
  text-decoration: none;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  overflow: hidden;
}

.header__back-link::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(74, 107, 255, 0.1);
  border-radius: 50%;
  transform: scale(0);
  transition: transform 0.3s ease;
}

.header__back-link:hover {
  color: #4a6bff;
  transform: translateX(-3px);
}

.header__back-link:hover::before {
  transform: scale(1);
}

.header__back-link:active {
  transform: translateX(-5px) scale(0.95);
}

.header__back-link:visited {
  color: #5e3bee;
}

.header__back-icon {
  width: 24px;
  height: 24px;
  position: relative;
  z-index: 1;
  transition: transform 0.3s ease;
}

.header__back-link:hover .header__back-icon {
  transform: translateX(-2px);
}

/* Logo styles */
.header__logo {
  font-size: 1.5rem;
  font-weight: bold;
  color: #333;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  transition: color 0.3s ease;
}

/* Navigation styles with animations */
.header__nav {
  display: none;
}

.header__nav-list {
  display: flex;
  list-style: none;
  gap: 2rem;
}

.header__nav-link {
  color: #666;
  text-decoration: none;
  position: relative;
  padding: 0.5rem 0;
  font-weight: 500;
  transition: color 0.3s ease;
}

/* Underline animation for nav links */
.header__nav-link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background-color: #4a6bff;
  transform: scaleX(0);
  transform-origin: right;
  transition: transform 0.3s ease;
}

.header__nav-link:hover {
  color: #4a6bff;
}

.header__nav-link:hover::after {
  transform: scaleX(1);
  transform-origin: left;
}

/* Active state */
.header__nav-link.active {
  color: #4a6bff;
}

.header__nav-link.active::after {
  transform: scaleX(1);
}

/* Visited state */
.header__nav-link:visited:not(.active) {
  color: #5e3bee;
}

/* Mobile menu toggle */
.header__mobile-toggle {
  background: none;
  border: none;
  cursor: pointer;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: background-color 0.3s ease;
}

.header__mobile-toggle:hover {
  background-color: rgba(74, 107, 255, 0.1);
}

.header__mobile-toggle:active {
  transform: scale(0.95);
}

.header__mobile-icon {
  width: 24px;
  height: 24px;
  color: #666;
  transition: color 0.3s ease, transform 0.3s ease;
}

.header__mobile-toggle:hover .header__mobile-icon {
  color: #4a6bff;
  transform: rotate(90deg);
}

/* Mobile menu */
.header__mobile-menu {
  background-color: #fff;
  padding: 1rem 0;
  border-top: 1px solid #eee;
  animation: slideDown 0.3s ease forwards;
}

@keyframes slideDown {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.header__mobile-list {
  list-style: none;
}

.header__mobile-link {
  display: block;
  padding: 0.75rem 1rem;
  color: #666;
  text-decoration: none;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.header__mobile-link::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 4px;
  height: 100%;
  background-color: #4a6bff;
  transform: translateX(-4px);
  transition: transform 0.3s ease;
}

.header__mobile-link:hover {
  color: #4a6bff;
  background-color: rgba(74, 107, 255, 0.05);
  padding-left: 1.5rem;
}

.header__mobile-link:hover::before {
  transform: translateX(0);
}

.header__mobile-link.active {
  color: #4a6bff;
  background-color: rgba(74, 107, 255, 0.1);
  padding-left: 1.5rem;
}

.header__mobile-link.active::before {
  transform: translateX(0);
}

.header__mobile-link:visited:not(.active) {
  color: #5e3bee;
}

/* Hero styles */
.hero {
  background: linear-gradient(to right, #4a6bff, #5e3bee);
  color: white;
  padding: 5rem 0;
  text-align: center;
}

.hero__container {
  max-width: 800px;
  margin: 0 auto;
}

.hero__title {
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
}

.hero__subtitle {
  font-size: 1.25rem;
  margin-bottom: 2rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.hero__cta-button {
  display: inline-block;
  background-color: white;
  color: #4a6bff;
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  font-weight: 500;
  text-decoration: none;
  transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  position: relative;
  overflow: hidden;
}

.hero__cta-button::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.2);
  transform: translateX(-100%);
  transition: transform 0.3s ease;
}

.hero__cta-button:hover {
  background-color: #f5f5f5;
  transform: translateY(-3px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.hero__cta-button:hover::after {
  transform: translateX(0);
  opacity: 0;
}

.hero__cta-button:active {
  transform: translateY(-1px);
}

/* Services styles */
.services {
  padding: 4rem 0;
  background-color: white;
}

.services__grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
}

.service-card {
  background-color: #f9f9f9;
  padding: 1.5rem;
  border-radius: 0.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
}

.service-card:hover {
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  transform: translateY(-5px);
}

.service-card__header {
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
}

.service-card__icon {
  width: 2rem;
  height: 2rem;
  color: #4a6bff;
  margin-right: 0.75rem;
  transition: transform 0.3s ease;
}

.service-card:hover .service-card__icon {
  transform: scale(1.1);
}

.service-card__title {
  font-size: 1.25rem;
  font-weight: 600;
}

.service-card__description {
  color: #666;
}

/* Contact form styles */
.contact {
  padding: 4rem 0;
  background-color: #f5f7fa;
}

.contact__form-container {
  max-width: 600px;
  margin: 0 auto;
  background-color: white;
  border-radius: 0.5rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  padding: 2rem;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.contact__form-container:hover {
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}

.contact-form__row {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  margin-bottom: 1.5rem;
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-group--checkbox {
  display: flex;
  align-items: flex-start;
}

.form-label {
  display: block;
  font-size: 0.875rem;
  font-weight: 500;
  color: #333;
  margin-bottom: 0.25rem;
  transition: color 0.3s ease;
}

.form-input:focus + .form-label,
.form-textarea:focus + .form-label,
.form-select:focus + .form-label {
  color: #4a6bff;
}

.form-input,
.form-select,
.form-textarea {
  width: 100%;
  padding: 0.75rem 1rem;
  border: 1px solid #ddd;
  border-radius: 0.25rem;
  font-family: inherit;
  font-size: 1rem;
  transition: all 0.3s ease;
}

.form-input:focus,
.form-select:focus,
.form-textarea:focus {
  outline: none;
  border-color: #4a6bff;
  box-shadow: 0 0 0 3px rgba(74, 107, 255, 0.2);
}

.form-input--error,
.form-textarea--error {
  border-color: #e53e3e;
  animation: shake 0.5s ease;
}

@keyframes shake {
  0%, 100% { transform: translateX(0); }
  10%, 30%, 50%, 70%, 90% { transform: translateX(-5px); }
  20%, 40%, 60%, 80% { transform: translateX(5px); }
}

.form-error {
  color: #e53e3e;
  font-size: 0.75rem;
  margin-top: 0.25rem;
  animation: fadeIn 0.3s ease;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(-5px); }
  to { opacity: 1; transform: translateY(0); }
}

.form-checkbox {
  margin-right: 0.5rem;
  margin-top: 0.25rem;
}

.form-checkbox-label {
  font-size: 0.875rem;
  color: #333;
}

.submit-button {
  width: 100%;
  background-color: #4a6bff;
  color: white;
  border: none;
  border-radius: 0.25rem;
  padding: 0.75rem 1rem;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.submit-button::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.2);
  transform: translateX(-100%);
  transition: transform 0.3s ease;
}

.submit-button:hover {
  background-color: #3a5bef;
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(74, 107, 255, 0.3);
}

.submit-button:hover::after {
  transform: translateX(0);
  opacity: 0;
}

.submit-button:active {
  transform: translateY(0);
}

.submit-button:disabled {
  background-color: #a0aec0;
  cursor: not-allowed;
  transform: none;
  box-shadow: none;
}

.form-success {
  margin-top: 1rem;
  padding: 0.75rem;
  background-color: #f0fff4;
  color: #2f855a;
  border-radius: 0.25rem;
  animation: slideUp 0.5s ease;
}

@keyframes slideUp {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}

/* Footer styles */
.footer {
  background-color: #2d3748;
  color: white;
  padding: 3rem 0;
}

.footer__grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
}

.footer__logo {
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
}

.footer__description {
  color: #cbd5e0;
}

.footer__heading {
  font-size: 1.125rem;
  font-weight: 600;
  margin-bottom: 1rem;
}

.footer__links {
  list-style: none;
}

.footer__link {
  display: block;
  color: #cbd5e0;
  text-decoration: none;
  margin-bottom: 0.5rem;
  transition: all 0.3s ease;
  position: relative;
}

.footer__link::before {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 100%;
  height: 1px;
  background-color: white;
  transform: scaleX(0);
  transform-origin: right;
  transition: transform 0.3s ease;
}

.footer__link:hover {
  color: white;
}

.footer__link:hover::before {
  transform: scaleX(1);
  transform-origin: left;
}

.footer__link:active {
  transform: translateY(1px);
}

.footer__link:visited {
  color: #b2c5d6;
}

.footer__address {
  font-style: normal;
  color: #cbd5e0;
}

.footer__contact-info {
  margin-top: 0.5rem;
}

.footer__bottom {
  margin-top: 2rem;
  padding-top: 2rem;
  border-top: 1px solid #4a5568;
  text-align: center;
  color: #a0aec0;
}

/* Responsive styles */
@media (min-width: 768px) {
  .header__nav {
    display: block;
  }
  
  .header__mobile-toggle {
    display: none;
  }
  
  .hero__title {
    font-size: 3rem;
  }
  
  .hero__subtitle {
    font-size: 1.5rem;
  }
  
  .services__grid {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .contact-form__row {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .footer__grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (min-width: 1024px) {
  .services__grid {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>