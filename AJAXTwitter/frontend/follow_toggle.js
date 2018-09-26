class FollowToggle {
  constructor(el){
    this.$el = $el;
    this.userId = $el.data("user-id");
    this.followState = $el.data("initial-follow-state");
    this.render(this.followState);
  }

  render = function(followState) {
    if(followState === "follow"){
      return "Unfollow!");
    } else {
      return "Follow!";
    }
  }

  handleClick = function(event){
    event.preventDefault()
  }
}


module.exports = FollowToggle;
