// Konfiguration aller Panoramen.
// Neue Panoramen: Bild in den Ordner "images" legen und hier einen Eintrag ergänzen.
//
// Felder pro Panorama:
//   id      – Kurzname, wird in der URL verwendet (?scene=berg)
//   titel   – Anzeigename
//   bild    – Pfad zum Bild
//   haov    – horizontaler Bildwinkel in Grad (360 = volles Rundum-Bild)
//   vaov    – vertikaler Bildwinkel in Grad (180 = volles Kugelpanorama)
//   yaw     – Startblickrichtung (optional)
//   hotspots – Verknüpfungen zu anderen Panoramen (optional), z. B.
//              [{ pitch: -5, yaw: 40, text: "Zum Wohnzimmer", scene: "wohnzimmer" }]
//
// Hinweis: Handy-Panoramen sind meist keine vollen 360°. Der vertikale Winkel
// ergibt sich ungefähr aus: vaov = haov * Bildhöhe / Bildbreite.

window.PANORAMEN = {
  start: "berg",
  szenen: [
    {
      id: "berg",
      titel: "Bergstation",
      bild: "images/IMG-20261005-WA0005.jpg",
      haov: 240,
      vaov: 55.5,
      yaw: 0,
      hotspots: []
    }
  ]
};
