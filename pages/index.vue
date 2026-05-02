<template>
  <main class="page" id="home">
    <Header />
    <Hero />
    <About />
    <Mission />
    <Services />
    <Logos />
    <Case />
    <Work />
    <Team />
    <Contact />
    <Footer />
  </main>
</template>

<script setup lang="ts">
const route = useRoute();

function scrollToRouteHashWhenReady() {
  const hash = route.hash;
  if (!hash) return;

  let frames = 0;
  const maxFrames = 120;

  const tick = () => {
    frames++;
    if (typeof window !== "undefined" && window.lenis) {
      nextTick(() => {
        window.lenis.scrollTo(hash);
      });
      return;
    }
    if (frames < maxFrames) requestAnimationFrame(tick);
  };

  nextTick(() => requestAnimationFrame(tick));
}

onMounted(scrollToRouteHashWhenReady);
</script>
