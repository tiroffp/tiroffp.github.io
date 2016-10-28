GitHubActivity.feed({
    username: "tiroffp",
    // repository: "your-repo", // optional
    selector: "#feed",
    limit:4
});

var slideout; 

function selectSidepanel() {
    slideout = new Slideout({
    'panel': document.getElementById('panel'),
    'menu': document.getElementById('menu'),
    'padding': 256,
    'tolerance': 70
  });
}

document.onload = selectSidepanel();
