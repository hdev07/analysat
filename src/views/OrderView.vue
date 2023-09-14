<template>
  <div>
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
import TableData from '@/components/common/TableData.vue'
import { useMyStore } from '@/store/myStore.js'
import { onMounted } from 'vue'

const title = 'Lista de Órdenes de Compra'
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
