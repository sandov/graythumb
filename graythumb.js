homepage_grid_selector = "#contents.style-scope.ytd-rich-grid-renderer";
homepage_grid = document.querySelector(homepage_grid_selector);

const callback = function(mutList, observer){
    mutList.forEach(mut => {
        console.log("mutation");
    })
}

let observer = new MutationObserver(callback);
const observer_config = {childList: true};
observer.observe(homepage_grid, observer_config);

/*
let thumbnails_selector = ".ytd-thumbnail img";
let avatars_selector = ".avatar img";

if (apply_to_thumbnails){
    thumbnails = document.querySelectorAll(thumbnails_selector);
    thumbnails.forEach(thumbnail => thumbnail.style.filter = "grayscale(100%)");
}

if (apply_to_avatars){
    avatars = document.querySelectorAll(avatars_selector);
    avatars.forEach(avatar => avatar.style.filter = "grayscale(100%)");
}
*/