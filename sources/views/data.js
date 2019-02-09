import { JetView } from "webix-jet";
import CommonTable from "./commonTable";
import { countries } from "models/countries";
import { statuses } from "models/statuses";

export default class DataTab extends JetView {
	config() {
		return {
			rows: [
				{
					template: "Data",
					height: 40,
					css: "header-tabs-styles",
				},
				{
					cols: [
						{
							view: "list",
							id: "userList",
							scroll: false,
							select: true,
							data: ["Countries", "Statuses"],
							on: {
								"onAfterSelect": function(id){
									$$(id).show();
								},
							}
						},
						{
							cells: [
								{ id: "Countries", $subview: new CommonTable(this.app, "", countries) },
								{ id: "Statuses", $subview: new CommonTable(this.app, "", statuses) },
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