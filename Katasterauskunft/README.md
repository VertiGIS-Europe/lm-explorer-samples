# Demo Werkzeug "Katasterauskunft"

## Entwicklungsumgebung einrichten

- Es wird **VS Code** sowie **Node.js** vorausgesetzt.
- Das Laden der Dependencies erfolt über `npm ci`.

## Build

Das Projekt wird über Webpack gebaut. Hierfür stehen zwei Skripte zur Verfügung:

- `npm run dev` Build im Rahmen einer Entwicklungsumgebung -> Ergebnis wird direkt in das konfigurierte ASmobile Verzeichnis published.
- `npm run build` Build für eine Produktionsumgebung -> Ergebnis liegt im Verzeichnis `build`.

## Installation und Konfiguration

- Es muss zwingend ein ASmobile verwendet werden, das auf dem Branch `342681_Werkzeug_fuer_Intergeo` gebaut worden ist, da nur dort die für das Werkzeug benötigten Erweiterungen abgelegt worden sind.
- Zur Installation müssen die gebauten Sourcen nach ASmobile kopiert werden in das Verzeichnis `scripts/vertigis`.
- Für die Konfiguration steht eine URM Import Datei zur Verfügung (➡ [R_MobileWerkzeuge_Demo_Katasterauskunft.xml] (/install/R_MobileWerkzeuge_Demo_Katasterauskunft.xml)). Diese kann als Ressource importiert werden und beinhaltet das Mobile Werkzeug.
- Abschließend muss das mobile Werkzeug einer Anwendung zugewiesen werden.
