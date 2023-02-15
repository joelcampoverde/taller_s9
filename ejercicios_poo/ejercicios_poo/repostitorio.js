export class repositorio_Estudiante {
    constructor() {
      this.estudiantes = []
    }
  
    addEstudiante(Estudiante) {
      this.estudiantes.push(Estudiante)
    }
  
    buscarEstudiante(id_matricula) {
      return this.estudiantes.filter((item) => item.id_matricula === id_matricula).shift()
    }
  
  }
  