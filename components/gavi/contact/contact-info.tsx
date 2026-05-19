"use client";

import { sendEmail } from "@/actions/sendEmail";
import { siteConfig } from "@/lib/site-config";
import toast from "react-hot-toast";

export default function ContactInfo() {
  const { social, email } = siteConfig;

  return (
    <div
      className="sec-box contact section-padding bord-thin-top"
      data-scroll-index="5"
    >
      <div className="row">
        <div className="col-lg-5">
          <div className="sec-head md-mb80">
            <h6 className="sub-title mb-15 opacity-7">Get In Touch</h6>
            <h2 className="fz-50">Let&apos;s build something great together!</h2>
            <p className="fz-15 mt-10">
              Open to freelance, full-time, and collaboration opportunities.
              Send a message and I&apos;ll get back to you soon.
            </p>
            <div className="phone fz-30 fw-600 mt-30 underline">
              <a href={`mailto:${email}`} className="main-color">
                {email}
              </a>
            </div>
            <ul className="rest social-text d-flex mt-60">
              <li className="mr-30">
                <a href={social.linkedin} target="_blank" rel="noopener noreferrer" className="hover-this">
                  <span className="hover-anim">LinkedIn</span>
                </a>
              </li>
              <li className="mr-30">
                <a href={social.github} target="_blank" rel="noopener noreferrer" className="hover-this">
                  <span className="hover-anim">GitHub</span>
                </a>
              </li>
              <li className="mr-30">
                <a href={social.gitlab} target="_blank" rel="noopener noreferrer" className="hover-this">
                  <span className="hover-anim">GitLab</span>
                </a>
              </li>
              <li>
                <a href={social.instagram} target="_blank" rel="noopener noreferrer" className="hover-this">
                  <span className="hover-anim">Instagram</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-lg-7 valign">
          <div className="full-width">
            <form
              action={async (formData) => {
                const { error } = await sendEmail(formData);
                if (error) {
                  toast.error(error);
                  return;
                }
                toast.success("Message sent successfully!");
              }}
            >
              <div className="controls row">
                <div className="col-lg-6">
                  <div className="form-group mb-30">
                    <input id="form_name" type="text" name="name" placeholder="Name" required />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group mb-30">
                    <input id="form_email" type="email" name="email" placeholder="Email" required />
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-group mb-30">
                    <input id="form_subject" type="text" name="subject" placeholder="Subject" />
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-group">
                    <textarea id="form_message" name="message" placeholder="Message" rows={4} required />
                  </div>
                  <div className="mt-30">
                    <button type="submit">
                      <span className="text">Send A Message</span>
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
