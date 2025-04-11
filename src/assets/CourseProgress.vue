<template>
  <h2 class="section-title">Your Courses</h2>
  <div class="courses-grid">
    <div class="course-card animate-slideUp" style="animation-delay: 0.1s" v-for="(course, index) in courses" :key="index">
      <div class="course-content">
        <div class="course-header">
          <h3 class="course-title">{{ course.title }}</h3>
          <span class="course-badge">{{ course.status }}</span>
        </div>
        <div class="course-time">
          <Clock class="course-time-icon" />
          <p>{{ course.timeLeft }} left</p>
        </div>
        <div class="course-progress">
          <div class="progress-header">
            <span class="progress-label">Progress</span>
            <span class="progress-percent">{{ course.progress }}%</span>
          </div>
          <div class="progress-bar-bg">
            <div class="progress-bar-fill" :style="{ width: course.progress + '%' }"></div>
          </div>
        </div>
        <div class="course-actions">
          <button class="continue-btn">Continue Learning</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Clock } from 'lucide-vue-next';
import { onMounted } from 'vue';

const courses = [
  {
    title: 'Web Development Fundamentals',
    status: 'In Progress',
    timeLeft: '8 hours',
    progress: 65
  },
  {
    title: 'Data Science Essentials',
    status: 'In Progress',
    timeLeft: '12 hours',
    progress: 40
  },
  {
    title: 'UX Design Principles',
    status: 'In Progress',
    timeLeft: '5 hours',
    progress: 75
  }
];

onMounted(() => {
  // Animate progress bars after component is mounted
  const progressBars = document.querySelectorAll('.progress-bar-fill');
  progressBars.forEach(bar => {
    const width = bar.style.width;
    bar.style.width = '0';
    setTimeout(() => {
      bar.style.width = width;
    }, 300);
  });
});
</script>

<style scoped>
/* Section title styles */
.section-title {
  margin-bottom: 1rem;
  font-size: 1.125rem;
  font-weight: 500;
  line-height: 1.5;
  color: #111827;
}

/* Courses grid styles */
.courses-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.25rem;
  margin-bottom: 2rem;
}

@media (min-width: 640px) {
  .courses-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .courses-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

.course-card {
  overflow: hidden;
  border-radius: 0.5rem;
  background-color: white;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  transition: all 0.3s;
}

.course-card:hover {
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
}

.course-content {
  padding: 1.25rem;
}

.course-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.75rem;
}

.course-title {
  font-size: 0.875rem;
  font-weight: 500;
  color: #111827;
}

.course-badge {
  display: inline-flex;
  align-items: center;
  border-radius: 9999px;
  background-color: #dbeafe;
  padding: 0.125rem 0.625rem;
  font-size: 0.75rem;
  font-weight: 500;
  color: #1e40af;
}

.course-time {
  display: flex;
  align-items: center;
  font-size: 0.875rem;
  color: #6b7280;
  margin-bottom: 0.5rem;
}

.course-time-icon {
  margin-right: 0.375rem;
  height: 1rem;
  width: 1rem;
  flex-shrink: 0;
  color: #9ca3af;
}

.course-progress {
  margin-top: 1rem;
}

.progress-header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.25rem;
}

.progress-label, .progress-percent {
  font-size: 0.75rem;
  font-weight: 500;
  color: #6b7280;
}

.progress-bar-bg {
  height: 0.5rem;
  width: 100%;
  border-radius: 9999px;
  background-color: #e5e7eb;
}

.progress-bar-fill {
  height: 0.5rem;
  border-radius: 9999px;
  background-color: #3b82f6;
  transition: width 1s ease-in-out;
}

.course-actions {
  margin-top: 1rem;
}

.continue-btn {
  display: inline-flex;
  align-items: center;
  border-radius: 0.375rem;
  border: 1px solid transparent;
  background-color: #2563eb;
  padding: 0.5rem 0.75rem;
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 1;
  color: white;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  transition: all 0.3s;
}

.continue-btn:hover {
  background-color: #1d4ed8;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  transform: translateY(-1px);
}

.continue-btn:active {
  transform: translateY(0);
}

/* Animations */
.animate-slideUp {
  animation: slideUp 0.5s ease-out forwards;
  opacity: 0;
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>