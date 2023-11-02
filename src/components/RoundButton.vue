<template>
  <button :class="baseClass" @click="emit('click', props.id)">{{ props.icon }}</button>
</template>

<script setup lang="ts">
  const props = defineProps<{
    id: string;
    icon: string;
    tooltip?: string;
  }>();
  const emit = defineEmits<{
    click: [value: string];
  }>();

  const baseClass = 'round-button';
</script>

<style scoped lang="scss">
  .round-button {
    border-radius: 50%;
  }
</style>
