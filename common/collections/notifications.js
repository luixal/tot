// collection:
Notifications = new Mongo.Collection('notifications');
// schema:
notificationsSchema = new SimpleSchema({
  deviceId: {
    type: String,
    label: "Device ID"
  },
  data: {
    type: Object,
    blackbox: true,
    label: "Data"
  },
  status: {
    type: String,
    label: "Status",
    optional: true,
    autoValue: function() {
      if (this.isInsert) return "pending";
    }
  },
  createdAt: {
    type: Date,
    label: 'Creation Date',
    optional: true,
    denyUpdate: true,
    autoValue: function() {
      if (this.isInsert) {
        return moment.utc().toDate();
      }
    }
  },
  updatedAt: {
    type: Date,
    label: 'Update Date',
    optional: true,
    autoValue: function() {
      if (this.isUpdate) {
        return moment.utc().toDate();
      }
      // } else if (this.isInsert) {
      //   return moment.utc().toDate();
      //   return null;
      // }
    }
  }
});
// attaching schema to collection:
Notifications.attachSchema(notificationsSchema);
