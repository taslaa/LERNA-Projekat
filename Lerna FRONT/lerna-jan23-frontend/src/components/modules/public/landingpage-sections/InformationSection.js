import "./../../../../assets/styles/InformationSection.css"


export default function InformationSection(){




    return(
    <>
    <div class="row">
          <div class="col-lg-4">
            <div class="icon-lg bg-info bg-opacity-10 text-info rounded-circle"><i class="bi bi-lightning-fill"></i></div>
            <p class="info-name">Heading</p>
            <p class="info-details">Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna.</p>
          </div>
          <div class="col-lg-4">
            <div class="icon-lg bg-danger bg-opacity-10 text-danger rounded-circle"><i class="bi bi-stopwatch-fill"></i></div>
            <p class="info-name">Heading</p>
            <p class="info-details">Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh.</p>
          </div>
          <div class="col-lg-4">
            <div class="icon-lg bg-orange bg-opacity-10 text-orange rounded-circle"><i class="bi bi-shield-fill-check"></i></div>
            <p class="info-name">Heading</p>
            <p class="info-details">Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>
          </div>
    </div>
    </>
    );
}