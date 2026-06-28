# Modelo Entidad-Relación — Ciclo Market

> Modelo lógico para la Fase 1. Al separar en microservicios cada
> servicio tendrá su propia BD.

---

## Diagrama

```
┌───────────────┐     ┌──────────────────┐
│    User       │     │    Category      │
│───────────────│     │──────────────────│
│ id (PK)       │     │ id (PK)          │
│ name          │     │ name             │
│ email (UQ)    │     │ slug (UQ)        │
│ password_hash │     │ description      │
│ role          │     └────────┬─────────┘
│ created_at    │              │ 1
│ updated_at    │              │
└───────┬───────┘              │
        │ 1                    │
        │                      │
        │                      │ N
        │              ┌───────┴────────┐
        │              │    Product     │
        │              │────────────────│
        │              │ id (PK)        │
        │              │ name           │
        │              │ slug (UQ)      │
        │              │ description    │
        │              │ price          │
        │              │ image_url      │
        │              │ category_id(FK)│
        │              │ created_at     │
        │              │ updated_at     │
        │              └───┬─────┬──────┘
        │                  │     │
        │                  │     │
        │    ┌─────────────┘     └─────────────┐
        │    │ 1                               │ 1
        │    │                                 │
   ┌────┴────┴───┐                    ┌────────┴──────────┐
   │   Cart      │                    │    Inventory      │
   │─────────────│                    │───────────────────│
   │ id (PK)     │                    │ product_id (PK/FK)│
   │ user_id(FK) │                    │ quantity          │
   │ created_at  │                    │ reserved_quantity │
   │ updated_at  │                    │ updated_at        │
   └──────┬──────┘                    └───────────────────┘
          │ 1
          │
          │ N
   ┌──────┴──────┐
   │  CartItem   │
   │─────────────│
   │ id (PK)     │
   │ cart_id(FK) │
   │ product_id  │
   │ quantity    │
   └─────────────┘

   ┌──────────────┐
   │    Order     │
   │──────────────│
   │ id (PK)      │
   │ user_id(FK)  │──┐
   │ status       │  │
   │ total        │  │
   │ ship_address │  │
   │ ship_city    │  │
   │ ship_zip     │  │
   │ created_at   │  │
   │ updated_at   │  │
   └──────┬───────┘  │
          │ 1        │
          │          │
     ┌────┴──────┐   │
     │ OrderItem │   │
     │───────────│   │
     │ id (PK)   │   │
     │ order_id  │   │
     │ product_id│   │
     │ name      │   │
     │ quantity  │   │
     │ unit_price│   │
     └───────────┘   │
                     │
    ┌────────────────┴──────────────────────┐
    │  StockMovement   (Inventory) │
    │───────────────────────────────────────│
    │ id (PK)                               │
    │ product_id (FK → products)            │
    │ type                                  │
    │ quantity                              │
    │ reference = "order-001"  ────── conecta por STRING, sin FK │
    │ created_at                            │
    └───────────────────────────────────────┘
```

---

## 2. Entidades

### 2.1 User — `users`

| Campo         | Tipo                   | Restricciones              |
| ------------- | ---------------------- | -------------------------- |
| id            | UUID                   | PK                         |
| name          | VARCHAR(100)           | NOT NULL                   |
| email         | VARCHAR(255)           | NOT NULL, UNIQUE           |
| password_hash | VARCHAR(255)           | NOT NULL                   |
| role          | ENUM('client','admin') | NOT NULL, DEFAULT 'client' |
| created_at    | TIMESTAMP              | NOT NULL                   |
| updated_at    | TIMESTAMP              | NOT NULL                   |

### 2.2 Category — `categories`

| Campo       | Tipo         | Restricciones    |
| ----------- | ------------ | ---------------- |
| id          | UUID         | PK               |
| name        | VARCHAR(100) | NOT NULL         |
| slug        | VARCHAR(100) | NOT NULL, UNIQUE |
| description | TEXT         |                  |

### 2.3 Product — `products`

| Campo       | Tipo          | Restricciones               |
| ----------- | ------------- | --------------------------- |
| id          | UUID          | PK                          |
| name        | VARCHAR(200)  | NOT NULL                    |
| slug        | VARCHAR(200)  | NOT NULL, UNIQUE            |
| description | TEXT          |                             |
| price       | DECIMAL(10,2) | NOT NULL, CHECK (price > 0) |
| image_url   | VARCHAR(500)  |                             |
| category_id | UUID          | FK → categories(id)         |
| created_at  | TIMESTAMP     | NOT NULL                    |
| updated_at  | TIMESTAMP     | NOT NULL                    |

### 2.4 Inventory — `inventories`

| Campo             | Tipo      | Restricciones         |
| ----------------- | --------- | --------------------- |
| product_id        | UUID      | PK, FK → products(id) |
| quantity          | INTEGER   | NOT NULL, DEFAULT 0   |
| reserved_quantity | INTEGER   | NOT NULL, DEFAULT 0   |
| updated_at        | TIMESTAMP | NOT NULL              |

