const fs = require('fs');

fs.readdir('./images', (err, files) => {
    if (err) {
        console.error("Erreur lors de la lecture du dossier :", err);
        return;
    }

    // Filtrer les fichiers .js, .json, et .DS_Store
    files = files.filter(file => !file.endsWith(".js") && !file.endsWith(".json") && file !== ".DS_Store");

    const list = files.map(file => ({
        title: file.split('.').slice(0, -1).join('.'),
        file,
    }));

    let json = JSON.stringify({images: list}, null, 4);
    fs.writeFileSync('./images/images.json', json);
});
