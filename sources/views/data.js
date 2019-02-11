import { JetView } from "webix-jet";
import CommonTable from "./commonTable";
import { countries } from "models/countries";
import { statuses } from "models/statuses";

export default class DataTab extends JetView {
	config() {

		const _ = this.app.getService("locale")._;

		return {
			rows: [
				{
					template: _("Data"),
					height: 40,
					css: "header-tabs-styles",
				},
				{
					cols: [
						{
							view: "list",
							localId: "userList",
							scroll: false,
							select: true,
							template: "#title#",
							data: [
								{ id: "Countries", title: _("Countries") },
								{ id: "Statuses", title: _("Statuses") },
							],
							on: {
								"onAfterSelect": function (id) {
									this.$scope.getRoot().queryView({ id: id }).show();
								},
							}
						},
						{
							cells: [
								{ id: "Countries", $subview: new CommonTable(this.app, "", countries, "addcountry") },
								{ id: "Statuses", $subview: new CommonTable(this.app, "", statuses, "addstatus") },
							],
						},
					],
				},
			]
		};
	}

	ready() {
		const list = this.getRoot().queryView("list");
		const firstIDList = list.getFirstId();
		list.select(firstIDList);
	}
}