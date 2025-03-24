<template>
    <div class="stats-grid">
      <div v-for="(stat, index) in stats" :key="index" class="stat-card">
        <div class="stat-header">
          <div :class="['stat-icon', stat.iconClass]">
            <component :is="stat.icon" />
          </div>
          <div :class="['stat-trend', stat.trendClass]">
            <component :is="stat.trendIcon" />
            <span>{{ stat.trendText }}</span>
          </div>
        </div>
        <div class="stat-content">
          <h3>{{ stat.value }}</h3>
          <p>{{ stat.title }}</p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { BookOpen, GraduationCap, Clock, FileText, ArrowUp, Minus } from 'lucide-vue-next';
  
  export default {
    props: {
      stats: {
        type: Array,
        required: true
      }
    },
    components: {
      BookOpen,
      GraduationCap,
      Clock,
      FileText,
      ArrowUp,
      Minus
    }
  };
  </script>
  
  <style scoped>
  .stats-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
    gap: 16px;
    margin-bottom: 32px;
  }
  
  .stat-card {
    background-color: var(--bg-white);
    border-radius: var(--radius-md);
    padding: 16px;
    box-shadow: var(--shadow-sm);
    border: 1px solid var(--border-color);
  }
  
  .stat-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 16px;
  }
  
  .stat-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    border-radius: var(--radius-md);
  }
  
  .stat-icon svg {
    width: 20px;
    height: 20px;
  }
  
  .courses-icon {
    background-color: rgba(37, 99, 235, 0.1);
    color: var(--primary-color);
  }
  
  .completed-icon {
    background-color: rgba(16, 185, 129, 0.1);
    color: var(--success-color);
  }
  
  .hours-icon {
    background-color: rgba(245, 158, 11, 0.1);
    color: var(--accent-color);
  }
  
  .assignments-icon {
    background-color: rgba(239, 68, 68, 0.1);
    color: var(--danger-color);
  }
  
  .stat-trend {
    display: flex;
    align-items: center;
    gap: 4px;
    font-size: 12px;
  }
  
  .stat-trend svg {
    width: 14px;
    height: 14px;
  }
  
  .stat-trend.positive {
    color: var(--success-color);
  }
  
  .stat-trend.negative {
    color: var(--danger-color);
  }
  
  .stat-trend.neutral {
    color: var(--text-light);
  }
  
  .stat-content h3 {
    font-size: 28px;
    font-weight: 700;
    margin-bottom: 4px;
  }
  
  .stat-content p {
    font-size: 14px;
    color: var(--text-secondary);
  }
  
  @media (max-width: 768px) {
    .stats-grid {
      grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    }
  }
  
  @media (max-width: 576px) {
    .stats-grid {
      grid-template-columns: 1fr;
    }
  }
  </style>