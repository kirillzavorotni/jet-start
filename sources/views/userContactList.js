import { JetView } from "webix-jet";
import { contacts } from "models/contacts";

export default class UserContactsList extends JetView {
	config() {
		return {
			view: "list",
			id: "userContactList",
			select: true,
			width: 230,
			template: `
				<span class='user-icon webix_icon wxi-radiobox-blank'></span>
				<div class="user-info-container">
					<div class="user-name">#Name#</div>
					<div class="user-email">#Email#</div>
				</div>
				<span class='removeElement webix_icon wxi-trash'></span>
			`,
			scroll: false,
			type: {
				height: 60,
			},
			css: "user-list",
			autoheight: false,
			onClick: {
				"removeElement": function (e, id) {
					this.remove(id);
					return false;
				},
			},
		};
	}
	init(view) {
		view.parse(contacts);
	}
}