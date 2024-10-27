import React, { useState } from "react";

const SocialMedia = () => {
  const [githubLogo, setGithubLogo] = useState(
    `${process.env.PUBLIC_URL}/github-mark-white.png`
  );
  const [facebookLogo, setFacebookLogo] = useState(
    `${process.env.PUBLIC_URL}/f_logo_RGB-White_58.png`
  );
  const [linkedinLogo, setLinkedinLogo] = useState(
    `${process.env.PUBLIC_URL}/In-White-72.png`
  );

  return (
    <section
      id="socialmedia"
      className="p-4 text-center mx-auto w-full md:w-1/4 relative z-20"
    >
      <div className="flex justify-center space-x-4 mt-4">
        <a
          href="https://github.com/AnssiPeltola"
          onMouseEnter={() =>
            setGithubLogo(`${process.env.PUBLIC_URL}/github-mark.png`)
          }
          onMouseLeave={() =>
            setGithubLogo(`${process.env.PUBLIC_URL}/github-mark-white.png`)
          }
        >
          <img src={githubLogo} alt="GitHub Logo" className="w-8 h-8" />
        </a>
        <a
          href="https://www.facebook.com/anssi.peltola/"
          onMouseEnter={() =>
            setFacebookLogo(`${process.env.PUBLIC_URL}/f_logo_RGB-Black_58.png`)
          }
          onMouseLeave={() =>
            setFacebookLogo(`${process.env.PUBLIC_URL}/f_logo_RGB-White_58.png`)
          }
        >
          <img src={facebookLogo} alt="Facebook Logo" className="w-8 h-8" />
        </a>
        <a
          href="https://www.linkedin.com/in/anssi-peltola-363255107/"
          onMouseEnter={() =>
            setLinkedinLogo(`${process.env.PUBLIC_URL}/In-Black-72.png`)
          }
          onMouseLeave={() =>
            setLinkedinLogo(`${process.env.PUBLIC_URL}/In-White-72.png`)
          }
        >
          <img src={linkedinLogo} alt="LinkedIn Logo" className="w-8 h-8" />
        </a>
      </div>
    </section>
  );
};

export default SocialMedia;
