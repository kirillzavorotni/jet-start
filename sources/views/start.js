import UserContactList from "./userContactList";
import UserForm from "./userForm";

export default {
  cols: [
    {
      rows: [
        { template: "Contacts", height: 40, css: "header-tabs-styles" },
        UserContactList,
      ],
    },
    {
      rows: [
        UserForm,
        { view: "template" },
      ],
    },
  ],
};
