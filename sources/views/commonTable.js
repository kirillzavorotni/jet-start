import { JetView } from "webix-jet";

export default class CommonTable extends JetView {
  constructor(app, name, data, addName) {
    super(app, name);
    this._tdata = data;
    this._addName = addName;
  }
  config() {
    const _ = this.app.getService("locale")._;
    return {
      rows: [
        {
          view: "datatable",
          select: "row",
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
              click: () => {
                this.addElement();
              }
            },
            {
              view: "button",
              label: _("Delete"),
              click: () => {
                this.deleteElement();
              }
            },
          ]
        },
      ],
    };
  }

  init(view) {
    view.queryView("datatable").sync(this._tdata);
  }

  addElement() {
    if (this._addName === "addcountry") {
      const countries = ["USA", "Moldova", "Belarus", "Russia", "Canada", "Polsha"];
      const randValue = Math.floor(Math.random() * 6);
      const elem = {
        Name: countries[randValue],
      };
      this._tdata.add(elem);
    }

    if (this._addName === "addstatus") {
      const statuses = ["Busy", "Open"];
      const randValue = Math.floor(Math.random() * 2);
      const elem = {
        Name: statuses[randValue],
      };
      this._tdata.add(elem);
    }
  }

  deleteElement() {
    const table = this.getRoot().queryView("datatable");
    this._tdata.remove(table.getSelectedItem().id);
  }
}