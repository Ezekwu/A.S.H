<template>
  <header class="header">
    <div>
      <NuxtLink @click="scrollTo('#caseid')" target="_blank">
        <h3 class="header_text">
          <span>WORK</span>
          <span>WORK</span>
        </h3>
      </NuxtLink>
      <NuxtLink @click="scrollTo('#aboutid')" target="_blank">
        <h3 class="header_text">
          <span>ABOUT</span>
          <span>ABOUT</span>
        </h3>
      </NuxtLink>
    </div>
    <div class="header_profile">
      <div class="menuh">
        <NuxtLink href="/"><img src="/images/artsvg.svg" alt="" /></NuxtLink>
        <img
          class="menuimg"
          data-mobile
          src="/images/menu.svg"
          alt=""
          v-if="active"
          @click="active = false"
        />
        <img
          class="menuimg open"
          data-mobile
          src="/images/icon2.svg"
          alt=""
          v-else
          @click="active = true"
        />
      </div>
    </div>
    <div>
      <NuxtLink @click="scrollTo('#servicesid')" target="_blank">
        <h3 class="header_text">
          <span>SERVICES</span>
          <span>SERVICES</span>
        </h3>
      </NuxtLink>
      <NuxtLink @click="scrollTo('#contactid')" target="_blank">
        <h3 class="header_text">
          <span>CONTACT US</span>
          <span>CONTACT US</span>
        </h3>
      </NuxtLink>
    </div>
    <div class="header_menu" v-if="active">
      <!-- <div class="header_menu_header">
        <NuxtLink href="/" class="header_profile">
          <div class="menuh">
            <img src="/images/artsvg.svg" alt="" />
            <img class="menuimg" data-mobile src="/images/icon2.svg" alt="" />
          </div>
        </NuxtLink>
      </div> -->
      <NuxtLink @click="scrollTo('#caseid')" target="_blank">
        <h3 data-id="work" class="header_menu_text">WORK</h3>
      </NuxtLink>
      <NuxtLink @click="scrollTo('#aboutid')" target="_blank">
        <h3 data-id="about" class="header_menu_text">ABOUT</h3>
      </NuxtLink>
      <NuxtLink @click="scrollTo('#servicesid')" target="_blank">
        <h3 data-id="services" class="header_menu_text">SERVICES</h3>
      </NuxtLink>
      <NuxtLink @click="scrollTo('#contactid')" target="_blank">
        <h3 data-id="contact" class="header_menu_text">CONTACT</h3>
      </NuxtLink>
    </div>
  </header>
</template>

<script setup lang="ts">
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
const active = ref(false);
onMounted(() => {
  gsap.registerPlugin(ScrollTrigger);
  ScrollTrigger.create({
    trigger: ".hero",
    scrub: true,
    start: "0% 0%",
    end: "150% 0%",
    animation: gsap.fromTo(
      ".header",
      { backgroundColor: "#00000000" },
      { backgroundColor: "black" },
    ),
  });
});

function scrollTo(id: string) {
  window.lenis.scrollTo(id);
}
</script>
