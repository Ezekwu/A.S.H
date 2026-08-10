<template>
  <section class="assassin">
    <Header />
    <div class="assassins">
      <div class="assassin_header">
        <div class="assasin_left">
          <h3>Brand</h3>
          <p>NetEase Games</p>
        </div>
        <h3 class="project-heading">WHERE WINDS MEET</h3>
      </div>
      <video
        class="video_bgg"
        autoplay
        muted
        loop
        playsinline
        poster="/images/two-men-forging-sword.webp"
      >
        <!-- Replace src with final Where Winds Meet hero video when available -->
        <source
          src="https://res.cloudinary.com/dcdfqrryo/video/upload/v1779890178/Albion_nijjj5.mp4"
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
          NetEase Games approached ASH to create a launch campaign for Where Winds Meet’s newest expansion, Chapter 2: Liangzhou.
          <br />
          <br />
          This was more than just a single content drop. NetEase Games wanted a social activation with the power to create momentum across platforms and rally the community, not only around the game’s newest chapter but also one of its most iconic weapons: the Heng Blade, a reimagined Hengdao grounded in Tang Dynasty history.
          <br />
          <br />
          ASH was tasked with producing the hero content, kicking off a community-wide challenge, and sourcing US-based creators to amplify the campaign's reach.
        </h2>
      </div>

      <div class="assassin_images_category">
        <img
          src="/images/two-men-forging-sword.webp"
          alt="Where Winds Meet campaign"
          data-desktop
        />
        <img
          src="/images/two-men-forging-sword.webp"
          alt="Where Winds Meet campaign"
          data-mobile
        />
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
          ASH treated this as a full-service campaign activation through producing original content, launching the challenge, and deploying creators from its talent network.
          </h2>
          <div class="doom_process">
            <div>
              <h3>1</h3>
              <h2>
                MAN AT ARMS AS THE CATALYST:
                <br />
                <br />
                The smiths at Baltimore Knife & Sword forged a real Heng Blade, captured across a full Man at Arms: Reforged episode and a dedicated short-form content series.

              </h2>
            </div>
            <div>
              <h3>2</h3>
              <h2>
                CHALLENGE KICKOFF:
                <br />
                <br />
                Man at Arms issued 
                an open call to the Where Winds Meet community through the
                 #AnythingCanBeHengBlade challenge, inviting players and creators to put their own unique spin on the blade.
              </h2>
            </div>
            <div>
              <h3>3</h3>
              <h2>
                CREATOR NETWORK DEPLOYMENT:
                <br />
                <br />
                ASH leveraged its talent network to source and activate additional US-based creators, extending the campaign’s footprint far beyond a single channel.
              </h2>
            </div>
          </div>
        </div>
      </div>

      <div class="section-flex doom_execution-highligts_flex">
        <h3 class="section-flex_left">
          <span class="assassin_span">[</span>
          EXECUTION HIGHLIGHTS
          <span class="assassin_span">]</span>
        </h3>
        <div class="section-flex_right doom_execution-highligts_flex_right">
          <div
            v-for="(highlight, index) in WHERE_WINDS_MEET_EXECUTION_HIGHLIGHTS"
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

        <div class="doom_results_grid wwm_results_grid">
          <div class="doom_results_column doom_results_column--left">
            <div class="doom_results_panel wwm_results_total_campaign">
              <h3 class="doom_results_panel_label">
                <span class="assassin_span">[</span>
                TOTAL CAMPAIGN
                <span class="assassin_span">]</span>
              </h3>
              <div class="wwm_results_total_campaign_stats">
                <div class="doom_results_stat cf wwm_results_total_campaign_stat">
                  <h2><span class="plus-sign">+</span>5.2M</h2>
                  <p>
                    Total campaign views across all creators &amp; platforms.
                  </p>
                </div>
                <div class="doom_results_stat cf wwm_results_total_campaign_stat">
                  <h2><span class="plus-sign">+</span>70.1K</h2>
                  <p>
                    Total campaign likes across all creators &amp; platforms.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div class="doom_results_column doom_results_column--right">
            <div class="doom_results_panel">
              <h3 class="doom_results_panel_label total-campaign-views-label">
                <span class="assassin_span">[</span>
                CAMPAIGN ACROSS PLATFORMS
                <span class="assassin_span">]</span>
              </h3>
              <div class="doom_results_socials wwm_results_platforms">
                <div class="doom_results_social doom_results_social--tiktok">
                  <img src="/images/tiktok-colored.svg" alt="TikTok" />
                  <div class="wwm_results_platform_metrics wwm_results_platform_metrics--stacked">
                    <div class="doom_results_social_text wwm_results_social_stat">
                      <p class="doom_results_social_value">+1.4M</p>
                      <p class="doom_results_social_label">Views</p>
                    </div>
                    <div class="doom_results_social_text wwm_results_social_stat">
                      <p class="doom_results_social_value">+21K</p>
                      <p class="doom_results_social_label">Likes</p>
                    </div>
                  </div>
                </div>
                <div class="doom_results_social doom_results_social--instagram">
                  <img src="/images/instagram.svg" alt="Instagram" />
                  <div class="wwm_results_platform_metrics wwm_results_platform_metrics--stacked">
                    <div class="doom_results_social_text wwm_results_social_stat">
                      <p class="doom_results_social_value">+2.8M</p>
                      <p class="doom_results_social_label">Views</p>
                    </div>
                    <div class="doom_results_social_text wwm_results_social_stat">
                      <p class="doom_results_social_value">+22K</p>
                      <p class="doom_results_social_label">Likes</p>
                    </div>
                  </div>
                </div>
                <div
                  class="doom_results_social doom_results_social--youtube wwm_results_platform--full"
                >
                  <img src="/images/youtube.svg" alt="YouTube" />
                  <div class="wwm_results_platform_metrics wwm_results_platform_metrics--row">
                    <div class="doom_results_social_text wwm_results_social_stat">
                      <p class="doom_results_social_value">+1M</p>
                      <p class="doom_results_social_label">Views</p>
                    </div>
                    <div class="doom_results_social_text wwm_results_social_stat">
                      <p class="doom_results_social_value">+28K</p>
                      <p class="doom_results_social_label">Likes</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="doom_results_panel community-reaction-panel">
              <h3 class="doom_results_panel_label community-reaction-label">
                <span class="assassin_span">[</span>
                COMMUNITY REACTION
                <span class="assassin_span">]</span>
              </h3>
              <img
                src="/images/wwm-community-reaction.png"
                alt="Community reaction to the Where Winds Meet campaign"
                class="doom_results_image"
                data-desktop
              />
              <img
                src="/images/wwm-community-reaction.png"
                alt="Community reaction to the Where Winds Meet campaign"
                class="doom_results_image"
                data-mobile
              />
            </div>
          </div>
        </div>
      </div>

        <div class="assassin_images_category">
        <img
          src="/images/slashing-through-two-water-melons.webp"
          alt="Slashing through two water melons"
          data-desktop
        />
        <img
          src="/images/slashing-through-two-water-melons.webp"
          alt="Slashing through two water melons"
          data-mobile
        />
      </div>

      <div class="section-flex doom_learnings_flex">
        <h3 class="section-flex_left">
          <span class="assassin_span">[</span>
          KEY LEARNINGS
          <span class="assassin_span">]</span>
        </h3>
        <div class="section-flex_right doom_execution-highligts_flex_right">
          <div
            v-for="(highlight, index) in WHERE_WINDS_MEET_LEARNINGS"
            :key="index"
            class="section-flex_right_content"
          >
            <h2>{{ highlight.title }}</h2>
            <p>{{ highlight.description }}</p>
          </div>
        </div>
      </div>

      <div class="assassin_images_category">
        <img
          src="/images/cleaning-sword-sheath.jpg"
          alt=""
          data-desktop
        />
        <img
          src="/images/cleaning-sword-sheath.jpg"
          alt=""
          data-mobile
        />
      </div>

      <RelatedWork />
    </div>
    <Contact />
    <Footer />
  </section>
</template>

<script setup lang="ts">
import {
  WHERE_WINDS_MEET_EXECUTION_HIGHLIGHTS,
  WHERE_WINDS_MEET_LEARNINGS,
} from "~/utils/constants";
</script>
