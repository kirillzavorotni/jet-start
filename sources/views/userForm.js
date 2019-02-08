import { JetView } from "webix-jet";
import CommonComboBox from "./commonComboBox";
import { countries } from "models/countries";
import { statuses } from "models/statuses";

export default class UserForm extends JetView {
	config() {
		return {
			view: "form",
			elements: [
				{ view: "text", label: "UserName", name: "Name" },
				{ view: "text", label: "Email", name: "Email" },
				{ $subview: new CommonComboBox(this.app, "", countries, "Country") },
				{ $subview: new CommonComboBox(this.app, "", statuses, "Status") },
			],
			elementsConfig: {
				labelPosition: "top",
			}
		};
	}
	bindWith(widget) {
		this.getRoot().bind(widget);
	}
}
