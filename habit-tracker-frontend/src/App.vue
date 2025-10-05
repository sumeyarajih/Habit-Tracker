<template>
  <div id="app" class="app-container">
    <!-- Global Header -->
    <header class="app-header">
      <h1>Habit Tracker</h1>
      <p>Stay consistent and track your habits! 💪</p>
    </header>

    <!-- Main Content rendered by Vue Router -->
    <main>
      <router-view />
    </main>

    <!-- Global Footer -->
    <footer class="app-footer">
      <p>© 2025 Habit Tracker</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>
