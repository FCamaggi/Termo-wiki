# Propiedades Termodinámicas

_Parte del curso FIS1523 - Termodinámica_

## Introducción

Las propiedades termodinámicas son las características medibles de un sistema que nos permiten describir su estado. Entender estas propiedades es fundamental para el análisis termodinámico.

## Clasificación de Propiedades

| Tipo de Propiedad | Depende de la Masa      | Ejemplos                               | Símbolo Común |
| ----------------- | ----------------------- | -------------------------------------- | ------------- |
| Intensiva         | No                      | Temperatura, Presión, Densidad         | T, P, ρ       |
| Extensiva         | Sí                      | Masa, Volumen, Energía                 | m, V, E       |
| Específica        | No (por unidad de masa) | Volumen específico, Energía específica | v, e          |

### Propiedades Intensivas

```
    Sistema A          Sistema B
┌──────────────┐    ┌──────────────┐
│   T = 25°C   │    │   T = 25°C   │
│   P = 1 atm  │    │   P = 1 atm  │
└──────────────┘    └──────────────┘
    1 kg             2 kg
    (Mismas propiedades intensivas)
```

Características:

- No dependen de la cantidad de materia
- Son uniformes en equilibrio
- No son aditivas

Ejemplos principales:

- Temperatura (T)
- Presión (P)
- Densidad (ρ)
- Concentración

### Propiedades Extensivas

```
    Sistema Total
┌────────────────────────┐
│     Masa = 3 kg       │
│    Volumen = 3 m³     │
├──────────┬────────────┤
│ M = 1 kg │  M = 2 kg  │
│ V = 1 m³ │  V = 2 m³  │
└──────────┴────────────┘
   Subsistemas sumables
```

Características:

- Proporcionales a la masa del sistema
- Son aditivas para subsistemas
- Se pueden sumar o dividir

Ejemplos principales:

- Masa (m)
- Volumen (V)
- Energía (E)
- Entropía (S)

### Propiedades Específicas

Son propiedades extensivas divididas por la masa del sistema.

#### Fórmulas Importantes

| Propiedad Específica | Fórmula | Unidades SI |
| -------------------- | ------- | ----------- |
| Volumen específico   | v = V/m | m³/kg       |
| Energía específica   | e = E/m | J/kg        |
| Entalpía específica  | h = H/m | J/kg        |

> 💡 **Nota**: Las propiedades específicas son muy útiles porque permiten comparar sistemas de diferentes tamaños en una base común.

## Relaciones entre Propiedades

```
Propiedad Extensiva   Propiedad Específica   Propiedad Intensiva
     Volumen (V)    =    vol. específico    ×     masa
       [m³]        =        [m³/kg]         ×     [kg]
```

## Aplicaciones Prácticas

1. **Densidad vs Masa**:

   - Densidad (ρ): Propiedad intensiva [kg/m³]
   - Masa (m): Propiedad extensiva [kg]
   - Relación: m = \rho × V

2. **Energía vs Energía Específica**:
   - Energía total (E): Propiedad extensiva [J]
   - Energía específica (e): Propiedad específica [J/kg]
   - Relación: E = e × m

> ⚠️ **Importante**: Al resolver problemas, asegúrate de distinguir entre propiedades extensivas e intensivas, ya que se comportan de manera diferente al combinar o dividir sistemas.
