export const GenerarNombre_Dia = (ValorDIA) => {
  let array = [];
  ValorDIA.map((dia) => {
    let ObtenerDia = dia.date.split("-");
    let v = ObtenerDia[2].split("09:00:00");

    var dias = [
      "Domingo",
      "Lunes",
      "Martes",
      "Miercoles",
      "Jueves",
      "Viernes",
      "Sabado",
    ];
    var dt = new Date(
      ObtenerDia[1] + " " + v[0] + ", " + ObtenerDia[0] + " 09:00:00"
    );
    array.push(dias[dt.getUTCDay()]);
    localStorage.setItem("Dias", JSON.stringify(array));
  });

  let resultado = JSON.parse(localStorage.getItem("Dias"));
  return resultado;
};
