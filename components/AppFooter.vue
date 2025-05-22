<template>
  <footer class="w-full h-24 flex justify-center items-center text-xs relative">
    <div class="text-center">
      Todos los derechos reservados © {{ currentYear}} | Impulsado por <a href="https://redplug.com.mx" target="_blank" rel="noopener noreferrer" class="hover:text-red-plug-500 hover:underline decoration-red-plug-500">RedPlug Organization</a>
    </div>
  </footer>
</template>
<script setup lang="ts">
const currentYear = new Date().getFullYear()
</script>