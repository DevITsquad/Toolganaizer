

document.addEventListener('DOMContentLoaded', () => {
    let wasCalledCounter = 0
    const maxCalls = 5

    const custom_header = `
    <h2 class="collection_custom markered_text"><p>real people ,<strong>real voices</strong></p></h2>
    <div class="custom_reviews_text">
    <span>
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9 0L11.1137 6.89121L18 6.87539L12.42 11.1186L14.5623 18L9 13.7312L3.43769 18L5.58 11.1186L0 6.87539L6.88632 6.89121L9 0Z" fill="#FBBC04"/>
      </svg>
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9 0L11.1137 6.89121L18 6.87539L12.42 11.1186L14.5623 18L9 13.7312L3.43769 18L5.58 11.1186L0 6.87539L6.88632 6.89121L9 0Z" fill="#FBBC04"/>
      </svg>
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9 0L11.1137 6.89121L18 6.87539L12.42 11.1186L14.5623 18L9 13.7312L3.43769 18L5.58 11.1186L0 6.87539L6.88632 6.89121L9 0Z" fill="#FBBC04"/>
      </svg>
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9 0L11.1137 6.89121L18 6.87539L12.42 11.1186L14.5623 18L9 13.7312L3.43769 18L5.58 11.1186L0 6.87539L6.88632 6.89121L9 0Z" fill="#FBBC04"/>
      </svg>
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9 0L11.1137 6.89121L18 6.87539L12.42 11.1186L14.5623 18L9 13.7312L3.43769 18L5.58 11.1186L0 6.87539L6.88632 6.89121L9 0Z" fill="#FBBC04"/>
      </svg>
     </span>
     <p><strong>4.8/5</strong>Based On<strong>700+</strong>Happy Customers Reviews</p>
    </div>
     `

    function handleWhSliderMutation(mutationsList) {
        for (const mutation of mutationsList) {
            if (mutation.type === 'childList') {
                for (const addedNode of mutation.addedNodes) {
                    // console.log(addedNode)
                    if (addedNode.classList && addedNode.classList.contains('alr-wh-slider')) {
                        const mainReviewsWrapper = addedNode.parentNode.parentNode.parentNode.parentNode
                        mainReviewsWrapper.style.background = 'rgba(255, 253, 241, 1)';
                        mainReviewsWrapper.style.minHeight = '610px';
                        mainReviewsWrapper.style.border = '1px solid rgb(255, 253, 241, 1)';

                        const intervalId = setInterval(() => innerCustomObserver(intervalId ,custom_header), 1500)



                    }
                }
            }
        }
    }

    const whSliderObserver = new MutationObserver(handleWhSliderMutation);
    whSliderObserver.observe(document, { childList: true, subtree: true, attributes: true });


    function innerCustomObserver(intervalId , custom_header) {
        wasCalledCounter++
        const allData = document.querySelectorAll('.alr-wh-review-com-is-isLineClamp')
        const verifiedSocket = document.querySelectorAll('.alr-wh-account-info-row')
        const header = document.querySelector('.alr-review-summary-title')
        header.innerHTML = '';
        header.insertAdjacentHTML('afterend', custom_header);
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
        } else if (wasCalledCounter === maxCalls) {
            clearInterval(intervalId);
            whSliderObserver.disconnect();
        }

    }


});
