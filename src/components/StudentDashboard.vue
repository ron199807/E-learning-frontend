<template>
  <div class="app-container">
    <!-- Sidebar Component -->
    <StudentDashboardSidebar
      :is-open="isSidebarOpen"
      :app-name="appName"
      :logo-icon="logoIcon"
      :user="user"
      :navigation-sections="navigationSections"
      :show-upgrade-card="showUpgradeCard"
      :upgrade-card="upgradeCard"
      @toggle-sidebar="toggleSidebar"
      @upgrade="$emit('upgrade')"
    />

    <!-- Main Content Area -->
    <div class="main-content-wrapper">
      <!-- Header Component -->
      <StudentDashboardHeader
        :search-placeholder="searchPlaceholder"
        :user="user"
        :notification-count="notificationCount"
        @toggle-sidebar="toggleSidebar"
        @search="$emit('search', searchQuery)"
        @notifications-click="$emit('notifications-click')"
        @profile-click="$emit('profile-click')"
      />

      <!-- Dashboard Content -->
      <div class="dashboard-content">
        <!-- Welcome Section -->
        <StudentDashboardWelcome
          :welcome-message="welcomeMessage"
          :welcome-subtitle="welcomeSubtitle"
        />

        <!-- Stats Cards -->
        <StudentDashboardStats :stats="stats" />

        <!-- Tabs Section -->
        <StudentDashboardTabs
          :tabs="tabs"
          :active-tab="activeTab"
          :courses="courses"
          :all-courses="computedAllCourses"
          :assignments="assignments"
          @tab-change="activeTab = $event"
          @course-click="$emit('course-click', $event)"
          @assignment-click="$emit('assignment-click', $event)"
          @view-all-courses="$emit('view-all-courses')"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { ref, computed } from 'vue';
import {
  ArrowUp,
  Bell,
  BookOpen,
  Calendar,
  Clock,
  FileText,
  GraduationCap,
  HelpCircle,
  LayoutDashboard,
  LogOut,
  Menu,
  MessageSquare,
  Minus,
  Search,
  Settings,
  Star,
  User
} from 'lucide-vue-next';

// Import sub-components
import StudentDashboardSidebar from './StudentDashboardSidebar.vue';
import StudentDashboardHeader from './StudentDashboardHeader.vue';
import StudentDashboardWelcome from './StudentDashboardWelcome.vue';
import StudentDashboardStats from './StudentDashboardStats.vue';
import StudentDashboardTabs from './StudentDashboardTabs.vue';

