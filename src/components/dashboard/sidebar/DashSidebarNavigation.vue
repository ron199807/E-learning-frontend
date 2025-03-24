<template>
    <nav class="sidebar-nav">
      <div v-for="(section, sectionIndex) in navigationSections" :key="sectionIndex" class="nav-section">
        <h4 class="nav-title">{{ section.title }}</h4>
        <ul class="nav-list">
          <li v-for="(item, itemIndex) in section.items" :key="itemIndex" 
              :class="['nav-item', { active: item.active }]">
            <a :href="item.url" class="nav-link" :class="{ logout: item.type === 'logout' }">
              <component :is="item.icon" />
              <span>{{ item.label }}</span>
              <span v-if="item.badge" class="nav-badge">{{ item.badge }}</span>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  </template>
  
  <script>
  import {
    LayoutDashboard,
    BookOpen,
    Calendar,
    FileText,
    MessageSquare,
    User,
    Settings,
    HelpCircle,
    LogOut
  } from 'lucide-vue-next';
  
  export default {
    props: {
      navigationSections: {
        type: Array,
        required: true
      }
    },
    setup() {
      return {
        LayoutDashboard,
        BookOpen,
        Calendar,
        FileText,
        MessageSquare,
        User,
        Settings,
        HelpCircle,
        LogOut
      };
    }
  };
  </script>
  
  <style scoped>
  .sidebar-nav {
    flex: 1;
    padding: 24px 0;
    overflow-y: auto;
  }
  
  .nav-section {
    margin-bottom: 24px;
  }
  
  .nav-title {
    padding: 0 24px;
    margin-bottom: 12px;
    font-size: 12px;
    font-weight: 600;
    text-transform: uppercase;
    color: var(--text-light);
    letter-spacing: 0.5px;
  }
  
  .nav-list {
    list-style: none;
  }
  
  .nav-item {
    margin-bottom: 2px;
  }
  
  .nav-link {
    display: flex;
    align-items: center;
    padding: 10px 24px;
    color: var(--text-secondary);
    text-decoration: none;
    font-size: 14px;
    transition: var(--transition);
    position: relative;
  }
  
  .nav-link svg {
    width: 18px;
    height: 18px;
    margin-right: 12px;
  }
  
  .nav-link:hover {
    background-color: rgba(37, 99, 235, 0.05);
    color: var(--primary-color);
  }
  
  .nav-item.active .nav-link {
    background-color: var(--primary-light);
    color: var(--primary-color);
    font-weight: 500;
  }
  
  .nav-item.active .nav-link::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 3px;
    background-color: var(--primary-color);
  }
  
  .nav-badge {
    margin-left: auto;
    padding: 2px 6px;
    font-size: 10px;
    font-weight: 500;
    border-radius: var(--radius-full);
    background-color: var(--primary-light);
    color: var(--primary-color);
  }
  
  .nav-link.logout {
    color: var(--danger-color);
  }
  
  .nav-link.logout:hover {
    background-color: rgba(239, 68, 68, 0.05);
  }
  </style>