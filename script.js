let logo = document.getElementById("dvd-logo");
let container = document.querySelector(".animation-container");
let x_move = 1;
let y_move = 1;

function init() {
    change_color();
    setInterval(animation, 10);
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
    let border_width = parseInt(window.getComputedStyle(container).borderWidth);
    let left_pos = logo.offsetLeft;
    let top_pos = logo.offsetTop;
    
    // Handling collisions with right and left walls
    if (left_pos < container_left + border_width || left_pos + logo_width >= container_left + container_width + border_width) {
        x_move = -x_move;
        change_color();
    }
    // Handling collisions with top and bottom walls
    if (top_pos < container_top + border_width || top_pos + logo_height >= container_top + container_height + border_width) {
        y_move = -y_move;
        change_color();
    }
}

function animation() {
    check_bounce();

    logo.style.left = (logo.offsetLeft + x_move) + "px";
    logo.style.top = (logo.offsetTop + y_move) + "px";
}

init();