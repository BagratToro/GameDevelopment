const Mix = [['Baum', 'Vogel'], ['Apfel', 'Kuchen'], ['Katze', 'Krallen'], ['Stuhl', 'Schule'], ['Fluss', 'Lagefeuer'], ['Berg', 'Klassenfahrt'], ['Brille', 'Optiker'], ['Pizza', 'Flammkuchen'],
                ['Schnee', 'Möhre'], ['Bus', 'Gelb'], ['Haus', 'Garten'], ['Lampe', 'Ikea'], ['Schwert', 'Mittelalter'], ['Stern', 'Planet'], ['Wald', 'Reh'], ['Tee', 'UK'], ['See', 'Meer'], ['Ente', 'Weihnachten'],
                ['Hund', 'Wolf'], ['Brot', 'Brötchen'], ['Schule', 'Gefängnis'], ['Tür', 'Klinke'], ['Becher', 'Party'], ['Fahrrad', 'Justus'], ['Pferd', 'Reiten'], ['Computer', 'Informatik'], ['Buch', 'Lesen'],
                ['Messer', 'Essen'], ['Regen', 'Svea'], ['Auto', 'Rennen'], ['Hose', 'Jeans'], ['Burg', 'Mittelalter'], ['Gitarre', 'Band'], ['Tasche', 'Hand'], ['Handschuh', 'Kalt'], ['Kanu', 'Fluss'],
                ['Sofa', 'Film'], ['Sand', 'Meer'], ['Teller', 'Essen'], ['Kuchen', 'Geburtstag'], ['Baum', 'Apfel'], ['Fisch', 'Schwimmen'], ['Hammer', 'Zange'], ['Löffel', 'Suppe'], ['Kerze', 'Romantisch'],
                ['Brief', 'Liebe'], ['Blume', 'Bunt'], ['TShirt', 'Sommer'], ['Wolke', 'Himmel'], ['Zug', 'Spät'], ['Kirche', 'Beten'], ['Brunnen', 'Trinken'], ['Turm', 'Rapunsel'], ['Brücke', 'Fluss'], 
                ['Schloss', 'Schlüssel'], ['Bleistift', 'Abbrechen'], ['Sofa', 'Decke'], ['Spiegel', 'Schneewittchen'], ['Zelt', 'Lagerfeuer'], ['Messer', 'Scream'], ['Foto', 'Gruppe'], ['Giraffe', 'Safari'], 
                ['Mond', 'Meerjungfrau'], ['Flasche', 'Geld'], ['Handy', 'TikTok'], ['Lagerfeuer', 'Kamin'], ['Zwiebel', 'Tränen'], ['Kartoffel', 'Fastfood'], ['Kuh', 'Bauernhof'],
                ['Seil', 'Klettern'], ['Pfand', 'Geld'], ['Hai', 'Film'], ['Band', 'Gitarre'], ['Löwe', 'König'], ['Kran', 'Baustelle'], ['Fenster', 'Glas'], ['Ballon', 'Himmel'], ['Mütze', 'Winter'],
                ['Stiefel', 'Winter'], ['Zug', 'Hogwarts'], ['Flugzeug', 'Kontrolle'], ['Brötchen', 'Essen'], ['Keks', 'lecker'], ['Tomate', 'rund'], ['Papier', 'trennen'], ['Bürste', 'Kopf']];

