<template>
  <div class="progress-container">
    <div v-for="(course, index) in courses" :key="index" class="progress-card">
      <div class="progress-header">
        <div class="course-info">
          <h4 class="course-title">{{ course.title }}</h4>
          <p class="course-stats">
            {{ course.modulesCompleted || Math.floor(course.progress / 10) }}/{{ course.totalModules || 10 }} modules
            <span class="divider">•</span>
            {{ getProgressText(course.progress) }}
          </p>
        </div>
        <span class="progress-percent">{{ course.progress }}%</span>
      </div>
      
      <div class="progress-track">
        <div 
          class="progress-indicator" 
          :style="{ width: `${course.progress}%` }"
          :class="getProgressClass(course.progress)"
        ></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    courses: {
      type: Array,
      required: true,
      validator: (courses) => {
        return courses.every(course => 'title' in course && 'progress' in course)
      }
    }
  },
  methods: {
    getProgressClass(progress) {
      if (progress < 30) return 'progress-low'
      if (progress < 70) return 'progress-medium'
      return 'progress-high'
    },
    getProgressText(progress) {
      if (progress < 30) return 'Getting started'
      if (progress < 70) return 'Making progress'
      if (progress < 100) return 'Almost there'
      return 'Completed'
    }
  }
}
</script>

<style scoped>
.progress-container {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.progress-card {
  padding: 20px;
  background-color: #ffffff;
  border-radius: 12px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
  border: 1px solid #f3f4f6;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.progress-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03);
}

.progress-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 16px;
}

.course-info {
  flex: 1;
}

.course-title {
  font-size: 15px;
  font-weight: 600;
  color: #111827;
  margin-bottom: 6px;
  line-height: 1.4;
}

.course-stats {
  font-size: 13px;
  color: #6b7280;
  display: flex;
  align-items: center;
  gap: 6px;
}

.divider {
  color: #d1d5db;
}

.progress-percent {
  font-size: 14px;
  font-weight: 600;
  color: #111827;
  margin-left: 12px;
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
  transition: width 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}

.progress-high {
  background-color: #10b981;
}

.progress-medium {
  background-color: #f59e0b;
}

.progress-low {
  background-color: #ef4444;
}

@media (max-width: 768px) {
  .progress-card {
    padding: 16px;
  }
  
  .course-title {
    font-size: 14px;
  }
  
  .course-stats {
    font-size: 12px;
  }
}
</style>