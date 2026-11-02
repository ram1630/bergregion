# 360engine

Ein einfacher 360°-Panoramaviewer, ähnlich wie Google Street View, als statische HTML-Seite.
Er basiert auf [Pannellum](https://pannellum.org/) und lässt sich per `<iframe>` in Webseiten einbetten.

Jedes Projekt (Pixora-Webseite, Kundenprojekte, Demos) hat seine eigene Kopie dieses Ordners.
So kann jedes Projekt eigene Bilder und bei Bedarf eigene Zusatzfunktionen erhalten.

## Dateien

| Datei | Zweck |
|---|---|
| `index.html` | Der Viewer (Engine-Code) |
| `panoramen.js` | Liste der Panoramen dieses Projekts (hier neue Bilder eintragen) |
| `embed-beispiel.html` | Beispiele zum Einbetten und Übersicht der URL-Parameter |
| `images/` | Die Bilder dieses Projekts |

## Lokal testen

Der Viewer braucht einen kleinen Webserver, weil Browser Bilder per `file://` nicht in WebGL laden.
Im Projektordner (eine Ebene über `360engine/`) ausführen:

```bash
python -m http.server 8000
```

Danach im Browser `http://localhost:8000/360engine/` öffnen.

## Einbetten

Innerhalb der eigenen Webseite (Viewer liegt im Unterordner):

```html
<iframe src="360engine/?scene=berg&amp;nav=0&amp;autorotate=-2"
        title="360°-Panorama" allowfullscreen loading="lazy"></iframe>
```

Auf einer fremden Webseite – dieser Code bringt seine Gestaltung selbst mit
(passt sich der Seitenbreite an, höchstens 900 px, Format 16:9):

```html
<div style="position:relative; width:100%; max-width:900px; aspect-ratio:16/9; border-radius:12px; overflow:hidden;">
  <iframe src="https://ADRESSE-DES-PROJEKTS/360engine/?scene=berg&amp;nav=0&amp;autorotate=-2"
          title="360°-Panorama"
          style="position:absolute; inset:0; width:100%; height:100%; border:0;"
          allowfullscreen loading="lazy"></iframe>
</div>
```

Im Viewer erzeugt die Schaltfläche **</>** den passenden Code mit der richtigen Adresse für die aktuelle Ansicht.

URL-Parameter: `scene`, `yaw`, `pitch`, `hfov`, `nav=0` (Navigation ausblenden), `autorotate=<Grad/s>`.

## Private Bilder

Bilder, die nicht veröffentlicht werden dürfen, in `.gitignore` eintragen (Pfad relativ zu diesem Ordner, z. B. `images/privat.jpg`).
