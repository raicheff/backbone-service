/*
 * Backbone.Service
 *
 * Copyright (C) 2016 Boris Raicheff
 * All rights reserved
 */

(function(global, factory) {

  if (typeof exports === "object") {
    module.exports = factory(require("jquery"), require("underscore"), require("backbone"));
  } else if (typeof define === "function" && define.amd) {
    define(["jquery", "underscore", "backbone"], factory);
  } else {
    factory(global.jQuery, global._, global.Backbone);
  }

})(this, function($, _, Backbone) {

  "use strict";

  /*
   * https://github.com/mkuklis/backbone.service
   * https://github.com/thejameskyle/backbone.service
   */

  var Service = Backbone.Service = function(options) {
    this.cid = _.uniqueId("service");
    this.initialize.apply(this, arguments);
  };

  _.extend(Service.prototype, Backbone.Events, {

    initialize: $.noop,

    start: function() {
      return $.Deferred().resolve().promise();
    }

  });

  Service.extend = Backbone.Model.extend;

});

/* EOF */
