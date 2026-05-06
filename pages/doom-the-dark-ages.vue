<template>
  <section class="assassin">
    <Header />
    <div class="assassins">
      <div class="assassin_header">
        <div class="assasin_left">
          <h3>Brand</h3>
          <p>BETHESDA SOFTWORK</p>
        </div>
        <h3 class="project-heading">DOOM THE DARK <br> AGES</h3>
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
          To hype the release of DOOM: The Dark Ages, Bethesda teamed up with ASH to do something no fan expected: create the Slayer’s new Shield Saw in real life. Not as a prop. Not as a model. But as a fully functional, lethal machine that could rip and tear with the might of the Slayer.

          <br />
          <br />
          All in all, we wanted to honor the game’s craftsmanship and creativity through tangible, real-world engineering.
        </h2>
      </div>

      <div class="assassin_approach">
        <h3 class="assassin_approach_left">
          <span class="assassin_span">[</span>OUR APPROACH<span
            class="assassin_span"
            >]</span
          >
        </h3>

        <div class="assassin_approach_righter">
          <h2 class="assassin_approach_right">
          Our approach always emphasizes the making-of. We gave fans a close-up look at how the Shield Saw came together piece by piece—and what it’s capable of.
          </h2>
          <div class="doom_process">
            <div>
              <h3>1</h3>
              <h2>Partnered with the artisans at Baltimore Knife & Sword to engineer the Shield Saw with working mechanics.</h2>
            </div>
            <div>
              <h3>2</h3>
              <h2>Captured the full process for an episode of Man at Arms: Reforged plus a short-form content series showcasing BTS and use.</h2>
            </div>
            <div>
              <h3>3</h3>
              <h2>Safely demonstrated the shield in action.</h2>
            </div>
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
            v-for="(highlight, index) in DOOM_EXECUTION_HIGHLIGHTS"
            :key="index"
            class="section-flex_right_content"
          >
            <h2>{{ highlight.title }}</h2>
            <p>{{ highlight.description }}</p>
          </div>
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
            <h2><span class="plus-sign">+</span>10M</h2>
            <p>Creator reaction views.</p>
          </div>
          <div class="cf">
            <h2><span class="plus-sign">+</span>380K </h2>
            <p>Daily mail views</p>
          </div>
          <div class="cf">
            <h2><span class="plus-sign">+</span>33M</h2>
            <p>Total campaign views across YouTube, TikTok, IG, and X.</p>
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
            v-for="(highlight, index) in DOOM_LEARNINGS"
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
            v-for="(highlight, index) in DOOM_TAKEAWAYS"
            :key="index"
            class="section-flex_right_content"
          >
            <h2>{{ highlight.title }}</h2>
            <p>{{ highlight.description }}</p>
          </div>
        </div>
      </div>


      <div class="assassin_images_category">
        <img src="/images/doom-big-image-1.webp" alt="" data-desktop />
        <img src="/images/doom-big-image-2.webp" alt="" data-desktop />
        <img src="/images/doom-big-image-3.webp" alt="" data-desktop />
        <img src="/images/doom-big-image-1.webp" alt="" data-mobile />
        <img src="/images/doom-big-image-2.webp" alt="" data-mobile />
        <img src="/images/doom-big-image-3.webp" alt="" data-mobile />
      </div>
      <div class="result">
        <h2 class="result_header">[RESULTS]</h2>
        <div class="result_result">
          <div>
            <h2>GOING BEYOND:</h2>
            <p>
              The campaign exceeded expectations by generating over 1M+ views
              and 24M+ impressions across our platforms, sparking widespread
              discussion online.
            </p>
          </div>
          <div>
            <h2>COMMUNITY ENGAGEMENT:</h2>
            <p>
              The man at arms: regorged episode created a deeper connection
              between players and the game world, with fans praising the
              attention to detail and the tangible representation of an exciting
              new in-game item.
            </p>
          </div>
        </div>
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
