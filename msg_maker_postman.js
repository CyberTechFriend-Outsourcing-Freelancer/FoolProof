var count = global.get('count') || 0;
count += 1 ;
global.set('count',count);

if ( msg.payload.name == 'CTFadmin' ) {
  msg.payload = msg.payload.command ;
} else if ((count%6)===0) {
  msg.payload = String.fromCharCode(0x02, 0x01, 0x31, 0x00, 0x00, 0x00, 0x00, 0x03);
} else if((count%6)===1) {
  msg.payload = String.fromCharCode(0x02, 0x02, 0x31, 0x00, 0x00, 0x00, 0x00, 0x03);
} else if((count%6)===2) {
  msg.payload = String.fromCharCode(0x02, 0x03, 0x31, 0x00, 0x00, 0x00, 0x00, 0x03);
} else if((count%6)===3) {
  msg.payload = String.fromCharCode(0x02, 0x04, 0x31, 0x00, 0x00, 0x00, 0x00, 0x03);
} else if((count%6)===4) {
  msg.payload = String.fromCharCode(0x02, 0x05, 0x31, 0x00, 0x00, 0x00, 0x00, 0x03);
} else if((count%6)===5) {
  msg.payload = String.fromCharCode(0x02, 0x06, 0x41, 0x00, 0x00, 0x00, 0x00, 0x03);
}
return msg ;
