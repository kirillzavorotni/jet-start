import { JetView } from "webix-jet";

export default class CommonTable extends JetView {
  constructor(app, name, data) {
    super(app, name);
    this._tdata = data;
  }
  config() {
    return {
      rows: [
        {
          view: "datatable",
          autoConfig: true,
        },
        {
          cols: [
            {
              view: "button",
              label: "Add",
              type: "form",
            },
            {
              view: "button",
              label: "Delete",
            },
          ]
        },
      ],
    };
  }

  init(view) {
    view.queryView("datatable").parse(this._tdata);
  }
}