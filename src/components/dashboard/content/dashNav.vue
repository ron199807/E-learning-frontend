<template>
    <nav class="navbar">
      <div class="navbar-container">
        <div class="navbar-brand">
          <div class="logo">
            <svg class="logo-icon" width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" fill="#6366F1"/>
              <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" fill="#6366F1"/>
            </svg>
            <span class="logo-text">Btee</span>
          </div>
          <span class="page-title">Dashboard</span>
        </div>
  
        <div class="navbar-menu">
          <router-link to="/" class="nav-item" active-class="active">
            <span class="nav-text">Home</span>
          </router-link>
        </div>
      </div>
    </nav>
  </template>
  
  <script>
  export default {
    name: 'DashboardNavbar',
  }
  </script>
  
  <style scoped>
  .navbar {
    background-color: rgba(255, 255, 255, 0.98);
    backdrop-filter: blur(12px);
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
    border-bottom: 1px solid rgba(0, 0, 0, 0.03);
    position: sticky;
    top: 0;
    z-index: 1000;
    height: 64px;
    display: flex;
    align-items: center;
  }
  
  .navbar-container {
    width: 100%;
    max-width: 1440px;
    margin: 0 auto;
    padding: 0 24px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .navbar-brand {
    display: flex;
    align-items: center;
    gap: 24px;
  }
  
  .logo {
    display: flex;
    align-items: center;
    cursor: pointer;
  }
  
  .logo-icon {
    width: 32px;
    height: 32px;
    margin-right: 8px;
    transition: transform 0.2s ease;
  }
  
  .logo:hover .logo-icon {
    transform: scale(1.1);
  }
  
  .logo-text {
    font-size: 1.25rem;
    font-weight: 700;
    color: #111827;
    letter-spacing: -0.5px;
  }
  
  .page-title {
    font-size: 1rem;
    font-weight: 600;
    color: #4B5563;
    position: relative;
    padding-left: 24px;
  }
  
  .page-title::before {
    content: "";
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    height: 20px;
    width: 1px;
    background-color: #E5E7EB;
  }
  
  .navbar-menu {
    display: flex;
    align-items: center;
    gap: 8px;
  }
  
  .nav-item {
    display: flex;
    align-items: center;
    padding: 8px 16px;
    border-radius: 6px;
    text-decoration: none;
    transition: all 0.2s ease;
    height: 40px;
  }
  
  .nav-item:hover {
    background-color: #F3F4F6;
  }
  
  .nav-item.active {
    background-color: #EEF2FF;
  }
  
  .nav-item.active .nav-text {
    color: #6366F1;
    font-weight: 500;
  }
  
  .nav-text {
    font-size: 0.9375rem;
    font-weight: 400;
    color: #4B5563;
    transition: color 0.2s ease;
  }
  
  @media (max-width: 768px) {
    .navbar-container {
      padding: 0 16px;
    }
    
    .navbar-brand {
      gap: 16px;
    }
    
    .page-title {
      padding-left: 16px;
      font-size: 0.875rem;
    }
    
    .nav-item {
      padding: 8px 12px;
    }
  }
  
  @media (max-width: 480px) {
    .page-title {
      display: none;
    }
  }
  </style>