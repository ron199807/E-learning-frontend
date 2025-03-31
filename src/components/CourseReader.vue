<template>
  <div class="app-container">
    <!-- Course Listing Page -->
    <transition name="page" mode="out-in">
      <div v-if="!selectedCourse" class="course-listing-page" key="listing">
        <h1 class="title">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon">
            <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
            <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
          </svg>
          Course Materials
        </h1>
        
        <div class="course-list">
          <transition-group name="list" tag="div" class="course-grid">
            <div 
              v-for="(course, index) in courses" 
              :key="course.id" 
              class="course-card"
              @click="openCourse(course.id)"
              :style="{ animationDelay: `${index * 0.1}s` }"
            >
              <div class="course-card-inner">
                <div class="course-header">
                  <div>
                    <h2 class="course-title">{{ course.title }}</h2>
                    <p class="course-description">{{ course.description }}</p>
                    <div class="badge-container">
                      <span class="badge badge-outline">{{ course.duration }}</span>
                      <span 
                        class="badge"
                        :class="{
                          'badge-beginner': course.level === 'Beginner',
                          'badge-intermediate': course.level === 'Intermediate',
                          'badge-advanced': course.level === 'Advanced'
                        }"
                      >
                        {{ course.level }}
                      </span>
                    </div>
                  </div>
                </div>
                <div class="course-footer">
                  <div class="progress-container">
                    <div class="progress-label">
                      <span>Progress</span>
                      <span>{{ course.progress || '0%' }}</span>
                    </div>
                    <div class="progress-bar">
                      <div class="progress-fill" :style="{ width: course.progress || '0%' }"></div>
                    </div>
                  </div>
                  <div class="course-action">
                    <span class="view-course">View Course</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M9 18l6-6-6-6"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </transition-group>
        </div>
      </div>

      <!-- Course Detail Page with Navigation -->
      <div v-else class="course-detail-page" key="detail">
        <!-- Top Navigation Bar -->
        <nav class="top-nav">
          <div class="nav-left">
            <button class="back-button" @click="goBack">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M19 12H5M12 19l-7-7 7-7"/>
              </svg>
              Back to Courses
            </button>
          </div>
          <div class="nav-title">
            {{ getCurrentCourse.title }}
          </div>
          <div class="nav-right">
            <div class="badge-container">
              <span class="badge badge-outline">{{ getCurrentCourse.duration }}</span>
              <span 
                class="badge"
                :class="{
                  'badge-beginner': getCurrentCourse.level === 'Beginner',
                  'badge-intermediate': getCurrentCourse.level === 'Intermediate',
                  'badge-advanced': getCurrentCourse.level === 'Advanced'
                }"
              >
                {{ getCurrentCourse.level }}
              </span>
            </div>
          </div>
        </nav>

        <!-- Two Column Layout -->
        <div class="course-content-layout">
          <!-- Left Sidebar Navigation -->
          <div class="course-sidebar">
            <h3 class="sidebar-title">Course Navigation</h3>
            <transition-group name="nav" tag="ul" class="sidebar-nav">
              <li 
                v-for="(section, index) in getCourseSections" 
                :key="index"
                :class="{ 'active': activeSectionIndex === index }"
                @click="activeSectionIndex = index"
              >
                <div class="nav-item-content">
                  <span class="section-number">{{ index + 1 }}</span>
                  <span class="section-title">{{ section.title }}</span>
                </div>
                <div class="section-progress" v-if="activeSectionIndex === index">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M20 6L9 17l-5-5"/>
                  </svg>
                </div>
              </li>
            </transition-group>
          </div>

          <!-- Right Content Area -->
          <div class="course-content-area">
            <transition name="fade" mode="out-in">
              <div class="content-container" :key="activeSectionIndex">
                <h1 class="content-title">{{ getCurrentSection.title }}</h1>
                <div class="content-body">
                  <content-renderer :content="getCurrentSection.content" />
                </div>
                
                <div class="content-navigation">
                  <button 
                    class="nav-button prev" 
                    :disabled="activeSectionIndex === 0"
                    @click="prevSection"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M15 18l-6-6 6-6"/>
                    </svg>
                    Previous
                  </button>
                  
                  <button 
                    class="nav-button next" 
                    :disabled="activeSectionIndex === getCourseSections.length - 1"
                    @click="nextSection"
                  >
                    Next
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M9 18l6-6-6-6"/>
                    </svg>
                  </button>
                </div>
              </div>
            </transition>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

