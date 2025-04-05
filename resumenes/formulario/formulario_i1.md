# Formulario Interrogación 1 - FIS1523

## Primer Semestre 2025

### Dilatación Térmica

- Dilatación lineal:

  - $L(T) = L_0[1 + \alpha(T-T_0)]$
  - $\alpha$ = coeficiente de dilatación térmica lineal

- Dilatación volumétrica:
  - $V(T) = V_0[1 + \beta(T-T_0)]$
  - $\beta$ = coeficiente de dilatación térmica volumétrica

### Conversión de Temperaturas

- Kelvin a Celsius:
  - $T(K) = T(°C) + 273$

### Presión

- Presión atmosférica:

  - $P_{atm} = 100 \text{ kPa}$

- Tipos de presión:

  - Presión manométrica: Medida respecto a la presión atmosférica
  - Presión absoluta: Medida respecto a la presión del vacío

- Variación de presión con la altura:
  - $P(h) = P_0 + \rho gh$
  - $\rho$ = densidad del fluido
  - $h$ = altura
  - $g$ = aceleración gravitacional

### Transferencia de Calor

#### 1. Conducción

- $\dot{Q} = -kA\frac{\Delta T}{\Delta x}$
- $k$ = conductividad térmica
- $A$ = área de la sección transversal
- $\Delta T$ = diferencia de temperatura
- $\Delta x$ = longitud del medio

#### 2. Convección

- $\dot{Q} = hA(T_f - T_s)$
- $h$ = coeficiente de convección
- $T_f$ = temperatura del fluido
- $T_s$ = temperatura de la superficie

#### 3. Radiación

- Transferencia neta:

  - $\dot{Q} = \sigma\varepsilon A(T_o^4 - T_m^4)$
  - $\sigma = 5.67 \times 10^{-8} \text{ W/m}^2\text{K}^4$ (constante de Stefan-Boltzmann)
  - $\varepsilon$ = emisividad de la superficie
  - $T_o$ = temperatura del objeto
  - $T_m$ = temperatura del medio

- Aproximación para $\Delta T \ll T_m$:
  - $\dot{Q} \approx 4\sigma\varepsilon AT_o^3\Delta T$
  - $\Delta T = (T_m - T_0)$

### Balance de Energía

#### Sistema sin flujo másico

- Forma integral:

  - $\Delta E_{sistema} = (Q_{entra} - Q_{sale}) + (W_{entra} - W_{sale})$

- Forma diferencial:
  - $\frac{dE_{sistema}}{dt} = (\dot{Q}_{entra} - \dot{Q}_{sale}) + (\dot{W}_{entra} - \dot{W}_{sale})$

#### Sistema cerrado

- $\Delta E_{sistema} = Q \pm W$ (signo depende de la convención utilizada)
