<template>
    <div class="sidebar-header">
      <div class="logo">
        <component :is="logoIcon" class="icon" />
        <span>{{ appName }}</span>
      </div>
      <div class="user-profile">
        <div class="user-avatar">
          <img :src="user.avatar" :alt="user.name" />
        </div>
        <div class="user-info">
          <h3>{{ user.name }}</h3>
          <p>{{ user.role }}</p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { GraduationCap } from 'lucide-vue-next';
  
  export default {
    props: {
      appName: {
        type: String,
        default: 'LearnHub'
      },
      user: {
        type: Object,
        required: true
      }
    },
    setup() {
      return {
        logoIcon: GraduationCap
      };
    }
  };
  </script>
  
  <style scoped>
  .sidebar-header {
    padding: 24px;
    border-bottom: 1px solid var(--border-color);
  }
  
  .logo {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 20px;
    font-weight: 600;
    color: var(--primary-color);
  }
  
  .logo .icon {
    width: 24px;
    height: 24px;
  }
  
  .user-profile {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    margin-top: 16px;
  }
  
  .user-profile .user-avatar {
    width: 60px;
    height: 60px;
    margin-bottom: 12px;
    border-radius: var(--radius-full);
    overflow: hidden;
  }
  
  .user-avatar img {
    width: 100%;
    height: auto;
    object-fit: cover;
  }
  
  .user-info h3 {
    font-size: 16px;
    font-weight: 600;
    margin-bottom: 4px;
  }
  
  .user-info p {
    font-size: 12px;
    color: var(--text-secondary);
  }
  </style>