const Food = [['Apfel', 'Wurm'], ['Brot', 'Butter'], ['Pizza', 'Ofen'], ['Kaffee', 'Tasse'], ['Fisch', 'Angel'], ['Honig', 'Pollen'], ['Kuh', 'Weide'], ['Eis', 'Sommer'], ['Salat', 'Schüssel'], ['Kartoffel', 'Acker'], 
                ['Nudeln', 'Sauße'], ['Reis', 'Sushi'], ['Kuchen', 'Kerze'], ['Cola', 'Vanille'], ['Wein', 'Traube'], ['Öl', 'Pfanne'], ['Zucker', 'ungesund'], ['Tee', 'Kräuter'], ['Kakao', 'Marshmallows'], ['Butter', 'Salz'], 
                ['Schokolade', 'Kuh'], ['Bratwurst', 'Grill'], ['Hamburger', 'Pommes'], ['Suppe', 'Löffel'], ['Marmelade', 'Brot'], ['Gurke', 'Glas'], ['Käse', 'Maus'], ['Eierkuchen', 'Pfanne'], ['Toast', 'Sandwich'], 
                ['Zitrone', 'Saft'], ['Nuss', 'Erde'], ['Banane', 'Affe'], ['Kirsche', 'Kern'], ['Melone', 'Sommer'], ['Wasser', 'Flasche'], ['Cola', 'Dose'], ['Chips', 'Tüte'], ['Mais', 'Kino'], ['Keks', 'Dose'], 
                ['Pfeffer', 'Körner'], ['Salz', 'Streuer'], ['Erdbeere', 'Feld'], ['Blumenkohl', 'Beet'], ['Spinat', 'gefroren'], ['Pilz', 'Wald'], ['Huhn', 'Stall'], ['Ente', 'Teich'], ['Schwein', 'Stall'], ['Lamm', 'Weide'], 
                ['Rind', 'Weide'], ['Hummer', 'Meer'], ['Krabbe', 'Strand'], ['Muschel', 'Sand'], ['Sardine', 'Dose'], ['Fisch', 'Fluss'], ['Lachs', 'Netz'], ['Ei', 'Nest'], ['Mehl', 'Sack'], ['Hefe', 'Teig'], 
                ['Pasta', 'Italien'], ['Curry', 'Reis'], ['Sushi', 'Stäbchen'], ['Torte', 'Geburtstag'], ['Praline', 'Schachtel'], ['Popcorn', 'Kolben'], ['Keks', 'Kaffee'], 
                ['Donut', 'Zuckerguss'], ['Müsli', 'Milch'], ['Hafer', 'Feld'], ['Brot', 'Korb'], ['Käsekuchen', 'Backofen'], ['Lasagne', 'Auflaufform'], ['Steak', 'Pfanne'], ['Braten', 'Herd'], ['Kebab', 'Spieß'], 
                ['Guacamole', 'Avocado'], ['Hummus', 'Kichererbsen'], ['Taco', 'Mexiko'], ['Hotdog', 'Ketchup'], ['Smoothie', 'Mixer'], ['Limonade', 'Stand'],
                ['Wasser', 'Quelle'], ['Bier', 'Fass'], ['Champagner', 'Flasche'], ['Espresso', 'Maschine'], ['Salami', 'Pizza'], 
                ['Ramen', 'Japan'], ['Spiegelei', 'Pfanne'], ['Raclette', 'Pfännchen'], ['Omelett', 'Pfanne']];

const Nature = [['Baum', 'Blatt'], ['Berg', 'wandern'], ['Fluss', 'Ufer'], ['Meer', 'Welle'], ['Wald', 'Pfad'], ['Wiese', 'Blume'], ['Stein', 'Moos'], ['Himmel', 'Wolke'], ['Sonne', 'warm'], ['Mond', 'Stern'], 
                ['Regen', 'tanzen'], ['Schnee', 'kalt'], ['Wind', 'Böe'], ['Sand', 'Düne'], ['See', 'Insel'], ['Teich', 'Libelle'], ['Bach', 'Fisch'], ['Wasserfall', 'Felsen'], ['Gletscher', 'Eis'], 
                ['Höhle', 'Fledermaus'], ['Vulkan', 'Lava'], ['Krater', 'Asche'], ['Küste', 'Klippe'], ['Strand', 'Muschel'], ['Feld', 'Mohnblume'], ['Sumpf', 'Schilf'], ['Steppe', 'Gras'], 
                ['Dschungel', 'Liane'], ['Savanne', 'Löwe'], ['Wüste', 'Oase'], ['Tundra', 'Frost'], ['Polarlicht', 'Himmel'], ['Ast', 'Nest'], ['Zweig', 'Knospe'], ['Wurzel', 'Erde'],
                ['Pilz', 'Waldboden'], ['Blüte', 'Pollen'], ['Frucht', 'süß'], ['Tanne','Weihnachten'], ['Ahorn', 'Kanada'], ['Löwenzahn', 'Serie'], 
                ['Sonnenblume', 'Kern'], ['Rose', 'Dorn'], ['Tulpe', 'Zwiebel'], ['Lavendel', 'Duft'], ['Schmetterling', 'Flügel'], ['Biene', 'Honig'], ['Ameise', 'Hügel'], ['Käfer', 'Panzer'], ['Libelle', 'Flügel'], 
                ['Spinne', 'Fliege'], ['Vogel', 'Himmel'], ['Eule', 'Augen'], ['Adler', 'Krallen'], ['Fisch', 'Schuppen'], ['Seestern', 'pink'], ['Qualle', 'ekelig'], ['Delfin', 'Sprung'], ['Wal', 'Fontäne'], 
                ['Robbe', 'süß'], ['Fuchs', 'Bau'], ['Wolf', 'Gruppe'], ['Bär', 'Höhle'], ['Hirsch', 'Geweih'], ['Reh', 'Wiese'], ['Wildschwein', 'buddeln'], ['Eichhörnchen', 'Nuss'], ['Hase', 'Bau'], 
                ['Igel', 'Laub'], ['Maus', 'Feld'], ['Schlange', 'Haut'], ['Echse', 'Zunge'], ['Frosch', 'Teich'], ['Kröte', 'Sumpf'], ['Schildkröte', 'Panzer'], ['Chamäleon', 'Farbe'], ['Papagei', 'Schnabel'], 
                ['Pfau', 'Feder'], ['Rabe', 'Nest'], ['Krähe', 'Hexen'], ['Taube', 'Flügel'], ['Specht', 'Baum'], ['Storch', 'Nest'], ['Flamingo', 'Bein'], ['Pinguin', 'Eis'], ['Eisbär', 'Schnee'], ['Seehund', 'Strand'], 
                ['Orca', 'Meer'], ['Koralle', 'Riff'], ['Alge', 'Wasser'], ['Seetang', 'Küste'], ['Lotus', 'Teich'], ['Seerose', 'Blatt'], ['Magnolie', 'Blüte']];

