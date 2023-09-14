<script setup>
const props = defineProps({
  to: { type: String, default: '#' },
  text: { type: String, required: true },
  bgPrimary: { type: Boolean, default: false },
  hBgTransparent: { type: Boolean, default: false },
  hShadow: { type: Boolean, default: false },
  hBgPrimary: { type: Boolean, default: false },
  hidden: { type: Boolean, default: false },
  smBlock: { type: Boolean, default: false }
})
</script>
<template>
  <a :href="props?.to">
    <div
      :class="{
        'bg-blue-500 transition': props?.bgPrimary,
        'hover:bg-transparent transition': props?.hBgTransparent,
        'hover:bg-blue-500 transition': props?.hBgPrimary,
        'hover:shadow-blue-500/50 transition': props?.hShadow,
        hidden: props?.hidden,
        'sm:block': props?.smBlock
      }"
      class="block w-full rounded border-2 border-blue-500 px-5 py-2 text-sm text-white text-center hover:shadow-xl"
    >
      {{ props?.text }}
    </div>
  </a>
</template>
