# RF-11: Notificaciones

El sistema envía notificaciones al usuario en estos momentos. En la Fase 1
son emails transaccionales simples. A futuro pueden ser también
notificaciones push/in-app.

| Evento                    | Canal   | Para quién | Contenido                                  |
| ------------------------- | ------- | ---------- | ------------------------------------------ |
| Registro de usuario       | Email   | Usuario    | "Bienvenido a Ciclo Market, {nombre}"      |
| Validación de correo      | Email   | Usuario    | "Confirma tu email: {link}"                |
| Confirmación de orden     | Email   | Usuario    | "Orden #{id} confirmada. Total: ${total}"  |
| Cambio de estado de orden | Email   | Usuario    | "Tu orden #{id} cambió a {estado}"         |
| Stock bajo                | Email   | Admin      | "El producto {nombre} tiene stock: {qty}"  |

> La validación de correo se envía al registrarse. El usuario no puede
> comprar hasta que confirme su email (opcional en Fase 1, se puede
> saltar para agilizar desarrollo).
