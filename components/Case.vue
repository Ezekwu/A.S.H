<template>
  <section class="case" id="caseid">
    <div class="case_heading">
      <div class="case_heading_spacer" aria-hidden="true" />
      <h2>Our Work</h2>
    </div>
    <div class="case_content">
      <NuxtLink href="/assassin">
        <div
          class="case_one"
          :class="{ active: progress > 0 && progress < 0.3 }"
        >
          <div class="brand_div">
            <h5>Brand</h5>
            <p>Ubisoft</p>
          </div>
          <h3>Assassin's Creed <span class="shadows"> Shadows </span></h3>
          <div class="readmore_div">
            <img src="/images/k.webp" alt="" class="k" />
            <h4><span>[</span>READ MORE <span>]</span></h4>
          </div>
        </div>
      </NuxtLink>
      <NuxtLink href="/elderScroll">
        <div
          class="case_one"
          :class="{ active: progress > 0.3 && progress < 0.6 }"
        >
          <div class="brand_div">
            <h5>Brand</h5>
            <p>Bethesda Softworks</p>
          </div>
          <h3>
            The Elder Scrolls Online:<br />
            <span class="shadows">Gold Road</span>
          </h3>
          <div class="readmore_div">
            <img src="/images/m1.webp" alt="" />
            <h4 class="readmore"><span>[</span>READ MORE <span>]</span></h4>
          </div>
        </div>
      </NuxtLink>
      <NuxtLink href="/gameOfThrones">
        <div
          class="case_one"
          :class="{ active: progress > 0.6 && progress < 0.9 }"
        >
          <div class="brand_div">
            <h5>Brand</h5>
            <P>Zynga</P>
          </div>
          <h3>Game of Thrones: <span class="shadows"> Legends</span></h3>
          <div class="readmore_div">
            <img src="/images/m3.webp" alt="" />
            <h4 class="readmore"><span>[</span>READ MORE <span>]</span></h4>
          </div>
        </div>
      </NuxtLink>
    </div>
  </section>
</template>

<script setup lang="ts">
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
const progress = ref(0);
onMounted(() => {
  gsap.registerPlugin(ScrollTrigger);
  ScrollTrigger.create({
    trigger: ".case",
    scrub: true,
    start: "-15% 0%",
    end: "80% 0%",
    animation: gsap
      .timeline({
        onUpdate: function () {
          progress.value = this.progress();
        },
      })
      .to(".case", { y: 0 }),
  });
});
</script>
