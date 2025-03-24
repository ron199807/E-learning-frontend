<template>
    <div class="welcome-section">
      <h1>{{ message }}</h1>
      <p>{{ subtitle }}</p>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      message: {
        type: String,
        required: true
      },
      subtitle: {
        type: String,
        required: true
      }
    }
  };
  </script>
  
  <style scoped>
  .welcome-section {
    margin-bottom: 24px;
  }
  
  .welcome-section h1 {
    font-size: 24px;
    font-weight: 700;
    margin-bottom: 4px;
    color: var(--text-primary);
  }
  
  .welcome-section p {
    color: var(--text-secondary);
    font-size: 14px;
  }
  </style>