import { JetView } from "webix-jet";
import { contacts } from "models/contacts";
// import userForm from "./userForm";

export default class StartPage extends JetView {
  config() {

    const list = {
      view: "list",
      localId: "userContactList",
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
          contacts.remove(id);
        },
      },
      on: {
        onAfterSelect: (id) => {
          this.setParam("id", id, true);
        },
      },
    };

    return {
      cols: [
        {
          rows: [
            { template: "Contacts", height: 40, css: "header-tabs-styles" },
            list,
            {
              view: "button", localId: "addUserButton", label: "Add", type: "form", click: () => this.doClick(),
            },
          ],
        },
        {
          rows: [
            { $subview: "userForm", name: "form" },
            // or use userForm from import define top,
            { view: "template" },
          ],
        },
      ],
    }
  }

  init() {
    this.$$("userContactList").parse(contacts);
  }

  urlChange() {
    const id = this.getParam("id");
    const list = this.$$("userContactList");
    if (id && list.exists(id)) {
      list.select(id);
    }
  }

  doClick() {
    const names = ['Kirill Zavorotny', 'Olga Melichova', 'Andrew Braim', 'Vladimir Mucha'];
    const emails = ["kirill@gmail.com", "olga@gmail.com", "andrew@gmail.com", "vladimir@gmail.com"];
    const randomeValue = Math.floor(Math.random() * 4);
    const item = {
      Name: names[randomeValue],
      Email: emails[randomeValue],
    };

    contacts.add(item);
  }
}
