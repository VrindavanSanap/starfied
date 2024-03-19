class StarField {
    constructor(f_width, f_height, n_stars, speed) {

        this.f_width = f_width;
        this.f_height = f_height;
        this.speed = speed;
        this.stars = [];

        for (let i = 0; i < n_stars; i++) {
            this.stars.push(new Star(this.f_width, this.f_height));
        }
    }
    update() {
        for (let star of this.stars) {
            star.update(this.speed);
        }
    }
    update_field(f_height, f_width) {
        this.f_width = f_width;
        this.f_height = f_height;

        for (let star of this.stars) {
            star.update_field(this.f_width, this.f_height);
        }
    }
    show() {
        for (let star of this.stars) {
            star.show();
        }
    }
}

