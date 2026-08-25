<template>
  <footer class="footer">
    <div class="first_footer">
      <NuxtLink href="/" target="_blank">
        <img src="/images/artsvg.svg" alt="" />
      </NuxtLink>
      <div>
        <NuxtLink href="https://www.instagram.com/manatarmsreforged" target="_blank">
          <img src="/images/InstagramLogo.svg" alt="" />
        </NuxtLink>
        <NuxtLink
          href="https://www.linkedin.com/company/ash-entertainment"
          target="_blank"
        >
          <img src="/images/LinkedLogo.svg" alt="" />
        </NuxtLink>
        <NuxtLink href="https://www.youtube.com/AweMe" target="_blank">
          <img src="/images/YoutubeLogo.svg" alt="" />
        </NuxtLink>
        <NuxtLink
          href="https://www.tiktok.com/@man_at_arms_reforged"
          target="_blank"
        >
          <img src="/images/ttok.svg" alt="" />
        </NuxtLink>
      </div>
    </div>
    <div class="second_footer">
      <NuxtLink @click="scrollTo('#caseid')" target="_blank">
        <h4>WORK</h4>
      </NuxtLink>
      <NuxtLink @click="scrollTo('#aboutid')" target="_blank">
        <h4>ABOUT</h4>
      </NuxtLink>
      <NuxtLink @click="scrollTo('#servicesid')" target="_blank">
        <h4>SERVICES</h4>
      </NuxtLink>
      <NuxtLink @click="scrollTo('#contactid')" target="_blank">
        <h4>CONTACT US</h4>
      </NuxtLink>
    </div>
    <div class="third_footer">
      <h3>Copyright © {{ currentYear }} ASH Entertainment</h3>
    </div>

    <div class="nined">
      <h2>
        Design and Dev by
        <a
          href="  https://www.ninefortyone.agency/"
          target="blank"
          class="footer_span"
        >
          Ninefortyone Studio</a
        >
      </h2>
    </div>
  </footer>
</template>

<script setup lang="ts">
const currentYear = new Date().getFullYear();

function scrollTo(id: string) {
  window.lenis.scrollTo(id);
}
</script>
