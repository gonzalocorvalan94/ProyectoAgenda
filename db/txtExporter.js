import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { cargarAgenda } from './fileManeger.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export function exportarATxt(fileName = 'contactos.txt') {
  const agenda = cargarAgenda();
  const filePath = path.join(__dirname, fileName);

  let contenido = '=== Agenda de Contactos ===\n\n';
  if (agenda.length === 0) contenido += 'No hay contactos.\n';
  else agenda.forEach((c, i) => {
    contenido += `${i + 1}. Nombre: ${c.nombre}\n`;
    contenido += `   Número: ${c.numero}\n`;
    contenido += `   Mail: ${c.mail}\n\n`;
  });

  fs.writeFileSync(filePath, contenido);
  console.log(`Archivo ${fileName} generado con éxito.`);
}
