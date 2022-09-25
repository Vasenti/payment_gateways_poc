
# Payment Gateways POC

Es un proyecto en que realizaré una prueba de concepto utilizando
patrón de diseño llamado Facade.





## Toma de decisiones

#### ¿Por qué utilizar Facade como patrón de diseño?

Es un patrón que he encontrado que se ajusta de la mejor manera para poder
separar cada funcionalidad y que cumpla su objetivo, en este caso, métodos de pago.
Otra posible opción hubiese sido un patrón de API GATEWAY. 

#### Estructura aplicación

/enum - Hasta ahora no lo he probado, pero me parece mejor que tenga
su propia carpeta donde podremos indicar las pasarelas de pago

/Facade - es la funcionalidad que conoce qué clases realizarán una determinada petición
y al que delegará.

/Model - es donde guardaremos los datos sobre un pago

/PaymentGateways - es donde podremos obtener las pasarelas de pago que utilizaremos

/Service - será otra capa que se encarga de inicializar el servicio.

#### Cosas que hubiese implementado

Inyección de dependencias


## Acknowledgements

 - [Facade Pattern](https://es.wikipedia.org/wiki/Facade_(patr%C3%B3n_de_dise%C3%B1o))