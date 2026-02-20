# 🚚 CoreX JTL Shipping Countdown

**Maximiere deine Conversion-Rate mit dem intelligenten Versand-Timer für JTL-Shop 5. Zeige deinen Kunden exakt, wie viel Zeit sie für den heutigen Versand haben.**

## 🌟 Features
- **Smart Logic**: Automatische Umschaltung zwischen "Heutigem Versand" (bis 10:00 Uhr) und "Morgigem Versand" (bis Mitternacht).
- **Zero-AJAX**: Keine Serverlast – die Berechnung findet performant direkt im Browser des Kunden statt.
- **Auto-Hide**: Blendet den Standard-Lieferstatus automatisch aus, um Redundanz zu vermeiden und ein cleanes UI zu schaffen.
- **Safety First**: Deaktiviert sich automatisch am Wochenende (Samstag/Sonntag) und bei fehlendem Lagerbestand.
- **CoreX-Clean-Code**: Keine Umlaute im Smarty-Code zur Vermeidung von Encoding-Fehlern (UTF-8/ANSI).

## 🛠 Installation

### 1. JTL-Dropper Setup
Erstelle einen neuen Drop (Typ: Eigener Code) mit dem Namen `Corex: Shipping-Timer-HighSpeed`.

### 2. Code einfügen
Kopiere den Inhalt der `corex-shipping-timer.js` in den Drop. Das Script nutzt die globale `$Artikel->fLagerbestand` Variable für maximale Kompatibilität.

### 3. Konfiguration
Die Versand-Deadline ist standardmäßig auf **10:00 Uhr** eingestellt. Du kannst diesen Wert im Script einfach anpassen:
`var deadline = 10;`

## 💎 Über CoreX-Systems
Entwickelt nach den CoreX-Richtlinien für JTL-Shops:
- Minimale DOM-Interaktion via MutationObserver.
- Konfliktfreies Script-Design.
- Fokus auf Verkaufspsychologie und Performance.

---
Developed with ❤️ by **CoreX-Systems** (GitHub: Corex-Systems)
