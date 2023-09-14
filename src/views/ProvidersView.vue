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
        @click="showAddProviderModal = true"
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

    <!-- Modal para agregar un Proveedor -->
    <v-dialog v-model="showAddProviderModal" width="600">
      <v-card title="Agregar un Proveedor">
        <v-card-text> Llena los datos para agregar un Proveedor </v-card-text>
        <AddProviderForm @addProvider="handleAddProvider" />
      </v-card>
    </v-dialog>
  </div>
</template>

<script setup>
import TableData from '@/components/common/TableCommon.vue'
import AddProviderForm from '@/components/forms/AddProviderForm.vue'
import { useMyStore } from '@/store/myStore.js'
import { ref, onMounted } from 'vue'

const title = 'Lista de Proveedores'
const headers = ['Id', 'Proveedor', 'Dirección', 'Teléfono', 'Email']

const myStore = useMyStore()
const providers = myStore.providers

const showAddProviderModal = ref(false)

onMounted(async () => {
  await myStore.loadProviders()
})

const handleAddProvider = (newProvider) => {
  // Agregar el nuevo proveedor al store
  myStore.addProvider(newProvider)

  // Cerrar el modal después de agregar el proveedor
  showAddProviderModal.value = false
}
</script>
