/* Import jQuery */
var script = document.createElement('script');
script.src = './vendor/jquery/jquery-3.6.0.min.js';
script.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(script);
/* End of import */

let apply_to_avatars = true;
let apply_to_thumbnails = true;
let apply_to_previews = false;

document.onload = apply();

function apply() {

    let thumbnails_selector = ".ytd-thumbnail img";
    let avatars_selector = ".avatar img";

    if (apply_to_thumbnails){
        thumbnails = document.querySelectorAll(thumbnails_selector);
        thumbnails.forEach(thumbnail => thumbnail.style.filter = "grayscale(100%)");
    }
    
    /*if (apply_to_avatars){
        avatars = document.querySelectorAll(avatars_selector);
        avatars.forEach(avatar => avatar.style.filter = "grayscale(100%)");
    }*/
}
