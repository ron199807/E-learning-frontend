<template>
  <div class="stats-container">
    <div v-for="(stat, index) in stats" :key="index" class="stat-card">
      <div class="card-header">
        <div :class="['icon-wrapper', stat.variant]">
          <component :is="stat.icon" class="stat-icon" />
        </div>
        <div :class="['trend-indicator', stat.trend]">
          <component :is="stat.trendIcon" class="trend-icon" />
          <span class="trend-value">{{ stat.trendText }}</span>
        </div>
      </div>
      
      <div class="card-content">
        <h3 class="stat-value">{{ stat.value }}</h3>
        <p class="stat-title">{{ stat.title }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { BookOpen, GraduationCap, Clock, FileText, ArrowUp, ArrowDown, Minus } from 'lucide-vue-next';

export default {
  props: {
    stats: {
      type: Array,
      required: true,
      validator: (stats) => {
        return stats.every(stat => 
          'icon' in stat && 
          'value' in stat && 
          'title' in stat && 
          'trend' in stat &&
          'trendIcon' in stat &&
          'trendText' in stat
        )
      }
    }
  },
  components: {
    BookOpen,
    GraduationCap,
    Clock,
    FileText,
    ArrowUp,
    ArrowDown,
    Minus
  }
};
</script>

<style scoped>
.stats-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 24px;
  margin-bottom: 40px;
}

.stat-card {
  background: #ffffff;
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
  border: 1px solid #f3f4f6;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.stat-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03);
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 20px;
}

.icon-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border-radius: 10px;
}

.icon-wrapper.primary {
  background-color: #e0f2fe;
  color: #0369a1;
}

.icon-wrapper.success {
  background-color: #dcfce7;
  color: #15803d;
}

.icon-wrapper.warning {
  background-color: #fef3c7;
  color: #b45309;
}

.icon-wrapper.danger {
  background-color: #fee2e2;
  color: #b91c1c;
}

.stat-icon {
  width: 24px;
  height: 24px;
}

.trend-indicator {
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 13px;
  font-weight: 500;
  padding: 4px 8px;
  border-radius: 9999px;
}

.trend-indicator.positive {
  background-color: #dcfce7;
  color: #15803d;
}

.trend-indicator.negative {
  background-color: #fee2e2;
  color: #b91c1c;
}

.trend-indicator.neutral {
  background-color: #f3f4f6;
  color: #4b5563;
}

.trend-icon {
  width: 14px;
  height: 14px;
}

.stat-value {
  font-size: 28px;
  font-weight: 700;
  color: #111827;
  margin-bottom: 8px;
  line-height: 1.2;
}

.stat-title {
  font-size: 14px;
  color: #6b7280;
  margin: 0;
}

@media (max-width: 1024px) {
  .stats-container {
    gap: 20px;
  }
  
  .stat-card {
    padding: 20px;
  }
}

@media (max-width: 768px) {
  .stats-container {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 480px) {
  .stats-container {
    grid-template-columns: 1fr;
  gap: 16px;
  }
  
  .stat-card {
    padding: 16px;
  }
  
  .stat-value {
    font-size: 24px;
  }
}
</style>