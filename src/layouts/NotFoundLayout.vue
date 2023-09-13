<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

function back() {
  router.back()
}
</script>

<template>
  <section class="flex items-center sm:p-16 justify-center w-screen h-screen">
    <div
      class="container flex flex-col items-center justify-center px-5 mx-auto my-8"
    >
      <div class="max-w-md text-center">
        <h2 class="mb-8 font-extrabold text-9xl">
          <span class="sr-only">Error</span>404
        </h2>
        <p class="text-2xl font-semibold md:text-3xl">
          Lo sentimos, no pudimos encontrar esta página.
        </p>
        <p class="mt-4 mb-8">
          Pero no te preocupes, puedes encontrar muchas otras cosas en nuestra
          página de inicio.
        </p>
        <v-btn variant="outlined" @click.prevent="back"> Regresar </v-btn>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
