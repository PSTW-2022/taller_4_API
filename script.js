/*AQUI SE COPIA EL CODIGO DE LA GRAFICA NUMERO 1 DE LINEA 2 - HASTA 40*/
const capacitacionHabilidadesDigitales =
  "https://www.datos.gov.co/resource/nzyx-5vfw.json";
let ciudades = [];
let cantidad = [];

fetch(capacitacionHabilidadesDigitales)
  .then((Response) => Response.json())
  .then((data) => {
    data.forEach((data) => {
      if (ciudades.indexOf(data.municipio) === -1) {
        ciudades.push(data.municipio);
        cantidad.push(1);
      } else {
        cantidad[cantidad.length - 1] += 1;
      }
    });
    const grafica = {
      labels: ciudades,
      values: cantidad,
      type: "pie",
    };
    const datosGrafica = [grafica];

    var layout = {
      title: "Grafica 1",
    };
    Plotly.newPlot("grafica1", datosGrafica, layout);
  });

/*AQUI SE COPIA EL CODIGO DE LA GRAFICA NUMERO 2 DE LINEA 32 - HASTA LO QUE SE NECESITE*/

