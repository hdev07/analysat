<template>
  <div>
    <h2 class="text-xl font-semibold my-8 text-center mx-3">
      {{ title }}
    </h2>
    <div class="overflow-x-auto">
      <table class="min-w-full divide-y divide-gray-200">
        <thead class="bg-gray-100">
          <tr>
            <th
              v-for="(header, index) in headers"
              :key="index"
              class="px-6 py-3 text-xs font-medium text-gray-500 text-center uppercase tracking-wider"
            >
              {{ header }}
            </th>
          </tr>
        </thead>
        <tbody class="bg-white divide-y divide-gray-200">
          <tr v-for="(item, index) in data" :key="index">
            <td
              v-for="(key, columnIndex) in keys"
              :key="columnIndex"
              class="px-6 py-3 whitespace-nowrap text-center"
            >
              <template v-if="key === 'products'">
                {{ getProductNames(item.products) }}
              </template>
              <template v-else>
                {{ item[key] }}
              </template>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
const { title, headers, data } = defineProps({
  title: String,
  headers: Array,
  data: Array
})

const keys = Object.keys(data[0] || {})

function getProductNames(products) {
  return products.map((product) => product.name).join(', ')
}

function calculateTotalOrder(products) {
  return products.reduce((total, product) => total + product.price, 0)
}
</script>
