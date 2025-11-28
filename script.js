
/* simple on click event listener for the menu button! Uses the animate command in order to give the menu a little more personality as its moving out. */


let isShown = true;

document.getElementById("menuIcon").addEventListener("click", hideBar);

function hideBar() {
  let sideBarHideShow = document.getElementsByClassName("navStyle")[0];
  

  if (isShown) {
    sideBarHideShow.animate([
      {
        transform: "translateY(300px)"

      },
      {
        transform: "translateY(0)"
      }

    ], {
      duration: 1000,
      fill:"forwards"
    } );
    
    isShown = false;
  } else {
    sideBarHideShow.animate([
      {
        transform: "translateY(0px)"

      },
      {
        transform: "translateY(400px)"
      }

    ], {
      duration: 1000,
      fill:"forwards"
    } );
    
    isShown = true;
  }
}


