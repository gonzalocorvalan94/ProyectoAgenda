📌 Enunciado del Proyecto: Agenda de Contactos CLI
Descripción

Se pide desarrollar una aplicación de consola (CLI) en Node.js que funcione como una agenda de contactos. 

Inicialmente se deberia ver un menu principal numérico
Ejemplo
1.- Listar contactos
2.- Crear nuevo contacto
etc.

El programa debe permitir al usuario agregar, listar, buscar, editar y eliminar contactos, y además guardar los datos en un archivo para que no se pierdan al cerrar la aplicación.

La aplicacion debe verificar que los datos ingresados por el usuario sean válidos. Ejemplo: Debe arrojar un mensaje de error en caso de que el usuario intruduzca un string cuando se pida el número
de telefono.

Al crear, editar o eliminar un contacto, la aplicacion debe pedirle una confirmacion al usuario
Ejemplo: ¿Esta seguro que desea eliminar este contacto? (modificar el mensaje a gusto)
Una vez que se confirme, la aplicacion debe mandar un mensaje de confirmación (ejemplo: Usuario eliminado con exito), imprimir un archivo txt (agenda.txt) con la agenda actualiazda hasta el momento y volver al menu principal.

Al salir de la agenda, debe mostrarse un mensje de despedida.



Se puede utilizar todo lo visto en clase, inclusive métodos de arreglos. 
Se agrega el modulo fs (readfile y writefile) 
