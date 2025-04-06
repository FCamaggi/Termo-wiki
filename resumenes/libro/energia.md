# Energía en Termodinámica

_Parte del curso FIS1523 - Termodinámica_

## Introducción

La energía es la capacidad de realizar trabajo o transferir calor. En termodinámica, es fundamental entender las diferentes formas de energía y cómo se transforman entre sí.

## Formas de Energía

```
                         ENERGÍA TOTAL
                              │
            ┌─────────────────┼────────────────┐
      Energía Mecánica       │          Energía Interna
            │                │                 │
     ┌──────┴──────┐   Otras Formas    ┌──────┴──────┐
 Energía     Energía    (Nuclear,    Energía     Energía
 Cinética   Potencial  Química,etc)  Térmica    Química
```

### 1. Energía Total del Sistema

**Fórmula**: E = E_c + E_p + U

```
E = \frac{1}{2}mV^2 + mgh + U
└─┬─┘   └─┬─┘  └┬┘
  │      │     │
Energía  │   Energía
Cinética │   Interna
     Energía
    Potencial
```

Donde:

- E: Energía total [J]
- m: Masa [kg]
- V: Velocidad [m/s]
- g: Aceleración gravitacional [9.81 m/s²]
- h: Altura [m]
- U: Energía interna [J]

### 2. Energía Específica

**Fórmula**: e = \frac{E}{m} = \frac{1}{2}V^2 + gh + u

| Término        | Significado                  | Unidades SI |
| -------------- | ---------------------------- | ----------- |
| e              | Energía específica total     | J/kg        |
| \frac{1}{2}V^2 | Energía cinética específica  | J/kg        |
| gh             | Energía potencial específica | J/kg        |
| u              | Energía interna específica   | J/kg        |

## Transformaciones de Energía

```
          Calor (Q)
            ↓
Gas caliente → Turbina → Generador → Electricidad
      │            │          │            │
    Energía     Energía    Energía      Energía
    Térmica    Mecánica   Mecánica    Eléctrica
```

### Principio de Conservación

```
Estado 1        Proceso        Estado 2
┌─────┐                      ┌─────┐
│E_1│       ↗ Q ↘         │E_2│
│     │ → → → → → → → → →   │     │
│     │       ↘ W ↗         │     │
└─────┘                      └─────┘
E_1 + Q - W = E_2
```

## Unidades y Conversiones

| Energía        | Unidad SI | Equivalencias     |
| -------------- | --------- | ----------------- |
| Joule (J)      | kg·m²/s²  | 1 J = 1 N·m       |
| Kilojoule (kJ) | 1000 J    | 1 kJ = 0.239 kcal |
| Caloría (cal)  | 4.186 J   | 1 kcal = 4186 J   |
| kWh            | 3.6×10⁶ J | 1 kWh = 3600 kJ   |

## Ejemplos Prácticos

### 1. Central Térmica

```
Combustible → Caldera → Turbina → Generador
   (U_1)        (Q)       (W)       (E_2)
```

- Energía química → Térmica → Mecánica → Eléctrica

### 2. Caída de Agua

```
Represa
   │   h = 100m
   ▼
Turbina   $E_p \rightarrow E_c \rightarrow W$
```

- E_p = mgh se convierte en trabajo útil

## Problemas Resueltos

### Ejemplo 1: Energía Total de un Gas

Un gas de 2 kg se mueve a 10 m/s a una altura de 5 m. Si su energía interna es 1000 J, calcular su energía total.

**Solución**:

1. Datos:
   - m = 2 kg
   - V = 10 m/s
   - h = 5 m
   - U = 1000 J
2. Aplicando E = \frac{1}{2}mV^2 + mgh + U:
   - E_c = \frac{1}{2}(2)(10)^2 = 100 J
   - E_p = (2)(9.81)(5) = 98.1 J
   - E = 100 + 98.1 + 1000 = 1198.1 J

### Ejemplo 2: Energía Específica

Calcular la energía específica total para el gas del ejemplo anterior.

**Solución**:

1. e = \frac{E}{m} = \frac{1198.1}{2} = 599.05 J/kg
2. Verificación por componentes:
   - e_c = \frac{1}{2}V^2 = \frac{1}{2}(10)^2 = 50 J/kg
   - e_p = gh = (9.81)(5) = 49.05 J/kg
   - u = \frac{U}{m} = \frac{1000}{2} = 500 J/kg
   - e = 50 + 49.05 + 500 = 599.05 J/kg

> 💡 **Nota importante**: En procesos termodinámicos reales, la energía siempre se conserva, pero puede transformarse en formas menos útiles (como calor disipado).

## Aplicaciones en Ingeniería

1. **Diseño de Máquinas Térmicas**

   - Optimización de eficiencia energética
   - Minimización de pérdidas de energía

2. **Análisis de Procesos Industriales**

   - Balance energético
   - Auditorías energéticas

3. **Sistemas de Energía Renovable**
   - Conversión de energía solar
   - Aprovechamiento de energía eólica
