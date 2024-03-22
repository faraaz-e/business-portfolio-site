import React from "react";

const About = () => {
    return(
        <>
            <div className="container pb-3 pb-md-5 position-relative" id="about" style={{ marginBottom: "100px" }}>
                <div className="row text-center" style={{ height: "100vh" }}>

                        <div className="col-12 col-md-6 bg-light p-5 text-secondary d-flex border animated animatedFadeInLeft fadeInLeft animation-delay6" style={{ alignItems: "center", borderColor: "rgb(253, 136, 142)" }}>
                            Sit amet massa vitae tortor condimentum lacinia quis. Ornare arcu dui vivamus arcu felis bibendum ut. Consectetur adipiscing elit duis tristique sollicitudin. Volutpat lacus laoreet non curabitur. Magna fringilla urna porttitor rhoncus. Ultricies leo integer malesuada nunc vel risus commodo viverra. Ipsum a arcu cursus vitae congue. Imperdiet dui accumsan sit amet nulla facilisi. Tincidunt dui ut ornare lectus sit.
                        </div>
                        <div className="col-12 col-md-6 text-center">
                            <h1 className="fw-bolder d-none d-md-block animated animatedFadeInUp fadeInUp animation-delay5" style={{ fontSize: "150px", color: "rgb(176, 213, 234)" }}> About </h1>
                            {/* Mobile Responsive */}
                            <h1 className="fw-bolder d-block d-md-none animated animatedFadeInUp fadeInUp animation-delay5" style={{ fontSize: "70px", color: "rgb(176, 213, 234)" }}> About </h1>
                            <br/><br/><br/>
                            <div className="row animated animatedFadeInRight fadeInRight animation-delay6">
                                <h1 className="fw-bolder d-none d-md-block" style={{ fontSize: "100px", color: "rgb(253, 136, 142)" }}> 40+ </h1>
                                <p className="fw-bolder d-none d-md-block text-secondary" style={{ fontSize: "100px" }}> Clients </p>
                                {/* Mobile Responsive */}
                                <h1 className="fw-bolder d-block d-md-none" style={{ fontSize: "100px", color: "rgb(253, 136, 142)" }}> 40+ </h1>
                                <p className="fw-bolder d-block d-md-none text-secondary" style={{ fontSize: "100px" }}> Clients </p>
                            </div>
                        
                        </div> 

                </div>
            </div>
        </>
    )
}

export default About;
