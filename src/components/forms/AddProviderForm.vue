<template>
  <div class="m-5">
    <v-form @submit.prevent="addProvider">
      <v-text-field
        v-model="provider.name"
        label="Proveedor"
        required
        :rules="[(v) => !!v || 'El proveedor es requerido']"
      />

      <v-text-field
        v-model="provider.address"
        label="Direccion"
        required
        :rules="[(v) => !!v || 'El addresso es requerido']"
      />

      <v-text-field
        v-model="provider.phone"
        label="Teléfono"
        required
        :rules="[(v) => !!v || 'El teléfono es requerido']"
      />

      <v-text-field
        v-model="provider.email"
        label="Email"
        required
        :rules="[
          (v) => !!v || 'El email es requerido',
          (v) => isValidEmail(v) || 'El email debe ser válido'
        ]"
      />

      <v-btn type="submit" color="primary">Agregar Proveedor</v-btn>
    </v-form>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useMyStore } from '@/store/myStore.js'

const provider = ref({
  name: '',
  address: '',
  phone: '',
  email: ''
})

const myStore = useMyStore()

const addProvider = () => {
  if (
    !provider.value.name ||
    !provider.value.address ||
    !provider.value.phone ||
    !provider.value.email
  ) {
    alert('Por favor, completa todos los campos obligatorios.')
    return
  }

  const providerId = generateRandomId()

  const newProvider = {
    id: providerId,
    name: provider.value.name,
    address: provider.value.address,
    phone: provider.value.phone,
    email: provider.value.email
  }

  // Agrega el nuevo proveedor al store
  myStore.addProvider(newProvider)

  // Limpia el formulario
  provider.value = {
    name: '',
    address: '',
    phone: '',
    email: ''
  }
}

const generateRandomId = () => {
  const min = 10000000 // Mínimo valor de 8 dígitos
  const max = 99999999 // Máximo valor de 8 dígitos
  return String(Math.floor(Math.random() * (max - min + 1)) + min)
}

const isValidEmail = (email) => {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailPattern.test(email)
}
</script>
