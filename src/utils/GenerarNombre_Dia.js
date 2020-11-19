export const GenerarNombre_Dia = (dia) => {
  var dias = [
    "Domingo",
    "Lunes",
    "Martes",
    "Miercoles",
    "Jueves",
    "Viernes",
    "Sabado",
  ];

  const numeroDia = new Date(dia).getDay();
  const nombreDia = dias[numeroDia];

  return nombreDia;
};
