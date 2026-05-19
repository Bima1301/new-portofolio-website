import { siteConfig } from "@/lib/site-config";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="pb-30 pt-30">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="text-center">
              <p className="fz-13">
                © {year} {siteConfig.displayName}. Built with Next.js
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
