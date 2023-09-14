<template>
  <div class="m-5">
    <v-form @submit.prevent="addOrder" class="z-10">
      <v-text-field v-model="order.provider" label="Proveedor" required />

      <v-text-field
        v-model="order.date"
        label="Fecha de Orden"
        type="date"
        required
      />

      <v-text-field
        v-model="productName"
        label="Nombre del Producto"
        @input="updateProduct"
        required
      />

      <v-text-field
        v-model="productPrice"
        label="Precio del Producto"
        type="number"
        required
      />

      <v-btn @click="addProduct" color="primary">Agregar Producto</v-btn>
      <v-list>
        <v-list-item-group>
          <v-list-item v-for="(product, index) in order.products" :key="index">
            <v-list-item-content class="flex justify-between">
              <v-list-item-title>
                {{ product.name }} - ${{ product.price }}
              </v-list-item-title>
              <v-btn icon @click="removeProduct(index)">
                <v-icon color="red">mdi-delete-forever</v-icon>
              </v-btn>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>

      <v-btn type="submit" variant="outlined">Agregar Orden</v-btn>
    </v-form>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useMyStore } from '@/store/myStore.js'

const order = ref({
  provider: '',
  date: '',
  products: []
})

const productName = ref('')
const productPrice = ref('')

const myStore = useMyStore()

const updateProduct = () => {
  // Actualiza el producto en tiempo real mientras se escribe
  const name = productName.value
  const price = parseFloat(productPrice.value)
  if (name && !isNaN(price)) {
    order.value.products.push({ name, price })
  }
}

const addProduct = () => {
  // Agrega un producto a la orden
  const name = productName.value
  const price = parseFloat(productPrice.value)
  if (name && !isNaN(price)) {
    order.value.products.push({ name, price })
    // Limpia los campos de entrada de productos
    productName.value = ''
    productPrice.value = ''
  }
}

const removeProduct = (index) => {
  // Elimina un producto de la orden
  order.value.products.splice(index, 1)
}

const addOrder = () => {
  // Realiza las validaciones necesarias aquí
  if (
    !order.value.provider ||
    !order.value.date ||
    order.value.products.length === 0
  ) {
    alert(
      'Por favor, completa todos los campos obligatorios y agrega al menos un producto.'
    )
    return
  }

  // Agrega la nueva orden al store
  myStore.addOrder(order.value)

  // Limpia el formulario
  order.value = {
    provider: '',
    date: '',
    products: []
  }
}
</script>
