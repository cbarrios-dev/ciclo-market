# RF-02: Navbar — Layout

Barra de navegación superior fija, visible en todas las páginas.

```
┌──────────────────────────────────────────────────────────────┐
│  [CICLO MARKET]    🔍 [Buscar productos...]  [Registro] [🛒2]│
│  Logo (← catálogo)        Buscador            Auth    Carrito│
└──────────────────────────────────────────────────────────────┘

  ──── Usuario logueado ────
┌──────────────────────────────────────────────────────────────┐
│  [CICLO MARKET]    🔍 [Buscar productos...]  [👤 Juan ▼] [🛒2]│
│                                                ┌─────────┐   │
│                                                │ Perfil   │   │
│                                                │ Órdenes  │   │
│                                                │─ ─ ─ ─ ─│   │
│                                                │ Admin ▼ │   │
│                                                │   ┌──────────┐│
│                                                │   │Dashboard ││
│                                                │   │Productos ││
│                                                │   │Órdenes   ││
│                                                │   └──────────┘│
│                                                │ Cerrar ses.│  │
│                                                └─────────┘   │
└──────────────────────────────────────────────────────────────┘
```

| Elemento        | Comportamiento                                       |
| --------------- | ---------------------------------------------------- |
| Logo            | Enlace a catálogo (/catalogo)                        |
| Buscador        | Input de búsqueda en el navbar, filtra en catálogo   |
| Registro/Login  | Si no hay sesión: enlace a /login                    |
| Menú usuario    | Si hay sesión: dropdown con Perfil, Órdenes, Admin (si aplica), Cerrar sesión |
| Carrito         | Ícono con badge del número de items, enlace a /carrito |
