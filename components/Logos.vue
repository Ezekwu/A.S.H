<template>
  <section class="logo" aria-labelledby="partners-heading">
    <h1 id="partners-heading">Our Partners</h1>

    <div class="logo_logo logo_logo--desktop">
      <div
        v-for="(row, rowIndex) in desktopRows"
        :key="`desktop-row-${rowIndex}`"
        class="logo_row"
        :class="`logo_row--${row.length}`"
      >
        <img
          v-for="partner in row"
          :key="partner.name"
          :src="partner.src"
          :alt="partner.name"
          class="logo_img"
          :class="partner.sizeClass"
          loading="lazy"
          decoding="async"
        />
      </div>
    </div>

    <div class="logo_logo logo_logo--mobile">
      <div
        v-for="(row, rowIndex) in mobileRows"
        :key="`mobile-row-${rowIndex}`"
        class="logo_row"
        :class="`logo_row--${row.length}`"
      >
        <img
          v-for="partner in row"
          :key="partner.name"
          :src="partner.src"
          :alt="partner.name"
          class="logo_img"
          :class="partner.sizeClass"
          loading="lazy"
          decoding="async"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
type PartnerLogo = {
  name: string;
  src: string;
  sizeClass?: string;
};

const partners: PartnerLogo[] = [
  { name: "Ubisoft", src: "/images/ubisoft.svg", sizeClass: "logo_img--ubisoft" },
  { name: "NetEase Games", src: "/images/netease.svg", sizeClass: "logo_img--netease" },
  { name: "Snail Games", src: "/images/snail.svg", sizeClass: "logo_img--snail" },
  { name: "Hoyoverse", src: "/images/hoyoverse.svg", sizeClass: "logo_img--hoyoverse" },
  { name: "Plarium", src: "/images/plarium.svg", sizeClass: "logo_img--plarium" },
  { name: "Gearbox Software", src: "/images/gearbox.svg", sizeClass: "logo_img--gearbox" },
  { name: "Zynga", src: "/images/zynga.svg", sizeClass: "logo_img--zynga" },
  { name: "Bethesda Game Studios", src: "/images/bethesda.svg", sizeClass: "logo_img--bethesda" },
  { name: "Amazon Games", src: "/images/amazon-games.svg", sizeClass: "logo_img--amazon-games" },
  { name: "EA", src: "/images/ea.svg", sizeClass: "logo_img--ea" },
  { name: "Xbox", src: "/images/xbox.svg", sizeClass: "logo_img--xbox" },
  { name: "Blizzard", src: "/images/blizzard.svg", sizeClass: "logo_img--blizzard" },
  { name: "Facepunch", src: "/images/facepunch.svg", sizeClass: "logo_img--facepunch" },
  { name: "Konami", src: "/images/konami.svg", sizeClass: "logo_img--konami" },
  { name: "Remedy Entertainment", src: "/images/rr.svg", sizeClass: "logo_img--rr" },
  { name: "Bohemia Interactive", src: "/images/bohemia.svg", sizeClass: "logo_img--bohemia" },
];

const desktopRows = [
  partners.slice(0, 5),
  partners.slice(5, 11),
  partners.slice(11, 16),
];

const mobileRows = [
  partners.slice(0, 3),
  partners.slice(3, 6),
  partners.slice(6, 9),
  partners.slice(9, 12),
  partners.slice(12, 14),
  partners.slice(14, 16),
];
</script>
