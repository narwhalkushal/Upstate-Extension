// Shorthand for $(document).ready();
$(document).ready(function() {
 $('#search-form').submit(function(){
   var searchValString = $('#search-value').val();
   if(searchValString) {
     $(this).attr('action', "https://www-uptodate-com.libproxy1.upstate.edu/contents/" + searchValString );
   }
 });
});
