<template>
  <div class="app-container">
    <app-header />
    <app-hero />
    <app-stats />
    <app-features />
    <app-courses />
    <app-testimonials />
    <app-pricing />
    <app-cta />
    <app-footer />
  </div>
</template>

<script setup>
import AppHeader from './components/AppHeader.vue';
import AppHero from './components/AppHero.vue';
import AppStats from './components/AppStats.vue';
import AppFeatures from './components/AppFeatures.vue';
import AppCourses from './components/AppCourses.vue';
import AppTestimonials from './components/AppTestimonials.vue';
import AppPricing from './components/AppPricing.vue';
import AppCta from './components/AppCta.vue';
import AppFooter from './components/AppFooter.vue';
</script>

<style>
/* Base Styles */
:root {
  --primary: #4f46e5;
  --primary-dark: #4338ca;
  --primary-light: #eef2ff;
  --secondary: #f59e0b;
  --text-dark: #1f2937;
  --text-medium: #4b5563;
  --text-light: #9ca3af;
  --background-light: #f9fafb;
  --background-white: #ffffff;
  --shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  --shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  --shadow-md: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  --radius-sm: 0.25rem;
  --radius: 0.5rem;
  --radius-md: 0.75rem;
  --radius-lg: 1rem;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: 'Inter', 'Segoe UI', 'Roboto', sans-serif;
  line-height: 1.6;
  color: var(--text-dark);
  background-color: var(--background-white);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.app-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

img {
  max-width: 100%;
  height: auto;
  border-radius: var(--radius);
  display: block;
}

a {
  text-decoration: none;
  color: var(--primary);
  transition: color 0.2s ease, transform 0.2s ease;
}

a:hover {
  color: var(--primary-dark);
}

ul {
  list-style: none;
}

/* Button Styles */
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.75rem 1.5rem;
  border-radius: var(--radius);
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  text-align: center;
  border: none;
  outline: none;
  white-space: nowrap;
}

.btn-primary {
  background-color: var(--primary);
  color: white;
  box-shadow: var(--shadow-sm);
}

.btn-primary:hover {
  background-color: var(--primary-dark);
  transform: translateY(-2px);
  box-shadow: var(--shadow);
}

.btn-outline {
  background-color: transparent;
  color: var(--primary);
  border: 2px solid var(--primary);
}

.btn-outline:hover {
  background-color: var(--primary-light);
  transform: translateY(-2px);
}

.btn-light {
  background-color: white;
  color: var(--primary);
  box-shadow: var(--shadow-sm);
}

.btn-light:hover {
  background-color: #f5f5f5;
  transform: translateY(-2px);
  box-shadow: var(--shadow);
}

.btn-outline-light {
  background-color: transparent;
  color: white;
  border: 2px solid white;
}

.btn-outline-light:hover {
  background-color: rgba(255, 255, 255, 0.1);
  transform: translateY(-2px);
}

.btn-full {
  width: 100%;
  display: flex;
}

/* Section Headers */
.section-header {
  text-align: center;
  margin-bottom: 3rem;
}

.section-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--text-dark);
  margin-bottom: 1rem;
  line-height: 1.2;
}

.section-description {
  color: var(--text-medium);
  max-width: 600px;
  margin: 0 auto;
  font-size: 1.125rem;
}

/* Animations */
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

.fade-in {
  animation: fadeIn 0.6s ease-out forwards;
}

/* Responsive Styles */
@media (min-width: 768px) {
  .hero-buttons, .cta-buttons {
    flex-direction: row;
  }
  
  .section-title {
    font-size: 3rem;
  }
}
</style>