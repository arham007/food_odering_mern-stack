import React from 'react';
import "./favourite.css"
import ChevronLeftRoundedIcon from '@mui/icons-material/ChevronLeftRounded';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';

const FavouriteItem = () => {
  
  return (
    <div>
      <div class="container my-4">




        {/* <!--Carousel Wrapper--> */}
        <div id="multi-item-example" class="carousel slide carousel-multi-item" data-ride="carousel">

          {/* <!--Controls--> */}
          <div class="controls-top" style={{ textAlign: "center", margin: "10px 0px" }}>
            <a class="btn-floating" href="#multi-item-example" data-slide="prev"><ChevronLeftRoundedIcon style={{ fontSize: "50px" }} /></a>
            <a class="btn-floating" href="#multi-item-example" data-slide="next"><ChevronRightRoundedIcon style={{ fontSize: "50px" }} /></a>
          </div>
          {/* <!--/.Controls--> */}

          {/* <!--Indicators--> */}
          <ol class="carousel-indicators">
            <li data-target="#multi-item-example" data-slide-to="0" class="active"></li>
            <li data-target="#multi-item-example" data-slide-to="1"></li>

          </ol>
          {/* <!--/.Indicators--> */}

          {/* <!--Slides--> */}
          <div class="carousel-inner" role="listbox">

            {/* <!--First slide--> */}
            <div class="carousel-item active">

              <div class="col-md-4" style={{ float: "left" }}>
                <div class="card mb-2">
                  <img class="card-img-top"
                    src="https://burgerlab.com.pk/wp-content/uploads/2020/12/Dopper_FrontPage.png?c062ef&c062ef" alt="Card image cap" />
                  <div class="card-body">
                    <h4 class="card-title">Bumper Menu - Doppler</h4>
                    <p class="card-text">
                      <span style={{fontSize:"20px"}} class="fa fa-star checked"></span>
                      <span style={{fontSize:"20px"}} class="fa fa-star checked"></span>
                      <span style={{fontSize:"20px"}} class="fa fa-star checked"></span>
                      <span style={{fontSize:"20px"}} class="fa fa-star checked" ></span>
                      <span style={{fontSize:"20px"}} class="fa fa-star checked"></span>
                      <span className="p-3">(150 Reviews)</span>
                    </p>
                    <a ><span style={{fontSize:"14px",textAlign:"center",backgroundColor:"#e3defe",borderColor:"#e3defe",color:"#634fd2",padding:"10px",borderRadius:"5px"}} class="fa fa-heart me-10"> 12k Like it</span></a>
                  </div>
                </div>
              </div>

              <div class="col-md-4" style={{ float: "left" }}>
                <div class="card mb-2">
                <img class="card-img-top"
                    src="https://em-cdn.eatmubarak.pk/55018/dish_image/1630565918.jpg" alt="Card image cap" />
                  <div class="card-body">
                    <h4 class="card-title">Nuker Chicken + All American</h4>
                    <p class="card-text">
                      <span style={{fontSize:"20px"}} class="fa fa-star checked"></span>
                      <span style={{fontSize:"20px"}} class="fa fa-star checked"></span>
                      <span style={{fontSize:"20px"}} class="fa fa-star checked"></span>
                      <span style={{fontSize:"20px"}} class="fa fa-star checked" ></span>
                      <span style={{fontSize:"20px"}} class="fa fa-star checked"></span>
                      <span className="p-3">(150 Reviews)</span>
                    </p>
                    <a ><span style={{fontSize:"14px",textAlign:"center",backgroundColor:"#e3defe",borderColor:"#e3defe",color:"#634fd2",padding:"10px",borderRadius:"5px"}} class="fa fa-heart me-10"> 12k Like it</span></a>
                  </div>
                </div>
              </div>

              <div class="col-md-4" style={{ float: "left" }}>
                <div class="card mb-2">
                <img class="card-img-top"
                    src="https://menuprices.pk/wp-content/uploads/2021/02/Burger-Lab-Faisalabad-Specialty.png" alt="Card image cap" />
                  <div class="card-body">
                    <h4 class="card-title"> Bumper Menu - All American Double Cheese</h4>
                    <p class="card-text">
                      <span style={{fontSize:"20px"}} class="fa fa-star checked"></span>
                      <span style={{fontSize:"20px"}} class="fa fa-star checked"></span>
                      <span style={{fontSize:"20px"}} class="fa fa-star checked"></span>
                      <span style={{fontSize:"20px"}} class="fa fa-star checked" ></span>
                      <span style={{fontSize:"20px"}} class="fa fa-star checked"></span>
                      <span className="p-3">(150 Reviews)</span>
                    </p>
                    <a ><span style={{fontSize:"14px",textAlign:"center",backgroundColor:"#e3defe",borderColor:"#e3defe",color:"#634fd2",padding:"10px",borderRadius:"5px"}} class="fa fa-heart me-10"> 12k Like it</span></a>
                  </div>
                </div>
              </div>



            </div>
            {/* <!--/.First slide--> */}

            {/* <!--Second slide--> */}
            <div class="carousel-item">

              <div class="col-md-4" style={{ float: "left" }}>
                <div class="card mb-2">
                  <img class="card-img-top"
                    src="https://bbqtonight.com/wp-content/uploads/2016/05/38-1367395450-300x300.jpg" alt="Card image cap" />
                  <div class="card-body">
                    <h4 class="card-title">BBQ Special Platter</h4>
                    <p class="card-text">
                      <span style={{fontSize:"20px"}} class="fa fa-star checked"></span>
                      <span style={{fontSize:"20px"}} class="fa fa-star checked"></span>
                      <span style={{fontSize:"20px"}} class="fa fa-star checked"></span>
                      <span style={{fontSize:"20px"}} class="fa fa-star checked" ></span>
                      <span style={{fontSize:"20px"}} class="fa fa-star checked"></span>
                      <span className="p-3">(150 Reviews)</span>
                    </p>
                    <a ><span style={{fontSize:"14px",textAlign:"center",backgroundColor:"#e3defe",borderColor:"#e3defe",color:"#634fd2",padding:"10px",borderRadius:"5px"}} class="fa fa-heart me-10"> 12k Like it</span></a>
                  </div>
                </div>
              </div>

              <div class="col-md-4" style={{ float: "left" }}>
                <div class="card mb-2">
                  <img class="card-img-top"
                    src="https://bbqtonight.com/wp-content/uploads/2016/05/95-1366284968-300x300.jpg" alt="Card image cap" />
                  <div class="card-body">
                  <h4 class="card-title">Chargah Full</h4>
                    <p class="card-text">
                      <span style={{fontSize:"20px"}} class="fa fa-star checked"></span>
                      <span style={{fontSize:"20px"}} class="fa fa-star checked"></span>
                      <span style={{fontSize:"20px"}} class="fa fa-star checked"></span>
                      <span style={{fontSize:"20px"}} class="fa fa-star checked" ></span>
                      <span style={{fontSize:"20px"}} class="fa fa-star checked"></span>
                      <span className="p-3">(150 Reviews)</span>
                    </p>
                    <a ><span style={{fontSize:"14px",textAlign:"center",backgroundColor:"#e3defe",borderColor:"#e3defe",color:"#634fd2",padding:"10px",borderRadius:"5px"}} class="fa fa-heart me-10"> 12k Like it</span></a>
                  </div>
                </div>
              </div>



              <div class="col-md-4" style={{ float: "left" }}>
                <div class="card mb-2">
                  <img class="card-img-top"
                    src="https://bbqtonight.com/wp-content/uploads/2016/05/0-1365448698-300x300.jpg" alt="Card image cap" />
                  <div class="card-body">
                  <h4 class="card-title">BBQ Mutton Ribs</h4>
                    <p class="card-text">
                      <span style={{fontSize:"20px"}} class="fa fa-star checked"></span>
                      <span style={{fontSize:"20px"}} class="fa fa-star checked"></span>
                      <span style={{fontSize:"20px"}} class="fa fa-star checked"></span>
                      <span style={{fontSize:"20px"}} class="fa fa-star checked" ></span>
                      <span style={{fontSize:"20px"}} class="fa fa-star checked"></span>
                      <span className="p-3">(150 Reviews)</span>
                    </p>
                    <a ><span style={{fontSize:"14px",textAlign:"center",backgroundColor:"#e3defe",borderColor:"#e3defe",color:"#634fd2",padding:"10px",borderRadius:"5px"}} class="fa fa-heart me-10"> 12k Like it</span></a>
                  </div>
                </div>
              </div>

            </div>
            {/* <!--/.Second slide--> */}

          {/* third Slide */}
          <div class="carousel-item">

<div class="col-md-4" style={{ float: "left" }}>
  <div class="card mb-2">
    <img class="card-img-top"
      src="https://dominos.com.pk/ProductImages/df42b37d75ec4a5bb27cc2e99d2ac163.jpg" alt="Card image cap" />
    <div class="card-body">
    <br />
      <br />
      <br />
      <h4 class="card-title">Pakistani Hot</h4>
      <p class="card-text">
        <span style={{fontSize:"20px"}} class="fa fa-star checked"></span>
        <span style={{fontSize:"20px"}} class="fa fa-star checked"></span>
        <span style={{fontSize:"20px"}} class="fa fa-star checked"></span>
        <span style={{fontSize:"20px"}} class="fa fa-star checked" ></span>
        <span style={{fontSize:"20px"}} class="fa fa-star checked"></span>
        <span className="p-3">(150 Reviews)</span>
      </p>
      <a ><span style={{fontSize:"14px",textAlign:"center",backgroundColor:"#e3defe",borderColor:"#e3defe",color:"#634fd2",padding:"10px",borderRadius:"5px"}} class="fa fa-heart me-10"> 12k Like it</span></a>
    </div>
  </div>
</div>

<div class="col-md-4" style={{ float: "left" }}>
  <div class="card mb-2">
    <img class="card-img-top"
      src="https://dominos.com.pk/ProductImages/7758775c0cda4433904d1ed8ed608b71.jpg" alt="Card image cap" />
    <div class="card-body">
    <br />
      <br />
      <br />
    <h4 class="card-title">Legend - BBQ</h4>
      <p class="card-text">
        <span style={{fontSize:"20px"}} class="fa fa-star checked"></span>
        <span style={{fontSize:"20px"}} class="fa fa-star checked"></span>
        <span style={{fontSize:"20px"}} class="fa fa-star checked"></span>
        <span style={{fontSize:"20px"}} class="fa fa-star checked" ></span>
        <span style={{fontSize:"20px"}} class="fa fa-star checked"></span>
        <span className="p-3">(150 Reviews)</span>
      </p>
      <a ><span style={{fontSize:"14px",textAlign:"center",backgroundColor:"#e3defe",borderColor:"#e3defe",color:"#634fd2",padding:"10px",borderRadius:"5px"}} class="fa fa-heart me-10"> 12k Like it</span></a>
    </div>
  </div>
</div>



<div class="col-md-4" style={{ float: "left" }}>
  <div class="card mb-2">
    <img class="card-img-top"
      src="https://dominos.com.pk/ProductImages/7c00101c8ffb4f0c86e9a1aeb7eb9aca.jpg" alt="Card image cap" />
    <div class="card-body">
      <br />
      <br />
      <br />
    <h4 class="card-title">Extravaganza</h4>
      <p class="card-text">
        <span style={{fontSize:"20px"}} class="fa fa-star checked"></span>
        <span style={{fontSize:"20px"}} class="fa fa-star checked"></span>
        <span style={{fontSize:"20px"}} class="fa fa-star checked"></span>
        <span style={{fontSize:"20px"}} class="fa fa-star checked" ></span>
        <span style={{fontSize:"20px"}} class="fa fa-star checked"></span>
        <span className="p-3">(150 Reviews)</span>
      </p>
      <a ><span style={{fontSize:"14px",textAlign:"center",backgroundColor:"#e3defe",borderColor:"#e3defe",color:"#634fd2",padding:"10px",borderRadius:"5px"}} class="fa fa-heart me-10"> 12k Like it</span></a>
    </div>
  </div>
</div>

</div>

          </div>
          {/* <!--/.Slides--> */}

        </div>
        {/* <!--/.Carousel Wrapper--> */}
      </div>
    </div>
  )
}

export default FavouriteItem

