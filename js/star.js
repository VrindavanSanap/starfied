class Star {
    constructor(f_width, f_height) {
        this.f_width = f_width;
        this.f_height = f_height;

        this.x = random(-this.f_width / 2, this.f_width / 2)
        this.y = random(-this.f_height / 2, this.f_height / 2)
        this.z = random(this.f_width);
        this.z = random(f_width)
        this.reset()
    }
    reset() {
        this.x = random(-this.f_width / 2, this.f_width / 2)
        this.y = random(-this.f_height / 2, this.f_height / 2)
        this.z = random(this.f_width);

    }
    update(speed = 5) {
        this.z = this.z - speed;
        if (this.z < 1) {
            this.reset()
        }
    }
    update_field(f_height, f_width) {
        this.f_height = f_height;
        this.f_width = f_width;
    }
    show() {
        noStroke();
        let sx = map(this.x / this.z, 0, 1, 0, this.f_width / 2);
        let sy = map(this.y / this.z, 0, 1, 0, this.f_height / 2);

        let radius = map(this.z, 0, this.f_width, 15, 0)
        let color = map(this.z, 0, this.f_width, 255, 0)


        fill(color);
        ellipse(sx, sy, radius, radius)
    }
}