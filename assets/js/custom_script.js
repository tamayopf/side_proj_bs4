$(document).ready(function(){
	
	/*
        Login form validation
    */
    $('.login-form input[type="text"], .login-form input[type="password"], .login-form textarea').on('focus', function() {
    	$(this).removeClass('input-error');
    });
    
    $('.login-form').on('submit', function(e) {
    	
    	$(this).find('input[type="text"], input[type="password"], textarea').each(function(){
    		if( $(this).val() == "" ) {
    			e.preventDefault();
    			$(this).addClass('input-error');
    		}
    		else {
    			$(this).removeClass('input-error');
    		}
    	});
    	
    });
    
    /*
        Registration form validation
    */
    $('.registration-form input[type="text"], .registration-form textarea').on('focus', function() {
    	$(this).removeClass('input-error');
    });
    
    $('.registration-form').on('submit', function(e) {
    	
    	$(this).find('input[type="text"], textarea').each(function(){
    		if( $(this).val() == "" ) {
    			e.preventDefault();
    			$(this).addClass('input-error');
    		}
    		else {
    			$(this).removeClass('input-error');
    		}
    	});
    	
    });
	
	
	$('.dt_dynamic').DataTable( {
        "paging":   false,
        "ordering": false,
        "info":     false,
		"searching": false,
		"responsive": true,
		"dom": '<"toolbar">frtip'
    });
	
	

	$(".dt_dynamic").each(function(){
		var colArr = returnColumns(this.id);
		var optionsAsString = "";
		for(var i = 0; i < colArr.length; i++) {
			optionsAsString += "<option value='" + colArr[i] + "'>" + colArr[i] + "</option>";
		}
		
		$("#" +this.id+'_wrapper .toolbar').html('<div class="row float-right mb-1 mr-1"><form class="form-inline"><div class="form-group"><select id="'+this.id+'_advance_filter" class="form-control form-control-sm" ></select>&emsp;<input type="text" class="form-control form-control-sm" ></div>&nbsp;<button type="submit" class="btn btn-success btn-sm">Search</button>&emsp;<span style="font-weight:bold">- or -</span>&emsp;<button type="button" id="advanceFilterShow_'+this.id+'" data-table="'+this.id+'" class="btn btn-primary btn-sm advanceFilterShow">Advance Filters</button></form></div>');
		
		$("#" + this.id + "_advance_filter").append(optionsAsString);
	});
	
	function returnColumns(tableID){
		var colArr = [];
		i = 0;
		
		$("#" + tableID + " thead tr th").not(':last').each(function(){
			colArr[i++] = $(this).text();
		});
		return colArr;
	}
	
	$('.advanceFilterShow').on('click',function(){
		$("#advanceFilterFields").html('');
		var table = $(this).data('table');
		var colArr = returnColumns(table);
		
		for(var i = 0; i < colArr.length; i++) {
			 $("#advanceFilterFields").append('<div class="col-sm-3"><input type="checkbox" id="advanceFilter_'+colArr[i]+'" value="'+colArr[i]+'">&nbsp;'+colArr[i]+'</div>');
		}
	
		$('#advanceFilterModal').modal();
		
	});
	
	$("#orgInpAddressAdd").click(function(){
		$("#orgAddressInput").append('<label for="inp_organizationName" class="col-sm-3 col-form-label"></label><div class="col-sm-7"><input type="text" class="form-control form-control-sm" id="inp_organizationCode"></div><div class="col-sm-1 justify-content-center mt-2"></div>');
		
	});
});
