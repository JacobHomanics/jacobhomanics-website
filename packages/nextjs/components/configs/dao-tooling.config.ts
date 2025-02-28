import { ProjectData } from "./types";

export const data: Array<ProjectData> = [
  {
    name: "Reputation & Roles Starter Kit",
    description:
      "Toolkit to deploy trust tracking onchain and grant authorities/permissions in decentralized and permissionless ways!",
    imgSrc: "/dao-tooling/starterKit.png",
    link: "https://github.com/ATXDAO/rep-and-roles-starter-kit",
    // links: [
    //   { url: "https://github.com/ATXDAO/rep-and-roles-starter-kit", icon: GithubLogo },
    //   {
    //     url: "https://jacobhomanics.github.io/rep-and-roles-docs/starter-kit/overview.html",
    //     icon: ScrollLogo,
    //   },
    // ],
  },
  {
    name: "Optimism Fractal Hats Tree",
    description:
      "A Hats tree that allows participants of the Respect Game to claim authorities/responsibilities based on their number of Respect tokens.",
    imgSrc: "/dao-tooling/of.jpg",
    link: "https://app.hatsprotocol.xyz/trees/10/175",
    // links: [{ url: "https://app.hatsprotocol.xyz/trees/10/175", icon: hatsLogo.src }],
  },
  {
    name: "DAO Coalition Hats Tree",
    description:
      "A Hats tree which utilizes the Gitcoin Passport and Signer Agreement Modules, which hooks into an Unlock checkout experience which unlocks a Voter Hat to be used in Snapshot.",
    imgSrc: "/dao-tooling/coa.png",
    link: "https://app.hatsprotocol.xyz/trees/10/167",
    // links: [
    //   { url: "https://app.hatsprotocol.xyz/trees/10/167", icon: hatsLogo.src },
    //   { url: "https://snapshot.org/#/daocoa.eth", icon: snapshotIcon.src },
    //   { url: "https://app.unlock-protocol.com/checkout?id=4b82ba6e-661b-4cf6-8a35-fa60850eba6f", icon: unlockIcon.src },
    // ],
  },
];
