<template>
  <section class="cta-section">
    <div class="cta-shape-top">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fill="#ffffff" fill-opacity="1" d="M0,96L80,112C160,128,320,160,480,160C640,160,800,128,960,122.7C1120,117,1280,139,1360,149.3L1440,160L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path>
      </svg>
    </div>
    <div class="container">
      <div class="cta-content">
        <h2 class="cta-title">Ready to Start Your Learning Journey?</h2>
        <p class="cta-description">
          Join thousands of students who are already learning and growing with EduLearn.
        </p>
        <div class="cta-buttons">
          <a href="#" class="btn btn-light">Sign Up Now</a>
          <a href="#" class="btn btn-outline-light">Learn More</a>
        </div>
        <div class="cta-stats">
          <div class="cta-stat">
            <div class="cta-stat-number">30-Day</div>
            <div class="cta-stat-label">Money-Back Guarantee</div>
          </div>
          <div class="cta-stat">
            <div class="cta-stat-number">24/7</div>
            <div class="cta-stat-label">Support</div>
          </div>
          <div class="cta-stat">
            <div class="cta-stat-number">Unlimited</div>
            <div class="cta-stat-label">Access</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.cta-section {
  padding: 5rem 0;
  background: linear-gradient(135deg, #4f46e5 0%, #6366f1 100%);
  color: white;
  text-align: center;
  position: relative;
  overflow: hidden;
}

.cta-shape-top {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  line-height: 0;
  transform: rotate(180deg);
}

.cta-content {
  position: relative;
  z-index: 10;
  max-width: 800px;
  margin: 0 auto;
}

.cta-title {
  font-size: 2.5rem;
  font-weight: 800;
  margin-bottom: 1.5rem;
  line-height: 1.2;
}

.cta-description {
  max-width: 600px;
  margin: 0 auto 2rem;
  opacity: 0.9;
  font-size: 1.125rem;
  line-height: 1.6;
}

.cta-buttons {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 400px;
  margin: 0 auto 2.5rem;
}

.cta-stats {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2.5rem;
  margin-top: 1rem;
}

.cta-stat {
  text-align: center;
}

.cta-stat-number {
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 0.25rem;
}

.cta-stat-label {
  font-size: 0.875rem;
  opacity: 0.8;
}

@media (min-width: 768px) {
  .cta-buttons {
    flex-direction: row;
    justify-content: center;
  }
  
  .cta-title {
    font-size: 3rem;
  }
}
</style>