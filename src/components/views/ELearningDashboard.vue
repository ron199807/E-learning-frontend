<template>
  <dashNav />
  <div class="app-container">
    <!-- Left Sidebar -->
    <aside class="left-sidebar" :class="{ open: isSidebarOpen }">
      <SidebarHeader :app-name="appName" :user="user" />
      <SidebarNavigation :navigation-sections="navigationSections" />
      <UpgradeCard 
        v-if="showUpgradeCard" 
        :title="upgradeCard.title" 
        :description="upgradeCard.description" 
        :button-text="upgradeCard.buttonText"
        @upgrade="$emit('upgrade')"
      />
    </aside>

    <!-- Main Content -->
    <main class="main-content">
      <DashboardHeader 
        :placeholder="searchPlaceholder" 
        :notification-count="notificationCount" 
        :user="user"
        @toggle-sidebar="toggleSidebar"
        @search="onSearch"
        @notifications-click="$emit('notifications-click')"
        @profile-click="$emit('profile-click')"
      />

      <div class="dashboard-content">
        <WelcomeSection 
          :message="welcomeMessage" 
          :subtitle="welcomeSubtitle" 
        />

        <StatsCards :stats="stats" />

        <TabsContainer 
          :tabs="tabs" 
          :active-tab="activeTab"
          :courses="courses"
          :all-courses="allCourses"
          @tab-change="activeTab = $event"
          @view-all-courses="$emit('view-all-courses')"
          @course-click="$emit('course-click', $event)"
        />

        <AssignmentsList 
          v-if="assignments.length > 0" 
          :assignments="assignments"
          @assignment-click="$emit('assignment-click', $event)"
        />
      </div>
    </main>
  </div>
</template>

<script>
import { ref, computed } from 'vue';
import { 
  ArrowUp, 
  GraduationCap, 
  Minus
} from 'lucide-vue-next';

// Import components
import SidebarHeader from '@/components/dashboard/sidebar/DashSidebarHeader.vue'
import SidebarNavigation from '@/components/dashboard/sidebar/DashSidebarNavigation.vue';
import UpgradeCard from '@/components/dashboard/sidebar/DashUpgradeCard.vue';
import DashboardHeader from '@/components/dashboard/DashboardHeader.vue';
import WelcomeSection from '@/components/dashboard/content/DashWelcomeSection.vue';
import StatsCards from '@/components/dashboard/content/DashStatsCards.vue';
import TabsContainer from '@/components/dashboard/content/DashTabsContainer.vue';
import AssignmentsList from '@/components/dashboard/content/CourcesYouMyLike.vue';
import dashNav from '../dashboard/content/dashNav.vue';

export default {
  name: 'ElearningDashboard',
  components: {
    dashNav,
    SidebarHeader,
    SidebarNavigation,
    UpgradeCard,
    DashboardHeader,
    WelcomeSection,
    StatsCards,
    TabsContainer,
    AssignmentsList,
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
  setup(props, { emit }) {
    // State
    const activeTab = ref('overview');
    const isSidebarOpen = ref(false);
    
    // Data
    const appName = 'LearnHub';
    const logoIcon = GraduationCap;
    
    const user = {
      name: 'Jane Doe',
      role: 'Student',
      avatar: '/placeholder.svg?height=60&width=60'
    };
    
    const welcomeMessage = 'Welcome back, Jane';
    const welcomeSubtitle = 'Here\'s an overview of your learning progress';
    
    const navigationSections = [
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
    ];
    
    const stats = [
      {
        title: 'Courses in Progress',
        value: '4',
        icon: 'BookOpen',
        iconClass: 'courses-icon',
        trendText: '+1 from last month',
        trendIcon: ArrowUp,
        trendClass: 'positive'
      },
      {
        title: 'Completed Courses',
        value: '12',
        icon: 'GraduationCap',
        iconClass: 'completed-icon',
        trendText: '2 this month',
        trendIcon: ArrowUp,
        trendClass: 'positive'
      },
      {
        title: 'Hours Studied',
        value: '28.5',
        icon: 'Clock',
        iconClass: 'hours-icon',
        trendText: '+5.5 from last week',
        trendIcon: ArrowUp,
        trendClass: 'positive'
      },
      {
        title: 'Assignments Due',
        value: '5',
        icon: 'FileText',
        iconClass: 'assignments-icon',
        trendText: '2 due today',
        trendIcon: Minus,
        trendClass: 'neutral'
      }
    ];
    
    const tabs = [
      { label: 'Overview', value: 'overview' },
      { label: 'My Courses', value: 'courses' },
      { label: 'Progress', value: 'progress' }
    ];
    
    const courses = [
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
    ];
    
    const assignments = [
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
    ];
    
    const notificationCount = 3;
    const searchPlaceholder = 'Search courses, assignments...';
    const showUpgradeCard = true;
    const upgradeCard = {
      title: 'Upgrade to Pro',
      description: 'Get unlimited access to all courses',
      buttonText: 'Upgrade Now'
    };

    // Computed properties
    const allCourses = computed(() => {
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
      
      return [...courses, ...additionalCourses];
    });

    // Methods
    const toggleSidebar = () => {
      isSidebarOpen.value = !isSidebarOpen.value;
    };

    const onSearch = (query) => {
      emit('search', query);
    };

    return {
      activeTab,
      isSidebarOpen,
      toggleSidebar,
      onSearch,
      appName,
      logoIcon,
      user,
      welcomeMessage,
      welcomeSubtitle,
      navigationSections,
      stats,
      tabs,
      courses,
      assignments,
      notificationCount,
      searchPlaceholder,
      showUpgradeCard,
      upgradeCard,
      allCourses
    };
  }
};
</script>

<style scoped>
.app-container {
  display: flex;
  min-height: 100vh;
}

.left-sidebar {
  width: 280px;
  background-color: var(--bg-white);
  border-right: 1px solid var(--border-color);
  display: flex;
  flex-direction: column;
}

.main-content {
  flex: 1;
  max-width: calc(100% - 280px);
  background-color: var(--bg-light);
}

.dashboard-content {
  padding: 24px;
  max-width: 1200px;
  margin: 0 auto;
}

@media (max-width: 1024px) {
  .main-content {
    max-width: 100%;
  }
  
  .left-sidebar {
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    z-index: 99999999;
    transform: translateX(-100%);
    transition: transform 0.3s ease;
    box-shadow: 5px 0 15px rgba(0, 0, 0, 0.1);
  }
  
  .left-sidebar.open {
    transform: translateX(0);
  }
}
</style>