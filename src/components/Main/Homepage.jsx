import "../Main/Homepage.css";
import book_nav from "../../assets/img/book_nav.png";
export default function Homepage() {
  return (
    <div className="home_page">
      <div className="div_img">
        <img className="div_img_home" src={book_nav} alt="" />
      </div>
      <h1 className="home_text">New Releases This Week</h1>
      <h6 className="home_h6">
        It's time to update your reading list with some of the latest and
        greatest releases in the literary world. From heart-pumping thrillers to
        captivating memoirs, this week's new releases offer something for
        everyone
      </h6>
      <button className="home_bt">Subscribe</button>
      <p className="Top_sellers">Top_sellers</p>
    </div>
  );
}
