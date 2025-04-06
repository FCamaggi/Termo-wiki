# Primera Ley de la Termodinámica

_Parte del curso FIS1523 - Termodinámica_

## Introducción

La Primera Ley de la Termodinámica es el principio de conservación de la energía aplicado a sistemas termodinámicos. Establece que la energía no se crea ni se destruye, solo se transforma.

```
    Sistema
┌────────────────┐
│                │
│  \Delta E = Q - W   │
│                │
└────────────────┘
   Q: Calor
   W: Trabajo
```

## Balance de Energía

### Para Sistema Cerrado

**Fórmula fundamental**: \Delta E = Q - W

```
       Q (calor)
          ↓
    ┌──────────┐
    │          │
    │ Sistema  │ → W (trabajo)
    │          │
    └──────────┘
```

    \Delta E = cambio de
    energía interna

Donde:

- \Delta E: Cambio en la energía del sistema [J]
- Q: Calor neto transferido al sistema [J]
- W: Trabajo neto realizado por el sistema [J]

### Convención de Signos

| Proceso | Signo | Significado              |
| ------- | ----- | ------------------------ |
| Q > 0   | +     | Sistema recibe calor     |
| Q < 0   | -     | Sistema cede calor       |
| W > 0   | +     | Sistema realiza trabajo  |
| W < 0   | -     | Trabajo sobre el sistema |

## Procesos Termodinámicos Básicos

### Tabla Comparativa

| Proceso    | Variable Constante | Trabajo                     | Calor            | Diagrama P-V     |
| ---------- | ------------------ | --------------------------- | ---------------- | ---------------- |
| Isobárico  | P                  | W = P\Delta V               | Q = mc_p\Delta T | Línea horizontal |
| Isocórico  | V                  | W = 0                       | Q = mc_v\Delta T | Línea vertical   |
| Isotérmico | T                  | W = nRT\ln(\frac{V_2}{V_1}) | Q = W            | Hipérbola        |
| Adiabático | Q = 0              | W = c_v(T_1-T_2)            | Q = 0            | PV^\gamma = cte  |

### 1. Proceso Isobárico (P = cte)

```
P
│
│───────────
│
│
└──────────── V
```

- **Trabajo**: W = P(V_2-V_1)
- **Ejemplo**: Pistón con pesas

### 2. Proceso Isocórico (V = cte)

```
P
│    │
│    │
│    │
│    │
└──────────── V
```

- **Trabajo**: W = 0
- **Ejemplo**: Calentamiento en recipiente rígido

### 3. Proceso Isotérmico (T = cte)

```
P
│
│   ─────
│
│
└──────────── V
```

- **Trabajo**: W = nRT\ln(\frac{V_2}{V_1})
- **Ejemplo**: Compresión lenta con disipación de calor

### 4. Proceso Adiabático (Q = 0)

```
P
│
│   ──┘
│
│
└──────────── V
$PV^\gamma = \text{constante}$
```

- **Trabajo**: W = c_v(T_1-T_2)
- **Ejemplo**: Compresión rápida en cilindro aislado

## Aplicaciones Prácticas

### 1. Motor de Combustión Interna

```
    ┌────────┐
    │  ↑↓    │
    │ Pistón │    Ciclo:
    │        │    1. Admisión (Isobárico)
    └────────┘    2. Compresión (Adiabático)
                  3. Combustión (Isocórico)
                  4. Expansión (Adiabático)
```

### 2. Refrigerador

```
    Calor cedido (Q_H)
          ↑
    ┌──────────┐
    │ Trabajo  │
    │ entrante │
    └──────────┘
          ↓
    Calor absorbido (Q_L)
```

## Problemas Resueltos

### Ejemplo 1: Proceso Isobárico

Un gas ideal se expande a presión constante de 2 atm, desde 2 L hasta 5 L. Calcular el trabajo realizado por el gas.

**Solución**:

1. Datos:
   - P = 2 atm = 202,650 Pa
   - V_1 = 2 L = 0.002 m³
   - V_2 = 5 L = 0.005 m³
2. Aplicando W = P(V_2-V_1):
   - $W = 202,650(0.005 - 0.002)$
   - $W = 607.95$ J

### Ejemplo 2: Proceso Adiabático

Un gas ideal se comprime adiabáticamente, realizándose un trabajo de 200 J sobre el gas. ¿Cuál es el cambio en su energía interna?

**Solución**:

1. Proceso adiabático → Q = 0
2. Por la Primera Ley: \Delta E = Q - W
3. $\Delta E = 0 - (-200) = 200$ J
4. La energía interna aumenta en 200 J

> 💡 **Nota importante**: En procesos cíclicos, el cambio neto de energía interna es cero (\Delta E = 0).

## Consideraciones Prácticas

1. **En Procesos Reales**:

   - Siempre hay alguna transferencia de calor
   - Existen irreversibilidades
   - Hay pérdidas por fricción

2. **Eficiencia Energética**:

   - Minimizar pérdidas de calor
   - Optimizar trabajo útil
   - Reducir irreversibilidades

3. **Aplicaciones en Ingeniería**:
   - Diseño de máquinas térmicas
   - Optimización de procesos industriales
   - Sistemas de refrigeración