// Sample course data - in a real app, this would come from an API or database
const courses = [
  {
    id: 1,
    title: "Introduction to React",
    description: "Learn the basics of React and component-based architecture",
    duration: "4 hours",
    level: "Beginner",
    progress: "25%",
    sections: [
      {
        title: "Introduction to React",
        content: `
          # Introduction to React
          
          React is a JavaScript library for building user interfaces. It was developed by Facebook and is now maintained by Facebook and a community of individual developers and companies.
          
          React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.
        `
      },
      {
        title: "Key Concepts",
        content: `
          # Key Concepts
          
          - **Components**: React applications are built using components, which are reusable pieces of code that return React elements describing what should appear on the screen.
          - **JSX**: JSX is a syntax extension to JavaScript that looks similar to HTML and makes it easier to write and add HTML in React.
          - **Virtual DOM**: React creates a lightweight representation of the real DOM in memory (Virtual DOM) for performance optimization.
        `
      },
      {
        title: "Getting Started",
        content: `
          # Getting Started
          
          To create a new React application, you can use Create React App:
          
          \`\`\`
          npx create-react-app my-app
          cd my-app
          npm start
          \`\`\`
          
          This sets up your development environment so that you can use the latest JavaScript features, provides a nice developer experience, and optimizes your app for production.
        `
      },
      {
        title: "Your First Component",
        content: `
          # Your First Component
          
          \`\`\`jsx
          function HelloWorld() {
            return <h1>Hello, world!</h1>;
          }
          
          export default HelloWorld;
          \`\`\`
          
          Components can be defined as functions or classes. The function above is a valid React component because it accepts a single "props" object argument and returns a React element.
        `
      }
    ]
  },
  {
    id: 2,
    title: "Advanced JavaScript Patterns",
    description: "Explore advanced JavaScript patterns and techniques",
    duration: "6 hours",
    level: "Advanced",
    progress: "10%",
    sections: [
      {
        title: "Advanced JavaScript Patterns",
        content: `
          # Advanced JavaScript Patterns
          
          This course covers sophisticated JavaScript patterns used in modern web development.
        `
      },
      {
        title: "Topics Covered",
        content: `
          # Topics Covered
          
          - Closures and scope
          - Prototypal inheritance
          - Module patterns
          - Functional programming concepts
          - Asynchronous patterns
        `
      },
      {
        title: "Closures Example",
        content: `
          # Closures Example
          
          \`\`\`javascript
          function createCounter() {
            let count = 0;
            
            return {
              increment: function() {
                count += 1;
                return count;
              },
              decrement: function() {
                count -= 1;
                return count;
              },
              getCount: function() {
                return count;
              }
            };
          }
          
          const counter = createCounter();
          console.log(counter.increment()); // 1
          console.log(counter.increment()); // 2
          console.log(counter.getCount());  // 2
          \`\`\`
          
          A closure is the combination of a function bundled together with references to its surrounding state (the lexical environment). In JavaScript, closures are created every time a function is created, at function creation time.
        `
      }
    ]
  },
  {
    id: 3,
    title: "CSS Grid and Flexbox Mastery",
    description: "Master modern CSS layout techniques",
    duration: "3 hours",
    level: "Intermediate",
    progress: "75%",
    sections: [
      {
        title: "CSS Grid and Flexbox Mastery",
        content: `
          # CSS Grid and Flexbox Mastery
          
          This course will teach you how to create complex layouts with CSS Grid and Flexbox.
        `
      },
      {
        title: "CSS Grid",
        content: `
          # CSS Grid
          
          CSS Grid Layout is a two-dimensional layout system designed for the web. It lets you lay out items in rows and columns.
          
          ### Basic Grid Example
          
          \`\`\`css
          .grid-container {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            grid-gap: 20px;
          }
          \`\`\`
        `
      },
      {
        title: "Flexbox",
        content: `
          # Flexbox
          
          Flexbox is a one-dimensional layout method designed for laying out items in rows or columns.
          
          ### Basic Flexbox Example
          
          \`\`\`css
          .flex-container {
            display: flex;
            justify-content: space-between;
            align-items: center;
          }
          \`\`\`
        `
      },
      {
        title: "When to Use Each",
        content: `
          # When to Use Each
          
          - Use **Grid** for two-dimensional layouts (rows AND columns)
          - Use **Flexbox** for one-dimensional layouts (rows OR columns)
          
          Grid is ideal for page layouts and complex grid systems, while Flexbox excels at aligning items within a container and distributing space among items in a more flexible way.
        `
      }
    ]
  }
];

