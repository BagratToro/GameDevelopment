let currentIndex = 0;
let gameList = [];
let wordList = [['Baum', 'Vogel'], ['Apfel', 'Birne'], ['Katze', 'Tiger'], ['Stuhl', 'Sessel'], ['Fluss', 'Bach'], ['Berg', 'Hügel'], ['Brille', 'Sonnenbrille'], ['Pizza', 'Flammkuchen'],
                ['Schnee', 'Eis'], ['Bus', 'Straßenbahn'], ['Haus', 'Hütte'], ['Lampe', 'Laterne'], ['Schwert', 'Dolch'], ['Stern', 'Planet'], ['Wald', 'Dschungel'], ['Tee', 'Kaffee'], ['See', 'Meer'], ['Ente', 'Gans'],
                ['Hund', 'Wolf'], ['Brot', 'Brötchen'], ['Schule', 'Universität'], ['Tür', 'Tor'], ['Krug', 'Becher'], ['Fahrrad', 'Motorrad'], ['Pferd', 'Esel'], ['Computer', 'Laptop'], ['Buch', 'Heft'],
                ['Messer', 'Gabel'], ['Regen', 'Niesel'], ['Auto', 'Lastwagen'], ['Hose', 'Jeans'], ['Burg', 'Schloss'], ['Gitarre', 'Geige'], ['Tasche', 'Rucksack'], ['Handschuh', 'Fausthandschuh'], ['Kanu', 'Kajak'],
                ['Sofa', 'Couch'], ['Sand', 'Staub'], ['Teller', 'Schüssel'], ['Kuchen', 'Torte'], ['Baum', 'Strauch'], ['Fisch', 'Delfin'], ['Hammer', 'Axt'], ['Löffel', 'Suppenkelle'], ['Kerze', 'Fackel'],
                ['Brief', 'Postkarte'], ['Blume', 'Blüte'], ['Hemd', 'TShirt'], ['Wolke', 'Nebel'], ['Zug', 'Straßenbahn'], ['Kirche', 'Kapelle'], ['Brunnen', 'Quelle'], ['Turm', 'Leuchtturm'], ['Brücke', 'Steg'], 
                ['Schloss', 'Schlüssel'], ['Bleistift', 'Kugelschreiber'], ['Sofa', 'Sessel'], ['Spiegel', 'Glas'], ['Zelt', 'Hütte'], ['Pfad', 'Straße'], ['Foto', 'Gemälde'], ['Pferd', 'Pony'],
                ['Sofa', 'Bank'], ['Mond', 'Sonne'], ['Flasche', 'Karaffe'], ['Telefon', 'Handy'], ['Lagerfeuer', 'Kamin'], ['Zwiebel', 'Knoblauch'], ['Kartoffel', 'Süßkartoffel'], ['Kuh', 'Ochse'],
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
                ['Flugzeug', 'Segelflugzeug'], ['Koffer', 'Rucksack'], ['Bank', 'Liegestuhl'], ['Schirm', 'Regenschirm'], ['Besen', 'Handfeger'], ['Bahn', 'SBahn'], ['Gabel', 'Essstäbchen'], ['Torte', 'Muffin'], 
                ['Stern', 'Komet'], ['Ball', 'Kugel'], ['Schuh', 'Sandale'], ['Keks', 'Waffel'], ['Tasse', 'Glas'], ['Teich', 'Pfütze'], ['Weg', 'Pfad'], ['Feuer', 'Glut'], ['Schnee', 'ReifNiederschlag'], 
                ['Turm', 'Antenne'], ['Lager', 'Vorrat'], ['Schlange', 'Wurm'], ['Pfeil', 'Speer'], ['Notiz', 'Liste'], ['Tier', 'Insekt'], ['Radio', 'Lautsprecher'], ['Salz', 'Zucker'], 
                ['Baumrinde', 'Holz'], ['Heizung', 'Ofen'], ['Orkan', 'Sturm'], ['Rose', 'Nelke'], ['Milch', 'Sahne'], ['Arzt', 'Chirurg'], ['Koch', 'Bäcker'], ['Bäcker', 'Konditor'], ['Zuckerwatte', 'Popcorn'], 
                ['Park', 'Garten'], ['Wassermelone', 'Honigmelone'], ['Zug', 'Dampfzug'], ['Käse', 'Quark'], ['Huhn', 'Hahn'], ['Hand', 'Handfläche'], ['Stein', 'Kiesel'], ['Schmetterling', 'Libelle'], 
                ['Wasser', 'Sprudelwasser'], ['Hose', 'Leggings'], ['Pullover', 'Strickjacke'], ['Tintenfisch', 'Kalmar'], ['Kabel', 'Verlängerungskabel'], ['Brunnen', 'Pumpe'], ['Blatt', 'Laub'], ['Berg', 'Vulkan'], 
                ['Boot', 'Fähre'], ['Insel', 'Halbinsel'], ['Fahrrad', 'Dreirad'], ['Katze', 'Luchs'], ['Maus', 'Hamster'], ['Wald', 'Forst'], ['Pfannkuchen', 'Waffel'], ['Topf', 'Kessel'], ['Karte', 'Eintrittskarte'], 
                ['Lampe', 'Laterne'], ['Flasche', 'Weinkaraffe'], ['Sonne', 'Stern'], ['Schrank', 'Vitrine'], ['Pfosten', 'Säule'], ['Glas', 'Kristallglas'], ['Uhr', 'Stoppuhr'], ['Fernseher', 'Monitor'], 
                ['Bank', 'Tresor'], ['Plakat', 'Poster'], ['Wand', 'Mauer'], ['Stroh', 'Heu'], ['Schlüssel', 'Zahlencode'], ['Kerze', 'Öllampe'], ['Wal', 'Blauwal'], ['Hund', 'Fuchs'], ['Schal', 'Tuch'], 
                ['Kürbis', 'Melone'], ['Brot', 'Baguette'], ['Eis', 'Sorbet'], ['Flasche', 'Milchkanne'], ['Leiter', 'Gerüst'], ['See', 'Bucht'], ['Wiese', 'Rasen'], ['Huhn', 'Truthahn'], ['Auto', 'Sportwagen'], 
                ['Spiegel', 'Lupenspiegel'], ['Stein', 'Felsen'], ['Wolke', 'Gewitterwolke'], ['Sand', 'Kies'], ['Holz', 'Sperrholz'], ['Perle', 'Edelstein'], ['Ananas', 'Kokosnuss'], 
                ['Zahnarzt', 'Kieferorthopäde'], ['Kleber', 'Klebeband'], ['Kamera', 'Videokamera'], ['Zelt', 'Pavillon'], ['Fenster', 'Dachfenster'], ['Hose', 'Jogginghose'], ['Korb', 'Einkaufstasche'], 
                ['Kissen', 'Decke'], ['Lampe', 'Kerzenhalter'], ['Ring', 'Armband'], ['Tasche', 'Einkaufskorb'], ['Salat', 'Spinat'], ['Pflaume', 'Zwetschge']];

function zeigeNachricht() {
  document.getElementById('message').textContent = "Du hast den Knopf gedrückt!";
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
        let numPlayer = handleInput();
        let wordPaire = choosePaire(wordList);
        document.getElementById("start").style.display = "none";
        document.getElementById("numPlayer").style.display = "none";
        document.getElementById("output").style.display = "inline";
        document.getElementById("output").textContent = "Nächster Spieler";
        gameList = createList(numPlayer, wordPaire[0], wordPaire[1]);
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
    }
}
