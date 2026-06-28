# RF-12: Eventos del sistema

Eventos internos que el sistema produce. En la Fase 1 se manejan con
eventos en memoria. En la Fase 2+ pasan a RabbitMQ.

| Evento             | Lo emite     | Lo consumen              | Datos incluidos                          |
| ------------------ | ------------ | ------------------------ | ---------------------------------------- |
| UserRegistered     | Auth         | Notifications, Analytics | user_id, email, nombre                   |
| ProductCreated     | Catalog      | Analytics                | product_id, name, price, category_id     |
| OrderCreated       | Orders       | Inventory, Analytics, Notifications | order_id, user_id, items[], total |
| InventoryUpdated   | Inventory    | Orders, Notifications    | product_id, quantity_before, quantity_after |
| InventoryLow       | Inventory    | Notifications            | product_id, current_stock, threshold     |

> Estos eventos son la base para la evolución a microservicios. En el
> monolito se emiten y consumen dentro del mismo proceso.
