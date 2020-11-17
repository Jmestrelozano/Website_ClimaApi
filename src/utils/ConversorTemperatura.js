export const ConversorTempKaC = (kelvin) => {
  // Fórmula
  // (32 °F − 32) × 5/9 = 0 °C

  let resultado = kelvin - 273.15 

  return resultado.toFixed(0);
};
