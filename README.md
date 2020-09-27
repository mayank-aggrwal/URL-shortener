
Try out the service live at - https://shortt-ly.herokuapp.com/

There are 3 different requests currently available-
1) POST  /api/short
   {
       "longUrl": "the-long-url-to-be-shortened"
   }
2) POST  /api/custom
   {
       "longUrl": "the-long-url-to-be-shortened",
       "code": "the-custom-code"
   }
3) GET  /:code
