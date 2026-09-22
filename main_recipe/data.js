const PATH = {
  items: "../items/",
  blocks: "../general/textures/",
  list: "../recipe/recipe_menu.html?page="
};

/*
const recipeTree = [ #wtfamilookingat
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
                  PATH.list + "","","",        
                  PATH.list + "","",""
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

            ],

            furnaces: [
              {
                slots: [
                  { image: "../items/vanilla/images/white_wool.png", name: "1", link: PATH.list + "1", x: 74, y: 0 },
                  { image: "../items/vanilla/images/white_wool.png", name: "2", link: PATH.list + "1", x: 74, y: 105 },
                  { image: "../items/vanilla/images/white_wool.png", name: "3", link: PATH.list + "1", x: 244, y: 53 },
                ],
              },

            ],

            blasts: [
              {
                slots: [
                  { image: "../items/vanilla/images/white_wool.png", name: "1", link: PATH.list + "1", x: 74, y: 0 },
                  { image: "../items/vanilla/images/white_wool.png", name: "2", link: PATH.list + "1", x: 74, y: 105 },
                  { image: "../items/vanilla/images/white_wool.png", name: "3", link: PATH.list + "1", x: 244, y: 53 },
                ],
              },

            ],
          },
          
        ]
      }
    ]
  }
];
*/

