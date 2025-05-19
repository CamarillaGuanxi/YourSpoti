# 🎵 YourSpoti – Frontend

**YourSpoti** es una aplicación web desarrollada con **Vue.js** que permite a los usuarios **migrar fácilmente playlists entre YouTube y Spotify**. Este repositorio contiene el código fuente del **frontend**, que actúa como interfaz gráfica del proyecto.

## 🚀 Características

- Autenticación mediante **OAuth 2.0** con YouTube y Spotify.
- Interfaz intuitiva y amigable para seleccionar listas de reproducción.
- Comunicación directa con el backend mediante una **API RESTful**.
- Migración automática de canciones y listas entre plataformas.
- Implementado con **Vue.js**, **TypeScript**, y buenas prácticas de desarrollo web.

## 🛠️ Instalación

### 1. Clonar el repositorio

```bash
git clone https://github.com/CamarillaGuanxi/YourSpoti
cd YourSpoti
```

### 2. Instalar dependencias

```bash
npm install
```

### 3. Iniciar el servidor de desarrollo

```bash
npm run dev
```

> La aplicación estará disponible por defecto en: `http://localhost:5173`

## 🌐 Estructura del Proyecto

El frontend contiene tres vistas principales:

- **Página de inicio:** permite al usuario autenticarse en las plataformas.
- **Selección de plataforma:** elige entre migrar desde YouTube o Spotify.
- **Gestión de playlists:** muestra listas disponibles y permite iniciar la migración.

Incluye además:

- Un **servicio HTTP** para conectarse con el backend Express.
- Archivos `.ts` con definición de tipos para mejorar el mantenimiento del código.

## 📦 Tecnologías utilizadas

- **Vue.js 3**
- **TypeScript**
- **Axios**
- **OAuth 2.0**
- **Vite / Vue CLI**

## 📡 Backend

Este frontend se comunica con el backend implementado en **Express.js**. Asegúrate de que el backend esté corriendo correctamente y que esté habilitado el CORS para permitir solicitudes desde el frontend.

Más detalles del backend en: [yourspoti-backend](https://github.com/CamarillaGuanxi/YourSpotiBack)

## 📸 Capturas (opcional)

> Puedes agregar imágenes aquí para mostrar cómo se ve tu app.

## ✍️ Autor

- **Valentino Dominguez Rabanal**  
  Proyecto final de asignatura – IOT

