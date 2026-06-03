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
          src="https://res.cloudinary.com/dcdfqrryo/video/upload/v1779890186/Doom_jqsxan.mp4"
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

      <div class="assassin_images_category">
        <img src="/images/doom-big-image-1.webp" alt="" data-desktop />
        <img src="/images/doom-big-image-1.webp" alt="" data-mobile />
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
          Our approach always emphasizes the making-of. We gave fans a close-up look at how the Shield Saw came together piece by piece, and what it's capable of.
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

      <div class="assassin_images_category">
        <img src="/images/doom-big-image-2.webp" alt="" data-desktop />
        <img src="/images/doom-big-image-2.webp" alt="" data-mobile />
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

      <div class="campaign doom_results">
        <h2 class="campaign_header">
          <span class="assassin_span">[</span>
          RESULTS
          <span class="assassin_span">]</span>
        </h2>

        <div class="doom_results_grid">
          <div class="doom_results_column doom_results_column--left">
            <div class="doom_results_stat cf">
              <h2><span class="plus-sign">+</span>32M</h2>
              <p>Total campaign views across <br> YouTube, TikTok, IG, and X.</p>
            </div>

            <div class="doom_results_panel community-reaction-panel">
              <h3 class="doom_results_panel_label community-reaction-label">
                <span class="assassin_span">[</span>
                COMMUNITY REACTION
                <span class="assassin_span">]</span>
              </h3>
              <img
                src="/images/doom-testimonials.webp"
                alt="Community reaction to the DOOM Shield Saw campaign"
                class="doom_results_image"
                data-desktop
              />
              <img
                src="/images/doom-testimonials.webp"
                alt="Community reaction to the DOOM Shield Saw campaign"
                class="doom_results_image"
                data-mobile
              />
            </div>

            <div class="earned-media-container">
              <div class="doom_results_panel">
                <h3 class="doom_results_panel_label">
                  <span class="assassin_span">[</span>
                  EARNED MEDIA
                  <span class="assassin_span">]</span>
                </h3>
                <div class="doom_results_stat doom_results_stat--compact cf">
                  <h2><span class="plus-sign">+</span>380K</h2>
                  <p>Daily Mail</p>
                </div>
            </div>
            <img
                src="/images/daily-mail.webp"
                alt="Daily Mail coverage of the DOOM Shield Saw"
                class="doom_results_image"
                data-desktop
              />
              <img
                src="/images/daily-mail.webp"
                alt="Daily Mail coverage of the DOOM Shield Saw"
                class="doom_results_image"
                data-mobile
              />
            </div>
          </div>

          <div class="doom_results_column doom_results_column--right">
            <div class="doom_results_panel">
              <h3 class="doom_results_panel_label total-campaign-views-label">
                <span class="assassin_span">[</span>
                TOTAL CAMPAIGN VIEWS
                <span class="assassin_span">]</span>
              </h3>
              <div class="doom_results_socials">
                <div class="doom_results_social doom_results_social--youtube">
                  <img src="/images/youtube.svg" alt="YouTube" />
                  <div class="doom_results_social_text">
                    <p class="doom_results_social_value">+2.3M</p>
                    <p class="doom_results_social_label">Views</p>
                  </div>
                </div>
                <div class="doom_results_social doom_results_social--tiktok">
                  <img src="/images/tiktok-colored.svg" alt="TikTok" />
                  <div class="doom_results_social_text">
                    <p class="doom_results_social_value">+3.8M</p>
                    <p class="doom_results_social_label">Views</p>
                  </div>
                </div>
                <div class="doom_results_social doom_results_social--instagram">
                  <img src="/images/instagram.svg" alt="Instagram" />
                  <div class="doom_results_social_text">
                    <p class="doom_results_social_value">+25M</p>
                    <p class="doom_results_social_label">Views</p>
                  </div>
                </div>
                <div class="doom_results_social doom_results_social--x">
                  <img src="/images/x.svg" alt="X" />
                  <div class="doom_results_social_text">
                    <p class="doom_results_social_value">+1.0M</p>
                    <p class="doom_results_social_label">Views</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="doom_results_influencer_card">
              <img
                src="/images/tanktolman-ig.webp"
                alt="Tank Tolman reaction to the DOOM Shield Saw"
                class="doom_results_influencer doom_results_influencer--full"
              />
              <img
                src="/images/tanktolman.webp"
                alt="Tank Tolman reaction to the DOOM Shield Saw"
                class="doom_results_influencer doom_results_influencer--photo"
              />
            </div>

            <div class="doom_results_panel earned-media-panel">
              <h3 class="doom_results_panel_label">
                <span class="assassin_span">[</span>
                EARNED MEDIA
                <span class="assassin_span">]</span>
              </h3>
              <div class="doom_results_stat doom_results_stat--compact cf">
                <h2><span class="plus-sign">+</span>10M</h2>
                <p>Reaction Video Views</p>
              </div>
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
        <img src="/images/doom-big-image-3.webp" alt="" data-mobile />
      </div>
      <RelatedWork />
    </div>
    <Contact />
    <Footer />
  </section>
</template>
