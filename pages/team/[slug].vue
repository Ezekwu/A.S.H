<template>
  <section class="team_detail">
    <Header />

    <div class="section-flex team_detail_flex team_detail_hero">
      <h3 class="section-flex_left team_detail_hero_spacer" aria-hidden="true">
        <span class="assassin_span">[</span>
        EXECUTION HIGHLIGHTS
        <span class="assassin_span">]</span>
      </h3>
      <div class="section-flex_right team_detail_hero_content">
        <h1 class="team_detail_name">{{ member.name }}</h1>
        <p class="team_detail_title">{{ member.title }}</p>
        <img
          class="team_detail_image"
          :src="member.image"
          :alt="member.name"
        />
      </div>
    </div>

    <div
      v-if="member.background?.length"
      class="section-flex team_detail_flex team_detail_section"
    >
      <h3 class="section-flex_left">
        <span class="assassin_span">[</span>
        ABOUT
        <span class="assassin_span">]</span>
      </h3>
      <div class="section-flex_right team_detail_background">
        <p
          v-for="(paragraph, index) in member.background"
          :key="index"
          class="team_detail_background_text"
        >
          {{ paragraph }}
        </p>
      </div>
    </div>

    <div
      v-if="member.executionHighlights?.length"
      class="section-flex team_detail_flex doom_execution-highligts_flex team_detail_section"
    >
      <h3 class="section-flex_left">
        <span class="assassin_span">[</span>
        EXECUTION HIGHLIGHTS
        <span class="assassin_span">]</span>
      </h3>
      <div class="section-flex_right doom_execution-highligts_flex_right">
        <div
          v-for="(highlight, index) in member.executionHighlights"
          :key="index"
          class="section-flex_right_content"
        >
          <h2>{{ highlight.title }}</h2>
          <p>{{ highlight.description }}</p>
        </div>
        <p
          v-if="member.executionHighlightsFooter"
          class="team_detail_highlights_footer"
        >
          {{ member.executionHighlightsFooter }}
        </p>
      </div>
    </div>
    <Contact />

    <Footer />
  </section>
</template>

<script setup lang="ts">
import { getTeamMember } from "~/constants/team";

const route = useRoute();
const slug = route.params.slug as string;
const member = getTeamMember(slug);

if (!member) {
  throw createError({
    statusCode: 404,
    statusMessage: "Team member not found",
  });
}

useHead({
  title: `${member.name} | ASH Entertainment`,
});
</script>
