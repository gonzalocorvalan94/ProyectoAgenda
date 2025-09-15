import chalk from 'chalk';
import PromptSync from 'prompt-sync';
import { validarOpcion } from '../validators/contactoValidator.js';
import { Contactos } from '../src/contacto.js';
import {
  listarContactos,
  crearContactos,
  actualizarContacto,
  eliminarContacto,
} from '../service/contactosService.js';
const prompt = PromptSync();

export function menu() {
  let salir = false;

  while (!salir) {
    console.log(chalk.blue(`=== AGENDA DE CONTACTOS ===`));

    console.log(
      chalk.blue(`
      Menu principal

      1.- Listar contactos
      2.- Agregar contacto
      3.- Actualizar contacto
      4.- Eliminar contacto
      5.- Salir
    `)
    );

    let opcion = Number(prompt(chalk.blue('Elige una opción: ')));

    if (!validarOpcion(opcion)) {
      console.log(chalk.red('Opción inválida'));
      continue; // vuelve a mostrar el menú
    }

    switch (opcion) {
      case 1:
        listarContactos();
        break;
      case 2:
        crearContactos();
        break;
      case 3:
        actualizarContacto(); //Aca tendria que ir la funcion correspondiente
        break;
      case 4:
        eliminarContacto(); //Aca tendria que ir la funcion correspondiente
        break;
      case 5:
        console.log(chalk.green('Hasta luego')); //Aca termina, no necesita funcion
        salir = true;
        break;
    }
  }
}

