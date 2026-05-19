import { pricingData } from "@/lib/gavi-data";

export default function Price() {
  return (
    <div className="sec-box price section-padding" data-scroll-index="4">
      <div className="sec-head mb-80">
        <div className="row justify-content-center">
          <div className="col-lg-6 text-center">
            <h6 className="sub-title opacity-7 mb-15">Collaboration</h6>
            <h3><span className="main-color">Flexible</span> Engagement Options</h3>
          </div>
        </div>
      </div>
      <div className="row md-marg">
        {pricingData.map((plan) => (
          <div key={plan.type} className="col-lg-4 valign">
            <div className="item full-width md-mb50">
              <div className="top-curv">
                <span className="left" />
                <h6 className="type">{plan.type}</h6>
                <span className="right" />
              </div>
              <div className="content">
                <div className="amount d-flex align-items-end pb-50 mb-50 bord-thin-bottom">
                  <h2 className="main-color">{plan.price}</h2>
                  <p className="ml-20 fz-20">{plan.unit}</p>
                </div>
                <div className="feat">
                  <ul className="rest">
                    {plan.features.map((f) => (
                      <li key={f}><i className="fas fa-check" /> <span>{f}</span></li>
                    ))}
                  </ul>
                </div>
                <div className="text-center mt-50">
                  <div className="butn-presv">
                    <a href="#0" data-scroll-nav="5" className="butn butn-md butn-bord radius-5 text-u full-width">
                      <span>Get Started</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
