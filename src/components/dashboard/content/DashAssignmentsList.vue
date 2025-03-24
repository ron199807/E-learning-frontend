<template>
    <div class="assignments-section">
      <div class="section-header">
        <h2>Upcoming Assignments</h2>
      </div>
      
      <div class="assignments-list">
        <div 
          v-for="(assignment, index) in assignments" 
          :key="index" 
          class="assignment-item"
          @click="$emit('assignment-click', assignment)"
        >
          <FileText class="assignment-icon" />
          <div class="assignment-details">
            <div class="assignment-header">
              <h4>{{ assignment.title }}</h4>
              <span :class="['status-badge', { urgent: assignment.status === 'urgent' }]">
                {{ assignment.status === 'urgent' ? 'Due Soon' : 'Upcoming' }}
              </span>
            </div>
            <p class="assignment-course">{{ assignment.course }}</p>
            <div class="due-date">
              <Calendar />
              <span>{{ assignment.dueDate }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { FileText, Calendar } from 'lucide-vue-next';
  
  export default {
    props: {
      assignments: {
        type: Array,
        required: true
      }
    },
    components: {
      FileText,
      Calendar
    },
    emits: ['assignment-click']
  };
  </script>
  
  <style scoped>
  .assignments-section {
    background-color: var(--bg-white);
    border-radius: var(--radius-md);
    box-shadow: var(--shadow-sm);
    border: 1px solid var(--border-color);
    padding: 24px;
    margin-bottom: 32px;
  }
  
  .assignments-list {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
  
  .assignment-item {
    display: flex;
    gap: 16px;
    padding: 16px;
    border-radius: var(--radius-md);
    background-color: var(--bg-light);
    transition: var(--transition);
    cursor: pointer;
  }
  
  .assignment-item:hover {
    background-color: rgba(37, 99, 235, 0.05);
  }
  
  .assignment-icon {
    width: 20px;
    height: 20px;
    color: var(--text-secondary);
    margin-top: 2px;
  }
  
  .assignment-details {
    flex: 1;
  }
  
  .assignment-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 4px;
  }
  
  .assignment-header h4 {
    font-size: 14px;
    font-weight: 500;
  }
  
  .status-badge {
    padding: 2px 8px;
    font-size: 10px;
    font-weight: 500;
    border-radius: var(--radius-full);
    background-color: var(--primary-light);
    color: var(--primary-color);
  }
  
  .status-badge.urgent {
    background-color: rgba(239, 68, 68, 0.1);
    color: var(--danger-color);
  }
  
  .assignment-course {
    font-size: 12px;
    color: var(--text-secondary);
    margin-bottom: 6px;
  }
  
  .due-date {
    display: flex;
    align-items: center;
    gap: 6px;
    font-size: 12px;
    color: var(--text-secondary);
  }
  
  .due-date svg {
    width: 12px;
    height: 12px;
  }
  </style>