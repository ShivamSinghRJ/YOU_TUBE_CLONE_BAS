sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";

    return Controller.extend("saps.youtubepage.controller.View1", {
        onInit() {
        },
        menuPress:function(){
            // _IDGenFlexBox7
            debugger;

            var oSideNavigation = this.getView().byId('_IDGenSideNavigation1');
            var oExpand = oSideNavigation.getExpanded();
            oSideNavigation.setExpanded(!oExpand);
        }
    });
});