<template>
  <div class="app">
    <NuxtPage></NuxtPage>
  </div>
</template>

<script lang="ts" setup>
import { LenisScroll } from "./interactions/base/scroll";
import "./styles/index.scss";

const projName = ref("New website");
const projDesc = ref("Bootstrapped with the Nuxt3 GoodyPlate");
const config = useRuntimeConfig();
onMounted(() => {
  const appId = config.public.apolloAppId;
  const n = Math.random().toString(36).substring(7);
  const o = document.createElement('script');
  o.src = `https://assets.apollo.io/micro/website-tracker/tracker.iife.js?nocache=${n}`;
  o.async = true;
  o.defer = true;
  o.onload = function () {
    (window as any).trackingFunctions.onLoad({ appId });
  };
  document.head.appendChild(o);
});

const computedPageMeta = computed(() => {
  return {
    title: projName.value,
    meta: [
      { hid: "description", property: "description", content: projDesc.value },
      { hid: "og-type", property: "og:type", content: "website" },
      { hid: "og-title", property: "og:title", content: projName.value },
      {
        hid: "og-description",
        property: "og:description",
        content: projDesc.value,
      },
      { hid: "og-image", property: "og:image", content: "src" },
      {
        hid: "twitter-card",
        property: "twitter:card",
        content: "summary_large_image",
      },
      {
        hid: "twitter-title",
        property: "twitter:title",
        content: projName.value,
      },
      {
        hid: "twitter-description",
        property: "twitter:description",
        content: projDesc.value,
      },
      { hid: "twitter-image", property: "twitter:image", content: "src" },
    ],
  };
});

useHead(computedPageMeta);

onMounted(() => {
  const scroll = new LenisScroll();
});
</script>
