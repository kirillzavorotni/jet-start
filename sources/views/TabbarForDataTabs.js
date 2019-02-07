import { JetView } from "webix-jet";

export default class TabbarForDataTabs extends JetView {
	config() {
		return {
      view: "tabbar",
      type:"bottom",
      multiview:true,
			options: [
        { id: "countries", value: "Countries" },
        { id: "statuses", value: "Statuses"  },
      ],
		};
	}
}