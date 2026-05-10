<template>
  <Header />
  <section class="work_page">
    <div class="work_page_hero" aria-labelledby="work-page-heading">
      <div class="work_page_hero_inner">
        <h1 id="work-page-heading" class="work_page_hero_title">Our work</h1>
        <p class="work_page_hero_tagline">
          Some of the work that still makes us feel something.
        </p>
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
            <img src="/images/k.webp" alt="" class="k" />
            <h4><span>[</span>READ MORE <span>]</span></h4>
          </div>
        </div>
      </NuxtLink>
      <NuxtLink href="/elderScroll">
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
            <img src="/images/m1.webp" alt="" />
            <h4 class="readmore"><span>[</span>READ MORE <span>]</span></h4>
          </div>
        </div>
      </NuxtLink>
      <NuxtLink href="/gameOfThrones">
        <div class="case_one">
          <div class="brand_div">
            <h5>Brand</h5>
            <p>Zynga</p>
          </div>
          <h3>Game of Thrones: <span class="shadows"> Legends</span></h3>
          <div class="readmore_div">
            <img src="/images/m3.webp" alt="" />
            <h4 class="readmore"><span>[</span>READ MORE <span>]</span></h4>
          </div>
        </div>
      </NuxtLink>
      <NuxtLink href="/zenless-zone-zero">
        <div class="case_one">
          <div class="brand_div">
            <h5>Brand</h5>
            <p>Hoyoverse</p>
          </div>
          <h3>Zenless Zone <br /><span class="shadows">Zero</span></h3>
          <div class="readmore_div">
            <img
              src="/images/zenless-big-image-1.webp"
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
          <h3>Doom The Dark <br /><span class="shadows">Ages</span></h3>
          <div class="readmore_div">
            <img
              src="/images/doom-big-image-1.webp"
              alt="DOOM: The Dark Ages"
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
          <h3>Naraka <br /><span class="shadows">Bladepoint</span></h3>
          <div class="readmore_div">
            <img
              src="/images/nakara-big-image-1.webp"
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
              src="/images/albion-big-image-1.webp"
              alt="Albion Online"
              class="k"
            />
            <h4 class="readmore"><span>[</span>READ MORE <span>]</span></h4>
          </div>
        </div>
      </NuxtLink>
    </div>
    <Contact />
    <Footer />
  </section>
</template>

<script setup lang="ts">
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

onMounted(() => {
  gsap.registerPlugin(ScrollTrigger);

  const cards = gsap.utils.toArray<HTMLElement>(".case_one");
  
  cards.forEach((card) => {
    ScrollTrigger.create({
      trigger: card,
      start: "top center",
      end: "bottom center",
      toggleClass: "active",
      markers: true,
    });
  });
});

onUnmounted(() => {
  ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
});
</script>
