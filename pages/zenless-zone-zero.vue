<template>
  <section class="assassin">
    <Header />
    <div class="assassins">
      <div class="assassin_header">
        <div class="assasin_left">
          <h3>Brand</h3>
          <p>Hoyoverse</p>
        </div>
        <h3 class="project-heading">ZENLESS ZONE <br> ZERO</h3>
      </div>
      <video class="video_bgg" autoplay muted loop playsinline>
        <source
          src="https://res.cloudinary.com/dvk4u5mgl/video/upload/v1770833692/Bethesda_ESO_CaseStudy_Video_1_jksipb.mp4"
        />
      </video>
      <div class="assassin_challenges">
        <h3 class="assassin_challenges_left">
          <span class="assassin_span">[</span>THE CHALLENGE<span
            class="assassin_span"
            >]</span
          >
        </h3>
        <h2 class="assassin_challenges_right">
          The team at HoYoverse approached ASH with an incredible challenge: to bring one of their most iconic weapons to life.

          <br />
          <br />
          To celebrate the arrival of Hoshimi Miyabi, the latest and most anticipated playable Agent in Zenless Zone Zero, we were commissioned to forge her signature weapon, the Tailless Blue Flame Katana. The blade stands as a symbol of Miyabi’s strength, her family lineage, and the source of her formidable power.
        </h2>
      </div>

      <div class="assassin_approach">
        <h3 class="assassin_approach_left">
          <span class="assassin_span">[</span>OUR APPROACH<span
            class="assassin_span"
            >]</span
          >
        </h3>

        <div class="assassin_challenges_right">
          <p>The smiths at Baltimore Knife & Sword forged Tailless with meticulous accuracy based on the in-game design.

          <br />
          <br />
          Since Tailless is the source of Miyabi’s power, the blade and the flame needed to feel alive—electric, lethal, and legendary. The result was otherworldy yet believable.
          
          <br />
          <br />

          Every choice in production was guided by Miyabi’s lore and family legacy. This ensured we created a weapon with generational power and history.

          <br />
          <br />

          This build fused real-world blacksmithing techniques with the stylized world of ZZZ.</p>
          <div class="zenless-image-grid">
            <img src="/images/s1.webp" alt="" />
            <img src="/images/s2.webp" alt="" />
            <img src="/images/s3.webp" alt="" />
          </div>
        </div>
      </div>
      

      <div class="section-flex doom_execution-highligts_flex">
        <h3 class="section-flex_left">
          <span class="assassin_span">[</span>
          EXECUTION HIGHLIGHTS
          <span
            class="assassin_span"
            >]</span
          >
        </h3>
        <div class="section-flex_right doom_execution-highligts_flex_right">
          <div
            v-for="(highlight, index) in ZENLESS_ZERO_EXECUTION_HIGHLIGHTS"
            :key="index"
            class="section-flex_right_content"
          >
            <h2>{{ highlight.title }}</h2>
            <p>{{ highlight.description }}</p>
          </div>
          <p class="last-highlight-content">Players raved across Reddit, X, and HoYo’s official discussion forums.</p>
        </div>
      </div>

      <div class="campaign">
        <h2 class="campaign_header"><span class="assassin_span">[</span>
          THE RESULTS
          <span
            class="assassin_span"
            >]</span
          ></h2>
        <div class="campaign_campaign">
          <div class="cf">
            <h2><span class="plus-sign">+</span>400<span class="plus-sign">%</span></h2>
            <p>More first month viewers</p>
          </div>
          <div class="cf">
            <h2><span class="plus-sign">+</span>200<span class="plus-sign">%</span></h2>
            <p>More total views</p>
          </div>
          <div class="cf">
            <h2><span class="plus-sign">+</span>219<span class="plus-sign">%</span></h2>
            <p>More viewer engagement</p>
          </div>
          <div class="cf">
            <h2><span class="plus-sign">+</span>1.2M</h2>
            <p>Views on YouTube</p>
          </div>
        </div>
      </div>

      <div class="section-flex doom_learnings_flex">
        <h3 class="section-flex_left">
          <span class="assassin_span">[</span>
          KEY LEARNINGS
          <span
            class="assassin_span"
            >]</span
          >
        </h3>
        <div class="section-flex_right doom_execution-highligts_flex_right">
          <div
            v-for="(highlight, index) in ZENLESS_ZERO_EXECUTION_LEARNINGS"
            :key="index"
            class="section-flex_right_content"
          >
            <h2>{{ highlight.title }}</h2>
            <p>{{ highlight.description }}</p>
          </div>
        </div>
      </div>

        <div class="section-flex doom_takeaways_flex">
        <h3 class="section-flex_left">
          <span class="assassin_span">[</span>
          TAKEAWAYS
          <span
            class="assassin_span"
            >]</span
          >
        </h3>
        <div class="section-flex_right doom_execution-highligts_flex_right">
          <div
            v-for="(highlight, index) in ZENLESS_ZERO_EXECUTION_TAKEAWAYS"
            :key="index"
            class="section-flex_right_content"
          >
            <h2>{{ highlight.title }}</h2>
            <p>{{ highlight.description }}</p>
          </div>
        </div>
      </div>


      <div class="assassin_images_category">
        <img src="/images/l1.webp" alt="" data-desktop />
        <img src="/images/l2.webp" alt="" data-desktop />
        <img src="/images/l3.webp" alt="" data-desktop />
        <img src="/images/l1.webp" alt="" data-mobile />
        <img src="/images/l2.webp" alt="" data-mobile />
        <img src="/images/l3.webp" alt="" data-mobile />
      </div>
      <div class="assassin_related">
        <h2>Related Work</h2>
        <div class="assassin_related_content">
          <NuxtLink href="/assassin" class="assassin_related_content_div">
            <img src="/images/r.webp" alt="" />
            <p>Assassin's Creed: Shadows</p>
          </NuxtLink>
          <NuxtLink href="/elderScroll" class="assassin_related_content_div">
            <img src="/images/m.webp" alt="" />
            <p>The Elder Scrolls Online: Gold Road</p>
          </NuxtLink>
          <NuxtLink href="/gameOfThrones" class="assassin_related_content_div">
            <img src="/images/d.webp" alt="" />
            <p>Game of Thrones: Legends</p>
          </NuxtLink>
        </div>
      </div>
    </div>
    <Contact />
    <Footer />
  </section>
</template>
