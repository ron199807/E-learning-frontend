<template>
    <div class="progress-list">
      <div v-for="(course, index) in courses" :key="index" class="progress-item">
        <div class="progress-item-header">
          <div>
            <h4>{{ course.title }}</h4>
            <p>{{ course.modulesCompleted || Math.floor(course.progress / 10) }}/{{ course.totalModules || 10 }} modules completed</p>
          </div>
          <span>{{ course.progress }}%</span>
        </div>
        <div class="progress-bar">
          <div class="progress-fill" :style="{ width: `${course.progress}%` }"></div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      courses: {
        type: Array,
        required: true
      }
    }
  };
  </script>
  
  <style scoped>
  .progress-list {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
  
  .progress-item {
    padding: 16px;
    background-color: var(--bg-white);
    border-radius: var(--radius-md);
    border: 1px solid var(--border-color);
  }
  
  .progress-item-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 12px;
  }
  
  .progress-item-header h4 {
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 4px;
  }
  
  .progress-item-header p {
    font-size: 12px;
    color: var(--text-secondary);
  }
  
  .progress-item-header span {
    font-size: 14px;
    font-weight: 600;
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
  </style>