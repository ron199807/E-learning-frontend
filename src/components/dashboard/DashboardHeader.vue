<template>
  <!-- Main Header with Hamburger Menu (shown by default) -->
  <header class="main-header" v-if="!showBackHeader">
    <div class="header-content">
      <button class="menu-toggle" @click="toggleSidebar">
        <Menu class="menu-icon" />
      </button>
      
      <div class="search-container">
        <Search class="search-icon" />
        <input
          type="text"
          :placeholder="placeholder"
          v-model="searchQuery"
          @input="$emit('search', searchQuery)"
          class="search-input"
        />
      </div>
      
      <div class="user-actions">
        <button class="notification-btn" @click="$emit('notifications-click')">
          <Bell class="notification-icon" />
          <span v-if="notificationCount > 0" class="notification-badge">
            {{ notificationCount > 9 ? '9+' : notificationCount }}
          </span>
        </button>
        
        <div class="user-profile" @click="$emit('profile-click')">
          <div class="avatar-container">
            <img v-if="user.avatar" :src="user.avatar" :alt="user.name" class="user-avatar" />
            <div v-else class="avatar-fallback">
              {{ getUserInitials(user.name) }}
            </div>
          </div>
          <div class="user-info">
            <span class="user-name">{{ user.name }}</span>
            <span class="user-role">{{ user.role }}</span>
          </div>
        </div>
      </div>
    </div>
  </header>

  <!-- Back Header (shown when showBackHeader is true) -->
  <header class="back-header" v-else>
    <div class="header-content">
      <router-link to="/dashboard" class="back-link" @click="showBackHeader = false">
        <ArrowLeft class="back-icon" />
      </router-link>
      
      <div class="search-container">
        <Search class="search-icon" />
        <input
          type="text"
          :placeholder="placeholder"
          v-model="searchQuery"
          @input="$emit('search', searchQuery)"
          class="search-input"
        />
      </div>
      
      <div class="user-actions">
        <div class="user-profile">
          <div class="avatar-container">
            <img v-if="user.avatar" :src="user.avatar" :alt="user.name" class="user-avatar" />
            <div v-else class="avatar-fallback">
              {{ getUserInitials(user.name) }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import { Menu, Search, Bell, ArrowLeft } from 'lucide-vue-next';

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
      required: true,
      validator: user => 'name' in user && 'role' in user
    },
    showBack: {
      type: Boolean,
      default: false
    }
  },
  components: {
    Menu,
    Search,
    Bell,
    ArrowLeft
  },
  emits: ['toggle-sidebar', 'search', 'notifications-click', 'profile-click'],
  data() {
    return {
      searchQuery: '',
      showBackHeader: this.showBack
    };
  },
  watch: {
    showBack(newVal) {
      this.showBackHeader = newVal;
    }
  },
  methods: {
    toggleSidebar() {
      this.$emit('toggle-sidebar');
    },
    getUserInitials(name) {
      return name.split(' ').map(n => n[0]).join('').toUpperCase();
    }
  }
};
</script>

<style scoped>
/* Common Header Styles */
.main-header,
.back-header {
  display: flex;
  align-items: center;
  height: 64px;
  background-color: #ffffff;
  border-bottom: 1px solid #f3f4f6;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
  position: sticky;
  top: 0;
  z-index: 100;
  padding: 0 24px;
}

.header-content {
  display: flex;
  align-items: center;
  width: 100%;
  gap: 16px;
}

/* Search Bar Styles (common to both headers) */
.search-container {
  position: relative;
  flex-grow: 1;
  max-width: 600px;
}

.search-input {
  width: 100%;
  padding: 10px 16px 10px 40px;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  font-size: 14px;
  background-color: #f9fafb;
  transition: all 0.2s ease;
}

.search-input:focus {
  outline: none;
  border-color: #3b82f6;
  box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.1);
  background-color: #ffffff;
}

.search-icon {
  position: absolute;
  left: 12px;
  top: 50%;
  transform: translateY(-50%);
  width: 16px;
  height: 16px;
  color: #9ca3af;
}

/* Main Header Specific Styles */
.menu-toggle {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 8px;
  border: none;
  background-color: transparent;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

.menu-toggle:hover {
  background-color: #f3f4f6;
}

.menu-icon {
  width: 20px;
  height: 20px;
  color: #4b5563;
}

/* Back Header Specific Styles */
.back-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 8px;
  color: #4b5563;
  transition: background-color 0.2s ease;
}

.back-link:hover {
  background-color: #f3f4f6;
}

.back-icon {
  width: 20px;
  height: 20px;
}

/* User Actions (common to both headers) */
.user-actions {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-left: auto;
}

.notification-btn {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 8px;
  border: none;
  background-color: transparent;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

.notification-btn:hover {
  background-color: #f3f4f6;
}

.notification-icon {
  width: 20px;
  height: 20px;
  color: #4b5563;
}

.notification-badge {
  position: absolute;
  top: 4px;
  right: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 18px;
  height: 18px;
  padding: 0 4px;
  background-color: #ef4444;
  color: white;
  font-size: 10px;
  font-weight: 600;
  border-radius: 9999px;
}

.user-profile {
  display: flex;
  align-items: center;
  gap: 12px;
  cursor: pointer;
}

.avatar-container {
  width: 40px;
  height: 40px;
  border-radius: 9999px;
  background-color: #f3f4f6;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  border: 2px solid #e5e7eb;
}

.user-avatar {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.avatar-fallback {
  font-size: 14px;
  font-weight: 600;
  color: #6b7280;
}

.user-info {
  display: flex;
  flex-direction: column;
}

.user-name {
  font-size: 14px;
  font-weight: 500;
  color: #111827;
}

.user-role {
  font-size: 12px;
  color: #6b7280;
}

/* Responsive Styles */
@media (max-width: 1024px) {
  .main-header,
  .back-header {
    padding: 0 16px;
  }
  
  .search-container {
    max-width: 400px;
  }
}

@media (max-width: 768px) {
  .user-info {
    display: none;
  }
  
  .search-container {
    max-width: 300px;
  }
}

@media (max-width: 576px) {
  .search-container {
    max-width: 200px;
  }
  
  .notification-btn {
    display: none;
  }
}
</style>