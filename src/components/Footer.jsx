import React from 'react'
import { Link } from "react-router-dom";
import { socialLinks } from "../constants";

const Footer = () => {
    return (
      <section className="cta">

          {socialLinks.map((socialLink) => (
            <div className="block-container w-20 h-20" key={socialLink.name}>
              <Link to={socialLink.link}>
              <img
                src={socialLink.iconUrl}
                alt={socialLink.name}
                className="w-1/2 h-1/2 object-contain"
                href={socialLink.link} />
                  </Link>
            </div>
          ))}
      </section>
    );
}

export default Footer