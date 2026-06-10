<template>
  <section class="assassin">
    <Header />
    <div class="assassins">
      <div class="assassin_header">
        <div class="assasin_left">
          <h3>Brand</h3>
          <p>NetEase Games</p>
        </div>
        <h3 class="project-heading">NARAKA: <br> BLADEPOINT</h3>
      </div>
      <video class="video_bgg" autoplay muted loop playsinline>
        <source
          src="https://res.cloudinary.com/dcdfqrryo/video/upload/v1779890173/Naraka_ibsqpt.mp4"
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
        NetEase Games approached ASH to create an original global content series to promote NARAKA: BLADEPOINT and its newest weapon: Viper Ning's Whipsword.

          <br />
          <br />
          NetEase needed a unique production partner capable of producing both cinematic content faithful to the game and engineering a real, functional weapon. The delivered assets then needed to perform across both Western and Chinese audiences simultaneously.

          <br />
          <br />
          The Whipsword itself immediately raised the stakes. This is a sword that transforms between a rigid blade and a flexible whip, demanding precise engineering to bring to life.
        </h2>
      </div>

      <div class="assassin_images_category">
          <img src="/images/nakara-big-image-1.webp" alt="" data-desktop />
        
          <img src="/images/nakara-big-image-1.webp" alt="" data-mobile />
        
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
        This was much more than an influencer campaign or simple sponsorship. ASH approached this as a global content production. We created the story, built the weapon, and delivered assets forged for dual-market distribution.

          </h2>
          <div class="doom_process">
            <div>
              <h3>1</h3>
              <h2>Partnered with the artisans at Baltimore Knife & Sword to engineer a fully functional Whipsword able to transform from rigid sword to flexible whip at the click of a switch.</h2>
            </div>
            <div>
              <h3>2</h3>
              <h2>Produced a content series designed for U.S. and Chinese audiences across YouTube, TikTok, Bilibili, Douyin, and more.</h2>
            </div>
            <div>
              <h3>3</h3>
              <h2>Delivered all assets to NetEase for deployment across their official Chinese channels, extending the campaign's reach well beyond Western platforms.</h2>
            </div>
          </div>
        </div>
      </div>

      <div class="assassin_images_category">
          <img src="/images/nakara-big-image-2.webp" alt="" data-desktop />
        
          <img src="/images/nakara-big-image-2.webp" alt="" data-mobile />
        
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
            v-for="(highlight, index) in NARAKA_EXECUTION_HIGHLIGHTS"
            :key="index"
            class="section-flex_right_content"
          >
            <h2>{{ highlight.title }}</h2>
            <p>{{ highlight.description }}</p>
          </div>
        </div>
      </div>

      <div class="campaign naraka_results">
        <h2 class="campaign_header">
          <span class="assassin_span">[</span>
          THE RESULTS
          <span class="assassin_span">]</span>
        </h2>

        <div class="naraka_results_grid">
          <div class="naraka_results_column naraka_results_column--left">
            <div class="naraka_results_panel naraka_results_panel--us">
              <h3 class="naraka_results_label">
                <span class="assassin_span">[</span>
                US CAMPAIGN
                <span class="assassin_span">]</span>
              </h3>
              <div class="naraka_results_platforms naraka_results_platforms--us">
                <div class="naraka_results_platform naraka_results_platform--youtube">
                  <div class="naraka_results_platform_brand">
                    <img src="/images/youtube.svg" alt="YouTube" />
                    <span>YouTube</span>
                  </div>
                  <div class="naraka_results_platform_text">
                    <p class="naraka_results_platform_value">2.12M</p>
                    <p class="naraka_results_platform_label">Views</p>
                  </div>
                </div>
                <div class="naraka_results_platform naraka_results_platform--tiktok">
                  <div class="naraka_results_platform_brand">
                    <img src="/images/tiktok-colored.svg" alt="TikTok" />
                    <span>TikTok</span>
                  </div>
                  <div class="naraka_results_platform_text">
                    <p class="naraka_results_platform_value">427K</p>
                    <p class="naraka_results_platform_label">Views</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="naraka_results_panel naraka_results_panel--community">
              <h3 class="naraka_results_label">
                <span class="assassin_span">[</span>
                COMMUNITY REACTION
                <span class="assassin_span">]</span>
              </h3>
              <img
                src="/images/naraka-community-reactions.webp"
                alt="Community reaction to the NARAKA BLADEPOINT Whipsword campaign"
                class="naraka_results_image"
              />
            </div>

            <div class="naraka_results_panel naraka_results_panel--total">
              <h3 class="naraka_results_label">
                <span class="assassin_span">[</span>
                TOTAL CAMPAIGN
                <span class="assassin_span">]</span>
              </h3>
              <div class="naraka_results_totals">
                <div class="naraka_results_total_stat">
                  <h2>5</h2>
                  <p>Videos</p>
                </div>
                <div class="naraka_results_total_stat">
                  <h2>3.1M</h2>
                  <p>Views</p>
                </div>
                <div class="naraka_results_total_stat">
                  <h2>43.7K</h2>
                  <p>Likes</p>
                </div>
                <div class="naraka_results_total_stat">
                  <h2>2.4K</h2>
                  <p>Saves</p>
                </div>
                <div class="naraka_results_total_stat naraka_results_total_stat--wide">
                  <h2>9.9K</h2>
                  <p>Shares</p>
                </div>
              </div>
            </div>
          </div>

          <div class="naraka_results_column naraka_results_column--right">
            <div class="naraka_results_panel naraka_results_panel--china">
              <h3 class="naraka_results_label">
                <span class="assassin_span">[</span>
                CHINA CAMPAIGN
                <span class="assassin_span">]</span>
              </h3>
              <div class="naraka_results_platforms">
                <div class="naraka_results_platform naraka_results_platform--douyin">
                  <img
                    src="/images/tiktok-china.webp"
                    alt="Douyin"
                    class="naraka_results_platform_logo"
                  />
                  <div class="naraka_results_platform_text">
                    <p class="naraka_results_platform_value">+548K</p>
                    <p class="naraka_results_platform_label">Views</p>
                  </div>
                </div>
                <div class="naraka_results_platform naraka_results_platform--bilibili">
                  <img
                    src="/images/bilibili.webp"
                    alt="Bilibili"
                    class="naraka_results_platform_logo"
                  />
                  <div class="naraka_results_platform_text">
                    <p class="naraka_results_platform_value">+57K</p>
                    <p class="naraka_results_platform_label">Views</p>
                  </div>
                </div>
                <div class="naraka_results_platform naraka_results_platform--rednote">
                  <img
                    src="/images/rednote.webp"
                    alt="Red Note"
                    class="naraka_results_platform_logo"
                  />
                  <div class="naraka_results_platform_text">
                    <p class="naraka_results_platform_value">+25K</p>
                    <p class="naraka_results_platform_label">Views</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="naraka_results_panel naraka_results_panel--official">
              <h3 class="naraka_results_label">
                <span class="assassin_span">[</span>
                OFFICIAL BRAND REACTION
                <span class="assassin_span">]</span>
              </h3>
              <img
                src="/images/naraka-official-brand-reaction.webp"
                alt="Official NARAKA BLADEPOINT brand reaction to the Whipsword collaboration"
                class="naraka_results_image"
              />

              <p class="naraka_results_official_text">
                NARAKA: BLADEPOINT partnered with the world-renowned bladesmith team Baltimore Knife & Sword to create a 1:1 real-life replica of the legendary whip sword. The moment this sword steps out of NARAKA and into reality, “Unbound in body, limitless in the way of combat” becomes more than just a slogan. Special thanks to the master craftsmen at Man at Arms: Reforged for their incredible work.
              </p>
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
            v-for="(highlight, index) in NARAKA_LEARNINGS"
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
            v-for="(highlight, index) in NARAKA_TAKEAWAYS"
            :key="index"
            class="section-flex_right_content"
          >
            <h2>{{ highlight.title }}</h2>
            <p>{{ highlight.description }}</p>
          </div>
        </div>
      </div>


      <div class="assassin_images_category">
        <img src="/images/nakara-big-image-3.webp" alt="" data-desktop />
        <img src="/images/nakara-big-image-3.webp" alt="" data-mobile />
      </div>
      <RelatedWork />
    </div>
    <Contact />
    <Footer />
  </section>
</template>
