socket = io();

window.ondevicemotion = function(e){
    var x = e.accelerationIncludingGravity.x;
    var y = e.accelerationIncludingGravity.y;
    var z = e.accelerationIncludingGravity.z;

    // send data over the socket
    socket.emit('acceleration', {'x':x, 'y':y, 'z':z});
}

