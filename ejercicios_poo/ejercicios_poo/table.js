export class RenderTemplate {
    constructor(listObjects) {
      this.listObjects = listObjects
    }
    render() {
  
      const items = this.listObjects.map((item) => {
        return `<tr>
              <td>${item.id_matricula}</td>
              <td>${item.nombre}</td>
              <td>${item.apellido}</td>
              <td>${item.direccion}</td>
              <td>M</td>
          </tr>`
      }).join('')
  
      return items
    }
  }
  