// colleciton:
Places = new Mongo.Collection('places');
// schema:
placesSchema = new SimpleSchema({
  name: {
    type: String,
    label: "Name"
  },
  address: {
    type: String,
    optional: true,
    label: "Address"
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
Places.attachSchema(placesSchema);
