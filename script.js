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

const incentivoDeporte = "https://www.datos.gov.co/resource/4e7j-65ci.json";
let putumayo = [];
let cantidadBeneficiadosPutumayo = [];
let numeroDeportesPutumayo = [];
let cordoba = [];
let cantidadBeneficiadosCordona = [];
let numeroDeportesCordoba = [];

let guainia = [];
let cantidadBeneficiadosGuainia = [];
let numeroDeportesGuainia = [];
let vaupes = [];
let cantidadBeneficiadosVaupes = [];
let numeroDeportesVaupes = [];
let totalDeportes = [];
fetch(incentivoDeporte)
  .then((Response) => Response.json())
  .then((data) => {
    data.forEach((data) => {
      switch (data.departamento) {
        case "PUTUMAYO":
          if (putumayo.indexOf(data.deporte_1) === -1) {
            if (totalDeportes.indexOf(data.deporte_1)) {
              totalDeportes.push(data.deporte_1);
            }
            putumayo.push(data.deporte_1);
            cantidadBeneficiadosPutumayo.push(1);
          } else {
            cantidadBeneficiadosPutumayo[
              cantidadBeneficiadosPutumayo.length - 1
            ] += 1;
          }
          break;
        case "GUAINÍA":
          if (guainia.indexOf(data.deporte_1) === -1) {
            if (totalDeportes.indexOf(data.deporte_1)) {
              totalDeportes.push(data.deporte_1);
            }
            guainia.push(data.deporte_1);
            cantidadBeneficiadosGuainia.push(1);
          } else {
            cantidadBeneficiadosGuainia[
              cantidadBeneficiadosGuainia.length - 1
            ] += 1;
          }
          break;
        case "CÓRDOBA":
          if (cordoba.indexOf(data.deporte_1) === -1) {
            if (totalDeportes.indexOf(data.deporte_1)) {
              totalDeportes.push(data.deporte_1);
            }
            cordoba.push(data.deporte_1);
            cantidadBeneficiadosCordona.push(1);
          } else {
            cantidadBeneficiadosCordona[
              cantidadBeneficiadosCordona.length - 1
            ] += 1;
          }
          break;
        case "VAUPÉS":
          if (vaupes.indexOf(data.deporte_1) === -1) {
            if (totalDeportes.indexOf(data.deporte_1)) {
              totalDeportes.push(data.deporte_1);
            }
            vaupes.push(data.deporte_1);
            cantidadBeneficiadosVaupes.push(1);
          } else {
            cantidadBeneficiadosVaupes[
              cantidadBeneficiadosVaupes.length - 1
            ] += 1;
          }
          break;
      }
    })
});
