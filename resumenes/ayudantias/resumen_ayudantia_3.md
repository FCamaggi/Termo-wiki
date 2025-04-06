# Resumen Ayudantía 3 - Termodinámica

**Curso:** FIS1523 – Termodinámica  
**Profesor:** Iván Muñoz (Secciones 5 y 7)  
**Fecha:** 28-03-2025

## Introducción

Esta ayudantía se centra en los mecanismos de transferencia de calor y el trabajo en sistemas termodinámicos. Estos conceptos son fundamentales para entender cómo la energía se transfiere entre sistemas y cómo realizar cálculos prácticos en ingeniería.

> 💡 **Objetivo de la Ayudantía**: Comprender y aplicar los conceptos de transferencia de calor y trabajo en problemas prácticos de ingeniería térmica.

## 1. Calor y Balance de Energía

### 1.1 Tipos de Transferencia de Calor

#### 1.1.1 Conducción

```
T_1 > T_2
┌────────────┐    Flujo de calor
█  T_1     █ ───────────→
█            █    q = -k\nabla T
█     T_2  █
└────────────┘
```

**Fórmula**: \dot{q} = kA\frac{\Delta T}{\Delta x}

| Material | k [W/m·K] | Aplicación típica |
| -------- | --------- | ----------------- |
| Cobre    | 385       | Intercambiadores  |
| Aluminio | 205       | Disipadores       |
| Acero    | 50        | Estructuras       |
| Madera   | 0.12-0.04 | Aislamiento       |
| Aire     | 0.026     | Aislante natural  |

#### 1.1.2 Convección

```
    Fluido en movimiento
         ↑   ↑   ↑
    ┌───────────────┐
    │   Superficie                       │
    └───────────────┘
    T_s > T_{fluido}
```

**Fórmula**: \dot{q} = hA(T_s - T_f)

| Tipo de Convección | h [W/m²·K] | Ejemplo            |
| ------------------ | ---------- | ------------------ |
| Natural en aire    | 2-25       | Radiador doméstico |
| Forzada en aire    | 25-250     | Ventilador         |
| Natural en agua    | 50-1000    | Calentador solar   |
| Forzada en agua    | 100-20,000 | Intercambiador     |

#### 1.1.3 Radiación

```
    Emisión de ondas EM
         ≈≈≈≈≈≈≈
    ┌───────────────┐
    │   Superficie  │
    │   caliente    │ T
    └───────────────┘
```

**Fórmula**: \dot{q} = \varepsilon\sigma AT^4

| Material        | Emisividad (\varepsilon) | Uso común          |
| --------------- | ------------------------ | ------------------ |
| Cuerpo negro    | 1.0                      | Referencia         |
| Pintura negra   | 0.98                     | Colectores solares |
| Aluminio pulido | 0.04                     | Aislamiento        |
| Concreto        | 0.94                     | Construcción       |

### 1.2 Trabajo en Fluidos

#### 1.2.1 Trabajo de Expansión/Compresión

```
    Presión P
    ┌──────────┐
    │    Gas      │ → Expansión
    │             │    W = \int P\,dV
    └──────────┘
        Volumen V
```

| Proceso    | Trabajo                     | Características |
| ---------- | --------------------------- | --------------- |
| Isobárico  | W = P\Delta V               | P constante     |
| Isotérmico | W = nRT\ln(\frac{V_2}{V_1}) | T constante     |
| Adiabático | W = C_v(T_1-T_2)            | Q = 0           |

#### 1.2.2 Trabajo del Resorte

```
    F = kx
    ←→
    ├─\/\/\/─┤
    x_1            x_2
```

**Fórmula**: W = \frac{1}{2}k(x_2^2 - x_1^2)

## Ejemplos Resueltos

### Ejemplo 1: Transferencia de Calor por Conducción

Calcular el flujo de calor a través de una pared de concreto de 20 cm de espesor y área 2 m², si la diferencia de temperatura es 15°C. (k = 0.8 W/m·K)

**Solución**:

1. Datos:
   - \Delta x = 0.2 m
   - A = 2 m²
   - \Delta T = 15°C
   - k = 0.8 W/m·K
2. Aplicando \dot{q} = kA\frac{\Delta T}{\Delta x}:
   - \dot{q} = (0.8)(2)(15/0.2)
   - $\dot{q} = 120$ W

### Ejemplo 2: Trabajo en Gas Ideal

Un gas ideal se expande isotérmicamente de 2 L a 5 L a 300 K, con n = 0.5 moles. Calcular el trabajo realizado.

**Solución**:

1. Datos:
   - T = 300 K
   - V_1 = 0.002 m³
   - V_2 = 0.005 m³
   - n = 0.5 mol
   - R = 8.314 J/mol·K
2. Aplicando W = nRT\ln(\frac{V_2}{V_1}):
   - W = (0.5)(8.314)(300)\ln(0.005/0.002)
   - $W = 1145.7$ J

> 💡 **Tips para Problemas**:
>
> - En conducción, verificar unidades de k
> - En convección, elegir h según el tipo de flujo
> - En radiación, usar temperaturas en Kelvin
> - Para trabajo, mantener consistencia en signos

## Referencias y Material Complementario

- 📚 [Transferencia de Calor](../libro/transferencia_calor.md)
- 📚 [Primera Ley](../libro/primera_ley.md)
- 📝 [Formulario del curso](../formulario/formulario_i1.md)

## Ejercicios Propuestos

1. Calcular la pérdida de calor a través de una ventana.
2. Determinar el trabajo realizado en un ciclo termodinámico simple.
3. Analizar la transferencia de calor en un intercambiador.
