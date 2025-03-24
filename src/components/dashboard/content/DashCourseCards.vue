<template>
    <div class="courses-grid">
      <div v-for="(course, index) in courses" :key="index" class="course-card" @click="$emit('course-click', course)">
        <div class="course-image">
          <img :src="course.image" :alt="course.title" />
          <div class="course-overlay"></div>
          <h3 class="course-title">{{ course.title }}</h3>
        </div>
        <div class="course-details">
          <p class="instructor">Instructor: {{ course.instructor }}</p>
          <div class="progress-container">
            <div class="progress-header">
              <span>Progress</span>
              <span>{{ course.progress }}%</span>
            </div>
            <div class="progress-bar">
              <div class="progress-fill" :style="{ width: `${course.progress}%` }"></div>
            </div>
          </div>
          <div class="last-accessed">
            <Clock />
            <span>Last accessed: {{ course.lastAccessed }}</span>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { Clock } from 'lucide-vue-next';
  
  export default {
    props: {
      courses: {
        type: Array,
        required: true
      }
    },
    components: {
      Clock
    },
    emits: ['course-click']
  };
  </script>
  
  <style scoped>
  .courses-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 16px;
  }
  
  .course-card {
    border-radius: var(--radius-md);
    overflow: hidden;
    background-color: var(--bg-white);
    box-shadow: var(--shadow-sm);
    border: 1px solid var(--border-color);
    transition: var(--transition);
    cursor: pointer;
  }
  
  .course-card:hover {
    transform: translateY(-2px);
    box-shadow: var(--shadow-md);
  }
  
  .course-image {
    position: relative;
    height: 140px;
  }
  
  .course-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  .course-overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(to top, rgba(0, 0, 0, 0.7), transparent);
  }
  
  .course-title {
    position: absolute;
    bottom: 12px;
    left: 12px;
    right: 12px;
    color: white;
    font-size: 14px;
    font-weight: 500;
    line-height: 1.3;
  }
  
  .course-details {
    padding: 16px;
  }
  
  .instructor {
    font-size: 12px;
    color: var(--text-secondary);
    margin-bottom: 12px;
  }
  
  .progress-container {
    margin-bottom: 12px;
  }
  
  .progress-header {
    display: flex;
    justify-content: space-between;
    font-size: 12px;
    margin-bottom: 6px;
  }
  
  .progress-bar {
    height: 4px;
    background-color: #e5e7eb;
    border-radius: var(--radius-full);
    overflow: hidden;
  }
  
  .progress-fill {
    height: 100%;
    background-color: var(--primary-color);
    border-radius: var(--radius-full);
  }
  
  .last-accessed {
    display: flex;
    align-items: center;
    gap: 6px;
    font-size: 12px;
    color: var(--text-secondary);
  }
  
  .last-accessed svg {
    width: 12px;
    height: 12px;
  }
  
  @media (max-width: 768px) {
    .courses-grid {
      grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
    }
  }
  
  @media (max-width: 576px) {
    .courses-grid {
      grid-template-columns: 1fr;
    }
  }
  </style>