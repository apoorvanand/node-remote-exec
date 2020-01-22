let {spawn} = require ('child_process'),
file = 'C:\\training\\AI_ML\\Java_sample_projects\\pet.bat',
fileExec = spawn(file,[],{shell:true});
var express = require('express');
var app     = express();


app.get('/startscript', function(req, res) {
  var command =spawn(file,[],{shell:true});
  var output  = [];

  command.stdout.on('data', (data) => {
    console.log(data.toString());
  //  res.status(200).send(data.toString());
   }); 
  command.on('close', (code) => {
    if (code === 0)
      res.sendStatus(Buffer.concat(output));
    else
      res.sendStatus(500); // when the script fails, generate a Server Error HTTP response
  });
});

app.listen(3000, '0.0.0.0', (err) => {
  if (err) {
   console.log(err);
  }
 
  console.info('>>> 🌎 Open http://0.0.0.0:%s/ in your browser.', 3000);
 });
