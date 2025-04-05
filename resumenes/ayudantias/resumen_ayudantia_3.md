# Resumen Ayudantía 3 - Termodinámica

**Curso:** FIS1523 – Termodinámica  
**Profesor:** Iván Muñoz (Secciones 5 y 7)  
**Fecha:** 28-03-2025

## 1. Calor y Balance de Energía

### 1.1 Tipos de Transferencia de Calor

Existen tres formas principales de transferencia de calor:

#### Conducción

Es la forma común de transferencia entre sólidos. Se rige por la ecuación:

$\dot{Q} = k \cdot A \cdot \frac{dT}{dx} = k \cdot A \cdot \frac{\Delta T}{\Delta x}$

Donde:

- $k$ = conductividad térmica (depende del material)
- $A$ = área transversal o de contacto
- $\frac{dT}{dx}$ = gradiente de temperatura
- $\Delta T$ = diferencia de temperatura
- $\Delta x$ = distancia entre medios

#### Convección

Es la forma común de transferencia en fluidos. Se rige por la ecuación:

$\dot{Q} = h \cdot A \cdot |T_s - T_f|$

Donde:

- $h$ = coeficiente de transferencia
- $A$ = área transversal o de contacto
- $T_s$ = temperatura de la superficie
- $T_f$ = temperatura del fluido lejos de la superficie

#### Radiación

Es una forma que se puede transmitir a través de medio material o el vacío. Se rige por:

$\dot{Q} = \varepsilon \sigma A \cdot (T_o^4 - T_{ambiente}^4)$

Donde:

- $\varepsilon$ = emisividad de la superficie (depende del material)
- $\sigma$ = Constante de Stefan-Boltzmann $(5.67 \times 10^{-8} \text{ W/(m^2 \cdot K^4)})$
- $A$ = área transversal o de contacto
- $T_o$ = temperatura del objeto emisor
- $T_{ambiente}$ = temperatura del ambiente (0K en el vacío)

Además, para la radiación se define la absorbancia $\alpha$:

- Calor absorbido: $\dot{Q}_{abs} = \alpha \dot{Q}_{incidente}$
- Calor reflejado: $\dot{Q}_{reflejado} = (1-\alpha)\dot{Q}_{incidente}$

### 1.2 Trabajo en Fluidos

#### Definición General

La definición tradicional del trabajo es:

$W = \vec{F} \cdot \vec{s} = \int_{s_1}^{s_2} F(s)ds$

Sin embargo, para fluidos se utilizan las siguientes definiciones:

**Trabajo hecho por el sistema:**
$W_{out} = \int_{V_i}^{V_f} P \, dV$

**Trabajo hecho sobre el sistema:**
$W_{in} = -\int_{V_i}^{V_f} P \, dV$

Es importante mantener consistencia en la convención de signos utilizada.

#### 1.2.1 Trabajo del Resorte

Para un resorte que se mueve de un punto $a$ a un punto $b$:

$W = \int_a^b kx \, dx = \frac{1}{2}k(b^2 - a^2)$
