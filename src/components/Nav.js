import React from 'react'
const Nav = () => {
    return (
        <div>

            <nav class="navbar navbar-expand-lg navbar-light ">

            <a class="navbar-brand" href="#">
            {/* <img src={"https://res.cloudinary.com/dpqxraalv/image/upload/v1612742553/img_m8wmpb.jpg"} alt="pic" class="img-fluid logo logo--1" /> */}
            <i class="fa fa-bell logo--1"></i> </a>
                <button class="navbar-toggler bg-white" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav mr-auto">

                        <li className="nav-item  active">
                            <a class="nav-link active" aria-current="page" href="#">Discover<i class="fa fa-angle-down discover"></i></a>
                        </li>
                        <li className="nav-item">
                            <a class="nav-link" href="#">Channels<i class="fa fa-angle-down channels"></i></a>
                        </li>
                      
                    </ul>

                    <ul class="navbar-nav navbar-nav-2">
                      
                            <li className="nav-item upload--1">
                                <a class="nav-link upload" href="#">Upload</a>
                            </li>

                            <li className="nav-item">
                                <a class="nav-link" href="#"><i class="fa fa-search search"></i></a>
                            </li>
                            <li className="nav-item">
                                <a class="nav-link" href="#"><i class="fa fa-comment comment"></i></a>
                            </li>
                            <li className="nav-item">
                                <a class="nav-link" href="#"><i class="fa fa-bell bell"></i></a>
                            </li>
                            <li className="nav-item">
                                <a class="nav-link" href="#">
                                <img src={"https://res.cloudinary.com/dpqxraalv/image/upload/v1613076383/houcine-ncib-B4TjXnI0Y2c-unsplash_zckmmc.jpg"} alt="pic" class="img-fluid logo" />
                                </a>
                            </li>
                      
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Nav
