<script setup>
import { ref } from 'vue'

const Links = ref([
  {
    title: 'Ordenes de compra',
    href: '/orders'
  },
  {
    title: 'Proveedores',
    href: '/providers'
  }
])

const mobileMenuVisible = ref(false)

const toggleMobileMenu = () => {
  mobileMenuVisible.value = !mobileMenuVisible.value
}
</script>

<template>
  <header class="bg-gray-900 text-white">
    <div
      class="mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8"
    >
      <a class="block" href="/">
        <img src="@/assets/icons/Logo.svg" alt="logo" class="w-10" />
      </a>
      <div class="flex flex-1 items-center justify-end md:justify-between">
        <nav class="hidden md:block mr-4">
          <ul class="flex items-center gap-6 text-sm md:gap-3">
            <li v-for="link in Links" :key="link.title">
              <a class="" :href="link?.href">
                {{ link?.title }}
              </a>
            </li>
          </ul>
        </nav>
        <div class="flex items-center gap-4">
          <button
            class="block rounded-md p-2 transition md:hidden"
            @click="toggleMobileMenu"
          >
            <svg
              class="h-5 w-5"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </header>

  <RouterView />

  <footer class="bg-gray-900 fixed bottom-0 w-100">
    <div class="mx-auto max-w-screen-xl px-4 py-4">
      <p class="text-right leading-relaxed text-gray-400 text-xs">
        Todos los derechos reservados. hecho con el ❤️
      </p>
    </div>
  </footer>

  <div class="md:hidden" :class="{ hidden: !mobileMenuVisible }">
    <div
      class="fixed inset-0 z-20 flex flex-col items-center justify-center bg-gray-900 text-white"
    >
      <div class="absolute top-0 w-full flex">
        <button
          class="absolute right-0 m-4 p-2 transition-transform"
          @click="toggleMobileMenu"
        >
          <svg
            class="h-5 w-5"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        </button>
      </div>
      <ul class="text-center mb-4">
        <li v-for="link in Links" :key="link.title" class="mb-3">
          <a
            class="text-sm transition"
            :href="link?.href"
            @click="toggleMobileMenu"
          >
            {{ link?.title }}
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>