> CHECK (quantity >= 0), CHECK (reserved_quantity >= 0),
> CHECK (reserved_quantity <= quantity)

### 2.5 Stock Movement — `stock_movements`

| Campo      | Tipo                                               | Restricciones             |
| ---------- | -------------------------------------------------- | ------------------------- |
| id         | UUID                                               | PK                        |
| product_id | UUID                                               | FK → products(id)         |
| type       | ENUM('in','out','reserved','released','cancelled') | NOT NULL                  |
| quantity   | INTEGER                                            | NOT NULL                  |
| reference  | VARCHAR(100)                                       | ID externo (ej. order_id) |
| created_at | TIMESTAMP                                          | NOT NULL                  |

> `reference` NO es FK. Es un string que contiene el ID de la orden desde
> el módulo Orders. En microservicios (Fase 4) esto permite que cada
> servicio se vincule por valor en vez de por constraint de BD.

### 2.6 Cart — `carts`

| Campo      | Tipo      | Restricciones          |
| ---------- | --------- | ---------------------- |
| id         | UUID      | PK                     |
| user_id    | UUID      | FK → users(id), UNIQUE |
| created_at | TIMESTAMP | NOT NULL               |
| updated_at | TIMESTAMP | NOT NULL               |

> Un usuario tiene exactamente un carrito activo.

### 2.7 Cart Item — `cart_items`

| Campo      | Tipo    | Restricciones                    |
| ---------- | ------- | -------------------------------- |
| id         | UUID    | PK                               |
| cart_id    | UUID    | FK → carts(id) ON DELETE CASCADE |
| product_id | UUID    | FK → products(id)                |
| quantity   | INTEGER | NOT NULL, CHECK (quantity > 0)   |

> UNIQUE (cart_id, product_id) — un producto no se repite en el carrito,
> solo aumenta su cantidad.

### 2.8 Order — `orders`

| Campo        | Tipo                                                          | Restricciones               |
| ------------ | ------------------------------------------------------------- | --------------------------- |
| id           | UUID                                                          | PK                          |
| user_id      | UUID                                                          | FK → users(id)              |
| status       | ENUM('pending','confirmed','shipped','delivered','cancelled') | NOT NULL, DEFAULT 'pending' |
| total        | DECIMAL(10,2)                                                 | NOT NULL                    |
| ship_address | VARCHAR(255)                                                  | NOT NULL                    |
| ship_city    | VARCHAR(100)                                                  | NOT NULL                    |
| ship_zip     | VARCHAR(20)                                                   | NOT NULL                    |
| created_at   | TIMESTAMP                                                     | NOT NULL                    |
| updated_at   | TIMESTAMP                                                     | NOT NULL                    |

### 2.9 Order Item — `order_items`

| Campo      | Tipo          | Restricciones                     |
| ---------- | ------------- | --------------------------------- |
| id         | UUID          | PK                                |
| order_id   | UUID          | FK → orders(id) ON DELETE CASCADE |
| product_id | UUID          | FK → products(id)                 |
| name       | VARCHAR(200)  | NOT NULL — snapshot del nombre    |
| quantity   | INTEGER       | NOT NULL, CHECK (quantity > 0)    |
| unit_price | DECIMAL(10,2) | NOT NULL — snapshot del precio    |

> `name` y `unit_price` son snapshots para que el historial de órdenes
> no cambie aunque el producto se modifique después.

---

## 3. Relaciones

| #   | Desde     | Hacia         | Tipo | Descripción                               |
| --- | --------- | ------------- | ---- | ----------------------------------------- |
| 1   | Category  | Product       | 1:N  | Una categoría tiene muchos productos      |
| 2   | Product   | Inventory     | 1:1  | Cada producto tiene un registro de stock  |
| 3   | Product   | StockMovement | 1:N  | Cada movimiento pertenece a un producto   |
| 4   | User      | Cart          | 1:1  | Un usuario tiene un carrito activo        |
| 5   | Cart      | CartItem      | 1:N  | Un carrito contiene muchos items          |
| 6   | CartItem  | Product       | N:1  | Un item referencia un producto            |
| 7   | User      | Order         | 1:N  | Un usuario tiene muchas órdenes           |
| 8   | Order     | OrderItem     | 1:N  | Una orden contiene muchos items           |
| 9   | OrderItem | Product       | N:1  | Un item referencia un producto (snapshot) |

> **StockMovement ↔ Order** no aparece en la tabla porque NO existe una
> relación con FK. La conexión es por el campo `reference` de
> `stock_movements`, que contiene el UUID de la orden como string.

---

## 4. Reglas de integridad

- El stock (`quantity`) nunca puede ser negativo
- La cantidad reservada (`reserved_quantity`) no puede exceder el stock disponible
- Al confirmar una orden se reduce `quantity` y se libera `reserved_quantity`
- Al cancelar una orden pendiente se libera `reserved_quantity`
- El precio de un producto en `order_items` es copia del momento de la compra
- Eliminar un producto no afecta órdenes ya creadas (integridad histórica)
