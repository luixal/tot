devicesGsmIdsSchema = new SimpleSchema({
  deviceId: {
    type: String,
    label: "Device ID"
  },
  gcmId: {
    type: String,
    label: "GCM Device Id"
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
      } else if (this.isInsert) {
        // return moment.utc().toDate();
        return null;
      }
    },
    optional: true
  }
});
