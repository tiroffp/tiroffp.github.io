function selectSidepanel() { console.log('onload outputing'); alert('onload triggered'); }

document.onload = selectSidepanel;

GitHubActivity.feed({
    username: "tiroffp",
    // repository: "your-repo", // optional
    selector: "#feed",
    limit:4
});

  var slideout = new Slideout({
    'panel': document.getElementById('panel'),
    'menu': document.getElementById('menu'),
    'padding': 256,
    'tolerance': 70
  });