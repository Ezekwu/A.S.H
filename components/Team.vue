<template>
  <section class="tea">
    <h2>Meet The Team</h2>
    <div class="tea_content">
      <template v-for="member in TEAM_MEMBERS_LIST" :key="member.slug">
        <NuxtLink
          v-if="member.detailPage"
          :href="`/team/${member.slug}`"
          class="tea_content_data tea_content_data--interactive"
        >
          <div class="tea_image_wrap">
            <img :src="member.image" :alt="member.name" />
          </div>
          <div>
            <h4>{{ member.name }}</h4>
            <p>{{ member.title }}</p>
          </div>
        </NuxtLink>

        <a
          v-else-if="member.externalLink"
          :href="member.externalLink"
          target="_blank"
          rel="noopener noreferrer"
          class="tea_content_data tea_content_data--interactive"
        >
          <div class="tea_image_wrap">
            <img :src="member.image" :alt="member.name" />
          </div>
          <div>
            <h4>{{ member.name }}</h4>
            <p>{{ member.title }}</p>
          </div>
        </a>

        <div v-else class="tea_content_data">
          <div class="tea_image_wrap">
            <img :src="member.image" :alt="member.name" />
          </div>
          <div>
            <h4>{{ member.name }}</h4>
            <p>{{ member.title }}</p>
          </div>
        </div>
      </template>
    </div>
  </section>
</template>

<script setup lang="ts">
import { TEAM_MEMBERS_LIST } from "~/constants/team";
</script>
