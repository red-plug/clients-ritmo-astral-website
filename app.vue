<template>
  <main class="text-base">
    <div class="fixed inset-0 z-0 bg-deep-blue-space">
      <ClientOnly>
        <Vortex :base-hue="215" :range-y="500" :base-speed="0.25" :range-speed="0.025">
          <div class="w-full h-screen backdrop-blur-xs md:backdrop-blur-none"></div>
        </Vortex>  
      </ClientOnly>
    </div>
    <div>
      <section v-for="(componentSection, index) in components" :key="index" class="will-change-transform min-h-[100dvh] w-full px-2 md:px-4">
        <component :is="componentSection">
        </component>
      </section>
    </div>
    <div class="w-full h-24 md:h-0">

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

useSeoMeta({
  title: 'Ritmo Astral | Inicio',
  ogTitle: 'Ritmo Astral',
  description: 'En Ritmo Astral creemos en la magia de reconectar contigo mismo. Creamos experiencias únicas de meditación, música medicinal y Ecstatic Dance en lo alto de la ciudad',
  ogDescription: 'En Ritmo Astral creemos en la magia de reconectar contigo mismo. Creamos experiencias únicas de meditación, música medicinal y Ecstatic Dance en lo alto de la ciudad',
  ogImage: '/index.png',
})
</script>
