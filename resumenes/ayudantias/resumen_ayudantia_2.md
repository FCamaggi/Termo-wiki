# Resumen Ayudantía 2: Dilatación Térmica y Calor

## Introducción

Esta ayudantía aborda dos conceptos fundamentales: la dilatación térmica de los materiales y los procesos de transferencia de calor, incluyendo cambios de fase. Estos conceptos son esenciales para entender el comportamiento de materiales y sistemas térmicos.

> 💡 **Objetivo de la Ayudantía**: Comprender y aplicar los conceptos de dilatación térmica y transferencia de calor en problemas prácticos de ingeniería.

## 1. Dilatación Térmica

### 1.1 Coeficientes de Dilatación

```
Dilatación en 3 Dimensiones:

1D (Lineal)        2D (Superficial)       3D (Volumétrica)
    ↔                  ↔  ↕                   ↔  ↕  ↗
    L                   A                       V
\alpha = \frac{\Delta L}{L\Delta T}    2\alpha = \frac{\Delta A}{A\Delta T}    3\alpha = \frac{\Delta V}{V\Delta T}
```

| Tipo        | Fórmula                        | Coeficiente     | Ejemplo          |
| ----------- | ------------------------------ | --------------- | ---------------- |
| Lineal      | \Delta L = \alpha L_1\Delta T  | \alpha          | Rieles de tren   |
| Superficial | \Delta A = 2\alpha A_1\Delta T | 2\alpha         | Placas metálicas |
| Volumétrica | \Delta V = 3\alpha V_1\Delta T | 3\alpha = \beta | Tanques de gas   |

#### Valores Típicos de \alpha (×10⁻⁶/°C)

| Material | \alpha | Aplicación común |
| -------- | ------ | ---------------- |
| Aluminio | 23     | Ventanas         |
| Acero    | 11     | Estructuras      |
| Vidrio   | 9      | Ventanas         |
| Concreto | 12     | Edificios        |

### 1.2 Comportamiento Anómalo del Agua

```
Densidad del Agua vs Temperatura:

$\rho$ (kg/m³)
1000 ┌────╮
     │    │
999  │    └──────
     │    4°C
998  └────────────── T(°C)
     0    4    8    12
```

## 2. Capacidad Calorífica y Calor Latente

### 2.1 Transferencia de Calor

```
Sistema A     →     Sistema B
   T_1         Q        T_2
(caliente)    →      (frío)

Q = tasa × tiempo = \int \dot{Q}dt
```

### 2.2 Capacidad Calorífica

| Concepto             | Símbolo | Fórmula        | Unidades SI |
| -------------------- | ------- | -------------- | ----------- |
| Capacidad calorífica | C       | Q = C\Delta T  | J/K         |
| Calor específico     | c       | Q = mc\Delta T | J/(kg·K)    |

#### Valores de Calor Específico

| Material | c (J/kg·K) | Uso común     |
| -------- | ---------- | ------------- |
| Agua     | 4186       | Refrigeración |
| Aire     | 1005       | HVAC          |
| Aluminio | 900        | Utensilios    |
| Hierro   | 450        | Máquinas      |

### 2.3 Conservación de Energía

```
Sistema A + Sistema B = Sistema aislado
    Q_{cedido} + Q_{absorbido} = 0

    T_1           T_f           T_2
    ├───────────┼───────────┤
    Sistema A    │    Sistema B
    m_1, c_1      │    m_2, c_2
```

### 2.4 Calor Latente

```
Estados de la Materia y Cambios de Fase:

          Sublimación
Sólido ←──────→ Gas
   ↑            ↓
Fusión      Condensación
   ↓            ↑
Líquido ←──────→ Vapor
      Vaporización
```

| Cambio de Fase | Calor Latente | Ejemplo (Agua) |
| -------------- | ------------- | -------------- |
| Fusión         | L_f           | 334 kJ/kg      |
| Vaporización   | L_v           | 2257 kJ/kg     |

## Ejemplos Resueltos

### Ejemplo 1: Dilatación Térmica

Un puente de acero mide 100 m a 20°C. ¿Cuánto se expandirá si la temperatura sube a 40°C?

**Solución**:

1. Datos:
   - L_1 = 100 m
   - \Delta T = 40°C - 20°C = 20°C
   - \alpha = 11\times10^{-6}/°C
2. Aplicando \Delta L = \alpha L_1\Delta T:
   - \Delta L = (11\times10^{-6})(100)(20)
   - $\Delta L = 0.022$ m = 22 mm

### Ejemplo 2: Mezcla de Agua

Se mezclan 200g de agua a 80°C con 300g de agua a 20°C. ¿Cuál será la temperatura final?

**Solución**:

1. Datos:
   - m_1 = 0.2 kg, T_1 = 80°C
   - m_2 = 0.3 kg, T_2 = 20°C
   - c = 4186 J/kg·K (igual para ambas masas)
2. Por conservación de energía:
   - m_1c(T_1-T_f) = m_2c(T_f-T_2)
   - $0.2(80-T_f) = 0.3(T_f-20)$
   - $T_f = 44°C$

> 💡 **Tips para Problemas**:
>
> - En dilatación térmica, usar las unidades correctas para \alpha
> - En problemas de mezclas, aplicar conservación de energía
> - Para cambios de fase, considerar el calor latente
> - En problemas complejos, dividir en etapas

## Referencias y Material Complementario

- 📚 [Expansión Térmica](../libro/expansion_termica.md)
- 📚 [Transferencia de Calor](../libro/transferencia_calor.md)
- 📝 [Formulario del curso](../formulario/formulario_i1.md)
