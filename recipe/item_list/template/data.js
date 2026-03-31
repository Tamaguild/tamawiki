const PATH = {
  assets: "../assets/",
  mobdrop: "../mobdrop_img/",
  avatar: "../avatar/",
  list: "../item_list/template/"
};
const DATA = [
{
  name: "Tesuchi Scales",
  layer: "l2", // multiple badges
  mob: "Tesuchi",

  image: PATH.mobdrop + "tesuchi_scales.png",
  rarity: "",
  description: "Crispy",


trades: [
{
  input1: PATH.mobdrop + "tesuchi_scales.png",
  input2: PATH.mobdrop + "tesuchi_scales.png",
  output: PATH.mobdrop + "orth_coin.png",

  name1: "Tesuchi Scale",
  name2: "Tesuchi Scale",
  outputName: "Orth Coin",

  link1: PATH.list + "tesuchi_scale.html",
  link2: PATH.list + "tesuchi_scale.html",
  outputLink: PATH.list + "orth_coin.html"
}
],

  tips: [
    {
      avatar: PATH.avatar + "block_oc.png",
      text: "When eating it gives a saturation of 1.2 and a nutrition of 2 important for getting netherite armor."
    }
  ],

  recipes: [
  {
  grid: [
    PATH.mobdrop + "tesuchi_scales.png","","",
    PATH.mobdrop + "","","",
    PATH.mobdrop + "","",""
  ],
  names: [
    "Tesuchi Scale","","",
    "","","",
    "","",""
  ],

  links: [   
    PATH.list + "tesuchi_scale.html","","",
    PATH.list + "","","",
    PATH.list + "","",""
  ],

  output: PATH.mobdrop + "orth_coin.png",
  outputName: "Orth Coin",
  outputLink: PATH.list + "orth_coin.html"
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