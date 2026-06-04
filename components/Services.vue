<template>
  <section class="services" id="servicesid">
    <h1>Our Services</h1>
    <div class="services_list">
      <article
        v-for="service in services"
        :key="service.id"
        class="service_card"
        :class="{ 'service_card--media-first': service.mediaFirst }"
      >
        <div
          class="service_card__content"
          :class="service.contentClasses"
        >
          <div class="service_card__header">
            <p>{{ service.number }}</p>
            <h2>{{ service.title }}</h2>
          </div>

          <h4
            v-if="service.summary"
            class="service_card__summary"
            :class="service.summaryClass"
          >
            {{ service.summary }}
          </h4>

          <h4
            v-for="(highlight, index) in service.highlights"
            :key="index"
            class="service_card__highlight"
          >
            <span v-if="highlight.label">{{ highlight.label }}</span
            >{{ highlight.text }}
          </h4>

          <h3 v-if="service.description" class="service_card__description">
            {{ service.description }}
          </h3>

          <Button :class="service.buttonClass" />
        </div>

        <div
          class="service_card__media"
          :class="service.mediaClass"
          :style="{ '--service-media-bg': service.mediaColor }"
        >
          <img :src="service.imageSrc" :alt="service.title" />
        </div>
      </article>
    </div>
  </section>
</template>

<script setup lang="ts">
type ServiceHighlight = {
  label?: string
  text: string
}

type ServiceItem = {
  id: string
  number: string
  title: string
  imageSrc: string
  mediaColor: string
  mediaFirst?: boolean
  contentClasses?: string | string[] | Record<string, boolean>
  mediaClass?: string | string[] | Record<string, boolean>
  summary?: string
  summaryClass?: string
  highlights?: ServiceHighlight[]
  description?: string
  buttonClass?: string
}

const services: ServiceItem[] = [
  {
    id: 'video-production',
    number: '[01]',
    title: 'VIDEO PRODUCTION',
    imageSrc: '/images/s1.webp',
    mediaColor: '#ecb141',
    contentClasses: {
      'service_card__content--light-header': true,
      'service_card__content--wide-gap': true,
    },
    summary:
      'Branded content. Live-action. Dev diaries. "Making of" featurettes. Social Content.',
    summaryClass: 'service_card__summary--emphasis',
    description:
      'This is a taste of what we can offer. We pride ourselves in helping studios create quality video content that is true to the soul of a game and impactful to its players.',
    buttonClass: 'service_card__button--wide',
  },
  {
    id: 'media',
    number: '[02]',
    title: 'MEDIA',
    imageSrc: '/images/s2.webp',
    mediaColor: '#c34f5b',
    mediaFirst: true,
    contentClasses: 'service_card__content--dark-header',
    mediaClass: 'service_card__media--object-left',
    highlights: [
      {
        label: 'Focus:',
        text: ' Reaching and engaging players through our community of 7M+ followers.',
      },
      {
        label: 'Value: ',
        text: 'Increased game awareness, player acquisition, and launch success.',
      },
      {
        label: 'Expertise: ',
        text: 'Deep understanding of the industry landscape and target audience segmentation.',
      },
    ],
  },
  {
    id: 'immersive-events',
    number: '[03]',
    title: 'Immersive Events',
    imageSrc: '/images/s3.webp',
    mediaColor: '#654b9b',
    contentClasses: {
      'service_card__content--light-header': true,
      'service_card__content--title-uppercase': true,
      'service_card__content--wide-gap': true,
    },
    summary:
      'Thanks to our partnership with Polar Pallas Productions, we transform your games into a living, breathing world.',
    description:
      "Whether you're launching a new title, hosting an activation, or celebrating a milestone, we design events that align with your specific objectives and resonate with both your player base and your community.",
  },
  {
    id: 'custom-products',
    number: '[04]',
    title: 'Custom Products/Merchandising',
    imageSrc: '/images/s4.webp',
    mediaColor: '#5db6be',
    mediaFirst: true,
    contentClasses: 'service_card__content--dark-header',
    summary:
      'Through us, you can create high-end replicas of in-game weapons, character statues, wearable armor, limited-edition collectibles, branded art pieces.',
    summaryClass: 'service_card__summary--spaced',
  },
]
</script>
