const PATH = {
  items: "../items/",
  blocks: "../general/textures/",
  list: "../recipe/recipe_menu.html?page="
};

const recipeTree = [
  {
    id: "blocks",
    label: "Blocks",
    expanded: true,
    children: [
      {
        id: "wool",
        label: "Wool",
        expanded: true,
        children: [
          {
            id: "buh",
            label: "Buh",
            title: "Buh",
            image: "../items/vanilla/images/white_wool.png",
            rarity: "",
            trades: [],
            tips: [],
            recipes: [
              {
                grid: [
                  "../items/vanilla/images/white_wool.png", "", "",
                  "../items/vanilla/images/white_wool.png", "", "",
                  "../items/vanilla/images/white_wool.png", "", ""
                ],
                names: [
                  "Black Wool", "", "",
                  "", "", "",
                  "", "", ""
                ],
                links: [
                  PATH.list + "tesuchi_scales","","",
                  "","","",        
                  "","",""
                ],
                output: "../items/vanilla/images/white_wool.png",
                outputName: "Black Wool",
                outputLink: PATH.list + "1"
              },

            ],
            brewings: [
              {
                slots: [
                  { image: "../items/vanilla/images/white_wool.png", name: "1", link: PATH.list + "1", x: -38, y: 0 },
                  { image: "../items/vanilla/images/white_wool.png", name: "2", link: PATH.list + "1", x: 140, y: 0 },
                  { image: "../items/vanilla/images/white_wool.png", name: "3", link: PATH.list + "1", x: 75, y: 97 },
                  { image: "../items/vanilla/images/white_wool.png", name: "4", link: PATH.list + "1", x: 205, y: 97 },
                  { image: "../items/vanilla/images/white_wool.png", name: "5", link: PATH.list + "1", x: 140, y: 118 }
                ],
              },

            ]
          },
          
        ]
      }
    ]
  }
];

const selectedDefault = "black_wool";
