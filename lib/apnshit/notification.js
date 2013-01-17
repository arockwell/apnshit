// Generated by CoffeeScript 1.4.0
(function() {
  var Notification;

  module.exports = Notification = (function() {

    function Notification() {
      this.alert = void 0;
      this.badge = void 0;
      this.device = void 0;
      this.encoding = 'utf8';
      this.expiry = 0;
      this.identifier = 0;
      this.newsstandAvailable = void 0;
      this.payload = {};
      this.sound = void 0;
    }

    Notification.prototype.length = function() {
      return Buffer.byteLength(JSON.stringify(this), this.encoding || 'utf8');
    };

    Notification.prototype.toJSON = function() {
      if (this.payload === undefined) {
        this.payload = {};
      }
      if (this.payload.aps === undefined) {
        this.payload.aps = {};
      }
      if (typeof this.badge === "number") {
        this.payload.aps.badge = this.badge;
      }
      if (typeof this.sound === "string") {
        this.payload.aps.sound = this.sound;
      }
      if (typeof this.alert === "string" || typeof this.alert === "object") {
        this.payload.aps.alert = this.alert;
      }
      if (this.newsstandAvailable) {
        this.payload.aps["content-available"] = 1;
      }
      return this.payload;
    };

    return Notification;

  })();

}).call(this);