// Component to render markdown-like content
const ContentRenderer = {
  props: {
    content: {
      type: String,
      required: true
    }
  },
  render() {
    // Split content by lines to handle different elements
    const lines = this.content.split('\n').map(line => line.trim()).filter(Boolean);
    
    return this.$createElement('div', { class: 'content-space' }, 
      lines.map((line, index) => {
        // Handle headings
        if (line.startsWith('# ')) {
          return this.$createElement('h1', { key: index, class: 'heading-1' }, line.substring(2));
        }
        if (line.startsWith('## ')) {
          return this.$createElement('h2', { key: index, class: 'heading-2' }, line.substring(3));
        }
        if (line.startsWith('### ')) {
          return this.$createElement('h3', { key: index, class: 'heading-3' }, line.substring(4));
        }
        
        // Handle code blocks
        if (line.startsWith('```') && !line.endsWith('```')) {
          // Find the end of the code block
          let codeContent = '';
          let i = index + 1;
          while (i < lines.length && !lines[i].endsWith('```')) {
            codeContent += lines[i] + '\n';
            i++;
          }
          
          return this.$createElement('div', { key: index, class: 'code-block' }, [
            this.$createElement('pre', {}, [
              this.$createElement('code', {}, codeContent)
            ])
          ]);
        }
        
        // Skip code block end markers
        if (line.endsWith('```')) {
          return null;
        }
        
        // Handle lists
        if (line.startsWith('- ')) {
          return this.$createElement('li', { key: index, class: 'list-item' }, line.substring(2));
        }
        
        // Regular paragraph
        if (!line.startsWith('```')) {
          return this.$createElement('p', { key: index, class: 'paragraph' }, line);
        }
        
        return null;
      }).filter(Boolean)
    );
  }
};

// State management
const selectedCourse = ref(null);
const activeSectionIndex = ref(0);

// Open a course
const openCourse = (courseId) => {
  selectedCourse.value = courseId;
  activeSectionIndex.value = 0; // Reset to first section
};

// Go back to course listing
const goBack = () => {
  selectedCourse.value = null;
  activeSectionIndex.value = 0;
};

// Navigation between sections
const nextSection = () => {
  if (activeSectionIndex.value < getCourseSections.value.length - 1) {
    activeSectionIndex.value++;
  }
};

const prevSection = () => {
  if (activeSectionIndex.value > 0) {
    activeSectionIndex.value--;
  }
};

// Computed properties
const getCurrentCourse = computed(() => {
  return courses.find(course => course.id === selectedCourse.value) || {};
});

const getCourseSections = computed(() => {
  return getCurrentCourse.value.sections || [];
});

const getCurrentSection = computed(() => {
  return getCourseSections.value[activeSectionIndex.value] || { title: '', content: '' };
});
</script>

