const Mix = [['Baum', 'Vogel'], ['Apfel', 'Birne'], ['Katze', 'Tiger'], ['Stuhl', 'Sessel'], ['Fluss', 'Bach'], ['Berg', 'Hügel'], ['Brille', 'Optiker'], ['Pizza', 'Flammkuchen'],
                ['Schnee', 'Eis'], ['Bus', 'Straßenbahn'], ['Haus', 'Hütte'], ['Lampe', 'Laterne'], ['Schwert', 'Dolch'], ['Stern', 'Planet'], ['Wald', 'Dschungel'], ['Tee', 'Kaffee'], ['See', 'Meer'], ['Ente', 'Gans'],
                ['Hund', 'Wolf'], ['Brot', 'Brötchen'], ['Schule', 'Universität'], ['Tür', 'Tor'], ['Krug', 'Becher'], ['Fahrrad', 'Justus'], ['Pferd', 'Esel'], ['Computer', 'Laptop'], ['Buch', 'Heft'],
                ['Messer', 'Gabel'], ['Regen', 'Niesel'], ['Auto', 'Lastwagen'], ['Hose', 'Jeans'], ['Burg', 'Schloss'], ['Gitarre', 'Geige'], ['Tasche', 'Rucksack'], ['Handschuh', 'Fausthandschuh'], ['Kanu', 'Kajak'],
                ['Sofa', 'Couch'], ['Sand', 'Staub'], ['Teller', 'Schüssel'], ['Kuchen', 'Torte'], ['Baum', 'Strauch'], ['Fisch', 'Delfin'], ['Hammer', 'Axt'], ['Löffel', 'Suppenkelle'], ['Kerze', 'Fackel'],
                ['Brief', 'Postkarte'], ['Blume', 'Blüte'], ['Hemd', 'TShirt'], ['Wolke', 'Nebel'], ['Zug', 'Straßenbahn'], ['Kirche', 'Kapelle'], ['Brunnen', 'Quelle'], ['Turm', 'Leuchtturm'], ['Brücke', 'Steg'], 
                ['Schloss', 'Schlüssel'], ['Bleistift', 'Kugelschreiber'], ['Sofa', 'Sessel'], ['Spiegel', 'Glas'], ['Zelt', 'Hütte'], ['Pfad', 'Straße'], ['Foto', 'Gemälde'], ['Pferd', 'Jule'], 
                ['Sofa', 'Bank'], ['Mond', 'Sonne'], ['Flasche', 'Geld'], ['Handy', 'TikTok'], ['Lagerfeuer', 'Kamin'], ['Zwiebel', 'Knoblauch'], ['Kartoffel', 'Süßkartoffel'], ['Kuh', 'Ochse'],
                ['Seil', 'Kette'], ['Flasche', 'Dose'], ['Haifisch', 'Schwertfisch'], ['Orchester', 'Band'], ['Löwe', 'Leopard'], ['Kran', 'Bagger'], ['Fenster', 'Tür'], ['Ballon', 'Blase'], ['Hut', 'Mütze'],
                ['Schuhe', 'Stiefel'], ['Zug', 'UBahn'], ['Flugzeug', 'Hubschrauber'], ['Brötchen', 'Croissant'], ['Keks', 'Cracker'], ['Tomate', 'Paprika'], ['Papier', 'Pappe'], ['Bürste', 'Kamm'],
                ['Zugbrücke', 'Hängebrücke'], ['Schrank', 'Kommode'], ['Herd', 'Ofen'], ['Fensterbank', 'Regal'], ['Leiter', 'Treppe'], ['Kanone', 'Gewehr'], ['Fass', 'Tonne'], ['Glocke', 'Gong'],
                ['Kabel', 'Schnur'], ['Besen', 'Schrubber'], ['Hase', 'Kaninchen'], ['Handy', 'Tablet'], ['Glas', 'Becher'], ['Kaffee', 'Kakao'], ['Salat', 'Kraut'], ['Hering', 'Makrele'],
                ['Schmetterling', 'Motte'], ['Wal', 'Orca'], ['Spinne', 'Skorpion'], ['Maus', 'Ratte'], ['Rose', 'Tulpe'], ['Fahne', 'Banner'], ['Seife', 'Shampoo'], ['Handtuch', 'Waschlappen'],
                ['Tasche', 'Beutel'], ['Schrank', 'Vitrine'], ['Flasche', 'Thermoskanne'], ['Schlüssel', 'Chipkarte'], ['Karte', 'Stadtplan'], ['Wüste', 'Steppe'], ['Eisberg', 'Gletscher'], ['Holz', 'Bambus'],
                ['Schnee', 'Hagel'], ['Tankstelle', 'Rastplatz'], ['Spielplatz', 'Park'], ['Apfelkuchen', 'Apfeltasche'], ['Hand', 'Faust'], ['Gabel', 'Löffel'], ['See', 'Teich'], ['Blitz', 'Donner'],
                ['Briefmarke', 'Stempel'], ['Korb', 'Kiste'], ['Münze', 'Medaille'], ['Armband', 'Uhr'], ['Hose', 'Shorts'], ['Baumwolle', 'Leinen'], ['Schaf', 'Ziege'], ['Milch', 'Joghurt'],
                ['Pullover', 'Sweatshirt'], ['Tasche', 'Koffer'], ['Schach', 'Dame'], ['Blatt', 'Seite'], ['Sofa', 'Hängematte'], ['Brett', 'Planke'], ['Fisch', 'Aal'], ['Birne', 'Banane'],
                ['Toast', 'Baguette'], ['Kerze', 'Teelicht'], ['Teller', 'Platte'], ['Orchidee', 'Lilie'], ['Gurke', 'Zucchini'], ['Globus', 'Karte'], ['Zahnbürste', 'Zahnseide'], ['Hammer', 'Schraubenzieher'],
                ['Messer', 'Schere'], ['Schokolade', 'Praline'], ['Fluss', 'Kanal'], ['Laptop', 'Tablet'], ['Hemd', 'Bluse'], ['Auto', 'Cabrio'], ['Pfanne, Topf'], ['Banane', 'Mango'], ['Strand', 'Küste'], 
                ['Schere', 'Nagelschere'], ['Anzug', 'Smoking'], ['Stift', 'Marker'], ['Schloss', 'Festung'], ['Regenmantel', 'Windjacke'], ['Pfirsich', 'Aprikose'], ['Bus', 'Reisebus'], ['Ofen', 'Mikrowelle'], 
                ['Wolke', 'Dunst'], ['Teller', 'Unterteller'], ['Brunnen', 'Wasserfall'], ['Stuhl', 'Hocker'], ['Hund', 'Kojote'], ['Lampe', 'Stehlampe'], ['Schwamm', 'Bürste'], ['Karton', 'Schachtel'], 
                ['Paprika', 'Chili'], ['Schrank', 'Garderobe'], ['Strohhalm', 'Löffel'], ['Treppe', 'Rolltreppe'], ['Schublade', 'Regal'], ['Kerze', 'Duftkerze'], ['Reis', 'Couscous'], ['Apfelbaum', 'Kirschbaum'],
                ['Segelboot', 'Motorboot'], ['Briefumschlag', 'Paket'], ['Zelt', 'Wohnwagen'], ['Ziegel', 'Stein'], ['Kaktus', 'Sukkulente'], ['Leine, Kette'], ['Boot', 'Floß'], ['Brücke', 'Aquädukt'], 
                ['Karte', 'Atlas'], ['Wüste', 'Oase'], ['Brille', 'Schutzbrille'], ['Löwe', 'Tiger'], ['Feder', 'Pinsel'], ['Stadt', 'Dorf'], ['Post', 'Telegramm'], ['Jacke', 'Mantel'], ['Bein', 'Oberschenkel'], 
                ['Flugzeug', 'Bermudadreieck'], ['Koffer', 'Rucksack'], ['Bank', 'Liegestuhl'], ['Schirm', 'Regenschirm'], ['Besen', 'Handfeger'], ['Bahn', 'SBahn'], ['Gabel', 'Essstäbchen'], ['Torte', 'Muffin'], 
                ['Stern', 'Komet'], ['Ball', 'Kugel'], ['Schuh', 'Sandale'], ['Keks', 'Waffel'], ['Tasse', 'Glas'], ['Teich', 'Pfütze'], ['Weg', 'Pfad'], ['Feuer', 'Glut'], ['Schnee', 'ReifNiederschlag'], 
                ['Turm', 'Antenne'], ['Lager', 'Vorrat'], ['Schlange', 'Wurm'], ['Pfeil', 'Speer'], ['Notiz', 'Liste'], ['Tier', 'Insekt'], ['Radio', 'Lautsprecher'], ['Salz', 'Zucker'], 
                ['Baumrinde', 'Holz'], ['Heizung', 'Ofen'], ['Orkan', 'Sturm'], ['Rose', 'Nelke'], ['Milch', 'Sahne'], ['Arzt', 'Chirurg'], ['Koch', 'Bäcker'], ['Bäcker', 'Konditor'], ['Zuckerwatte', 'Popcorn'], 
                ['Park', 'Garten'], ['Wassermelone', 'Honigmelone'], ['Zug', 'Dampfzug'], ['Käse', 'Quark'], ['Huhn', 'Hahn'], ['Hand', 'Handfläche'], ['Stein', 'Kiesel'], ['Schmetterling', 'Libelle'], 
                ['Wasser', 'Sprudelwasser'], ['Hose', 'Leggings'], ['Pullover', 'Strickjacke'], ['Tintenfisch', 'Kalmar'], ['Kabel', 'Verlängerungskabel'], ['Brunnen', 'Pumpe'], ['Blatt', 'Laub'], ['Berg', 'Vulkan'], 
                ['Boot', 'Fähre'], ['Insel', 'Halbinsel'], ['Fahrrad', 'Dreirad'], ['Katze', 'Luchs'], ['Maus', 'Hamster'], ['Wald', 'Forst'], ['Pfannkuchen', 'Waffel'], ['Topf', 'Kessel'], ['Karte', 'Eintrittskarte'], 
                ['Lampe', 'Laterne'], ['Flasche', 'Weinkaraffe'], ['Sonne', 'Stern'], ['Schrank', 'Vitrine'], ['Pfosten', 'Säule'], ['Glas', 'Kristallglas'], ['Uhr', 'Stoppuhr'], ['Fernseher', 'Monitor'], 
                ['Bank', 'Tresor'], ['Plakat', 'Poster'], ['Wand', 'Mauer'], ['Stroh', 'Heu'], ['Schlüssel', 'Zahlencode'], ['Kerze', 'Öllampe'], ['Wal', 'Blauwal'], ['Hund', 'Fuchs'], ['Schal', 'Tuch'], 
                ['Kürbis', 'Melone'], ['Brot', 'Baguette'], ['Eis', 'Sorbet'], ['Flasche', 'Milchkanne'], ['Leiter', 'Gerüst'], ['See', 'Bucht'], ['Wiese', 'Rasen'], ['Huhn', 'Truthahn'], ['Auto', 'Sportwagen'], 
                ['Spiegel', 'Schneewittchen'], ['Stein', 'Felsen'], ['Wolke', 'Gewitterwolke'], ['Sand', 'Kies'], ['Holz', 'Sperrholz'], ['Perle', 'Edelstein'], ['Ananas', 'Kokosnuss'], 
                ['Zahnarzt', 'Kieferorthopäde'], ['Kleber', 'Klebeband'], ['Kamera', 'Videokamera'], ['Zelt', 'Pavillon'], ['Fenster', 'Dachfenster'], ['Hose', 'Blau'], ['Korb', 'Einkaufstasche'], 
                ['Kissen', 'Decke'], ['Lampe', 'Kerzenhalter'], ['Ring', 'Armband'], ['Tasche', 'Einkaufskorb'], ['Salat', 'Spinat'], ['Pflaume', 'Zwetschge']];

