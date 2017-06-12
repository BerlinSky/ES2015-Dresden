import 'jquery';

const artist = {
  name: "Chris Stapleton",

  processRequest: function(request, handler) {
    handler(request);
  },

  // replyToRequest: function() {
  //   const that = this;

  //   this.processRequest("Would you please play my favorite song, ", function(request) {
  //     that.name;  

  //     console.log(request + that.name + "?");
  //   })
  // }

  replyToRequest: function() {
    this.processRequest("Would you please play my favorite song, ", (request) => {
      // that.name;  

      console.log(request + this.name + "?");
    })
  }
}

$(function () {
  artist.replyToRequest();
});