let currentIndex = 0;
let gameList = [];
let wordList = [];

function showNext() {
    let outputColor = document.getElementById("output");
    if (currentIndex < gameList.length) {
        document.getElementById("output").textContent = gameList[currentIndex];
        currentIndex++;
    }
    else {
        document.getElementById("output").textContent = "ALLE SPIELER WURDEN GEZEIGT";
        outputColor.classList.remove('color-blue');
        outputColor.classList.add('color-green');
        currentIndex = 0;
        gameList = [];
        document.getElementById("start").style.display = "inline";
        document.getElementById("numPlayer").style.display = "inline";
        document.getElementById("themes").style.display = "inline";
        document.getElementById("themeLabel").style.display = "inline";
        document.getElementById("mode").style.display = "inline";
        document.getElementById("modeChoice").style.display = "inline";
    }
}

function chooseTheme(list) {
    const theme = document.getElementById("themes").value;
    if (theme === "mix") {
        list = Mix;
    }
    else if (theme === "food") {
        list = Food;
    }
    else if(theme === "nature") {
        list = Nature;
    }
    return list
}

function chooseMode(list) {
    const mode = document.getElementById("modeChoice").value;
    if (mode === "withHint") {
        return list[1]
    }   
    else if (mode === "withoutHint") {
        return ""
    }
}

function handleInput() {
    const inputValue = document.getElementById("numPlayer").value;
    const numberValue = Number(inputValue);  // oder parseInt(inputValue)

    if ((isNaN(numberValue)) || (numberValue <= 1)) {
        alert("Bitte gib eine gültige Zahl ein, die größer als 1 ist!");
        return
    }
    return numberValue
}

function createList(length, commonValue, differentValue) {
    for (let i = 0; i <= length; i++) {
        gameList.push(["Player" + i, commonValue]);
    }
    gameList.pop();
    const differentIndex = Math.floor(Math.random() * gameList.length);
    gameList[differentIndex] = ["Player" + differentIndex, "Imposter " + differentValue];
    const newList = gameList.flat();
    return newList
}

function choosePaire(list) {
    const index = Math.floor(Math.random() * list.length);
    const paire = list[index];
    return paire
}

function startButtonClicked() {
        wordList = chooseTheme(wordList);
        let numPlayer = handleInput();
        let wordPaire = choosePaire(wordList);
        document.getElementById("start").style.display = "none";
        document.getElementById("numPlayer").style.display = "none";
        document.getElementById("themes").style.display = "none";
        document.getElementById("themeLabel").style.display = "none";
        document.getElementById("mode").style.display = "none";
        document.getElementById("modeChoice").style.display = "none";
        document.getElementById("output").style.display = "inline";
        document.getElementById("output").textContent = "Nächster Spieler";
        gameList = createList(numPlayer, wordPaire[0], chooseMode(wordPaire));
}

function nextButtonClicked() {
        let outputColor = document.getElementById("output");
        if (outputColor.classList.contains('color-blue')) {
            outputColor.classList.remove('color-blue');
            outputColor.classList.add('color-green');
        }
        else {
            outputColor.classList.remove('color-green');
            outputColor.classList.add('color-blue');
        }
        showNext();
}