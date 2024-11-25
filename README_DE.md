# Wetter-CLI

Hol dir den aktuellen Wetterbericht - von deinem Terminal aus!

## Was du tun wirst

Du wirst eine CLI-Anwendung schreiben, die eine externe API nutzt, um Wetterinformationen zu erhalten.

Der Benutzer gibt einen Städtenamen an, wenn er das Programm startet. Dein Programm muss diesen Städtenamen in seiner Anfrage verwenden - und die Ergebnisse im Terminal ausgeben.

### Beispiel

###### Befehl

```bash
$ node weather.js manchester
```

###### Antwort

```bash
@@@@@@@@@@@@@@@@@@@
@ WETTERPROGRAMM @
@@@@@@@@@@@@@@@@@@@

Es ist jetzt 15,25°C in Manchester

Die aktuellen Wetterbedingungen sind: vereinzelte Wolken
```

## Aufgaben

### Aufgabe 1 - Eine API erhalten

1. Es gibt viele Wetter-APIs, wähle eine aus. Melde dich für ein kostenloses Konto bei **einer** API aus der Liste unten an oder finde deine eigene;

   - [OpenWeatherMap API](https://openweathermap.org/)
   - [Wetter-API](https://www.weatherapi.com/)

2. Notiere dir deinen API-Schlüssel. Du wirst ihn später brauchen.
3. Lies dir die API-Dokumentation durch, um zu verstehen, wie du sie benutzen kannst.

### Aufgabe 2 - Einrichten des Projekts

1. Richte `npm` mit dem Befehl `npm init -y` ein
2. Installiere die `axios` Bibliothek - wir werden sie benutzen, um unsere Netzwerkanfragen zu erstellen
3. Installiere die `dotenv` Bibliothek - damit erstellen wir unsere Umgebungsvariablen
4. Erstelle die Datei "weather.js".

### Aufgabe 2 - Der API-Schlüssel

1. Erstelle die Datei `.env`
2. In dieser Datei speicherst du deinen API-Schlüssel

   ###### Beispiel

   ```Text
   KEY = 32476f984jf83jf9fdksu32928475
   ```

3. Erstelle eine `.gitignore` Datei und füge den Verweis `.env` hinzu

### Aufgabe 3 - Den Antrag stellen

Innerhalb von `weather.js`;

1. Lies die Stadt vom Benutzer ab
   > Tipp: Du kannst `process.argv` verwenden.
2. Importiere und verwende die [dotenv](https://github.com/motdotla/dotenv) Bibliothek, um den API-Schlüssel aus deiner "process.env"-Umgebung zu lesen.
3. Importiere und verwende die [axios](https://github.com/axios/axios) Bibliothek, um die Informationen von der API abzufragen

### Aufgabe 4 - Die Ausgabe

Lies die von deiner API zurückgegebenen Daten durch und zeige sie an;

- Den Namen der Stadt
- Die aktuelle Temperatur
- Die aktuellen Wetterbedingungen
- Alles andere, was du hinzufügen möchtest

> Tipp: Du könntest auch die [colors.js](https://github.com/Marak/colors.js) Bibliothek verwenden, um deine Ausgabe fabelhaft zu gestalten 🤩!

## Bonus-Aufgaben

Dein Programm sollte auch in der Lage sein;

- eine 5-Tage-Vorhersage anzeigen
- Zwischen **metrischen** und **imperialen** Messungen umschalten können