const Food = [['Apfel', 'Wurm'], ['Brot', 'Butter'], ['Pizza', 'Ofen'], ['Kaffee', 'Tasse'], ['Fisch', 'Angel'], ['Honig', 'Biene'], ['Milch', 'Kuh'], ['Eis', 'Sommer'], ['Salat', 'Schüssel'], ['Kartoffel', 'Acker'], 
                ['Nudeln', 'Gabel'], ['Reis', 'Schale'], ['Kuchen', 'Kerze'], ['Bier', 'Glas'], ['Wein', 'Traube'], ['Öl', 'Pfanne'], ['Zucker', 'Löffel'], ['Tee', 'Kanne'], ['Kakao', 'Becher'], ['Butter', 'Messer'], 
                ['Schokolade', 'Papier'], ['Bratwurst', 'Grill'], ['Hamburger', 'Pommes'], ['Suppe', 'Löffel'], ['Marmelade', 'Brot'], ['Gurke', 'Glas'], ['Käse', 'Maus'], ['Pfannkuchen', 'Pfanne'], ['Toast', 'Toaster'], 
                ['Zitrone', 'Saft'], ['Nuss', 'Schale'], ['Banane', 'Affe'], ['Kirsche', 'Kern'], ['Melone', 'Messer'], ['Wasser', 'Flasche'], ['Cola', 'Dose'], ['Chips', 'Tüte'], ['Mais', 'Kolben'], ['Keks', 'Dose'], 
                ['Pfeffer', 'Mühle'], ['Salz', 'Streuer'], ['Erdbeere', 'Feld'], ['Blumenkohl', 'Beet'], ['Spinat', 'Topf'], ['Pilz', 'Wald'], ['Huhn', 'Stall'], ['Ente', 'Teich'], ['Schwein', 'Stall'], ['Lamm', 'Weide'], 
                ['Rind', 'Weide'], ['Hummer', 'Meer'], ['Krabbe', 'Strand'], ['Muschel', 'Sand'], ['Sardine', 'Dose'], ['Forelle', 'Fluss'], ['Lachs', 'Netz'], ['Ei', 'Nest'], ['Mehl', 'Sack'], ['Hefe', 'Teig'], 
                ['Pasta', 'Italien'], ['Curry', 'Reis'], ['Sushi', 'Stäbchen'], ['Torte', 'Geburtstag'], ['Praline', 'Schachtel'], ['Popcorn', 'Kino'], ['Wurst', 'Markt'], ['Schinken', 'Schneidebrett'], ['Keks', 'Kaffee'], 
                ['Donut', 'Zuckerguss'], ['Müsli', 'Schale'], ['Hafer', 'Feld'], ['Brot', 'Korb'], ['Käsekuchen', 'Backofen'], ['Lasagne', 'Auflaufform'], ['Steak', 'Pfanne'], ['Braten', 'Ofen'], ['Kebab', 'Spieß'], 
                ['Falafel', 'Tasche'], ['Guacamole', 'Schüssel'], ['Hummus', 'Teller'], ['Taco', 'Soße'], ['Wrap', 'Folie'], ['Hotdog', 'Stand'], ['Smoothie', 'Mixer'], ['Limonade', 'Glas'], ['Whisky', 'Fass'], 
                ['Gin', 'Tonic'], ['Wasser', 'Quelle'], ['Bier', 'Fass'], ['Champagner', 'Flasche'], ['Espresso', 'Maschine'], ['Latte', 'Milch'], ['Mojito', 'Minze'], ['Bloody Mary', 'Tomate'], ['Salami', 'Pizza'], 
                ['Nudelsuppe', 'Stäbchen'], ['Paella', 'Pfanne'], ['Fondue', 'Gabel'], ['Raclette', 'Pfännchen'], ['Omelett', 'Pfanne']];

