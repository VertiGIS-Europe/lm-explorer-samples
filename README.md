# LM Explorer - Entwicklung von Werkzeugen

Dieses Projekt stellt eine Azure‑basierte Umgebung für die Erstellung,
Integration und Verwaltung von Werkzeugen im LM Explorer bereit.

Der LM Explorer ermöglicht es Entwicklern, spezialisierte Benutzeroberflächen
und fachliche Funktionalitäten für unterschiedliche Werkzeuge zu entwickeln und
in eine gemeinsame Plattform zu integrieren. Ziel ist es, individuelle
Fachwerkzeuge flexibel zusammenzustellen und nahtlos in bestehende
Arbeitsabläufe einzubinden.

Das Kernstück der Entwicklung basiert auf aktuellen Standards der
Webentwicklung. Dadurch können mehrere Werkzeuge zu individuell auf den
jeweiligen Arbeitsprozess zugeschnittenen Workflows zusammengefasst werden.
Häufig wiederkehrende Arbeitsprozesse lassen sich so effizient bündeln,
vereinfachen und reproduzierbar gestalten.
Der modulare Ansatz des LM Explorers fördert:

* Wiederverwendbarkeit von Werkzeugen
* Erweiterbarkeit der Plattform
* Konsistente Benutzerführung
* Reduzierung manueller Arbeitsschritte

## Zielsetzung

* Zentrale Plattform für die Entwicklung und Nutzung von Fachwerkzeugen
* Modularer Aufbau zur einfachen Erweiterbarkeit
* Vereinheitlichte Benutzeroberfläche für verschiedene Werkzeuge
* Effizienzsteigerung durch workfloworientierte Zusammenstellung von Tools
* Trennung von Infrastruktur, Fachlogik und UI

## Funktionsumfang

* Verwaltung und Integration mehrerer Werkzeuge im LM Explorer
* Entwicklung spezialisierter Benutzeroberflächen
* Zusammenfassung mehrerer Werkzeuge zu individuellen Workflows
* Unterstützung wiederkehrender Arbeitsprozesse
* Zentrale Konfiguration und Versionierung
* Skalierbare Azure‑Infrastruktur

## Technologie‑Stack LM Explorer

Der LM Explorer basiert auf einem modernen Technologie‑Stack, der auf bewährten
Technologien und aktuellen Webstandards aufsetzt. Der Fokus liegt auf
Modularität, Wartbarkeit und Erweiterbarkeit.

### Backend

* Java als primäre Backend‑Programmiersprache
* Service‑orientierte Architektur
* Bereitstellung von REST‑basierten APIs
* Klare Trennung von Fachlogik, Datenzugriff und Infrastruktur
* Unterstützung von versionierten Schnittstellen

### Frontend

* JavaScript und TypeScript als Grundlage der Frontend‑Entwicklung
* Vue.js als zentrales Framework für die Benutzeroberfläche
* Komponentenbasierter Aufbau zur Integration mehrerer Werkzeuge
* PrimeVue als UI‑Komponentenbibliothek
  * Einheitliches Design
  * Wiederverwendbare UI‑Komponenten
  * Hohe Konsistenz der Benutzeroberfläche
* Umsetzung moderner Webstandards (HTML5, CSS3)
* Responsive Design für unterschiedliche Bildschirmgrößen

## Entwicklung

### Getting Started

Dieser Abschnitt beschreibt die grundlegenden Schritte, um den LM Explorer lokal
zu installieren, zu starten und weiterzuentwickeln.

Voraussetzungen
Stelle sicher, dass folgende Komponenten installiert und konfiguriert sind:

Allgemein

* Git
* Zugriff auf die Azure Subscription (für Cloud‑Ressourcen)

Backend

* Java JDK (empfohlen: LTS‑Version)
* Maven

Frontend

* Node.js (LTS empfohlen)
* npm

```text
git clone https://github.com/<organisation>/<repository>.git
cd <repository>
```

```text
/Beispielwerkzeug
├── .vscode/
├── install/
├── src/          # Vue.js Frontend mit PrimeVue
└── CODE_OF_CONDUCT.md
└── LICENCE.md
└── README.md
```

## Build and Test

Der Build‑ und Test‑Prozess stellt sicher, dass der LM Explorer konsistent,
reproduzierbar und qualitativ hochwertig entwickelt und ausgeliefert wird.
Backend und Frontend werden unabhängig voneinander gebaut und getestet, können
jedoch im CI/CD‑Prozess gemeinsam ausgeführt werden.

__Build Backend (Java)__
Das Backend wird als Java‑Anwendung gebaut und paketiert.

* Kompilierung des Quellcodes
* Auflösung aller Abhängigkeiten
* Erstellung eines deploybaren Artefakts (z. B. JAR oder WAR)
* Validierung der Projektstruktur und Konfiguration

__Frontend (Vue.js)__
Das Frontend wird separat gebaut und für die Auslieferung optimiert.

* Transpilierung von TypeScript
* Bündelung und Optimierung der Assets
* Erstellung eines produktionsreifen Builds
* Integration der PrimeVue‑Komponenten

## Test

__Frontend‑Tests__
Das Frontend kann automatisierte getestet werden, um Stabilität der
Benutzeroberfläche sicherzustellen.

* Unit‑Tests für Komponenten und Services
* Validierung von UI‑Logik und Zuständen

## Richtlinien

### Entwicklungsrichtlinien

1. Forken Sie das Repository
2. Erstellen Sie einen Feature-Branch (`git checkout -b feature/AmazingFeature`)
3. Committen Sie Ihre Änderungen (`git commit -m 'Add some AmazingFeature'`)
4. Pushen Sie den Branch (`git push origin feature/AmazingFeature`)
5. Öffnen Sie einen Pull Request

### Code-Standards

* Dokumentieren Sie APIs und komplexe Funktionen
