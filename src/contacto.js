/* Modelos/clases de la aplicación.

Contacto.js: clase Contacto con propiedades nombre, telefono, email. */
import fs from "fs";
import PromptSync from "prompt-sync";
import {
  validarTelefono,
  validarEmail,
  validarNombre,
} from "./contactoValidator.js";
import { agenda } from "../db/agendas.js";
const prompt = PromptSync();

class Contactos {
  constructor(nombre, numero, mail) {
    this.nombre = nombre;
    this.numero = numero;
    this.mail = mail;
  }
  mostrarcontactos() {
    return `Nombre: ${this.nombre}, Apellido: ${this.apellido}, Numero de telefono: ${this.numero}, Mail: ${this.mail}`;
  }
}
function pedirValido(mensaje, validador) {
  let valor = prompt(mensaje);
  while (!validador(valor)) {
    console.log("Valor inválido, intente nuevamente");
    valor = prompt(mensaje);
  }
  return valor;
}

function crearContactos(nombre, numero, mail) {
  numero = pedirValido("Ingrese numero", validarTelefono);
  nombre = pedirValido("Ingrese nombre", validarNombre);
  mail = pedirValido("Ingrese mail", validarEmail);

  const nuevoConctacto = new Contactos(nombre, numero, mail);
  agenda.push(nuevoConctacto);
  console.log(`Su contacto a sido creado`);
}
function actualizarContacto(arrayDeContactos, datoidentificadorNombre) {
  console.log(`Buscar el Contacto que desea modificar por su nombre.`);
  const contacto = arrayDeContactos.find(
    (c) => c.nombre === datoidentificadorNombre
  );
  if (contacto) {
    let nuevoNombre = prompt("Ingrese el nuevo nombre:");
    nuevoNombre = pedirValido(nuevoNombre, validarNombre);

    let nuevoNumero = prompt("Ingrese el nuevo número:");
    nuevoNumero = pedirValido(nuevoNumero, validarTelefono);
    let nuevoMail = prompt("Ingrese el nuevo mail:");
    nuevoMail = pedirValido(nuevoMail, validarEmail);
    contacto.nombre = nuevoNombre;
    contacto.numero = nuevoNumero;
    contacto.mail = nuevoMail;

    console.log("Contacto actualizado con éxito!");

    fs.writeFile("contactos.txt", agenda, (error) => {
      if (error) {
        console.error("Error al leer el archivo");
        return;
      }
      console.log("Archivo contactos, creado con exito!");
    });
  }
  console.log(`Su contacto no se encontro`);
}
