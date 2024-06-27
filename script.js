let logo = document.getElementById("dvd-logo");
let container = document.querySelector(".animation-container");
let x_move = 3;
let y_move = 3;
let left_pos = logo.offsetLeft;
let top_pos = logo.offsetTop;

function init() {
    change_color();
    setInterval(animation, 5);
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
    left_pos = logo.offsetLeft;
    top_pos = logo.offsetTop;

    // Handling collisions with right and left walls
    if (left_pos <= 0 || left_pos + logo_width >= container_height) {
        x_move = ~x_move + 1;
        change_color();
    }
    // Handling collisions with top and bottom walls
    if (top_pos <= 0 || top_pos + logo_height >= container_height) {
        y_move = ~y_move + 1;
        change_color();
    }
}

function animation() {
    check_bounce();
    let left_pos = logo.offsetLeft;
    let top_pos = logo.offsetTop;
    logo.style.left = (left_pos + x_move) + "px";
    logo.style.top = (top_pos + y_move) + "px";

    // logo.style.left = left_pos + x_move;
    // logo.style.top = top_pos + y_move;
}

init();