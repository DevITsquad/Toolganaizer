
document.addEventListener("DOMContentLoaded", () => {

    document.querySelectorAll(".variable_image").forEach(el => {
console.log('1', 1)
console.log(el.getAttribute("src"))
        
    })
    console.log(document.querySelectorAll(".clickable_color"))

    const allVariants = document.querySelectorAll(".clickable_color")



    function changeImgUrl(e) {
        // console.log(e.currentTarget)
        // console.log(e.currentTarget.dataset)
        const link_to = e.currentTarget.dataset.product_url
        const img_url = e.currentTarget.dataset.img_url
        document.querySelectorAll(".variable_image").forEach(el => {
            el.setAttribute("src", img_url)
            el.setAttribute("srcset", img_url)
        })
        document.querySelector(".CTA_botton.featured-product-CTA a").setAttribute("href", link_to)
    }

    allVariants.forEach(el => {
        el.addEventListener("click", changeImgUrl)

    })
    document.querySelector(".variable_image")






})


