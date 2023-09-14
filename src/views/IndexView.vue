<script setup>
import ButtonCommon from '../components/common/ButtonCommon.vue'
</script>
<template>
  <div
    class="bg-gray-900 text-white h-screen mx-auto px-4 py-32 flex items-center"
  >
    <div class="mx-auto max-w-3xl text-center">
      <h1
        class="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl"
      >
        Bienvenido a Analysat

        <span class="sm:block"> La prueba final. </span>
      </h1>

      <p class="mx-auto mt-4 max-w-xl sm:text-xl/relaxed">
        Esta es una prueba para entrar a analysat como desarrollador Front-end y
        como UX/UI
      </p>

      <div class="mt-8 flex flex-wrap justify-center gap-4">
        <div class="mt-8 flex justify-center gap-4">
          <div class="w-2/3">
            <ButtonCommon
              :to="'/orders'"
              :text="'Ordenes'"
              :hBgPrimary="true"
            />
          </div>
          <div class="w-2/3">
            <ButtonCommon
              :to="'/providers'"
              :text="'Proveedores'"
              :bgPrimary="true"
              :hBgTransparent="true"
              :hShadow="true"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