export default {
  name: 'StudentDashboard',
  components: {
    StudentDashboardSidebar,
    StudentDashboardHeader,
    StudentDashboardWelcome,
    StudentDashboardStats,
    StudentDashboardTabs,
    // Lucide icons (only needed if used in this component)
    ArrowUp,
    Bell,
    BookOpen,
    Calendar,
    Clock,
    FileText,
    GraduationCap,
    HelpCircle,
    LayoutDashboard,
    LogOut,
    Menu,
    MessageSquare,
    Minus,
    Search,
    Settings,
    Star,
    User
  },
  props: {
    // App configuration
    appName: {
      type: String,
      default: 'LearnHub'
    },
    logoIcon: {
      type: Object,
      default: () => GraduationCap
    },
    
    // User information
    user: {
      type: Object,
      default: () => ({
        name: 'Jane Doe',
        role: 'Student',
        avatar: '/placeholder.svg?height=60&width=60'
      }),
      validator: (user) => {
        return ['name', 'role', 'avatar'].every(key => key in user);
      }
    },
    
    // Welcome message
    welcomeMessage: {
      type: String,
      default: 'Welcome back, Jane'
    },
    welcomeSubtitle: {
      type: String,
      default: 'Here\'s an overview of your learning progress'
    },
    
    // Navigation
    navigationSections: {
      type: Array,
      default: () => [
        {
          title: 'Main',
          items: [
            {
              label: 'Dashboard',
              icon: 'LayoutDashboard',
              url: '#',
              active: true
            },
            {
              label: 'My Courses',
              icon: 'BookOpen',
              url: '#',
              badge: '4'
            },
            {
              label: 'Calendar',
              icon: 'Calendar',
              url: '#'
            },
            {
              label: 'Assignments',
              icon: 'FileText',
              url: '#',
              badge: '5'
            },
            {
              label: 'Messages',
              icon: 'MessageSquare',
              url: '#',
              badge: '3'
            }
          ]
        },
        {
          title: 'Account',
          items: [
            {
              label: 'Profile',
              icon: 'User',
              url: '#'
            },
            {
              label: 'Settings',
              icon: 'Settings',
              url: '#'
            },
            {
              label: 'Help & Support',
              icon: 'HelpCircle',
              url: '#'
            },
            {
              label: 'Logout',
              icon: 'LogOut',
              url: '#',
              type: 'logout'
            }
          ]
        }
      ],
      validator: (sections) => {
        return sections.every(section => 
          'title' in section && 
          Array.isArray(section.items) &&
          section.items.every(item => 
            'label' in item && 
            'icon' in item && 
            'url' in item
          )
      },
    },
    
    // Stats
    stats: {
      type: Array,
      default: () => [
        {
          title: 'Courses in Progress',
          value: '4',
          icon: 'BookOpen',
          iconClass: 'courses-icon',
          trendText: '+1 from last month',
          trendIcon: 'ArrowUp',
          trendClass: 'positive'
        },
        {
          title: 'Completed Courses',
          value: '12',
          icon: 'GraduationCap',
          iconClass: 'completed-icon',
          trendText: '2 this month',
          trendIcon: 'ArrowUp',
          trendClass: 'positive'
        },
        {
          title: 'Hours Studied',
          value: '28.5',
          icon: 'Clock',
          iconClass: 'hours-icon',
          trendText: '+5.5 from last week',
          trendIcon: 'ArrowUp',
          trendClass: 'positive'
        },
        {
          title: 'Assignments Due',
          value: '5',
          icon: 'FileText',
          iconClass: 'assignments-icon',
          trendText: '2 due today',
          trendIcon: 'Minus',
          trendClass: 'neutral'
        }
      ],
      validator: (stats) => {
        return stats.every(stat => 
          'title' in stat && 
          'value' in stat && 
          'icon' in stat
        );
      }
    },
    
    // Tabs
    tabs: {
      type: Array,
      default: () => [
        { label: 'Overview', value: 'overview' },
        { label: 'My Courses', value: 'courses' },
        { label: 'Progress', value: 'progress' }
      ],
      validator: (tabs) => {
        return tabs.every(tab => 
          'label' in tab && 
          'value' in tab
        );
      }
    },
    
    // Courses
    courses: {
      type: Array,
      default: () => [
        {
          title: 'Introduction to UX Design',
          instructor: 'Sarah Johnson',
          progress: 65,
          modulesCompleted: 8,
          totalModules: 12,
          image: '/placeholder.svg?height=100&width=180',
          lastAccessed: '2 hours ago'
        },
        {
          title: 'Advanced JavaScript',
          instructor: 'Michael Chen',
          progress: 42,
          modulesCompleted: 5,
          totalModules: 12,
          image: '/placeholder.svg?height=100&width=180',
          lastAccessed: 'Yesterday'
        },
        {
          title: 'Data Science Fundamentals',
          instructor: 'Emily Rodriguez',
          progress: 28,
          modulesCompleted: 4,
          totalModules: 14,
          image: '/placeholder.svg?height=100&width=180',
          lastAccessed: '3 days ago'
        }
      ],
      validator: (courses) => {
        return courses.every(course => 
          'title' in course && 
          'instructor' in course && 
          'progress' in course
        );
      }
    },
    
    // All courses
    allCourses: {
      type: Array,
      default: null
    },
    
    // Assignments
    assignments: {
      type: Array,
      default: () => [
        {
          title: 'UX Research Report',
          course: 'Introduction to UX Design',
          dueDate: 'Today, 11:59 PM',
          status: 'urgent'
        },
        {
          title: 'JavaScript Project',
          course: 'Advanced JavaScript',
          dueDate: 'Tomorrow, 11:59 PM',
          status: 'upcoming'
        },
        {
          title: 'Data Analysis Exercise',
          course: 'Data Science Fundamentals',
          dueDate: 'Mar 28, 11:59 PM',
          status: 'upcoming'
        }
      ],
      validator: (assignments) => {
        return assignments.every(assignment => 
          'title' in assignment && 
          'course' in assignment && 
          'dueDate' in assignment
        );
      }
    },
    
    // Notifications
    notificationCount: {
      type: Number,
      default: 3,
      validator: (value) => Number.isInteger(value) && value >= 0
    },
    
    // Search
    searchPlaceholder: {
      type: String,
      default: 'Search courses, assignments...'
    },
    
    // Upgrade card
    showUpgradeCard: {
      type: Boolean,
      default: true
    },
    upgradeCard: {
      type: Object,
      default: () => ({
        title: 'Upgrade to Pro',
        description: 'Get unlimited access to all courses',
        buttonText: 'Upgrade Now'
      }),
      validator: (card) => 
        'title' in card && 
        'description' in card && 
        'buttonText' in card
    }
  },
  emits: [
    'search',
    'notifications-click',
    'profile-click',
    'course-click',
    'assignment-click',
    'view-all-courses',
    'upgrade'
  ],
  setup(props) {
    // Reactive state
    const activeTab = ref('overview');
    const isSidebarOpen = ref(false);
    const searchQuery = ref('');

    // Computed properties
    const computedAllCourses = computed(() => {
      if (props.allCourses) return props.allCourses;
      
      // Default additional courses
      const additionalCourses = [
        {
          title: 'Digital Marketing Essentials',
          instructor: 'David Wilson',
          progress: 89,
          modulesCompleted: 8,
          totalModules: 9,
          image: '/placeholder.svg?height=100&width=180',
          lastAccessed: 'Today'
        },
        {
          title: 'Graphic Design Principles',
          instructor: 'Lisa Thompson',
          progress: 15,
          modulesCompleted: 2,
          totalModules: 10,
          image: '/placeholder.svg?height=100&width=180',
          lastAccessed: '1 week ago'
        },
        {
          title: 'Business Analytics',
          instructor: 'Robert Garcia',
          progress: 72,
          modulesCompleted: 8,
          totalModules: 11,
          image: '/placeholder.svg?height=100&width=180',
          lastAccessed: '4 days ago'
        }
      ];
      
      return [...props.courses, ...additionalCourses];
    });

    // Methods
    const toggleSidebar = () => {
      isSidebarOpen.value = !isSidebarOpen.value;
    };

    return {
      activeTab,
      isSidebarOpen,
      searchQuery,
      computedAllCourses,
      toggleSidebar
    };
  }
};
</script>

<style scoped>
/* Layout styles */
.app-container {
  display: flex;
  min-height: 100vh;
  background-color: var(--bg-light);
}

.main-content-wrapper {
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
}

.dashboard-content {
  flex: 1;
  padding: 24px;
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
}

/* Responsive adjustments */
@media (max-width: 1024px) {
  .dashboard-content {
    padding: 16px;
  }
}
</style>