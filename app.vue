<template>
  <main class="text-base">
    <div class="fixed inset-0 z-0 bg-deep-blue-space">
      <ClientOnly>
        <Vortex :base-hue="200" :range-y="300">
          <div class="w-full h-screen"></div>
        </Vortex>  
      </ClientOnly>
    </div>
    <div>
      <section v-for="(componentSection, index) in components" :key="index" class="will-change-transform min-h-[100dvh] w-full px-2 md:px-4">
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

onMounted(() => {
  const sections: HTMLElement[] = gsap.utils.toArray('section')

  sections.forEach((section: HTMLElement, index: number) => {

    if (index === 0) {
      const timeline: GSAPTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: '+=100%',
          pin: true,
          scrub: true,
          pinSpacing: false,
        }
      })

      timeline.from(section, {
        opacity: 1
      })

      timeline.to(section, {
        opacity: 0
      })

      return
    }

    if(index == components.value.length - 1) {
      const timeline: GSAPTimeline = gsap.timeline({
        scrollTrigger: {
          pin: true,
          trigger: section,
          start: 'top top',
          end: 'top middle',
          scrub: true,
          pinSpacing: false,
        }
      })
    
      timeline.from(section, {
        opacity: 0
      })
      

      timeline.to(section, {
        opacity: 1
      })

      return

    }

    const timeline: GSAPTimeline = gsap.timeline({
      scrollTrigger: {
        pin: true,
        trigger: section,
        end: '+=100%',
        scrub: true,
        pinSpacing: false,
      }
    })
    
    timeline.from(section, {
      opacity: 0
    })
    

    timeline.to(section, {
      opacity: 1
    })

    timeline.to(section, {
      opacity: 0
    })
  })
})


const colorMode = useColorMode()

onBeforeMount(() => colorMode.preference = 'dark')
</script>
