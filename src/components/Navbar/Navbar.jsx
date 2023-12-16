import { Link } from "react-router-dom";
import "../Navbar/Navbar.css";

export default function Navbar() {
  return (
    <div className="navbar">
      <ul className="nav">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="26"
          height="20"
          viewBox="0 0 26 20"
          fill="none"
          widths={50}
        >
          <path
            d="M25 19H1M16.75 10H1M25 1H1"
            stroke="#0D0842"
            stroke-width="1.7"
            stroke-linecap="round"
          />
        </svg>

        <li>
          <input
            className="input"
            type="search"
            placeholder="search, select and buy books"
          />
        </li>
        <li className="nav_log">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="24"
            viewBox="0 0 20 24"
            fill="none"
            widths={50}
          >
            <path
              d="M15.1429 5.88889C15.1429 8.58895 12.8403 10.7778 10 10.7778C7.15968 10.7778 4.85714 8.58895 4.85714 5.88889C4.85714 3.18883 7.15968 1 10 1C12.8403 1 15.1429 3.18883 15.1429 5.88889Z"
              fill="white"
            />
            <path
              d="M10 14.4444C5.02944 14.4444 1 18.2749 1 23H19C19 18.2749 14.9706 14.4444 10 14.4444Z"
              fill="white"
            />
            <path
              d="M15.1429 5.88889C15.1429 8.58895 12.8403 10.7778 10 10.7778C7.15968 10.7778 4.85714 8.58895 4.85714 5.88889C4.85714 3.18883 7.15968 1 10 1C12.8403 1 15.1429 3.18883 15.1429 5.88889Z"
              stroke="#0D0842"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M10 14.4444C5.02944 14.4444 1 18.2749 1 23H19C19 18.2749 14.9706 14.4444 10 14.4444Z"
              stroke="#0D0842"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <Link to="/login">Login</Link>
        </li>
        <li className="nav_like">
          <Link to="/like">
            {" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="33"
              height="33"
              viewBox="0 0 33 33"
              fill="none"
              widths={50}
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
            </svg>{" "}
            link
          </Link>
        </li>
        <li className="nav_bask">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="24"
            viewBox="0 0 22 24"
            fill="none"
            widths={50}
          >
            <path
              d="M1 1.5H3.22222L3.66667 3.83333M5.44444 13.1667H16.5556L21 3.83333H3.66667M5.44444 13.1667L3.66667 3.83333M5.44444 13.1667L2.89679 15.8417C2.19682 16.5767 2.69257 17.8333 3.68246 17.8333H16.5556M16.5556 17.8333C15.3283 17.8333 14.3333 18.878 14.3333 20.1667C14.3333 21.4553 15.3283 22.5 16.5556 22.5C17.7829 22.5 18.7778 21.4553 18.7778 20.1667C18.7778 18.878 17.7829 17.8333 16.5556 17.8333ZM7.66667 20.1667C7.66667 21.4553 6.67174 22.5 5.44444 22.5C4.21715 22.5 3.22222 21.4553 3.22222 20.1667C3.22222 18.878 4.21715 17.8333 5.44444 17.8333C6.67174 17.8333 7.66667 18.878 7.66667 20.1667Z"
              stroke="white"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <Link to="/basket">basket</Link>
        </li>
      </ul>
    </div>
  );
}
