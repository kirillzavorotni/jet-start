import { JetView } from "webix-jet";
import { contacts } from "models/contacts";

export default class UserContactsList extends JetView {
	config() {
		return {
			view: "list",
			select: true,
			template: function(obj){
				const template = `
				<div class="user-contact">
					<div class="circle"></div>
					<span class="user-name-text">${obj.Name}</span>
					<p class="user-email-text">${obj.Email}</p>
				</div>
				`;
				return template;
			},
			scroll: false,
			type: {
				height: 60,
			},
		};
	}
	init(view) {
		view.parse(contacts);
	}
}