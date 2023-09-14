<template>
  <div class="m-4">
    <div class="flex justify-between my-8">
      <h2 class="text-xl font-semibold text-center mx-3">
        {{ title }}
      </h2>
      <v-btn
        prepend-icon="mdi-plus-circle-outline"
        variant="outlined"
        rounded="lg"
        color="primary"
      >
        Añadir Proveedor
      </v-btn>
    </div>
    <TableData
      v-if="providers && providers.length > 0"
      :title="title"
      :headers="headers"
      :data="providers"
    />
    <p v-else>Cargando datos o no hay datos disponibles.</p>
  </div>
</template>

<script setup>
import TableData from '@/components/common/TableCommon.vue'
import { useMyStore } from '@/store/myStore.js'
import { onMounted } from 'vue'

const title = 'Lista de Proveedores'
const headers = ['Id', 'Proveedor', 'Contacto', 'Teléfono', 'Email']

const myStore = useMyStore()
const providers = myStore.providers

onMounted(async () => {
  await myStore.loadProviders()
})
</script>
