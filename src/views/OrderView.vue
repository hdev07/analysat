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
        Añadir orden
      </v-btn>
    </div>
    <TableData
      v-if="orders && orders.length > 0"
      :title="title"
      :headers="headers"
      :data="orders"
    />
    <p v-else>Cargando datos o no hay datos disponibles.</p>
  </div>
</template>

<script setup>
import TableData from '@/components/common/TableCommon.vue'
import { useMyStore } from '@/store/myStore.js'
import { onMounted } from 'vue'

const title = 'Órdenes de Compra'
const headers = [
  'Id',
  'Proveedor',
  'Fecha de Orden',
  'Productos Solicitados',
  'Total de la Orden'
]

const myStore = useMyStore()
const orders = myStore.orders

onMounted(async () => {
  await myStore.loadOrders()
})
</script>
