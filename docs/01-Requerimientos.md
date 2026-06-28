# Requerimientos — Ciclo Market

> Basado en `00-Blueprint.md`
> Cada requerimiento tiene su propio archivo. Este es el índice general.

---

## Meta

| Archivo | Contenido |
|---|---|
| [`01-RF_00_Stack.md`](01-RF_00_Stack.md) | Stack por capa |
| [`01-RF_00_Implementacion.md`](01-RF_00_Implementacion.md) | Orden de implementación |

---

## Páginas del frontend

> El catálogo es público — se puede navegar, buscar y ver productos sin
> estar logueado. El login solo se exige al momento de comprar (checkout).

| # | Archivo | Descripción |
|---|---------|-------------|
| 1 | [`01-RF_01_Roles.md`](01-RF_01_Roles.md) | Roles de usuario |
| 2 | [`01-RF_02_Navbar.md`](01-RF_02_Navbar.md) | Navbar — Layout |
| 3 | [`01-RF_03_Catalogo.md`](01-RF_03_Catalogo.md) | Catálogo y detalle de producto |
| 4 | [`01-RF_04_Login_Register.md`](01-RF_04_Login_Register.md) | Login / Register |
| 5 | [`01-RF_05_Carrito.md`](01-RF_05_Carrito.md) | Carrito de compras |
| 6 | [`01-RF_06_Checkout.md`](01-RF_06_Checkout.md) | Checkout |
| 7 | [`01-RF_07_Perfil_Ordenes.md`](01-RF_07_Perfil_Ordenes.md) | Perfil, órdenes y detalle de orden |
| 8 | [`01-RF_08_Admin_Dashboard.md`](01-RF_08_Admin_Dashboard.md) | Admin — Dashboard (Analytics) |
| 9 | [`01-RF_09_Admin_Productos.md`](01-RF_09_Admin_Productos.md) | Admin — Gestión de productos |
| 10 | [`01-RF_10_Admin_Ordenes.md`](01-RF_10_Admin_Ordenes.md) | Admin — Gestión de órdenes |

---

## Infraestructura

| Archivo | Descripción |
|---|---|
| [`01-RF_11_Notificaciones.md`](01-RF_11_Notificaciones.md) | Notificaciones (emails) |
| [`01-RF_12_Eventos_Sistema.md`](01-RF_12_Eventos_Sistema.md) | Eventos del sistema |
| [`01-RF_13_Reglas_Negocio.md`](01-RF_13_Reglas_Negocio.md) | Reglas de negocio |
| [`01-RF_14_Criterios_Aceptacion.md`](01-RF_14_Criterios_Aceptacion.md) | Criterios de aceptación |

---

## Stack por capa

| Capa       | Tecnología |
| ---------- | ---------- |
| Frontend   | React      |
| Auth       | .NET       |
| Catalog    | Node.js    |
| Inventory  | .NET       |
| Orders     | Spring Boot|
| Analytics  | Python     |
| Notificaciones | Node.js |
| BD         | PostgreSQL (1 por servicio) |
| Mensajería | RabbitMQ (Fase 2+) |
| API Gateway| A implementar (Fase 3) |

> Ver [`01-RF_00_Stack.md`](01-RF_00_Stack.md) para más detalle.
