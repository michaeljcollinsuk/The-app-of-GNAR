gnarApp.service("instagramService", [ function () {
var self = this;

self.loadInstagram = function(tagName){
  var feed = new Instafeed({
              get: 'tagged',
              tagName: tagName,
              accessToken: '6678174.467ede5.205a03ebc4b74d4082823781c3149575',
              target: 'instafeed',
              sortBy: 'most-recent',
              limit: 20,
              resolution: 'standard_resolution',
    template: '<a title="{{caption}}" class="fancybox" rel="group" href="{{image}}"><img src="{{image}}" title="{{caption}}" /><div class="info"><p>{{model.created_time}}</p><p class="location" ng-model="location"><i class="icon-location"></i>{{location}}</p><p class="user"><i class="icon-user"></i>@{{model.user.username}}</p><p><i class="icon-comment"></i>{{caption}}</p><br></div></a>',
    filter: function(image) {

  		var date = new Date(image.created_time*1000);

  		m = date.getMonth();
  		d = date.getDate();
  		y = date.getFullYear();
      hours = date.getHours();
      minutes = '0' + date.getMinutes()

  		var month_names = new Array ( );
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
};

self.generateTag = function(beachName) {
  tag = beachName.toLowerCase().replace(/\s/g, '');
  return tag;
};


}]);
