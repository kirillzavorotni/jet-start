import { JetView } from "webix-jet";
import { countries } from "models/countries";
import { statuses } from "models/statuses";
// import { contacts } from "models/contacts";

export default class UserForm extends JetView {
	config() {

		return {
			view: "form",
			elements: [
				{ view: "text", label: "UserName", name: "Name" },
				{ view: "text", label: "Email", name: "Email" },
				{
					view: "combo",
					localId: "combo1",
					placeholder: "Options",
					label: "Country",
					options: countries,
				},
				{
					view: "combo",
					localId: "combo2",
					placeholder: "Options",
					label: "Status",
					options: statuses,
				},
				{
					cols: [
						{ view: "spacer" },
						{
							view: "button",
							label: "Save",
							type: "form",
							width: 150,
							// updateItem for collection
							click: () => {
								// console.log(this.getParentView().getRoot().queryView("list").data.pull);
							},
						},
					],
				},
			],
			rules: {
				Name: webix.rules.isNotEmpty,
			},
			elementsConfig: {
				labelPosition: "top",
			}
		};
	}

	urlChange() {
		const parent = this.getParentView();
		const id = parent.getParam("id");

		if (id && parent.$$("userContactList").exists(id)) {
			const item = parent.$$("userContactList").getItem(id);
			this.getRoot().setValues(item);
		} else {
			parent.setParam("id", 1, true);
		}
	}
}
