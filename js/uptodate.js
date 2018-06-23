// Shorthand for $(document).ready();
$(function() {
 $('#search-form').submit(function(){
   var searchValString = $('#search-value').val();
   console.log(searchValString);
   if(searchValString) {
     $(this).attr('action', "https://www-uptodate-com.libproxy1.upstate.edu/contents/" + searchValString );
   }
 });
});
