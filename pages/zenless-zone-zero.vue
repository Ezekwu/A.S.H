<template>
  <section class="assassin">
    <Header />
    <div class="assassins">
      <div class="assassin_header">
        <div class="assasin_left">
          <h3>Brand</h3>
          <p>HoYoverse</p>
        </div>
        <h3 class="project-heading">ZENLESS ZONE <br> ZERO</h3>
      </div>
      <video class="video_bgg" autoplay muted loop playsinline>
        <source
          src="https://res.cloudinary.com/dcdfqrryo/video/upload/v1779890179/Zzz-Video_q0tvny.mp4"
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

      <div class="assassin_images_category">
        <img src="/images/zenless-big-image-1.webp" alt="" data-desktop />
        <img src="/images/zenless-big-image-1.webp" alt="" data-mobile />
      </div>

      <div class="assassin_approach">
        <h3 class="assassin_approach_left">
          <span class="assassin_span">[</span>OUR APPROACH<span
            class="assassin_span"
            >]</span
          >
        </h3>

        <div class="assassin_challenges_right">
          <p>
            The smiths at Baltimore Knife & Sword forged Tailless with meticulous accuracy based on the in-game design.

          <br />
          <br />
          Since Tailless is the source of Miyabi's power, the blade and the flame needed to feel alive: electric, lethal, and legendary. The result was otherworldly yet believable.
          
          <br />
          <br />

          Every choice in production was guided by Miyabi’s lore and family legacy. This ensured we created a weapon with generational power and history.
          <br />
          <br />
          This build fused real-world blacksmithing techniques with the stylized world of ZZZ.
          </p>
          <div class="zenless-image-grid">
            <img src="/images/zenless-grid-image-1.webp" alt="" />
            <img src="/images/zenless-grid-image-2 .webp" alt="" />
            <img src="/images/zenless-grid-image-3.webp" alt="" />
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

      <div class="campaign zenless_results">
        <h2 class="campaign_header">
          <span class="assassin_span">[</span>
          RESULTS
          <span class="assassin_span">]</span>
        </h2>
        <div class="zenless_results_grid">
          <div class="zenless_results_stats">
            <div class="cf">
              <h2>
                <span class="plus-sign">+</span>400<span class="plus-sign">%</span>
              </h2>
              <p>More First Month Viewers*</p>
            </div>
            <div class="cf">
              <h2>
                <span class="plus-sign">+</span>200<span class="plus-sign">%</span>
              </h2>
              <p>More Total Views*</p>
            </div>
            <div class="cf">
              <h2>
                <span class="plus-sign">+</span>219<span class="plus-sign">%</span>
              </h2>
              <p>More Viewer Engagement*</p>
            </div>
            <div class="zenless_results_footnote">
              <p>*Compared To 12 month <br> Channel Average</p>
            </div>
          </div>

          <div class="zenless_results_media">
            <img
              src="/images/zenless-yt.webp"
              alt="Man at Arms Reforged Zenless Zone Zero episode on YouTube"
              class="zenless_results_youtube"
            />
            <div class="zenless_results_panel zenless_results_panel--community">
              <h3 class="zenless_results_label zenless_results_label--community">
                <span class="assassin_span">[</span>
                COMMUNITY REACTION
                <span class="assassin_span">]</span>
              </h3>
              <img
                src="/images/zenless-testimonial.webp"
                alt="Community reaction to the Zenless Zone Zero collaboration"
                class="zenless_results_testimonial"
              />
            </div>
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

      <div class="assassin_images_category">
        <img src="/images/zenless-big-image-2.webp" alt="" data-desktop />
        <img src="/images/zenless-big-image-2.webp" alt="" data-mobile />
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
        <img src="/images/zenless-big-image-3.webp" alt="" data-desktop />
        <img src="/images/zenless-big-image-3.webp" alt="" data-mobile />
      </div>
      <RelatedWork />
    </div>
    <Contact />
    <Footer />
  </section>
</template>
