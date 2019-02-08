import { JetView } from "webix-jet";

export default class CommonComboBox extends JetView {
	constructor(app, name, data, label) {
		super(app, name);
		this._cdata = data;
		this._label = label;
	}
	config() {
		return {
			view: "combo",
			placeholder: "Options",
			label: this._label,
			options: this._cdata,
		};
	}

	// init(view) {
	// 	view.queryView("combo").parse(this._cdata);
	// }
}
