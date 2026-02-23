# 📝 Notes App

Una aplicación web moderna para la gestión de notas personales, construida con **Angular 15**, **TailwindCSS** y **DaisyUI**. Permite crear, editar, eliminar y buscar notas de forma rápida e intuitiva, con persistencia de datos en el **LocalStorage** del navegador.

---

## ✨ Características

- 📋 **Listado de notas** con diseño responsivo en grid (1 a 4 columnas según el dispositivo)
- ➕ **Crear notas** con título y contenido
- ✏️ **Editar notas** existentes
- 🗑️ **Eliminar notas** con un solo clic
- 🔍 **Buscar notas** en tiempo real desde la barra de navegación
- 💾 **Persistencia en LocalStorage** — tus notas se mantienen al recargar la página
- 🎨 **Tema oscuro** (_night_) habilitado por defecto con DaisyUI
- 📱 **Diseño responsivo** adaptado a dispositivos móviles, tablets y escritorio
- 📦 **Datos de ejemplo** precargados automáticamente desde un archivo JSON al primer uso

---

## 🛠️ Tecnologías

| Tecnología                                    | Versión   | Descripción                                   |
| --------------------------------------------- | --------- | --------------------------------------------- |
| [Angular](https://angular.io/)                | `^15.1.0` | Framework principal de desarrollo SPA         |
| [Angular CLI](https://angular.io/cli)         | `~15.1.3` | Herramienta de línea de comandos para Angular |
| [TypeScript](https://www.typescriptlang.org/) | `~4.9.4`  | Superset tipado de JavaScript                 |
| [TailwindCSS](https://tailwindcss.com/)       | `^3.2.4`  | Framework CSS de utilidades                   |
| [DaisyUI](https://daisyui.com/)               | `^2.50.0` | Librería de componentes sobre TailwindCSS     |
| [RxJS](https://rxjs.dev/)                     | `~7.8.0`  | Programación reactiva con Observables         |
| [UUID](https://www.npmjs.com/package/uuid)    | `^9.0.0`  | Generación de identificadores únicos          |
| [Karma](https://karma-runner.github.io/)      | `~6.4.0`  | Test runner para pruebas unitarias            |
| [Jasmine](https://jasmine.github.io/)         | `~4.5.0`  | Framework de testing BDD                      |
| [ESLint](https://eslint.org/)                 | `^8.31.0` | Linter para mantener la calidad del código    |

---

## 📐 Arquitectura del Proyecto

```
src/
├── app/
│   ├── components/              # Componentes de la UI
│   │   ├── navbar/              # Barra de navegación con búsqueda
│   │   ├── footer/              # Pie de página con enlaces sociales
│   │   ├── notes/               # Listado principal de notas
│   │   ├── simple-note/         # Tarjeta individual de nota (editar/eliminar)
│   │   ├── create-note/         # Formulario de creación (Reactive Forms)
│   │   ├── update-note/         # Formulario de edición (Template-driven Forms)
│   │   └── components.module.ts # Módulo que agrupa todos los componentes
│   ├── models/
│   │   └── note.models.ts       # Interfaz Note (id, title, content, timestamps)
│   ├── services/
│   │   ├── notes.service.ts     # Lógica de negocio (CRUD + búsqueda reactiva)
│   │   └── local-storage.service.ts  # Capa de persistencia en LocalStorage
│   ├── app-routing.module.ts    # Configuración de rutas
│   ├── app.module.ts            # Módulo raíz
│   └── app.component.*          # Componente raíz (navbar + router-outlet + footer)
├── assets/
│   └── notes.json               # Datos de ejemplo precargados
├── styles.scss                  # Estilos globales (Tailwind directives)
└── index.html                   # Punto de entrada HTML (tema: night)
```

### Modelo de datos

```typescript
interface Note {
  id: string; // UUID v4
  noteTitle: string; // Título de la nota
  noteContent: string; // Contenido de la nota
  createdAt: Date; // Fecha de creación
  updatedAt?: Date; // Fecha de última edición (opcional)
}
```

---

## 🗺️ Rutas

| Ruta          | Componente            | Descripción                                         |
| ------------- | --------------------- | --------------------------------------------------- |
| `/`           | —                     | Redirecciona a `/notes`                             |
| `/notes`      | `NotesComponent`      | Listado principal de todas las notas                |
| `/create`     | `CreateNoteComponent` | Formulario para crear una nueva nota                |
| `/update/:id` | `UpdateNoteComponent` | Formulario para editar una nota existente           |
| `**`          | `NotesComponent`      | Wildcard — redirige rutas no encontradas al listado |

---

## 🚀 Instalación y Ejecución

### Requisitos previos

- **Node.js** >= 16.x — [Descargar](https://nodejs.org/)
- **npm** >= 8.x (incluido con Node.js)
- **Angular CLI** >= 15.x (opcional, se puede usar via `npx`)

### Pasos

1. **Clonar el repositorio**

   ```bash
   git clone https://github.com/OliverZulett/notes-app.git
   cd notes-app
   ```

2. **Instalar dependencias**

   ```bash
   npm install
   ```

3. **Iniciar el servidor de desarrollo**

   ```bash
   ng serve
   # o alternativamente:
   npm start
   ```

4. **Abrir en el navegador**

   Navegar a [`http://localhost:4200`](http://localhost:4200). La aplicación se recargará automáticamente cuando modifiques los archivos fuente.

---

## 📜 Scripts Disponibles

| Comando         | Descripción                                          |
| --------------- | ---------------------------------------------------- |
| `npm start`     | Inicia el servidor de desarrollo en `localhost:4200` |
| `npm run build` | Genera el bundle de producción en `dist/notes/`      |
| `npm run watch` | Build en modo watch para desarrollo                  |
| `npm test`      | Ejecuta las pruebas unitarias con Karma              |
| `npm run lint`  | Analiza el código con ESLint                         |

---

## 🧪 Testing

Las pruebas unitarias utilizan **Jasmine** como framework de testing y **Karma** como test runner.

```bash
# Ejecutar todas las pruebas
npm test
```

---

## 📝 Notas Adicionales

- Al abrir la aplicación por primera vez (sin datos en LocalStorage), se cargan automáticamente **22 notas de ejemplo** desde `src/assets/notes.json`.
- Los datos se persisten en el **LocalStorage** del navegador, por lo que no se requiere un backend o base de datos externa.
- El proyecto utiliza **SCSS** como preprocesador CSS en los componentes.
- Los estilos globales importan las directivas de TailwindCSS desde `styles.scss`.

---

## 📄 Licencia

Este proyecto es de uso libre con fines educativos y de demostración.
