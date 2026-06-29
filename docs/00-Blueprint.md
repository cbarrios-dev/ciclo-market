# Ciclo Market - Project Blueprint

## Objetivo

Construir una plataforma tipo Marketplace para productos de ciclismo evolucionando desde un
**monolito modular** hasta una **arquitectura de microservicios basada
en eventos**, fortaleciendo conocimientos de arquitectura antes que frameworks.

## Tecnologias Objetivo

-   Clean Architecture
-   Arquitectura basada en eventos
-   RabbitMQ
-   Microservicios
-   CI/CD con GitHub Actions
-   Docker y Docker Compose
-   Spring Boot
-   Python
-   React
-   .NET
-   Node.js
-   PostgreSQL
-   Observabilidad
-   Kubernetes (fase final)

------------------------------------------------------------------------

# Stack

-   **React:** Frontend
-   **.NET:** Auth e Inventory
-   **Node.js:** Catalog y Notifications
-   **Spring Boot:** Orders
-   **Python:** Analytics
-   **PostgreSQL:** Una BD por servicio
-   **RabbitMQ:** Eventos
-   **Docker Compose:** Desarrollo
-   **GitHub Actions:** CI/CD

------------------------------------------------------------------------

# Reglas

1.  No copiar tutoriales completos.
2.  Una base de datos por servicio (En la etapa final de microservicios).
3.  Todo cambio importante documentado.
4.  Commits semánticos.
5.  Tests para Domain y Application.
6.  Evolucionar el sistema; no reescribirlo.

------------------------------------------------------------------------

# Roadmap

## Fase 0 - Setup

-   Configurar repositorio.
-   Convenciones.
-   Docker Compose básico.
-   React + Backend + PostgreSQL.

## Fase 1 - Monolito Modular

Clean Architecture en una sola aplicación .NET. Cada módulo con sus capas
(Controllers, Use Cases, Services, Repositories, Models).

### 1.1 - Core y Clean Architecture

-   Estructura de capas y módulos del proyecto.
-   Models base, Repositories genéricos.
-   Docker Compose funcional, React + API + PostgreSQL.

### 1.2 - Auth / Identity

-   Registro y login de usuarios.
-   JWT, refresh tokens, roles (client/admin).

### 1.3 - Catalog

-   CRUD de productos y categorías.
-   Búsqueda y filtros.

### 1.4 - Orders

-   Carrito de compras (agregar, quitar, listar items).
-   Checkout: crear orden con dirección de envío.
-   Historial de órdenes por usuario.

### 1.5 - Inventory

-   Control de stock (`quantity`, `reserved_quantity`).
-   Reserva de stock al confirmar orden.
-   Liberación y devolución de stock al cancelar.
-   Registro de movimientos (`StockMovement`).

### 1.6 - Analytics + Admin

-   Admin dashboard con KPIs (ventas, órdenes, usuarios).
-   Productos más vendidos, ventas por día.
-   Gestión admin de productos y órdenes.

### 1.7 - Notificaciones

-   Eventos internos en memoria (UserRegistered, ProductCreated,
    OrderCreated, InventoryUpdated, InventoryLow).
-   Emails transaccionales (bienvenida, confirmación,
    cambio de estado, stock bajo).

## Fase 2 - RabbitMQ

Reemplazar eventos internos por mensajería.

Practicar:

-   Exchanges
-   Queues
-   Routing Keys
-   ACK
-   Retry
-   Dead Letter Queue

## Fase 3 - API Gateway

Agregar autenticación JWT y centralizar acceso.

## Fase 4 - Microservicios

Extraer gradualmente:

1.  Auth
2.  Inventory
3.  Notifications
4.  Analytics
5.  Catalog
6.  Orders

## Fase 5 - CI/CD

Por servicio:

-   Build
-   Test
-   Lint
-   Docker Build
-   Publicación
-   Deploy

## Fase 6 - Observabilidad

-   Logging
-   OpenTelemetry
-   Prometheus
-   Grafana

## Fase 7 - Kubernetes

Migrar desde Docker Compose.

------------------------------------------------------------------------

# Distribución tecnológica

## React

-   Login
-   Catálogo
-   Carrito
-   Checkout
-   Perfil

## .NET

Auth: - JWT - Refresh Tokens - Roles

Inventory: - Stock - Reservas - Actualizaciones

## Node.js

Catalog: - Productos - Categorías - Búsquedas

Notifications: - Email - Notificaciones

## Spring Boot

Orders: - Carrito - Checkout - Estados - Validaciones

## Python

Analytics: - Productos más vendidos - Ventas por día - Ticket promedio - Clientes frecuentes

------------------------------------------------------------------------

# Comunicación

Inicialmente:

Frontend -\> REST -\> Monolito

Después:

REST para consultas

RabbitMQ para eventos

------------------------------------------------------------------------

# Base de datos

Una base por servicio (En la etapa final de microservicios).

Nunca compartir tablas.

------------------------------------------------------------------------

# Qué NO implementar inicialmente

-   Saga
-   Kafka
-   Event Sourcing
-   gRPC
-   Service Mesh
-   CQRS avanzado

------------------------------------------------------------------------

# Objetivo final

Ser capaz de explicar:

-   Por qué usar eventos.
-   Cuándo usar microservicios.
-   Cómo organizar Clean Architecture.
-   Cómo construir pipelines CI/CD.
-   Cómo evolucionar un sistema de forma incremental.

Este documento será la guía principal del proyecto y evolucionará junto
con el código.
