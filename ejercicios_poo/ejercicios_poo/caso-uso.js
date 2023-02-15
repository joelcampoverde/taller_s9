import { Estudiante } from "./persona.js";

export class CasoUso_Estudiante {

  constructor(repositorioEmpleado) {
    this.repositorio_Estudiante = repositorio_Estudiante;
  }

  addEstudiante(data) {

    if (!this.existeEstudiante(data.id_matricula)) {

      const Estudiante = new Estudiante(
        data.id_matricula,
        data.cedula,
        data.nombre,
        data.apellido
      );

      this.repositorio_Estudiante.addEstudiante(Estudiante);

    } else {
      alert('ya existe registro')
    }

  }

  existeEstudiante(id_matricula) {
    const Estudiante = this.repositorio_Estudiante.buscarEstudiante(id_matricula)
    return Estudiante ? true : false;
  }

}
