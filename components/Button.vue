<template>
  <section class="button">
    <template v-if="isSubmit">
      <button class="btn bd" type="submit" :disabled="disabled">
        {{ label }}
      </button>
      <div class="colors">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </template>
    <NuxtLink v-else :href="href" :target="target">
      <button class="btn bd">{{ label }}</button>
      <div class="colors">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </NuxtLink>
  </section>
</template>

<script setup lang="ts">
defineProps({
  label: {
    type: String,
    default: "LET’S COLLABORATE",
  },
  isSubmit: {
    type: Boolean,
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  href: {
    type: String,
    default: "/contacts",
  },
  target: {
    type: String,
    default: "_blank",
  },
});
</script>
