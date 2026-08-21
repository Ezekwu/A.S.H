<template>
  <Header />
  <section ref="workRef" class="work_page">
    <div class="work_page_hero" aria-labelledby="work-page-heading">
      <div class="work_page_hero_inner">
        <h1 id="work-page-heading" class="work_page_hero_title">Our work</h1>
      </div>
    </div>
    <div class="case_content work_page_case_content">
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
      <NuxtLink href="/the-elder-scrolls-online-gold-road">
        <div class="case_one">
          <div class="brand_div">
            <h5>Brand</h5>
            <p>Bethesda Softworks</p>
          </div>
          <h3>
            The Elder Scrolls Online:<br />
            <span class="shadows">Gold Road</span>
          </h3>
          <div class="readmore_div">
            <img src="/images/elder-scroll-work.webp" alt="" class="k" />
            <h4 class="readmore"><span>[</span>READ MORE <span>]</span></h4>
          </div>
        </div>
      </NuxtLink>
      <NuxtLink href="/game-of-thrones-legends">
        <div class="case_one">
          <div class="brand_div">
            <h5>Brand</h5>
            <p>Zynga</p>
          </div>
          <h3>Game of Thrones: <span class="shadows"> Legends</span></h3>
          <div class="readmore_div">
            <img src="/images/game-of-thrones-work.webp" alt="" class="k" />
            <h4 class="readmore"><span>[</span>READ MORE <span>]</span></h4>
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
      <NuxtLink href="/naraka-blade-point">
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
    
      <NuxtLink href="/albion-online">
        <div class="case_one">
          <div class="brand_div">
            <h5>Brand</h5>
            <p>Sandbox Interactive</p>
          </div>
          <h3>Albion <br> <span class="shadows">Online</span></h3>
          <div class="readmore_div">
            <img
              src="/images/albion-online-work.webp"
              alt="Albion Online"
              class="k"
            />
            <h4 class="readmore"><span>[</span>READ MORE <span>]</span></h4>
          </div>
        </div>
      </NuxtLink>
      <!-- <NuxtLink href="/where-winds-meet">
        <div class="case_one">
          <div class="brand_div">
            <h5>Brand</h5>
            <p>NetEase Games</p>
          </div>
          <h3>Where Winds <br /><span class="shadows">Meet</span></h3>
          <div class="readmore_div">
            <img
              src="/images/wwm-popup-image.webp"
              alt="Where Winds Meet"
              class="k"
            />
            <h4 class="readmore"><span>[</span>READ MORE <span>]</span></h4>
          </div>
        </div>
      </NuxtLink> -->
    </div>
    <Contact />
    <Footer />
  </section>
</template>

<script setup lang="ts">
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

const workRef = ref<HTMLElement | null>(null);
const triggers = ref<ScrollTrigger[]>([]);

onMounted(async () => {
  await nextTick();
  gsap.registerPlugin(ScrollTrigger);

  const cards = gsap.utils.toArray<HTMLElement>(".case_one", workRef.value);

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
