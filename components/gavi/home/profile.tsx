import { publicAsset } from "@/lib/public-asset";
import { siteConfig } from "@/lib/site-config";
import Image from "next/image";

export default function Profile() {
  const { social, cvPath } = siteConfig;

  return (
    <section
      className="intro-profile md-mb50"
      data-scroll-index="0"
      id="section-0"
    >
      <div className="row rest">
        <div className="col-lg-4 box-img main-bg">
          <div className="cont valign">
            <div className="full-width">
              <div className="img">
                <div className="profile-photo-wrap">
                  <Image
                    src={publicAsset("/assets/imgs/header/profile.jpeg")}
                    alt={siteConfig.name}
                    width={500}
                    height={500}
                    className="profile-photo"
                  />
                </div>
                <span className="icon icon-float-1" aria-hidden>
                  <img src={publicAsset("/assets/imgs/header/icon1.png")} alt="" />
                </span>
                <span className="icon icon-float-2" aria-hidden>
                  <img src={publicAsset("/assets/imgs/header/icon2.png")} alt="" />
                </span>
                <span className="icon icon-float-3" aria-hidden>
                  <img src={publicAsset("/assets/imgs/header/icon4.png")} alt="" />
                </span>
              </div>
              <div className="info text-center mt-30">
                <h5>{siteConfig.displayName}</h5>
                <p className="fz-13 text-u">{siteConfig.subtitle}</p>
              </div>
              <div className="social text-center mt-20">
                <a
                  href={social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  <i className="fab fa-github" />
                </a>
                <a
                  href={social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <i className="fab fa-linkedin-in" />
                </a>
                <a
                  href={social.gitlab}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitLab"
                >
                  <i className="fab fa-gitlab" />
                </a>
                <a
                  href={social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                >
                  <i className="fab fa-instagram" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-8 content main-bg">
          <h1>
            Hello, I&apos;m{" "}
            <span className="main-color">{siteConfig.displayName}</span>,{" "}
            {siteConfig.role} and{" "}
            <span className="bord">
              {siteConfig.heroHighlight} <i />
            </span>{" "}
            based in {siteConfig.location}.
          </h1>
          <div className="stauts mt-80">
            <div className="d-flex align-items-center">
              <div className="mr-40">
                <div className="d-flex align-items-center">
                  <h2>{siteConfig.yearsExperience}</h2>
                  <p>
                    Years <br /> of Experience
                  </p>
                </div>
              </div>
              <div className="mr-40">
                <div className="d-flex align-items-center">
                  <h2>{siteConfig.clientsCount}</h2>
                  <p>
                    Projects <br /> Delivered
                  </p>
                </div>
              </div>
              <div>
                <div className="butn-presv">
                  <a
                    href={cvPath}
                    download
                    className="butn butn-md butn-bord radius-5 skew"
                  >
                    <span>Download C.V</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
