import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// agenda.json dentro de la carpeta db
const filePath = path.join(__dirname, 'agenda.json');

export function cargarAgenda() {
  try {
    const data = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(data);
  } catch (err) {
    console.warn("No se encontró agenda.json, se inicia vacía");
    return [];
  }
}

export function guardarAgenda(agenda, mensaje) {
  fs.writeFileSync(filePath, JSON.stringify(agenda, null, 2)); // writeFileSync asegura que se guarde antes de continuar
  console.log(mensaje);
}
