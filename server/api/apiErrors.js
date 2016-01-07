errorNotEnoughParams = {
  statusCode: 500,
  body: {
    status: 'fail',
    message: 'Not enough params'
  }
};

errorNotFound = {
  statusCode: 500,
  body: {
    status: 'fail',
    message: 'Object Not found'
  }
};

errorInsert = {
  statusCode: 500,
  body: {
    status: 'fail',
    message: 'Insert Fail'
  }
};

errorInsertWithExtraData = function(error) {
  var err = errorInsert;
  err.extra = error;
  return err;
}
