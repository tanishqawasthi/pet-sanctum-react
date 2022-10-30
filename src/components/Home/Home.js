import React from 'react'
import "./Home.css";
import homeImg1 from "./Homeimages/stray-dof-sarfraz-scaled.jpg"
import homeImg2 from "./Homeimages/background.jpg"
import homeImg3 from "./Homeimages/stray2.jpg"
import homeImg4 from "./Homeimages/pet.jpg"
import homeImg5 from "./Homeimages/154189.jpg"
import homeImg6 from "./Homeimages/testimonials/modiji.jpg"
import homeImg7 from "./Homeimages/154189.jpg"
import homeImg8 from "./Homeimages/img.webp"

let Home = (props)=>{

    return (
        <React.Fragment>      
            <section id="home" className='home_sreekar'>
                <div className="container-fluid px-0 top-banner" style ={{backgroundImage: `url(${homeImg1}) `,backgroundRepeat: "noRepeat" ,backgroundPosition: "center"}}>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-5 col-md-6">
                                <h1 className="hech1_sreekar" style={{color: "white"}}>Providing All Animals Homes.</h1>
                                <p style={{color: "white"}}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis
                                    veritatis ducimus dolor harum
                                    neque consectetur ratione nisi sed architecto, atque et ipsum, esse laborum labore deleniti
                                    illum soluta molestiae nihil.</p>

                                <div className="mt-4">
                                    <a className="eh_sreekar" href="http://localhost:3000/Adopt?type=All">
                                    <button className="main-btn" id="banner-adopt-button">
                                        Adopt A Pet
                                    </button>
                                </a>
                                <a className="eh_sreekar" href="http://localhost:3000/Upload">
                                    <button className="white-btn ms-lg-4 mt-lg-0 mt-4">
                                        Find Owner
                                    </button>
                                </a>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>

        
            <section id="about" data-aos="fade-up">
                <div className="about-section wrapper" style={{backgroundColor: "var(--secondary-color)", paddingBottom: "0"}}>
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-7 col-md-12 mb-lg-0 mb-5">
                                <div className="card border-0 sreekar">
                                    <img src={homeImg7} className="card-image_sreekar img-fluid" alt="" />
                                </div>
                            </div>
                            <div className="col-lg-5 col-md-12 text-sec">
                                <h2 className="hech2_sreekar" style={{color:"white"}}>About Us</h2>
                                <p className="pee_sreekar">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea magnam corrupti repudiandae?
                                    Minus asperiores ipsum adipisci exercitationem recusand</p>
                                <a className="eh_sreekar" href="http://localhost:3000/DonateUs"><button className="main-btn mt-4">Read More</button></a>
                            </div>
                        </div>
                    </div>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <div className="rescue-stray-section wrapper" style={{backgroundColor: "white"}}>
                        <div className="container rescue-stray">
                            <div className="row align-items-center">
                                <div className="col-lg-5 col-md-12 text-sec mb-lg-0 mb-5">
                                    <h2 className="hech2_sreekar" style={{color: "var(--primary-color)"}}>Help a Stray Animal Get a Home.</h2>
                                    <p className="pee_sreekar">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti, soluta mollitia
                                        aspernatur ab ex veritatis culpa excepturi laboriosam asperiores quidem! Inventore
                                        commodi minima unde incidunt mollitia magni facere, ut corrupti!
                                        Cupiditate odio dolorum iure nostrum placeat a voluptates neque voluptas. Iusto deserunt
                                        iste nam, magni eius sint, necessitatibus debitis corporis non sequi illo quam tempora
                                        quibusdam exercitationem? Ad, accusantium cum.</p>
                                    <a className="eh_sreekar" href="http://localhost:3000/Rescue"><button className="main-btn mt-4">Rescue A Stray</button></a>
                                </div>
                                <div className="col-lg-7 col-md-12">
                                    <div className="card border-0">
                                        <img src={homeImg8} alt="" className="card-image_sreekar img-fluid" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="story" data-aos="fade-up">
                <div className="story-section" style={{background: `url(${homeImg2})`, backgroundRepeat: "noRepeat" ,backgroundPosition: "center"}}>
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12">
                                <div className="text-content">
                                    <h2 className="hech2_sreekar">It All Started With One Animal</h2>
                                    <p className="pee_sreekar">Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia est veniam magni
                                        perspiciatis, recusandae itaque voluptas. Nostrum laudantium dolores velit, soluta
                                        laboriosam similique et consequatur, optio repellat repellendus, voluptas repudiandae.
                                    </p>

                                    <a className="eh_sreekar" href="http://localhost:3000/Blogs"><button className="main-btn mt-3">Read More Blogs</button></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="explore-features" style={{backgroundColor: "var(--white-color)"}}>
                
                <div className="explore-features wrapper">

                    <div className="container">
                        <div className="row">
                            <div className="col-md-4 col-lg-4">
                                <div className="card bg-light h-100">
                                    <div className="card-body text-center">
                                        <div className='square-box'>
                                            <div className='square-content' id="card1Image" style={{backgroundImage: `url(${homeImg3})`, dataAos:"fade-right"}}>

                                            </div>
                                        </div>

                                        
                                        <a className="eh_sreekar" href="http://localhost:3000/Adopt?type=All"><div className="card-btn m-3">Adopt A Pet</div></a>
                                        <p className="card-text"> We feed the animals rescued</p>

                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-lg-4">
                                <div className="card bg-light h-100">
                                    <div className="card-body text-center">
                                        <div className='square-box'>
                                            <div className='square-content' id="card2Image" style={{backgroundImage: `url(${homeImg4})`, dataAos:"fade-up"}}></div>
                                        </div>

                                        <a className="eh_sreekar" href="http://localhost:3000/Upload"><div className="card-btn m-3">Find Owner</div></a>
                                    
                                        <p className="card-text"> We help them find a new place to live </p>

                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-lg-4">
                                <div className="card bg-light h-100">
                                    <div className="card-body text-center">
                                        <div className='square-box'>
                                            <div className='square-content' id="card3Image" style={{backgroundImage: `url(${homeImg5})`, dataAos:"fade-left"}}></div>
                                        </div>

                                        <a className="eh_sreekar" href="http://localhost:3000/Rescue"><div className="card-btn m-3">Rescue A Stray</div></a>
                                        <p className="card-text"> Lorem ipsum dolor sit. sdkfhj; </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="testimonials" data-aos="fade-up">
                <div className="wrapper testimonial-section">
                    <div className="container text-center">
                        <div className="text-center pb-4">
                            <h2 className="hech2_sreekar" style={{color: "var(--primary-color)"}}>Testimonials</h2>
                        </div>
                        <div className="row">
                            <div className="col-sm-12 col-lg-10 offset-lg-1">

                                <div className="container-fluid" id="testxyz">
                                    <div id="carouselExampleDark" className="carousel slide" data-bs-ride="carousel">
                                        <div className="carousel-indicators">
                                            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0"
                                                className="active" aria-current="true" aria-label="Slide 1"></button>
                                            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1"
                                                aria-current="true" aria-label="Slide 2"></button>
                                            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2"
                                                aria-current="true" aria-label="Slide 3"></button>
                                        </div>
                                        <div className="carousel-inner">
                                            <div className="carousel-item active">
                                                <div className="carousel-caption">
                                                    <img src={homeImg6} alt="" />
                                                    <p className="pee_sreekar">"Lorem ipsum dolor sit amet consectetur adipisicing elit"</p>
                                                    <h5 className="hech5_sreekar" style={{color: "white"}}>Narendra Modi - Prime Minister of India</h5>
                                                </div>
                                            </div>
                                            <div className="carousel-item">
                                                <div className="carousel-caption">
                                                    <img src="./Homeimages/testimonials/putin.jpeg" alt="" />
                                                    <p className="pee_sreekar">"Очень хороший сайт. Пожалуйста, ставьте оценки"</p>
                                                    <h5 className="hech5_sreekar" style={{color: "white"}}>Vladimir Putin - President of Russia</h5>
                                                </div>
                                            </div>
                                            <div className="carousel-item">
                                                <div className="carousel-caption">
                                                    <img src="./Homeimages/testimonials/testimonial.jpg" alt="" className="mt-3" />
                                                    <p className="pee_sreekar">"I wish there were more such organizations in the world."</p>
                                                    <h5 className="hech5_sreekar" style={{color: "white"}}>Dr. Michelle - Animal Right Activist</h5>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="p-5 faq" id="questions" data-aos="fade-up">
                <div className="container">
                    <h2 className="hech2_sreekar, text-center mb-4">
                        Frequently Asked Questions
                    </h2>
                    <div className="accordion accordion-flush" id="questions">
                        <div className="accordion-item">
                            <h2 className="hech2_sreekar, accordion-header">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#one">
                                    Where are you located?
                                </button>
                            </h2>
                            <div id="one" className="accordion-collapse collapse" data-bs-parent="#questions">
                                <div className="accordion-body">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur iste error molestiae
                                    magnam dolor unde repellat quo, laborum amet culpa saepe, quaerat nobis ducimus nulla aut
                                    laboriosam voluptas mollitia, velit dolorum dignissimos. Laboriosam vero aperiam asperiores,
                                    doloremque maiores, hic sit repellendus, rerum labore aspernatur odio aut accusamus quaerat
                                    quos dolores?
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="hech2_sreekar, accordion-header">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#two">
                                    What do I need to know?
                                </button>
                            </h2>
                            <div id="two" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia deleniti animi non nemo,
                                    nulla expedita blanditiis, commodi consequatur explicabo distinctio repudiandae! Facere
                                    vitae sequi qui magnam ea. Officia enim qui quasi, voluptate dignissimos autem optio nulla
                                    doloribus eveniet fugit omnis adipisci iure voluptatibus in tenetur earum natus cupiditate
                                    obcaecati aperiam.
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="hech2_sreekar, accordion-header">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#three">
                                    How much does it cost?
                                </button>
                            </h2>
                            <div id="three" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti distinctio ducimus
                                    provident, officiis quibusdam beatae nihil ab sit? Iusto quaerat nobis veniam maxime rerum.
                                    Laudantium nostrum explicabo corporis quam ratione quidem in dignissimos, debitis eum
                                    dolorum, voluptatum consequatur nihil adipisci voluptates consequuntur laborum laboriosam id
                                    beatae mollitia? Vel, a corporis.
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="hech2_sreekar, accordion-header">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#four">
                                    How do I sign up?
                                </button>
                            </h2>
                            <div id="four" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti distinctio ducimus
                                    provident, officiis quibusdam beatae nihil ab sit? Iusto quaerat nobis veniam maxime rerum.
                                    Laudantium nostrum explicabo corporis quam ratione quidem in dignissimos, debitis eum
                                    dolorum, voluptatum consequatur nihil adipisci voluptates consequuntur laborum laboriosam id
                                    beatae mollitia? Vel, a corporis.
                                </div>
                            </div>
                        </div>
                   
                    <div className="accordion-item">
                        <h2 className="hech2_sreekar, accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                data-bs-target="#five">
                                What can I expect out of your courses?
                            </button>
                        </h2>
                        <div id="five" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti distinctio ducimus provident,
                                officiis quibusdam beatae nihil ab sit? Iusto quaerat nobis veniam maxime rerum. Laudantium
                                nostrum explicabo corporis quam ratione quidem in dignissimos, debitis eum dolorum, voluptatum
                                consequatur nihil adipisci voluptates consequuntur laborum laboriosam id beatae mollitia? Vel, a
                                corporis.
                            </div> </div>
                    
                        </div>
                    </div>
                </div>
            </section>
        
        </React.Fragment>
    );
};

export default Home;