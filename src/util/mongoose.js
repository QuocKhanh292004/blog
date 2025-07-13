module.exports = {
  mutipleMongooseToObject: function (mongooseArrays) {
    return mongooseArrays.map((mongooseArrays) => mongooseArrays.toObject());
  },

  mongooseToObject: function (mongooseDoc) {
    return mongooseDoc ? mongooseDoc.toObject() : mongooseDoc;
  },
};
