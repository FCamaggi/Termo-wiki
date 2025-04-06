# Termodinámica - FIS1523

_Versión del 1 de abril de 2025_

## Índice del Curso

- [Termodinámica - FIS1523](#termodinámica---fis1523)
  - [Índice del Curso](#índice-del-curso)
  - [Capítulo 1: Introducción y Ley Cero de la Termodinámica](#capítulo-1-introducción-y-ley-cero-de-la-termodinámica)
    - [1.1 Definiciones Fundamentales](#11-definiciones-fundamentales)
      - [Sistema y su Entorno](#sistema-y-su-entorno)
      - [Propiedades del Sistema](#propiedades-del-sistema)
    - [1.2 Presión y Temperatura](#12-presión-y-temperatura)
      - [Presión](#presión)
      - [Temperatura y Ley Cero](#temperatura-y-ley-cero)
    - [1.3 Expansión Térmica](#13-expansión-térmica)
  - [Capítulo 2: Energía y Calor](#capítulo-2-energía-y-calor)
    - [2.1 Formas de Energía](#21-formas-de-energía)
      - [Energía Total](#energía-total)
    - [2.2 Transferencia de Energía](#22-transferencia-de-energía)
      - [Mecanismos de Transferencia de Calor](#mecanismos-de-transferencia-de-calor)
    - [2.3 Primera Ley de la Termodinámica](#23-primera-ley-de-la-termodinámica)
      - [Balance de Energía](#balance-de-energía)
      - [Procesos Termodinámicos](#procesos-termodinámicos)
  - [Referencias y Recursos Adicionales](#referencias-y-recursos-adicionales)

> 💡 **Guía de Estudio**: Este documento sirve como resumen principal del curso. Para detalles específicos, consultar los archivos individuales en la carpeta `resumenes/libro/`.

## Capítulo 1: Introducción y Ley Cero de la Termodinámica

### 1.1 Definiciones Fundamentales

#### Sistema y su Entorno

```
    Universo Termodinámico
┌─────────────────────────────┐
│     Sistema    │            │
│   ┌────────┐   │            │
│   │        │   │   Entorno  │
│   │        │   │            │
│   └────────┘   │            │
│     Frontera   │            │
└─────────────────────────────┘
```

| Tipo de Sistema | Masa | Energía | Ejemplo        |
| --------------- | ---- | ------- | -------------- |
| Cerrado         | ❌   | ✅      | Pistón con gas |
| Aislado         | ❌   | ❌      | Termo ideal    |
| Abierto         | ✅   | ✅      | Turbina        |

[→ Ver más en conceptos_basicos.md](conceptos_basicos.md)

#### Propiedades del Sistema

| Tipo        | Característica      | Ejemplos         |
| ----------- | ------------------- | ---------------- |
| Intensivas  | No dependen de masa | $T$, $P$, $\rho$ |
| Extensivas  | Dependen de masa    | $m$, $V$, $E$    |
| Específicas | Por unidad de masa  | $v$, $e$         |

[→ Ver más en propiedades.md](propiedades.md)

### 1.2 Presión y Temperatura

#### Presión

```
Presión Atmosférica ($P_0$)
      ↓
      ├─────────────┐
      │    Fluido   │
      │             │ h
      │             │
      └─────────────┘
    $P = P_0 + \rho gh$
```

- Definición: $P = \frac{F}{A}$
- Unidades: 1 Pa = 1 N/m²
- Tipos de presión:
  - Absoluta
  - Manométrica
  - Hidrostática

[→ Ver más en presion_temperatura.md](presion_temperatura.md)

#### Temperatura y Ley Cero

```
    Objeto A ←→ Termómetro ←→ Objeto B
    ($T_1 = T_2$)     ($T_2$)        ($T_2 = T_1$)
```

- Escalas:
  - Celsius (°C)
  - Kelvin (K)
  - $T(K) = T(°C) + 273.15$

### 1.3 Expansión Térmica

| Tipo        | Fórmula                          | Coeficiente |
| ----------- | -------------------------------- | ----------- |
| Lineal      | $\Delta L = \alpha L_1\Delta T$  | $\alpha$    |
| Superficial | $\Delta A = 2\alpha A_1\Delta T$ | $2\alpha$   |
| Volumétrica | $\Delta V = 3\alpha V_1\Delta T$ | $3\alpha$   |

[→ Ver más en expansion_termica.md](expansion_termica.md)

## Capítulo 2: Energía y Calor

### 2.1 Formas de Energía

```
                Energía Total
                     │
         ┌────────────┴───────────┐
     Mecánica                 Interna
         │                        │
    ┌────┴────┐            ┌──────┴─────┐
 Cinética  Potencial    Térmica   Química
```

#### Energía Total

- $E = \frac{1}{2}mV^2 + mgh + U$
- Energía específica: $e = \frac{E}{m}$

[→ Ver más en energia.md](energia.md)

### 2.2 Transferencia de Energía

#### Mecanismos de Transferencia de Calor

1. **Conducción**

```
$T_1 > T_2$
┌────┐
█ $T_1$ █ → $q = -k\nabla T$
█ $T_2$ █
└────┘
```

2. **Convección**

```
   ↑   ↑   ↑
┌───────────┐
│  Fluido   │
└───────────┘
```

3. **Radiación**

```
   ≈≈≈≈≈≈≈
┌─────────┐
│   $T$     │ → $q = \varepsilon\sigma AT^4$
└─────────┘
```

[→ Ver más en transferencia_calor.md](transferencia_calor.md)

### 2.3 Primera Ley de la Termodinámica

#### Balance de Energía

```
       Q
       ↓
    ┌─────┐
    │  $\Delta E$ │ → W
    └─────┘
```

$\Delta E = Q - W$

#### Procesos Termodinámicos

| Proceso    | Constante | Ejemplo                   |
| ---------- | --------- | ------------------------- |
| Adiabático | $Q = 0$   | Compresión rápida         |
| Isobárico  | $P$       | Calentamiento atmosférico |
| Isocórico  | $V$       | Calentamiento cerrado     |
| Isotérmico | $T$       | Expansión lenta           |

[→ Ver más en primera_ley.md](primera_ley.md)

> ⚠️ **Importante**: Para aprobar el curso, es fundamental entender:
>
> 1. La conexión entre conceptos
> 2. Las aplicaciones prácticas
> 3. La resolución de problemas usando estos principios

## Referencias y Recursos Adicionales

- 📚 Libro de texto principal: "Termodinámica" - Cengel & Boles
- 📝 [Formulario del curso](../formulario/formulario_i1.md)
- 📖 [Resúmenes de ayudantías](../ayudantias/)
