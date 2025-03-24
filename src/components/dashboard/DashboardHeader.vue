<template>
    <header class="header">
      <button class="menu-toggle" @click="$emit('toggle-sidebar')">
        <Menu class="menu-icon" />
      </button>
      <div class="search-bar">
        <Search class="search-icon" />
        <input type="text" :placeholder="placeholder" v-model="searchQuery" @input="$emit('search', searchQuery)" />
      </div>
      <div class="user-actions">
        <button class="notification-btn" @click="$emit('notifications-click')">
          <Bell />
          <span v-if="notificationCount > 0" class="notification-badge">{{ notificationCount }}</span>
        </button>
        <div class="user-avatar">
          <img :src="user.avatar" :alt="user.name" @click="$emit('profile-click')" />
        </div>
      </div>
    </header>
  </template>
  
  <script>
  import { Menu, Search, Bell } from 'lucide-vue-next';
  
  export default {
    props: {
      placeholder: {
        type: String,
        default: 'Search courses, assignments...'
      },
      notificationCount: {
        type: Number,
        default: 0
      },
      user: {
        type: Object,
        required: true
      }
    },
    components: {
      Menu,
      Search,
      Bell
    },
    emits: ['toggle-sidebar', 'search', 'notifications-click', 'profile-click'],
    data() {
      return {
        searchQuery: ''
      };
    }
  };
  </script>
  
  <style scoped>
  /* Copy the relevant header styles from the original CSS */
  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 16px 24px;
    background-color: var(--bg-white);
    border-bottom: 1px solid var(--border-color);
    box-shadow: var(--shadow-sm);
  }
  
  .menu-toggle {
    display: none;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    border-radius: var(--radius-md);
    border: none;
    background-color: transparent;
    cursor: pointer;
  }
  
  .menu-toggle:hover {
    background-color: var(--primary-light);
  }
  
  .menu-icon {
    width: 20px;
    height: 20px;
    color: var(--secondary-color);
  }
  
  .search-bar {
    position: relative;
    width: 400px;
  }
  
  .search-bar input {
    width: 100%;
    padding: 8px 12px 8px 36px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-full);
    font-size: 14px;
    outline: none;
    transition: var(--transition);
  }
  
  .search-bar input:focus {
    border-color: var(--primary-color);
    box-shadow: 0 0 0 2px rgba(37, 99, 235, 0.1);
  }
  
  .search-icon {
    position: absolute;
    left: 12px;
    top: 50%;
    transform: translateY(-50%);
    width: 16px;
    height: 16px;
    color: var(--text-light);
  }
  
  .user-actions {
    display: flex;
    align-items: center;
    gap: 16px;
  }
  
  .notification-btn {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    border-radius: var(--radius-full);
    border: none;
    background-color: transparent;
    cursor: pointer;
    transition: var(--transition);
  }
  
  .notification-btn:hover {
    background-color: var(--primary-light);
  }
  
  .notification-btn svg {
    width: 20px;
    height: 20px;
    color: var(--secondary-color);
  }
  
  .notification-badge {
    position: absolute;
    top: 0;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 18px;
    height: 18px;
    background-color: var(--danger-color);
    color: white;
    font-size: 10px;
    font-weight: 600;
    border-radius: var(--radius-full);
  }
  
  .user-avatar {
    width: 40px;
    height: 40px;
    border-radius: var(--radius-full);
    overflow: hidden;
    border: 2px solid var(--primary-light);
    cursor: pointer;
  }
  
  .user-avatar img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  @media (max-width: 1024px) {
    .menu-toggle {
      display: flex;
    }
  }
  
  @media (max-width: 576px) {
    .search-bar {
      display: none;
    }
  }
  </style>