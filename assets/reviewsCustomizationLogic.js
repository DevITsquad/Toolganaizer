

document.addEventListener('DOMContentLoaded', () => {


    function handleWhSliderMutation(mutationsList) {
        for (const mutation of mutationsList) {
            if (mutation.type === 'childList') {
                for (const addedNode of mutation.addedNodes) {
                    if (addedNode.classList && addedNode.classList.contains('alr-wh-slider')) {
                        const mainReviewsWrapper = addedNode.parentNode.parentNode.parentNode.parentNode
                        mainReviewsWrapper.style.background = 'rgba(255, 253, 241, 1)';
                        mainReviewsWrapper.style.minHeight = '610px';
                        mainReviewsWrapper.style.border = '1px solid rgb(255, 253, 241, 1)';
                        const intervalId = setInterval(() => innerCustomObserver(intervalId), 1500)



                    }
                }
            }
        }
    }

    const whSliderObserver = new MutationObserver(handleWhSliderMutation);
    whSliderObserver.observe(document, { childList: true, subtree: true, attributes: true });


    function innerCustomObserver(intervalId) {
        console.log('tik')
        const allData = document.querySelectorAll('.alr-wh-review-com-is-isLineClamp')
        const verifiedSocket = document.querySelectorAll('.alr-wh-account-info-row')


        if (allData.length) {

            verifiedSocket.forEach(el => {
                const verifiedContent = document.createElement("div");
                verifiedContent.classList.add("verified--bage-custom");
                verifiedContent.innerHTML = `Verified Review`;

                el.appendChild(verifiedContent);
            });
            allData.forEach(el => {
                el.innerHTML = el.getAttribute('title')
            })
            clearInterval(intervalId);
            whSliderObserver.disconnect();
        }
    }


});
