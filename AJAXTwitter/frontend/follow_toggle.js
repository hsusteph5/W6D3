import * as apiUtil from './api_util.js'

class FollowToggle {
  constructor(el){
    this.$el = $el;
    this.userId = $el.data("user-id");
    this.followState = $el.data("initial-follow-state");
    this.render();
    this.$el.on("click", this.handleClick.bind(this));
  }

  render() {
    if(this.followState === "follow"){
      $el.html("Unfollow!");
    } else {
      $el.html("Follow!");
    }
  }

  handleClick(event){
    event.preventDefault();
    if(this.followState === "follow"){
      this.followState = 'unfollow';
      apiUtil.unfollowUser(this.userId);
      this.render();
    } else {
        this.followState = 'follow';
        apiUtil.followUser(this.userId);
      this.render();
    }
  }

}


module.exports = FollowToggle;
