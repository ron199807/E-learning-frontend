<template>
  <div class="course-grid-container">
    <div 
      v-for="(course, index) in courses" 
      :key="index" 
      class="course-card"
      @click="$emit('course-click', course)"
    >
      <div class="card-media">
        <img 
          :src="course.image" 
          :alt="course.title" 
          class="course-image"
          loading="lazy"
        >
        <div class="image-overlay"></div>
        <div class="course-badge" v-if="course.progress === 100">
          <span>Completed</span>
        </div>
        <h3 class="course-title">{{ course.title }}</h3>
      </div>

      <div class="card-content">
        <p class="course-instructor">By {{ course.instructor }}</p>
        
        <div class="progress-section">
          <div class="progress-header">
            <span class="progress-label">Your progress</span>
            <span class="progress-value">{{ course.progress }}%</span>
          </div>
          <div class="progress-track">
            <div 
              class="progress-indicator" 
              :style="{ width: `${course.progress}%` }"
              :class="{
                'complete': course.progress === 100,
                'high': course.progress >= 70 && course.progress < 100,
                'medium': course.progress >= 30 && course.progress < 70,
                'low': course.progress < 30
              }"
            ></div>
          </div>
        </div>

        <div class="last-accessed">
          <Clock class="clock-icon" />
          <span>Last viewed {{ formatLastAccessed(course.lastAccessed) }}</span>
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
      required: true,
      validator: (courses) => {
        return courses.every(course => 
          'title' in course && 
          'image' in course && 
          'instructor' in course && 
          'progress' in course &&
          'lastAccessed' in course
        )
      }
    }
  },
  components: {
    Clock
  },
  emits: ['course-click'],
  methods: {
    formatLastAccessed(date) {
      // Add your date formatting logic here
      return date; // Return formatted date
    }
  }
};
</script>

<style scoped>
.course-grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 24px;
  padding: 4px; /* Creates space for hover effect */
}

.course-card {
  background: #ffffff;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  border: 1px solid #f3f4f6;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  position: relative;
}

.course-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
}

.card-media {
  position: relative;
  height: 160px;
}

.course-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.image-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.7) 100%);
}

.course-badge {
  position: absolute;
  top: 12px;
  right: 12px;
  background: #10b981;
  color: white;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 11px;
  font-weight: 600;
  z-index: 1;
}

.course-title {
  position: absolute;
  bottom: 16px;
  left: 16px;
  right: 16px;
  margin: 0;
  color: white;
  font-size: 16px;
  font-weight: 600;
  line-height: 1.4;
  z-index: 1;
}

.card-content {
  padding: 16px;
}

.course-instructor {
  font-size: 13px;
  color: #6b7280;
  margin: 0 0 16px 0;
}

.progress-section {
  margin-bottom: 16px;
}

.progress-header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
}

.progress-label {
  font-size: 12px;
  font-weight: 500;
  color: #4b5563;
}

.progress-value {
  font-size: 12px;
  font-weight: 600;
  color: #111827;
}

.progress-track {
  height: 6px;
  background-color: #f3f4f6;
  border-radius: 3px;
  overflow: hidden;
}

.progress-indicator {
  height: 100%;
  border-radius: 3px;
  transition: width 0.6s ease;
}

.progress-indicator.complete {
  background-color: #10b981;
}

.progress-indicator.high {
  background-color: #3b82f6;
}

.progress-indicator.medium {
  background-color: #f59e0b;
}

.progress-indicator.low {
  background-color: #ef4444;
}

.last-accessed {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 12px;
  color: #6b7280;
}

.clock-icon {
  width: 14px;
  height: 14px;
  color: #9ca3af;
}

@media (max-width: 1024px) {
  .course-grid-container {
    gap: 20px;
  }
}

@media (max-width: 768px) {
  .course-grid-container {
    grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  }
  
  .card-media {
    height: 140px;
  }
}

@media (max-width: 480px) {
  .course-grid-container {
    grid-template-columns: 1fr;
  }
  
  .course-title {
    font-size: 15px;
  }
}
</style>