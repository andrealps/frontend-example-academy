<template>
  <main :class="baseClass">
    <h1 :class="`${baseClass}__title`">Welcome, User!</h1>
    <div :class="`${baseClass}__content`">
      <p :class="`${baseClass}__content-count`">The count is: {{ count }}</p>
      <div :class="`${baseClass}__content-buttons`">
        <round-button
          :class="`${baseClass}__content-button`"
          icon="fa-solid fa-plus"
          data-test="add-button"
          @click="add"
        />
        <round-button
          :class="`${baseClass}__content-button`"
          icon="fa-solid fa-minus"
          data-test="remove-button"
          @click="subtract"
        />
      </div>
      <button v-if="showReset" :class="`${baseClass}__reset-button`" @click="reset">
        Reset count
      </button>
    </div>
  </main>
</template>

<script setup lang="ts">
  import { computed, ref } from 'vue';
  import RoundButton from './components/RoundButton.vue';

  const baseClass = 'main-app';

  const initialCountValue = 0;
  const count = ref(initialCountValue);

  const showReset = computed((): boolean => {
    return count.value !== initialCountValue;
  });

  function add(): void {
    count.value = count.value + 1;
  }

  function subtract(): void {
    count.value = count.value - 1;
  }

  function reset(): void {
    count.value = initialCountValue;
  }
</script>

<style scoped lang="scss">
  .main-app {
    flex-direction: column;
    align-items: center;
    margin: auto;
    height: 150px;
    padding: 100px;
    border: 8px solid #0086b2;
    border-radius: 5%;

    &,
    &__content {
      display: flex;
      flex-direction: column;
      gap: 20px;
    }

    &__content {
      width: 100%;
      align-items: center;
    }

    &__content-buttons {
      display: flex;
      justify-content: center;
      gap: 10px;
    }

    &__content-button,
    &__reset-button {
      cursor: pointer;
    }

    &__reset-button {
      padding: 8px;
      border: 2px solid #0086b2;
      border-radius: 5%;
      text-decoration: none;
      background: white;

      &:hover {
        background: #e8e8e8;
      }
    }
  }
</style>
