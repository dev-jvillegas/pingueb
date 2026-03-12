# 🐧 Pingüeb

Sitio web oficial de **Pingüeb** — Desarrollo web Front End para pequeñas empresas.  
Sitios informativos, landing pages y manejo de redes sociales desde Puruándiro, Michoacán.

🌐 **En vivo:** [dev-jvillegas.github.io/pingueb](https://dev-jvillegas.github.io/pingueb)

---

## 📁 Estructura del proyecto

```
pingueb/
├── index.html          # Página principal
├── README.md           # Este archivo
├── css/
│   └── styles.css      # Estilos + variables de color + @font-face
├── js/
│   └── main.js         # Cursor, contadores, scroll reveal, navbar
├── fonts/
│   ├── Kreon-Light.ttf
│   ├── Kreon-Regular.ttf
│   ├── Kreon-Medium.ttf
│   ├── Kreon-SemiBold.ttf
│   └── Kreon-Bold.ttf
└── images/
    ├── favicon.ico
    ├── logotipo_blanco.png
    ├── logotipo_turquesa.png
    ├── isotipo_turquesa.png
    ├── portfolio/
    │   ├── promolsa.jpg
    │   ├── lacueva.jpg
    │   ├── mundimuebles.jpg
    │   └── percherones.jpg
    └── clientes/
        ├── promolsa.png
        ├── lacueva.png
        └── percherones.png
```

---

## 🎨 Paleta de colores

| Variable | Hex | Uso |
|---|---|---|
| `--negro` | `#0f0d0e` | Fondo principal |
| `--turquesa` | `#2f8f8b` | Color de acento |
| `--gris` | `#8a9090` | Textos secundarios |
| `--crema` | `#faf9f4` | Textos principales |

---

## 🗂 Secciones del sitio

- **Hero** — Presentación principal con CTA
- **Stats** — Contadores animados al hacer scroll
- **Servicios** — 6 cards con precios de lanzamiento
- **Portafolio** — 4 clientes reales con imágenes
- **Testimonios** — Reseñas con logos de clientes
- **Sobre mí** — Perfil + link a LinkedIn
- **Contacto** — WhatsApp, Gmail, Facebook, Instagram

---

## 🚀 Correr en local

No requiere instalación ni servidor. Solo abre el archivo directamente:

```bash
# Opción 1 — Abrir directo en el navegador
open index.html

# Opción 2 — Con VS Code Live Server (recomendado)
# Instala la extensión Live Server y haz clic en "Go Live"
```

---

## 🌐 Publicar en GitHub Pages

1. Ve a **Settings → Pages** en tu repositorio
2. En **Branch** selecciona `main` y carpeta `/ (root)`
3. Guarda — en unos minutos estará en vivo

### Agregar dominio personalizado (cuando lo compres)

1. Crea un archivo `CNAME` en la raíz del repo con el contenido:
   ```
   pingueb.mx
   ```
2. En tu proveedor de dominio, agrega un registro DNS tipo `CNAME`:
   ```
   www  →  dev-jvillegas.github.io
   ```
3. GitHub Pages lo detecta automáticamente en unos minutos.

---

## 📝 Cosas pendientes

- [ ] Crear páginas de Facebook e Instagram de Pingüeb
- [ ] Actualizar links de redes sociales en `index.html` (busca `<!-- TODO -->`)
- [ ] Agregar foto real en sección "Sobre mí" (`images/juan-manuel.jpg`)
- [ ] Comprar dominio `pingueb.mx` y configurar CNAME
- [ ] Reemplazar proyectos de portafolio por sitios web reales cuando estén listos

---

## 👤 Autor

**Juan Manuel Villegas Meza**  
Ing. Sistemas Computacionales · Fundador de Pingüeb  
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=flat&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/dev-jvillegas/)

---

*© 2026 Pingüeb · Hecho con 🐧 en México*
