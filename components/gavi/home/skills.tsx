import { coreSkillsData, workExperiencesData } from "@/lib/gavi-data";
import Image from "next/image";

export default function Skills() {
  return (
    <div
      className="sec-box skills section-padding bord-thin-bottom"
      data-scroll-index="2"
    >
      <div className="row">
        <div className="col-lg-4 valign">
          <div className="sec-head md-mb80">
            <h6 className="sub-title opacity-7 mb-15">My Experience</h6>
            <h3>
              Skills & <span className="main-color">Expertise</span>
            </h3>
          </div>
        </div>
        <div className="col-lg-8">
          <div className="row">
            {coreSkillsData.map((item) => (
              <div key={item.title} className="col-md-6">
                <div className="item mb-30">
                  <div className="d-flex align-items-center mb-30">
                    <div className="mr-30">
                      <div className="img icon-img-40">
                        <Image src={item.photo} alt={item.title} width={100} height={100} />
                      </div>
                    </div>
                    <div>
                      <h6 className="fz-18">{item.title}</h6>
                    </div>
                  </div>
                  <div className="skill-progress">
                    <span className="progres" data-value={item.persent} />
                  </div>
                  <span className="value">{item.persent}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="work-experience mt-100">
        <div className="sec-head mb-60">
          <h6 className="sub-title opacity-7 mb-15">Career Path</h6>
          <h3>
            Work <span className="main-color">Experience</span>
          </h3>
        </div>

        <div className="resume experience-timeline">
          {workExperiencesData.map((exp, index) => (
            <div
              key={`${exp.title}-${exp.date}`}
              className="experience-entry"
            >
              <div className="row align-items-start">
                <div className="col-lg-3 col-md-4">
                  <div className="date">
                    <p className="experience-period">{exp.date}</p>
                    {exp.duration ? (
                      <span className="experience-duration">{exp.duration}</span>
                    ) : null}
                  </div>
                </div>
                <div className="col-lg-9 col-md-8">
                  <div className="d-flex align-items-start">
                    <div className="experience-icon">{exp.icon}</div>
                    <div className="flex-grow-1">
                      <h5 className="mb-10">{exp.title}</h5>
                      <p className="fz-14 main-color mb-20">{exp.location}</p>
                      <ul className="rest experience-details">
                        {exp.details.map((detail, i) => (
                          <li key={i}>{detail}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
