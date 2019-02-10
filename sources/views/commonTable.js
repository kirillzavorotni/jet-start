import { JetView } from "webix-jet";

export default class CommonTable extends JetView {
  constructor(app, name, data) {
    super(app, name);
    this._tdata = data;
  }
  config() {

    const _ = this.app.getService("locale")._;

    return {
      rows: [
        {
          view: "datatable",
          columns: [
            { header: _("Name"), id: "Name", fillspace: true },
            { header: _("Icon"), id: "Icon" },
          ],
        },
        {
          cols: [
            {
              view: "button",
              label: _("Add"),
              type: "form",
            },
            {
              view: "button",
              label: _("Delete"),
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