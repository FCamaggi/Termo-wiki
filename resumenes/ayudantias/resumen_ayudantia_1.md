# Resumen Ayudantía 1 - Termodinámica

## Introducción

Esta ayudantía cubre los conceptos fundamentales de la termodinámica, incluyendo sistemas termodinámicos, estados y procesos, temperatura, y presión. Estos conceptos son la base para entender temas más avanzados del curso.

> 💡 **Objetivo de la Ayudantía**: Reforzar los conceptos básicos vistos en clases y aplicarlos en la resolución de problemas prácticos.

## 1. Conceptos Fundamentales

### 1.1 Definiciones Básicas

```
    Sistema Termodinámico
┌─────────────────────────┐
│    ┌─────────┐         │
│    │ Frontera│         │
│      Sistema           │
│                       │
└─────────────────────────┘
        Entorno
```

| Concepto | Definición                  | Ejemplo            |
| -------- | --------------------------- | ------------------ |
| Sistema  | Región o materia a estudiar | Gas en un pistón   |
| Entorno  | Todo lo exterior al sistema | Aire ambiente      |
| Frontera | Límite sistema-entorno      | Paredes del pistón |

[→ Ver más en conceptos_basicos.md](../libro/conceptos_basicos.md)

### 1.2 Estados y Procesos

```
Estado 1         Proceso        Estado 2
┌─────┐                      ┌─────┐
│ P_1 │     →→→→→→→→→      │ P_2 │
│ V_1 │                     │ V_2 │
│ T_1 │                     │ T_2 │
└─────┘                      └─────┘
```

| Proceso    | Variable Constante | Ejemplo Práctico                   |
| ---------- | ------------------ | ---------------------------------- |
| Isotérmico | T                  | Compresión lenta                   |
| Isobárico  | P                  | Calentamiento al aire libre        |
| Isocórico  | V                  | Calentamiento en recipiente rígido |
| Adiabático | Q = 0              | Compresión rápida                  |

### 1.3 Tipos de Sistemas

```
Clasificación por Intercambios:

    ┌─ Masa
    │   ┌─ Energía
    │   │
Aislado    ╳   ╳   ╳
Cerrado    ╳   ✓   ✓
Abierto    ✓   ✓   ✓
           M   Q   W
```

| Tipo    | Ejemplo        | Consideraciones                   |
| ------- | -------------- | --------------------------------- |
| Aislado | Termo ideal    | No hay interacción con el entorno |
| Cerrado | Pistón sellado | Solo intercambia energía          |
| Abierto | Turbina        | Permite todos los intercambios    |

### 1.4 Leyes de la Termodinámica

```
Ley 0: Transitividad del Equilibrio Térmico

A ←→ B
 ↕   ↕    Si A=C y B=C, entonces A=B
  C
```

| Ley | Enunciado Simple                 | Implicación Práctica           |
| --- | -------------------------------- | ------------------------------ |
| 0   | Equilibrio térmico es transitivo | Base para medir temperatura    |
| 1   | Conservación de la energía       | \Delta E = Q - W               |
| 2   | La entropía siempre aumenta      | Dirección natural de procesos  |
| 3   | Entropía nula a 0K               | Límite teórico de enfriamiento |

## 2. Temperatura y Ley Cero

### 2.1 Conceptos de Temperatura

```
Nivel Microscópico:
  o   o    o
    o    o     Energía Cinética
o    o  o    o   Molecular
  o   o    o
```

### 2.2 Escalas de Temperatura

```
K     °C     °F
373 ─ 100 ─ 212    Ebullición del agua
┊     ┊     ┊
293 ─  20 ─  68    Temperatura ambiente
273 ─   0 ─  32    Fusión del agua
┊     ┊     ┊
0   ─ -273 ─ -460  Cero absoluto
```

## 3. Presión

### 3.1 Definición y Unidades

```
Fuerza (F)
   ↓   ↓   ↓
┌───────────┐
│    A      │  P = \frac{F}{A}
└───────────┘
    Área
```

| Unidad      | Valor en Pa | Uso común         |
| ----------- | ----------- | ----------------- |
| Pascal (Pa) | 1 Pa        | Unidad SI         |
| mmHg        | 133.3 Pa    | Presión sanguínea |
| bar         | 10^5 Pa     | Meteorología      |
| atm         | 101325 Pa   | Referencia        |

### 3.2 Presión en Fluidos

```
P_0 (atm)
   ↓
   ├─────────┐
   │ Fluido  │
   │    \rho    │ h
   │         │
   └─────────┘
P = P_0 + \rho gh
```

## Ejemplos Resueltos

### Ejemplo 1: Presión Manométrica

Un tanque contiene agua (\rho = 1000 kg/m³) hasta una altura de 2 m. Calcular la presión en el fondo.

**Solución**:

1. Datos:
   - \rho = 1000 kg/m³
   - h = 2 m
   - g = 9.81 m/s²
2. Usando P = \rho gh:
   - P = (1000)(9.81)(2)
   - $P = 19620$ Pa ≈ 0.196 bar

### Ejemplo 2: Conversión de Temperaturas

Convertir 98.6°F (temperatura corporal) a °C y K.

**Solución**:

1. De °F a °C:
   - T_C = \frac{5}{9}(98.6 - 32)
   - T_C = 37°C
2. De °C a K:
   - T_K = 37 + 273.15
   - T_K = 310.15 K

> ⚠️ **Tips para Problemas**:
>
> - Siempre verificar unidades
> - Dibujar diagramas cuando sea posible
> - En problemas de presión, identificar todos los puntos relevantes
> - En temperatura, recordar usar Kelvin para cálculos termodinámicos

## Referencias

- 📚 Cengel & Boles, "Termodinámica", Cap. 1-2
- 📝 [Apuntes de clase](../libro/termodinamica.md)
- 🔗 [Formulario del curso](../formulario/formulario_i1.md)
