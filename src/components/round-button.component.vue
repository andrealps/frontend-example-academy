<template>
  <button :class="baseClass" @click="emit('click')">
    <font-awesome-icon :icon="icon" :size="size" />
  </button>
</template>

<script setup lang="ts">
  defineProps<{
    icon: string;
    size?: string;
  }>();
  const emit = defineEmits(['click']);

  const baseClass = 'round-button';
</script>

<style scoped lang="scss">
  .round-button {
    $button-height: 40px;

    width: $button-height;
    height: $button-height;
    border: none;
    border-radius: 50%;
    text-decoration: none;
    color: white;
    background: #243d48;

    &:hover {
      background: #15242a;
    }
  }
</style>
