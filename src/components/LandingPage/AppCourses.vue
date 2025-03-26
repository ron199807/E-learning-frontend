<template>
  <section id="courses" class="courses-section">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">Popular <span class="highlight">Courses</span></h2>
        <p class="section-description">
          Explore our most popular courses and start learning today.
        </p>
      </div>
      <div class="courses-grid">
        <div class="course-card" v-for="(course, index) in courses" :key="index">
          <div class="course-image-container">
            <img :src="course.image" :alt="course.title" class="course-image" />
            <div class="course-overlay">
              <a href="#" class="btn btn-light">Preview Course</a>
            </div>
            <div class="course-level">{{ course.level }}</div>
          </div>
          <div class="course-content">
            <div class="course-meta">
              <span class="course-category">{{ course.category }}</span>
              <span class="course-rating">{{ course.rating }} ⭐ ({{ course.reviews }})</span>
            </div>
            <h3 class="course-title">{{ course.title }}</h3>
            <p class="course-description">{{ course.description }}</p>
            <div class="course-details">
              <div class="course-detail">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
                <span>{{ course.duration }}</span>
              </div>
              <div class="course-detail">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M18 8h1a4 4 0 0 1 0 8h-1"></path>
                  <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path>
                  <line x1="6" y1="1" x2="6" y2="4"></line>
                  <line x1="10" y1="1" x2="10" y2="4"></line>
                  <line x1="14" y1="1" x2="14" y2="4"></line>
                </svg>
                <span>{{ course.lessons }} lessons</span>
              </div>
            </div>
            <div class="course-footer">
              <span class="course-price">${{ course.price }}</span>
              <a href="#" class="btn btn-primary btn-sm">Enroll Now</a>
            </div>
          </div>
        </div>
      </div>
      <div class="view-all-container">
        <a href="#" class="btn btn-outline">View All Courses</a>
      </div>
    </div>
  </section>
</template>

<script setup>
const courses = [
  {
    title: 'Complete Web Development Bootcamp',
    description: 'Learn HTML, CSS, JavaScript, React, Node.js and more to become a full-stack developer.',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80',
    category: 'Development',
    rating: '4.9',
    reviews: '2.5k',
    price: '89.99',
    level: 'Beginner',
    duration: '12 weeks',
    lessons: 120
  },
  {
    title: 'Data Science and Machine Learning',
    description: 'Master data analysis, visualization, and machine learning algorithms with Python.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    category: 'Data Science',
    rating: '4.8',
    reviews: '1.8k',
    price: '94.99',
    level: 'Intermediate',
    duration: '10 weeks',
    lessons: 85
  },
  {
    title: 'Digital Marketing Masterclass',
    description: 'Learn SEO, social media marketing, email campaigns, and content strategy.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1115&q=80',
    category: 'Marketing',
    rating: '4.7',
    reviews: '1.2k',
    price: '79.99',
    level: 'All Levels',
    duration: '8 weeks',
    lessons: 72
  }
];
</script>

<style scoped>
.courses-section {
  padding: 5rem 0;
  background-color: var(--background-white);
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

.courses-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
}

.course-card {
  background-color: var(--background-white);
  border-radius: var(--radius);
  overflow: hidden;
  box-shadow: var(--shadow);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.course-card:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-md);
}

.course-image-container {
  position: relative;
  overflow: hidden;
}

.course-image {
  width: 100%;
  height: 220px;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.course-card:hover .course-image {
  transform: scale(1.05);
}

.course-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.course-card:hover .course-overlay {
  opacity: 1;
}

/* buttons */
.btn-outline {
  padding: .5rem 1rem;
  background: blue;
  border-radius: .5rem;
  color: #fff;
}

.btn-outline:hover {
  background: rgb(14, 14, 209);
}

.course-level {
  position: absolute;
  top: 1rem;
  left: 1rem;
  background-color: var(--primary);
  color: white;
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 600;
}

.course-content {
  padding: 1.5rem;
}

.course-meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}

.course-category {
  background-color: var(--primary-light);
  color: var(--primary);
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 600;
}

.course-rating {
  font-size: 0.875rem;
  color: var(--text-medium);
}

.course-title {
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 0.75rem;
  color: var(--text-dark);
  line-height: 1.4;
}

.course-description {
  color: var(--text-medium);
  margin-bottom: 1.25rem;
  font-size: 0.95rem;
  line-height: 1.6;
}

.course-details {
  display: flex;
  gap: 1.5rem;
  margin-bottom: 1.25rem;
}

.course-detail {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--text-medium);
  font-size: 0.875rem;
}

.course-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 1.25rem;
  border-top: 1px solid rgba(0, 0, 0, 0.05);
}

a {
  text-decoration: none;
  color: #fff;
  font-weight: bold;
}

.course-footer a {
  background: skyblue;
  border-radius: .5rem;
}

.course-footer a:hover {
  background: #12a1df;
}

.course-price {
  font-weight: 700;
  color: var(--primary);
  font-size: 1.25rem;
}

.btn-sm {
  padding: 0.5rem 1rem;
  font-size: 0.875rem;
}

.view-all-container {
  text-align: center;
  margin-top: 3rem;
}

@media (min-width: 768px) {
  .courses-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .courses-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>