const recipeTree = [
  {
    id: "blocks",
    label: "Blocks",
    children: [
      {
        id: "coral",
        label: "Coral",
        children: [
          {
            id: "brain coral",
            label: "Brain Coral",
            tips: {
              text: "La tip",
              image: "../avatar/erm_pigeon.png"
            },
            recipes: [
              {
                grid: [
                  "../items/mob_drops/images/ashimite_antlers.png", "../items/vanilla/images/pink_dye.png", "",
                  "", "", "",
                  "", "", ""
                ],
                names: [
                  "Ashimite Antlers", "Pink Dye", "",
                  "", "", "",
                  "", "", ""
                ],
                links: [
                  PATH.list + "ashimite_antlers","","",
                  PATH.list + "","","",
                  PATH.list + "","",""
                ],
                output: "../items/vanilla/images/brain_coral.png",
                outputName: "Brain Coral",
                outputLink: ""
              },
            ],
          },
          {
            id: "brain coral block",
            label: "Brain Coral Block",
            recipes: [
              {
                grid: [
                  "", "../items/mob_drops/images/ashimite_antlers.png", "",
                  "../items/mob_drops/images/ashimite_antlers.png", "../items/vanilla/images/pink_dye.png", "../items/mob_drops/images/ashimite_antlers.png",
                  "", "../items/mob_drops/images/ashimite_antlers.png", ""
                ],
                names: [
                  "", "Ashimite Antlers", "",
                  "Ashimite Antlers", "Pink Dye", "Ashimite Antlers",
                  "", "Ashimite Antlers", ""
                ],
                links: [
                  PATH.list + "","ashimite_antlers","",
                  PATH.list + "ashimite_antlers","","ashimite_antlers",
                  PATH.list + "","ashimite_antlers",""
                ],
                output: "../items/vanilla/images/brain_coral_block.png",
                outputName: "Brain Coral Block",
                outputLink: ""
              },
            ],
          },
          {
            id: "brain coral fan",
            label: "Brain Coral Fan",
            recipes: [
              {
                grid: [
                  "../items/custom_items/knife.png", "../items/vanilla/images/brain_coral.png", "",
                  "", "", "",
                  "", "", ""
                ],
                names: [
                  "Knife", "Brain Coral", "",
                  "", "", "",
                  "", "", ""
                ],
                links: [
                  PATH.list + "","","",
                  PATH.list + "","","",
                  PATH.list + "","",""
                ],
                output: "../items/vanilla/images/brain_coral_fan.png",
                outputName: "Brain Coral Fan (4)",
                outputLink: ""
              },
            ],
          },
          {
            id: "bubble coral",
            label: "Bubble Coral",
            recipes: [
              {
                grid: [
                  "../items/mob_drops/images/ashimite_antlers.png", "../items/vanilla/images/purple_dye.png", "",
                  "", "", "",
                  "", "", ""
                ],
                names: [
                  "Ashimite Antlers", "Purple Dye", "",
                  "", "", "",
                  "", "", ""
                ],
                links: [
                  PATH.list + "ashimite_antlers","","",
                  PATH.list + "","","",
                  PATH.list + "","",""
                ],
                output: "../items/vanilla/images/bubble_coral.png",
                outputName: "Bubble Coral",
                outputLink: ""
              },
              {
                grid: [
                  "../items/mob_drops/images/ashimite_antlers.png", "../items/vanilla/images/magenta_dye.png", "",
                  "", "", "",
                  "", "", ""
                ],
                names: [
                  "Ashimite Antlers", "Magenta Dye", "",
                  "", "", "",
                  "", "", ""
                ],
                links: [
                  PATH.list + "ashimite_antlers","","",
                  PATH.list + "","","",
                  PATH.list + "","",""
                ],
                output: "../items/vanilla/images/bubble_coral.png",
                outputName: "Bubble Coral",
                outputLink: ""
              },
            ],
          },
          {
            id: "bubble coral block",
            label: "Bubble Coral Block",
            recipes: [
              {
                grid: [
                  "", "../items/mob_drops/images/ashimite_antlers.png", "",
                  "../items/mob_drops/images/ashimite_antlers.png", "../items/vanilla/images/purple_dye.png", "../items/mob_drops/images/ashimite_antlers.png",
                  "", "../items/mob_drops/images/ashimite_antlers.png", ""
                ],
                names: [
                  "", "Ashimite Antlers", "",
                  "Ashimite Antlers", "Purple Dye", "Ashimite Antlers",
                  "", "Ashimite Antlers", ""
                ],
                links: [
                  PATH.list + "","ashimite_antlers","",
                  PATH.list + "ashimite_antlers","","ashimite_antlers",
                  PATH.list + "","ashimite_antlers",""
                ],
                output: "../items/vanilla/images/bubble_coral_block.png",
                outputName: "Bubble Coral Block",
                outputLink: ""
              },
              {
                grid: [
                  "", "../items/mob_drops/images/ashimite_antlers.png", "",
                  "../items/mob_drops/images/ashimite_antlers.png", "../items/vanilla/images/magenta_dye.png", "../items/mob_drops/images/ashimite_antlers.png",
                  "", "../items/mob_drops/images/ashimite_antlers.png", ""
                ],
                names: [
                  "", "Ashimite Antlers", "",
                  "Ashimite Antlers", "Magenta Dye", "Ashimite Antlers",
                  "", "Ashimite Antlers", ""
                ],
                links: [
                  PATH.list + "","ashimite_antlers","",
                  PATH.list + "ashimite_antlers","","ashimite_antlers",
                  PATH.list + "","ashimite_antlers",""
                ],
                output: "../items/vanilla/images/bubble_coral_block.png",
                outputName: "Bubble Coral Block",
                outputLink: ""
              },
            ],
          },
          {
            id: "bubble coral fan",
            label: "Bubble Coral Fan",
            recipes: [
              {
                grid: [
                  "../items/custom_items/knife.png", "../items/vanilla/images/bubble_coral.png", "",
                  "", "", "",
                  "", "", ""
                ],
                names: [
                  "Knife", "Bubble Coral", "",
                  "", "", "",
                  "", "", ""
                ],
                links: [
                  PATH.list + "","","",
                  PATH.list + "","","",
                  PATH.list + "","",""
                ],
                output: "../items/vanilla/images/bubble_coral_fan.png",
                outputName: "Bubble Coral Fan (4)",
                outputLink: ""
              },
            ],
          },
          {
            id: "dead brain coral",
            label: "Dead Brain Coral",
            recipes: [
              {
                grid: [
                  "../items/vanilla/images/brain_coral.png", "../items/vanilla/images/brain_coral.png", "../items/vanilla/images/brain_coral.png",
                  "../items/vanilla/images/brain_coral.png", "../items/vanilla/images/cobweb.png", "../items/vanilla/images/brain_coral.png",
                  "../items/vanilla/images/brain_coral.png", "../items/vanilla/images/brain_coral.png", "../items/vanilla/images/brain_coral.png"
                ],
                names: [
                  "Brain Coral", "Brain Coral", "Brain Coral",
                  "Brain Coral", "Cobweb", "Brain Coral",
                  "Brain Coral", "Brain Coral", "Brain Coral"
                ],
                links: [
                  PATH.list + "","","",
                  PATH.list + "","","",
                  PATH.list + "","",""
                ],
                output: "../items/vanilla/images/dead_brain_coral.png",
                outputName: "Dead Brain Coral (8)",
                outputLink: ""
              },
            ],
          },
          {
            id: "dead brain coral block",
            label: "Dead Brain Coral Block",
            recipes: [
              {
                grid: [
                  "../items/vanilla/images/brain_coral_block.png", "../items/vanilla/images/brain_coral_block.png", "../items/vanilla/images/brain_coral_block.png",
                  "../items/vanilla/images/brain_coral_block.png", "../items/vanilla/images/cobweb.png", "../items/vanilla/images/brain_coral_block.png",
                  "../items/vanilla/images/brain_coral_block.png", "../items/vanilla/images/brain_coral_block.png", "../items/vanilla/images/brain_coral_block.png"
                ],
                names: [
                  "Brain Coral Block", "Brain Coral Block", "Brain Coral Block",
                  "Brain Coral Block", "Cobweb", "Brain Coral Block",
                  "Brain Coral Block", "Brain Coral Block", "Brain Coral Block"
                ],
                links: [
                  PATH.list + "","","",
                  PATH.list + "","","",
                  PATH.list + "","",""
                ],
                output: "../items/vanilla/images/dead_brain_coral_block.png",
                outputName: "Dead Brain Coral Block (8)",
                outputLink: ""
              },
            ],
          },
          {
            id: "dead brain coral fan",
            label: "Dead Brain Coral Fan",
            recipes: [
              {
                grid: [
                  "../items/vanilla/images/brain_coral_fan.png", "../items/vanilla/images/brain_coral_fan.png", "../items/vanilla/images/brain_coral_fan.png",
                  "../items/vanilla/images/brain_coral_fan.png", "../items/vanilla/images/cobweb.png", "../items/vanilla/images/brain_coral_fan.png",
                  "../items/vanilla/images/brain_coral_fan.png", "../items/vanilla/images/brain_coral_fan.png", "../items/vanilla/images/brain_coral_fan.png"
                ],
                names: [
                  "Brain Coral Fan", "Brain Coral Fan", "Brain Coral Fan",
                  "Brain Coral Fan", "Cobweb", "Brain Coral Fan",
                  "Brain Coral Fan", "Brain Coral Fan", "Brain Coral Fan"
                ],
                links: [
                  PATH.list + "","","",
                  PATH.list + "","","",
                  PATH.list + "","",""
                ],
                output: "../items/vanilla/images/dead_brain_coral_fan.png",
                outputName: "Dead Brain Coral Fan (8)",
                outputLink: ""
              },
            ],
          },
          {
            id: "dead bubble coral",
            label: "Dead Bubble Coral",
            recipes: [
              {
                grid: [
                  "../items/vanilla/images/bubble_coral.png", "../items/vanilla/images/bubble_coral.png", "../items/vanilla/images/bubble_coral.png",
                  "../items/vanilla/images/bubble_coral.png", "../items/vanilla/images/cobweb.png", "../items/vanilla/images/bubble_coral.png",
                  "../items/vanilla/images/bubble_coral.png", "../items/vanilla/images/bubble_coral.png", "../items/vanilla/images/bubble_coral.png"
                ],
                names: [
                  "Bubble Coral", "Bubble Coral", "Bubble Coral",
                  "Bubble Coral", "Cobweb", "Bubble Coral",
                  "Bubble Coral", "Bubble Coral", "Bubble Coral"
                ],
                links: [
                  PATH.list + "","","",
                  PATH.list + "","","",
                  PATH.list + "","",""
                ],
                output: "../items/vanilla/images/dead_bubble_coral.png",
                outputName: "Dead Bubble Coral (8)",
                outputLink: ""
              },
            ],
          },
          {
            id: "dead bubble coral block",
            label: "Dead Bubble Coral Block",
            recipes: [
              {
                grid: [
                  "../items/vanilla/images/bubble_coral_block.png", "../items/vanilla/images/bubble_coral_block.png", "../items/vanilla/images/bubble_coral_block.png",
                  "../items/vanilla/images/bubble_coral_block.png", "../items/vanilla/images/cobweb.png", "../items/vanilla/images/bubble_coral_block.png",
                  "../items/vanilla/images/bubble_coral_block.png", "../items/vanilla/images/bubble_coral_block.png", "../items/vanilla/images/bubble_coral_block.png"
                ],
                names: [
                  "Bubble Coral Block", "Bubble Coral Block", "Bubble Coral Block",
                  "Bubble Coral Block", "Cobweb", "Bubble Coral Block",
                  "Bubble Coral Block", "Bubble Coral Block", "Bubble Coral Block"
                ],
                links: [
                  PATH.list + "","","",
                  PATH.list + "","","",
                  PATH.list + "","",""
                ],
                output: "../items/vanilla/images/dead_bubble_coral_block.png",
                outputName: "Dead Bubble Coral Block (8)",
                outputLink: ""
              },
            ],
          },
          {
            id: "dead bubble coral fan",
            label: "Dead Bubble Coral Fan",
            recipes: [
              {
                grid: [
                  "../items/vanilla/images/bubble_coral_fan.png", "../items/vanilla/images/bubble_coral_fan.png", "../items/vanilla/images/bubble_coral_fan.png",
                  "../items/vanilla/images/bubble_coral_fan.png", "../items/vanilla/images/cobweb.png", "../items/vanilla/images/bubble_coral_fan.png",
                  "../items/vanilla/images/bubble_coral_fan.png", "../items/vanilla/images/bubble_coral_fan.png", "../items/vanilla/images/bubble_coral_fan.png"
                ],
                names: [
                  "Bubble Coral Fan", "Bubble Coral Fan", "Bubble Coral Fan",
                  "Bubble Coral Fan", "Cobweb", "Bubble Coral Fan",
                  "Bubble Coral Fan", "Bubble Coral Fan", "Bubble Coral Fan"
                ],
                links: [
                  PATH.list + "","","",
                  PATH.list + "","","",
                  PATH.list + "","",""
                ],
                output: "../items/vanilla/images/dead_bubble_coral_fan.png",
                outputName: "Dead Bubble Coral Fan (8)",
                outputLink: ""
              },
            ],
          },
          {
            id: "dead fire coral",
            label: "Dead Fire Coral",
            recipes: [
              {
                grid: [
                  "../items/vanilla/images/fire_coral.png", "../items/vanilla/images/fire_coral.png", "../items/vanilla/images/fire_coral.png",
                  "../items/vanilla/images/fire_coral.png", "../items/vanilla/images/cobweb.png", "../items/vanilla/images/fire_coral.png",
                  "../items/vanilla/images/fire_coral.png", "../items/vanilla/images/fire_coral.png", "../items/vanilla/images/fire_coral.png"
                ],
                names: [
                  "Fire Coral", "Fire Coral", "Fire Coral",
                  "Fire Coral", "Cobweb", "Fire Coral",
                  "Fire Coral", "Fire Coral", "Fire Coral"
                ],
                links: [
                  PATH.list + "","","",
                  PATH.list + "","","",
                  PATH.list + "","",""
                ],
                output: "../items/vanilla/images/dead_fire_coral.png",
                outputName: "Dead Fire Coral (8)",
                outputLink: ""
              },
            ],
          },
          {
            id: "dead fire coral block",
            label: "Dead Fire Coral Block",
            recipes: [
              {
                grid: [
                  "../items/vanilla/images/fire_coral_block.png", "../items/vanilla/images/fire_coral_block.png", "../items/vanilla/images/fire_coral_block.png",
                  "../items/vanilla/images/fire_coral_block.png", "../items/vanilla/images/cobweb.png", "../items/vanilla/images/fire_coral_block.png",
                  "../items/vanilla/images/fire_coral_block.png", "../items/vanilla/images/fire_coral_block.png", "../items/vanilla/images/fire_coral_block.png"
                ],
                names: [
                  "Fire Coral Block", "Fire Coral Block", "Fire Coral Block",
                  "Fire Coral Block", "Cobweb", "Fire Coral Block",
                  "Fire Coral Block", "Fire Coral Block", "Fire Coral Block"
                ],
                links: [
                  PATH.list + "","","",
                  PATH.list + "","","",
                  PATH.list + "","",""
                ],
                output: "../items/vanilla/images/dead_fire_coral_block.png",
                outputName: "Dead Fire Coral Block (8)",
                outputLink: ""
              },
            ],
          },
          {
            id: "dead fire coral fan",
            label: "Dead Fire Coral Fan",
            recipes: [
              {
                grid: [
                  "../items/vanilla/images/fire_coral_fan.png", "../items/vanilla/images/fire_coral_fan.png", "../items/vanilla/images/fire_coral_fan.png",
                  "../items/vanilla/images/fire_coral_fan.png", "../items/vanilla/images/cobweb.png", "../items/vanilla/images/fire_coral_fan.png",
                  "../items/vanilla/images/fire_coral_fan.png", "../items/vanilla/images/fire_coral_fan.png", "../items/vanilla/images/fire_coral_fan.png"
                ],
                names: [
                  "Fire Coral Fan", "Fire Coral Fan", "Fire Coral Fan",
                  "Fire Coral Fan", "Cobweb", "Fire Coral Fan",
                  "Fire Coral Fan", "Fire Coral Fan", "Fire Coral Fan"
                ],
                links: [
                  PATH.list + "","","",
                  PATH.list + "","","",
                  PATH.list + "","",""
                ],
                output: "../items/vanilla/images/dead_fire_coral_fan.png",
                outputName: "Dead Fire Coral Fan (8)",
                outputLink: ""
              },
            ],
          },
          {
            id: "dead horn coral",
            label: "Dead Horn Coral",
            recipes: [
              {
                grid: [
                  "../items/vanilla/images/horn_coral.png", "../items/vanilla/images/horn_coral.png", "../items/vanilla/images/horn_coral.png",
                  "../items/vanilla/images/horn_coral.png", "../items/vanilla/images/cobweb.png", "../items/vanilla/images/horn_coral.png",
                  "../items/vanilla/images/horn_coral.png", "../items/vanilla/images/horn_coral.png", "../items/vanilla/images/horn_coral.png"
                ],
                names: [
                  "Horn Coral", "Horn Coral", "Horn Coral",
                  "Horn Coral", "Cobweb", "Horn Coral",
                  "Horn Coral", "Horn Coral", "Horn Coral"
                ],
                links: [
                  PATH.list + "","","",
                  PATH.list + "","","",
                  PATH.list + "","",""
                ],
                output: "../items/vanilla/images/dead_horn_coral.png",
                outputName: "Dead Horn Coral (8)",
                outputLink: ""
              },
            ],
          },
          {
            id: "dead horn coral block",
            label: "Dead Horn Coral Block",
            recipes: [
              {
                grid: [
                  "../items/vanilla/images/horn_coral_block.png", "../items/vanilla/images/horn_coral_block.png", "../items/vanilla/images/horn_coral_block.png",
                  "../items/vanilla/images/horn_coral_block.png", "../items/vanilla/images/cobweb.png", "../items/vanilla/images/horn_coral_block.png",
                  "../items/vanilla/images/horn_coral_block.png", "../items/vanilla/images/horn_coral_block.png", "../items/vanilla/images/horn_coral_block.png"
                ],
                names: [
                  "Horn Coral Block", "Horn Coral Block", "Horn Coral Block",
                  "Horn Coral Block", "Cobweb", "Horn Coral Block",
                  "Horn Coral Block", "Horn Coral Block", "Horn Coral Block"
                ],
                links: [
                  PATH.list + "","","",
                  PATH.list + "","","",
                  PATH.list + "","",""
                ],
                output: "../items/vanilla/images/dead_horn_coral_block.png",
                outputName: "Dead Horn Coral Block (8)",
                outputLink: ""
              },
            ],
          },
          {
            id: "dead horn coral fan",
            label: "Dead Horn Coral Fan",
            recipes: [
              {
                grid: [
                  "../items/vanilla/images/horn_coral_fan.png", "../items/vanilla/images/horn_coral_fan.png", "../items/vanilla/images/horn_coral_fan.png",
                  "../items/vanilla/images/horn_coral_fan.png", "../items/vanilla/images/cobweb.png", "../items/vanilla/images/horn_coral_fan.png",
                  "../items/vanilla/images/horn_coral_fan.png", "../items/vanilla/images/horn_coral_fan.png", "../items/vanilla/images/horn_coral_fan.png"
                ],
                names: [
                  "Horn Coral Fan", "Horn Coral Fan", "Horn Coral Fan",
                  "Horn Coral Fan", "Cobweb", "Horn Coral Fan",
                  "Horn Coral Fan", "Horn Coral Fan", "Horn Coral Fan"
                ],
                links: [
                  PATH.list + "","","",
                  PATH.list + "","","",
                  PATH.list + "","",""
                ],
                output: "../items/vanilla/images/dead_horn_coral_fan.png",
                outputName: "Dead Horn Coral Fan (8)",
                outputLink: ""
              },
            ],
          },
          {
            id: "dead tube coral",
            label: "Dead Tube Coral",
            recipes: [
              {
                grid: [
                  "../items/vanilla/images/tube_coral.png", "../items/vanilla/images/tube_coral.png", "../items/vanilla/images/tube_coral.png",
                  "../items/vanilla/images/tube_coral.png", "../items/vanilla/images/cobweb.png", "../items/vanilla/images/tube_coral.png",
                  "../items/vanilla/images/tube_coral.png", "../items/vanilla/images/tube_coral.png", "../items/vanilla/images/tube_coral.png"
                ],
                names: [
                  "Tube Coral", "Tube Coral", "Tube Coral",
                  "Tube Coral", "Cobweb", "Tube Coral",
                  "Tube Coral", "Tube Coral", "Tube Coral"
                ],
                links: [
                  PATH.list + "","","",
                  PATH.list + "","","",
                  PATH.list + "","",""
                ],
                output: "../items/vanilla/images/dead_tube_coral.png",
                outputName: "Dead Tube Coral (8)",
                outputLink: ""
              },
            ],
          },
          {
            id: "dead tube coral block",
            label: "Dead Tube Coral Block",
            recipes: [
              {
                grid: [
                  "../items/vanilla/images/tube_coral_block.png", "../items/vanilla/images/tube_coral_block.png", "../items/vanilla/images/tube_coral_block.png",
                  "../items/vanilla/images/tube_coral_block.png", "../items/vanilla/images/cobweb.png", "../items/vanilla/images/tube_coral_block.png",
                  "../items/vanilla/images/tube_coral_block.png", "../items/vanilla/images/tube_coral_block.png", "../items/vanilla/images/tube_coral_block.png"
                ],
                names: [
                  "Tube Coral Block", "Tube Coral Block", "Tube Coral Block",
                  "Tube Coral Block", "Cobweb", "Tube Coral Block",
                  "Tube Coral Block", "Tube Coral Block", "Tube Coral Block"
                ],
                links: [
                  PATH.list + "","","",
                  PATH.list + "","","",
                  PATH.list + "","",""
                ],
                output: "../items/vanilla/images/dead_tube_coral_block.png",
                outputName: "Dead Tube Coral Block (8)",
                outputLink: ""
              },
            ],
          },
          {
            id: "dead tube coral fan",
            label: "Dead Tube Coral Fan",
            recipes: [
              {
                grid: [
                  "../items/vanilla/images/tube_coral_fan.png", "../items/vanilla/images/tube_coral_fan.png", "../items/vanilla/images/tube_coral_fan.png",
                  "../items/vanilla/images/tube_coral_fan.png", "../items/vanilla/images/cobweb.png", "../items/vanilla/images/tube_coral_fan.png",
                  "../items/vanilla/images/tube_coral_fan.png", "../items/vanilla/images/tube_coral_fan.png", "../items/vanilla/images/tube_coral_fan.png"
                ],
                names: [
                  "Tube Coral Fan", "Tube Coral Fan", "Tube Coral Fan",
                  "Tube Coral Fan", "Cobweb", "Tube Coral Fan",
                  "Tube Coral Fan", "Tube Coral Fan", "Tube Coral Fan"
                ],
                links: [
                  PATH.list + "","","",
                  PATH.list + "","","",
                  PATH.list + "","",""
                ],
                output: "../items/vanilla/images/dead_tube_coral_fan.png",
                outputName: "Dead Tube Coral Fan (8)",
                outputLink: ""
              },
            ],
          },
          {
            id: "fire coral",
            label: "Fire Coral",
            recipes: [
              {
                grid: [
                  "../items/mob_drops/images/ashimite_antlers.png", "../items/vanilla/images/red_dye.png", "",
                  "", "", "",
                  "", "", ""
                ],
                names: [
                  "Ashimite Antlers", "Red Dye", "",
                  "", "", "",
                  "", "", ""
                ],
                links: [
                  PATH.list + "ashimite_antlers","","",
                  PATH.list + "","","",
                  PATH.list + "","",""
                ],
                output: "../items/vanilla/images/fire_coral.png",
                outputName: "Fire Coral",
                outputLink: ""
              },
            ],
          },
          {
            id: "fire coral block",
            label: "Fire Coral Block",
            recipes: [
              {
                grid: [
                  "", "../items/mob_drops/images/ashimite_antlers.png", "",
                  "../items/mob_drops/images/ashimite_antlers.png", "../items/vanilla/images/red_dye.png", "../items/mob_drops/images/ashimite_antlers.png",
                  "", "../items/mob_drops/images/ashimite_antlers.png", ""
                ],
                names: [
                  "", "Ashimite Antlers", "",
                  "Ashimite Antlers", "Red Dye", "Ashimite Antlers",
                  "", "Ashimite Antlers", ""
                ],
                links: [
                  PATH.list + "","ashimite_antlers","",
                  PATH.list + "ashimite_antlers","","ashimite_antlers",
                  PATH.list + "","ashimite_antlers",""
                ],
                output: "../items/vanilla/images/fire_coral_block.png",
                outputName: "Fire Coral Block",
                outputLink: ""
              },
            ],
          },
          {
            id: "fire coral fan",
            label: "Fire Coral Fan",
            recipes: [
              {
                grid: [
                  "../items/custom_items/knife.png", "../items/vanilla/images/fire_coral.png", "",
                  "", "", "",
                  "", "", ""
                ],
                names: [
                  "Knife", "Fire Coral", "",
                  "", "", "",
                  "", "", ""
                ],
                links: [
                  PATH.list + "","","",
                  PATH.list + "","","",
                  PATH.list + "","",""
                ],
                output: "../items/vanilla/images/fire_coral_fan.png",
                outputName: "Fire Coral Fan (4)",
                outputLink: ""
              },
            ],
          },
          {
            id: "horn coral",
            label: "Horn Coral",
            recipes: [
              {
                grid: [
                  "../items/mob_drops/images/ashimite_antlers.png", "../items/vanilla/images/yellow_dye.png", "",
                  "", "", "",
                  "", "", ""
                ],
                names: [
                  "Ashimite Antlers", "Yellow Dye", "",
                  "", "", "",
                  "", "", ""
                ],
                links: [
                  PATH.list + "ashimite_antlers","","",
                  PATH.list + "","","",
                  PATH.list + "","",""
                ],
                output: "../items/vanilla/images/horn_coral.png",
                outputName: "Horn Coral",
                outputLink: ""
              },
            ],
          },
          {
            id: "horn coral block",
            label: "Horn Coral Block",
            recipes: [
              {
                grid: [
                  "", "../items/mob_drops/images/ashimite_antlers.png", "",
                  "../items/mob_drops/images/ashimite_antlers.png", "../items/vanilla/images/yellow_dye.png", "../items/mob_drops/images/ashimite_antlers.png",
                  "", "../items/mob_drops/images/ashimite_antlers.png", ""
                ],
                names: [
                  "", "Ashimite Antlers", "",
                  "Ashimite Antlers", "Yellow Dye", "Ashimite Antlers",
                  "", "Ashimite Antlers", ""
                ],
                links: [
                  PATH.list + "","ashimite_antlers","",
                  PATH.list + "ashimite_antlers","","ashimite_antlers",
                  PATH.list + "","ashimite_antlers",""
                ],
                output: "../items/vanilla/images/horn_coral_block.png",
                outputName: "Horn Coral Block",
                outputLink: ""
              },
            ],
          },
          {
            id: "tube coral",
            label: "Tube Coral",
            recipes: [
              {
                grid: [
                  "../items/mob_drops/images/ashimite_antlers.png", "../items/vanilla/images/blue_dye.png", "",
                  "", "", "",
                  "", "", ""
                ],
                names: [
                  "Ashimite Antlers", "Blue Dye", "",
                  "", "", "",
                  "", "", ""
                ],
                links: [
                  PATH.list + "ashimite_antlers","","",
                  PATH.list + "","","",
                  PATH.list + "","",""
                ],
                output: "../items/vanilla/images/tube_coral.png",
                outputName: "Tube Coral",
                outputLink: ""
              },
              {
                grid: [
                  "../items/mob_drops/images/ashimite_antlers.png", "../items/vanilla/images/cyan_dye.png", "",
                  "", "", "",
                  "", "", ""
                ],
                names: [
                  "Ashimite Antlers", "Cyan Dye", "",
                  "", "", "",
                  "", "", ""
                ],
                links: [
                  PATH.list + "ashimite_antlers","","",
                  PATH.list + "","","",
                  PATH.list + "","",""
                ],
                output: "../items/vanilla/images/tube_coral.png",
                outputName: "Tube Coral",
                outputLink: ""
              },
            ],
          },
          {
            id: "tube coral block",
            label: "Tube Coral Block",
            recipes: [
              {
                grid: [
                  "", "../items/mob_drops/images/ashimite_antlers.png", "",
                  "../items/mob_drops/images/ashimite_antlers.png", "../items/vanilla/images/blue_dye.png", "../items/mob_drops/images/ashimite_antlers.png",
                  "", "../items/mob_drops/images/ashimite_antlers.png", ""
                ],
                names: [
                  "", "Ashimite Antlers", "",
                  "Ashimite Antlers", "Blue Dye", "Ashimite Antlers",
                  "", "Ashimite Antlers", ""
                ],
                links: [
                  PATH.list + "","ashimite_antlers","",
                  PATH.list + "ashimite_antlers","","ashimite_antlers",
                  PATH.list + "","ashimite_antlers",""
                ],
                output: "../items/vanilla/images/tube_coral_block.png",
                outputName: "Tube Coral Block",
                outputLink: ""
              },
              {
                grid: [
                  "", "../items/mob_drops/images/ashimite_antlers.png", "",
                  "../items/mob_drops/images/ashimite_antlers.png", "../items/vanilla/images/cyan_dye.png", "../items/mob_drops/images/ashimite_antlers.png",
                  "", "../items/mob_drops/images/ashimite_antlers.png", ""
                ],
                names: [
                  "", "Ashimite Antlers", "",
                  "Ashimite Antlers", "Cyan Dye", "Ashimite Antlers",
                  "", "Ashimite Antlers", ""
                ],
                links: [
                  PATH.list + "","ashimite_antlers","",
                  PATH.list + "ashimite_antlers","","ashimite_antlers",
                  PATH.list + "","ashimite_antlers",""
                ],
                output: "../items/vanilla/images/tube_coral_block.png",
                outputName: "Tube Coral Block",
                outputLink: ""
              },
            ],
          },
          {
            id: "tube coral fan",
            label: "Tube Coral Fan",
            recipes: [
              {
                grid: [
                  "../items/custom_items/knife.png", "../items/vanilla/images/tube_coral.png", "",
                  "", "", "",
                  "", "", ""
                ],
                names: [
                  "Knife", "Tube Coral", "",
                  "", "", "",
                  "", "", ""
                ],
                links: [
                  PATH.list + "","","",
                  PATH.list + "","","",
                  PATH.list + "","",""
                ],
                output: "../items/vanilla/images/tube_coral_fan.png",
                outputName: "Tube Coral Fan (4)",
                outputLink: ""
              },
            ],
          },
        ]
      },
      {
        id: "string",
        label: "String",
        children: [
          {
            id: "stringbuh",
            label: "String",
            recipes: [
              {
                grid: [
                  "../items/mob_drops/images/silkfang_silk.png", "", "",
                  "", "", "",
                  "", "", ""
                ],
                names: [
                  "Silkfang Silk", "", "",
                  "", "", "",
                  "", "", ""
                ],
                links: [
                  PATH.list + "silkfang_silk","","",
                  PATH.list + "","","",
                  PATH.list + "","",""
                ],
                output: "../items/vanilla/images/string.png",
                outputName: "String",
                outputLink: ""
              },
              {
                grid: [
                  "../items/mob_drops/images/stinger_wing.png", "", "",
                  "", "", "",
                  "", "", ""
                ],
                names: [
                  "Stinger Wing", "", "",
                  "", "", "",
                  "", "", ""
                ],
                links: [
                  PATH.list + "stinger_wing","","",
                  PATH.list + "","","",
                  PATH.list + "","",""
                ],
                output: "../items/vanilla/images/string.png",
                outputName: "String",
                outputLink: ""
              },
              {
                grid: [
                  "../items/mob_drops/images/kuongatari_silk.png", "", "",
                  "", "", "",
                  "", "", ""
                ],
                names: [
                  "Kuongatari Silk", "", "",
                  "", "", "",
                  "", "", ""
                ],
                links: [
                  PATH.list + "kuongatari_silk","","",
                  PATH.list + "","","",
                  PATH.list + "","",""
                ],
                output: "../items/vanilla/images/string.png",
                outputName: "String",
                outputLink: ""
              },
            ],
          },
        ]
      },
      {
        id: "terracotta",
        label: "Terracotta",
        children: [
          {
            id: "dye black terracotta",
            label: "Dye Black Terracotta",
            recipes: [
              {
                grid: [
                  "../items/vanilla/images/terracotta.png", "../items/vanilla/images/terracotta.png", "../items/vanilla/images/terracotta.png",
                  "../items/vanilla/images/terracotta.png", "../items/vanilla/images/black_dye.png", "../items/vanilla/images/terracotta.png",
                  "../items/vanilla/images/terracotta.png", "../items/vanilla/images/terracotta.png", "../items/vanilla/images/terracotta.png"
                ],
                names: [
                  "Terracotta", "Terracotta", "Terracotta",
                  "Terracotta", "Black Dye", "Terracotta",
                  "Terracotta", "Terracotta", "Terracotta"
                ],
                links: [
                  PATH.list + "","","",
                  PATH.list + "","","",
                  PATH.list + "","",""
                ],
                output: "../items/vanilla/images/black_terracotta.png",
                outputName: "Black Terracotta (8)",
                outputLink: ""
              },
            ],
          },
          {
            id: "dye blue terracotta",
            label: "Dye Blue Terracotta",
            recipes: [
              {
                grid: [
                  "../items/vanilla/images/terracotta.png", "../items/vanilla/images/terracotta.png", "../items/vanilla/images/terracotta.png",
                  "../items/vanilla/images/terracotta.png", "../items/vanilla/images/blue_dye.png", "../items/vanilla/images/terracotta.png",
                  "../items/vanilla/images/terracotta.png", "../items/vanilla/images/terracotta.png", "../items/vanilla/images/terracotta.png"
                ],
                names: [
                  "Terracotta", "Terracotta", "Terracotta",
                  "Terracotta", "Blue Dye", "Terracotta",
                  "Terracotta", "Terracotta", "Terracotta"
                ],
                links: [
                  PATH.list + "","","",
                  PATH.list + "","","",
                  PATH.list + "","",""
                ],
                output: "../items/vanilla/images/blue_terracotta.png",
                outputName: "Blue Terracotta (8)",
                outputLink: ""
              },
            ],
          },
          {
            id: "dye brown terracotta",
            label: "Dye Brown Terracotta",
            recipes: [
              {
                grid: [
                  "../items/vanilla/images/terracotta.png", "../items/vanilla/images/terracotta.png", "../items/vanilla/images/terracotta.png",
                  "../items/vanilla/images/terracotta.png", "../items/vanilla/images/brown_dye.png", "../items/vanilla/images/terracotta.png",
                  "../items/vanilla/images/terracotta.png", "../items/vanilla/images/terracotta.png", "../items/vanilla/images/terracotta.png"
                ],
                names: [
                  "Terracotta", "Terracotta", "Terracotta",
                  "Terracotta", "Brown Dye", "Terracotta",
                  "Terracotta", "Terracotta", "Terracotta"
                ],
                links: [
                  PATH.list + "","","",
                  PATH.list + "","","",
                  PATH.list + "","",""
                ],
                output: "../items/vanilla/images/brown_terracotta.png",
                outputName: "Brown Terracotta (8)",
                outputLink: ""
              },
            ],
          },
          {
            id: "dye cyan terracotta",
            label: "Dye Cyan Terracotta",
            recipes: [
              {
                grid: [
                  "../items/vanilla/images/terracotta.png", "../items/vanilla/images/terracotta.png", "../items/vanilla/images/terracotta.png",
                  "../items/vanilla/images/terracotta.png", "../items/vanilla/images/cyan_dye.png", "../items/vanilla/images/terracotta.png",
                  "../items/vanilla/images/terracotta.png", "../items/vanilla/images/terracotta.png", "../items/vanilla/images/terracotta.png"
                ],
                names: [
                  "Terracotta", "Terracotta", "Terracotta",
                  "Terracotta", "Cyan Dye", "Terracotta",
                  "Terracotta", "Terracotta", "Terracotta"
                ],
                links: [
                  PATH.list + "","","",
                  PATH.list + "","","",
                  PATH.list + "","",""
                ],
                output: "../items/vanilla/images/cyan_terracotta.png",
                outputName: "Cyan Terracotta (8)",
                outputLink: ""
              },
            ],
          },
          {
            id: "dye gray terracotta",
            label: "Dye Gray Terracotta",
            recipes: [
              {
                grid: [
                  "../items/vanilla/images/terracotta.png", "../items/vanilla/images/terracotta.png", "../items/vanilla/images/terracotta.png",
                  "../items/vanilla/images/terracotta.png", "../items/vanilla/images/gray_dye.png", "../items/vanilla/images/terracotta.png",
                  "../items/vanilla/images/terracotta.png", "../items/vanilla/images/terracotta.png", "../items/vanilla/images/terracotta.png"
                ],
                names: [
                  "Terracotta", "Terracotta", "Terracotta",
                  "Terracotta", "Gray Dye", "Terracotta",
                  "Terracotta", "Terracotta", "Terracotta"
                ],
                links: [
                  PATH.list + "","","",
                  PATH.list + "","","",
                  PATH.list + "","",""
                ],
                output: "../items/vanilla/images/gray_terracotta.png",
                outputName: "Gray Terracotta (8)",
                outputLink: ""
              },
            ],
          },
          {
            id: "dye green terracotta",
            label: "Dye Green Terracotta",
            recipes: [
              {
                grid: [
                  "../items/vanilla/images/terracotta.png", "../items/vanilla/images/terracotta.png", "../items/vanilla/images/terracotta.png",
                  "../items/vanilla/images/terracotta.png", "../items/vanilla/images/green_dye.png", "../items/vanilla/images/terracotta.png",
                  "../items/vanilla/images/terracotta.png", "../items/vanilla/images/terracotta.png", "../items/vanilla/images/terracotta.png"
                ],
                names: [
                  "Terracotta", "Terracotta", "Terracotta",
                  "Terracotta", "Green Dye", "Terracotta",
                  "Terracotta", "Terracotta", "Terracotta"
                ],
                links: [
                  PATH.list + "","","",
                  PATH.list + "","","",
                  PATH.list + "","",""
                ],
                output: "../items/vanilla/images/green_terracotta.png",
                outputName: "Green Terracotta (8)",
                outputLink: ""
              },
            ],
          },
          {
            id: "dye light blue terracotta",
            label: "Dye Light Blue Terracotta",
            recipes: [
              {
                grid: [
                  "../items/vanilla/images/terracotta.png", "../items/vanilla/images/terracotta.png", "../items/vanilla/images/terracotta.png",
                  "../items/vanilla/images/terracotta.png", "../items/vanilla/images/light_blue_dye.png", "../items/vanilla/images/terracotta.png",
                  "../items/vanilla/images/terracotta.png", "../items/vanilla/images/terracotta.png", "../items/vanilla/images/terracotta.png"
                ],
                names: [
                  "Terracotta", "Terracotta", "Terracotta",
                  "Terracotta", "Light Blue Dye", "Terracotta",
                  "Terracotta", "Terracotta", "Terracotta"
                ],
                links: [
                  PATH.list + "","","",
                  PATH.list + "","","",
                  PATH.list + "","",""
                ],
                output: "../items/vanilla/images/light_blue_terracotta.png",
                outputName: "Light Blue Terracotta (8)",
                outputLink: ""
              },
            ],
          },
          {
            id: "dye light gray terracotta",
            label: "Dye Light Gray Terracotta",
            recipes: [
              {
                grid: [
                  "../items/vanilla/images/terracotta.png", "../items/vanilla/images/terracotta.png", "../items/vanilla/images/terracotta.png",
                  "../items/vanilla/images/terracotta.png", "../items/vanilla/images/light_gray_dye.png", "../items/vanilla/images/terracotta.png",
                  "../items/vanilla/images/terracotta.png", "../items/vanilla/images/terracotta.png", "../items/vanilla/images/terracotta.png"
                ],
                names: [
                  "Terracotta", "Terracotta", "Terracotta",
                  "Terracotta", "Light Gray Dye", "Terracotta",
                  "Terracotta", "Terracotta", "Terracotta"
                ],
                links: [
                  PATH.list + "","","",
                  PATH.list + "","","",
                  PATH.list + "","",""
                ],
                output: "../items/vanilla/images/light_gray_terracotta.png",
                outputName: "Light Gray Terracotta (8)",
                outputLink: ""
              },
            ],
          },
          {
            id: "dye lime terracotta",
            label: "Dye Lime Terracotta",
            recipes: [
              {
                grid: [
                  "../items/vanilla/images/terracotta.png", "../items/vanilla/images/terracotta.png", "../items/vanilla/images/terracotta.png",
                  "../items/vanilla/images/terracotta.png", "../items/vanilla/images/lime_dye.png", "../items/vanilla/images/terracotta.png",
                  "../items/vanilla/images/terracotta.png", "../items/vanilla/images/terracotta.png", "../items/vanilla/images/terracotta.png"
                ],
                names: [
                  "Terracotta", "Terracotta", "Terracotta",
                  "Terracotta", "Lime Dye", "Terracotta",
                  "Terracotta", "Terracotta", "Terracotta"
                ],
                links: [
                  PATH.list + "","","",
                  PATH.list + "","","",
                  PATH.list + "","",""
                ],
                output: "../items/vanilla/images/lime_terracotta.png",
                outputName: "Lime Terracotta (8)",
                outputLink: ""
              },
              {
                grid: [
                  "../items/vanilla/images/terracotta.png", "../items/vanilla/images/terracotta.png", "../items/vanilla/images/terracotta.png",
                  "../items/vanilla/images/terracotta.png", "../items/mob_drops/images/kuongatari_juice.png", "../items/vanilla/images/terracotta.png",
                  "../items/vanilla/images/terracotta.png", "../items/vanilla/images/terracotta.png", "../items/vanilla/images/terracotta.png"
                ],
                names: [
                  "Terracotta", "Terracotta", "Terracotta",
                  "Terracotta", "Kuongatari Juice", "Terracotta",
                  "Terracotta", "Terracotta", "Terracotta"
                ],
                links: [
                  PATH.list + "","","",
                  PATH.list + "","kuongatari_juice","",
                  PATH.list + "","",""
                ],
                output: "../items/vanilla/images/lime_terracotta.png",
                outputName: "Lime Terracotta (8)",
                outputLink: ""
              },
            ],
          },
          {
            id: "dye magenta terracotta",
            label: "Dye Magenta Terracotta",
            recipes: [
              {
                grid: [
                  "../items/vanilla/images/terracotta.png", "../items/vanilla/images/terracotta.png", "../items/vanilla/images/terracotta.png",
                  "../items/vanilla/images/terracotta.png", "../items/vanilla/images/magenta_dye.png", "../items/vanilla/images/terracotta.png",
                  "../items/vanilla/images/terracotta.png", "../items/vanilla/images/terracotta.png", "../items/vanilla/images/terracotta.png"
                ],
                names: [
                  "Terracotta", "Terracotta", "Terracotta",
                  "Terracotta", "Magenta Dye", "Terracotta",
                  "Terracotta", "Terracotta", "Terracotta"
                ],
                links: [
                  PATH.list + "","","",
                  PATH.list + "","","",
                  PATH.list + "","",""
                ],
                output: "../items/vanilla/images/magenta_terracotta.png",
                outputName: "Magenta Terracotta (8)",
                outputLink: ""
              },
            ],
          },
          {
            id: "dye orange terracotta",
            label: "Dye Orange Terracotta",
            recipes: [
              {
                grid: [
                  "../items/vanilla/images/terracotta.png", "../items/vanilla/images/terracotta.png", "../items/vanilla/images/terracotta.png",
                  "../items/vanilla/images/terracotta.png", "../items/vanilla/images/orange_dye.png", "../items/vanilla/images/terracotta.png",
                  "../items/vanilla/images/terracotta.png", "../items/vanilla/images/terracotta.png", "../items/vanilla/images/terracotta.png"
                ],
                names: [
                  "Terracotta", "Terracotta", "Terracotta",
                  "Terracotta", "Orange Dye", "Terracotta",
                  "Terracotta", "Terracotta", "Terracotta"
                ],
                links: [
                  PATH.list + "","","",
                  PATH.list + "","","",
                  PATH.list + "","",""
                ],
                output: "../items/vanilla/images/orange_terracotta.png",
                outputName: "Orange Terracotta (8)",
                outputLink: ""
              },
            ],
          },
          {
            id: "dye pink terracotta",
            label: "Dye Pink Terracotta",
            recipes: [
              {
                grid: [
                  "../items/vanilla/images/terracotta.png", "../items/vanilla/images/terracotta.png", "../items/vanilla/images/terracotta.png",
                  "../items/vanilla/images/terracotta.png", "../items/vanilla/images/pink_dye.png", "../items/vanilla/images/terracotta.png",
                  "../items/vanilla/images/terracotta.png", "../items/vanilla/images/terracotta.png", "../items/vanilla/images/terracotta.png"
                ],
                names: [
                  "Terracotta", "Terracotta", "Terracotta",
                  "Terracotta", "Pink Dye", "Terracotta",
                  "Terracotta", "Terracotta", "Terracotta"
                ],
                links: [
                  PATH.list + "","","",
                  PATH.list + "","","",
                  PATH.list + "","",""
                ],
                output: "../items/vanilla/images/pink_terracotta.png",
                outputName: "Pink Terracotta (8)",
                outputLink: ""
              },
            ],
          },
          {
            id: "dye purple terracotta",
            label: "Dye Purple Terracotta",
            recipes: [
              {
                grid: [
                  "../items/vanilla/images/terracotta.png", "../items/vanilla/images/terracotta.png", "../items/vanilla/images/terracotta.png",
                  "../items/vanilla/images/terracotta.png", "../items/vanilla/images/purple_dye.png", "../items/vanilla/images/terracotta.png",
                  "../items/vanilla/images/terracotta.png", "../items/vanilla/images/terracotta.png", "../items/vanilla/images/terracotta.png"
                ],
                names: [
                  "Terracotta", "Terracotta", "Terracotta",
                  "Terracotta", "Purple Dye", "Terracotta",
                  "Terracotta", "Terracotta", "Terracotta"
                ],
                links: [
                  PATH.list + "","","",
                  PATH.list + "","","",
                  PATH.list + "","",""
                ],
                output: "../items/vanilla/images/purple_terracotta.png",
                outputName: "Purple Terracotta (8)",
                outputLink: ""
              },
            ],
          },
          {
            id: "dye red terracotta",
            label: "Dye Red Terracotta",
            recipes: [
              {
                grid: [
                  "../items/vanilla/images/terracotta.png", "../items/vanilla/images/terracotta.png", "../items/vanilla/images/terracotta.png",
                  "../items/vanilla/images/terracotta.png", "../items/vanilla/images/red_dye.png", "../items/vanilla/images/terracotta.png",
                  "../items/vanilla/images/terracotta.png", "../items/vanilla/images/terracotta.png", "../items/vanilla/images/terracotta.png"
                ],
                names: [
                  "Terracotta", "Terracotta", "Terracotta",
                  "Terracotta", "Red Dye", "Terracotta",
                  "Terracotta", "Terracotta", "Terracotta"
                ],
                links: [
                  PATH.list + "","","",
                  PATH.list + "","","",
                  PATH.list + "","",""
                ],
                output: "../items/vanilla/images/red_terracotta.png",
                outputName: "Red Terracotta (8)",
                outputLink: ""
              },
            ],
          },
          {
            id: "dye white terracotta",
            label: "Dye White Terracotta",
            recipes: [
              {
                grid: [
                  "../items/vanilla/images/terracotta.png", "../items/vanilla/images/terracotta.png", "../items/vanilla/images/terracotta.png",
                  "../items/vanilla/images/terracotta.png", "../items/vanilla/images/white_dye.png", "../items/vanilla/images/terracotta.png",
                  "../items/vanilla/images/terracotta.png", "../items/vanilla/images/terracotta.png", "../items/vanilla/images/terracotta.png"
                ],
                names: [
                  "Terracotta", "Terracotta", "Terracotta",
                  "Terracotta", "White Dye", "Terracotta",
                  "Terracotta", "Terracotta", "Terracotta"
                ],
                links: [
                  PATH.list + "","","",
                  PATH.list + "","","",
                  PATH.list + "","",""
                ],
                output: "../items/vanilla/images/white_terracotta.png",
                outputName: "White Terracotta (8)",
                outputLink: ""
              },
            ],
          },
          {
            id: "dye yellow terracotta",
            label: "Dye Yellow Terracotta",
            recipes: [
              {
                grid: [
                  "../items/vanilla/images/terracotta.png", "../items/vanilla/images/terracotta.png", "../items/vanilla/images/terracotta.png",
                  "../items/vanilla/images/terracotta.png", "../items/vanilla/images/yellow_dye.png", "../items/vanilla/images/terracotta.png",
                  "../items/vanilla/images/terracotta.png", "../items/vanilla/images/terracotta.png", "../items/vanilla/images/terracotta.png"
                ],
                names: [
                  "Terracotta", "Terracotta", "Terracotta",
                  "Terracotta", "Yellow Dye", "Terracotta",
                  "Terracotta", "Terracotta", "Terracotta"
                ],
                links: [
                  PATH.list + "","","",
                  PATH.list + "","","",
                  PATH.list + "","",""
                ],
                output: "../items/vanilla/images/yellow_terracotta.png",
                outputName: "Yellow Terracotta (8)",
                outputLink: ""
              },
            ],
          },
        ]
      },
      {
        id: "wool",
        label: "Wool",
        children: [
          {
            id: "black wool",
            label: "Black Wool",
            recipes: [
              {
                grid: [
                  "../items/mob_drops/images/beniguma_fur.png", "", "",
                  "", "", "",
                  "", "", ""
                ],
                names: [
                  "Beniguma Fur", "", "",
                  "", "", "",
                  "", "", ""
                ],
                links: [
                  PATH.list + "beniguma_fur","","",
                  PATH.list + "","","",
                  PATH.list + "","",""
                ],
                output: "../items/vanilla/images/black_wool.png",
                outputName: "Black Wool",
                outputLink: ""
              },
              {
                grid: [
                  "../items/mob_drops/images/inbyo_fur.png", "", "",
                  "", "", "",
                  "", "", ""
                ],
                names: [
                  "Inbyo Fur", "", "",
                  "", "", "",
                  "", "", ""
                ],
                links: [
                  PATH.list + "inbyo_fur","","",
                  PATH.list + "","","",
                  PATH.list + "","",""
                ],
                output: "../items/vanilla/images/black_wool.png",
                outputName: "Black Wool",
                outputLink: ""
              },
            ],
          },
          {
            id: "brown wool",
            label: "Brown Wool",
            recipes: [
              {
                grid: [
                  "../items/mob_drops/images/mantoyer_fur.png", "", "",
                  "", "", "",
                  "", "", ""
                ],
                names: [
                  "Man-toyer Fur", "", "",
                  "", "", "",
                  "", "", ""
                ],
                links: [
                  PATH.list + "man-toyer_fur","","",
                  PATH.list + "","","",
                  PATH.list + "","",""
                ],
                output: "../items/vanilla/images/brown_wool.png",
                outputName: "Brown Wool",
                outputLink: ""
              },
            ],
          },
          {
            id: "red wool",
            label: "Red Wool",
            recipes: [
              {
                grid: [
                  "../items/mob_drops/images/chimokami_tail.png", "", "",
                  "", "", "",
                  "", "", ""
                ],
                names: [
                  "Chimokami Tail", "", "",
                  "", "", "",
                  "", "", ""
                ],
                links: [
                  PATH.list + "chimokami_tail","","",
                  PATH.list + "","","",
                  PATH.list + "","",""
                ],
                output: "../items/vanilla/images/red_wool.png",
                outputName: "Red Wool",
                outputLink: ""
              },
            ],
          },
        ]
      }
    ]
  },
  {
    id: "dyes",
    label: "Dyes",
    children: [
      {
        id: "black dye",
        label: "Black Dye",
        children: [
          {
            id: "black dye buh",
            label: "Black Dye",
            recipes: [
              {
                grid: [
                  "../items/mob_drops/images/makihige_ink_sac.png", "", "",
                  "", "", "",
                  "", "", ""
                ],
                names: [
                  "Makihige Ink Sac", "", "",
                  "", "", "",
                  "", "", ""
                ],
                links: [
                  PATH.list + "makihige_ink_sac","","",
                  PATH.list + "","","",
                  PATH.list + "","",""
                ],
                output: "../items/vanilla/images/black_dye.png",
                outputName: "Black Dye",
                outputLink: ""
              },
              {
                grid: [
                  "../items/mob_drops/images/inbyo_fur.png", "", "",
                  "", "", "",
                  "", "", ""
                ],
                names: [
                  "Inbyo Fur", "", "",
                  "", "", "",
                  "", "", ""
                ],
                links: [
                  PATH.list + "inbyo_fur","","",
                  PATH.list + "","","",
                  PATH.list + "","",""
                ],
                output: "../items/vanilla/images/black_dye.png",
                outputName: "Black Dye",
                outputLink: ""
              },
              {
                grid: [
                  "../items/vanilla/images/coal.png", "", "",
                  "", "", "",
                  "", "", ""
                ],
                names: [
                  "Coal", "", "",
                  "", "", "",
                  "", "", ""
                ],
                links: [
                  PATH.list + "","","",
                  PATH.list + "","","",
                  PATH.list + "","",""
                ],
                output: "../items/vanilla/images/black_dye.png",
                outputName: "Black Dye",
                outputLink: ""
              },
              {
                grid: [
                  "../items/vanilla/images/charcoal.png", "", "",
                  "", "", "",
                  "", "", ""
                ],
                names: [
                  "Charcoal", "", "",
                  "", "", "",
                  "", "", ""
                ],
                links: [
                  PATH.list + "","","",
                  PATH.list + "","","",
                  PATH.list + "","",""
                ],
                output: "../items/vanilla/images/black_dye.png",
                outputName: "Black Dye",
                outputLink: ""
              },
            ],
          },
        ]
      },
      {
        id: "green dye",
        label: "Green Dye",
        children: [
          {
            id: "green dye buh",
            label: "Green Dye",
            recipes: [
              {
                grid: [
                  "../items/mob_drops/images/splitjaw_gunk.png", "", "",
                  "", "", "",
                  "", "", ""
                ],
                names: [
                  "Splitjaw Gunk", "", "",
                  "", "", "",
                  "", "", ""
                ],
                links: [
                  PATH.list + "splitjaw_gunk","","",
                  PATH.list + "","","",
                  PATH.list + "","",""
                ],
                output: "../items/vanilla/images/green_dye.png",
                outputName: "Green Dye",
                outputLink: ""
              },
            ],
          },
        ]
      },
      {
        id: "magenta dye",
        label: "Magenta Dye",
        children: [
          {
            id: "magenta dye buh",
            label: "Magenta Dye",
            recipes: [
              {
                grid: [
                  "../items/mob_drops/images/rohana_powder.png", "", "",
                  "", "", "",
                  "", "", ""
                ],
                names: [
                  "Rohana Powder", "", "",
                  "", "", "",
                  "", "", ""
                ],
                links: [
                  PATH.list + "rohana_powder","","",
                  PATH.list + "","","",
                  PATH.list + "","",""
                ],
                output: "../items/vanilla/images/magenta_dye.png",
                outputName: "Magenta Dye",
                outputLink: ""
              },
            ],
          },
        ]
      },
      {
        id: "red dye",
        label: "Red Dye",
        children: [
          {
            id: "red dye buh",
            label: "Red Dye",
            recipes: [
              {
                grid: [
                  "../items/mob_drops/images/chimokami_tail.png", "", "",
                  "", "", "",
                  "", "", ""
                ],
                names: [
                  "Chimokami Tail", "", "",
                  "", "", "",
                  "", "", ""
                ],
                links: [
                  PATH.list + "chimokami_tail","","",
                  PATH.list + "","","",
                  PATH.list + "","",""
                ],
                output: "../items/vanilla/images/red_dye.png",
                outputName: "Red Dye",
                outputLink: ""
              },
              {
                grid: [
                  "../items/mob_drops/images/stingerhead_flesh.png", "", "",
                  "", "", "",
                  "", "", ""
                ],
                names: [
                  "Stingerhead Flesh", "", "",
                  "", "", "",
                  "", "", ""
                ],
                links: [
                  PATH.list + "stingerhead_flesh","","",
                  PATH.list + "","","",
                  PATH.list + "","",""
                ],
                output: "../items/vanilla/images/red_dye.png",
                outputName: "Red Dye",
                outputLink: ""
              },
              {
                grid: [
                  "../items/mob_drops/images/virinsipede_segments.png", "", "",
                  "", "", "",
                  "", "", ""
                ],
                names: [
                  "Virinsipede Segments", "", "",
                  "", "", "",
                  "", "", ""
                ],
                links: [
                  PATH.list + "virinsipede_segments","","",
                  PATH.list + "","","",
                  PATH.list + "","",""
                ],
                output: "../items/vanilla/images/red_dye.png",
                outputName: "Red Dye",
                outputLink: ""
              },
            ],
          },
        ]
      },
      {
        id: "white dye",
        label: "White Dye",
        children: [
          {
            id: "white dye buh",
            label: "White Dye",
            recipes: [
              {
                grid: [
                  "../items/mob_drops/images/kazura_squid_ink_sac.png", "", "",
                  "", "", "",
                  "", "", ""
                ],
                names: [
                  "Kazura Squid Ink Sac", "", "",
                  "", "", "",
                  "", "", ""
                ],
                links: [
                  PATH.list + "kazura_squid_ink_sac","","",
                  PATH.list + "","","",
                  PATH.list + "","",""
                ],
                output: "../items/vanilla/images/white_dye.png",
                outputName: "White Dye",
                outputLink: ""
              },
            ],
          },
        ]
      }
    ]
  },
  {
    id: "food",
    label: "Food",
    children: [
      {
        id: "cake",
        label: "Cake",
        children: [
          {
            id: "cake buh",
            label: "Cake",
            recipes: [
              {
                grid: [
                  "../items/vanilla/images/milk_bucket.png", "../items/vanilla/images/milk_bucket.png", "../items/vanilla/images/milk_bucket.png",
                  "../items/vanilla/images/sugar.png", "../items/vanilla/images/egg.png", "../items/vanilla/images/sugar.png",
                  "../items/vanilla/images/wheat.png", "../items/vanilla/images/wheat.png", "../items/vanilla/images/wheat.png"
                ],
                names: [
                  "Milk Bucket", "Milk Bucket", "Milk Bucket",
                  "Sugar", "Egg", "Sugar",
                  "Wheat", "Wheat", "Wheat"
                ],
                links: [
                  PATH.list + "","","",
                  PATH.list + "","","",
                  PATH.list + "","",""
                ],
                output: "../items/vanilla/images/cake.png",
                outputName: "Cake",
                outputLink: ""
              },
            ],
          },
        ]
      },
      {
        id: "knife fillet cooked",
        label: "Knife Fillet Cooked",
        children: [
          {
            id: "knife fillet cooked buh",
            label: "Knife Fillet Cooked",
            recipes: [
              {
                grid: [
                  "../items/custom_items/knife.png", "../items/mob_drops/images/ashimite_meat_cooked.png", "",
                  "", "", "",
                  "", "", ""
                ],
                names: [
                  "Knife", "Cooked Ashimite Meat", "",
                  "", "", "",
                  "", "", ""
                ],
                links: [
                  PATH.list + "","ashimite_meat_cooked","",
                  PATH.list + "","","",
                  PATH.list + "","",""
                ],
                output: "../items/food/cut_meat_cooked.png",
                outputName: "Cooked Cut Meat",
                outputLink: ""
              },
              {
                grid: [
                  "../items/custom_items/knife.png", "../items/mob_drops/images/corpse_weeper_meat_cooked.png", "",
                  "", "", "",
                  "", "", ""
                ],
                names: [
                  "Knife", "Cooked Corpse Weeper Meat", "",
                  "", "", "",
                  "", "", ""
                ],
                links: [
                  PATH.list + "","cooked_corpse_weeper_meat","",
                  PATH.list + "","","",
                  PATH.list + "","",""
                ],
                output: "../items/food/cut_meat_cooked.png",
                outputName: "Cooked Cut Meat",
                outputLink: ""
              },
              {
                grid: [
                  "../items/custom_items/knife.png", "../items/mob_drops/images/dosetori_meat_cooked.png", "",
                  "", "", "",
                  "", "", ""
                ],
                names: [
                  "Knife", "Cooked Dosetori Meat", "",
                  "", "", "",
                  "", "", ""
                ],
                links: [
                  PATH.list + "","cooked_dosetori_meat","",
                  PATH.list + "","","",
                  PATH.list + "","",""
                ],
                output: "../items/food/cut_meat_cooked.png",
                outputName: "Cooked Cut Meat",
                outputLink: ""
              },
              {
                grid: [
                  "../items/custom_items/knife.png", "../items/mob_drops/images/fuwagi_meat_cooked.png", "",
                  "", "", "",
                  "", "", ""
                ],
                names: [
                  "Knife", "Cooked Fuwagi Meat", "",
                  "", "", "",
                  "", "", ""
                ],
                links: [
                  PATH.list + "","cooked_fuwagi_meat","",
                  PATH.list + "","","",
                  PATH.list + "","",""
                ],
                output: "../items/food/cut_meat_cooked.png",
                outputName: "Cooked Cut Meat",
                outputLink: ""
              },
              {
                grid: [
                  "../items/custom_items/knife.png", "../items/mob_drops/images/inbyo_meat_cooked.png", "",
                  "", "", "",
                  "", "", ""
                ],
                names: [
                  "Knife", "Cooked Inbyo Meat", "",
                  "", "", "",
                  "", "", ""
                ],
                links: [
                  PATH.list + "","cooked_inbyo_meat","",
                  PATH.list + "","","",
                  PATH.list + "","",""
                ],
                output: "../items/food/cut_meat_cooked.png",
                outputName: "Cooked Cut Meat",
                outputLink: ""
              },
              {
                grid: [
                  "../items/custom_items/knife.png", "../items/mob_drops/images/neritantan_meat_cooked.png", "",
                  "", "", "",
                  "", "", ""
                ],
                names: [
                  "Knife", "Cooked Neritantan Meat", "",
                  "", "", "",
                  "", "", ""
                ],
                links: [
                  PATH.list + "","cooked_neritantan_meat","",
                  PATH.list + "","","",
                  PATH.list + "","",""
                ],
                output: "../items/food/cut_meat_cooked.png",
                outputName: "Cooked Cut Meat",
                outputLink: ""
              },
              {
                grid: [
                  "../items/custom_items/knife.png", "../items/mob_drops/images/okibo_meat_cooked.png", "",
                  "", "", "",
                  "", "", ""
                ],
                names: [
                  "Knife", "Cooked Okibo Meat", "",
                  "", "", "",
                  "", "", ""
                ],
                links: [
                  PATH.list + "","cooked_okibo_meat","",
                  PATH.list + "","","",
                  PATH.list + "","",""
                ],
                output: "../items/food/cut_meat_cooked.png",
                outputName: "Cooked Cut Meat",
                outputLink: ""
              },
              {
                grid: [
                  "../items/custom_items/knife.png", "../items/mob_drops/images/ottobas_meat_cooked.png", "",
                  "", "", "",
                  "", "", ""
                ],
                names: [
                  "Knife", "Cooked Ottobas Meat", "",
                  "", "", "",
                  "", "", ""
                ],
                links: [
                  PATH.list + "","cooked_ottobas_meat","",
                  PATH.list + "","","",
                  PATH.list + "","",""
                ],
                output: "../items/food/cut_meat_cooked.png",
                outputName: "Cooked Cut Meat",
                outputLink: ""
              },
              {
                grid: [
                  "../items/custom_items/knife.png", "../items/mob_drops/images/shroombear_meat_cooked.png", "",
                  "", "", "",
                  "", "", ""
                ],
                names: [
                  "Knife", "Cooked Shroombear Meat", "",
                  "", "", "",
                  "", "", ""
                ],
                links: [
                  PATH.list + "","cooked_shroombear_meat","",
                  PATH.list + "","","",
                  PATH.list + "","",""
                ],
                output: "../items/food/cut_meat_cooked.png",
                outputName: "Cooked Cut Meat",
                outputLink: ""
              },
              {
                grid: [
                  "../items/custom_items/knife.png", "../items/mob_drops/images/uibuta_meat_cooked.png", "",
                  "", "", "",
                  "", "", ""
                ],
                names: [
                  "Knife", "Cooked Uibuta Meat", "",
                  "", "", "",
                  "", "", ""
                ],
                links: [
                  PATH.list + "","cooked_uibuta_meat","",
                  PATH.list + "","","",
                  PATH.list + "","",""
                ],
                output: "../items/food/cut_meat_cooked.png",
                outputName: "Cooked Cut Meat",
                outputLink: ""
              },
              {
                grid: [
                  "../items/custom_items/knife.png", "../items/mob_drops/images/hammerbeak_wing_cooked.png", "",
                  "", "", "",
                  "", "", ""
                ],
                names: [
                  "Knife", "Cooked Hammerbeak Wing", "",
                  "", "", "",
                  "", "", ""
                ],
                links: [
                  PATH.list + "","cooked_hammerbeak_wing","",
                  PATH.list + "","","",
                  PATH.list + "","",""
                ],
                output: "../items/food/cut_meat_cooked.png",
                outputName: "Cooked Cut Meat",
                outputLink: ""
              },
              {
                grid: [
                  "../items/custom_items/knife.png", "../items/mob_drops/images/onitsuchi_wing_cooked.png", "",
                  "", "", "",
                  "", "", ""
                ],
                names: [
                  "Knife", "Cooked Onitsuchi Wing", "",
                  "", "", "",
                  "", "", ""
                ],
                links: [
                  PATH.list + "","cooked_onitsuchi_wing","",
                  PATH.list + "","","",
                  PATH.list + "","",""
                ],
                output: "../items/food/cut_meat_cooked.png",
                outputName: "Cooked Cut Meat",
                outputLink: ""
              },
              {
                grid: [
                  "../items/custom_items/knife.png", "../items/mob_drops/images/cyatoria_drumstick_cooked.png", "",
                  "", "", "",
                  "", "", ""
                ],
                names: [
                  "Knife", "Cooked Cyatoria Drumstick", "",
                  "", "", "",
                  "", "", ""
                ],
                links: [
                  PATH.list + "","cooked_cyatoria_drumstick","",
                  PATH.list + "","","",
                  PATH.list + "","",""
                ],
                output: "../items/food/cut_meat_cooked.png",
                outputName: "Cooked Cut Meat",
                outputLink: ""
              },
            ],
          },
        ]
      },
      {
        id: "knife fillet raw",
        label: "Knife Fillet Raw",
        children: [
          {
            id: "knife fillet raw buh",
            label: "Knife Fillet Raw",
            recipes: [
              {
                grid: [
                  "../items/custom_items/knife.png", "../items/mob_drops/images/ashimite_meat_raw.png", "",
                  "", "", "",
                  "", "", ""
                ],
                names: [
                  "Knife", "Raw Ashimite Meat", "",
                  "", "", "",
                  "", "", ""
                ],
                links: [
                  PATH.list + "","raw_ashimite_meat","",
                  PATH.list + "","","",
                  PATH.list + "","",""
                ],
                output: "../items/food/cut_meat_raw.png",
                outputName: "Raw Cut Meat",
                outputLink: ""
              },
              {
                grid: [
                  "../items/custom_items/knife.png", "../items/mob_drops/images/corpse_weeper_meat_raw.png", "",
                  "", "", "",
                  "", "", ""
                ],
                names: [
                  "Knife", "Raw Corpse Weeper Meat", "",
                  "", "", "",
                  "", "", ""
                ],
                links: [
                  PATH.list + "","raw_corpse_weeper_meat","",
                  PATH.list + "","","",
                  PATH.list + "","",""
                ],
                output: "../items/food/cut_meat_raw.png",
                outputName: "Raw Cut Meat",
                outputLink: ""
              },
              {
                grid: [
                  "../items/custom_items/knife.png", "../items/mob_drops/images/dosetori_meat_raw.png", "",
                  "", "", "",
                  "", "", ""
                ],
                names: [
                  "Knife", "Raw Dosetori Meat", "",
                  "", "", "",
                  "", "", ""
                ],
                links: [
                  PATH.list + "","raw_dosetori_meat","",
                  PATH.list + "","","",
                  PATH.list + "","",""
                ],
                output: "../items/food/cut_meat_raw.png",
                outputName: "Raw Cut Meat",
                outputLink: ""
              },
              {
                grid: [
                  "../items/custom_items/knife.png", "../items/mob_drops/images/fuwagi_meat_raw.png", "",
                  "", "", "",
                  "", "", ""
                ],
                names: [
                  "Knife", "Raw Fuwagi Meat", "",
                  "", "", "",
                  "", "", ""
                ],
                links: [
                  PATH.list + "","raw_fuwagi_meat","",
                  PATH.list + "","","",
                  PATH.list + "","",""
                ],
                output: "../items/food/cut_meat_raw.png",
                outputName: "Raw Cut Meat",
                outputLink: ""
              },
              {
                grid: [
                  "../items/custom_items/knife.png", "../items/mob_drops/images/inbyo_meat_raw.png", "",
                  "", "", "",
                  "", "", ""
                ],
                names: [
                  "Knife", "Raw Inbyo Meat", "",
                  "", "", "",
                  "", "", ""
                ],
                links: [
                  PATH.list + "","raw_inbyo_meat","",
                  PATH.list + "","","",
                  PATH.list + "","",""
                ],
                output: "../items/food/cut_meat_raw.png",
                outputName: "Raw Cut Meat",
                outputLink: ""
              },
              {
                grid: [
                  "../items/custom_items/knife.png", "../items/mob_drops/images/neritantan_meat_raw.png", "",
                  "", "", "",
                  "", "", ""
                ],
                names: [
                  "Knife", "Raw Neritantan Meat", "",
                  "", "", "",
                  "", "", ""
                ],
                links: [
                  PATH.list + "","raw_neritantan_meat","",
                  PATH.list + "","","",
                  PATH.list + "","",""
                ],
                output: "../items/food/cut_meat_raw.png",
                outputName: "Raw Cut Meat",
                outputLink: ""
              },
              {
                grid: [
                  "../items/custom_items/knife.png", "../items/mob_drops/images/okibo_meat_raw.png", "",
                  "", "", "",
                  "", "", ""
                ],
                names: [
                  "Knife", "Raw Okibo Meat", "",
                  "", "", "",
                  "", "", ""
                ],
                links: [
                  PATH.list + "","raw_okibo_meat","",
                  PATH.list + "","","",
                  PATH.list + "","",""
                ],
                output: "../items/food/cut_meat_raw.png",
                outputName: "Raw Cut Meat",
                outputLink: ""
              },
              {
                grid: [
                  "../items/custom_items/knife.png", "../items/mob_drops/images/ottobas_meat_raw.png", "",
                  "", "", "",
                  "", "", ""
                ],
                names: [
                  "Knife", "Raw Ottobas Meat", "",
                  "", "", "",
                  "", "", ""
                ],
                links: [
                  PATH.list + "","raw_ottobas_meat","",
                  PATH.list + "","","",
                  PATH.list + "","",""
                ],
                output: "../items/food/cut_meat_raw.png",
                outputName: "Raw Cut Meat",
                outputLink: ""
              },
              {
                grid: [
                  "../items/custom_items/knife.png", "../items/mob_drops/images/shroombear_meat_raw.png", "",
                  "", "", "",
                  "", "", ""
                ],
                names: [
                  "Knife", "Raw Shroombear Meat", "",
                  "", "", "",
                  "", "", ""
                ],
                links: [
                  PATH.list + "","raw_shroombear_meat","",
                  PATH.list + "","","",
                  PATH.list + "","",""
                ],
                output: "../items/food/cut_meat_raw.png",
                outputName: "Raw Cut Meat",
                outputLink: ""
              },
              {
                grid: [
                  "../items/custom_items/knife.png", "../items/mob_drops/images/uibuta_meat_raw.png", "",
                  "", "", "",
                  "", "", ""
                ],
                names: [
                  "Knife", "Raw Uibuta Meat", "",
                  "", "", "",
                  "", "", ""
                ],
                links: [
                  PATH.list + "","raw_uibuta_meat","",
                  PATH.list + "","","",
                  PATH.list + "","",""
                ],
                output: "../items/food/cut_meat_raw.png",
                outputName: "Raw Cut Meat",
                outputLink: ""
              },
              {
                grid: [
                  "../items/custom_items/knife.png", "../items/mob_drops/images/hammerbeak_wing_raw.png", "",
                  "", "", "",
                  "", "", ""
                ],
                names: [
                  "Knife", "Raw Hammerbeak Wing", "",
                  "", "", "",
                  "", "", ""
                ],
                links: [
                  PATH.list + "","raw_hammerbeak_wing","",
                  PATH.list + "","","",
                  PATH.list + "","",""
                ],
                output: "../items/food/cut_meat_raw.png",
                outputName: "Raw Cut Meat",
                outputLink: ""
              },
              {
                grid: [
                  "../items/custom_items/knife.png", "../items/mob_drops/images/onitsuchi_wing_raw.png", "",
                  "", "", "",
                  "", "", ""
                ],
                names: [
                  "Knife", "Raw Onitsuchi Wing", "",
                  "", "", "",
                  "", "", ""
                ],
                links: [
                  PATH.list + "","raw_onitsuchi_wing","",
                  PATH.list + "","","",
                  PATH.list + "","",""
                ],
                output: "../items/food/cut_meat_raw.png",
                outputName: "Raw Cut Meat",
                outputLink: ""
              },
              {
                grid: [
                  "../items/custom_items/knife.png", "../items/mob_drops/images/cyatoria_drumstick_raw.png", "",
                  "", "", "",
                  "", "", ""
                ],
                names: [
                  "Knife", "Raw Cyatoria Drumstick", "",
                  "", "", "",
                  "", "", ""
                ],
                links: [
                  PATH.list + "","raw_cyatoria_drumstick","",
                  PATH.list + "","","",
                  PATH.list + "","",""
                ],
                output: "../items/food/cut_meat_raw.png",
                outputName: "Raw Cut Meat",
                outputLink: ""
              },
            ],
          },
        ]
      }
    ]
  },
  {
    id: "plants",
    label: "Plants",
    children: [
      {
        id: "plants buh",
        label: "Plants",
        children: [
          {
            id: "beetroot seeds",
            label: "Beetroot Seeds",
            recipes: [
              {
                grid: [
                  "../items/vanilla/images/beetroot.png", "", "",
                  "", "", "",
                  "", "", ""
                ],
                names: [
                  "Beetroot", "", "",
                  "", "", "",
                  "", "", ""
                ],
                links: [
                  PATH.list + "","","",
                  PATH.list + "","","",
                  PATH.list + "","",""
                ],
                output: "../items/vanilla/images/beetroot_seeds.png",
                outputName: "Beetroot Seeds",
                outputLink: ""
              },
            ],
          },
          {
            id: "big dripleaf",
            label: "Big Dripleaf",
            recipes: [
              {
                grid: [
                  "../items/mob_drops/images/plant_matter.png", "../items/mob_drops/images/plant_matter.png", "../items/mob_drops/images/plant_matter.png",
                  "../items/mob_drops/images/plant_matter.png", "", "",
                  "../items/mob_drops/images/spittleshrub_root.png", "", ""
                ],
                names: [
                  "Plant Matter", "Plant Matter", "Plant Matter",
                  "Plant Matter", "", "",
                  "Spittleshrub Root", "", ""
                ],
                links: [
                  PATH.list + "plant_matter","plant_matter","plant_matter",
                  PATH.list + "plant_matter","","",
                  PATH.list + "spittleshrub_root","",""
                ],
                output: "../items/vanilla/images/big_dripleaf.png",
                outputName: "Big Dripleaf (8)",
                outputLink: ""
              },
            ],
          },
          {
            id: "brown mushroom",
            label: "Brown Mushroom",
            recipes: [
              {
                grid: [
                  "../items/mob_drops/images/plant_matter.png", "../items/vanilla/images/brown_dye.png", "",
                  "", "", "",
                  "", "", ""
                ],
                names: [
                  "Plant Matter", "Brown Dye", "",
                  "", "", "",
                  "", "", ""
                ],
                links: [
                  PATH.list + "plant_matter","","",
                  PATH.list + "","","",
                  PATH.list + "","",""
                ],
                output: "../items/vanilla/images/brown_mushroom.png",
                outputName: "Brown Mushroom (2)",
                outputLink: ""
              },
            ],
          },
          {
            id: "bush",
            label: "Bush",
            recipes: [
              {
                grid: [
                  "../items/mob_drops/images/plant_matter.png", "../items/mob_drops/images/madokajack_poop.png", "",
                  "", "", "",
                  "", "", ""
                ],
                names: [
                  "Plant Matter", "Madokajack Poop", "",
                  "", "", "",
                  "", "", ""
                ],
                links: [
                  PATH.list + "plant_matter","madokajack_poop","",
                  PATH.list + "","","",
                  PATH.list + "","",""
                ],
                output: "../items/vanilla/images/bush.png",
                outputName: "Bush (2)",
                outputLink: ""
              },
            ],
          },
          {
            id: "crimson fungus",
            label: "Crimson Fungus",
            recipes: [
              {
                grid: [
                  "../items/mob_drops/images/parasitic_watershrooms.png", "../items/mob_drops/images/yomotsubi_abdomen_cooked.png", "",
                  "", "", "",
                  "", "", ""
                ],
                names: [
                  "Parasitic Watershrooms", "Cooked Yomotsubi Abdomen", "",
                  "", "", "",
                  "", "", ""
                ],
                links: [
                  PATH.list + "parasitic_watershrooms","cooked_yomotsubi_abdomen","",
                  PATH.list + "","","",
                  PATH.list + "","",""
                ],
                output: "../items/vanilla/images/crimson_fungus.png",
                outputName: "Crimson Fungus",
                outputLink: ""
              },
              {
                grid: [
                  "../items/mob_drops/images/parasitic_watershrooms.png", "../items/mob_drops/images/yomotsubi_abdomen_raw.png", "",
                  "", "", "",
                  "", "", ""
                ],
                names: [
                  "Parasitic Watershrooms", "Raw Yomotsubi Abdomen", "",
                  "", "", "",
                  "", "", ""
                ],
                links: [
                  PATH.list + "parasitic_watershrooms","raw_yomotsubi_abdomen","",
                  PATH.list + "","","",
                  PATH.list + "","",""
                ],
                output: "../items/vanilla/images/crimson_fungus.png",
                outputName: "Crimson Fungus",
                outputLink: ""
              },
            ],
          },
          {
            id: "dead bush",
            label: "Dead Bush",
            recipes: [
              {
                grid: [
                  "../items/vanilla/images/sand.png", "", "../items/vanilla/images/sand.png",
                  "../items/vanilla/images/sand.png", "../items/mob_drops/images/plant_matter.png", "../items/vanilla/images/sand.png",
                  "", "../items/vanilla/images/sand.png", ""
                ],
                names: [
                  "Sand", "", "Sand",
                  "Sand", "Plant Matter", "Sand",
                  "", "Sand", ""
                ],
                links: [
                  PATH.list + "","","",
                  PATH.list + "","plant_matter","",
                  PATH.list + "","",""
                ],
                output: "../items/vanilla/images/dead_bush.png",
                outputName: "Dead Bush (6)",
                outputLink: ""
              },
            ],
          },
          {
            id: "firefly bush",
            label: "Firefly Bush",
            recipes: [
              {
                grid: [
                  "", "../items/mob_drops/images/sporemanta_powder.png", "",
                  "../items/mob_drops/images/sporemanta_powder.png", "../items/mob_drops/images/plant_matter.png", "../items/mob_drops/images/sporemanta_powder.png",
                  "../items/mob_drops/images/plant_matter.png", "../items/mob_drops/images/spittleshrub_root.png", "../items/mob_drops/images/plant_matter.png"
                ],
                names: [
                  "", "Sporemanta Powder", "",
                  "Sporemanta Powder", "Plant Matter", "Sporemanta Powder",
                  "Plant Matter", "Spittleshrub Root", "Plant Matter"
                ],
                links: [
                  PATH.list + "","sporemanta_powder","",
                  PATH.list + "sporemanta_powder","plant_matter","sporemanta_powder",
                  PATH.list + "plant_matter","spittleshrub_root","plant_matter"
                ],
                output: "../items/vanilla/images/firefly_bush.png",
                outputName: "Firefly Bush (3)",
                outputLink: ""
              },
            ],
          },
          {
            id: "glow lichen",
            label: "Glow Lichen",
            recipes: [
              {
                grid: [
                  "../items/mob_drops/images/kakatsumuri_glowing_tip.png", "../items/vanilla/images/vine.png", "",
                  "", "", "",
                  "", "", ""
                ],
                names: [
                  "Kakatsumuri Glowing Tip", "Vine", "",
                  "", "", "",
                  "", "", ""
                ],
                links: [
                  PATH.list + "kakatsumuri_glowing_tip","","",
                  PATH.list + "","","",
                  PATH.list + "","",""
                ],
                output: "../items/vanilla/images/glow_lichen.png",
                outputName: "Glow Lichen (2)",
                outputLink: ""
              },
            ],
          },
          {
            id: "melon",
            label: "Melon",
            recipes: [
              {
                grid: [
                  "../items/vanilla/images/wheat_seeds.png", "../items/vanilla/images/wheat_seeds.png", "../items/vanilla/images/wheat_seeds.png",
                  "../items/vanilla/images/wheat_seeds.png", "../items/mob_drops/images/plant_matter.png", "../items/vanilla/images/wheat_seeds.png",
                  "../items/vanilla/images/wheat_seeds.png", "../items/vanilla/images/wheat_seeds.png", "../items/vanilla/images/wheat_seeds.png"
                ],
                names: [
                  "Wheat Seeds", "Wheat Seeds", "Wheat Seeds",
                  "Wheat Seeds", "Plant Matter", "Wheat Seeds",
                  "Wheat Seeds", "Wheat Seeds", "Wheat Seeds"
                ],
                links: [
                  PATH.list + "","","",
                  PATH.list + "","plant_matter","",
                  PATH.list + "","",""
                ],
                output: "../items/vanilla/images/melon.png",
                outputName: "Melon",
                outputLink: ""
              },
            ],
          },
          {
            id: "open eyeblossom",
            label: "Open Eyeblossom",
            recipes: [
              {
                grid: [
                  "", "../items/mob_drops/images/stingerhead_eye.png", "",
                  "../items/mob_drops/images/stingerhead_eye.png", "../items/mob_drops/images/plant_matter.png", "../items/mob_drops/images/stingerhead_eye.png",
                  "", "../items/mob_drops/images/spittleshrub_root.png", ""
                ],
                names: [
                  "", "Stingerhead Eye", "",
                  "Stingerhead Eye", "Plant Matter", "Stingerhead Eye",
                  "", "Spittleshrub Root", ""
                ],
                links: [
                  PATH.list + "","stingerhead_eye","",
                  PATH.list + "stingerhead_eye","plant_matter","stingerhead_eye",
                  PATH.list + "","spittleshrub_root",""
                ],
                output: "../items/vanilla/images/open_eyeblossom.png",
                outputName: "Open Eyeblossom (2)",
                outputLink: ""
              },
            ],
          },
          {
            id: "pale oak sapling",
            label: "Pale Oak Sapling",
            recipes: [
              {
                grid: [
                  "../items/mob_drops/images/octoliar_tentacle.png", "../items/mob_drops/images/octoliar_tentacle.png", "../items/mob_drops/images/octoliar_tentacle.png",
                  "../items/mob_drops/images/octoliar_tentacle.png", "../items/mob_drops/images/plant_matter.png", "../items/mob_drops/images/octoliar_tentacle.png",
                  "../items/mob_drops/images/octoliar_tentacle.png", "../items/mob_drops/images/octoliar_tentacle.png", "../items/mob_drops/images/octoliar_tentacle.png"
                ],
                names: [
                  "Octoliar Tentacle", "Octoliar Tentacle", "Octoliar Tentacle",
                  "Octoliar Tentacle", "Plant Matter", "Octoliar Tentacle",
                  "Octoliar Tentacle", "Octoliar Tentacle", "Octoliar Tentacle"
                ],
                links: [
                  PATH.list + "octoliar_tentacle","octoliar_tentacle","octoliar_tentacle",
                  PATH.list + "octoliar_tentacle","plant_matter","octoliar_tentacle",
                  PATH.list + "octoliar_tentacle","octoliar_tentacle","octoliar_tentacle"
                ],
                output: "../items/vanilla/images/pale_oak_sapling.png",
                outputName: "Pale Oak Sapling",
                outputLink: ""
              },
            ],
          },
          {
            id: "pitcher plant",
            label: "Pitcher Plant",
            recipes: [
              {
                grid: [
                  "", "../items/mob_drops/images/tachikatana_claw.png", "",
                  "", "../items/mob_drops/images/plant_matter.png", "",
                  "", "../items/mob_drops/images/spittleshrub_root.png", ""
                ],
                names: [
                  "", "Tachikatana Claw", "",
                  "", "Plant Matter", "",
                  "", "Spittleshrub Root", ""
                ],
                links: [
                  PATH.list + "","tachikatana_claw","",
                  PATH.list + "","plant_matter","",
                  PATH.list + "","spittleshrub_root",""
                ],
                output: "../items/vanilla/images/pitcher_plant.png",
                outputName: "Pitcher Plant",
                outputLink: ""
              },
            ],
          },
          {
            id: "red mushroom",
            label: "Red Mushroom",
            recipes: [
              {
                grid: [
                  "../items/mob_drops/images/plant_matter.png", "../items/vanilla/images/red_dye.png", "",
                  "", "", "",
                  "", "", ""
                ],
                names: [
                  "Plant Matter", "Red Dye", "",
                  "", "", "",
                  "", "", ""
                ],
                links: [
                  PATH.list + "plant_matter","","",
                  PATH.list + "","","",
                  PATH.list + "","",""
                ],
                output: "../items/vanilla/images/red_mushroom.png",
                outputName: "Red Mushroom (2)",
                outputLink: ""
              },
            ],
          },
          {
            id: "small dripleaf",
            label: "Small Dripleaf",
            recipes: [
              {
                grid: [
                  "", "", "",
                  "../items/mob_drops/images/plant_matter.png", "../items/mob_drops/images/plant_matter.png", "../items/mob_drops/images/plant_matter.png",
                  "../items/mob_drops/images/spittleshrub_root.png", "", ""
                ],
                names: [
                  "", "", "",
                  "Plant Matter", "Plant Matter", "Plant Matter",
                  "Spittleshrub Root", "", ""
                ],
                links: [
                  PATH.list + "","","",
                  PATH.list + "plant_matter","plant_matter","plant_matter",
                  PATH.list + "spittleshrub_root","",""
                ],
                output: "../items/vanilla/images/small_dripleaf.png",
                outputName: "Small Dripleaf (8)",
                outputLink: ""
              },
            ],
          },
          {
            id: "sunflower",
            label: "Sunflower",
            recipes: [
              {
                grid: [
                  "", "../items/mob_drops/images/swarmshocker_charged_powder.png", "",
                  "", "../items/mob_drops/images/plant_matter.png", "",
                  "", "../items/mob_drops/images/plant_matter.png", ""
                ],
                names: [
                  "", "Swarmshocker Charged Powder", "",
                  "", "Plant Matter", "",
                  "", "Plant Matter", ""
                ],
                links: [
                  PATH.list + "","swarmshocker_charged_powder","",
                  PATH.list + "","plant_matter","",
                  PATH.list + "","plant_matter",""
                ],
                output: "../items/vanilla/images/sunflower.png",
                outputName: "Sunflower (2)",
                outputLink: ""
              },
            ],
          },
          {
            id: "tall dry grass",
            label: "Tall Dry Grass",
            recipes: [
              {
                grid: [
                  "../items/vanilla/images/short_grass.png", "../items/vanilla/images/short_grass.png", "../items/vanilla/images/short_grass.png",
                  "../items/vanilla/images/short_grass.png", "../items/mob_drops/images/kuongatari_juice.png", "../items/vanilla/images/short_grass.png",
                  "../items/vanilla/images/short_grass.png", "../items/vanilla/images/short_grass.png", "../items/vanilla/images/short_grass.png"
                ],
                names: [
                  "Short Grass", "Short Grass", "Short Grass",
                  "Short Grass", "Kuongatari Juice", "Short Grass",
                  "Short Grass", "Short Grass", "Short Grass"
                ],
                links: [
                  PATH.list + "","","",
                  PATH.list + "","kuongatari_juice","",
                  PATH.list + "","",""
                ],
                output: "../items/vanilla/images/tall_dry_grass.png",
                outputName: "Tall Dry Grass (8)",
                outputLink: ""
              },
            ],
          },
          {
            id: "vine",
            label: "Vine",
            recipes: [
              {
                grid: [
                  "../items/mob_drops/images/plant_matter.png", "", "../items/mob_drops/images/plant_matter.png",
                  "../items/mob_drops/images/plant_matter.png", "../items/mob_drops/images/spittleshrub_root.png", "../items/mob_drops/images/plant_matter.png",
                  "../items/mob_drops/images/plant_matter.png", "", "../items/mob_drops/images/plant_matter.png"
                ],
                names: [
                  "Plant Matter", "", "Plant Matter",
                  "Plant Matter", "Spittleshrub Root", "Plant Matter",
                  "Plant Matter", "", "Plant Matter"
                ],
                links: [
                  PATH.list + "plant_matter","","plant_matter",
                  PATH.list + "plant_matter","spittleshrub_root","plant_matter",
                  PATH.list + "plant_matter","","plant_matter"
                ],
                output: "../items/vanilla/images/vine.png",
                outputName: "Vine (21)",
                outputLink: ""
              },
            ],
          },
          {
            id: "wheat seeds",
            label: "Wheat Seeds",
            recipes: [
              {
                grid: [
                  "../items/vanilla/images/wheat.png", "", "",
                  "", "", "",
                  "", "", ""
                ],
                names: [
                  "Wheat", "", "",
                  "", "", "",
                  "", "", ""
                ],
                links: [
                  PATH.list + "","","",
                  PATH.list + "","","",
                  PATH.list + "","",""
                ],
                output: "../items/vanilla/images/wheat_seeds.png",
                outputName: "Wheat Seeds",
                outputLink: ""
              },
            ],
          },
        ]
      }
    ]
  },
  {
    id: "tools",
    label: "Tools",
    children: [
      {
        id: "backpack",
        label: "Backpack",
        children: [
          {
            id: "backpack buh",
            label: "Backpack",
            recipes: [
              {
                grid: [
                  "../items/mob_drops/images/makihige_tentacle.png", "../items/mob_drops/images/titanjaw_scale.png", "../items/mob_drops/images/makihige_tentacle.png",
                  "../items/mob_drops/images/titanjaw_scale.png", "../items/mob_drops/images/orb_piercer_face_fragments.png", "../items/mob_drops/images/titanjaw_scale.png",
                  "../items/mob_drops/images/titanjaw_scale.png", "../items/mob_drops/images/titanjaw_scale.png", "../items/mob_drops/images/titanjaw_scale.png"
                ],
                names: [
                  "Makihige Tentacle", "Titanjaw Scale", "Makihige Tentacle",
                  "Titanjaw Scale", "Orb Piercer Face Fragments", "Titanjaw Scale",
                  "Titanjaw Scale", "Titanjaw Scale", "Titanjaw Scale"
                ],
                links: [
                  PATH.list + "makihige_tentacle", PATH.list + "titanjaw_scale", PATH.list + "makihige_tentacle",
                  PATH.list + "titanjaw_scale", PATH.list + "orb_piercer_face_fragments", PATH.list + "titanjaw_scale",
                  PATH.list + "titanjaw_scale", PATH.list + "titanjaw_scale", PATH.list + "titanjaw_scale"
                ],
                output: "../items/custom_items/gray_backpack.png",
                outputName: "Gray Backpack",
                outputLink: ""
              },
            ],
          },
        ]
      },
      {
        id: "ghost seek",
        label: "Ghost Seek",
        children: [
          {
            id: "makeshift ghost seek",
            label: "Makeshift Ghost Seek",
            recipes: [
              {
                grid: [
                  "../items/vanilla/images/gold_ingot.png", "", "../items/vanilla/images/gold_ingot.png",
                  "../items/mob_drops/images/kakatsumuri_glowing_tip.png", "../items/vanilla/images/tinted_glass.png", "../items/mob_drops/images/kakatsumuri_glowing_tip.png",
                  "", "../items/mob_drops/images/hisoishi_shell.png", ""
                ],
                names: [
                  "Gold Ingot", "", "Gold Ingot",
                  "Kakatsumuri Glowing Tip", "Tinted Glass", "Kakatsumuri Glowing Tip",
                  "", "Hisoishi Shell", ""
                ],
                links: [
                  "","","",
                  PATH.list + "kakatsumuri_glowing_tip","", PATH.list + "kakatsumuri_glowing_tip",
                  "", PATH.list + "hisoishi_shell",""
                ],
                output: "../items/custom_items/ghost_seek.png",
                outputName: "Makeshift Ghost Seek",
                outputLink: ""
              },
            ],
          },
          {
            id: "repaired ghost seek",
            label: "Repaired Ghost Seek",
            recipes: [
              {
                grid: [
                  "../items/vanilla/images/diamond.png", "../items/custom_items/hyalos_incipient.png", "../items/vanilla/images/diamond.png",
                  "../items/mob_drops/images/swarmshocker_jelly.png", "../items/custom_items/ghost_seek.png", "../items/mob_drops/images/swarmshocker_jelly.png",
                  "../items/mob_drops/images/swarmshocker_charged_powder.png", "../items/vanilla/images/diamond.png", "../items/mob_drops/images/swarmshocker_charged_powder.png"
                ],
                names: [
                  "Diamond", "Hyalos Incipient", "Diamond",
                  "Swarmhoarder Jelly", "Makeshift Ghost Seek", "Swarmhoarder Jelly",
                  "Swarmshocker Charged Powder", "Diamond", "Swarmshocker Charged Powder"
                ],
                links: [
                  "","","",
                  PATH.list + "swarmhoarder_jelly","", PATH.list + "swarmhoarder_jelly",
                  PATH.list + "swarmshocker_charged_powder","", PATH.list + "swarmshocker_charged_powder"
                ],
                output: "../items/custom_items/ghost_seek.png",
                outputName: "Repaired Ghost Seek",
                outputLink: ""
              },
            ],
          },
          {
            id: "refined ghost seek",
            label: "Refined Ghost Seek",
            recipes: [
              {
                grid: [
                  "../items/mob_drops/images/hisomukuro_rib.png", "../items/mob_drops/images/buroguro_lantern.png", "../items/mob_drops/images/hisomukuro_rib.png",
                  "../items/custom_items/hyalos_incipient.png", "../items/custom_items/ghost_seek.png", "../items/custom_items/hyalos_manifest.png",
                  "../items/mob_drops/images/hisomukuro_rib.png", "../items/mob_drops/images/buroguro_lantern.png", "../items/mob_drops/images/hisomukuro_rib.png"
                ],
                names: [
                  "Hisomukuro Rib", "Buroguro Lantern", "Hisomukuro Rib",
                  "Hyalos Incipient", "Repaired Ghost Seek", "Hyalos Manifest",
                  "Hisomukuro Rib", "Buroguro Lantern", "Hisomukuro Rib"
                ],
                links: [
                  PATH.list + "hisomukuro_rib", PATH.list + "buroguro_lantern", PATH.list + "hisomukuro_rib",
                  "","","",
                  PATH.list + "hisomukuro_rib", PATH.list + "buroguro_lantern", PATH.list + "hisomukuro_rib"
                ],
                output: "../items/custom_items/ghost_seek.png",
                outputName: "Refined Ghost Seek",
                outputLink: ""
              },
            ],
          },
        ]
      },
      {
        id: "night vision goggles",
        label: "Night Vision Goggles",
        children: [
          {
            id: "night vision goggles buh",
            label: "Night Vision Goggles",
            recipes: [
              {
                grid: [
                  "../items/mob_drops/images/buroguro_lantern.png", "../items/mob_drops/images/swarmshocker_jelly.png", "../items/mob_drops/images/buroguro_lantern.png",
                  "../items/vanilla/images/iron_ingot.png", "../items/custom_items/charcoal_sand_ingot.png", "../items/vanilla/images/iron_ingot.png",
                  "../items/vanilla/images/iron_ingot.png", "", "../items/vanilla/images/iron_ingot.png"
                ],
                names: [
                  "Buroguro Lantern", "Swarmhoarder Jelly", "Buroguro Lantern",
                  "Iron Ingot", "Charcoal Sand Ingot", "Iron Ingot",
                  "Iron Ingot", "", "Iron Ingot"
                ],
                links: [
                  PATH.list + "buroguro_lantern", PATH.list + "swarmshoarder_jelly", PATH.list + "buroguro_lantern",
                  "","","",
                  "","",""
                ],
                output: "../items/custom_items/night_vision_goggles.png",
                outputName: "Night Vision Goggle",
                outputLink: ""
              },
              {
                grid: [
                  "../items/mob_drops/images/buroguro_lantern.png", "../items/mob_drops/images/corpse_weeper_eye.png", "../items/mob_drops/images/buroguro_lantern.png",
                  "../items/vanilla/images/iron_ingot.png", "../items/custom_items/charcoal_sand_ingot.png", "../items/vanilla/images/iron_ingot.png",
                  "../items/vanilla/images/iron_ingot.png", "", "../items/vanilla/images/iron_ingot.png"
                ],
                names: [
                  "Buroguro Lantern", "Corpse Weeper Eye", "Buroguro Lantern",
                  "Iron Ingot", "Charcoal Sand Ingot", "Iron Ingot",
                  "Iron Ingot", "", "Iron Ingot"
                ],
                links: [
                  PATH.list + "buroguro_lantern", PATH.list + "corpse_weeper_eye", PATH.list + "buroguro_lantern",
                  "","","",
                  "","",""
                ],
                output: "../items/custom_items/night_vision_goggles.png",
                outputName: "Night Vision Goggle",
                outputLink: ""
              },
            ],
          },
        ]
      },
      {
        id: "scaled umbrella",
        label: "Scaled Umbrella",
        children: [
          {
            id: "scaled umbrella buh",
            label: "Scaled Umbrella",
            recipes: [
              {
                grid: [
                  "../items/custom_items/charcoal_sand_ingot.png", "../items/custom_items/charcoal_sand_ingot.png", "../items/custom_items/charcoal_sand_ingot.png",
                  "../items/custom_items/charcoal_sand_ingot.png", "../items/vanilla/images/shield.png", "../items/custom_items/charcoal_sand_ingot.png",
                  "../items/vanilla/images/iron_ingot.png", "../items/vanilla/images/stick.png", "../items/vanilla/images/iron_ingot.png"
                ],
                names: [
                  "Charcoal Sand Ingot", "Charcoal Sand Ingot", "Charcoal Sand Ingot",
                  "Charcoal Sand Ingot", "Shield", "Charcoal Sand Ingot",
                  "Iron Ingot", "Stick", "Iron Ingot"
                ],
                links: [
                  "","","",
                  "","","",
                  "","",""
                ],
                output: "../items/custom_items/scaled_umbrella.png",
                outputName: "Scaled Umbrella",
                outputLink: ""
              },
            ],
          },
        ]
      },
      {
        id: "spined targe",
        label: "Spined Targe",
        children: [
          {
            id: "spined targe buh",
            label: "Spined Targe",
            recipes: [
              {
                grid: [
                  "../items/custom_items/charcoal_sand_ingot.png", "../items/custom_items/charcoal_sand_ingot.png", "../items/custom_items/charcoal_sand_ingot.png",
                  "../items/custom_items/charcoal_sand_ingot.png", "../items/vanilla/images/shield.png", "../items/custom_items/charcoal_sand_ingot.png",
                  "../items/custom_items/charcoal_sand_ingot.png", "../items/custom_items/charcoal_sand_ingot.png", "../items/custom_items/charcoal_sand_ingot.png"
                ],
                names: [
                  "Charcoal Sand Ingot", "Charcoal Sand Ingot", "Charcoal Sand Ingot",
                  "Charcoal Sand Ingot", "Shield", "Charcoal Sand Ingot",
                  "Charcoal Sand Ingot", "Charcoal Sand Ingot", "Charcoal Sand Ingot"
                ],
                links: [
                  "","","",
                  "","","",
                  "","",""
                ],
                output: "../items/custom_items/spined_targe.png",
                outputName: "Spined Targe",
                outputLink: ""
              },
            ],
          },
        ]
      },
      {
        id: "spyglass",
        label: "Spyglass",
        children: [
          {
            id: "spyglass buh",
            label: "Spyglass",
            recipes: [
              {
                grid: [
                  "", "../items/vanilla/images/button.png", "../items/mob_drops/images/corpse_weeper_eye.png",
                  "", "../items/vanilla/images/iron_ingot.png", "../items/vanilla/images/button.png",
                  "../items/vanilla/images/cyan_terracotta.png", "", ""
                ],
                names: [
                  "", "Button", "Corpse Weeper Eye",
                  "", "Iron Ingot", "Button",
                  "Cyan Terracotta", "", ""
                ],
                links: [
                  "","", PATH.list + "corpse_weeper_eye",
                  "","","",
                  "","",""
                ],
                output: "../items/custom_items/spyglass.png",
                outputName: "Spyglass",
                outputLink: ""
              },
            ],
          },
        ]
      },
      {
        id: "lenses",
        label: "Lenses",
        children: [
          {
            id: "hyalos incipient",
            label: "Hyalos Incipient",
            recipes: [
              {
                grid: [
                  "../items/mob_drops/images/splitjaw_gunk.png", "../items/custom_items/charcoal_sand_ingot.png", "../items/mob_drops/images/splitjaw_gunk.png",
                  "../items/custom_items/charcoal_sand_ingot.png", "../items/vanilla/images/tinted_glass.png", "../items/custom_items/charcoal_sand_ingot.png",
                  "../items/mob_drops/images/splitjaw_gunk.png", "../items/custom_items/charcoal_sand_ingot.png", "../items/mob_drops/images/splitjaw_gunk.png"
                ],
                names: [
                  "Splitjaw Gunk", "Charcoal Sand Ingot", "Splitjaw Gunk",
                  "Charcoal Sand Ingot", "Tinted Glass", "Charcoal Sand Ingot",
                  "Splitjaw Gunk", "Charcoal Sand Ingot", "Splitjaw Gunk"
                ],
                links: [
                  PATH.list + "splitjaw_gunk","", PATH.list + "splitjaw_gunk",
                  "","","",
                  PATH.list + "splitjaw_gunk","", PATH.list + "splitjaw_gunk"
                ],
                output: "../items/custom_items/hyalos_incipient.png",
                outputName: "Hyalos Incipient",
                outputLink: ""
              },
            ],
          },
          {
            id: "hyalos manifest",
            label: "Hyalos Manifest",
            recipes: [
              {
                grid: [
                  "../items/custom_items/charcoal_sand_ingot.png", "../items/custom_items/charcoal_sand_ingot.png", "../items/custom_items/charcoal_sand_ingot.png",
                  "../items/custom_items/charcoal_sand_ingot.png", "../items/custom_items/hyalos_incipient.png", "../items/custom_items/charcoal_sand_ingot.png",
                  "../items/custom_items/charcoal_sand_ingot.png", "../items/custom_items/charcoal_sand_ingot.png", "../items/custom_items/charcoal_sand_ingot.png"
                ],
                names: [
                  "Charcoal Sand Ingot", "Charcoal Sand Ingot", "Charcoal Sand Ingot",
                  "Charcoal Sand Ingot", "Hyalos Incipient", "Charcoal Sand Ingot",
                  "Charcoal Sand Ingot", "Charcoal Sand Ingot", "Charcoal Sand Ingot"
                ],
                links: [
                  "","","",
                  "","","",
                  "","",""
                ],
                output: "../items/custom_items/hyalos_manifest.png",
                outputName: "Hyalos Manifest",
                outputLink: ""
              },
            ],
          },
        ]
      },
      {
        id: "arrows",
        label: "Arrows",
        children: [
          {
            id: "arrow of harming",
            label: "Arrow of Harming",
            recipes: [
              {
                grid: [
                  "../items/vanilla/images/arrow.png", "../items/vanilla/images/arrow.png", "../items/vanilla/images/arrow.png",
                  "../items/vanilla/images/arrow.png", "../items/custom_items/black_flask.png", "../items/vanilla/images/arrow.png",
                  "../items/vanilla/images/arrow.png", "../items/vanilla/images/arrow.png", "../items/vanilla/images/arrow.png"
                ],
                names: [
                  "Arrow", "Arrow", "Arrow",
                  "Arrow", "Black Flask", "Arrow",
                  "Arrow", "Arrow", "Arrow"
                ],
                links: [
                  "","","",
                  "","","",
                  "","",""
                ],
                output: "../items/vanilla/images/tipped_arrow_harming.png",
                outputName: "Arrow of Harming",
                outputLink: ""
              },
            ],
          },
        ],
      },
    ]
  },
  {
    id: "potions",
    label: "Potions",
    children: [
      {
        id: "haste",
        label: "Haste",
        children: [
          {
            id: "haste potion",
            label: "Haste Potion",
            brewings: [
              {
                slots: [
                  { image: "../items/vanilla/images/blaze_powder.png", name: "Blaze Powder", link: "", x: -38, y: 0 },
                  { image: "../items/custom_items/haste_paste.png", name: "Haste Paste", link: "", x: 140, y: 0 },
                  { image: "../items/vanilla/images/water_bottle.png", name: "Water Bottle", link: "", x: 75, y: 97 },
                  { image: "../items/vanilla/images/water_bottle.png", name: "Water Bottle", link: "", x: 205, y: 97 },
                  { image: "../items/vanilla/images/water_bottle.png", name: "Water Bottle", link: "", x: 140, y: 118 }
                ],
              },
            ],
          },
          {
            id: "haste potion extended",
            label: "Haste Potion (extended)",
            brewings: [
              {
                slots: [
                  { image: "../items/vanilla/images/blaze_powder.png", name: "Blaze Powder", link: "", x: -38, y: 0 },
                  { image: "../items/vanilla/images/redstone.png", name: "Redstone", link: "", x: 140, y: 0 },
                  { image: "../items/custom_items/haste_potion.png", name: "Haste Potion", link: "", x: 75, y: 97 },
                  { image: "../items/custom_items/haste_potion.png", name: "Haste Potion", link: "", x: 205, y: 97 },
                  { image: "../items/custom_items/haste_potion.png", name: "Haste Potion", link: "", x: 140, y: 118 }
                ],
              },
            ],
          },
          {
            id: "haste potion upgraded",
            label: "Haste Potion (upgraded)",
            brewings: [
              {
                slots: [
                  { image: "../items/vanilla/images/blaze_powder.png", name: "Blaze Powder", link: "", x: -38, y: 0 },
                  { image: "../items/vanilla/images/glowstone_dust.png", name: "Glowstone Dust", link: "", x: 140, y: 0 },
                  { image: "../items/custom_items/haste_potion.png", name: "Haste Potion", link: "", x: 75, y: 97 },
                  { image: "../items/custom_items/haste_potion.png", name: "Haste Potion", link: "", x: 205, y: 97 },
                  { image: "../items/custom_items/haste_potion.png", name: "Haste Potion", link: "", x: 140, y: 118 }
                ],
              },
            ],
          },
        ],
      },
      {
        id: "potion of fire resistance",
        label: "Potion of Fire Resistance",
        children: [
          {
            id: "potion of fire resistance buh",
            label: "Potion of Fire Resistance",
            brewings: [
              {
                slots: [
                  { image: "../items/vanilla/images/blaze_powder.png", name: "Blaze Powder", link: "", x: -38, y: 0 },
                  { image: "../items/mob_drops/images/virinsipede_antlers.png", name: "Virinsipede Antlers", link: PATH.list + "virinsipede_antlers", x: 140, y: 0 },
                  { image: "../items/vanilla/images/water_bottle.png", name: "Water Bottle", link: "", x: 75, y: 97 },
                  { image: "../items/vanilla/images/water_bottle.png", name: "Water Bottle", link: "", x: 205, y: 97 },
                  { image: "../items/vanilla/images/water_bottle.png", name: "Water Bottle", link: "", x: 140, y: 118 }
                ],
              },
            ],
          },
        ],
      },
      {
        id: "potion of night vision",
        label: "Potion of Night Vision",
        children: [
          {
            id: "potion of night vision buh",
            label: "Potion of Night Vision",
            brewings: [
              {
                slots: [
                  { image: "../items/vanilla/images/blaze_powder.png", name: "Blaze Powder", link: "", x: -38, y: 0 },
                  { image: "../items/mob_drops/images/hashofu_eye.png", name: "Hashofu Eye", link: PATH.list + "hashofu_eye", x: 140, y: 0 },
                  { image: "../items/vanilla/images/water_bottle.png", name: "Water Bottle", link: "", x: 75, y: 97 },
                  { image: "../items/vanilla/images/water_bottle.png", name: "Water Bottle", link: "", x: 205, y: 97 },
                  { image: "../items/vanilla/images/water_bottle.png", name: "Water Bottle", link: "", x: 140, y: 118 }
                ],
              },
              {
                slots: [
                  { image: "../items/vanilla/images/blaze_powder.png", name: "Blaze Powder", link: "", x: -38, y: 0 },
                  { image: "../items/mob_drops/images/kakatsumuri_glowing_tip.png", name: "Kakatsumuri Glowing Tip", link: PATH.list + "kakatsumuri_glowing_tip", x: 140, y: 0 },
                  { image: "../items/vanilla/images/water_bottle.png", name: "Water Bottle", link: "", x: 75, y: 97 },
                  { image: "../items/vanilla/images/water_bottle.png", name: "Water Bottle", link: "", x: 205, y: 97 },
                  { image: "../items/vanilla/images/water_bottle.png", name: "Water Bottle", link: "", x: 140, y: 118 }
                ],
              },
            ],
          },
        ],
      },
      {
        id: "potion of regeneration",
        label: "Potion of Regeneration",
        children: [
          {
            id: "potion of regeneration buh",
            label: "Potion of Regeneration",
            brewings: [
              {
                slots: [
                  { image: "../items/vanilla/images/blaze_powder.png", name: "Blaze Powder", link: "", x: -38, y: 0 },
                  { image: "../items/mob_drops/images/parasitic_watershrooms.png", name: "Parasitic Watershrooms", link: PATH.list + "parasitic_watershrooms", x: 140, y: 0 },
                  { image: "../items/vanilla/images/water_bottle.png", name: "Water Bottle", link: "", x: 75, y: 97 },
                  { image: "../items/vanilla/images/water_bottle.png", name: "Water Bottle", link: "", x: 205, y: 97 },
                  { image: "../items/vanilla/images/water_bottle.png", name: "Water Bottle", link: "", x: 140, y: 118 }
                ],
              },
            ],
          },
        ],
      },
      {
        id: "potion of slowness",
        label: "Potion of Slowness",
        children: [
          {
            id: "potion of slowness buh",
            label: "Potion of Slowness",
            brewings: [
              {
                slots: [
                  { image: "../items/vanilla/images/blaze_powder.png", name: "Blaze Powder", link: "", x: -38, y: 0 },
                  { image: "../items/mob_drops/images/splitjaw_gunk.png", name: "Splitjaw Gunk", link: PATH.list + "splitjaw_gunk", x: 140, y: 0 },
                  { image: "../items/vanilla/images/water_bottle.png", name: "Water Bottle", link: "", x: 75, y: 97 },
                  { image: "../items/vanilla/images/water_bottle.png", name: "Water Bottle", link: "", x: 205, y: 97 },
                  { image: "../items/vanilla/images/water_bottle.png", name: "Water Bottle", link: "", x: 140, y: 118 }
                ],
              },
              {
                slots: [
                  { image: "../items/vanilla/images/blaze_powder.png", name: "Blaze Powder", link: "", x: -38, y: 0 },
                  { image: "../items/mob_drops/images/abyssal_snail_gunk.png", name: "Abyssal Snail Gunk", link: PATH.list + "abyssal_snail_gunk", x: 140, y: 0 },
                  { image: "../items/vanilla/images/water_bottle.png", name: "Water Bottle", link: "", x: 75, y: 97 },
                  { image: "../items/vanilla/images/water_bottle.png", name: "Water Bottle", link: "", x: 205, y: 97 },
                  { image: "../items/vanilla/images/water_bottle.png", name: "Water Bottle", link: "", x: 140, y: 118 }
                ],
              },
            ],
          },
        ],
      },
    ],
  },
];

const selectedDefault = "black_wool";
