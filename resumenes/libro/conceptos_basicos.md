# Conceptos Básicos de Termodinámica

_Parte del curso FIS1523 - Termodinámica_

## Introducción

La termodinámica es la rama de la física que estudia las relaciones entre el calor, la energía y el trabajo mecánico. Para entender esta disciplina, es fundamental comenzar con sus conceptos más básicos.

## Sistema y su Entorno

Un sistema termodinámico se define como:

- **Sistema**: Cantidad de materia o región del espacio seleccionada para estudio
- **Entorno**: Todo lo que está fuera del sistema y puede interactuar con él
- **Frontera**: Límite que separa el sistema del entorno

```
    Representación esquemática:

    ┌──────────────────────────┐
    │                          │
    │         SISTEMA          │   ENTORNO
    │                          │
    └──────────────────────────┘
         Frontera
```

## Tipos de Sistemas

| Tipo de Sistema | Intercambio de Masa | Intercambio de Energía | Ejemplo          |
| --------------- | ------------------- | ---------------------- | ---------------- |
| Cerrado         | ❌ No               | ✅ Sí                  | Gas en un pistón |
| Aislado         | ❌ No               | ❌ No                  | Termo ideal      |
| Abierto         | ✅ Sí               | ✅ Sí                  | Turbina de vapor |

### Ejemplos Visuales

1. **Sistema Cerrado**:

```
    ┌──────────────────┐
    │    ↕ Energía     │
    │   ▒▒▒▒▒▒▒▒▒▒    │
    │   ▒  Gas en ▒    │
    │   ▒ Pistón  ▒    │
    └──────────────────┘
    (No hay flujo de masa)
```

2. **Sistema Aislado**:

```
    ╔══════════════════╗
    ║                  ║
    ║    Contenido     ║
    ║    Aislado      ║
    ║                  ║
    ╚══════════════════╝
    (No hay intercambios)
```

3. **Sistema Abierto**:

```
    ┌──────────────────┐
    │  ↕ Energía       │
    → ▒▒▒▒▒▒▒▒▒▒▒▒▒▒  →
    │  Flujo de masa   │
    └──────────────────┘
```

> 💡 **Nota importante**: La elección del sistema es crucial para el análisis termodinámico. Un buen sistema facilita el análisis y reduce la complejidad del problema.

## Aplicaciones Prácticas

- **Sistema Cerrado**: Motor de pistón, olla a presión
- **Sistema Aislado**: Calorímetro, termo de café
- **Sistema Abierto**: Turbinas, intercambiadores de calor, aire acondicionado
