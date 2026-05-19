import { publicAsset } from "@/lib/public-asset";
import { siteConfig } from "@/lib/site-config";

export default function NavTop() {
  const { social, email } = siteConfig;

  return (
    <div className="nav-top pt-30 pb-30">
      <div className="container">
        <div className="row">
          <div className="col-md-4 valign">
            <a href="/" className="logo icon-img-70">
              <img src={publicAsset("/assets/imgs/logo-light.png")} alt={siteConfig.name} />
            </a>
          </div>
          <div className="col-md-4 valign">
            <div className="social text-center full-width">
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
          <div className="col-md-4 valign">
            <div className="full-width info">
              <div className="d-flex justify-content-end">
                <a href={`mailto:${email}`}>
                  <span className="sub-title fz-12">{email}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="nav-butn">
          <span className="pe-7s-menu" />
        </div>
      </div>
    </div>
  );
}
