import { CasoUso_Estudiante, CasoUso_Estudiante } from './caso-uso.js'
import { repositorio_Estudiante } from './repositorio.js'
import { repositorio_Estudiante } from './repostitorio.js'
import { RenderTemplate } from './table.js'

const repositorio_Estudiante = new repositorio_Estudiante()
const CasoUso_Estudiante = new CasoUso_Estudiante(repositorioEmpleado)
const renderTemplate = new RenderTemplate(repositorioEstudiantes.estudiantes)


// agregando referencia de eventos a los botones
const tbody = document.querySelector("#id-table-estudiantes > tbody");
const btnAddEstudiante = document.querySelector('#id-btn-agregar')
btnAddEstudiante.addEventListener('click', (event) => {

  const id_matricula = document.querySelector('#id-text-id_matricula').value
  const nombre = document.querySelector('#id-text-nombre').value
  const apellido = document.querySelector('#id-text-apellido').value
  const cedula = document.querySelector('#id-text-cedula').value

  const elementEdad = document.querySelector('#id-number-edad')
  const elementAntiguedad = document.querySelector('#id-number-antiguedad')
  const elementPrestaciones = document.querySelector('#id-number-prestaciones')

  if (!elementEdad.value || !elementAntiguedad.value || !elementPrestaciones.value) {
    alert('falta calcular el edad o antiguedad o prestaciones')
    return
  }

  const data = {
    cedula: cedula,
    nombre: nombre,
    apellido: apellido
  }
  casoUsoEmpleado.addEmpleado(data)
  tbody.innerHTML = renderTemplate.render()

});

btnCalcularEdad.addEventListener('click', (event) => {
  let fechaNacimiento = document.getElementById('id-date-fecha-nacimiento').value

  const hoy = new Date()
  fechaNacimiento = new Date(fechaNacimiento)

  const edad = hoy.getFullYear() - fechaNacimiento.getFullYear()
  document.getElementById('id-number-edad').value = edad

})

