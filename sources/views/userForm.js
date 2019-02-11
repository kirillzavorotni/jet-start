import { JetView } from "webix-jet";
import { countries } from "models/countries";
import { statuses } from "models/statuses";
import { contacts } from "models/contacts";

export default class UserForm extends JetView {
	config() {

		const _ = this.app.getService("locale")._;

		return {
			view: "form",
			elements: [
				{ view: "text", label: _("UserName"), name: "Name" },
				{ view: "text", label: _("Email"), name: "Email" },
				{
					view: "combo",
					localId: "combo1",
					placeholder: _("Options"),
					label: _("Country"),
					suggest: {
						data: countries,
						body: {
							template: "#Name#",
						}
					},
					labelPosition: "left",
				},
				{
					view: "combo",
					localId: "combo2",
					placeholder: _("Options"),
					suggest: {
						data: statuses,
						body: {
							template: "#Name#",
						}
					},
					label: _("Status"),
					labelPosition: "left",
				},
				{
					cols: [
						{ view: "spacer" },
						{
							view: "button",
							label: _("Save"),
							type: "form",
							width: 150,
							click: () => {
								const formValues = this.getRoot().getValues();
								contacts.updateItem(formValues.id, formValues);
							},
						},
					],
				},
			],
			elementsConfig: {
				labelPosition: "top",
			}
		};
	}

	urlChange() {
		contacts.waitData.then(() => {
			const parent = this.getParentView();
			const id = parent.getParam("id");
			if (id && parent.$$("userContactList").exists(id)) {
				const item = contacts.getItem(id);
				this.getRoot().setValues(item);
			} else {
				parent.setParam("id", 1, true);
			}
		});
	}
}
