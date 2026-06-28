# RF-14: Criterios de aceptación

| Página           | QA check básico                               |
| ---------------- | --------------------------------------------- |
| Login/Register   | Errores visibles, redirect post-auth          |
| Catálogo         | Búsqueda funcional, filtro por categoría      |
| Detalle producto | Stock se actualiza, cantidad válida           |
| Carrito          | Persiste, total correcto, eliminar funciona   |
| Checkout         | Valida dirección, confirma orden              |
| Perfil           | Muestra solo órdenes del usuario              |
| Admin Dashboard  | Solo admin, datos reales del sistema          |
| Admin Productos  | CRUD completo, validaciones de stock/precio   |
| Admin Órdenes    | Solo muestra botones según estado, transiciones reales, libera stock al cancelar |
