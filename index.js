var express = require('express');
var app = express();
var fs = require("fs");
var server = app.listen(8000, function () {
    var host = server.address().address
    var port = server.address().port
    console.log("Example app listening at http://%s:%s", host, port);
 })

var room = {
   "room1" : {
      "name" : "mohit",
      "seats" : "100",
      "amenities" : "ac",
      "price" : 4000,
      "Rid": 4,
      "Rstatus": "Not_Booked "
   }
}
//Add new Room
app.post('/addRoom', function (req, res) {
   // First read existing users.
   fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
      data = JSON.parse( data );
      data["room1"] = room["room1"];
      console.log( data );
      res.end( JSON.stringify(data));
   });
})

//Book a new room 
var Booking = {
    "Booking2" : {
        "BookingId": 1,
        "Cname" : "Shweta",
        "BookingDate" : "25-Mar-2021",
        "Start_Time" : " 9:00",
        "End_Time" : "21:00",
        "id" : Rid,
        "Rtatus":"Booked"
    }

}


//Add new Room Booking
app.post('/BookRoom', function (req, res) {
    // First read existing users.
    fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
       data = JSON.parse( data );
       data["Booking2"] = Booking["Booking2"];
       console.log( data );
       res.end( JSON.stringify(data));
    });
 })
app.post('/addBooking', function (req, res) {
    // First read existing users.
    fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
       data = JSON.parse( data );
       data["room1"] = user["room1"];
       console.log( data );
       res.end( JSON.stringify(data));
    });
 })

app.get('/:Rid', function (req, res) {
    // First read existing users.
    fs.readFile( __dirname + "/" + "rooms.json", 'utf8', function (err, data) {
       var rooms = JSON.parse( data );
       var room = rooms["room" + req.params.id] 
       console.log( room );
       res.end( JSON.stringify(room));
    });
 })
 app.get('/:Bookingid', function (req, res) {
    // First read existing users.
    fs.readFile( __dirname + "/" + "Booking.json", 'utf8', function (err, data) {
       var Bookings = JSON.parse( data );
       var Booking = Bookings["Booking" + req.params.id] 
       console.log( Booking );
       res.end( JSON.stringify(Booking));
    });
 })
 var id = 1;

 //Deleting Booking

app.delete('/deleteBooking', function (req, res) {
   // First read existing users.
   fs.readFile( __dirname + "/" + "Bookings.json", 'utf8', function (err, data) {
      data = JSON.parse( data );
      delete data["Booking2" + 2];
    
      
       
      console.log( data );
      res.end( JSON.stringify(data));
   });
})

