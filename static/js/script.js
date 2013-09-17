/* Author: YOUR NAME HERE
*/

//$(document).ready(function() {
//
//  var socket = io.connect();
//
//  $('#sender').bind('click', function() {
//   socket.emit('message', 'Message Sent on ' + new Date());
//  });
//
//  socket.on('server_message', function(data){
//   $('#receiver').append('<li>' + data + '</li>');
//  });
//});
require('./user');

var obj1 = new User("John");
var obj2 = new User("Peter");

obj1.hello(obj2);

console.log(module);