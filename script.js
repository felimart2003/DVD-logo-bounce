let logo = document.getElementById("dvd-logo");
let container = document.querySelector(".animation-container");
let x_move = 1;
let y_move = 1;

function init() {
    change_color();
    setInterval(animation, 100);
}

function change_color() {
    let random_hue = Math.round(Math.random() * 360);
    logo.style.fill = `hsl(${random_hue}, 100%, 50%)`;
}

function check_bounce() {
    let logo_width = logo.offsetWidth;
    let logo_height = logo.offsetHeight;
    let container_width = container.clientWidth;
    let container_height = container.clientHeight;
    let container_left = container.offsetLeft;
    let container_top = container.offsetTop;
    let left_pos = logo.offsetLeft;
    let top_pos = logo.offsetTop;
    
    console.log("container horizontal: " + container_left + container_width, left_pos + logo_width);
    console.log("Cont left: " + container_left);

    // Handling collisions with right and left walls
    if (left_pos <= container_left || left_pos + logo_width >= container_left + container_width) {
        x_move = -x_move;
        change_color();
    }
    // Handling collisions with top and bottom walls
    if (top_pos <= container_top || top_pos + logo_height >= container_top + container_height) {
        y_move = -y_move;
        change_color();
    }
}

function animation() {
    check_bounce();

    logo.style.left = (logo.offsetLeft + x_move) + "px";
    logo.style.top = (logo.offsetTop + y_move) + "px";

    console.log(logo.style.left = (logo.offsetLeft + x_move) + "px");
    console.log(logo.style.top = (logo.offsetTop + y_move) + "px");
}

init();