import { createApp } from "vue";
import PrimeVue from "primevue/config";
import Material from "@primeuix/themes/material";
import { de } from "primelocale/js/de.js";

import Katasterauskunft from "@components/Katasterauskunft.vue";
import { definePreset } from "@primeuix/themes";

/**Berechnung der Color-Palette über console.log(palette("#138943")); */
const preset = definePreset(Material, {
	semantic: {
		primary: {
			50: "#f3f9f6",
			100: "#c6e3d2",
			200: "#9accae",
			300: "#6db68a",
			400: "#409f67",
			500: "#138943",
			600: "#107439",
			700: "#0d602f",
			800: "#0a4b25",
			900: "#08371b",
			950: "#052211",
		},
	},
});

const themeConfig = {
	theme: {
		preset: preset,
		options: {
			darkModeSelector: "light-mode", // Damit immer der Light-Mode verwendet wird
		},
	},
	ripple: true,
	locale: de,
};

/**
 * Statische Klasse zum Erzeugen von Vue-Komponenten. Dient als Fassade, um die Vue-abhängige Logik zu kapseln.
 */
export default class Components {
	/**
	 * Erzeugt eine Instanz der Katasterauskunft-Komponente.
	 * @param aDivId ID des Div-Elements, in dem die Komponente erzeugt werden soll
	 * @param aIdPrefix Präfix für die ID der Komponente
	 * @param alkisServiceUrl URL des ALKIS-Webservices
	 */
	static createKatasterauskunft(aDivId: string, aIdPrefix: string, alkisServiceUrl: string) {
		let id = "katasterauskunft";
		if (aIdPrefix) {
			id = aIdPrefix + "_" + id;
		}
		let app = createApp(Katasterauskunft, { id: id, alkisServiceUrl: alkisServiceUrl });
		app.use(PrimeVue, themeConfig);
		app.mount(aDivId);
	}
}
