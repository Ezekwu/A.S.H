import { nextTick } from "vue"

function normalizePath(path: string) {
  return path.replace(/\/$/, "") || "/"
}

export default defineNuxtPlugin(() => {
  const router = useRouter()

  router.afterEach((to, from) => {
    if (normalizePath(to.path) === normalizePath(from.path)) {
      return
    }

    nextTick(() => {
      requestAnimationFrame(() => {
        window.lenis?.scrollTo(0, { immediate: true })
      })
    })
  })
})
