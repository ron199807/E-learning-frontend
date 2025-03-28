<template>
  <section id="home" class="hero">
    <div class="hero__container">
      <div class="hero__content">
        <div class="hero__text">
          <h1 class="hero__title">
            Learn Without <span class="hero__highlight">Limits</span>
          </h1>
          <p class="hero__description">
            Discover thousands of courses taught by expert instructors. Take your skills to the next level with our online learning platform.
          </p>
          
          <div class="hero__stats">
            <div class="hero__stat">
              <span class="hero__stat-number">500+</span>
              <span class="hero__stat-label">Courses</span>
            </div>
            <div class="hero__stat">
              <span class="hero__stat-number">50k+</span>
              <span class="hero__stat-label">Students</span>
            </div>
            <div class="hero__stat">
              <span class="hero__stat-number">99%</span>
              <span class="hero__stat-label">Satisfaction</span>
            </div>
          </div>
          
          <div class="hero__cta">
            <a href="#courses" class="hero__button hero__button--primary">
              Browse Courses
              <span class="hero__button-icon">→</span>
            </a>
            <a href="#" class="hero__button hero__button--secondary">
              Try for Free
            </a>
          </div>
        </div>
        
        <div class="hero__media">
          <div class="hero__image-wrapper">
            <img 
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80" 
              alt="Students learning online" 
              class="hero__image"
              loading="lazy"
            />
            <div class="hero__image-overlay"></div>
            
            <div class="hero__badge">
              <div class="hero__badge-icon">🚀</div>
              <div class="hero__badge-content">
                <div class="hero__badge-title">New courses added weekly</div>
                <div class="hero__badge-subtitle">Stay ahead of the curve</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <div class="hero__wave">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none">
        <path fill="#ffffff" d="M0,96L80,112C160,128,320,160,480,160C640,160,800,128,960,122.7C1120,117,1280,139,1360,149.3L1440,160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
      </svg>
    </div>
  </section>
</template>

<style scoped>
/* Base Styles */
.hero {
  position: relative;
  background: linear-gradient(135deg, #eef2ff 0%, #e0e7ff 100%);
  padding: 5rem 1.5rem 8rem;
  overflow: hidden;
}

.hero__container {
  max-width: 1280px;
  margin: 0 auto;
}

.hero__content {
  display: flex;
  flex-direction: column;
  gap: 3rem;
  position: relative;
  z-index: 10;
}

/* Text Content */
.hero__text {
  text-align: center;
}

.hero__title {
  font-size: 2.5rem;
  font-weight: 800;
  line-height: 1.2;
  letter-spacing: -0.05em;
  color: #111827;
  margin-bottom: 1.5rem;
}

.hero__highlight {
  color: #4f46e5;
  position: relative;
  display: inline-block;
}

.hero__highlight::after {
  content: '';
  position: absolute;
  bottom: 0.15em;
  left: 0;
  width: 100%;
  height: 0.35em;
  background-color: rgba(79, 70, 229, 0.2);
  border-radius: 0.5em;
  z-index: -1;
  transform: rotate(-1deg);
}

.hero__description {
  font-size: 1.125rem;
  line-height: 1.6;
  color: #4b5563;
  margin-bottom: 2rem;
  max-width: 36rem;
  margin-left: auto;
  margin-right: auto;
}

/* Stats */
.hero__stats {
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-bottom: 2rem;
}

.hero__stat {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.hero__stat-number {
  font-size: 1.5rem;
  font-weight: 700;
  color: #4f46e5;
  line-height: 1;
}

.hero__stat-label {
  font-size: 0.875rem;
  color: #6b7280;
  margin-top: 0.25rem;
}

/* Call to Action */
.hero__cta {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
}

.hero__button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 0.5rem;
  transition: all 0.2s ease;
  text-decoration: none;
}

.hero__button--primary {
  background-color: #4f46e5;
  color: white;
  box-shadow: 0 4px 6px -1px rgba(79, 70, 229, 0.1), 0 2px 4px -1px rgba(79, 70, 229, 0.06);
}

.hero__button--primary:hover {
  background-color: #4338ca;
  transform: translateY(-1px);
  box-shadow: 0 10px 15px -3px rgba(79, 70, 229, 0.1), 0 4px 6px -2px rgba(79, 70, 229, 0.05);
}

.hero__button--secondary {
  background-color: white;
  color: #4f46e5;
  border: 1px solid #e5e7eb;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
}

.hero__button--secondary:hover {
  background-color: #f9fafb;
  border-color: #d1d5db;
  transform: translateY(-1px);
}

.hero__button-icon {
  margin-left: 0.5rem;
  transition: transform 0.2s ease;
}

.hero__button--primary:hover .hero__button-icon {
  transform: translateX(2px);
}

/* Media Content */
.hero__media {
  position: relative;
}

.hero__image-wrapper {
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
  transition: transform 0.3s ease;
}

.hero__image-wrapper:hover {
  transform: translateY(-4px);
}

.hero__image {
  width: 100%;
  height: auto;
  display: block;
}

.hero__image-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.1));
}

/* Badge */
.hero__badge {
  position: absolute;
  bottom: 1.5rem;
  right: 1.5rem;
  background-color: white;
  border-radius: 0.75rem;
  padding: 0.75rem 1rem;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  max-width: 16rem;
}

.hero__badge-icon {
  font-size: 1.5rem;
  flex-shrink: 0;
}

.hero__badge-content {
  display: flex;
  flex-direction: column;
}

.hero__badge-title {
  font-weight: 600;
  font-size: 0.875rem;
  color: #111827;
}

.hero__badge-subtitle {
  font-size: 0.75rem;
  color: #6b7280;
  margin-top: 0.125rem;
}

/* Wave Shape */
.hero__wave {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  line-height: 0;
}

.hero__wave svg {
  width: calc(100% + 1.3px);
  height: 8rem;
}

/* Responsive Styles */
@media (min-width: 768px) {
  .hero {
    padding: 6rem 2rem 10rem;
  }
  
  .hero__content {
    flex-direction: row;
    align-items: center;
    gap: 4rem;
  }
  
  .hero__text {
    text-align: left;
    flex: 1;
  }
  
  .hero__description {
    margin-left: 0;
    margin-right: 0;
  }
  
  .hero__stats {
    justify-content: flex-start;
  }
  
  .hero__cta {
    flex-direction: row;
    justify-content: flex-start;
  }
  
  .hero__media {
    flex: 1;
  }
}

@media (min-width: 1024px) {
  .hero {
    padding: 8rem 2rem 12rem;
  }
  
  .hero__title {
    font-size: 3.5rem;
  }
  
  .hero__description {
    font-size: 1.25rem;
  }
}

@media (min-width: 1280px) {
  .hero__title {
    font-size: 4rem;
  }
}
</style>