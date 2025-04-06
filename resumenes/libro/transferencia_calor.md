# Transferencia de Calor

_Parte del curso FIS1523 - Termodinámica_

## Introducción

La transferencia de calor es el proceso de propagación de energía térmica entre diferentes cuerpos o zonas de un mismo cuerpo que se encuentran a distintas temperaturas. Este proceso es fundamental en muchas aplicaciones de ingeniería.

## Conceptos Básicos del Calor

### Definición y Unidades

- **Calor**: Energía en tránsito debido a diferencias de temperatura
- **Símbolo**: Q
- **Unidades**:

| Unidad        | Equivalencia    | Uso común         |
| ------------- | --------------- | ----------------- |
| Joule (J)     | Unidad SI       | Cálculos técnicos |
| Caloría (cal) | 1 cal = 4.186 J | Nutrición         |
| BTU           | 1 BTU = 1055 J  | Sistemas HVAC     |

### Tasa de Transferencia de Calor

**Fórmula**: \dot{Q} = \frac{dQ}{dt} [W = J/s]

## Mecanismos de Transferencia de Calor

### 1. Conducción

```
    T_1 > T_2
┌────────┐    Flujo de calor
█ T_1     █ ───────────→
█        █    q = -k\nabla T
█     T_2 █
└────────┘
  Material
  conductor
```

**Fórmula**: q = -k\nabla T

- Para una dimensión: q = -kA\frac{dT}{dx}
- Para pared plana: q = kA\frac{T_1-T_2}{L}

Donde:

- k: conductividad térmica [W/m·K]
- A: área transversal [m²]
- \frac{dT}{dx}: gradiente de temperatura [K/m]

#### Conductividades Térmicas Típicas

| Material | k [W/m·K] | Aplicación                |
| -------- | --------- | ------------------------- |
| Cobre    | 385       | Intercambiadores de calor |
| Aluminio | 205       | Disipadores               |
| Acero    | 50        | Construcción              |
| Agua     | 0.6       | Refrigeración             |
| Aire     | 0.026     | Aislamiento               |

### 2. Convección

```
    Fluido caliente
         ↑   ↑   ↑
    ┌───────────────┐
    │   Superficie  │
    └───────────────┘
      Temperatura T
```

**Fórmula**: q = hA(T*s - T*\infty)

Donde:

- h: coeficiente de convección [W/m²·K]
- A: área superficial [m²]
- T_s: temperatura de la superficie
- T\_\infty: temperatura del fluido lejos de la superficie

#### Coeficientes de Convección Típicos

| Proceso                    | h [W/m²·K]    | Ejemplo                 |
| -------------------------- | ------------- | ----------------------- |
| Convección natural en aire | 2-25          | Radiador doméstico      |
| Convección forzada en aire | 25-250        | Ventilador              |
| Convección en agua         | 100-20,000    | Intercambiador de calor |
| Ebullición                 | 2,500-100,000 | Olla con agua           |

### 3. Radiación

```
    Emisión de ondas EM
         ↑   ↑   ↑
    ┌───────────────┐
    │   Superficie  │
    │   caliente    │
    └───────────────┘
     Temperatura T
```

**Fórmula**: q = \varepsilon\sigma A(T^4 - T\_\infty^4)

Donde:

- \varepsilon: emisividad (0 \leq \varepsilon \leq 1)
- \sigma: constante de Stefan-Boltzmann (5.67\times10^{-8} W/m²·K⁴)
- A: área superficial [m²]
- T: temperatura absoluta [K]

#### Emisividades Típicas

| Material        | Emisividad | Aplicación          |
| --------------- | ---------- | ------------------- |
| Cuerpo negro    | 1.0        | Referencia teórica  |
| Pintura negra   | 0.98       | Colectores solares  |
| Aluminio pulido | 0.04       | Aislamiento térmico |
| Piel humana     | 0.98       | Termografía médica  |

## Casos Prácticos

### 1. Aislamiento de Edificios

```
  Interior     Pared     Exterior
    T_1    ┌──────────┐    T_2
    20°C  │  Aislante│    0°C
     ──→  │          │  ───→
          └──────────┘
```

### 2. Enfriamiento de CPU

```
    CPU     Disipador   Ventilador
   ┌─┐ →    ╔════╗   →    ↑
   └─┘      ║||||║        │
Conducción  ╚════╝    Convección
           Radiación
```

## Problemas Resueltos

### Ejemplo 1: Conducción a través de una Pared

Una pared de concreto de 20 cm de espesor y área de 2 m² tiene temperaturas superficiales de 20°C y 5°C. Calcular el flujo de calor si k = 0.8 W/m·K.

**Solución**:

1. Datos:
   - L = 0.2 m
   - A = 2 m²
   - \Delta T = 15°C
   - k = 0.8 W/m·K
2. Aplicando q = kA\frac{T_1-T_2}{L}:
   - $q = (0.8)(2)(15)/0.2$
   - $q = 120$ W

### Ejemplo 2: Pérdida de Calor por Convección

Un radiador a 60°C tiene un área de 0.5 m² y está en una habitación a 20°C. Si h = 10 W/m²·K, calcular la pérdida de calor.

**Solución**:

1. Datos:
   - A = 0.5 m²
   - \Delta T = 40°C
   - h = 10 W/m²·K
2. Aplicando q = hA(T*s - T*\infty):
   - $q = (10)(0.5)(40)$
   - $q = 200$ W

> 💡 **Nota importante**: En la práctica, los tres mecanismos de transferencia de calor suelen ocurrir simultáneamente, aunque uno puede predominar según las condiciones.

## Aplicaciones en Ingeniería

1. **Diseño de Intercambiadores de Calor**

   - Optimización de superficies
   - Selección de materiales

2. **Aislamiento Térmico**

   - Edificios
   - Tuberías industriales

3. **Refrigeración de Equipos**
   - Dispositivos electrónicos
   - Maquinaria industrial
