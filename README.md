# Resúmenes de Termodinámica

Este proyecto contiene una colección de resúmenes y materiales de estudio para el curso de Termodinámica. La información está organizada de manera estructurada y accesible a través de una interfaz web.

## 🚀 Inicio Rápido

### Clonar el Repositorio

```bash
git clone [URL_DEL_REPOSITORIO]
cd Termodinamica
```

### Probar Localmente

1. Si tienes Visual Studio Code, instala la extensión "Live Server"
2. Abre el proyecto en VSCode
3. Haz clic derecho en `index.html`
4. Selecciona "Open with Live Server"
5. El sitio se abrirá automáticamente en tu navegador predeterminado

### Desplegar en Netlify

1. Crea una cuenta en [Netlify](https://www.netlify.com/)
2. Conecta tu repositorio de GitHub
3. Selecciona el repositorio para desplegar
4. La configuración de despliegue ya está definida en `netlify.toml`
5. Haz clic en "Deploy site"

## 📁 Estructura del Proyecto

```
├── index.html          # Página principal
├── styles.css         # Estilos del sitio
├── scripts.js         # Funcionalidad interactiva
├── netlify.toml       # Configuración de despliegue
├── resumenes/         # Contenido principal
│   ├── formulario/    # Resúmenes del formulario
│   ├── libro/         # Resúmenes del libro
│   └── ayudantias/    # Resúmenes de ayudantías
└── Ayudantias/        # Archivos PDF de ayudantías
```

## 📝 Actualizar Contenido

### Agregar Nuevos Resúmenes

1. Navega a la carpeta correspondiente dentro de `resumenes/`
2. Crea un nuevo archivo Markdown (.md)
3. Sigue el formato existente en los otros archivos
4. Actualiza el `Indice.md` si es necesario

### Modificar Estilos

- El archivo `styles.css` contiene todos los estilos del sitio
- Modifica las clases existentes o añade nuevas según sea necesario

### Actualizar Funcionalidad

- El archivo `scripts.js` contiene la lógica del sitio
- Añade nuevas funciones según las necesidades del proyecto

## 🔒 Seguridad

El sitio incluye configuraciones de seguridad básicas a través de headers HTTP definidos en `netlify.toml`:

- Protección contra clickjacking
- Prevención XSS
- Políticas de seguridad de contenido
- Configuración de referencias cruzadas

## 📜 Licencia

Este proyecto es de uso educativo para el curso de Termodinámica.
