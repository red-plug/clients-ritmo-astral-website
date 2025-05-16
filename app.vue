<template>
  <main>
    <div class="fixed inset-0 z-0 bg-deep-blue-space">
      <ClientOnly>
        <Vortex :base-hue="200" :range-y="300">
          <div class="w-full h-dvh"></div>
        </Vortex>  
      </ClientOnly>
    </div>
    <div class="slider sections-width h-full flex flex-nowrap">
      <section v-for="(componentSection, index) in components" :key="index" class="will-change-transform min-h-[100dvh] w-full flex justify-center items-center text-6xl px-2 md:px-4">
        <component :is="componentSection">
        </component>
      </section>
    </div>
  </main>
</template>
<script setup lang="ts">
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { SectionHeroWelcome, SectionOurEssence, SectionWhatWeOffer, SectionCosmicPurpose, SectionConnectWithUs } from '#components'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const components = shallowRef<Component[]>([
  SectionHeroWelcome,
  SectionOurEssence,
  SectionWhatWeOffer,
  SectionCosmicPurpose,
  SectionConnectWithUs
])

let duration: number
let sections: HTMLElement[]
let sectionIncrement: number
let timeline
const sectionsWidth = ref<string>('')

onMounted(() => {
  duration = 10
  sections = gsap.utils.toArray('section')
  sectionsWidth.value = `${sections.length * 100}%`
  sectionIncrement = duration / (sections.length - 1)

  timeline = gsap.timeline({
    scrollTrigger: {
      trigger: ".slider",
      pin: true,
      scrub: 1,
      snap: 1 / (sections.length - 1),
      start: "top top",
      end: "+=5000"
    }
  });

  timeline.to(sections, {
    xPercent: -100 * (sections.length - 1),
    duration: duration,
    ease: "power1",
  });
})


const colorMode = useColorMode()

onBeforeMount(() => colorMode.preference = 'dark')
</script>

<style scoped>
.sections-width {
  width: v-bind(sectionsWidth);
}
</style>