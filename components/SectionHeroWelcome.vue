<template>
  <div ref="container" class="flex justify-center items-center px-4 md:px-0 h-screen relative w-full">
    <ClientOnly>
      <!-- <Vortex :base-hue="200" :range-y="300" class="flex size-full flex-col items-center justify-center px-2 py-4 md:px-10"> -->
        <div class="flex size-full flex-col items-center justify-center px-2 py-4 md:px-10">
          <div class="w-full max-w-lg py-4">
            <LogoDrawing class="w-full"  />
          </div>
          <h2 ref="subtitle" class="text-3xl md:text-4xl font-serif mt-4 text-center invisible">
            Tu círculo de energía
          </h2>
        </div>
      <!-- </Vortex> -->
    </ClientOnly>
    <Icon id="icon-down" name="heroicons:chevron-down" class="absolute bottom-4 text-4xl opacity-50 animate-bounce" />
  </div>
</template>
<script setup lang="ts">
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, ScrollTrigger);
}

const container: Ref<HTMLDivElement | null> = ref(null)
const subtitle: Ref<HTMLHeadingElement | null> = ref(null)


onMounted(async () => {
  await nextTick()

  gsap.set(subtitle.value, { visibility: 'visible', y: 50, opacity: 0 })
  gsap.to(subtitle.value, {opacity: 1, y: 0, duration: 7, ease: 'power1' })
})

</script>

