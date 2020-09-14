function validate() {

         if( document.myForm.yourName1.value == "" ) {
            alert( "please make sure all your details are entered" );
            document.myForm.yourName1.focus() ;
            return false;
         }
         if( document.myForm.yourEmail1.value == "" ) {
            alert( "please make sure all your details are entered" );
            document.myForm.yourEmail1.focus() ;
            return false;
         }
  if( document.myForm.yourMessage1.value == "" ) {
            alert( "Please send us a message!" );
          document.myForm.yourMessage1.focus() ;
            return false;
         }

         return( true );
      }
