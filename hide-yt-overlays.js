function hideStupidStuff() {

  // get stuff to hide from page
  let ceElements = document.getElementsByClassName("ytp-ce-element");
  let coveringOverlays = document.getElementsByClassName("ytp-ce-covering-overlay");
  let coveringOverlayShadows = document.getElementsByClassName("ytp-ce-covering-shadow-top");
  let coveringImages = document.getElementsByClassName("ytp-ce-covering-image");
  let elementShadows = document.getElementsByClassName("ytp-ce-element-shadow");
  let adOverlays = document.getElementsByClassName("ytp-ad-overlay-slot");

  // put stuff to hide in array
  let stuffToHide = [ceElements, coveringOverlays, coveringOverlayShadows, coveringImages, elementShadows, adOverlays];

  // define hide function
  function hideElements(arr) {
    for (let i = 0, n = arr.length; i < n; i++) {
		  arr[i].style.visibility = "hidden";
	  }
  }

  // iterate through array running hide function on each
  for (let i = 0, n = stuffToHide.length; i < n; i++) {
    hideElements(stuffToHide[i]);
  }

}

hideStupidStuff();