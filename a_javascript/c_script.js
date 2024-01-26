function change(object) {
    object.src =
        "images/" + (object.src.includes("img5.png") ? "img6.png" : "img5.png");
}
