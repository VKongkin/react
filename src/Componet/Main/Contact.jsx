import React from 'react'
// import './Hmm.css'

export const Contact = () => {
    return (
        <div>   <div class="meng">
            <div class="yeya">
                <div className="mySlides">
                    <img src="https://bbu.edu.kh/photos/banner/1707361852_banner1-2024-02-08%2010.05.56.jpg" alt="" />
                </div>
                <div className="mySlides">
                    <img src="https://bbu.edu.kh/photos/banner/1704960279_2024-01-11%2015.03.45.jpg" alt="" />
                </div>
                <div className="mySlides">
                    <img src="https://bbu.edu.kh/photos/banner/1704960279_2024-01-11%2015.03.45.jpg" alt="" />
                </div>



                <div
                    className="w3-center w3-container w3-section w3-large w3-text-white w3-display-bottommiddle"

                >
                    <div className="all">
                        <div className="hok">
                            <div
                                className="G_M demo w3-border w3-transparent w3-hover-white"
                                onclick="currentDiv(1)"
                            ></div>
                            <div
                                className="G_M demo w3-border w3-transparent w3-hover-white"
                                onclick="currentDiv(2)"
                            ></div>
                            <div
                                className="G_M demo w3-border w3-transparent w3-hover-white"
                                onclick="currentDiv(3)"
                            ></div>
                            <div className="" onclick="plusDivs(-1)">&#10094;</div>

                            <div className="" onclick="plusDivs(1)">&#10095;</div>
                        </div>
                    </div>
                </div>
            </div>
        </div></div>
    )
}
<script>
    var slideIndex = 1;
    showDivs(slideIndex);

    function plusDivs(n) {"showDivs((slideIndex += n));"

    }

    function currentDiv(n) {" showDivs((slideIndex = n));"

    }

    function showDivs(n) {`
        var i;
    var x = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("demo");
        if (n > x.length) {
        slideIndex = 1;
        }
    if (n < 1) {
        slideIndex = x.length;
        }
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
        }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" w3-white", "");
        }
    x[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " w3-white";
     ` }

</script>
