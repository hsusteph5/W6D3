var FollowToggle = require("./follow_toggle.js");

$(function() {
  $('button.follow-toggle').each(function(index, element){
    new FollowToggle(element);
  });
});
