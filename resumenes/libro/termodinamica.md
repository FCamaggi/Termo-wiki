# Termodinámica - FIS1523

_Versión del 1 de abril de 2025_

## Capítulo 1: Introducción y Ley Cero de la Termodinámica

### 1.1 Definiciones Fundamentales

#### Sistema y su Entorno

- **Sistema**: Cantidad de materia o región del espacio a estudiar
- **Entorno**: Masa o región fuera del sistema
- **Tipos de sistemas**:
  - Cerrado: No intercambia masa con el entorno, pero sí energía
  - Aislado: No hay intercambio de masa ni energía
  - Abierto (Volumen de control): Permite flujo de masa y energía

#### Propiedades del Sistema

- **Propiedades Intensivas**: No dependen de la masa (temperatura, presión, densidad)
- **Propiedades Extensivas**: Dependen del tamaño del sistema (masa total, volumen)
- **Propiedades Específicas**: Propiedades extensivas por unidad de masa (v = V/m)

### 1.2 Presión y Temperatura

#### Presión

- Definición: $P = \frac{F}{A}$
- Unidades: Pascal (Pa) = $\frac{N}{m^2}$
- Presión hidrostática: $P = P_0 + \rho gh$
- Presión manométrica: $P_M = \rho gh$

#### Temperatura y Ley Cero

- **Ley Cero**: Si dos objetos están en equilibrio térmico con un tercero, están en equilibrio térmico entre sí
- Relación Celsius-Kelvin: $T(K) = T(°C) + 273.15$

### 1.3 Expansión Térmica

- **Expansión lineal**: $\Delta L = \alpha L_i \Delta T$
- **Expansión volumétrica**: $\Delta V = (3\alpha)V_i \Delta T$
- **Expansión superficial**: $\Delta A = 2\alpha A_i \Delta T$

## Capítulo 2: Energía y Calor

### 2.1 Formas de Energía

#### Energía Total

- $E = \frac{1}{2}mV^2 + mgh + U$
- Energía específica: $e = \frac{1}{2}V^2 + gh + u$, donde $u = \frac{U}{m}$

### 2.2 Transferencia de Energía

#### Calor

- Definición: Energía transferida por diferencia de temperaturas
- Unidades: Joule (J) o caloría (cal = 4.186 J)
- Transferencia de calor: $Q_{12} = \int_1^2 \delta Q$
- Tasa de transferencia: $\dot{Q} = \frac{dQ}{dt}$

#### Mecanismos de Transferencia de Calor

1. **Conducción**:

   - $\dot{Q} = kA|\frac{dT}{dx}|$
   - Para una barra uniforme: $\dot{Q} = kA\frac{T_2-T_1}{L}$

2. **Convección**:

   - $\frac{dQ}{dt} = h_cA(T_2-T_1)$

3. **Radiación**:
   - $\dot{Q} = \varepsilon\sigma AT^4$
   - Constante Stefan-Boltzmann: $\sigma = 5.67×10^{-8} \frac{W}{m^2K^4}$

### 2.3 Primera Ley de la Termodinámica

#### Balance de Energía

- Sistema cerrado: $\Delta E_{sistema} = Q - W$
- Tasa de cambio: $\dot{E}_{sistema} = \dot{E}_{entra} - \dot{E}_{sale}$
- Forma específica: $\Delta e_{sistema} = e_{entra} - e_{sale}$

#### Procesos Termodinámicos

- Adiabático: Q = 0
- Isobárico: P = constante
- Isocórico: V = constante
- Isotérmico: T = constante
