import { defineStore } from 'pinia'

export const useMyStore = defineStore('myStore', {
  state: () => ({
    orders: [
      {
        id: 1,
        provider: 'Proveedor A',
        date: '2023-09-13',
        products: [
          { id: 101, name: 'Producto 1', price: 10 },
          { id: 102, name: 'Producto 2', price: 15 }
        ]
      },
      {
        id: 2,
        provider: 'Proveedor B',
        date: '2023-09-14',
        products: [
          { id: 103, name: 'Producto 3', price: 20 },
          { id: 104, name: 'Producto 4', price: 25 }
        ]
      },
      {
        id: 3,
        provider: 'Proveedor C',
        date: '2023-09-15',
        products: [
          { id: 105, name: 'Producto 5', price: 30 },
          { id: 106, name: 'Producto 6', price: 35 }
        ]
      },
      {
        id: 4,
        provider: 'Proveedor D',
        date: '2023-09-16',
        products: [
          { id: 107, name: 'Producto 7', price: 40 },
          { id: 108, name: 'Producto 8', price: 45 }
        ]
      },
      {
        id: 5,
        provider: 'Proveedor E',
        date: '2023-09-17',
        products: [
          { id: 109, name: 'Producto 9', price: 50 },
          { id: 110, name: 'Producto 10', price: 55 }
        ]
      },
      {
        id: 6,
        provider: 'Proveedor F',
        date: '2023-09-18',
        products: [
          { id: 111, name: 'Producto 11', price: 60 },
          { id: 112, name: 'Producto 12', price: 65 }
        ]
      },
      {
        id: 7,
        provider: 'Proveedor G',
        date: '2023-09-19',
        products: [
          { id: 113, name: 'Producto 13', price: 70 },
          { id: 114, name: 'Producto 14', price: 75 }
        ]
      },
      {
        id: 8,
        provider: 'Proveedor H',
        date: '2023-09-20',
        products: [
          { id: 115, name: 'Producto 15', price: 80 },
          { id: 116, name: 'Producto 16', price: 85 }
        ]
      },
      {
        id: 9,
        provider: 'Proveedor I',
        date: '2023-09-21',
        products: [
          { id: 117, name: 'Producto 17', price: 90 },
          { id: 118, name: 'Producto 18', price: 95 }
        ]
      },
      {
        id: 10,
        provider: 'Proveedor J',
        date: '2023-09-22',
        products: [
          { id: 119, name: 'Producto 19', price: 100 },
          { id: 120, name: 'Producto 20', price: 105 }
        ]
      }
    ],
    providers: [
      {
        id: 1,
        name: 'Proveedor A',
        address: 'Dirección 1',
        phone: '123-456-7890'
      },
      {
        id: 2,
        name: 'Proveedor B',
        address: 'Dirección 2',
        phone: '987-654-3210'
      },
      {
        id: 3,
        name: 'Proveedor C',
        address: 'Dirección 3',
        phone: '555-555-5555'
      },
      {
        id: 4,
        name: 'Proveedor D',
        address: 'Dirección 4',
        phone: '444-444-4444'
      },
      {
        id: 5,
        name: 'Proveedor E',
        address: 'Dirección 5',
        phone: '333-333-3333'
      },
      {
        id: 6,
        name: 'Proveedor F',
        address: 'Dirección 6',
        phone: '222-222-2222'
      },
      {
        id: 7,
        name: 'Proveedor G',
        address: 'Dirección 7',
        phone: '111-111-1111'
      },
      {
        id: 8,
        name: 'Proveedor H',
        address: 'Dirección 8',
        phone: '999-999-9999'
      },
      {
        id: 9,
        name: 'Proveedor I',
        address: 'Dirección 9',
        phone: '888-888-8888'
      },
      {
        id: 10,
        name: 'Proveedor J',
        address: 'Dirección 10',
        phone: '777-777-7777'
      }
    ]
  }),
  actions: {
    async loadOrders() {
      const response = await fetch('/api/orders')
      this.orders = await response.json()
    },
    async loadProviders() {
      const response = await fetch('/api/providers')
      this.providers = await response.json()
    }
  }
})
