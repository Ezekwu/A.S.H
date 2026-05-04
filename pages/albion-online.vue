<template>
  <section class="assassin">
    <Header />
    <div class="assassins">
      <div class="assassin_header">
        <div class="assasin_left">
          <h3>Brand</h3>
          <p>Sandbox Interactive</p>
        </div>
        <h3 class="project-heading">ALBION ONLINE</h3>
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
        Create a creator-driven, global gaming event that feels legendary, communal, and worthy.


          <br />
          <br />
          Sandbox Interactive, the studio behind Albion Online, sought to rally its community and creator ecosystem behind a contest that was more than just a giveaway. Much more. The goal was to mastermind a creator-led activation that was fiercely competitive, fun, communal, and worthy of the fight.
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
      ASH and Man at Arms teamed up with Sandbox Interactive to realize the Galatine Pair through meticulous craftsmanship and cinematic storytelling.

          </h2>
          <div class="doom_process">
            <div>
              <h3>1</h3>
              <h2>
                FORGED THE GALATINE PAIR:
                <br>
                <br>
                Using modern and ancient blacksmithing techniques to
                create a museum-quality weapon set.</h2>
            </div>
            <div>
              <h3>2</h3>
              <h2>
                PRODUCED A TEASER VIDEO:
                <br>
                <br>
                Released on Albion Online's YouTube channel to
                announce and build hype for the event.
              </h2>
            </div>
            <div>
              <h3>3</h3>
              <h2>
                FULL MAN AT ARMS EPISODE:
                <br>
                <br>
                A complete episode of Man at Arms: Reforged for the
                AWE Me channel documenting the entire build.
              </h2>
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
            v-for="(highlight, index) in ALBION_EXECUTION_HIGHLIGHTS"
            :key="index"
            class="section-flex_right_content"
          >
            <h2>{{ highlight.title }}</h2>
            <p>{{ highlight.description }}</p>
          </div>
        </div>
      </div>

      <div class="section-flex albion_impact_flex">
        <h3 class="section-flex_left impact-heading">
          <span class="assassin_span">[</span>
          IMPACT
          <span
            class="assassin_span"
            >]</span
          >
        </h3>
        <div class="section-flex_right doom_execution-highligts_flex_right">
          <div
            v-for="(highlight, index) in ALBION_EXECUTION_IMPACT"
            :key="index"
            class="section-flex_right_content"
          >
            <h2>{{ highlight.title }}</h2>
            <p>{{ highlight.description }}</p>
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
            v-for="(highlight, index) in ALBION_EXECUTION_LEARNINGS"
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
            v-for="(highlight, index) in ALBION_EXECUTION_TAKEAWAYS"
            :key="index"
            class="section-flex_right_content"
          >
            <h2>{{ highlight.title }}</h2>
            <p>{{ highlight.description }}</p>
          </div>
        </div>
      </div>

      <div class="assassin_images_category">
        <img src="/images/albion-big-image-1.webp" alt="" data-desktop />
        <img src="/images/albion-big-image-2.webp" alt="" data-desktop />
        <img src="/images/albion-big-image-3.webp" alt="" data-desktop />
        <img src="/images/albion-big-image-1.webp" alt="" data-mobile />
        <img src="/images/albion-big-image-2.webp" alt="" data-mobile />
        <img src="/images/albion-big-image-3.webp" alt="" data-mobile />
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
