export class Contactos {
  constructor(nombre, numero, mail) {
    this.nombre = nombre;
    this.numero = numero;
    this.mail = mail;
  }
  mostrarcontactos() {
    return `Nombre: ${this.nombre}, Numero de telefono: ${this.numero}, Mail: ${this.mail}`;
  }
}


