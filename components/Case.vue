<template>
  <section ref="sectionRef" class="case" id="caseid">
    <div class="case_heading">
      <div class="case_heading_spacer" aria-hidden="true" />
      <h2>Our Work</h2>
    </div>
    <div class="case_content">
      <NuxtLink href="/doom-the-dark-ages">
        <div class="case_one">
          <div class="brand_div">
            <h5>Brand</h5>
            <p>Bethesda Softworks</p>
          </div>
          <h3>Doom: The Dark <br /><span class="shadows">Ages</span></h3>
          <div class="readmore_div">
            <img
              src="/images/doom-of-the-dark-ages-work.webp"
              alt="DOOM: The Dark Ages"
              class="k"
            />
            <h4 class="readmore"><span>[</span>READ MORE <span>]</span></h4>
          </div>
        </div>
      </NuxtLink>
      <NuxtLink href="/assassin">
        <div class="case_one">
          <div class="brand_div">
            <h5>Brand</h5>
            <p>Ubisoft</p>
          </div>
          <h3>Assassin's Creed <span class="shadows"> Shadows </span></h3>
          <div class="readmore_div">
            <img src="/images/assasin-work.webp" alt="" class="k" />
            <h4><span>[</span>READ MORE <span>]</span></h4>
          </div>
        </div>
      </NuxtLink>
        <NuxtLink href="/zenless-zone-zero">
        <div class="case_one">
          <div class="brand_div">
            <h5>Brand</h5>
            <p>HoYoverse</p>
          </div>
          <h3>Zenless Zone <br /><span class="shadows">Zero</span></h3>
          <div class="readmore_div">
            <img
              src="/images/zenless-zone-work.webp"
              alt="Zenless Zone Zero"
              class="k"
            />
            <h4 class="readmore"><span>[</span>READ MORE <span>]</span></h4>
          </div>
        </div>
      </NuxtLink>
      <NuxtLink href="/nakara-blade-point">
        <div class="case_one">
          <div class="brand_div">
            <h5>Brand</h5>
            <p>NetEase Games</p>
          </div>
          <h3>Naraka: <br /><span class="shadows">Bladepoint</span></h3>
          <div class="readmore_div">
            <img
              src="/images/nakara-work.webp"
              alt="NARAKA: BLADEPOINT"
              class="k"
            />
            
            <h4 class="readmore"><span>[</span>READ MORE <span>]</span></h4>
          </div>
        </div>
      </NuxtLink>
    </div>
    <div class="case_heading case_heading--cta">
      <div class="case_heading_spacer" aria-hidden="true" />
      <Button
        label="VIEW ALL WORK"
        href="/work"
        target="_self"
        btnClass="view_all_work_button"
      />
    </div>

  </section>
</template>

<script setup lang="ts">
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

const sectionRef = ref<HTMLElement | null>(null);
const triggers = ref<ScrollTrigger[]>([]);

onMounted(async () => {
  await nextTick();
  gsap.registerPlugin(ScrollTrigger);

  const cards = gsap.utils.toArray<HTMLElement>(".case_one", sectionRef.value);

  cards.forEach((card) => {
    const st = ScrollTrigger.create({
      trigger: card,
      start: "top center",
      end: "bottom center",
      toggleClass: "active",
    });
    triggers.value.push(st);
  });

  ScrollTrigger.refresh();
});

onUnmounted(() => {
  triggers.value.forEach((trigger) => trigger.kill());
  triggers.value = [];
});
</script>
