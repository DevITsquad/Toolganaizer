document.addEventListener("DOMContentLoaded", () => {
    // Get references to the modal and close button
    const modal = document.querySelector(".modal:not(.swiper-modal)");
    const swiperModal = document.querySelector(".swiper-modal");
    const closeButton = document.querySelectorAll(".close");

    // Function to show the modal
    function openModal(e) {
        const popupURL = e.currentTarget.getAttribute("src");

        document
            .querySelector("#popup_Modal .popup_img")
            .setAttribute("src", popupURL);

        if (e.currentTarget.alt === "product_image") {
            modal.style.display = "none";
            swiperModal.style.display = "block";
        } else {
            modal.style.display = "block";
            //document.body.style.overflow = "hidden";
        }
        document.body.style.overflow = "hidden"; // Disable scrolling

        // Add event listener to close when clicking outside the modal
        swiperModal.addEventListener("click", closeModalOnClickOutside);
        modal.addEventListener("click", closeModalOnClickOutside);

        // Add event listener to close when pressing the Escape key
        document.addEventListener("keydown", closeModalOnEscape);
    }

    // Function to hide the modal
    function closeModal(e) {
        modal.style.display = "none";
        document.body.style.overflow = "auto"; // Enable scrolling
        swiperModal.style.display = "none";

        // Remove event listeners for clicking outside and pressing Escape
        swiperModal.removeEventListener("click", closeModalOnClickOutside);
        modal.removeEventListener("click", closeModalOnClickOutside);
        document.removeEventListener("keydown", closeModalOnEscape);
    }

    // Function to close when clicking outside the modal
    function closeModalOnClickOutside(e) {
        if (e.target === modal || e.target === swiperModal) {
            closeModal();
        }
    }

    // Function to close when pressing the Escape key
    function closeModalOnEscape(e) {
        if (e.key === "Escape") {
            closeModal();
        }
    }

    // Attach event listeners to open and close the modal
    document
        .querySelectorAll(".bottom_images_slider_wrapper .swiper-slide img")
        .forEach((el) => {
            el.addEventListener("click", openModal);
        });
    document
        .querySelectorAll(".main-product-custom_slider_wrapper .swiper-main-img")
        .forEach((el) => {
            el.addEventListener("click", openModal);
        });

    //   closeButton.addEventListener("click", closeModal);
    closeButton.forEach((el) => el.addEventListener("click", closeModal));
});