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
        @click="showAddOrderModal = true"
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

    <!-- Modal para agregar una orden -->
    <v-dialog v-model="showAddOrderModal" width="600">
      <v-card title="Agregar Productos y Orden">
        <v-card-text>
          Primero debes agregar el producto y despues la orden de compra
        </v-card-text>
        <AddOrderForm @addOrder="handleAddOrder" />
      </v-card>
    </v-dialog>
  </div>
</template>

<script setup>
import TableData from '@/components/common/TableCommon.vue'
import AddOrderForm from '@/components/forms/AddOrderForm.vue'
import { useMyStore } from '@/store/myStore.js'
import { ref, onMounted } from 'vue'

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

const showAddOrderModal = ref(false)

onMounted(async () => {
  await myStore.loadOrders()
})

function handleAddOrder(newOrder) {
  // Aquí puedes manejar la nueva orden que se agrega desde el formulario
  // Por ejemplo, podrías guardarla en tu store o realizar otras acciones.
  console.log('Nueva orden:', newOrder)

  // Cierra el modal después de agregar la orden
  showAddOrderModal.value = false
}
</script>
