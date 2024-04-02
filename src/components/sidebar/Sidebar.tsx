import "./Sidebar.css"
import ic_dashboard from "../../assets/icon/ic_dashboard.svg"
import ic_profile_pic from "../../assets/images/image-1@2x.png"
import ic_arrow from "../../assets/icon/ic-arrow-down-1.svg"
import ic_arrow_right from "../../assets/icon/ic_arrow_right.svg"
import ic_demo from "../../assets/icon/ic_demo_icon.svg"

function Sidebar() {
  return (
    <div className="frame-group">
      <div className="frame-container">
        <div className="vector-parent">
          <img className="vector-icon" alt="" src={ic_dashboard} />

          <div className="dashboard">Dashboard</div>
        </div>
        <div className="frame-div">
          <div className="vector-group">
            <img className="vector-icon1" alt="" src={ic_demo} />

            <div className="dashboard">Dashboard</div>
          </div>
          <div className="frame-parent1">
            <div className="vector-container">
              <img className="vector-icon1" alt="" src={ic_demo} />

              <div className="dashboard">Product</div>
            </div>
            <img className="vector-icon3" alt="" src={ic_arrow_right} />
          </div>
          <div className="frame-parent1">
            <div className="vector-container">
              <img className="vector-icon1" alt="" src={ic_demo} />

              <div className="dashboard">Customer</div>
            </div>
            <img className="vector-icon3" alt="" src={ic_arrow_right} />
          </div>
          <div className="frame-parent1">
            <div className="vector-container">
              <img className="vector-icon1" alt="" src={ic_demo} />

              <div className="dashboard">Income</div>
            </div>
            <img className="vector-icon3" alt="" src={ic_arrow_right} />
          </div>
          <div className="frame-parent1">
            <div className="vector-container">
              <img className="vector-icon1" alt="" src={ic_demo} />

              <div className="dashboard">Promote</div>
            </div>
            <img className="vector-icon3" alt="" src={ic_arrow_right} />
          </div>
          <div className="frame-parent1">
            <div className="vector-container">
              <img className="vector-icon1" alt="" src={ic_demo} />

              <div className="dashboard">Help</div>
            </div>
            <img className="vector-icon3" alt="" src={ic_arrow_right} />
          </div>
        </div>
      </div>
      <div className="frame-parent6">
        <div className="image-1-group">
          <img className="image-1-icon1" alt="" src={ic_profile_pic} />

          <div className="evano-parent">
            <div className="dashboard">Evano</div>
            <div className="product-manager">Product Manager</div>
          </div>
        </div>
        <img className="ic-arrow-down-1-icon" alt="" src={ic_arrow} />
      </div>
    </div>
  )
}

export default Sidebar
