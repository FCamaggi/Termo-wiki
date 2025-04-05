document.addEventListener('DOMContentLoaded', () => {
    // Tema inicial
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    document.documentElement.setAttribute('data-theme', prefersDark ? 'dark' : 'light');

    // Cambio de tema
    const themeSwitch = document.getElementById('theme-switch');
    themeSwitch.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', newTheme);
    });

    // Configuración de marked para código y fórmulas matemáticas
    marked.setOptions({
        highlight: function (code, lang) {
            return code;
        },
        breaks: true,
        gfm: true
    });

    // Función para cargar y renderizar markdown
    async function loadMarkdown(path) {
        try {
            const response = await fetch(path);
            if (!response.ok) throw new Error('No se pudo cargar el archivo');

            const markdown = await response.text();
            const content = document.getElementById('markdown-content');
            content.innerHTML = marked.parse(markdown);

            // Renderizar fórmulas matemáticas
            renderMathInElement(content, {
                delimiters: [
                    { left: '$$', right: '$$', display: true },
                    { left: '$', right: '$', display: false },
                    { left: '\\[', right: '\\]', display: true },
                    { left: '\\(', right: '\\)', display: false }
                ],
                throwOnError: false
            });

            // Ajustar enlaces internos
            adjustInternalLinks();
        } catch (error) {
            console.error('Error al cargar el archivo:', error);
            document.getElementById('markdown-content').innerHTML = `
        <div style="color: var(--text-secondary);">
          <h2>Error al cargar el contenido</h2>
          <p>No se pudo cargar el archivo ${path}</p>
        </div>
      `;
        }
    }

    // Ajustar enlaces internos en el contenido markdown
    function adjustInternalLinks() {
        const links = document.querySelectorAll('#markdown-content a');
        links.forEach(link => {
            const href = link.getAttribute('href');
            if (href && href.endsWith('.md')) {
                link.addEventListener('click', (e) => {
                    e.preventDefault();
                    loadMarkdown(href);
                    // Actualizar la URL sin recargar la página
                    history.pushState(null, '', `#${href}`);
                });
            }
        });
    }

    // Manejar navegación
    document.querySelectorAll('#nav-list a[data-md]').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const path = link.getAttribute('data-md');
            loadMarkdown(path);
            // Actualizar la URL sin recargar la página
            history.pushState(null, '', `#${path}`);
        });
    });

    // Cargar contenido inicial
    const hash = window.location.hash.slice(1);
    if (hash) {
        loadMarkdown(hash);
    } else {
        loadMarkdown('resumenes/Indice.md');
    }

    // Manejar navegación del navegador
    window.addEventListener('popstate', () => {
        const hash = window.location.hash.slice(1);
        if (hash) {
            loadMarkdown(hash);
        } else {
            loadMarkdown('resumenes/Indice.md');
        }
    });
});