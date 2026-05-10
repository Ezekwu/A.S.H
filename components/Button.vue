<template>
  <section class="button">
    <template v-if="isSubmit">
      <button
        type="submit"
        class="btn bd"
        :class="btnClass"
        :disabled="disabled"
      >
        {{ label }}
      </button>
      <div class="colors">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </template>
    <NuxtLink v-else :href="href" :target="target">
      <button class="btn bd" :class="btnClass">{{ label }}</button>
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
  btnClass: {
    type: [String, Array, Object],
    default: undefined,
  },
});
</script>
