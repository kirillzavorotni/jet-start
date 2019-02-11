import { JetView } from "webix-jet";
import { contacts } from "models/contacts";

export default class StartPage extends JetView {
  config() {
    const _ = this.app.getService("locale")._;

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
      scroll: true,
      type: {
        height: 60,
      },
      css: "user-list",
      autoheight: false,
      onClick: {
        "removeElement": function (e, id) {
          contacts.remove(id);
          if (!contacts.getFirstId()) {
            this.$scope.getSubView("form").getRoot().clear();
          } else {
            this.select(contacts.getFirstId())
          }
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
            { template: _("Contacts"), height: 40, css: "header-tabs-styles" },
            list,
            {
              view: "button", localId: "addUserButton", label: _("Add"), type: "form", click: () => this.doClick(),
            },
          ],
        },
        {
          rows: [
            { $subview: "userForm", name: "form", },
            { view: "template" },
          ],
        },
      ],
    };
  }

  init() {
    const list = this.$$("userContactList");

    list.sync(contacts);

    contacts.waitData.then(() => {

      const id = this.getParam("id");

      if (id && list.exists(id)) {
        list.select(id);
      } else {
        list.select(list.getFirstId());
      }
    });
  }

  urlChange() {

  }

  doClick() {
    const names = ["Kirill Zavorotny", "Olga Melichova", "Andrew Braim", "Vladimir Mucha"];
    const emails = ["kirill@gmail.com", "olga@gmail.com", "andrew@gmail.com", "vladimir@gmail.com"];
    const statuses = ["Busy", "Open"];
    const countries = ["Belarus", "Usa", "Austria", "Belgium"];

    const randomeValue = Math.floor(Math.random() * 4);

    const item = {
      Name: names[randomeValue],
      Email: emails[randomeValue],
     // status: statuses[Math.floor(Math.random() * 2)],
      //country: countries[randomeValue],
    };

    contacts.add(item);

    if (!this.$$("userContactList").getSelectedItem()) {
      this.$$("userContactList").select(this.$$("userContactList").getFirstId());
    }
  }
}
