window.onload = function() {
    const popupBanner = document.getElementById('popupBanner');
    const closeBtn = document.getElementById('closeBtn');

    // Show the popup banner
    popupBanner.style.display = 'block';

    // Hide the popup after 1.5 seconds
    // setTimeout(function() {
    //     popupBanner.style.display = 'none';
    // }, 3000);

    closeBtn.onclick = function() {
        popupBanner.style.display = 'none';
    }
}