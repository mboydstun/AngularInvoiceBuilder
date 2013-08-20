function InvoiceCtrl($scope) {
	$scope.invoice = {
		invoice_number:"#001",
		invoice_date:"01/01/2013",
		client:{name:"John Doe", company:"Business Park Office 400", address:"8800 Lyra Dr #400", city:"Columbus, OH", zip:"43240"},
		company:{name:"Jack Kerouac", company:"Microsoft Corporation", address:"1 157th Ave NE", city:"Redmond, WA", zip:"98052"},
		items:[{
			description:"Widget",
			quantity:1,
			price:9.99
		}],
		logo:""
	};

	$scope.addItem = function(){
		$scope.invoice.items.push({description:"",quantity:1,price:""});
	}

	$scope.removeItem = function(item){
		$scope.invoice.items.splice($scope.invoice.items.indexOf(item), 1);
	}

	$scope.invoiceTotal = function(){
		 var total = 0.00;
        angular.forEach($scope.invoice.items, function(item, key){
          total += (item.quantity * item.price);
        });
        return total;
	}

	$scope.fileChanged = function readURL(e) {
	    if (e.files && e.files[0]) {
	        var reader = new FileReader();

	        reader.onload = function (e) {
	            $('#companyLogo').attr('src', e.target.result);
	        }

	        var image = e.files[0];
	        reader.readAsDataURL(image);
	    }
	};

	$scope.openFileDialog = function(){
		$("#logo").trigger("click");
	};
}
