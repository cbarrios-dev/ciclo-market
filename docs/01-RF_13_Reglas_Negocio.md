# RF-13: Reglas de negocio

- Un producto no puede tener stock negativo
- Solo se puede comprar si hay stock suficiente
- El Admin puede crear/editar/eliminar productos
- Cada usuario ve solo sus órdenes
- Los precios se muestran en USD (o moneda local configurable)

## Máquina de estados de la orden

| Transición                    | Quién         | Condición                        |
| ----------------------------- | ------------- | -------------------------------- |
| pending → confirmed           | Admin         | Stock disponible                 |
| pending → cancelled           | Usuario/Admin | —                                |
| confirmed → shipped           | Admin         | —                                |
| confirmed → cancelled         | Admin         | Libera stock reservado           |
| shipped → delivered           | Admin         | —                                |
| shipped → cancelled           | Admin         | Devuelve stock (solo devolución) |
| delivered → *                 | —             | Estado terminal, no cambia       |
