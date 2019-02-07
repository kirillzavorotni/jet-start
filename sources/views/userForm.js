import { JetView } from "webix-jet";
// import { contacts } from "models/contacts";

export default class UserForm extends JetView {
	config() {
		return {
			view: "form",
			elements: [
				{ view: "text", label: "UserName", name: "Name" },
				{ view: "text", label: "Email", name: "Email" },
			],
		};
	}
}