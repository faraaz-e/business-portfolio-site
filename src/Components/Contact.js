import React from "react";

const Contact = () => {
    return(
        <>
            <div className="container pb-3 pb-md-5 position-relative bg-light" id="contact">
                <div className="row" style={{ height: "100vh" }}>

                    <div className="row text-center">
                        {/* Mobile responsive */}
                        <h1 className="fw-bolder d-block d-md-none text-secondary animated animatedFadeInUp fadeInUp animation-delay3" style={{ fontSize: "70px" }}> Contact </h1>
                        <h1 className="fw-bolder d-none d-md-block text-secondary animated animatedFadeInUp fadeInUp animation-delay3" style={{ fontSize: "150px" }}> Contact </h1>
                    </div>

                    <div className="row text-center">
                        <div className="col-12 col-md-8">
                            <div className="row py-4 animated animatedFadeInUp fadeInUp animation-delay4">
                                <h2 style={{ color: "dimgray", fontWeight: "bolder"}}> 
                                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-telephone" viewBox="0 0 16 16">
                                        <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
                                    </svg> &nbsp;
                                    +91-123-456-7890
                                </h2>
                            </div>
                            <div className="row py-4 animated animatedFadeInUp fadeInUp animation-delay5">
                                <h2 style={{ color: "dimgray", fontWeight: "bolder"}}> 
                                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-envelope" viewBox="0 0 16 16">
                                        <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"/>
                                    </svg> &nbsp;
                                    email@domain.com
                                </h2>
                            </div>
                            <div className="row py-4 animated animatedFadeInUp fadeInUp animation-delay6">
                                <h2 style={{ color: "dimgray", fontWeight: "bolder"}}> 
                                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-clock" viewBox="0 0 16 16">
                                        <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"/>
                                        <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z"/>
                                    </svg> &nbsp;
                                    10:00 AM - 7:00 PM
                                </h2>
                            </div>
                        </div>
                        <div className="col-12 col-md-4 animated animatedFadeInRight fadeInRight animation-delay6" style={{ alignItems: "center"}}>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9267.124769632454!2d72.81476409220399!3d18.959056831465755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7ce0f19846e49%3A0xdc9efea85298c9bf!2sGirgaon%20Chowpatty!5e0!3m2!1sen!2sin!4v1663743471535!5m2!1sen!2sin" title="maps" width="100%" height="300" style={{ border:0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </div>  

                </div>
            </div>
        </>
    )
}

export default Contact;
