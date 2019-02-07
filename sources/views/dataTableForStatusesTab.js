import { JetView } from "webix-jet";
import { statuses } from "models/statuses";

export default class dataTableForStatusesTab extends JetView {
  config() {
    return {
      view: "datatable",
      id: "statuses",
      columns: [
        { id: "Name", header: "Name" },
        { id: "Icon", header: "Icon" },
      ],
      scroll: false,
    };
  }

  init(view) {
    view.parse(statuses);
  }
}