<template>
  <section class="cta-section">
    <div class="container">
      <div class="cta-card">
        <div class="cta-content">
          <h2 class="cta-title">Ready to Start Your Learning Journey?</h2>
          <p class="cta-description">
            Join thousands of students who are already learning and growing with EduLearn.
            Get unlimited access to all courses with our flexible plans.
          </p>
          
          <div class="cta-features">
            <div class="cta-feature">
              <div class="feature-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                </svg>
              </div>
              <div class="feature-text">30-Day Money-Back Guarantee</div>
            </div>
            
            <div class="cta-feature">
              <div class="feature-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
              </div>
              <div class="feature-text">24/7 Support Available</div>
            </div>
            
            <div class="cta-feature">
              <div class="feature-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                  <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
                </svg>
              </div>
              <div class="feature-text">Course Updates Notifications</div>
            </div>
          </div>
          
          <div class="cta-buttons">
            <a href="#" class="btn btn-light">Sign Up Now</a>
            <a href="#" class="btn btn-outline-light">Learn More</a>
          </div>
        </div>
        
        <div class="cta-image">
          <img src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="Students learning" />
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
  position: relative;
}

.cta-card {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: var(--radius-lg);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.cta-content {
  padding: 3rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.cta-title {
  font-size: 2.5rem;
  font-weight: 800;
  margin-bottom: 1.5rem;
  line-height: 1.2;
}

.cta-description {
  max-width: 600px;
  margin: 0 auto 2.5rem;
  opacity: 0.9;
  font-size: 1.125rem;
  line-height: 1.6;
}

.cta-features {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-bottom: 2.5rem;
  width: 100%;
  max-width: 500px;
}

.cta-feature {
  display: flex;
  align-items: center;
  gap: 1rem;
  background: rgba(255, 255, 255, 0.1);
  padding: 1rem;
  border-radius: var(--radius);
}

.feature-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.2);
  width: 48px;
  height: 48px;
  border-radius: 50%;
  flex-shrink: 0;
}

.feature-text {
  font-weight: 600;
  font-size: 1.125rem;
}

.cta-buttons {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  max-width: 400px;
}

.btn-light {
  background-color: white;
  color: var(--primary);
  font-weight: 700;
  padding: 1rem 2rem;
  font-size: 1.125rem;
}

.btn-light:hover {
  background-color: #f5f5f5;
  transform: translateY(-2px);
}

.btn-outline-light {
  background-color: transparent;
  color: white;
  border: 2px solid white;
  font-weight: 700;
  padding: 1rem 2rem;
  font-size: 1.125rem;
}

.btn-outline-light:hover {
  background-color: rgba(255, 255, 255, 0.1);
  transform: translateY(-2px);
}

.cta-image {
  width: 100%;
  height: 300px;
  overflow: hidden;
}

.cta-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

@media (min-width: 768px) {
  .cta-buttons {
    flex-direction: row;
    justify-content: center;
  }
  
  .cta-features {
    flex-direction: row;
    justify-content: center;
  }
  
  .cta-feature {
    flex: 1;
  }
}

@media (min-width: 1024px) {
  .cta-card {
    flex-direction: row;
    align-items: stretch;
  }
  
  .cta-content {
    flex: 1;
    padding: 4rem;
    text-align: left;
    align-items: flex-start;
  }
  
  .cta-description {
    margin-left: 0;
    margin-right: 0;
  }
  
  .cta-image {
    flex: 1;
    height: auto;
  }
  
  .cta-features {
    margin-left: 0;
  }
  
  .cta-buttons {
    margin-left: 0;
  }
}
</style>