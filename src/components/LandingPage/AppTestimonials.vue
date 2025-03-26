<template>
  <section id="testimonials" class="testimonials-section">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">What Our <span class="highlight">Students</span> Say</h2>
        <p class="section-description">
          Hear from our students about their learning experience with Btee.
        </p>
      </div>
      <div class="testimonials-grid">
        <div class="testimonial-card" v-for="(testimonial, index) in testimonials" :key="index">
          <div class="testimonial-quote">"</div>
          <p class="testimonial-text">{{ testimonial.text }}</p>
          <div class="testimonial-rating">★★★★★</div>
          <div class="testimonial-header">
            <img :src="testimonial.avatar" alt="Student" class="testimonial-avatar" />
            <div class="testimonial-author">
              <h4 class="author-name">{{ testimonial.name }}</h4>
              <p class="author-title">{{ testimonial.title }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const testimonials = [
  {
    name: 'Sarah Johnson',
    title: 'Web Development Student',
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
    text: 'The web development bootcamp completely changed my career path. I went from knowing nothing about coding to landing a job as a junior developer in just 6 months!'
  },
  {
    name: 'Michael Chen',
    title: 'Data Science Student',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    text: 'The data science course was incredibly comprehensive. The instructor explained complex concepts in a way that was easy to understand, and the projects helped solidify my learning.'
  },
  {
    name: 'Emily Rodriguez',
    title: 'Digital Marketing Student',
    avatar: 'https://randomuser.me/api/portraits/women/68.jpg',
    text: 'I\'ve taken several digital marketing courses, but this one stands out. The practical assignments and feedback from the instructor helped me improve my marketing strategy significantly.'
  }
];
</script>

<style scoped>
.testimonials-section {
  padding: 5rem 0;
  background-color: var(--background-light);
  position: relative;
  overflow: hidden;
}

.highlight {
  color: var(--primary);
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

.testimonials-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
}

.testimonial-card {
  background-color: var(--background-white);
  padding: 2.5rem;
  border-radius: var(--radius);
  box-shadow: var(--shadow);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  position: relative;
}

.testimonial-card:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-md);
}

.testimonial-quote {
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  font-size: 4rem;
  line-height: 1;
  color: var(--primary-light);
  font-family: 'Georgia', serif;
  font-weight: 700;
}

.testimonial-text {
  color: var(--text-medium);
  margin-bottom: 1.5rem;
  font-style: italic;
  line-height: 1.7;
  position: relative;
  z-index: 1;
}

.testimonial-rating {
  color: var(--secondary);
  margin-bottom: 1.5rem;
  font-size: 1.25rem;
}

.testimonial-header {
  display: flex;
  align-items: center;
}

.testimonial-avatar {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  margin-right: 1rem;
  border: 3px solid var(--primary-light);
}

.author-name {
  font-weight: 700;
  color: var(--text-dark);
  margin-bottom: 0.25rem;
}

.author-title {
  font-size: 0.875rem;
  color: var(--text-medium);
}

@media (min-width: 768px) {
  .testimonials-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>