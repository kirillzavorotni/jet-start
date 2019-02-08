import { JetView } from "webix-jet";

export default class StartPage extends JetView {
  config() {
    return {
      cols: [
        {
          rows: [
            { template: "Contacts", height: 40, css: "header-tabs-styles" },
            { $subview: "userContactList", name: "list" },
          ],
        },
        {
          rows: [
            { $subview: "userForm", name: "form" },
            { view: "template" },
          ],
        },
      ],
    }
  }
  ready() {
    const list = this.getSubView("list").getRoot();
    this.getSubView("form").bindWith(list);
    list.select(1);
  }
}
