
import fs from 'fs';

class contactos {
    constructor(nombre,apellido,numero,mail) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.numero = numero;
        this.mail = mail;
    }
    mostrarcontactos(){
        return(`Nombre: ${this.nombre}, Apellido: ${this.apellido}, Numero de telefono: ${this.numero}, Mail: ${this.mail}`);
    }
}

const persona1 = new contactos("Flora","Rodriguez","2494222119","floraRodriguez22@gmail.com");
const arrayDeContactos = [persona1];
const textoDeContactos = arrayDeContactos.map(f => `Nombre: ${f.nombre}, Apellido: ${f.apellido}, Numero de telefono: ${f.numero}, Mail: ${f.mail}`).join("\n");
fs.writeFile("contactos.txt",textoDeContactos, (error)=>{
    if(error){
        console.error("Error al leer el archivo");
        return;
    }
    console.log("Archivo contactos, creado con exito!");
    fs.readFile("contactos.txt","utf8",(error,data) => {
        if(error){
            console.error("error al leer el Archivo", error);
            return;
        }
        console.log("\nContenido del archivo:");
        console.log(data);
    });

});