<style>
/* Base styles */
:root {
  --primary: #4f46e5;
  --primary-light: #6366f1;
  --primary-dark: #4338ca;
  --primary-bg: #eef2ff;
  --secondary: #0ea5e9;
  --secondary-light: #38bdf8;
  --secondary-dark: #0284c7;
  --success: #10b981;
  --warning: #f59e0b;
  --danger: #ef4444;
  --gray-50: #f9fafb;
  --gray-100: #f3f4f6;
  --gray-200: #e5e7eb;
  --gray-300: #d1d5db;
  --gray-400: #9ca3af;
  --gray-500: #6b7280;
  --gray-600: #4b5563;
  --gray-700: #374151;
  --gray-800: #1f2937;
  --gray-900: #111827;
  --radius: 0.5rem;
  --shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  --shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  --transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  line-height: 1.6;
  color: var(--gray-800);
  background-color: var(--gray-50);
}

.app-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1rem;
  min-height: 100vh;
}

/* Animations */
.page-enter-active,
.page-leave-active {
  transition: opacity 0.3s, transform 0.3s;
}

.page-enter-from {
  opacity: 0;
  transform: translateY(20px);
}

.page-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}

.list-enter-active,
.list-leave-active {
  transition: all 0.3s ease;
}

.list-enter-from {
  opacity: 0;
  transform: translateY(30px);
}

.list-leave-to {
  opacity: 0;
  transform: translateY(-30px);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.nav-enter-active,
.nav-leave-active {
  transition: all 0.2s;
}

.nav-enter-from,
.nav-leave-to {
  opacity: 0;
  transform: translateX(-10px);
}

/* Course Listing Page */
.title {
  font-size: 2.25rem;
  font-weight: 800;
  margin-bottom: 2.5rem;
  display: flex;
  align-items: center;
  color: var(--gray-900);
  position: relative;
}

.title::after {
  content: '';
  position: absolute;
  bottom: -10px;
  left: 0;
  width: 60px;
  height: 4px;
  background-color: var(--primary);
  border-radius: 2px;
}

.icon {
  margin-right: 0.75rem;
  color: var(--primary);
}

.course-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 1.5rem;
}

.course-card {
  border-radius: var(--radius);
  overflow: hidden;
  background-color: white;
  box-shadow: var(--shadow);
  transition: var(--transition);
  cursor: pointer;
  height: 100%;
  animation: fadeIn 0.5s ease forwards;
  opacity: 0;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.course-card:hover {
  box-shadow: var(--shadow-lg);
  transform: translateY(-5px);
}

.course-card:hover .view-course {
  color: var(--primary);
}

.course-card:hover .course-action svg {
  transform: translateX(5px);
}

.course-card-inner {
  display: flex;
  flex-direction: column;
  height: 100%;
  border-top: 4px solid var(--primary);
}

.course-header {
  padding: 1.5rem;
  flex: 1;
}

.course-title {
  font-size: 1.25rem;
  font-weight: 700;
  margin: 0 0 0.75rem 0;
  color: var(--gray-900);
}

.course-description {
  color: var(--gray-600);
  margin: 0 0 1rem 0;
  font-size: 0.875rem;
  line-height: 1.5;
}

.badge-container {
  display: flex;
  gap: 0.5rem;
  margin-top: 0.75rem;
}

.badge {
  display: inline-flex;
  align-items: center;
  border-radius: 9999px;
  padding: 0.25rem 0.75rem;
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.025em;
}

.badge-outline {
  background-color: transparent;
  border: 1px solid var(--gray-300);
  color: var(--gray-600);
}

.badge-beginner {
  background-color: var(--success);
  color: white;
}

.badge-intermediate {
  background-color: var(--warning);
  color: white;
}

.badge-advanced {
  background-color: var(--danger);
  color: white;
}

.course-footer {
  padding: 1.25rem 1.5rem;
  border-top: 1px solid var(--gray-200);
  background-color: var(--gray-50);
}

.progress-container {
  margin-bottom: 1rem;
}

.progress-label {
  display: flex;
  justify-content: space-between;
  font-size: 0.75rem;
  font-weight: 500;
  color: var(--gray-600);
  margin-bottom: 0.5rem;
}

.progress-bar {
  height: 6px;
  background-color: var(--gray-200);
  border-radius: 9999px;
  overflow: hidden;
}

.progress-fill {
  height: 100%;
  background-color: var(--primary);
  border-radius: 9999px;
  transition: width 0.5s ease;
}

.course-action {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.view-course {
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--gray-700);
  transition: var(--transition);
}

.course-action svg {
  color: var(--primary);
  transition: var(--transition);
}

/* Course Detail Page */
.course-detail-page {
  display: flex;
  flex-direction: column;
  height: calc(100vh - 4rem);
  margin: -2rem -1rem;
  background-color: white;
}

.top-nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: white;
  border-bottom: 1px solid var(--gray-200);
  box-shadow: var(--shadow-sm);
  z-index: 10;
}

