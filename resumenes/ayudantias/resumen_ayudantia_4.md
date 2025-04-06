# Resumen Ayudantía 4 - Repaso I1 FIS1523

## Introducción

Esta ayudantía es un repaso integral para la Interrogación 1, cubriendo todos los conceptos fundamentales vistos hasta ahora. El objetivo es consolidar el conocimiento y prepararse efectivamente para la evaluación.

> 💡 **Guía de Estudio**: Enfócate en:
>
> 1. Comprender los conceptos fundamentales
> 2. Practicar la resolución de problemas
> 3. Identificar las relaciones entre conceptos
> 4. Manejar las unidades correctamente

## 1. Conceptos Fundamentales

### 1.1 Definiciones Básicas

```
    Sistema Termodinámico
┌──────────────┐
│    │ Frontera           │    │
│    └─────────┘     │
│      Sistema                     │
│                                        │
└──────────────┘
       Entorno
```

| Concepto | Definición             | Ejemplo              |
| -------- | ---------------------- | -------------------- |
| Sistema  | Región a estudiar      | Gas en cilindro      |
| Entorno  | Todo lo exterior       | Aire ambiente        |
| Frontera | Límite sistema-entorno | Paredes del cilindro |

### 1.2 Tipos de Sistemas

```
Clasificación por Intercambios:

Sistema    Calor  Trabajo  Masa
Aislado     ╳      ╳       ╳
Cerrado     ✓      ✓       ╳
Abierto     ✓      ✓       ✓
```

### 1.3 Leyes de la Termodinámica

```
Resumen Visual:

Ley 0: A = B = C (Equilibrio térmico)
Ley 1: ΔE = Q - W (Conservación)
Ley 2: ΔS > 0 (Entropía)
Ley 3: S = 0 a T = 0K
```

## 2. Temperatura

### 2.1 Escalas de Temperatura

```
K    °C    °F
373 ─ 100 ─ 212   Ebullición
┊    ┊    ┊
293 ─ 20 ─ 68     Ambiente
273 ─ 0 ─ 32      Fusión
┊    ┊    ┊
0 ─ -273 ─ -460   Cero absoluto
```

## 3. Presión

### 3.1 Definiciones y Unidades

```
Conversiones de Presión:

1 atm = 101325 Pa
        = 760 mmHg
        = 1.013 bar
        = 14.7 psi
```

### 3.2 Presión en Fluidos

```
    P₀ (atm)
       ↓
    ├─────┐
    │              │
    │  h          │  P = P₀ + ρgh
    │              │
    └─────┘
```

## 4. Calor y Balance de Energía

### 4.1 Transferencia de Calor

```
Los Tres Mecanismos:

Conducción   Convección   Radiación
   →→→               ↑↑↑           ≈≈≈≈≈
    └──┘            └──┘        └──┘
    q=-k∇T          q=hΔT         q=εσT⁴
```

### 4.2 Trabajo en Fluidos

```
    P
    │
    │   Trabajo = Área
    └────────────── V
```

## 5. Ejemplos Tipo Prueba

### Ejemplo 1: Sistema Compuesto

Un sistema consiste en una barra de aluminio (α = 23×10⁻⁶/°C) y una de acero (α = 11×10⁻⁶/°C), ambas de 1 m. ¿Cuál es la diferencia en sus expansiones al calentarse 50°C?

**Solución**:

1. Para cada barra: ΔL = αL₀ΔT
2. Aluminio: ΔL₁ = (23×10⁻⁶)(1)(50) = 1.15 mm
3. Acero: ΔL₂ = (11×10⁻⁶)(1)(50) = 0.55 mm
4. Diferencia: 0.60 mm

### Ejemplo 2: Transferencia de Calor Compuesta

Una pared tiene capas de ladrillo (k₁ = 0.8 W/m·K, L₁ = 10 cm) y aislante (k₂ = 0.05 W/m·K, L₂ = 5 cm). Si ΔT = 25°C, calcular el flujo de calor por m².

**Solución**:

1. Resistencias en serie: R = L₁/k₁ + L₂/k₂
2. R = 0.1/0.8 + 0.05/0.05 = 1.125 m²·K/W
3. q = ΔT/R = 25/1.125 = 22.2 W/m²

## Errores Comunes a Evitar

1. **Unidades**:

   - Usar temperaturas en K para radiación
   - Convertir presiones a unidades coherentes
   - No olvidar factores de 10⁻⁶ en α

2. **Signos**:

   - W > 0: trabajo hecho por el sistema
   - Q > 0: calor recibido por el sistema

3. **Conceptuales**:
   - Confundir calor y temperatura
   - Olvidar el trabajo de expansión
   - No considerar todos los mecanismos de transferencia

## Tips para la I1

1. **Antes del Examen**:

   - Repasar fórmulas clave
   - Practicar problemas variados
   - Revisar unidades y conversiones

2. **Durante el Examen**:

   - Leer todo el problema
   - Hacer diagramas claros
   - Verificar unidades
   - Comprobar resultados

3. **Proceso de Resolución**:
   - Identificar datos dados
   - Elegir ecuaciones apropiadas
   - Resolver paso a paso
   - Verificar orden de magnitud

## Referencias y Material de Estudio

- 📚 [Termodinámica - Resumen General](../libro/termodinamica.md)
- 📝 [Formulario del curso](../formulario/formulario_i1.md)
- 🔗 Resúmenes de ayudantías anteriores:
  - [Ayudantía 1](resumen_ayudantia_1.md)
  - [Ayudantía 2](resumen_ayudantia_2.md)
  - [Ayudantía 3](resumen_ayudantia_3.md)
