<template>
  <div class="text-white border-spacing-2 my-3">
    <div class="overflow-x-auto">
      <table class="min-w-full divide-y divide-slate-200">
        <thead>
          <tr>
            <th
              v-for="(header, index) in headers"
              :key="index"
              class="px-6 py-3 text-xs font-medium bg-gray-900 text-center uppercase tracking-wider"
            >
              {{ header }}
            </th>
          </tr>
        </thead>
        <tbody class="divide-y divide-slate-200">
          <tr v-for="(item, index) in data" :key="index">
            <td
              v-for="(key, columnIndex) in keys"
              :key="columnIndex"
              class="px-6 py-3 whitespace-nowrap text-center transition hover:bg-gray-900"
            >
              <template v-if="key === 'products'">
                {{ getProductNames(item.products) }}
              </template>
              <template v-else-if="key == 'price'">
                {{ '$' }} {{ calculateTotalOrder(item.products) }}
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
const { headers, data } = defineProps({
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
