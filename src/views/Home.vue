<script setup>
import Logo_Black from '../assets/Logo Black.png'
import Service from '../domain/service.js'
import { useRouter } from 'vue-router'

// 🔧 Tenés que obtener la instancia del router
const router = useRouter()

const inicioSesion = async () => {
    try {
        await Service.registrarUsuario()

        // 🔁 Usá la instancia que creaste
    } catch (error) {
        console.error('Error al iniciar sesión:', error)
    }
}

// Nueva función para manejar el clic del botón
const handleLoginClick = () => {
    inicioSesion()
}
</script>

<template>
    <div class="container">
        <div class="black-backgorund">
            <div class="logo-container">
                <img src="../assets/Logo Black.png" alt="Logo" class="logo" />
                <h1 class="app-name">Your Spotify</h1>
            </div>

            <main class="content">
                <h2 class="subtitle">La app de integración entre YouTube y Spotify</h2>
                <button class="login-button" @click="handleLoginClick">
                    Iniciar Sesión
                </button>
            </main>
        </div>
    </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700&display=swap');

html,
body {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    /* Evita scroll innecesario */
    box-sizing: border-box;
    /* Asegura que el tamaño incluya bordes y padding */
}

.black-backgorund {
    background-color: rgba(65, 16, 99, 0.5);
    /* Azul más oscuro y semi-transparente */
    /* Azul más oscuro y semi-transparente */
    width: 40%;
    height: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 5vh;
}

/* Contenedor principal que ocupa toda la pantalla */
.container {
    height: 100vh;
    /* Ocupa el 100% de la altura de la ventana */
    width: 100vw;
    /* Ocupa el 100% del ancho de la ventana */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-image: url('../assets/background.webp');
    background-size: cover;
    /* Asegura que el fondo cubra todo el contenedor */
    background-position: center;
    /* Centra la imagen de fondo */
    background-repeat: no-repeat;
    background-attachment: fixed;
    /* Fija el fondo mientras se hace scroll */
    position: fixed;
    /* Fija el header en la parte superior */
    top: 0;
    left: 0;
    z-index: 10;
}

.logo-container {
    display: flex;
    flex-direction: column;
    /* Apila el logo y el texto verticalmente */
    align-items: center;
    /* Centra el logo y el texto horizontalmente */
    justify-content: center;
    /* Centra el contenido verticalmente */
}

.logo {
    width: 15vw;
    /* Ajusta el tamaño del logo si es necesario */
    height: 30vh;
    /* Agrega espacio entre el logo y el texto */
}

.app-name {
    font-family: 'Orbitron', sans-serif;
    font-size: 10vh;
    background: linear-gradient(90deg, #FF00FF, #00FFFF, #1E90FF);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-align: center;
    margin: 0;
}

/* Estilo del header */
.header {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    /* Alinea el contenido al inicio (izquierda) */
    width: 100%;
    /* Asegura que ocupe todo el ancho */
    padding: 0 20px;
    /* Agrega espacio a los lados */
    background-color: rgba(0, 0, 0, 0.5);
    /* Fondo semi-transparente */
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
    position: fixed;
    /* Fija el header en la parte superior */
    top: 0;
    left: 0;
    z-index: 10;
    /* Asegura que esté por encima del contenido */
}

/* Estilo del contenido principal */
.content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: white;
    /* Espacio para evitar que el contenido se superponga con el header */
}

/* Estilo del subtítulo */
.subtitle {
    font-family: 'Montserrat', sans-serif;
    font-size: 4.2vh;
    margin-bottom: 2dvh;
}

/* Estilo del botón */
.login-button {
    pointer-events: auto;
    /* Asegura que el botón sea clickeable */
    z-index: 9999;
    position: relative;

    font-size: 3.2vh;
    padding: 2.5dvh 3dvh;
    background-color: #C30CCB;
    /* Rojo neón */
    border: none;
    color: white;
    border-radius: 2dvh;
    cursor: pointer;
    transition: 0.3s;
    width: 40vh;
    margin-top: 4.2vh;
}

/* Efecto hover para el botón */
.login-button:hover {
    background-color: #7A91E5;
    /* Rojo más claro al pasar el ratón */
}
</style>