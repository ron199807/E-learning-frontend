<template>
  <div class="tabs-component">
    <div class="tabs-navigation">
      <button
        v-for="tab in tabs"
        :key="tab.value"
        @click="$emit('tab-change', tab.value)"
        :class="['tab-button', { active: activeTab === tab.value }]"
      >
        <span class="tab-label">{{ tab.label }}</span>
        <span v-if="activeTab === tab.value" class="active-indicator"></span>
      </button>
    </div>

    <div class="tabs-content">
      <!-- Overview Tab -->
      <div v-if="activeTab === 'overview'" class="tab-panel">
        <div class="panel-header">
          <h3 class="panel-title">Continue Learning</h3>
          <button class="view-all-button" @click="$emit('view-all-courses')">
            View All
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 18L15 12L9 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
        </div>
        
        <CourseCards 
          :courses="courses" 
          @course-click="$emit('course-click', $event)" 
        />
      </div>

      <!-- Courses Tab -->
      <div v-if="activeTab === 'courses'" class="tab-panel">
        <div class="panel-header">
          <h3 class="panel-title">All Courses</h3>
        </div>
        
        <CourseCards 
          :courses="allCourses" 
          @course-click="$emit('course-click', $event)" 
        />
      </div>

      <!-- Progress Tab -->
      <div v-if="activeTab === 'progress'" class="tab-panel">
        <div class="panel-header">
          <h3 class="panel-title">Learning Progress</h3>
        </div>
        
        <ProgressList :courses="allCourses" />
      </div>
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
      required: true,
      validator: (tabs) => {
        return tabs.every(tab => 'label' in tab && 'value' in tab)
      }
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
.tabs-component {
  background-color: #ffffff;
  border-radius: 12px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
  border: 1px solid #f3f4f6;
  margin-bottom: 32px;
  overflow: hidden;
}

.tabs-navigation {
  display: flex;
  border-bottom: 1px solid #f3f4f6;
  background-color: #ffffff;
  padding: 0 24px;
}

.tab-button {
  position: relative;
  padding: 16px 24px;
  font-size: 14px;
  font-weight: 500;
  color: #6b7280;
  background-color: transparent;
  border: none;
  cursor: pointer;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
}

.tab-button:hover {
  color: #111827;
}

.tab-button.active {
  color: #111827;
  font-weight: 600;
}

.active-indicator {
  width: 24px;
  height: 3px;
  background-color: #3b82f6;
  border-radius: 9999px;
  position: absolute;
  bottom: -1px;
}

.tabs-content {
  padding: 24px;
}

.panel-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
}

.panel-title {
  font-size: 18px;
  font-weight: 600;
  color: #111827;
  margin: 0;
}

.view-all-button {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 14px;
  font-weight: 500;
  color: #3b82f6;
  background: none;
  border: none;
  cursor: pointer;
  padding: 6px 8px;
  border-radius: 6px;
  transition: all 0.2s ease;
}

.view-all-button:hover {
  background-color: #f0f4ff;
}

.view-all-button svg {
  width: 16px;
  height: 16px;
  color: #3b82f6;
}

@media (max-width: 768px) {
  .tabs-navigation {
    padding: 0 16px;
  }
  
  .tab-button {
    padding: 14px 16px;
    font-size: 13px;
  }
  
  .tabs-content {
    padding: 20px;
  }
  
  .panel-header {
    margin-bottom: 20px;
  }
}

@media (max-width: 576px) {
  .tabs-navigation {
    overflow-x: auto;
    padding-bottom: 8px;
  }
  
  .tabs-navigation::-webkit-scrollbar {
    height: 4px;
  }
  
  .tabs-navigation::-webkit-scrollbar-thumb {
    background-color: #e5e7eb;
    border-radius: 4px;
  }
  
  .tab-button {
    padding: 12px 16px;
    white-space: nowrap;
  }
  
  .tabs-content {
    padding: 16px;
  }
}
</style>