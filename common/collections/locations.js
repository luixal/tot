// colleciton:
Locations = new Mongo.Collection('locations');
// schema:
locationsSchema = new SimpleSchema({
  deviceId: {
    type: String,
    label: "Device ID"
  },
  location: {
    type: Object,
    blackbox: true,
    label: "Location"
  },
  createdAt: {
    type: Date,
    label: 'Creation Date',
    autoValue: function() {
      if (this.isInsert) {
        return moment.utc().toDate();
      }
    },
    optional: true,
    denyUpdate: true
  },
  updatedAt: {
    type: Date,
    label: 'Update Date',
    autoValue: function() {
      if (this.isUpdate) {
        return moment.utc().toDate();
      }
      // } else if (this.isInsert) {
      //   return moment.utc().toDate();
      //   return null;
      // }
    },
    optional: true
  }
});
// attaching schema to collection:
Locations.attachSchema(locationsSchema);
