import React from "react";
import '../App.css';

const SectionThree = () => {
    return(
        <>
            <div className="container pb-2 pb-md-4 position-relative" id="sectionThree" style={{ marginBottom: "100px" }}>
                <div className="row" style={{ height: "100vh" }}>

                    <div className="col-12 col-md-3 p-md-0 animated animatedFadeInUp fadeInUp animation-delay5" style={{ backgroundColor : "#b0d5ea"}}>
                        <h1 className="text-light fw-bolder ps-2" style={{ fontSize: "150px" }}> 3 </h1>
                    </div>

                    {/* Mobile responsive */}
                    <div className="row d-block d-md-none d-flex justify-content-start animated animatedFadeInRight fadeInRight animation-delay5">
                        <h1 className="fw-bolder" style={{ fontSize: "70px", color: "#fd888e" }}> Strategy </h1>
                    </div>

                    <div className="col-12 col-md-9 p-md-0">

                        <div className="row ps-md-5 pt-5 pt-md-0 animated animatedFadeInRight fadeInRight animation-delay5">
                            <img src="https://cdn.pixabay.com/photo/2018/04/28/10/55/architecture-3357028_960_720.jpg" alt="section-3" width="100%" height="300" />
                        </div>

                        <div className="row px-4 pt-5 p-md-5 animated animatedFadeInLeft fadeInLeft animation-delay5">

                            <p className="text-secondary px-0 px-md-4">
                                Sit amet massa vitae tortor condimentum lacinia quis. Ornare arcu dui vivamus arcu felis bibendum ut. Consectetur adipiscing elit duis tristique sollicitudin. Volutpat lacus laoreet non curabitur. Magna fringilla urna porttitor rhoncus. Ultricies leo integer malesuada nunc vel risus commodo viverra. Ipsum a arcu cursus vitae congue. Imperdiet dui accumsan sit amet nulla facilisi. Tincidunt dui ut ornare lectus sit.
                            </p>

                            <a href="#!" className="text-decoration-none border-bottom">
                                <h2 className="px-0 px-md-4 py-4 d-flex justify-content-end" style={{ color: "rgb(176, 213, 234)" }}>
                                <span id="viewGallery"> VIEW GALLERY </span>
                                    &nbsp;
                                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
                                    <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
                                    </svg>
                                </h2>
                            </a>
                            
                        </div>

                        <div className="row d-none d-md-block d-flex justify-content-start position-absolute animated animatedFadeInRight fadeInRight animation-delay5" style={{ top: "70%", left: "10%" }}>                           
                            <h1 className="fw-bolder" style={{ fontSize: "150px", color: "#fd888e" }}> Strategy </h1>
                        </div>

                    </div>  
                                   
                </div>                
            </div>
        </>
    )
}

export default SectionThree;
