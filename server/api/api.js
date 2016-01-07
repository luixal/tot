//http://localhost:3000/api/v1/...
ApiDebug = new Restivus({
  version: 'debug',
  prettyJson: true
});

getApi = function(){
  return ApiDebug;
}
