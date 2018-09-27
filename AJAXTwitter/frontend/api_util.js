export function unfollowUser(id) {
  $.ajax({
    method: "DELETE",
    url: "/users/:id/follow",
    dataType: "json",
    data: `this.userId`,
    success: function(){
      alert("You have successly unfollowed!");
    }
  });
}

export function followUser(id) {
  $.ajax({
    method: "POST",
    url: "/users/:id/follow",
    dataType: "json",
    data: `this.userId`,
    success: function(){
      alert("You have successly followed!");
    }
  });
}
