import React from "react";

const Home = () => {
    return(
        <>
            <div className="container pb-5 p-0" style={{ overflow: "hidden", marginBottom: "100px" }}>
                <div className="row">
                    <img 
                    src="https://images.unsplash.com/photo-1565766867241-39fb1c434768?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1331&q=80" 
                    alt="banner_img" 
                    width="100vw"
                    height="50%"
                    />        

                    <div className="d-none d-lg-block position-absolute p-5 top-50 w-50">
                        <h1 className="text-dark fw-bold animated animatedFadeInUp fadeInUp animation-delay" style={{ fontSize: '70px' }}> Quality to sustain </h1>
                        <p className="text-secondary animated animatedFadeInUp fadeInUp animation-delay2"> Our mission is to build a more sustainable society through exceptional architecture that transforms, inspires and enhances the environments in which we live. </p>
                    </div>

                    {/* Mobile Devices */}
                    <div className="d-block d-lg-none position-absolute text-dark p-5 w-75" style={{ top: "18%" }}>
                        <h1 className="fw-bold animated animatedFadeInUp fadeInUp animation-delay" style={{ fontSize: '25px' }}> Quality to sustain </h1>
                        <p className="text-secondary animated animatedFadeInUp fadeInUp animation-delay2" style={{ fontSize: '10px' }}> Our mission is to build a more sustainable society through exceptional architecture that transforms, inspires and enhances the environments in which we live. </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;