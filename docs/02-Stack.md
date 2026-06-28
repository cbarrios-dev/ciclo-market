# Stack por capa

> Inicialmente todo el back estará en .NET, y luego evolucionará a
> microservicios de la siguiente manera:

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
