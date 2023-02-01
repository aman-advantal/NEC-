import React from "react";

export const How_to_reach = () => {
  return (
    <>
      <div style={{ padding: "2%" }}>
        <div class="mapouter">
          <div class="gmap_canvas">
            <iframe
              class="gmap_iframe"
              frameborder="0"
              scrolling="no"
              marginheight="0"
              marginwidth="0"
              src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=gurukripa Hotel&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            ></iframe>
            <a href="https://pdflist.com/" alt="pdf download">
              Pdf download
            </a>
          </div>
        </div>
      </div>
      {/* <div>
        <iframe
          width="425"
          height="350"
          frameborder="0"
          scrolling="no"
          marginheight="0"
          marginwidth="0"
          src="https://www.openstreetmap.org/export/embed.html?bbox=75.8873587846756%2C22.749608345958283%2C75.89146792888643%2C22.752586459092708&amp;layer=mapnik&amp;marker=22.751097903435497%2C75.88941294999995"
          style="border: 1px solid black"
        ></iframe>
        <br />
        <small>
          <a href="https://www.openstreetmap.org/?mlat=22.75110&amp;mlon=75.88941#map=18/22.75110/75.88941&amp;layers=N">
            View Larger Map
          </a>
        </small>
       
      </div> */}
    </>
  );
};
