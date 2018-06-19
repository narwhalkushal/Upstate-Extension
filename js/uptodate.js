// Shorthand for $(document).ready();
$(function() {
 $('#myform').submit(function(){
   var searchValString = $('#searchVal').val();
   console.log(searchValString);
   if(searchValString) {
     $(this).attr('action', "https://www-uptodate-com.libproxy2.upstate.edu/contents/" + searchValString );
   }
 });
});
