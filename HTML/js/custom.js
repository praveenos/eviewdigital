/* datetimepicke */
$(function() {
    $('#datetimepicker4').datetimepicker({
      pickTime: false
    });
  });
	
	$(function() {
    $('#datetimepicker5').datetimepicker({
      pickTime: false
    });
});
/* datetimepicke ends */

/* data table starts */
 $(document).ready(function() {
	var extensions = {
        "sFilter": "dataTables_filter custom_filter_class",
        
    }
    // Used when bJQueryUI is false
    $.extend($.fn.dataTableExt.oStdClasses, extensions);
    // Used when bJQueryUI is true
    $.extend($.fn.dataTableExt.oJUIClasses, extensions);
    var table = $('#example').DataTable( {
              responsive: true
          } );
	var table = $('#example2').DataTable({
			  responsive: true			 
							 });
	var table = $('#example3').DataTable({
			responsive: true				 
							 });
	var table = $('#example4').DataTable({
		"bPaginate": false,
		"bLengthChange": false,
		"bFilter": false,
		"ordering": false,
		"bInfo": false,
		"responsive": true
				 });
  
    
  // on focus search
//  $( ".search_move" ).addClass('iconShow');
  /*$( ".custom_filter_class" ).parent().addClass('iconShow');
  $(".iconShow").append('<div class="search_layout"><span class="datasearch"><i class="fa fa-search" aria-hidden="true"></i></span></div>');
  $(".search_layout").click(function(){
		 $(".custom_filter_class").toggle("slide");	
 	});*/   
  
  $( "#jobposting_filter").parent().addClass('iconShow');
  $(".iconShow").append('<div class="search_layout"><span class="datasearch"><i class="fa fa-search" aria-hidden="true"></i></span></div>');
  $(".search_layout").click(function(){
  $("#jobposting_filter").toggle("slide");	
 	}); // on focus search ends
  // tool tip
  $('[data-toggle="tooltip"]').tooltip(); 
  
  // modal in new div starts
  $("body").on("click","#btn",function(){
  	  	
    	$("#myModal").modal("show");
        
    	$("#get-audio").addClass("after_modal_appended");
    
    	//appending modal background inside the blue div
    	$('.modal-backdrop').appendTo('#get-audio');   
    
    	//remove the padding right and modal-open class from the body tag which bootstrap adds when a modal is shown
    
    	$('body').removeClass("modal-open")
   	 //	$('body').css("padding-right","");     
  });
  
  $("#jobposting_filter label input, .dataTables_length select").removeClass("form-control");
  
}); /*document ready ends*/  
/* data table ends */

// tool tip starts 
$(document).on('click','.radio_check input[type=radio]',function(){
var txt = $(this).val();
$('#parent').attr("title",txt);
}); 
// tool tip ends   
   
/* active menu */
$('ul.primary-nav li a').click(function(e) {
    var $this = $(this);
    $this.parent().siblings().removeClass('active-menu').end().addClass('active-menu');
    e.preventDefault();
});

$('ul.main-nav li a').click(function(e) {
    var $this = $(this);
    $this.parent().siblings().removeClass('active-menu1').end().addClass('active-menu1');
    e.preventDefault();
});

$('.secondary-nav-inner > ul li').click(function(e) {
    var $this = $(this);
    $this.siblings().removeClass('active-menu2').end().addClass('active-menu2');
    e.preventDefault();
});

$('ul.active-icon li').click(function(e) {
    var $this = $(this);
    $this.siblings().removeClass('active-icon').end().addClass('active-icon');
    e.preventDefault();
});

/* upload files */
$(function(){
$("#upload_link").on('click', function(e){
    e.preventDefault();
    $("#upload:hidden").trigger('click');
});
});

/* anchor responce */
$(".anchor-responce").hide();
  $(".anchor-show").click(function() {
    if($(this).is(":checked")) {
        $(".anchor-responce").show();
    } else {
        $(".anchor-responce").hide();
    }
  });
/* active menu ends */
