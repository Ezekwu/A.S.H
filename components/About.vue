<template>
  <section class="about" id="aboutid">
    <div class="about_content">
      <p class="about_left">
        <span class="about_span">[</span>ABOUT US<span class="about_span"
          >]</span
        >
      </p>
      <h3 class="about_right">
        ASH Entertainment is a creator-led collective that collaborates with
        leading game studios to bring video game worlds to life through video
        production, immersive experiences, media, and custom collectibles.
      </h3>
    </div>
    <div class="about_collage">
      <div class="about_collage_track">
        <div
          v-for="groupIndex in 2"
          :key="groupIndex"
          class="about_collage_group"
          :aria-hidden="groupIndex === 2 ? 'true' : undefined"
        >
          <img
            v-for="(imageSrc, imageIndex) in aboutCollageImages"
            :key="`${groupIndex}-${imageIndex}`"
            :src="imageSrc"
            alt=""
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const aboutCollageImages = [
  "/images/aa4.webp",
  "/images/assassin-big-image-1.webp",
  "/images/aa7.webp",
  "/images/r10.webp",
  "/images/r6.webp",
  "/images/two-men-forging-sword.webp",
  "/images/l1.webp",
  "/images/blacksmith-with-sledge-hammer.webp",
];
</script>