const Nature = [['Baum', 'Blatt'], ['Berg', 'Tal'], ['Fluss', 'Ufer'], ['Meer', 'Welle'], ['Wald', 'Pfad'], ['Wiese', 'Blume'], ['Stein', 'Moos'], ['Himmel', 'Wolke'], ['Sonne', 'Strahl'], ['Mond', 'Stern'], 
                ['Regen', 'Tropfen'], ['Schnee', 'Flocke'], ['Wind', 'Böe'], ['Sand', 'Düne'], ['See', 'Insel'], ['Teich', 'Libelle'], ['Bach', 'Forelle'], ['Wasserfall', 'Felsen'], ['Gletscher', 'Eis'], 
                ['Höhle', 'Fledermaus'], ['Vulkan', 'Lava'], ['Krater', 'Asche'], ['Küste', 'Klippe'], ['Strand', 'Muschel'], ['Feld', 'Mohnblume'], ['Heide', 'Ginster'], ['Sumpf', 'Schilf'], ['Steppe', 'Gras'], 
                ['Dschungel', 'Liane'], ['Savanne', 'Akazie'], ['Wüste', 'Oase'], ['Tundra', 'Frost'], ['Polarlicht', 'Himmel'], ['Ast', 'Nest'], ['Zweig', 'Knospe'], ['Wurzel', 'Erde'], ['Farn', 'Spore'], 
                ['Pilz', 'Waldboden'], ['Blüte', 'Pollen'], ['Frucht', 'Samen'], ['Eiche', 'Eichel'], ['Kiefer', 'Zapfen'], ['Ahorn', 'Blatt'], ['Buche', 'Rinde'], ['Birke', 'Ast'], ['Löwenzahn', 'Samen'], 
                ['Sonnenblume', 'Kern'], ['Rose', 'Dorn'], ['Tulpe', 'Zwiebel'], ['Lavendel', 'Duft'], ['Schmetterling', 'Flügel'], ['Biene', 'Honig'], ['Ameise', 'Hügel'], ['Käfer', 'Panzer'], ['Libelle', 'Flügel'], 
                ['Spinne', 'Netz'], ['Vogel', 'Feder'], ['Eule', 'Augen'], ['Adler', 'Krallen'], ['Fisch', 'Schuppen'], ['Seestern', 'Arm'], ['Qualle', 'Tentakel'], ['Delfin', 'Sprung'], ['Wal', 'Fontäne'], 
                ['Robbe', 'Flosse'], ['Fuchs', 'Bau'], ['Wolf', 'Rudel'], ['Bär', 'Höhle'], ['Hirsch', 'Geweih'], ['Reh', 'Wiese'], ['Wildschwein', 'Schlamm'], ['Eichhörnchen', 'Nuss'], ['Hase', 'Bau'], 
                ['Igel', 'Stachel'], ['Maus', 'Feld'], ['Schlange', 'Haut'], ['Echse', 'Schwanz'], ['Frosch', 'Teich'], ['Kröte', 'Sumpf'], ['Schildkröte', 'Panzer'], ['Chamäleon', 'Farbe'], ['Papagei', 'Schnabel'], 
                ['Pfau', 'Feder'], ['Rabe', 'Nest'], ['Krähe', 'Ast'], ['Taube', 'Flug'], ['Specht', 'Baum'], ['Storch', 'Nest'], ['Flamingo', 'Bein'], ['Pinguin', 'Eis'], ['Eisbär', 'Schnee'], ['Seehund', 'Strand'], 
                ['Orca', 'Meer'], ['Koralle', 'Riff'], ['Alge', 'Wasser'], ['Seetang', 'Küste'], ['Lotus', 'Teich'], ['Seerose', 'Blatt'], ['Magnolie', 'Blüte']];

const Cars = [];

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
    else if(theme === "cars") {
        list = Cars;
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