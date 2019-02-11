import {JetView, plugins} from "webix-jet";

export default class TopView extends JetView{
	config(){
		const _ = this.app.getService("locale")._;

		var header = {
			type:"header", template:this.app.config.name, css:"webix_header app_header"
		};

		var menu = {
			view:"list",
			localId:"top:menu",
			scroll: false,
			width: 180,
			select: true,
			template: (obj) => {
				return _(obj.value);
			},
			data:[
				{ value:"Contacts", id:"start", icon:"wxi-columns" },
				{ value:"Data",	id:"data",  icon:"wxi-folder" },
				{ value:"Settings",	id:"settings",  icon:"wxi-pencil" }
			]
		};

		var ui = {
			type:"wade", paddingX:5, css:"app_layout", cols:[
				{  paddingX:5, paddingY:10, rows: [ {css:"webix_shadow_medium", rows:[header, menu]} ]},
				{ type:"wide", paddingY:10, paddingX:5, rows:[
					{ $subview:true }
				]}
			]
		};

		return ui;
	}
	init(){
		this.use(plugins.Menu, "top:menu");
	}
}
