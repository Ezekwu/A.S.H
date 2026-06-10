<template>
  <div class="assassin_related">
    <h2>Related Work</h2>
    <div class="assassin_related_content">
      <NuxtLink
        v-for="item in displayedItems"
        :key="item.href"
        :href="item.href"
        class="assassin_related_content_div"
      >
        <div class="assassin_related_content_div_image">
          <img :src="item.imageSrc" :alt="item.title" />
        </div>
        <p>{{ item.title }}</p>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
type RelatedItem = {
  href: string
  imageSrc: string
  title: string
}

const relatedItems: RelatedItem[] = [
  {
    href: '/assassin',
    imageSrc: '/images/assasin-work.webp',
    title: "Assassin's Creed Shadows",
  },
  {
    href: '/the-elder-scrolls-online-gold-road',
    imageSrc: '/images/elder-scroll-work.webp',
    title: 'The Elder Scrolls Online: Gold Road',
  },
  {
    href: '/game-of-thrones-legends',
    imageSrc: '/images/game-of-thrones-work.webp',
    title: 'Game of Thrones: Legends',
  },
  {
    href: '/naraka-blade-point',
    imageSrc: '/images/nakara-work.webp',
    title: 'NARAKA: BLADEPOINT',
  },
  {
    href: '/doom-the-dark-ages',
    imageSrc: '/images/doom-of-the-dark-ages-work.webp',
    title: 'Doom: The Dark Ages',
  },
  {
    href: '/albion-online',
    imageSrc: '/images/albion-online-work.webp',
    title: 'Albion Online',
  },
  {
    href: '/zenless-zone-zero',
    imageSrc: '/images/zenless-zone-work.webp',
    title: 'Zenless Zone Zero',
  },
]

function normalizePath(path: string): string {
  return path.replace(/\/$/, '') || '/'
}

function shuffleCopy<T>(items: T[]): T[] {
  const copy = [...items]
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    const a = copy[i]
    const b = copy[j]
    if (a === undefined || b === undefined) continue
    copy[i] = b
    copy[j] = a
  }
  return copy
}

function pickRandomRelated(
  all: RelatedItem[],
  currentPath: string,
  count: number,
): RelatedItem[] {
  const normalizedCurrent = normalizePath(currentPath)
  const pool = all.filter(
    (item) => normalizePath(item.href) !== normalizedCurrent,
  )
  return shuffleCopy(pool).slice(0, Math.min(count, pool.length))
}

const route = useRoute()
const displayedItems = ref<RelatedItem[]>([])

function refreshDisplayed() {
  displayedItems.value = pickRandomRelated(relatedItems, route.path, 3)
}

onMounted(refreshDisplayed)
watch(() => route.path, refreshDisplayed)
</script>
