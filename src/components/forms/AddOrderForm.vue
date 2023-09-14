<template>
  <div class="m-5">
    <v-form @submit.prevent="addOrder" class="z-10">
      <v-text-field
        v-model="order.provider"
        label="Proveedor"
        required
        :rules="[(v) => !!v || 'El proveedor es requerido']"
      />

      <v-text-field
        v-model="order.date"
        label="Fecha de Orden"
        type="date"
        required
        :rules="[(v) => !!v || 'La fecha de orden es requerida']"
      />

      <v-text-field
        v-model="productName"
        label="Nombre del Producto"
        required
        :rules="[(v) => !!v || 'El nombre del producto es requerido']"
      />

      <v-text-field
        v-model="productPrice"
        label="Precio del Producto"
        type="number"
        required
        :rules="[
          (v) => !!v || 'El precio del producto es requerido',
          (v) => !isNaN(parseFloat(v)) || 'El precio debe ser un número válido'
        ]"
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

  const orderId = generateRandomId()

  const newOrder = {
    id: orderId,
    provider: order.value.provider,
    date: order.value.date,
    products: order.value.products
  }

  // Agrega la nueva orden al store
  myStore.addOrder(newOrder)

  // Limpia el formulario
  order.value = {
    provider: '',
    date: '',
    products: []
  }
}

const generateRandomId = () => {
  const min = 10000000 // Mínimo valor de 8 dígitos
  const max = 99999999 // Máximo valor de 8 dígitos
  return String(Math.floor(Math.random() * (max - min + 1)) + min)
}
</script>
