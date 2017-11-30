class makeCard {
  constructor(){}

  static makeCard(name, image, description, aveRating){

    `<div class="col-xl-4 col-md-6 col-sm-7 mt-5">
      <div class="card">

        <!--Card image-->
        <div class="view overlay hm-white-slight">
          <img src="${image}" class="img-fluid" alt="">
          <a href="#stop">
            <div class="mask"></div>
          </a>
        </div>
        <!--/.Card image-->

        <!--Button-->
        <a href="#stop" class="btn-floating btn-action blue-gradient"><i class="fa fa-chevron-right"></i></a>

        <!--Card content-->
        <div class="card-body">
            <!--Title-->
          <h4 class="card-title">${name}</h4>
          <hr>
          <!--Text-->
          <p class="card-text">${description}</p>
        </div>
        <!--/.Card content-->

        <!-- Card footer -->
        <div class="card-data blue-gradient">
          <ul>
            <li><a href="#"><small>rating</small></a></li>
            <li><a href="#"><i class="fa fa-star"></i></a></li>
            <li><a href="#"><i class="fa fa-star"></i></a></li>
            <li><a href="#"><i class="fa fa-star-half-full"></i></a></li>
            <li><a href="#"><i class="fa fa-star-o"></i></a></li>
            <li><a href="#"><i class="fa fa-star-o"></i></a></li>
          </ul>
        </div>
        <!-- Card footer -->
      </div>`
  }
}
module.exports = makeCard
