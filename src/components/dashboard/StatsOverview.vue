<template>
  <div class="stats-grid">
    <div class="stat-card animate-fadeIn" style="animation-delay: 0.1s">
      <div class="stat-content">
        <div class="stat-icon-wrapper">
          <div class="stat-icon">
            <BookOpen class="icon" />
          </div>
          <div class="stat-details">
            <dl>
              <dt class="stat-label">Courses in Progress</dt>
              <dd>
                <div class="stat-value">4</div>
              </dd>
            </dl>
          </div>
        </div>
      </div>
    </div>

    <div class="stat-card animate-fadeIn" style="animation-delay: 0.2s">
      <div class="stat-content">
        <div class="stat-icon-wrapper">
          <div class="stat-icon">
            <CheckCircle class="icon" />
          </div>
          <div class="stat-details">
            <dl>
              <dt class="stat-label">Completed Courses</dt>
              <dd>
                <div class="stat-value">12</div>
              </dd>
            </dl>
          </div>
        </div>
      </div>
    </div>

    <div class="stat-card animate-fadeIn" style="animation-delay: 0.3s">
      <div class="stat-content">
        <div class="stat-icon-wrapper">
          <div class="stat-icon">
            <Clock class="icon" />
          </div>
          <div class="stat-details">
            <dl>
              <dt class="stat-label">Learning Hours</dt>
              <dd>
                <div class="stat-value">87.5</div>
              </dd>
            </dl>
          </div>
        </div>
      </div>
    </div>

    <div class="stat-card animate-fadeIn" style="animation-delay: 0.4s">
      <div class="stat-content">
        <div class="stat-icon-wrapper">
          <div class="stat-icon">
            <Award class="icon" />
          </div>
          <div class="stat-details">
            <dl>
              <dt class="stat-label">Certificates Earned</dt>
              <dd>
                <div class="stat-value">3</div>
              </dd>
            </dl>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Award, BookOpen, CheckCircle, Clock } from 'lucide-vue-next';
</script>

<style scoped>
/* Stats grid styles */
.stats-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.25rem;
  margin-bottom: 2rem;
}

@media (min-width: 640px) {
  .stats-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .stats-grid {
    grid-template-columns: repeat(4, 1fr);
  }
}

.stat-card {
  overflow: hidden;
  border-radius: 0.5rem;
  background-color: white;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  transition: all 0.3s;
}

.stat-card:hover {
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
}

.stat-content {
  padding: 1.25rem;
}

.stat-icon-wrapper {
  display: flex;
  align-items: center;
}

.stat-icon {
  flex-shrink: 0;
}

.stat-icon .icon {
  height: 1.5rem;
  width: 1.5rem;
  color: #2563eb;
}

.stat-details {
  margin-left: 1.25rem;
  width: 0;
  flex: 1;
}

.stat-label {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 0.875rem;
  font-weight: 500;
  color: #6b7280;
}

.stat-value {
  font-size: 1.125rem;
  font-weight: 500;
  color: #111827;
}

/* Animations */
.animate-fadeIn {
  animation: fadeIn 0.5s ease-in-out forwards;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>