<template>
  <section id="pricing" class="pricing-section">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">Simple, <span class="highlight">Transparent</span> Pricing</h2>
        <p class="section-description">
          Choose the plan that works best for your learning goals.
        </p>
      </div>
      <div class="pricing-grid">
        <div class="pricing-card" v-for="(plan, index) in plans" :key="index" :class="{ 'pricing-card-popular': plan.popular }">
          <div v-if="plan.popular" class="popular-badge">POPULAR</div>
          <h3 class="pricing-title">{{ plan.title }}</h3>
          <div class="pricing-price">{{ plan.currency }}{{ plan.price }}<span class="pricing-period">{{ plan.period }}</span></div>
          <ul class="pricing-features">
            <li class="pricing-feature" v-for="(feature, featureIndex) in plan.features" :key="featureIndex" :class="{ 'disabled': !feature.included }">
              <span class="feature-icon" v-html="feature.included ? checkIcon : xIcon"></span>
              <span>{{ feature.text }}</span>
            </li>
          </ul>
          <a :href="plan.link" class="btn" :class="plan.popular ? 'btn-light' : 'btn-outline'">{{ plan.buttonText }}</a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const checkIcon = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <polyline points="20 6 9 17 4 12"></polyline>
</svg>`;

const xIcon = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <line x1="18" y1="6" x2="6" y2="18"></line>
  <line x1="6" y1="6" x2="18" y2="18"></line>
</svg>`;

const plans = [
  {
    title: 'Basic',
    price: '9.99',
    currency: '$',
    period: '/month',
    popular: false,
    buttonText: 'Get Started',
    link: '#',
    features: [
      { text: 'Access to 50+ basic courses', included: true },
      { text: 'Course completion certificates', included: true },
      { text: 'Basic community support', included: true },
      { text: 'Advanced courses', included: false },
      { text: '1-on-1 mentoring', included: false }
    ]
  },
  {
    title: 'Pro',
    price: '19.99',
    currency: '$',
    period: '/month',
    popular: true,
    buttonText: 'Get Started',
    link: '#',
    features: [
      { text: 'Access to all 500+ courses', included: true },
      { text: 'Course completion certificates', included: true },
      { text: 'Priority community support', included: true },
      { text: 'Advanced courses included', included: true },
      { text: '1-on-1 mentoring', included: false }
    ]
  },
  {
    title: 'Premium',
    price: '39.99',
    currency: '$',
    period: '/month',
    popular: false,
    buttonText: 'Get Started',
    link: '#',
    features: [
      { text: 'Access to all 500+ courses', included: true },
      { text: 'Course completion certificates', included: true },
      { text: 'Priority community support', included: true },
      { text: 'Advanced courses included', included: true },
      { text: 'Weekly 1-on-1 mentoring', included: true }
    ]
  }
];
</script>

<style scoped>
:root {
    --primary-color: #2563eb;
    --primary-light: #dbeafe;
    --secondary-color: #475569;
    --accent-color: #f59e0b;
    --success-color: #10b981;
    --danger-color: #ef4444;
    --text-primary: #1e293b;
    --text-secondary: #64748b;
    --text-light: #94a3b8;
    --bg-light: #f8fafc;
    --bg-white: #ffffff;
    --border-color: #e2e8f0;
    --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05);
    --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
    --radius-sm: 4px;
    --radius-md: 8px;
    --radius-lg: 12px;
    --radius-full: 9999px;
    --transition: all 0.2s ease;
  }


.pricing-section {
  padding: 5rem 0;
  background-color: var(--bg-light);
}

.highlight {
  color: var(--text-primary);
  position: relative;
}

.highlight::after {
  content: '';
  position: absolute;
  bottom: 5px;
  left: 0;
  width: 100%;
  height: 8px;
  background-color: rgba(79, 70, 229, 0.2);
  z-index: -1;
}

.pricing-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  margin-top: 3rem;
}

.pricing-card {
  background-color: var(--bg-white);
  padding: 2.5rem;
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  position: relative;
  border: 1px solid rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
}

.btn {
  text-decoration: none;
  font-weight: bold;
  border-radius: var(--radius-md);
}

.btn-outline {
  background: var(--primary-color);
  color: var(--bg-white);
  
}

.btn-outline:hover {
background: #0e54df;
}

.pricing-card:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-md);
}

.pricing-card-popular {
  background: var(--primary-color);
  color: white;
  transform: scale(1.05);
  z-index: 1;
}

.pricing-card-popular:hover {
  transform: scale(1.05) translateY(-5px);
}

.popular-badge {
  position: absolute;
  top: 0;
  right: 2rem;
  background: var(--success-color);
  color: white;
  font-size: 0.75rem;
  font-weight: 700;
  padding: 0.5rem 1rem;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  box-shadow: var(--shadow-sm);
}

.pricing-title {
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
}

.pricing-price {
  font-size: 3rem;
  font-weight: 800;
  margin-bottom: 2rem;
  line-height: 1;
}

.pricing-period {
  font-size: 1rem;
  font-weight: 400;
  color: inherit;
  opacity: 0.7;
}

.pricing-features {
  margin-bottom: 2rem;
  flex-grow: 1;
}

.pricing-feature {
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  font-size: 1rem;
}

.pricing-feature.disabled {
  opacity: 0.5;
}

.feature-icon {
  margin-right: 0.75rem;
  display: flex;
  align-items: center;
}

.pricing-card-popular .feature-icon svg {
  stroke: red;
}

.pricing-card-popular .btn-light {
  background: var(--bg-white);
  color: var(--text-primary);
  text-decoration: none;
  border-radius: .3rem;
}

.pricing-card-popular .btn-light:hover {
  background-color: rgba(255, 255, 255, 0.9);
}

@media (min-width: 768px) {
  .pricing-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>