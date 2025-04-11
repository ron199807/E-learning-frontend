<template>
  <div class="courses-section">
    <div class="section-header">
      <h2>Courses You May Like</h2>
      <p class="section-subtitle">Based on your interests and learning history</p>
    </div>
    
    <div class="courses-list">
      <div 
        v-for="course in courses" 
        :key="course.id" 
        class="course-card"
        @click="$emit('course-click', course)"
      >
        <div class="course-icon-wrapper">
          <component :is="course.icon" class="course-icon" />
        </div>
        <div class="course-content">
          <div class="course-header">
            <h3 class="course-title">{{ course.title }}</h3>
            <span class="enroll-badge">
              <ArrowRight class="badge-icon" />
              <span>Enroll Now</span>
            </span>
          </div>
          <p class="course-category">{{ course.category }}</p>
          <div class="course-meta">
            <div class="meta-item">
              <Clock class="meta-icon" />
              <span>{{ course.duration }}</span>
            </div>
            <div class="meta-item">
              <BarChart2 class="meta-icon" />
              <span>{{ course.level }}</span>
            </div>
          </div>
          <div class="course-footer">
            <div class="rating">
              <Star class="star-icon" v-for="i in 5" :key="i" 
                :fill="i <= course.rating ? '#f59e0b' : '#d1d5db'" />
              <span>({{ course.reviews }})</span>
            </div>
            <span class="price" v-if="course.price > 0">${{ course.price }}</span>
            <span class="price free" v-else>Free</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { 
  Code, 
  Database, 
  Paintbrush, 
  Globe, 
  Clock, 
  BarChart2, 
  Star, 
  ArrowRight 
} from 'lucide-vue-next';

export default {
  emits: ['course-click'],
  data() {
    return {
      courses: [
        {
          id: 1,
          title: "Advanced JavaScript Patterns",
          category: "Web Development",
          duration: "24 hours",
          level: "Intermediate",
          rating: 4,
          reviews: 128,
          price: 89.99,
          icon: Code
        },
        {
          id: 2,
          title: "UX Design Fundamentals",
          category: "Design",
          duration: "18 hours",
          level: "Beginner",
          rating: 5,
          reviews: 256,
          price: 0,
          icon: Paintbrush
        },
        {
          id: 3,
          title: "Data Science Essentials",
          category: "Data Science",
          duration: "36 hours",
          level: "Advanced",
          rating: 4,
          reviews: 312,
          price: 119.99,
          icon: Database
        },
        {
          id: 4,
          title: "Modern Web Applications with Vue 3",
          category: "Web Development",
          duration: "30 hours",
          level: "Intermediate",
          rating: 5,
          reviews: 198,
          price: 99.99,
          icon: Globe
        }
      ]
    };
  },
  components: {
    Code, 
    Database, 
    Paintbrush, 
    Globe, 
    Clock, 
    BarChart2, 
    Star, 
    ArrowRight
  }
};
</script>

<style scoped>
.courses-section {
  background-color: #ffffff;
  border-radius: 12px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  padding: 24px;
  margin-bottom: 32px;
}

.section-header {
  margin-bottom: 24px;
}

.section-header h2 {
  font-size: 1.5rem;
  font-weight: 600;
  color: #111827;
  margin-bottom: 4px;
}

.section-subtitle {
  font-size: 0.875rem;
  color: #6b7280;
}

.courses-list {
  display: grid;
  gap: 20px;
}

.course-card {
  display: flex;
  gap: 16px;
  padding: 20px;
  border-radius: 10px;
  background-color: #ffffff;
  border: 1px solid #e5e7eb;
  transition: all 0.2s ease;
  cursor: pointer;
}

.course-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  border-color: #3b82f6;
}

.course-icon-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border-radius: 8px;
  background-color: #eff6ff;
  color: #3b82f6;
  flex-shrink: 0;
}

.course-icon {
  width: 24px;
  height: 24px;
}

.course-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.course-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 12px;
}

.course-title {
  font-size: 1.125rem;
  font-weight: 600;
  color: #111827;
  margin: 0;
}

.enroll-badge {
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 6px 12px;
  font-size: 0.75rem;
  font-weight: 600;
  border-radius: 9999px;
  background-color: #e0f2fe;
  color: #0369a1;
  transition: all 0.2s ease;
}

.badge-icon {
  width: 14px;
  height: 14px;
}

.course-card:hover .enroll-badge {
  background-color: #0369a1;
  color: white;
}

.course-category {
  font-size: 0.875rem;
  color: #6b7280;
  margin: 0;
}

.course-meta {
  display: flex;
  gap: 16px;
  margin-top: 4px;
}

.meta-item {
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 0.8125rem;
  color: #6b7280;
}

.meta-icon {
  width: 14px;
  height: 14px;
}

.course-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 12px;
}

.rating {
  display: flex;
  align-items: center;
  gap: 4px;
}

.star-icon {
  width: 16px;
  height: 16px;
  color: #d1d5db;
}

.rating span {
  font-size: 0.8125rem;
  color: #6b7280;
  margin-left: 4px;
}

.price {
  font-size: 1rem;
  font-weight: 600;
  color: #111827;
}

.price.free {
  color: #10b981;
}
</style>