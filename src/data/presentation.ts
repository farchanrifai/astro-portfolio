type Social = {
  label: string;
  link: string;
};

type Presentation = {
  mail: string;
  title: string;
  description1: string;
  description2: string;
  socials: Social[];
  profile?: string;
};

const presentation: Presentation = {
  mail: "hi@farchan.co",
  title: "Hi, I’m Farchan 👋",
  // profile: "/profile.webp",
  description1:
    "Whether you’re a friend stopping by for a virtual hangout or someone eager to collaborate with me, I’m stoked to have you here!",
  description2:
    "This site is where the magic happens – a mix of all things cool and professional. This is the place to be for random blog posts about absolutely anything under the sun.",
  description3:
    " To all you awesome folks interested in working with me, let's get in touch ↯",
    socials: [
    {
      label: "Email",
      link: "mailto:hi@farchan.co",
    },
    {
      label: "Linkedin",
      link: "https://linkedin.com/in/farchanrifai",
    },
    {
      label: "Instagram",
      link: "https://instagram.com/farchanrifai",
    },
  ],
};

export default presentation;
