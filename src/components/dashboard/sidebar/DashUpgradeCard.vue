<template>
    <div class="sidebar-footer">
      <div class="upgrade-card">
        <Star class="upgrade-icon" />
        <h4>{{ title }}</h4>
        <p>{{ description }}</p>
        <button class="upgrade-btn" @click="$emit('upgrade')">{{ buttonText }}</button>
      </div>
    </div>
  </template>
  
  <script>
  import { Star } from 'lucide-vue-next';
  
  export default {
    props: {
      title: {
        type: String,
        default: 'Upgrade to Pro'
      },
      description: {
        type: String,
        default: 'Get unlimited access to all courses'
      },
      buttonText: {
        type: String,
        default: 'Upgrade Now'
      }
    },
    components: {
      Star
    },
    emits: ['upgrade']
  };
  </script>
  
  <style scoped>
  /* Copy the relevant upgrade card styles from the original CSS */
  .sidebar-footer {
    padding: 24px;
    border-top: 1px solid var(--border-color);
  }
  
  .upgrade-card {
    background-color: var(--primary-light);
    border-radius: var(--radius-md);
    padding: 16px;
    text-align: center;
  }
  
  .upgrade-icon {
    width: 24px;
    height: 24px;
    color: var(--primary-color);
    margin-bottom: 8px;
  }
  
  .upgrade-card h4 {
    font-size: 16px;
    font-weight: 600;
    margin-bottom: 4px;
    color: var(--primary-color);
  }
  
  .upgrade-card p {
    font-size: 12px;
    color: var(--text-secondary);
    margin-bottom: 12px;
  }
  
  .upgrade-btn {
    width: 100%;
    padding: 8px 16px;
    background-color: var(--primary-color);
    color: white;
    border: none;
    border-radius: var(--radius-md);
    font-size: 14px;
    font-weight: 500;
    cursor: pointer;
    transition: var(--transition);
  }
  
  .upgrade-btn:hover {
    background-color: #1d4ed8;
  }
  </style>