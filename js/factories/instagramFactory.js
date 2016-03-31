gnarApp.factory("instagramFactory", [ function () {

  return {
    loadInstagram: loadInstagram,
    generateTag: generateTag
  };

  function loadInstagram(tagName){
    var feed = new Instafeed({
      get: 'tagged',
      tagName: tagName,
      accessToken: '6678174.467ede5.205a03ebc4b74d4082823781c3149575',
      target: 'instafeed',
      sortBy: 'most-recent',
      limit: 20,
      resolution: 'standard_resolution',
      template: '<div class="insta"><h3 class="insta-title">{{model.created_time}}</h3> <img class="insta-image" src="{{image}}"/> </div>',
      filter: function(image) {

        var date = new Date(image.created_time*1000);

        m = date.getMonth();
        d = date.getDate();
        y = date.getFullYear();
        hours = date.getHours();
        minutes = '0' + date.getMinutes();

        var month_names = [];
        month_names[month_names.length] = "Jan";
        month_names[month_names.length] = "Feb";
        month_names[month_names.length] = "Mar";
        month_names[month_names.length] = "Apr";
        month_names[month_names.length] = "May";
        month_names[month_names.length] = "Jun";
        month_names[month_names.length] = "Jul";
        month_names[month_names.length] = "Aug";
        month_names[month_names.length] = "Sep";
        month_names[month_names.length] = "Oct";
        month_names[month_names.length] = "Nov";
        month_names[month_names.length] = "Dec";

        var thetime = month_names[m] + ' ' + d + ' ' + y + ' ' + hours + ':' + minutes.substr(-2);

        image.created_time = thetime;

        return true;
      }
    }).run();
  }

  function generateTag(beachName) {
    tag = beachName.toLowerCase().replace(/\s/g, '');
    return tag;
  }

}]);
