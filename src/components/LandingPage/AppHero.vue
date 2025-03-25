<template>
  <section class="hero-section">
    <div class="container">
      <div class="hero-content">
        <div class="hero-text fade-in">
          <h1 class="hero-title">Learn Without <span class="highlight">Limits</span></h1>
          <p class="hero-description">
            Discover thousands of courses taught by expert instructors. Take your skills to the next level with our online learning platform.
          </p>
          <div class="hero-stats">
            <div class="hero-stat">
              <span class="hero-stat-number">500+</span>
              <span class="hero-stat-label">Courses</span>
            </div>
            <div class="hero-stat">
              <span class="hero-stat-number">50k+</span>
              <span class="hero-stat-label">Students</span>
            </div>
            <div class="hero-stat">
              <span class="hero-stat-number">99%</span>
              <span class="hero-stat-label">Satisfaction</span>
            </div>
          </div>
          <div class="hero-buttons">
            <a href="#courses" class="btn btn-primary">Browse Courses</a>
            <a href="#" class="btn btn-outline">Try for Free</a>
          </div>
        </div>
        <div class="hero-image fade-in">
          <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80" alt="Students learning online" />
          <div class="hero-image-overlay"></div>
          <div class="hero-badge">
            <div class="badge-icon">🚀</div>
            <div class="badge-content">
              <div class="badge-title">New courses added weekly</div>
              <div class="badge-subtitle">Stay ahead of the curve</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="hero-shape">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fill="#ffffff" fill-opacity="1" d="M0,96L80,112C160,128,320,160,480,160C640,160,800,128,960,122.7C1120,117,1280,139,1360,149.3L1440,160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
      </svg>
    </div>
  </section>
</template>

<style scoped>
.hero-section {
  background: linear-gradient(135deg, #eef2ff 0%, #e0e7ff 100%);
  padding: .5rem .9rem;
  position: relative;
  overflow: hidden;
}

.hero-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  z-index: 10;
}

.hero-text {
  text-align: center;
  margin-bottom: 3rem;
}

.hero-title {
  font-size: 3rem;
  font-weight: 800;
  color: var(--text-dark);
  margin-bottom: 1.5rem;
  line-height: 1.2;
  letter-spacing: -0.5px;
}

.highlight {
  color: var(--primary);
  position: relative;
  display: inline-block;
}

.highlight::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 8px;
  background-color: rgba(79, 70, 229, 0.2);
  z-index: -1;
}

.hero-description {
  font-size: 1.25rem;
  color: var(--text-medium);
  margin-bottom: 2rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.hero-stats {
  display: flex;
  justify-content: center;
  gap: 2.5rem;
  margin-bottom: 2rem;
}

.hero-stat {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.hero-stat-number {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--primary);
}

.hero-stat-label {
  font-size: 0.875rem;
  color: var(--text-medium);
}

.hero-buttons {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 1rem;
}

.hero-image {
  position: relative;
  border-radius: var(--radius-lg);
  overflow: hidden;
  box-shadow: var(--shadow-md);
  width: 100%;
  max-width: 600px;
}

.hero-image img {
  width: 100%;
  height: auto;
  display: block;
  border-radius: var(--radius-lg);
  transition: transform 0.5s ease;
}

.hero-image:hover img {
  transform: scale(1.03);
}

.hero-image-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(to bottom, rgba(0,0,0,0.1), rgba(0,0,0,0.4));
  border-radius: var(--radius-lg);
}

.hero-badge {
  position: absolute;
  bottom: 20px;
  right: 20px;
  background-color: white;
  border-radius: var(--radius);
  padding: 0.75rem;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  box-shadow: var(--shadow);
  max-width: 250px;
}

.badge-icon {
  font-size: 1.5rem;
}

.badge-title {
  font-weight: 600;
  font-size: 0.875rem;
  color: var(--text-dark);
}

.badge-subtitle {
  font-size: 0.75rem;
  color: var(--text-medium);
}

.hero-shape {
  position: absolute;
  bottom: -1px;
  left: 0;
  width: 100%;
  line-height: 0;
}

@media (min-width: 768px) {
  .hero-content {
    flex-direction: row;
    align-items: center;
    gap: 4rem;
  }
  
  .hero-text {
    text-align: left;
    flex: 1;
    margin-bottom: 0;
  }
  
  .hero-image {
    flex: 1;
  }
  
  .hero-buttons {
    flex-direction: row;
  }
  
  .hero-stats {
    justify-content: flex-start;
  }
  
  .hero-title {
    font-size: 3.5rem;
  }
  
  .hero-description {
    margin-left: 0;
  }
}

@media (min-width: 1024px) {
  .hero-title {
    font-size: 4rem;
  }
}
</style>