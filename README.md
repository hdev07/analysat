# Analysat

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

---
### Actividad a realizar

**Prueba para Desarrollador Frontend Vue.js 3**

**Objetivo:** Crear una mini interfaz de ERP que gestione proveedores y órdenes de compra.

**Duración:** 3 horas

**Descripción:** La empresa desea tener una vista simplificada de su módulo de proveedores y órdenes de compra. La interfaz debe permitir agregar y ver proveedores, así como crear y visualizar órdenes de compra relacionadas a esos proveedores.

**Requisitos:**

1. **Vista de Proveedores:**
   - Lista de proveedores con nombre, email y número de teléfono.
   - Formulario para agregar nuevos proveedores.
   
2. **Vista de Órdenes de Compra:**
   - Lista de órdenes de compra mostrando el proveedor, fecha de orden, productos solicitados y total de la orden.
   - Formulario para agregar nuevas órdenes de compra. Al agregar una orden, se debe seleccionar el proveedor y agregar productos (nombre y precio). La orden debe calcular automáticamente el total.
   
3. **Interactividad y UX:**
   - Los campos relevantes deben tener validaciones (por ejemplo, que el email tenga un formato adecuado, que el precio sea un número positivo, etc.)
   - Debe haber feedback visual para acciones como añadir un proveedor o una orden (ejemplo: notificaciones, animaciones suaves, etc.)
   
4. **Datos:**
   - Utiliza Vuex para gestionar el estado de la aplicación.
   - Utiliza Tailwind css para disenar los componentes.
   - No es necesario conectarse a una API real. Simula la data con un mock en el store de Vuex.

**Instrucciones adicionales:**

1. Estiliza la aplicación para que sea profesional y adecuada para un ambiente empresarial.
2. Asegúrate de que la aplicación sea responsiva y funcione en dispositivos móviles y desktop.
3. Prioriza la claridad y estructura del código. Se espera que el código pueda ser escalable y mantenible en el futuro.

**Evaluación:**

1. Funcionalidad y comportamiento de la aplicación.
2. Uso adecuado de Vue.js, en particular características avanzadas como componentes reutilizables, mixins, directivas personalizadas, etc.
3. Implementación y estructura de Vuex/Pinia.
4. Diseño, UX y usabilidad.
5. Validaciones y manejo de errores.
