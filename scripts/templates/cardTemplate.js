function cardTemplate(id, name, image, description, aveRating){

  return  `
      <div class="card" id='snack-${id}'>

        <!--Card image-->
        <div class="view overlay hm-white-slight">
          <img src="${image}" class="img-fluid" alt="${name}">
          <a href="#snackCard-${id}" data-target='#snackModal' data-toggle='modal' class='modalBtn' id='snackModal' >
            <div id='snack-${id}' class="mask"></div>
          </a>
        </div>
        <!--/.Card image-->

        <!--Button-->
      <a href="#snackCard-${id}" data-toggle='modal' data-target='#snackModal' class="btn-floating modalBtn btn-action blue-gradient"><i id='snack-${id}' class="fa fa-chevron-right"></i></a>
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
