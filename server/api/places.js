getApi().addCollection(
  Places,
  {
    excludedEndpoints: ['put']
  }
);

getApi().addRoute(
  'places/near',
  {
    post: function() {
      if (this.bodyParams.hasOwnProperty('lng') && this.bodyParams.hasOwnProperty('lat')) {
        Places._ensureIndex({'location': '2dsphere'});
        var point = {
          type: "Point",
          coordinates: [
            this.bodyParams.lng,
            this.bodyParams.lat
          ]
        };
        var maxDistance = 1000;
        if (this.bodyParams.maxDistance) maxDistance = this.bodyParams.maxDistance;
        var minDistance = 0;
        if (this.bodyParams.minDistance) minDistance = this.bodyParams.minDistance;

        return {
          status: "success",
          data: Places.find({location: { $near: {$geometry: point, $maxDistance: maxDistance, $minDistance: minDistance}}}).fetch()
        }
      } else {
        return errorNotEnoughParams;
      }
    }
  }
);
