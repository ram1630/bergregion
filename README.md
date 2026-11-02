# Touristikseite (Demo)

Fiktive Webseite eines Tourismusanbieters („Hochalp Erlebnis“). Sie ist das Beispiel für ein
Kundenprojekt mit ganzer Webseite: Die Seite bringt ihre eigene 360engine im Unterordner mit.

Alle Angaben sind erfunden, „Hochalp Erlebnis“ ist kein echtes Unternehmen.

Online: https://ram1630.github.io/bergregion/

## Aufbau

| Pfad | Zweck |
|---|---|
| `index.html` | Die Webseite |
| `360engine/` | Eigene Kopie des Panoramaviewers mit den Bildern dieser Seite |

## Einbettung

```html
<iframe src="360engine/?scene=berg&amp;nav=0&amp;autorotate=-2"
        title="360°-Panorama der Bergstation" allowfullscreen loading="lazy"></iframe>
```

Direkt aufrufbar (z. B. zum Einbetten auf anderen Seiten): https://ram1630.github.io/bergregion/360engine/
