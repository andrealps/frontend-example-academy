<script setup lang="ts">
  import { ref } from 'vue';
  import RoundButton from './components/RoundButton.vue';

  const baseClass = 'app';

  const count = ref(0);
</script>

<template>
  <header>My app</header>
  <main>
    <h1 :class="`${baseClass}__title`">Welcome, User!</h1>
    <div :class="`${baseClass}__content`">
      <p :class="`${baseClass}__content-count`">The count is: {{ count }}</p>
      <div :class="`${baseClass}__content-buttons`">
        <round-button id="add" icon="+" />
        <round-button id="add" icon="-" />
      </div>
    </div>
  </main>
</template>

<style scoped lang="scss">
  .app {
  }
</style>
