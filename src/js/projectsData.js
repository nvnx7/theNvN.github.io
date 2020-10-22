//Project object template

//   {
//     title: "",
//     desc: "",
//     tools: ["", ""],
//     links: [
//       {
//         label: "",
//         url: "",
//       },
//     ],
//   },

const projects = [
  {
    title: "My Page",
    desc:
      "My own personal page (v2), for show case of my skills & the projects that I've worked on.",
    tools: ["Anime.js", "BEM", "Mobile First", "Vanilla JS"],
    links: [
      {
        label: "Github",
        url: "https://github.com/theNvN/my-page",
      },
      {
        label: "Web",
        url: "http://naveeen.com",
      },
    ],
  },

  {
    title: "Artista",
    desc:
      "Artista is an android app, that uses Deep Learning's style transfer to make artistic images without any cloud service/internet. Image is processed at the edge right on your smartphone.",
    tools: ["Kotlin", "MVVM", "Jetpack Library", "Tensorflow Lite"],
    links: [
      {
        label: "Github",
        url: "https://github.com/theNvN/Artista",
      },
      {
        label: "PlayStore",
        url:
          "https://play.google.com/store/apps/details?id=com.naveeen.artista&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1",
      },
    ],
  },

  {
    title: "SnapBot",
    desc:
      "SnapBot is a twitter bot that upon being mentioned with keyword - 'snap' in a reply to a tweet, takes screenshot of that tweet & within seconds replies you with a url where you can download that tweet as an image file.",
    tools: ["Node.js", "Heroku"],
    links: [
      {
        label: "Github",
        url: "https://github.com/theNvN/snap-bot",
      },
      {
        label: "Web",
        url: "https://tweetsnapbot.herokuapp.com",
      },
    ],
  },

  {
    title: "Gaze Pointer Controller",
    desc:
      "A fun application that uses Edge AI computer vision to control the mouse pointer on PC with you eye gaze.",
    tools: ["Python", "OpenVino", "OpenCV"],
    links: [
      {
        label: "Github",
        url: "https://github.com/theNvN/eye-gaze-pointer-controller",
      },
    ],
  },

  {
    title: "People Counter",
    desc:
      "An application demonstrating fast Edge AI, detecting people in a designated area, providing the number of people in the frame, average duration of people in frame, and total count.",
    tools: ["Python", "OpenVino", "OpenCV"],
    links: [
      {
        label: "Github",
        url: "https://github.com/theNvN/People-Counter-App-Intel-Edge-IoT",
      },
    ],
  },

  {
    title: "Philosofy",
    desc:
      "An android photo editor application specifically for writing quotes. Features many google fonts, filters, downloadable pics, daily quote notifications, & other typical photo editor app features like blur, brightness, text effects etc.",
    tools: ["Java"],
    links: [
      {
        label: "Github",
        url: "https://github.com/theNvN/Philosofy",
      },
      {
        label: "PlayStore",
        url:
          "https://play.google.com/store/apps/details?id=com.philosofy.nvn.philosofy",
      },
    ],
  },

  {
    title: "Event Mgmt dApp",
    desc:
      "A application made to demonstrate dApp development on Ethereum blockchain with purpose of management of events involving tickets purchase, adding new events and closing existing ones.",
    tools: ["Solidity", "Web3.js", "Truffle", "React", "IPFS"],
    links: [
      {
        label: "Github",
        url: "https://github.com/theNvN/event_management_dapp",
      },
    ],
  },
];

export default projects;