.nav-left {
  flex: 1;
}

.nav-title {
  flex: 2;
  text-align: center;
  font-weight: 700;
  font-size: 1.125rem;
  color: var(--gray-900);
}

.nav-right {
  flex: 1;
  display: flex;
  justify-content: flex-end;
}

.back-button {
  display: flex;
  align-items: center;
  background: none;
  border: none;
  color: var(--primary);
  cursor: pointer;
  font-size: 0.875rem;
  font-weight: 600;
  transition: var(--transition);
  padding: 0.5rem 0.75rem;
  border-radius: var(--radius);
}

.back-button:hover {
  background-color: var(--primary-bg);
}

.back-button svg {
  margin-right: 0.5rem;
}

.course-content-layout {
  display: flex;
  flex: 1;
  overflow: hidden;
}

.course-sidebar {
  width: 280px;
  background-color: var(--gray-50);
  border-right: 1px solid var(--gray-200);
  overflow-y: auto;
  padding: 1.5rem 1rem;
}

.sidebar-title {
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--gray-500);
  margin-bottom: 1.25rem;
  padding-bottom: 0.75rem;
  border-bottom: 1px solid var(--gray-200);
}

.sidebar-nav {
  list-style: none;
}

.sidebar-nav li {
  margin-bottom: 0.5rem;
  border-radius: var(--radius);
  transition: var(--transition);
  cursor: pointer;
  overflow: hidden;
}

.nav-item-content {
  display: flex;
  align-items: center;
  padding: 0.75rem 1rem;
}

.section-number {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  background-color: var(--gray-200);
  color: var(--gray-700);
  border-radius: 50%;
  font-size: 0.75rem;
  font-weight: 600;
  margin-right: 0.75rem;
  transition: var(--transition);
}

.section-title {
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--gray-700);
  transition: var(--transition);
}

.sidebar-nav li:hover {
  background-color: var(--gray-100);
}

.sidebar-nav li:hover .section-number {
  background-color: var(--gray-300);
}

.sidebar-nav li.active {
  background-color: var(--primary-bg);
}

.sidebar-nav li.active .section-number {
  background-color: var(--primary);
  color: white;
}

.sidebar-nav li.active .section-title {
  color: var(--primary-dark);
  font-weight: 600;
}

.section-progress {
  display: flex;
  justify-content: flex-end;
  padding-right: 1rem;
  color: var(--primary);
  margin-top: -2rem;
  margin-bottom: 0.5rem;
}

.course-content-area {
  flex: 1;
  overflow-y: auto;
  padding: 2rem;
  background-color: white;
}

.content-container {
  max-width: 800px;
  margin: 0 auto;
}

.content-title {
  font-size: 2rem;
  font-weight: 800;
  margin-bottom: 2rem;
  color: var(--gray-900);
  position: relative;
  padding-bottom: 1rem;
}

