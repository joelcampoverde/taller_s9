class Persona {
    constructor(cedula, nombre, apellido, genero, fechaNacimiento) {
      this.cedula = cedula;
      this.nombre = nombre;
      this.apellido = apellido;
      this.genero = genero;
      this.fechaNacimiento = fechaNacimiento;
    }
  }
  
  class Estudiante extends Persona {
  
    constructor(cedula, nombre, apellido, genero, fechaNacimiento,id_matricula) {
      super(cedula, nombre, apellido, genero, fechaNacimiento, foto);
      this.id_matricula =id_matricula;
      
    }
  
    toString() {
      return JSON.stringify(this)
    }
  
    toJson() {
      return JSON.parse(this)
    }
  
  }
  
  export {
    Estudiante
  }
  