# Portafolio personal — Java + Spring Boot

Plantilla de portafolio responsive creada con Java 17, Spring Boot, HTML, CSS y JavaScript. Spring Boot sirve los archivos de la página y ofrece un endpoint de salud en `/api/health`.

## 1. Personalizar tus datos

Abre `src/main/resources/static/js/main.js` y busca el objeto `PORTFOLIO_CONFIG` al inicio del archivo. Ahí puedes editar:

- `name`, `initials`, `role`, `summary` y `location`: nombre y presentación.
- `cvUrl`: enlace público a tu CV. En Google Drive, comparte el PDF con permiso de lectura para cualquiera que tenga el enlace y pega la URL aquí.
- `aboutLead` y `aboutDescription`: descripción personal.
- `education`: carrera, institución y periodo.
- `social`: enlaces de GitHub y LinkedIn.
- `contact`: correo y número de WhatsApp. Para Perú, escribe `51` seguido del número, sin `+`, espacios ni guiones.
- `skills`: lista de tecnologías.
- `projects`: proyectos destacados. Para cada proyecto edita `title`, `description`, `technologies` y `githubUrl`. `demoUrl` es opcional.

### Agregar otro proyecto

Dentro de `projects: [ ... ]`, copia un objeto completo y pégalo después del anterior, separando los objetos con una coma. Ejemplo:

```javascript
{
    title: "Mi nuevo proyecto",
    description: "Breve explicación de lo que hace el proyecto.",
    technologies: ["Java", "MySQL"],
    githubUrl: "https://github.com/TU-USUARIO/TU-REPOSITORIO",
    demoUrl: ""
}
```

No necesitas modificar `index.html` ni `styles.css` para agregar tarjetas.

## 2. Ejecutar localmente

Necesitas tener instalado Java 17 o superior y Maven 3.9 o superior.

```bash
mvn spring-boot:run
```

Abre `http://localhost:10000` en el navegador. También puedes crear el JAR con:

```bash
mvn clean package
java -jar target/portfolio.jar
```

## 3. Publicar en GitHub

1. Crea un repositorio nuevo en GitHub.
2. Sube todo el contenido de esta carpeta al repositorio (incluidos `Dockerfile` y `render.yaml`).
3. Comprueba que `render.yaml` esté en la raíz del repositorio.

## 4. Desplegar usando Render Dashboard

Este proyecto incluye `Dockerfile` y `render.yaml` para que Render utilice Docker al desplegar Java.

1. Entra a [Render Dashboard](https://dashboard.render.com/).
2. Selecciona **New + → Blueprint** si deseas que Render lea `render.yaml`, o **New + → Web Service** y conecta el repositorio de GitHub.
3. Para el método Web Service, confirma que el entorno sea **Docker**.
4. Si usas Blueprint, revisa el servicio `mi-portafolio-java` y pulsa **Apply**.
5. Espera a que el despliegue termine y abre la URL `https://mi-portafolio-java.onrender.com` que Render asigne.

Render puede detener temporalmente los servicios gratuitos que no reciben tráfico; la primera visita después de un periodo de inactividad puede tardar en responder.

## 5. Comprobar que funciona

- Página: `/`
- Estado del servidor Java: `/api/health`

El endpoint de salud debe responder algo similar a:

```json
{
  "status": "ok",
  "application": "portfolio-java"
}
```

## Nota sobre el formulario de contacto

El formulario usa `mailto:`: valida los campos y abre la aplicación de correo del visitante con el mensaje preparado. No envía el correo directamente desde Render. Para recibir mensajes sin depender del programa de correo del visitante habría que integrar un servicio de envío de correo y configurar sus credenciales como variables de entorno.
