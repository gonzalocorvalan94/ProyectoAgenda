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
    return `Nombre: ${this.nombre}, Numero de telefono: ${this.numero}, Mail: ${this.mail}`;
  }
}
function pedirValido(mensaje, validador) {
  //funcion pedirValido evita repetir muchos while para poder volver a repetir el codigo
  let valor = prompt(mensaje);
  while (!validador(valor)) {
    console.log("Valor inválido, intente nuevamente");
    valor = prompt(mensaje);
  }
  return valor;
}
//agendaDeContactos => agenda, se podria sacar el parametro y directamente usar agendadentro de la funcion
function guardarAgenda(agendaDeContactos, mensaje) {
  //funcion guardarAgenda evitar repetir el modulo fs
  fs.writeFile(
    "contactos.txt",
    JSON.stringify(agendaDeContactos, null, 2),
    (error) => {
      if (error) {
        console.error("Error al guardar el archivo", error);
        return;
      }
      console.log(mensaje);
    }
  );
}

function crearContactos(agendaDeContactos) {
  let numero = pedirValido("Ingrese numero", validarTelefono);
  let nombre = pedirValido("Ingrese nombre", validarNombre);
  let mail = pedirValido("Ingrese mail", validarEmail);

  const nuevoContacto = new Contactos(nombre, numero, mail);
  agendaDeContactos.push(nuevoContacto);
  console.log(`Su contacto a sido creado`);

  guardarAgenda(
    agendaDeContactos,
    "Archivo contactos: Se creo con exito el contacto!"
  );
}
function eliminarContacto(agendaDeContactos, nombreBuscado) {
  console.log("Buscar el contacto que desea eliminar por su nombre.");
  const contacto = agendaDeContactos.findIndex(
    (c) => c.nombre === nombreBuscado
  );
  if (contacto === -1) {
    console.log("Su contacto no se encontro ");
    return;
  }

  const [eliminado] = agendaDeContactos.splice(contacto, 1);
  console.log(`Contacto ${eliminado.nombre} eliminado.`);

  guardarAgenda(agendaDeContactos, "Se eliminó con éxito el contacto!");
}

function actualizarContacto(agendaDeContactos, nombreBuscado) {
  console.log("Buscar el Contacto que desea modificar por su nombre.");
  const contacto = agendaDeContactos.find((c) => c.nombre === nombreBuscado);
  if (!contacto) {
    console.log(`Su contacto no se encontro`);
    return;
  }
  let nuevoNombre = pedirValido("Ingrese el nuevo nombre", validarNombre);
  let nuevoNumero = pedirValido("Ingrese el nuevo numero", validarTelefono);
  let nuevoMail = pedirValido("Ingrese el nuevo mail", validarEmail);
  contacto.nombre = nuevoNombre;
  contacto.numero = nuevoNumero;
  contacto.mail = nuevoMail;

  console.log("Contacto actualizado con éxito!");

  guardarAgenda(
    agendaDeContactos,
    "Archivo contactos: Se actualizó con exito el contacto!"
  );
}
