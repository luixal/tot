getApi().addCollection(
  Notifications,
  {
    excludedEndpoints: ['put']
  }
);

getApi().addRoute(
  'notifications/state/:state',
  {
    get: function() {
      return {
        status: "success",
        data: Notifications.find({status: this.urlParams.state}).fetch()
      }
    }
  }
);
