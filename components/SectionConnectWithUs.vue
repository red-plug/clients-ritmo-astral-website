<template>
  <div class="h-screen w-full flex flex-col justify-center items-center">
    <h2 class="text-4xl md:text-5xl font-serif text-center">
      Permítenos conectar contigo
    </h2>
    <div class="mt-8">
      <GradientButton href="mailto:contacto@ritmoastral.com?subject=Estoy%20interesado%20en%20sus%20servicios%20de%20sanación" bgColor="#01042E" :colors="['#FFFFFF', '#EAF7FF', '#D0F0FF', '#AEEBFF', '#87CEFA', '#69C9FF', '#4BB8F4', '#36A8E0']">
        Contáctanos
      </GradientButton>
    </div>
    <div class="flex justify-center gap-x-12 mt-12 text-4xl">
      <a href="https://www.instagram.com/ritmo.astral.remedios" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
        <Icon name="cib:instagram" />
      </a>
      <a href="mailto:contacto@ritmoastral.com?subject=Estoy%20interesado%20en%20sus%20servicios%20de%20sanación" target="_blank" rel="noopener noreferrer" aria-label="Correo Electrónico">
        <Icon name="cib:gmail" />
      </a>
      <a href="https://www.facebook.com/share/15u5zCkbmR" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
        <Icon name="cib:facebook" />
      </a>
    </div>
  </div>
</template>
<script setup lang="ts">

</script>