# Presión y Temperatura

_Parte del curso FIS1523 - Termodinámica_

## Introducción

La presión y la temperatura son dos de las propiedades termodinámicas más fundamentales. Son variables intensivas que nos permiten describir el estado de un sistema y son esenciales para entender los procesos termodinámicos.

## Presión

### Definición y Unidades

- **Definición**: Fuerza por unidad de área
  ```
  P = F/A
  ```
- **Unidades en el SI**: Pascal (Pa) = N/m²

| Unidad          | Equivalencia en Pa | Uso común           |
| --------------- | ------------------ | ------------------- |
| Pascal (Pa)     | 1 Pa               | Unidad SI           |
| Bar (bar)       | 100,000 Pa         | Presión atmosférica |
| Atmósfera (atm) | 101,325 Pa         | Presión atmosférica |
| mmHg            | 133.322 Pa         | Presión sanguínea   |

### Tipos de Presión

```
Presión atmosférica (P_0)
      ↓
      ├─────────────┐
      │    Fluido   │
      │             │ h
      │             │
      └─────────────┘
    P = P_0 + \rho gh
```

1. **Presión absoluta**: Presión total, medida desde el vacío perfecto
2. **Presión manométrica**: Presión relativa a la atmosférica
   - P*{man} = P*{abs} - P\_{atm}
3. **Presión hidrostática**: P = P_0 + \rho gh
   - \rho: densidad del fluido
   - g: aceleración gravitacional
   - h: profundidad

### Medición de Presión

```
┌──────────┐
│          │ ← Vacío
│   ┌──┐   │
│   │Hg│   │    h = Presión atmosférica
│   └──┘   │        (en mmHg)
└──────────┘
  Barómetro
```

## Temperatura y Ley Cero

### Ley Cero de la Termodinámica

```
    Objeto A  ←→  Termómetro  ←→  Objeto B
    (T_1 = T_2)    (T_2)      (T_2 = T_1)

    Si A ↔ Termómetro y B ↔ Termómetro
    Entonces A ↔ B (están en equilibrio)
```

- Es la base para la medición de temperatura
- Define el equilibrio térmico
- Permite el uso de termómetros

### Escalas de Temperatura

| Escala          | Punto de Fusión H₂O | Punto de Ebullición H₂O | Fórmula de Conversión              |
| --------------- | ------------------- | ----------------------- | ---------------------------------- |
| Celsius (°C)    | 0°C                 | 100°C                   | T(K) = T(°C) + 273.15              |
| Kelvin (K)      | 273.15 K            | 373.15 K                | T(°C) = T(K) - 273.15              |
| Fahrenheit (°F) | 32°F                | 212°F                   | T(°C) = (T(°F) - 32) × \frac{5}{9} |

```
Comparación de Escalas:

K    °C    °F
373 ─ 100 ─ 212   Ebullición del agua
┊    ┊    ┊
293 ─ 20 ─ 68    Temperatura ambiente
273 ─ 0 ─ 32     Fusión del agua
┊    ┊    ┊
0 ─ -273 ─ -460   Cero absoluto
```

### Características Importantes

1. **Cero Absoluto**

   - 0 K = -273.15°C
   - Temperatura teórica más baja posible
   - No existe movimiento molecular

2. **Puntos de Referencia**
   - Punto triple del agua: 273.16 K (0.01°C)
   - Temperatura ambiente estándar: 298 K (25°C)

> 💡 **Nota**: En cálculos termodinámicos, siempre usar Kelvin (K) como unidad de temperatura.

## Ejemplos Prácticos

1. **Presión en un Neumático**

   - Presión manométrica: 32 psi
   - Presión absoluta = 32 psi + 14.7 psi (presión atmosférica)

2. **Presión Sanguínea**

   - Sistólica: 120 mmHg
   - Diastólica: 80 mmHg
   - Notación: 120/80 mmHg

3. **Conversión de Temperatura**
   - Temperatura corporal: 37°C
   - En Kelvin: 37 + 273.15 = 310.15 K
   - En Fahrenheit: (37 × \frac{9}{5}) + 32 = 98.6°F
