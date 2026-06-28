# Orden de implementación

Cada paso combina frontend + backend. No se avanza al siguiente sin
completar el anterior. Cada paso deja un feature funcional.

| # | Frontend | Backend (API) | Depende de | Resultado funcional |
|---|---|---|---|---|
| 1 | Navbar + Router | Setup del monolito (BD, REST) | — | Layout base navegable |
| 2 | Catálogo (grid + detalle) | Catalog CRUD (productos, categorías, búsqueda) | #1 | Productos visibles públicamente |
| 3 | Login / Register | Auth (register, login, JWT, roles) | #1 | Autenticación funcional |
| 4 | Carrito | Orders: endpoints de carrito (add, remove, list) | #2 (catálogo) + #3 (auth) | Agregar/quitar productos al carrito |
| 5 | Checkout | Orders: crear orden + Inventory: reservar stock | #4 (carrito) + #3 (auth) | Comprar (exige sesión) |
| 6 | Perfil / Mis órdenes | Orders: historial por usuario + Auth: datos perfil | #3 (auth) | Usuario ve su historial |
| 7 | Admin (Dashboard, Productos, Órdenes) | Catalog + Inventory + Orders + Analytics | #3 (auth) | Admin gestiona el negocio |
| 8 | — | Eventos internos (en memoria) | Orders funcionando | Base para microservicios |
| 9 | — | Notificaciones (emails transaccionales) | #8 | Emails automáticos |

> El frontend se comunica con el monolito vía REST. La autenticación se
> valida en backend; el frontend solo oculta/muestra opciones según el
> rol.
