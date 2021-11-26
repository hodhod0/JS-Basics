var all = document.querySelectorAll('img');
var images = [...all]
var newImages = ["./images/image1_2.jpg", "./images/image2_2.jpg", "./images/image3_2.jpg", "./images/image4_2.jpg", "./images/image5_2.jpg"]
var i = 0;
images.forEach(image => {

    image.addEventListener("mouseover", () => {
        var oldSource = image.src;
        image.src = newImages[i];
        if (i == newImages.length - 1) {
            i = 0
        } else {
            i++
        }
        image.addEventListener("mouseout", () => {
            image.src = oldSource;

        });

    });
});

