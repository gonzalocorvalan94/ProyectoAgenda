/* Funciones para verificar datos de entrada.

Ejemplo:
*/

export function validarTelefono(telefono) {
  const numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  for (let i = 0; i < telefono.length; i++) {
    if (!numeros.includes(Number(telefono[i]))) {
      console.log(chalk.red('Número de teléfono inválido'));
      return false;
    }
  }
  if (telefono.length < 6) {
    console.log(chalk.red('El telefono debe ser contener al menos 6 números'));
    return false;
  }
  return true;
}

export function validarEmail(mail) {
  // trim() para evitar espacios al inicio/final
  const limpio = mail.trim();

  if (!limpio.includes('@') || !limpio.includes('.')) {
    console.log(
      chalk.red('El mail es inválido (debe tener @ y un dominio con .)')
    );
    return false;
  }

  return true;
}

export function validarNombre(nombre) {
  let limpio = nombre.trim();
  if (limpio.length < 2) {
    console.log(chalk.red('El nombre debe contener al menos 3 letras'));
    return false;
  }
  return true;
}

export function validarOpcion(opcion) {
  const opciones = [1, 2, 3, 4, 5];
  return opciones.includes(opcion); // devuelve true si está en el array
}
