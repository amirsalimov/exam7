import "../Item/Item.css";
import bookitem from "../../assets/img/bookitem.png";
import bookitem2 from "../../assets/img/bookitem2.png";
import bookitem3 from "../../assets/img/bookitem3.png";
import { data } from "../../const";
import Homepage from "../Main/Homepage";
import Navbar from "../Navbar/Navbar";
import { useNavigate } from "react-router";

export default function item() {
  const navigate = useNavigate();

  return (
    <div>
      <Navbar />
      <Homepage />
      <div className="item_top">
        {data.map((item) => {
          return (
            <div key={item.id}>
              <img src={bookitem3} alt="" />
              <h2 className="text_top3">{item.name}</h2>
              <h6 className="text_top63">{item.title}</h6>
              <p className="p_top1"> discount: $ {item.price}</p>
              <button
                className="top_bt3"
                onClick={(handleInputChange) => navigate(`/single/${item.id}`)}
              >
                Add to basket
              </button>

              <button
                className="top_like3"
                onClick={(handleInputChange) => navigate(`/Like/${item.id}`)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="33"
                  height="33"
                  viewBox="0 0 33 33"
                  fill="none"
                  widths={200}
                >
                  <circle cx="16.5" cy="16.5" r="16.5" fill="white" />
                  <path
                    d="M23.8434 11.1566C23.4768 10.79 23.0417 10.4991 22.5627 10.3006C22.0837 10.1021 21.5704 10 21.0519 10C20.5335 10 20.0201 10.1021 19.5411 10.3006C19.0621 10.4991 18.627 10.79 18.2605 11.1566L17.4998 11.9173L16.7392 11.1566C15.9988 10.4163 14.9947 10.0004 13.9477 10.0004C12.9007 10.0004 11.8966 10.4163 11.1563 11.1566C10.4159 11.897 10 12.9011 10 13.9481C10 14.9951 10.4159 15.9992 11.1563 16.7395L11.9169 17.5002L17.4998 23.0831L23.0827 17.5002L23.8434 16.7395C24.21 16.373 24.5009 15.9379 24.6994 15.4589C24.8979 14.9799 25 14.4665 25 13.9481C25 13.4296 24.8979 12.9163 24.6994 12.4373C24.5009 11.9583 24.21 11.5232 23.8434 11.1566Z"
                    fill="#FF0000"
                    stroke="#FF0000"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                Like
                <br />
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
