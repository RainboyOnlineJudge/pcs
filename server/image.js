var path = require('path');
var fs = require('fs')
module.exports =function(req,res,next){
  let options = {
    root: C.images_path,
    dotfiles: 'deny',
    headers: {
        'x-timestamp': Date.now(),
        'x-sent': true
    }
  };
  let name  = req.params.name

  let image_path = path.join(options.root,name)
  if(! fs.existsSync(image_path))
    name = '404.jpg'

  debug(name)

  res.sendFile(name, options, function (err) {
    if (err) {
      console.log(err);
      res.status(err.status).end();
    }
    else {
      debug('Sent:', name);
    }
  });
}
