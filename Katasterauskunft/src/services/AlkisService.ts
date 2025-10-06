export default class AlkisService {
	private readonly alkisLiegenschaftskarteUrl: string;
	private readonly configId: string;

	constructor(serviceUrl: string, configId: string) {
		this.alkisLiegenschaftskarteUrl = serviceUrl + "/products/ALKISLiegenschaftskarte";
		this.configId = configId;
	}

	async createLiegenschaftskarte(flurstueckId: string): Promise<void> {
		let url = this.alkisLiegenschaftskarteUrl + "?service=" + this.configId + "&landparcel=" + flurstueckId + "&guiproduct=LK.GDBNRW.A.F";
		const response = await fetch(url);
		if (response.ok) {
			const pdfBlob = await response.blob();
			const pdfUrl = URL.createObjectURL(pdfBlob);
			window.open(pdfUrl, "_blank");
		} else {
			console.error("Fehler beim Anfragen der Liegenschaftskarte", response);
			throw new Error("Fehler beim Anfragen der Liegenschaftskarte");
		}
	}
}
