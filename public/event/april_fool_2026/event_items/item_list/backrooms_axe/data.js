const PATH = {
  assets: "./assets/",
  mobdrop: "./mobdrop_img/",
  avatar: "./avatar/",
  list: "./item_list/"
};
const DATA = [
{
  name: "Backroom Axe",
  layer: "", // multiple badges
  mob: "Backrooms Security",

  image: PATH.mobdrop + "backrooms_axe.gif",
  rarity: "",
  description: "",


trades: [
{
  input1: PATH.mobdrop + "mail_balloon_scraps.png",
  input2: PATH.mobdrop + "",
  output: PATH.mobdrop + "backrooms_axe.gif",

  name1: "Mail Ballon Scraps x 15",
  name2: "",
  outputName: "Backrooms Axe",

  link1: PATH.list + "backrooms_axe/backrooms_axe",
  link2: PATH.list + "",
  outputLink: PATH.list + "mail_balloon_scraps/mail_balloon_scraps"
}
],

  tips: [
    {
      avatar: PATH.avatar + "block_oc.png",
      text: "Netherite Axe that can be obtained through event pretty easily"
    }
  ],

  recipes: [
  {
  // grid: [
  //   PATH.mobdrop + "","","",
  //   PATH.mobdrop + "","","",
  //   PATH.mobdrop + "","",""
  // ],
  // names: [
  //   "Tesuchi Scale","","",
  //   "","","",
  //   "","",""
  // ],

  // links: [   
  //   PATH.list + "tesuchi_scale","","",
  //   PATH.list + "","","",
  //   PATH.list + "","",""
  // ],

  // output: PATH.mobdrop + "orth_coin.png",
  // outputName: "Orth Coin",
  // outputLink: PATH.list + "orth_coin"
  }
  ]
},

/*
{
  name: "Example Item",
  layer: "L1",
  mob: "bullshit thingy",

  image: "mob.png",
  rarity: "Basic",
  description: "example desc",

  trade: "trade.png",

  tips: [
    {
      avatar: "frog.png",
      text: "example tip"
    }
  ],

  recipes: []
}
*/

];