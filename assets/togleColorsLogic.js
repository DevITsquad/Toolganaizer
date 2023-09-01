
// function changeImgUrl(e) {
//     const link_to = e.currentTarget.dataset.product_url;
//     const img_url = e.currentTarget.dataset.img_url;
//     //getting all marks makes to make none
//     const checked_marks = document.querySelectorAll('.checked_mark-custom');
//     checked_marks.forEach(el => el.style.display = "none");
//     //getting particular mark makes to make none
//     const current_checked_mark = e.currentTarget.querySelector('.checked_mark-custom')
//     current_checked_mark.style.display = "block";
//     document.querySelectorAll(".variable_image").forEach(el => {
//         el.setAttribute("src", img_url)
//         el.setAttribute("srcset", img_url)
//     })
//     document.querySelector(".CTA_botton.featured-product-CTA a").setAttribute("href", link_to)

// }
// document.addEventListener("DOMContentLoaded", () => {
//     const allVariants = document.querySelectorAll(".clickable_color")
//     allVariants.forEach(el => {
//         el.addEventListener("click", changeImgUrl)
//     })
// })
function changeImgUrl(e) {
    const link_to = e.currentTarget.dataset.product_url;
    const img_url = e.currentTarget.dataset.img_url;
    const checked_marks = document.querySelectorAll('.checked_mark-custom');
    checked_marks.forEach(el => el.style.display = "none");
    const current_checked_mark = e.currentTarget.querySelector('.checked_mark-custom');
    current_checked_mark.style.display = "block";
    document.querySelectorAll(".variable_image").forEach(el => {
        el.setAttribute("src", img_url);
        el.setAttribute("srcset", img_url);
    });
    document.querySelector(".CTA_botton.featured-product-CTA a").setAttribute("href", link_to);
}

document.addEventListener("DOMContentLoaded", () => {
    let class_view;
    if (window.innerWidth > 752) {
        class_view = ".desctop_view"
    } else {
        class_view = ".mobile_view"
    }
    const allVariants = document.querySelectorAll(`${class_view} .clickable_color`);
    console.log('first', allVariants)
    let currentIndex = 0;
    let intervalId; // Store the interval ID

    function changeVariant() {
        changeImgUrl({ currentTarget: allVariants[currentIndex] });
        currentIndex = (currentIndex + 1) % allVariants.length;
    }

    allVariants.forEach(el => {
        el.addEventListener("click", (e) => {
            changeImgUrl(e);
            clearInterval(intervalId); // Stop the automatic change
        });
    });

    // Start the initial interval and store the interval ID
    intervalId = setInterval(changeVariant, 3000);
});