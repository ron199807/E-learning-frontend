<template>
  <div class="panel animate-slideUp" style="animation-delay: 0.4s">
    <div class="panel-header">
      <h3 class="panel-title">Courses You May Like</h3>
    </div>
    <div class="panel-body">
      <ul class="course-list">
        <li v-for="(course, index) in recommendedCourses" :key="index" class="course-list-item">
          <div class="course-list-content">
            <div class="course-thumbnail">
              <div class="thumbnail-wrapper">
                <img :src="course.image" :alt="course.title" class="thumbnail-img" />
              </div>
            </div>
            <div class="course-info">
              <p class="course-info-title">{{ course.title }}</p>
              <p class="course-info-desc">{{ course.description }}</p>
              <div class="course-rating">
                <div class="rating-stars">
                  <Star v-for="n in Math.floor(course.rating)" :key="'star-' + n" class="star-icon filled" />
                  <StarHalf v-if="course.rating % 1 >= 0.5" class="star-icon filled" />
                  <Star v-for="n in Math.floor(5 - course.rating)" :key="'empty-' + n" class="star-icon" />
                </div>
                <span class="rating-value">({{ course.rating }})</span>
              </div>
            </div>
            <div>
              <button class="add-course-btn">Add to List</button>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { Star, StarHalf } from 'lucide-vue-next';

const recommendedCourses = [
  {
    title: 'Advanced JavaScript Patterns',
    description: 'Learn modern JavaScript design patterns and architecture',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80',
    rating: 4.5
  },
  {
    title: 'Machine Learning Fundamentals',
    description: 'Introduction to ML algorithms and practical applications',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80',
    rating: 5.0
  },
  {
    title: 'Mobile App Development with Flutter',
    description: 'Build cross-platform mobile apps with Flutter framework',
    image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80',
    rating: 4.0
  }
];
</script>

<style scoped>
/* Panel styles */
.panel {
  overflow: hidden;
  border-radius: 0.5rem;
  background-color: white;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  transition: all 0.3s;
}

.panel:hover {
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
}

.panel-header {
  border-bottom: 1px solid #e5e7eb;
  padding: 1.25rem 1rem;
}

@media (min-width: 640px) {
  .panel-header {
    padding: 1.25rem 1.5rem;
  }
}

.panel-title {
  font-size: 1.125rem;
  font-weight: 500;
  line-height: 1.5;
  color: #111827;
}

.panel-body {
  padding: 1.25rem 1rem;
}

@media (min-width: 640px) {
  .panel-body {
    padding: 1.5rem;
  }
}

/* Course list styles */
.course-list {
  display: flex;
  flex-direction: column;
  border-top-width: 1px;
  border-color: #e5e7eb;
}

.course-list-item {
  padding: 1rem 0;
  transition: all 0.3s;
  border-radius: 0.375rem;
}

.course-list-item:hover {
  background-color: #f9fafb;
}

.course-list-content {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.course-thumbnail {
  flex-shrink: 0;
}

.thumbnail-wrapper {
  height: 4rem;
  width: 4rem;
  overflow: hidden;
  border-radius: 0.375rem;
  background-color: #f3f4f6;
}

.thumbnail-img {
  height: 100%;
  width: 100%;
  object-fit: cover;
}

.course-info {
  min-width: 0;
  flex: 1;
}

.course-info-title {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 0.875rem;
  font-weight: 500;
  color: #111827;
}

.course-info-desc {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 0.875rem;
  color: #6b7280;
}

.course-rating {
  display: flex;
  align-items: center;
  margin-top: 0.25rem;
}

.rating-stars {
  display: flex;
  align-items: center;
}

.star-icon {
  height: 1rem;
  width: 1rem;
  color: #d1d5db;
}

.star-icon.filled {
  color: #fbbf24;
}

.rating-value {
  margin-left: 0.25rem;
  font-size: 0.75rem;
  color: #6b7280;
}

.add-course-btn {
  display: inline-flex;
  align-items: center;
  border-radius: 0.375rem;
  border: 1px solid transparent;
  background-color: #dbeafe;
  padding: 0.375rem 0.625rem;
  font-size: 0.75rem;
  font-weight: 500;
  color: #1d4ed8;
  transition: all 0.3s;
}

.add-course-btn:hover {
  background-color: #bfdbfe;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  transform: translateY(-1px);
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