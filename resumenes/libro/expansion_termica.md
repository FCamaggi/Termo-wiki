# Expansión Térmica

_Parte del curso FIS1523 - Termodinámica_

## Introducción

La expansión térmica es el fenómeno por el cual los materiales cambian sus dimensiones en respuesta a variaciones de temperatura. Este fenómeno es crucial en ingeniería y diseño de estructuras.

## Tipos de Expansión

### 1. Expansión Lineal

```
Temperatura inicial (T_1)
    ┌───────────────┐
    └───────────────┘
    Longitud inicial (L_1)

Temperatura final (T_2)
    ┌─────────────────────┐
    └─────────────────────┘
    Longitud final (L_2)
```

**Fórmula**: \Delta L = \alpha L_1 \Delta T

Donde:

- \alpha = coeficiente de expansión lineal [1/°C]
- L_1 = longitud inicial [m]
- \Delta T = cambio de temperatura [°C]

### 2. Expansión Superficial

```
      T_1                T_2
    ┌─────┐          ┌──────┐
    │     │    →     │      │
    │     │          │      │
    └─────┘          └──────┘
    Área₁            Área₂
```

**Fórmula**: \Delta A = \beta A_1 \Delta T = 2\alpha A_1 \Delta T

Donde:

- \beta = coeficiente de expansión superficial ≈ 2\alpha
- A_1 = área inicial [m²]

### 3. Expansión Volumétrica

```
        T_1                    T_2
    ┌─────────┐          ┌──────────┐
    │         │          │          │
    │         │    →     │          │
    │         │          │          │
    └─────────┘          └──────────┘
    Volumen₁            Volumen₂
```

**Fórmula**: \Delta V = \gamma V_1 \Delta T = 3\alpha V_1 \Delta T

Donde:

- \gamma = coeficiente de expansión volumétrica ≈ 3\alpha
- V_1 = volumen inicial [m³]

## Coeficientes de Expansión

| Material       | \alpha (×10⁻⁶/°C) | Aplicación común  |
| -------------- | ----------------- | ----------------- |
| Aluminio       | 23                | Marcos de ventana |
| Acero          | 11-13             | Estructuras       |
| Cobre          | 17                | Tuberías          |
| Vidrio         | 9                 | Ventanas          |
| Hormigón       | 12                | Construcción      |
| Plástico (PVC) | 50-100            | Tuberías          |

## Aplicaciones Prácticas

### 1. Juntas de Expansión en Puentes

```
    Puente
┌────────────┐  ║
│            │  ║  ← Junta de expansión
└────────────┘  ║
    Pilar
```

- Permite movimiento de 2-5 cm
- Previene grietas y deformaciones

### 2. Rieles de Ferrocarril

```
    Riel     Espacio
┌──────────┐  ║  ┌──────────┐
└──────────┘  ║  └──────────┘
```

- Espaciado típico: 1-2 cm cada 20 m
- Previene deformación en verano

### 3. Termómetros de Mercurio

```
┌──────────┐
│    │     │
│    │     │  ← Expansión del mercurio
│    │     │
│   (Hg)   │
└──────────┘
```

## Problemas Resueltos

### Ejemplo 1: Expansión de un Puente

Un puente de acero mide 100 m a 20°C. ¿Cuánto se expandirá si la temperatura sube a 40°C?

**Solución**:

1. Datos:
   - L_1 = 100 m
   - \Delta T = 40°C - 20°C = 20°C
   - \alpha = 12 \times 10^{-6}/°C
2. Aplicando la fórmula:
   - \Delta L = \alpha L_1 \Delta T
   - \Delta L = (12 \times 10^{-6})(100)(20)
   - $\Delta L = 0.024$ m = 24 mm

### Ejemplo 2: Expansión de una Placa Metálica

Una placa cuadrada de aluminio tiene 2 m de lado a 25°C. ¿Cuál será su área a 75°C?

**Solución**:

1. Datos:
   - A_1 = 4 m²
   - \Delta T = 50°C
   - \alpha = 23 \times 10^{-6}/°C
2. Usando expansión superficial:
   - \Delta A = 2\alpha A_1 \Delta T
   - \Delta A = 2(23 \times 10^{-6})(4)(50)
   - $\Delta A = 0.0092$ m²
   - $A_2 = 4.0092$ m²

> 💡 **Nota**: En la práctica, la expansión térmica debe considerarse en:
>
> - Diseño de estructuras grandes
> - Instalación de tuberías
> - Calibración de instrumentos de precisión
