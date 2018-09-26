class FollowToggle {
  constructor(el){
    this.$el = $el;
    this.userId = $el.data("user-id");
    this.followState = $el.data("initial-follow-state");
    this.render();
    this.$el.on("click", this.handleClick.bind(this));
  }

  render = function() {
    if(this.followState === "follow"){
      $el.html("Unfollow!");
    } else {
      $el.html("Follow!");
    }
  }

  handleClick = function(event){
    event.preventDefault();
    if(this.followState === "follow"){
      this.followState = 'unfollow';
      $.ajax({
        method: "DELETE",
        url: "/users/:id/follow",
        dataType: "json",
        success: function(){
          alert("You have successly unfollowed!");
        }
      });
      this.render();
    } else {
        this.followState = 'follow';
        $.ajax({
          method: "POST",
          url: "/users/:id/follow",
          dataType: "json",
          success: function(){
            alert("You have successly followed!");
          }
      });
      this.render();
    }
}


module.exports = FollowToggle;
