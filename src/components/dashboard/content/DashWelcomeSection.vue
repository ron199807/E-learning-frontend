<template>
  <div class="welcome-container">
    <div class="welcome-content">
      <h1 class="welcome-heading">{{ message }}</h1>
      <p class="welcome-subtitle">{{ subtitle }}</p>
    </div>
    <div class="welcome-divider"></div>
  </div>
</template>

<script>
export default {
  props: {
    message: {
      type: String,
      required: true,
      validator: (value) => value.trim().length > 0
    },
    subtitle: {
      type: String,
      required: true,
      validator: (value) => value.trim().length > 0
    }
  }
};
</script>

<style scoped>
.welcome-container {
  margin-bottom: 32px;
  position: relative;
}

.welcome-content {
  padding-bottom: 16px;
}

.welcome-heading {
  font-size: 28px;
  font-weight: 700;
  color: #111827;
  margin: 0 0 12px 0;
  line-height: 1.3;
}

.welcome-subtitle {
  font-size: 16px;
  color: #6b7280;
  margin: 0;
  line-height: 1.5;
  max-width: 600px;
}

.welcome-divider {
  height: 1px;
  background: linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, #e5e7eb 50%, rgba(0, 0, 0, 0) 100%);
}

@media (max-width: 768px) {
  .welcome-heading {
    font-size: 24px;
  }
  
  .welcome-subtitle {
    font-size: 15px;
  }
}

@media (max-width: 480px) {
  .welcome-heading {
    font-size: 22px;
  }
  
  .welcome-subtitle {
    font-size: 14px;
  }
}
</style>