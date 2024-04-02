import { useState } from "react"
import "../../global.css"
import "./Home.css"
import ic_profile_pic from "../../assets/images/image-1@2x.png"
import ic_arrow from "../../assets/icon/ic-arrow-down-1.svg"
import ic_arrow_right from "../../assets/icon/ic_arrow_right.svg"
import ic_hamberger from "../../assets/icon/ic_hamberger.svg"
import ic_cancel from "../../assets/icon/ic-cancel.svg"
import ic_demo from "../../assets/icon/ic_demo_icon.svg"
import Sidebar from "../../components/sidebar/Sidebar"
import Dashboard from "../../components/dashboard/Dashboard"

function Home() {
  const [sideBarState, setSideBarState] = useState(false)

  return (
    <>
      <div
        className={`${
          sideBarState ? "frame-parent108" : "frame-parent108-hide"
        }`}
      >
        <div className="ic-cancel-1-parent">
          <div className="frame-parent109">
            <div className="vector-parent26">
              <img
                className="vector-icon68"
                alt=""
                src={ic_demo}
                style={{ filter: "invert(0)" }}
              />

              <div className="dashboard9">Dashboard</div>
            </div>
            <div className="frame-parent110">
              <div className="vector-parent27">
                <img
                  className="vector-icon68"
                  alt=""
                  src={ic_demo}
                  style={{ filter: "invert(0)" }}
                />

                <div className="dashboard9">Product</div>
              </div>
              <img
                className="vector-icon70"
                alt=""
                src={ic_arrow_right}
                style={{ filter: "invert(0)" }}
              />
            </div>
            <div className="frame-parent110">
              <div className="vector-parent27">
                <img
                  className="vector-icon68"
                  alt=""
                  src={ic_demo}
                  style={{ filter: "invert(0)" }}
                />

                <div className="dashboard9">Customer</div>
              </div>
              <img
                className="vector-icon70"
                alt=""
                src={ic_arrow_right}
                style={{ filter: "invert(0)" }}
              />
            </div>
            <div className="frame-parent110">
              <div className="vector-parent27">
                <img
                  className="vector-icon68"
                  alt=""
                  src={ic_demo}
                  style={{ filter: "invert(0)" }}
                />

                <div className="dashboard9">Income</div>
              </div>
              <img
                className="vector-icon70"
                alt=""
                src={ic_arrow_right}
                style={{ filter: "invert(0)" }}
              />
            </div>
            <div className="frame-parent110">
              <div className="vector-parent27">
                <img
                  className="vector-icon68"
                  alt=""
                  src={ic_demo}
                  style={{ filter: "invert(0)" }}
                />

                <div className="dashboard9">Promote</div>
              </div>
              <img
                className="vector-icon70"
                alt=""
                src={ic_arrow_right}
                style={{ filter: "invert(0)" }}
              />
            </div>
            <div className="frame-parent110">
              <div className="vector-parent27">
                <img
                  className="vector-icon68"
                  alt=""
                  src={ic_demo}
                  style={{ filter: "invert(0)" }}
                />

                <div className="dashboard9">Help</div>
              </div>
              <img
                className="vector-icon70"
                alt=""
                src={ic_arrow_right}
                style={{ filter: "invert(0)" }}
              />
            </div>
          </div>
        </div>
        <div className="frame-parent115">
          <div className="image-1-parent3">
            <img
              className="image-1-icon5"
              alt=""
              src={ic_profile_pic}
              style={{ filter: "invert(0)" }}
            />

            <div className="evano-parent2">
              <div className="dashboard9">Evano</div>
              <div className="product-manager4">Product Manager</div>
            </div>
          </div>
          <img
            className="ic-arrow-down-1-icon4"
            alt=""
            src={ic_arrow}
            style={{ filter: "invert(0)" }}
          />
        </div>
      </div>
      <div className="menu-black-24dp-1-parent">
        <img
          onClick={() => {
            sideBarState ? setSideBarState(false) : setSideBarState(true)
          }}
          className="menu-black-24dp-1-icon"
          alt=""
          src={sideBarState ? ic_cancel : ic_hamberger}
          style={{ filter: "invert(0)" }}
        />

        <div className="search9">Dashboard</div>
      </div>
      <div className="frame-root">
        <Sidebar />
        <Dashboard />
      </div>
    </>
  )
}

export default Home
