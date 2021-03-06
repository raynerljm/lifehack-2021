import React from "react";
import WorkshopItem from "./WorkshopItem";
import StartITLogo from "../../images/organizations/startit-logo.png";
import NusHackersLogo from "../../images/organizations/nus-hackers.svg";
import CSITLogo from "../../images/organizations/csit-logo.png";
import WebsparksLogo from "../../images/organizations/websparks-logo.png";
import styles from "./Workshops.module.css";
import { Links } from "../../Constants";

const WorkshopItems = [
  {
    title: "Ultimate guide to winning your first Hackathon",
    date: "19 July, 4:00pm - 5:00pm",
    description:
      "So, you got an amazing hackathon idea - But that's not enough to win it! In this workshop, we show you the five essential ingredients on how to ace a hackathon.",
    organizer: "NUS StartIT",
    organizerLogo: StartITLogo,
    organizerLink: Links.startIT,
  },
  {
    title: "Building a fake news detector with AI",
    date: "19 July, 7:00pm - 8:30pm",
    description:
      "Learn how you can build an AI-based (Machine Learning) model to detect fake news!",
    organizer: "CSIT",
    organizerLogo: CSITLogo,
    organizerLink: Links.csit,
  },
  {
    title: "Using Python to make your first Telegram bot",
    date: "20 July, 7:00pm - 9:00pm",
    description:
      "Learn how you can use Python to create your very own Telegram bot!",
    organizer: "NUS Hackers",
    organizerLogo: NusHackersLogo,
    organizerLink: Links.nusHackers,
  },
  {
    title: "How to incorporate UI/UX concepts into your designs",
    date: "21 July, 5:00pm - 6:00pm",
    description:
      "Hear directly from industry professionals how to make designs that are not just beautiful but functional!",
    organizer: "Websparks",
    organizerLogo: WebsparksLogo,
    organizerLink: Links.websparks,
  },
  {
    title: "Web development with React",
    date: "21 July, 7:00pm - 10:00pm",
    description:
      "Learn how you can easily use React to create your very first interactive website!",
    organizer: "Websparks",
    organizerLogo: WebsparksLogo,
    organizerLink: Links.websparks,
  },

  {
    title: "Operationalizing your applications at scale in the cloud!",
    date: "22 July, 7:00pm - 8:30pm",
    description:
      "Through the use of AWS cloud services, we will show you how to deploy your advanced applications such that it can handle many users.",
    organizer: "CSIT",
    organizerLogo: CSITLogo,
    organizerLink: Links.csit,
  },
];

const Workshops = () => {
  return (
    <div className={styles.background}>
      <div className={styles.workshops} name="workshops">
        <h1 className={styles.header}>Workshops</h1>
        <div className={styles.workshopGrid}>
          {WorkshopItems.map((item, idx) => (
            <WorkshopItem
              title={item.title}
              datetime={item.date}
              description={item.description}
              organizer={item.organizer}
              organizerLogo={item.organizerLogo}
              organizerLink={item.organizerLink}
              key={"workshop-item" + idx}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Workshops;
