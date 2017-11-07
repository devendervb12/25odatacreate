sap.ui.controller("zodata_create.CreateProduct", {

	onCreate : function(){
		var oModel = new sap.ui.model.odata.v2.ODataModel(
		"proxy/http/122.180.87.238:8000/sap/opu/odata/SAP/ZGW_BATCH25_PRODUCT_SRV"		
		);
		
		this.getView().setModel(oModel);
		
		var data = {
				ProductID : this.getView().byId("ipProduct").getValue(),
				TypeCode : this.getView().byId("iptypeCode").getValue(),
				Category : this.getView().byId("ipCat").getValue(),
				Name : this.getView().byId("ipName").getValue(),
				Description : this.getView().byId("ipDesc").getValue(),
				SupplierID : this.getView().byId("ipSupplier").getValue()
		}
		
		oModel.create("/ProductSet", data, { 
			success : function(){
				sap.m.MessageToast.show("Product Created");
			},
			error : function(){
				sap.m.MessageToast.show("Product Not Created");
			}
		})
		
	}

});