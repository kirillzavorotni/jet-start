import { JetView } from "webix-jet";

export default class StartPage extends JetView {
  config() {
    return {
      cols: [
        {
          rows: [
            { template: "Contacts", height: 40, css: "header-tabs-styles" },
            { $subview: "userContactList", name: "list" },
            {
              view: "button", id: "addUserButton", label: "Add", type: "form", click: () => this.doClick(),
            },
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
    this.list = this.getSubView("list").getRoot();
    this.getSubView("form").bindWith(this.list);
    this.list.select(1);
  }
  doClick() {
    const names = ['Kirill Zavorotny', 'Olga Melichova', 'Andrew Braim', 'Vladimir Mucha'];
    const emails = ["kirill@gmail.com", "olga@gmail.com", "andrew@gmail.com", "vladimir@gmail.com"];
    const randomeValue = Math.floor(Math.random() * 4);
    const item = {
      Name: names[randomeValue],
      Email: emails[randomeValue],
    };
    this.list.add(item);
  }
}
