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
   
//Aqui se agregan todos los deportes diferentes a la lista y se cuenta la cantidad de deportes por cada departamento
for (const iter in putumayo) {
  numeroDeportesPutumayo.push(parseInt(iter) + 1);
  if (totalDeportes.indexOf(putumayo[iter]) === -1) {
    totalDeportes.push(putumayo[iter]);
  }
}
for (const iter in guainia) {
  numeroDeportesGuainia.push(parseInt(iter) + 1);
  if (totalDeportes.indexOf(guainia[iter]) === -1) {
    totalDeportes.push(guainia[iter]);
  }
}

for (const iter in cordoba) {
  numeroDeportesCordoba.push(parseInt(iter) + 1);
  if (totalDeportes.indexOf(cordoba[iter]) === -1) {
    totalDeportes.push(cordoba[iter]);
  }
}

for (const iter in vaupes) {
  numeroDeportesVaupes.push(parseInt(iter) + 1);
  if (totalDeportes.indexOf(vaupes[iter]) === -1) {
    totalDeportes.push(vaupes[iter]);
  }
}

// document.write(`Total: ${totalDeportes}<br>`);
// document.write(`putumayo: ${putumayo}<br>`);
// document.write(`guainia: ${guainia}<br>`);
// document.write(`cordoba: ${cordoba}<br>`);
// document.write(`vaupes: ${vaupes}<br>`);
//se crean las graficas para cada departamento
const grafPutumayo = {
  x: numeroDeportesPutumayo,
  y: cantidadBeneficiadosPutumayo,
  mode: "lines+markers",
  type: "scatter",
  name: "Putumayo",
  text: putumayo,
  marker: { size: 12 },
};
cantidadDeporte = [];
for (const iter in guainia) {
  cantidadDeporte.push(parseInt(iter) + 1);
}
const grafGuainia = {
  x: numeroDeportesGuainia,
  y: cantidadBeneficiadosGuainia,
  mode: "lines+markers",
  type: "scatter",
  name: "Guainia",
  text: guainia,
  marker: { size: 12 },
};
const grafCordoba = {
  x: numeroDeportesCordoba,
  y: cantidadBeneficiadosCordona,
  mode: "lines+markers",
  type: "scatter",
  name: "Cordoba",
  text: cordoba,
  marker: { size: 12 },
};
const grafVaupes = {
  x: numeroDeportesVaupes,
  y: cantidadBeneficiadosVaupes,
  mode: "lines+markers",
  type: "scatter",
  name: "Vaupes",
  text: vaupes,
  marker: { size: 12 },
};
const datosGraficaDeporte = [
  grafPutumayo,
  grafGuainia,
  grafCordoba,
  grafVaupes,
];

var layoutDepor = {
  title: "Grafica 2",
  xaxis: {
    title: "Deporte",
    range: [0.75, 5.25],
  },
  yaxis: {
    title: "Beneficiados",
    range: [0, 300],
  },
};

Plotly.newPlot("grafica2", datosGraficaDeporte, layoutDepor);
});