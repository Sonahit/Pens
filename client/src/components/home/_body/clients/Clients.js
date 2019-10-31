import React, { Component } from "react";
import "./Clients.scss";

import Client from "./Client";

const clients = [
  {
    logo: "https://cdn.everydaypower.com/wp-content/uploads/2019/05/smile-quotes-for-when-youre-happy.jpg",
    companyName: "Duis vulputate, ipsum at volutpat vestibulum",
    comment: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus blandit augue leo, ut molestie lorem consectetur quis. Integer sodales
              enim justo, sit amet mollis ante porta vitae. Sed quis aliquet dolor, a pulvinar ipsum. Aenean erat elit, hendrerit quis nisi quis,
              semper aliquam eros. Duis vulputate, ipsum at volutpat vestibulum, dui risus sagittis odio, non euismod velit massa ac mi.`,
    information: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    logo: "https://cdn-prod.medicalnewstoday.com/content/images/headlines/317/317443/nice-man-smiling.jpg",
    companyName: "Duis vulputate, ipsum at volutpat vestibulum".toUpperCase(),
    comment: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus blandit augue leo, ut molestie lorem consectetur quis. Integer sodales
              enim justo, sit amet mollis ante porta vitae. Sed quis aliquet dolor, a pulvinar ipsum. Aenean erat elit, hendrerit quis nisi quis,
              semper aliquam eros. Duis vulputate, ipsum at volutpat vestibulum, dui risus sagittis odio, non euismod velit massa ac mi.`.toUpperCase(),
    information: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.".toUpperCase()
  },
  {
    logo: "https://lakecreekdental.com/wp-content/uploads/2019/06/smiling_620.jpg",
    companyName: "Duis vulputate, ipsum at volutpat vestibulum".toLowerCase(),
    comment: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus blandit augue leo, ut molestie lorem consectetur quis. Integer sodales
              enim justo, sit amet mollis ante porta vitae. Sed quis aliquet dolor, a pulvinar ipsum. Aenean erat elit, hendrerit quis nisi quis,
              semper aliquam eros. Duis vulputate, ipsum at volutpat vestibulum, dui risus sagittis odio, non euismod velit massa ac mi.`.toLowerCase(),
    information: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.".toLowerCase()
  }
];

function repeatContent(array = [], number = 0) {
  if (number > 0) {
    const repeated = [];
    for (let i = 0, j = 0; i < number * array.length; i++, j = j < array.length - 1 ? j + 1 : 0) {
      repeated.push(array[j]);
    }
    return repeated;
  }
  return array;
}

export default class Clients extends Component {
  render() {
    //From scss style
    const rowHeight = 250;
    const imgHeight = parseInt(Math.round(rowHeight / 2.5).toFixed(0));
    return (
      <section className="home_clients">
        {/*TODO: Make an grid 3x3 with info and comments
           TODO: Tell something about clients (Lores ipsum)
          
        */}
        <div className="home_clients__grid">
          {repeatContent(clients, 3).map((client, i) => (
            <Client client={client} key={i} imgHeight={imgHeight} />
          ))}
        </div>
      </section>
    );
  }
}
