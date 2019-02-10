import { JetView } from "webix-jet";

export default class SettingsView extends JetView {
	config() {
		const _ = this.app.getService("locale")._;
		const lang = this.app.getService("locale").getLang();

		return {
			view: "segmented",
			options: [
				{ id: "ru", value: "RU" },
				{ id: "en", value: "ENG" },
			],
			value: lang,
			click: () => {
				this.toggleLanguage();
			},
		};
	}

	toggleLanguage(){
		const langs = this.app.getService("locale");
		const value = this.getRoot().getValue();
		langs.setLang(value);
	}
}