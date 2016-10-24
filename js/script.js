GitHubActivity.feed({
    username: "tiroffp",
    // repository: "your-repo", // optional
    selector: "#feed",
    limit:4
});

$("#menu-toggle").click(function(e) {
        e.preventDefault();
        $("#wrapper").toggleClass("toggled");
    });

  var slideout = new Slideout({
    'panel': document.getElementById('panel'),
    'menu': document.getElementById('menu'),
    'padding': 256,
    'tolerance': 70
  });