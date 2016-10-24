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