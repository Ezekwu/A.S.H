<template>
  <section class="assassin">
    <Header />
    <div class="assassins">
      <div class="assassin_header">
        <div class="assasin_left">
          <h3>Brand</h3>
          <p>NetEase Games</p>
        </div>
        <h3 class="project-heading">NARAKA <br> BLADEPOINT</h3>
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
        NetEase Games approached ASH to create an original global content series to promote NARAKA: BLADEPOINT and its newest weapon: Viper Ning's Whipsword.

          <br />
          <br />
          NetEase needed a unique production partner capable of producing both cinematic content faithful to the game and engineering a real, functional weapon. The delivered assets then needed to perform across both Western and Chinese audiences simultaneously.

          <br />
          <br />
          The Whipsword itself immediately raised the stakes. This is a sword that transforms between a rigid blade and a flexible whip, demanding precise engineering to bring to life.
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

      <div class="campaign">
        <h2 class="campaign_header"><span class="assassin_span">[</span>
          THE RESULTS
          <span
            class="assassin_span"
            >]</span
          ></h2>
        <div class="campaign_campaign">
          <div class="cf">
            <h2><span class="plus-sign">+</span>2.12M</h2>
            <p>YouTube views.</p>
          </div>
          <div class="cf">
            <h2><span class="plus-sign">+</span>427K</h2>
            <p>TikTok views</p>
          </div>
          <div class="cf">
            <h2><span class="plus-sign">+</span>3.1M</h2>
            <p>Total campaign views across USA and China campaigns.</p>
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
        <img src="/images/naraka-big-image-1.webp" alt="" data-desktop />
        <img src="/images/naraka-big-image-2.webp" alt="" data-desktop />
        <img src="/images/naraka-big-image-3.webp" alt="" data-desktop />
        <img src="/images/naraka-big-image-1.webp" alt="" data-mobile />
        <img src="/images/naraka-big-image-2.webp" alt="" data-mobile />
        <img src="/images/naraka-big-image-3.webp" alt="" data-mobile />
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
