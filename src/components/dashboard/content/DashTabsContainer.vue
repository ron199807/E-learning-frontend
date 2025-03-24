<template>
    <div class="tabs-container">
      <div class="tabs-header">
        <button 
          v-for="tab in tabs" 
          :key="tab.value"
          @click="$emit('tab-change', tab.value)"
          :class="['tab-button', { active: activeTab === tab.value }]"
        >
          {{ tab.label }}
        </button>
      </div>
  
      <!-- Overview Tab -->
      <div v-if="activeTab === 'overview'" class="tab-content">
        <div class="section-header">
          <h2>Continue Learning</h2>
          <button class="view-all-btn" @click="$emit('view-all-courses')">View All</button>
        </div>
        
        <CourseCards :courses="courses" @course-click="$emit('course-click', $event)" />
      </div>
  
      <!-- Courses Tab -->
      <div v-if="activeTab === 'courses'" class="tab-content">
        <div class="section-header">
          <h2>All Courses</h2>
        </div>
        
        <CourseCards :courses="allCourses" @course-click="$emit('course-click', $event)" />
      </div>
  
      <!-- Progress Tab -->
      <div v-if="activeTab === 'progress'" class="tab-content">
        <div class="section-header">
          <h2>Learning Progress</h2>
        </div>
        
        <ProgressList :courses="allCourses" />
      </div>
    </div>
  </template>
  
  <script>
  import CourseCards from './DashCourseCards.vue';
  import ProgressList from './DashProgressList.vue';
  
  export default {
    components: {
      CourseCards,
      ProgressList
    },
    props: {
      tabs: {
        type: Array,
        required: true
      },
      activeTab: {
        type: String,
        required: true
      },
      courses: {
        type: Array,
        required: true
      },
      allCourses: {
        type: Array,
        required: true
      }
    },
    emits: ['tab-change', 'view-all-courses', 'course-click']
  };
  </script>
  
  <style scoped>
  .tabs-container {
    background-color: var(--bg-white);
    border-radius: var(--radius-md);
    box-shadow: var(--shadow-sm);
    border: 1px solid var(--border-color);
    margin-bottom: 32px;
    overflow: hidden;
  }
  
  .tabs-header {
    display: flex;
    border-bottom: 1px solid var(--border-color);
    background-color: var(--bg-white);
  }
  
  .tab-button {
    padding: 16px 24px;
    font-size: 14px;
    font-weight: 500;
    color: var(--text-secondary);
    background-color: transparent;
    border: none;
    border-bottom: 2px solid transparent;
    cursor: pointer;
    transition: var(--transition);
  }
  
  .tab-button:hover {
    color: var(--primary-color);
  }
  
  .tab-button.active {
    color: var(--primary-color);
    border-bottom-color: var(--primary-color);
  }
  
  .tab-content {
    padding: 24px;
  }
  
  .section-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 16px;
  }
  
  .section-header h2 {
    font-size: 18px;
    font-weight: 600;
  }
  
  .view-all-btn {
    font-size: 14px;
    color: var(--primary-color);
    background: none;
    border: none;
    cursor: pointer;
    transition: var(--transition);
  }
  
  .view-all-btn:hover {
    text-decoration: underline;
  }
  </style>