import { servicesData } from "@/lib/gavi-data";

export default function Services() {
  return (
    <div
      className="sec-box services section-padding bord-thin-bottom"
      data-scroll-index="1"
    >
      <div className="sec-head mb-80">
        <div className="row justify-content-center">
          <div className="col-lg-6 text-center">
            <h6 className="sub-title opacity-7 mb-15">My Services</h6>
            <h3>
              Turning ideas into{" "}
              <span className="main-color">production-ready</span> web products
            </h3>
          </div>
        </div>
      </div>
      <div className="row">
        {servicesData.map((item, index) => (
          <div key={index} className="col-md-6">
            <div className="item mb-40">
              <span className="icon-img-70 mb-30 opacity-7">
                <img src={item.icon} alt="" role="presentation" />
              </span>
              <h6 className="text-u ls1 mb-15">{item.title}</h6>
              <p>{item.description}</p>
              <div className="bord-color" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
