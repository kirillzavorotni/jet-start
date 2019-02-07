import { JetView } from "webix-jet";
import { countries } from "models/countries";

export default class dataTableForStatusesTab extends JetView {
  config() {
    return {
      view: "datatable",
      id: "countries",
      columns: [
        { id: "id", header: "Short Name" },
        { id: "Name", header: "Full Name" },
      ],
      scroll: false,
    };
  }

  init(view) {
    view.parse(countries);
  }
}