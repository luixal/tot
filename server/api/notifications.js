getApi().addCollection(
  Notifications,
  {
    excludedEndpoints: ['put']
  }
);

getApi().addRoute(
  'notifications/status/:status',
  {
    get: function() {
      return {
        status: "success",
        data: Notifications.find({status: this.urlParams.status}).fetch()
      }
    }
  }
);
