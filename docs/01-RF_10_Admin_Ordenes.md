# RF-10: Admin — Gestión de órdenes

```
┌──────────────────────────────────────────────────┐
│  ADMIN / ÓRDENES              [Filtrar: ▼]       │
├──────────────────────────────────────────────────┤
│  #001 — Juan Pérez   — $2290 — Pendiente         │
│                       [✓ Confirmar] [✕ Cancelar]  │
│  #002 — Ana López    — $150 — Confirmada         │
│                       [📦 Enviar] [✕ Cancelar]   │
│  #003 — Luis Paz     — $3200 — En camino         │
│                       [✅ Entregar]               │
│  #004 — Carla Sol    — $100 — Entregado          │
│                       (sin acciones)              │
│  #005 — Pedro Ruiz   — $80  — Pendiente          │
│                       [✓ Confirmar] [✕ Cancelar]  │
└──────────────────────────────────────────────────┘
```

- Lista de órdenes con datos del cliente y total
- Cada orden muestra solo los botónes de acción válidos según su estado actual
- Los botónes ejecutan la transición de estado inmediatamente
- Es la misma página `/admin/ordenes`, las acciones son inline
- Al cancelar se libera el stock automáticamente

## Máquina de estados de la orden

```
    ┌─────────┐
    │ Pending │ ─────────────────→ Cancelled  (usuario o admin)
    └────┬────┘
         │ [Admin: Confirmar]
    ┌────┴────┐
    │Confirmed│ ────────────────→ Cancelled  (admin)
    └────┬────┘
         │ [Admin: Enviar]
    ┌────┴────┐
    │ Shipped │ ────────────────→ Cancelled  (admin, devolución)
    └────┬────┘
         │ [Admin: Entregar]
    ┌────┴─────┐
    │Delivered │  ← estado final
    └──────────┘
```

| Estado actual | Acción admin | Estado nuevo | Impacto en inventario          |
| ------------- | ------------ | ------------ | ------------------------------ |
| pending       | Confirmar    | confirmed    | reserved += cantidad           |
| pending       | Cancelar     | cancelled    | (sin cambio, no había reserva) |
| confirmed     | Enviar       | shipped      | quantity -= cantidad, reserved -= cantidad |
| confirmed     | Cancelar     | cancelled    | reserved -= cantidad (libera)  |
| shipped       | Entregar     | delivered    | (ninguno, ya salió)            |
| shipped       | Cancelar     | cancelled    | quantity += cantidad (devuelto al stock) |

> Nota: en la Fase 1, las transiciones `pending → confirmed`
> y `confirmed → shipped` pueden ser automáticas o manuales según se
> decida. El diseño asume manual (admin aprueba).