.content-title::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 40px;
  height: 3px;
  background-color: var(--primary);
  border-radius: 1.5px;
}

.content-body {
  background-color: white;
  border-radius: var(--radius);
  padding: 1.5rem 0;
}

.content-navigation {
  display: flex;
  justify-content: space-between;
  margin-top: 3rem;
  padding-top: 1.5rem;
  border-top: 1px solid var(--gray-200);
}

.nav-button {
  display: flex;
  align-items: center;
  padding: 0.75rem 1.25rem;
  border-radius: var(--radius);
  font-size: 0.875rem;
  font-weight: 600;
  background-color: white;
  border: 1px solid var(--gray-300);
  color: var(--gray-700);
  cursor: pointer;
  transition: var(--transition);
}

.nav-button:hover:not(:disabled) {
  background-color: var(--primary-bg);
  border-color: var(--primary-light);
  color: var(--primary);
}

.nav-button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.nav-button.prev svg {
  margin-right: 0.5rem;
}

.nav-button.next svg {
  margin-left: 0.5rem;
}

.nav-button.next {
  background-color: var(--primary);
  color: white;
  border-color: var(--primary);
}

.nav-button.next:hover:not(:disabled) {
  background-color: var(--primary-dark);
  border-color: var(--primary-dark);
  color: white;
}

/* Content Renderer Styles */
.content-space {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.heading-1 {
  font-size: 1.75rem;
  font-weight: 700;
  margin: 1.75rem 0 1rem 0;
  color: var(--gray-900);
  line-height: 1.3;
}

.heading-2 {
  font-size: 1.5rem;
  font-weight: 600;
  margin: 1.5rem 0 0.75rem 0;
  color: var(--gray-800);
  line-height: 1.4;
}

.heading-3 {
  font-size: 1.25rem;
  font-weight: 600;
  margin: 1.25rem 0 0.5rem 0;
  color: var(--gray-700);
  line-height: 1.4;
}

.paragraph {
  color: var(--gray-700);
  line-height: 1.7;
  margin: 0;
  font-size: 1rem;
}

.code-block {
  background-color: var(--gray-100);
  border-radius: var(--radius);
  padding: 1.25rem;
  margin: 1.25rem 0;
  overflow-x: auto;
  border: 1px solid var(--gray-200);
  position: relative;
}

.code-block::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 4px;
  background: linear-gradient(to right, var(--primary), var(--secondary));
}

.code-block pre {
  margin: 0;
  font-family: 'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, monospace;
  font-size: 0.875rem;
  line-height: 1.6;
  color: var(--gray-800);
}

.list-item {
  margin-left: 1.5rem;
  list-style-type: disc;
  color: var(--gray-700);
  padding: 0.25rem 0;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .course-content-layout {
    flex-direction: column;
  }
  
  .course-sidebar {
    width: 100%;
    border-right: none;
    border-bottom: 1px solid var(--gray-200);
    padding: 1rem;
  }
  
  .sidebar-nav {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
  }
  
  .sidebar-nav li {
    margin-bottom: 0;
    flex: 1 0 auto;
  }
  
  .nav-item-content {
    padding: 0.5rem 0.75rem;
  }
  
  .section-number {
    width: 20px;
    height: 20px;
    margin-right: 0.5rem;
  }
  
  .section-title {
    font-size: 0.75rem;
  }
  
  .course-content-area {
    padding: 1rem;
  }
  
  .content-title {
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
  }
  
  .content-body {
    padding: 1rem 0;
  }
  
  .top-nav {
    padding: 0.75rem 1rem;
  }
  
  .nav-title {
    font-size: 1rem;
  }
  
  .course-grid {
    grid-template-columns: 1fr;
  }
  
  .content-navigation {
    flex-direction: column;
    gap: 1rem;
  }
  
  .nav-button {
    width: 100%;
    justify-content: center;
  }
}
</style>