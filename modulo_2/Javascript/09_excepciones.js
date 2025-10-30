try {
    const user = JSON.parse('{ "nombre": "Pedro", "edad": 30 }');
} catch (e) {
    console.log("Error detectado:", e.message);
}
try {
    console.log("Intentando abrir archivo...");
    throw new Error("Archivo no encontrado");
} catch (error) {
    console.log("Error:", error.message);
} finally {
    console.log("Finalizo el intento de abrir el archivo.");
}