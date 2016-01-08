getApi().addCollection(
  Locations,
  {
    excludedEndpoints: ['put']
  }
);

getApi().addRoute(
  'locations/addPoint',
  // {},
  {
    post: function() {
      if (this.bodyParams.hasOwnProperty('deviceId') && this.bodyParams.hasOwnProperty('lat') && this.bodyParams.hasOwnProperty('lng')) {
        try {
          var locationId = Locations.insert(
            {
              deviceId: this.bodyParams.deviceId,
              location: {
                "type": "Point",
                "coordinates": [this.bodyParams.lng, this.bodyParams.lat]
              }
          }
          );
          return {
            status: "success",
            data: Locations.findOne({_id: locationId})
          }
        } catch(e) {
          return errorInsertWithExtraData(e);
        }
      } else {
        return errorNotEnoughParams;
      }
    }
  }
);
