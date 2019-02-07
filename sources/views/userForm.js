import { JetView } from "webix-jet";

export default class UserForm extends JetView {
	config() {
		return {
			view: "form",
			elements: [
				{ view: "text", label: "UserName", name: "Name" },
				{ view: "text", label: "Email", name: "Email" },
			],
			elementsConfig: {
				labelPosition: "top",
			}
		};
	}
}
