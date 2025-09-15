import { Contactos } from '../src/contacto.js';
import PromptSync from 'prompt-sync';
import {
  validarEmail,
  validarNombre,
  validarTelefono,
  pedirValido,
} from '../validators/contactoValidator.js';
import { cargarAgenda, guardarAgenda } from '../db/fileManeger.js';
import { exportarATxt } from '../db/txtExporter.js';

const prompt = PromptSync();

// Cargamos la agenda desde el archivo JSON al iniciar
let agenda = cargarAgenda();


export function listarContactos() {
  if (agenda.length === 0) {
    console.log("No hay contactos en la agenda.");
    return;
  }

  console.log("=== Lista de contactos ===");
  agenda.forEach((c, index) => {
    // Usamos la clase para mantener el método mostrarcontactos()
    const contacto = new Contactos(c.nombre, c.numero, c.mail);
    console.log(`${index + 1}. ${contacto.mostrarcontactos()}`);
  });
}
export function crearContactos() {
  const numero = pedirValido('Ingrese numero: ', validarTelefono);
  const nombre = pedirValido('Ingrese nombre: ', validarNombre);
  const mail = pedirValido('Ingrese mail: ', validarEmail);

  const nuevoContacto = new Contactos(nombre, numero, mail);
  agenda.push(nuevoContacto);

  guardarAgenda(agenda, 'Archivo contactos: Se creó con éxito el contacto!');
  exportarATxt();
}

export function eliminarContacto() {
  const nombreBuscado = prompt(
    'Ingrese el nombre del usuario que desea eliminar: '
  );
  const index = agenda.findIndex((c) => c.nombre === nombreBuscado);
  if (index === -1) {
    console.log('Su contacto no se encontró.');
    return;
  }

  const [eliminado] = agenda.splice(index, 1);
  console.log(`Contacto ${eliminado.nombre} eliminado.`);

  guardarAgenda(agenda, 'Archivo contactos: Se eliminó con éxito el contacto!');
  exportarATxt();
}

export function actualizarContacto() {
  const nombreBuscado = prompt(
    'Ingrese el nombre del usuario que desea actualizar: '
  );
  const contacto = agenda.find((c) => c.nombre === nombreBuscado);
  if (!contacto) {
    console.log('Su contacto no se encontró.');
    return;
  }

  contacto.nombre = pedirValido('Ingrese el nuevo nombre: ', validarNombre);
  contacto.numero = pedirValido('Ingrese el nuevo numero: ', validarTelefono);
  contacto.mail = pedirValido('Ingrese el nuevo mail: ', validarEmail);

  console.log('Contacto actualizado con éxito!');

  guardarAgenda(
    agenda,
    'Archivo contactos: Se actualizó con éxito el contacto!'
  );
  exportarATxt();
}
