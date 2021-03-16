import React from 'react'

const Home = () => {
    return (
        <div>
            <section>
                <div className="jumbotron jumbotron-fluid "></div>
            </section>
            <section>
                <div className="container d-flex justify-content-center text-center container--2">
                    <div className="row ">
                        <div className="col">
                            <div><img src={"https://res.cloudinary.com/dpqxraalv/image/upload/v1613076383/houcine-ncib-B4TjXnI0Y2c-unsplash_zckmmc.jpg"} alt="pic" class="img-fluid image" /></div>
                            <div className="text--1"><p>My channel<br />1.3M Subscribers</p></div>
                            <div className="text--2"><h5>Each Night, As you sleep, <br /> I Destroy the world 🍌</h5></div>
                            <div className="d-flex div--1">
                                <p className="text--3">Subscribe</p>
                                <p className="text--4">Channel Chat </p>
                                <p className="text--5"><i class="fa fa-ellipsis-h"></i></p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="container container--3">
                    <div className="row row--1">
                        <div className="col-3">1
                        </div>
                        <div className="col-3">2
                        </div>
                        <div className="col-3">3
                        </div>
                        <div className="col-3">4
                        </div>
                    </div>
                    <div className="row row--1">
                        <div className="col-3">5
                        </div>
                        <div className="col-3">6
                        </div>
                        <div className="col-3">7
                        </div>
                        <div className="col-3">8
                        </div>

                    </div>
                </div>


            </section>
        </div>
    )
}

export default Home
