export const DATA = [
  {
    name: "Okibo",
    imga: "mob_png/okibo2d.png",
    imgb: "mob_gif/okibo.gif",
    description: "Big, fluffy and very cute creatures, these trusty guys can be great companions. On top of that, their meat is very nutritious and delicious. <br> <br> Found in Layer Orth & 1",
    grade: "harmless",
    details: "Drops:",
    drops: [
      { 
        src: "../items/mob_drops/images/okibo_fur.png",
        href: "/recipe/recipe_menu.html?page=okibo_fur",
        alt: "Okibo Fur",
        chance: "70%",
        amount: "1-2"
      },
      { 
        src: "../items/mob_drops/images/okibo_meat_raw.png",
        href: "/recipe/recipe_menu.html?page=raw_okibo_meat",
        alt: "Raw Okibo Meat",
        chance: "60%",
        amount: "1-2"
      }
     ],
     stats: {
       xp: "20-25",
       hp: 40,
       type: "Passive"
    },
      extra: `
      <div class="tip">
        <img class="tip-avatar" src="../avatar/bigeyes.png" alt="Tip avatar"> 
        <div class="tip-box">
          Cutieeeeeee
        </div>
      </div>

      <div class="tip">
        <img class="tip-avatar" src="../avatar/Cat.png"> 
        <div class="tip-box">
          very nice creature and it is used to get around in orth 
        </div>
      </div>
    `
  },
  {
    /*LAYER 1*/
    name: "Beniguma",
    imga: "mob_png/beniguma2d.png",
    imgb: "mob_gif/beniguma.gif",
    description: "Fox-like creatures, they're both fluffy and irresistibly drawn to berries.<br><br>Found in Layer 1",
    grade: "harmless",
    details: "Drops:",
drops: [
      { 
        src: "../items/mob_drops/images/beniguma_fur.png",
        href: "/recipe/recipe_menu.html?page=beniguma_fur",
        alt: "Beniguma Fur",
        chance: "60%",
        amount: "1-2"
      },
      { 
        src: "../items/vanilla/images/sweet_berries.png",
        href: "../recipe/item_list/sweet_berries/sweet_berries.html",
        alt: "Sweet Berries",
        chance: "60%",
        amount: "1-3"
      }
     ],
     stats: {
       xp: 5,
       hp: 16,
       type: "Neutral"
    },
    extra: `
      <div class="tip">
        <img class="tip-avatar" src="../avatar/question_pigeon.png" alt="Tip avatar"> 
        <div class="tip-box">
          Fluffy Fox :mogicrazy:.
        </div>
      </div>

      <div class="tip">
        <img class="tip-avatar" src="../avatar/Cat.png" alt="Tip avatar">
        <div class="tip-box">
        fluffy fox that is easy to kill and it drops sweet berries with can be used for food 
        </div>
      </div>
    `
  },
  {
    name: "Cyatoria",
    imga: "mob_png/cyatoria2d.png",
    imgb: "mob_gif/cyatoria.gif",
    description: "Terrifying avian creatures, rumored to come from the 7th Layer - Final Maelstrom long ago, they are known to prey upon Hammerbeaks of the earlier layers. <br> <br> Found in Layer 1 & 2",
    grade: "★★★",
    details: "Drops:",
    drops: [
      { 
        src: "../items/mob_drops/images/cyatoria_drumstick_raw.png",
        href: "/recipe/recipe_menu.html?page=raw_cyatoria_drumstick",
        alt: "Raw Cyatoria Drumstick",
        chance: "100%",
        amount: "1-2"
      },
      { 
        src: "../items/mob_drops/images/cyatoria_feather.png",
        href: "/recipe/recipe_menu.html?page=cyatoria_feather",
        alt: "Cyatoria Feather",
        chance: "70%",
        amount: "1-4"
      }
     ],
     stats: {
       xp: "25-45",
       hp: 25,
       type: "Hostile"
    },
    extra: `
      <div class="tip">
        <img class="tip-avatar" src="../avatar/bigeyes.png" alt="Tip avatar"> 
        <div class="tip-box">
          They were a lot bigger.
        </div>
      </div>
    `
  },
  {
    name: "Fuwagi",
    imga: "mob_png/fuwagi2d.png",
    imgb: "mob_gif/fuwagi.gif",
    description: "Harmless bunny-like creatures. People claimed they can jump higher using an elixer made using it's foot.<br> <br> Found in Layer 1 & 2",
    grade: "harmless",
    details: "Drops:",
    drops: [
      { 
        src: "../items/mob_drops/images/fuwagi_meat_raw.png",
        href: "/recipe/recipe_menu.html?page=raw_fuwagi_meat",
        alt: "Raw Fuwagi Meat",
        chance: "60%",
        amount: "1-2"
      },
      { 
        src: "../items/mob_drops/images/fuwagi_foot.png",
        href: "/recipe/recipe_menu.html?page=fuwagi_foot",
        alt: "Fuwagi Foot",
        chance: "30%",
        amount: "1-2"
      },
      { 
        src: "../items/mob_drops/images/fuwagi_hide.png",
        href: "/recipe/recipe_menu.html?page=fuwagi_hide",
        alt: "Fuwagi Hide",
        chance: "70%",
        amount: "1"
      },
     ],
     stats: {
       xp: "3-7",
       hp: 10,
       type: "Passive"
    },
    extra: `
      <div class="tip">
        <img class="tip-avatar" src="../avatar/bigeyes.png" alt="Tip avatar"> 
        <div class="tip-box">
          They taste like Nanachi.
        </div>
      </div>
    `
  },
  {
    name: "Small Hammerbeak",
    imga: "mob_png/hammerbeak2d.png",
    imgb: "mob_gif/hammerbeak.gif",
    description: "An avian sub-species whose habitat extends from the surface down to the 4th Layer of The Abyss. They are quite numerous and commonly seen in the earlier layers of The Abyss.<br> <br> Found in Layer 1 & 2 & 4",
    grade: "★",
    details: "Drops:",
    drops: [
    { 
      src: "../items/mob_drops/images/hammerbeak_feather.png",
      href: "/recipe/recipe_menu.html?page=hammerbeak_feather",
      alt: "Hammerbeak Feather",
      chance: "50%",
      amount: "1-2"
    },
    { 
      src: "../items/mob_drops/images/hammerbeak_beak.png",
      href: "/recipe/recipe_menu.html?page=hammerbeak_beak",
      alt: "Hammerbeak Beak",
      chance: "60%",
      amount: "1"
    },
    { 
      src: "../items/mob_drops/images/hammerbeak_wing_raw.png",
      href: "/recipe/recipe_menu.html?page=raw_hammerbeak_wing",
      alt: "Raw Hammerbeak Wing",
      chance: "100%",
      amount: "1-2"
    },
    ],
    stats: {
     xp: "25-45",
     hp: 18,
     type: "Hostile"
    },
    extra: `
      <div class="tip">
        <img class="tip-avatar" src="../avatar/bigeyes.png" alt="Tip avatar"> 
        <div class="tip-box">
          Bird missiles alert alert!!!
        </div>
      </div>
    `
  },
  {
    name: "Giant Hammerbeak",
    imga: "mob_png/hammerbeak2d.png",
    imgaScale: 1.5,
    imgb: "mob_gif/hammerbeak.gif",
    imgbScale: 1.6,
    description: "Another variant of hammerbeak, their beaks are much larger and may cause confusion to the delver got hit, commonly found in deeper layers.<br> <br> Found in Layer 1 & 2 & 4",
    grade: "★★★",
    details: "Drops:",
      drops: [
      { 
        src: "../items/mob_drops/images/hammerbeak_feather.png",
        href: "/recipe/recipe_menu.html?page=hammerbeak_feather",
        alt: "Hammerbeak Feather",
        chance: "70%",
        amount: "1-3"
      },
      { 
        src: "../items/mob_drops/images/hammerbeak_beak.png",
        href: "/recipe/recipe_menu.html?page=hammerbeak_beak",
        alt: "Hammerbeak Beak",
        chance: "60%",
        amount: "1"
      },
      { 
        src: "../items/mob_drops/images/hammerbeak_wing_raw.png",
        href: "/recipe/recipe_menu.html?page=raw_hammerbeak_wing",
        alt: "Raw Hammerbeak Wing",
        chance: "100%",
        amount: "1-3"
      },
      { 
        src: "../items/mob_drops/images/hammerbeak_egg.png",
        href: "/recipe/recipe_menu.html?page=hammerbeak_egg",
        alt: "Hammerbeak Egg",
        chance: "50%",
        amount: "1-2"
      },
     ],
     stats: {
       xp: "25-45",
       hp: 40,
       type: "Hostile"
    },
    extra: `
      <div class="tip">
        <img class="tip-avatar" src="../avatar/bigeyes.png" alt="Tip avatar"> 
        <div class="tip-box">
          On the scale of 1 to 10 based on their annoyance, they can go /kms themselves.
        </div>
      </div>
    `
  },
  {
    name: "Man-toyer",
    imga: "mob_png/mantoyer2d.png",
    imgb: "mob_gif/mantoyer.gif",
    description: "Weasel-like little menaces, their head, backs, and hips are covered with spikes. They have fluffy tails as thick and long as their bodies, which they often use as a distraction when attacked to prevent damage to their bodies.<br> <br> Found in Layer 1",
    grade: "★",
    details: "Drops:",
        drops: [
    { 
      src: "../items/vanilla/images/sweet_berries.png",
      href: "../recipe/item_list/sweet_berries/sweet_berries.html",
      alt: "Sweet Berries",
      chance: "60%",
      amount: "1-3"
    },
    { 
      src: "../items/mob_drops/images/mantoyer_fur.png",
      href: "/recipe/recipe_menu.html?page=man-toyer_fur",
      alt: "Man-toyer Fur",
      chance: "60%",
      amount: "1-2"
    },
    { 
      src: "../items/mob_drops/images/mantoyer_horns.png",
      href: "/recipe/recipe_menu.html?page=man-toyer_horns",
      alt: "Man-toyer Horn",
      chance: "60%",
      amount: "1-2"
    },
    ],
    stats: {
     xp: "5-15",
     hp: 15,
     type: "Hostile"
    },
    extra: `
      <div class="tip">
        <img class="tip-avatar" src="../avatar/bigeyes.png" alt="Tip avatar"> 
        <div class="tip-box">
          They love to play with your dih. 
        </div>
      </div>
    `
  },
  {
    name: "Okibo",
    imga: "mob_png/okibo2d.png",
    imgb: "mob_gif/okibo.gif",
    description: "Big, fluffy and very cute creatures, these trusty guys can be great companions. On top of that, their meat is very nutritious and delicious. <br> <br> Found in Layer Orth & 1",
    grade: "harmless",
    details: "Drops:",
    drops: [
      { 
        src: "../items/mob_drops/images/okibo_fur.png",
        href: "/recipe/recipe_menu.html?page=okibo_fur",
        alt: "Okibo Fur",
        chance: "70%",
        amount: "1-2"
      },
      { 
        src: "../items/mob_drops/images/okibo_meat_raw.png",
        href: "/recipe/recipe_menu.html?page=raw_okibo_meat",
        alt: "Raw Okibo Meat",
        chance: "60%",
        amount: "1-2"
      }
     ],
     stats: {
       xp: "20-25",
       hp: 40,
       type: "Passive"
    },
      extra: `
      <div class="tip">
        <img class="tip-avatar" src="../avatar/bigeyes.png" alt="Tip avatar"> 
        <div class="tip-box">
          Cutieeeeeee
        </div>
      </div>
    `
  },
  {
    name: "Silkfang",
    imga: "mob_png/silkfang2d.png",
    imgb: "mob_gif/silkfang.gif",
    description: "Large insects occasionally seen within the first layer of the Abyss. They can spit and sting, causing a paralysis effect. Extremely territorial, they rarely leave their territory, so avoiding them is easy if you are cautious.<br> <br> Found in Layer 1",
    grade: "★★",
    details: "Drops:",
    drops: [
    { 
      src: "../items/mob_drops/images/silkfang_silk.png",
      href: "/recipe/recipe_menu.html?page=silkfang_silk",
      alt: "Silkfang Silk",
      chance: "60%",
      amount: "1-2"
    },
    { 
      src: "../items/mob_drops/images/silkfang_eye.png",
      href: "/recipe/recipe_menu.html?page=silkfang_eye",
      alt: "Silkfang Eye",
      chance: "60%",
      amount: "1-2"
    },
    { 
      src: "../items/mob_drops/images/bundle_of_silkfang_silk.png",
      href: "/recipe/recipe_menu.html?page=bundle_of_silkfang_silk",
      alt: "Bundle of Silkfang Silk",
      chance: "20%",
      amount: "1"
    },
    ],
    stats: {
     xp: "10-15",
     hp: 22,
     type: "Hostile"
    },
    extra: `
      <div class="tip">
        <img class="tip-avatar" src="../avatar/bigeyes.png" alt="Tip avatar"> 
        <div class="tip-box">
          Ugly spoodo thingy that shoot out sticky string from it's butthole.
        </div>
      </div>
    `
  },
  {
    name: "Spiralsquid",
    imga: "mob_png/spiralsquid2d.png",
    imgb: "mob_gif/spiralsquid.gif",
    description: " The Spiralsquid is a squid with a unique shape. Their meat is safe to eat. <br> <br> Found in Layer 1",
    grade: "harmless",
    details: "Drops:",
    drops: [
    { 
      src: "../items/mob_drops/images/spiralsquid_raw.png",
      href: "/recipe/recipe_menu.html?page=raw_spiralsquid",
      alt: "Raw Spiralsquid",
      chance: "60%",
      amount: "1-2"
    },
    { 
      src: "../items/vanilla/images/ink_sac.png",
      href: "../recipe/item_list/ink_sac/ink_sac.html",
      alt: "Ink Sac",
      chance: "100%",
      amount: "1-2"
    },
    ],
    stats: {
     xp: "5-10",
     hp: 8,
     type: "Passive"
    },
    extra: `
      <div class="tip">
        <img class="tip-avatar" src="../avatar/bigeyes.png" alt="Tip avatar"> 
        <div class="tip-box">
          Don't use them for the sucky sucky. 
        </div>
      </div>
    `
  },
  {
    name: "Spittleshrub",
    imga: "mob_png/spittleshrub2d.png",
    imgb: "mob_gif/spittleshrub.gif",
    description: " Spittleshrub is a creature disguise as a bush. Their bite really hurt but the berries on their head are ediable <br> <br> Found in Layer 1 & 2 & 4",
    grade: "★★",
    details: "Drops:",
    drops: [
    { 
      src: "../items/mob_drops/images/plant_matter.png",
      href: "/recipe/recipe_menu.html?page=plant_matter",
      alt: "Plant Matter",
      chance: "60%",
      amount: "1-3"
    },
    { 
      src: "../items/mob_drops/images/spittleshrub_root.png",
      href: "/recipe/recipe_menu.html?page=spittleshrub_root",
      alt: "Spittleshrub Root",
      chance: "20%",
      amount: "1"
    },
    { 
      src: "../items/vanilla/images/glow_berries.png",
      href: "../recipe/item_list/glow_berries/glow_berries.html",
      alt: "Glow Berries",
      chance: "60%",
      amount: "1-2"
    },
    {
      src: "../items/vanilla/images/oak_sapling.png",
      href: "../recipe/item_list/oak_sapling/oak_sapling.html",
      alt: "Oak Sapling",
      chance: "3.5%",
      amount: "1"
    },
    {
      src: "../items/vanilla/images/spruce_sapling.png",
      href: "../recipe/item_list/spruce_sapling/spruce_sapling.html",
      alt: "Spruce Sapling",
      chance: "3.5%",
      amount: "1"
    },
    {
      src: "../items/vanilla/images/jungle_sapling.png",
      href: "../recipe/item_list/jungle_sapling/jungle_sapling.html",
      alt: "Jungle Sapling",
      chance: "3.5%",
      amount: "1"
    },
    {
      src: "../items/vanilla/images/acacia_sapling.png",
      href: "../recipe/item_list/acacia_sapling/acacia_sapling.html",
      alt: "Acacia Sapling",
      chance: "3.5%",
      amount: "1"
    },
    {
      src: "../items/vanilla/images/dark_oak_sapling.png",
      href: "../recipe/item_list/dark_oak_sapling/dark_oak_sapling.html",
      alt: "Dark Oak Sapling",
      chance: "3.5%",
      amount: "1"
    },
    ],
    stats: {
     xp: "20-35",
     hp: 20,
     type: "Hostile"
    },
    extra: `
      <div class="tip">
        <img class="tip-avatar" src="../avatar/bigeyes.png" alt="Tip avatar"> 
        <div class="tip-box">
           You can use your tridents and poke them through the ground.
        </div>
      </div>
    `
  },
  {
    name: "Splitjaw",
    imga: "mob_png/splitjaw2d.png",
    imgb: "mob_gif/splitjaw.gif",
    description: " The Crimson Splitjaw is a giant scarlet red reptile with a serpentine body that primarily lives in the steep cliffs of the 3rd Layer of The Abyss. <br> <br> Found in Layer 1 & 2 & 3",
    grade: "★★★★★",
    details: "Drops:",
    drops: [
    { 
      src: "../items/mob_drops/images/splitjaw_gunk.png",
      href: "/recipe/recipe_menu.html?page=splitjaw_gunk",
      alt: "Splitjaw Gunk",
      chance: "70%",
      amount: "2"
    },
    { 
      src: "../items/mob_drops/images/splitjaw_scales.png",
      href: "/recipe/recipe_menu.html?page=splitjaw_scales",
      alt: "Splitjaw Scales",
      chance: "70%",
      amount: "1-3"
    },
    { 
      src: "../items/vanilla/images/diamond.png",
      href: "../recipe/item_list/diamond/diamond.html",
      alt: "Diamond",
      chance: "10%",
      amount: "1"
    },
    { 
      src: "../items/vanilla/images/emerald.png",
      href: "../recipe/item_list/emerald/emerald.html",
      alt: "Emerald",
      chance: "10%",
      amount: "1"
    },
    { 
      src: "../items/vanilla/images/gold_ingot.png",
      href: "../recipe/item_list/gold_ingot/gold_ingot.html",
      alt: "Gold Ingot",
      chance: "15%",
      amount: "1"
    },
    ],
    stats: {
     xp: "70-115",
     hp: 90,
     type: "Hostile"
    },
    extra: `
      <div class="tip">
        <img class="tip-avatar" src="../avatar/bigeyes.png" alt="Tip avatar"> 
        <div class="tip-box">
          Just hide in a hole, they're not that smart. 
        </div>
      </div>
    `
  },
  {
    name: "Vinebinder",
    imga: "mob_png/vinebinder2d.png",
    imgb: "mob_gif/vinebinder.gif",
    description: " The Vinebinder is carnivorous plant, absorb nearby small creatures to keep them alive. Their fang have poisonous so make sure to avoid them<br> <br> Found in Layer 1 & 2",
    grade: "★",
    details: "Drops:",
    drops: [
    { 
      src: "../items/mob_drops/images/plant_matter.png",
      href: "/recipe/recipe_menu.html?page=plant_matter",
      alt: "Plant Matter",
      chance: "60%",
      amount: "1-2"
    },
    {
      src: "../items/vanilla/images/oak_sapling.png",
      href: "../recipe/item_list/oak_sapling/oak_sapling.html",
      alt: "Oak Sapling",
      chance: "3.5%",
      amount: "1"
    },
    {
      src: "../items/vanilla/images/spruce_sapling.png",
      href: "../recipe/item_list/spruce_sapling/spruce_sapling.html",
      alt: "Spruce Sapling",
      chance: "3.5%",
      amount: "1"
    },
    {
      src: "../items/vanilla/images/jungle_sapling.png",
      href: "../recipe/item_list/jungle_sapling/jungle_sapling.html",
      alt: "Jungle Sapling",
      chance: "3.5%",
      amount: "1"
    },
    {
      src: "../items/vanilla/images/acacia_sapling.png",
      href: "../recipe/item_list/acacia_sapling/acacia_sapling.html",
      alt: "Acacia Sapling",
      chance: "3.5%",
      amount: "1"
    },
    {
      src: "../items/vanilla/images/dark_oak_sapling.png",
      href: "../recipe/item_list/dark_oak_sapling/dark_oak_sapling.html",
      alt: "Dark Oak Sapling",
      chance: "3.5%",
      amount: "1"
    },
    ],
    stats: {
     xp: "10-15",
     hp: 20,
     type: "Hostile"
    },
    extra: "Tip1"
  },
  {
    name: "Vineblaster",
    imga: "mob_png/vineblaster2d.png",
    imgb: "mob_gif/vineblaster.gif",
    description: " The Vineblaster is a plant that shoots out poisonous spores.<br> <br> Found in Layer 1 & 2",
    grade: "★★",
    details: "Drops:",
    drops: [
    { 
      src: "../items/mob_drops/images/plant_matter.png",
      href: "/recipe/recipe_menu.html?page=plant_matter",
      alt: "Plant Matter",
      chance: "60%",
      amount: "1-2"
    },
    {
      src: "../items/vanilla/images/oak_sapling.png",
      href: "../recipe/item_list/oak_sapling/oak_sapling.html",
      alt: "Oak Sapling",
      chance: "3.5%",
      amount: "1"
    },
    {
      src: "../items/vanilla/images/spruce_sapling.png",
      href: "../recipe/item_list/spruce_sapling/spruce_sapling.html",
      alt: "Spruce Sapling",
      chance: "3.5%",
      amount: "1"
    },
    {
      src: "../items/vanilla/images/jungle_sapling.png",
      href: "../recipe/item_list/jungle_sapling/jungle_sapling.html",
      alt: "Jungle Sapling",
      chance: "3.5%",
      amount: "1"
    },
    {
      src: "../items/vanilla/images/acacia_sapling.png",
      href: "../recipe/item_list/acacia_sapling/acacia_sapling.html",
      alt: "Acacia Sapling",
      chance: "3.5%",
      amount: "1"
    },
    {
      src: "../items/vanilla/images/dark_oak_sapling.png",
      href: "../recipe/item_list/dark_oak_sapling/dark_oak_sapling.html",
      alt: "Dark Oak Sapling",
      chance: "3.5%",
      amount: "1"
    },
    ],
    stats: {
     xp: "10-15",
     hp: 16,
     type: "Hostile"
    },
    extra: `
      <div class="tip">
        <img class="tip-avatar" src="../avatar/bigeyes.png" alt="Tip avatar"> 
        <div class="tip-box">
          Plants vs zombies.
        </div>
      </div>
    `
  },
  {
    name: "Vinepoofer",
    imga: "mob_png/vinepoofer2d.png",
    imgb: "mob_gif/vinepoofer.gif",
    description: " The Vinepoofer is a plant that explode, spread out their poisonous spore.<br> <br> Found in Layer 1 & 2",
    grade: "★★",
    details: "Drops:",
    drops: [
    { 
      src: "../items/mob_drops/images/plant_matter.png",
      href: "/recipe/recipe_menu.html?page=plant_matter",
      alt: "Plant Matter",
      chance: "60%",
      amount: "1-2"
    },
    {
      src: "../items/vanilla/images/oak_sapling.png",
      href: "../recipe/item_list/oak_sapling/oak_sapling.html",
      alt: "Oak Sapling",
      chance: "3.5%",
      amount: "1"
    },
    {
      src: "../items/vanilla/images/spruce_sapling.png",
      href: "../recipe/item_list/spruce_sapling/spruce_sapling.html",
      alt: "Spruce Sapling",
      chance: "3.5%",
      amount: "1"
    },
    {
      src: "../items/vanilla/images/jungle_sapling.png",
      href: "../recipe/item_list/jungle_sapling/jungle_sapling.html",
      alt: "Jungle Sapling",
      chance: "3.5%",
      amount: "1"
    },
    {
      src: "../items/vanilla/images/acacia_sapling.png",
      href: "../recipe/item_list/acacia_sapling/acacia_sapling.html",
      alt: "Acacia Sapling",
      chance: "3.5%",
      amount: "1"
    },
    {
      src: "../items/vanilla/images/dark_oak_sapling.png",
      href: "../recipe/item_list/dark_oak_sapling/dark_oak_sapling.html",
      alt: "Dark Oak Sapling",
      chance: "3.5%",
      amount: "1"
    },
    ],
    stats: {
     xp: "10-15",
     hp: 20,
     type: "Hostile"
    },
    extra: `
      <div class="tip">
        <img class="tip-avatar" src="../avatar/bigeyes.png" alt="Tip avatar"> 
        <div class="tip-box">
          Vineboom!
        </div>
      </div>
    `
  },
  {
    name: "Woodcrier",
    imga: "mob_png/woodcrier2d.png",
    imgb: "mob_gif/woodcrier.gif",
    description: " The Woodcrier is a deer-like creature. It quite hostile, use their speed and resin antler to attack. Even though their fur is really soft and can be use for decoration <br> <br> Found in Layer 1 & 2",
    grade: "★★★",
    details: "Drops:",
    drops: [
    { 
      src: "../items/mob_drops/images/woodcrier_horn.png",
      href: "/recipe/recipe_menu.html?page=woodcrier_horn",
      alt: "Woodcrier Horn",
      chance: "60%",
      amount: "1-2"
    },
    { 
      src: "../items/vanilla/images/brown_wool.png",
      href: "../recipe/item_list/brown_wool/brown_wool.html",
      alt: "Brown Wool",
      chance: "60%",
      amount: "1-3"
    },
    ],
    stats: {
     xp: "10-30",
     hp: 30,
     type: "Hostile"
    },
    extra: `
      <div class="tip">
        <img class="tip-avatar" src="../avatar/bigeyes.png" alt="Tip avatar"> 
        <div class="tip-box">
          Sneaky sneaky.
        </div>
      </div>
    `
  },
  /*LAYER 2*/
  {
    name: "Billabonk",
    imga: "mob_png/billabonk2d.png",
    imgb: "mob_gif/billabonk.gif",
    description: " The Billabonk is a small, frog-like creature lives in rainforest in the edge of l2 . <br> <br> Found in Layer 2",
    grade: "harmless",
    details: "Drops:",
    drops: [
    {
      src: "../items/mob_drops/images/billabonk_leg_raw.png",
      href: "/recipe/recipe_menu.html?page=raw_billabonk_leg",
      alt: "Raw Billabonk Leg",
      chance: "60%",
      amount: "1-2"
    },
    {
      src: "../items/vanilla/images/lily_pad.png",
      href: "../recipe/item_list/lily_pad/lily_pad.html",
      alt: "Lily Pad",
      chance: "40%",
      amount: "1-2"
    },
    ],
    stats: {
     xp: "1-10",
     hp: 20,
    },
    extra: `
      <div class="tip">
        <img class="tip-avatar" src="../avatar/bigeyes.png" alt="Tip avatar"> 
        <div class="tip-box">
          Don't let a French see them.
        </div>
      </div>
    `
  },
  {
    name: "Chimokami",
    imga: "mob_png/chimokami2d.png",
    imgb: "mob_gif/chimokami.gif",
    description: " The Chimokami is a small, fox-like creature that lives in the 2rd Layer of The Abyss. It have 3 tails which is really soft. Their fang is quite sharp so be careful. <br> <br> Found in Layer 2",
    grade: "harmless",
    details: "Drops:",
    drops: [
    {
      src: "../items/mob_drops/images/chimokami_tail.png",
      href: "/recipe/recipe_menu.html?page=chimokami_tail",
      alt: "Chimokami Tail",
      chance: "80%",
      amount: "1-3"
    },
    {
      src: "../items/mob_drops/images/chimokami_fang.png",
      href: "/recipe/recipe_menu.html?page=chimokami_fang",
      alt: "Chimokami Fang",
      chance: "70%",
      amount: "1-2"
    },
    ],
    stats: {
     xp: "10-25",
     hp: 30,
    },
    extra: `
      <div class="tip">
        <img class="tip-avatar" src="../avatar/bigeyes.png" alt="Tip avatar"> 
        <div class="tip-box">
          Literally a Kitsune.
        </div>
      </div>
    `
  },
  {
    name: "Corpse-Weeper",
    imga: "mob_png/corpse_weeper2d.png",
    imgb: "mob_gif/corpse_weeper.gif",
    description: " The Corpse-Weeper is a avian creature that able to mimic the victims voice to lure more prey to their terrority. Their eyes have an unique shape with some magic ability <br> <br> Found in Layer 2",
    grade: "★★",
    details: "Drops:",
    drops: [
    {
      src: "../items/mob_drops/images/corpse_weeper_meat_raw.png",
      href: "/recipe/recipe_menu.html?page=raw_corpse-weeper_meat",
      alt: "Raw Corpse Weeper Meat",
      chance: "100%",
      amount: "1-2"
    },
    {
      src: "../items/mob_drops/images/corpse_weeper_eye.png",
      href: "/recipe/recipe_menu.html?page=corpse-weeper_eye",
      alt: "Corpse Weeper Eye",
      chance: "30%",
      amount: "2"
    },
    {
      src: "../items/mob_drops/images/corpse_weeper_feather.png",
      href: "/recipe/recipe_menu.html?page=corpse-weeper_feather",
      alt: "Corpse Weeper Feather",
      chance: "90%",
      amount: "1-3"
    },
    ],
    stats: {
     xp: "50-90",
     hp: 35,
    },
    extra: `
      <div class="tip">
        <img class="tip-avatar" src="../avatar/bigeyes.png" alt="Tip avatar"> 
        <div class="tip-box">
          Creepy parrots.
        </div>
      </div>
    `
  },
  {
    name: "Cyatoria",
    imga: "mob_png/cyatoria2d.png",
    imgb: "mob_gif/cyatoria.gif",
    description: "A giant bird with blue wings, look a lot like Sawatari. It is said to live in the deepest parts of the Abyss, and can cross through the ascension strains that cause death. <br> <br> Found in Layer 1 & 2",
    grade: "★★",
    details: "Drops:",
    drops: [
    {
      src: "../items/mob_drops/images/cyatoria_drumstick_raw.png",
      href: "/recipe/recipe_menu.html?page=raw_cyatoria_drumstick",
      alt: "Raw Cyatoria Drumstick",
      chance: "100%",
      amount: "1-2"
    },
    {
      src: "../items/mob_drops/images/cyatoria_feather.png",
      href: "/recipe/recipe_menu.html?page=cyatoria_feather",
      alt: "Cyatoria Feather",
      chance: "70%",
      amount: "1-4"
    },
    ],
    stats: {
     xp: "25-45",
     hp: 25,
    },
    extra: "Tip1"
  },
  {
    name: "Dosetori",
    imga: "mob_png/dosetori2d.png",
    imgb: "mob_gif/dosetori.gif",
    description: " The Dosetori is a avian creature that live in grass area in Layer 2 and 3. These bad guy have big and sturdy wings. There is a myth that delver use their wings to make leather-like armor. <br> <br> Found in Layer 2",
    grade: "★★",
    details: "Drops:",
    drops: [
    {
      src: "../items/mob_drops/images/dosetori_meat_raw.png",
      href: "/recipe/recipe_menu.html?page=raw_dosetori_meat",
      alt: "Raw Dosetori Meat",
      chance: "100%",
      amount: "1-2"
    },
    {
      src: "../items/mob_drops/images/dosetori_wing.png",
      href: "/recipe/recipe_menu.html?page=dosetori_wing",
      alt: "Dosetori Wing",
      chance: "70%",
      amount: "1-3"
    },
    {
      src: "../items/mob_drops/images/dosetori_bone.png",
      href: "/recipe/recipe_menu.html?page=dosetori_bone",
      alt: "Dosetori Bone",
      chance: "80%",
      amount: "1-3"
    },
    ],
    stats: {
     xp: "20-40",
     hp: 30,
    },
    extra: `
      <div class="tip">
        <img class="tip-avatar" src="../avatar/bigeyes.png" alt="Tip avatar"> 
        <div class="tip-box">
          Abyssal All Might.
        </div>
      </div>
    `
  },
  {
    name: "Fuwagi",
    imga: "mob_png/fuwagi2d.png",
    imgb: "mob_gif/fuwagi.gif",
    description: "A harmless bunny. There is a myth that their foot can make an elixir grants the user the ability to leap much higher<br> <br> Found in Layer 1 & 2",
    grade: "harmless",
    details: "Drops:",
    drops: [
    {
      src: "../items/mob_drops/images/fuwagi_meat_raw.png",
      href: "/recipe/recipe_menu.html?page=raw_fuwagi_meat",
      alt: "Raw Fuwagi Meat",
      chance: "60%",
      amount: "1-2"
    },
    {
      src: "../items/mob_drops/images/fuwagi_foot.png",
      href: "/recipe/recipe_menu.html?page=fuwagi_foot",
      alt: "Fuwagi Foot",
      chance: "30%",
      amount: "1-2"
    },
    {
      src: "../items/mob_drops/images/fuwagi_hide.png",
      href: "/recipe/recipe_menu.html?page=fuwagi_hide",
      alt: "Fuwagi Hide",
      chance: "70%",
      amount: "1"
    },
    ],
    stats: {
     xp: "3-7",
     hp: 10,
    },
    extra: "Tip1"
  },
  {
    name: "Small Hammerbeak",
    imga: "mob_png/hammerbeak2d.png",
    imgb: "mob_gif/hammerbeak.gif",
    description: "An avian species whose habitat extends from the surface down to the 4th Layer of The Abyss.[1] They are quite numerous and commonly seen in the most shallow areas of The Abyss<br> <br> Found in Layer 1 & 2 & 4",
    grade: "★",
    details: "Drops:",
    drops: [
    {
      src: "../items/mob_drops/images/hammerbeak_wing_raw.png",
      href: "/recipe/recipe_menu.html?page=raw_hammerbeak_wing",
      alt: "Raw Hammerbeak Wing",
      chance: "100%",
      amount: "1-2"
    },
    {
      src: "../items/mob_drops/images/hammerbeak_beak.png",
      href: "/recipe/recipe_menu.html?page=hammerbeak_beak",
      alt: "Hammerbeak Beak",
      chance: "60%",
      amount: "1"
    },
    {
      src: "../items/mob_drops/images/hammerbeak_feather.png",
      href: "/recipe/recipe_menu.html?page=hammerbeak_feather",
      alt: "Hammerbeak Feather",
      chance: "50%",
      amount: "1-2"
    },
    ],
    stats: {
     xp: "25-45",
     hp: 18,
    },
    extra: "Tip1"
  },
  {
    name: "Giant Hammerbeak",
    imga: "mob_png/hammerbeak2d.png",
    imgaScale: 1.5,
    imgb: "mob_gif/hammerbeak.gif",
    imgbScale: 1.6,
    description: "Adult variant of hammerbeak, it's beak is much larger and may cause confusion to the delver got hit<br> <br> Found in Layer 1 & 2 & 4",
    grade: "★★",
    details: "Drops:",
    drops: [
    {
      src: "../items/mob_drops/images/hammerbeak_wing_raw.png",
      href: "/recipe/recipe_menu.html?page=raw_hammerbeak_wing",
      alt: "Raw Hammerbeak Wing",
      chance: "100%",
      amount: "1-3"
    },
    {
      src: "../items/mob_drops/images/hammerbeak_beak.png",
      href: "/recipe/recipe_menu.html?page=hammerbeak_beak",
      alt: "Hammerbeak Beak",
      chance: "60%",
      amount: "1"
    },
    {
      src: "../items/mob_drops/images/hammerbeak_feather.png",
      href: "/recipe/recipe_menu.html?page=hammerbeak_feather",
      alt: "Hammerbeak Feather",
      chance: "70%",
      amount: "1-3"
    },
    {
      src: "../items/mob_drops/images/hammerbeak_egg.png",
      href: "/recipe/recipe_menu.html?page=hammerbeak_egg",
      alt: "Hammerbeak Egg",
      chance: "50%",
      amount: "1-2"
    },
    ],
    stats: {
     xp: "25-45",
     hp: 40,
    },
    extra: "Tip1"
  },
  {
    name: "Ikenosuke",
    imga: "mob_png/ikenosuke2d.png",
    imgb: "mob_gif/ikenosuke.gif",
    description: " The Ikenosuke is fish that can be found in small lake in l2. Instead of scales, it has tough, white skin. The taste of its meat has a slight, sweet flavor.<br> <br> Found in Layer 2 & 3",
    grade: "harmless",
    details: "Drops:",
    drops: [
    {
      src: "../items/mob_drops/images/ikenosuke_raw.png",
      href: "/recipe/recipe_menu.html?page=raw_ikenosuke",
      alt: "Raw Ikenosuke",
      chance: "60%",
      amount: "1-2"
    },
    {
      src: "../items/vanilla/images/prismarine_crystals.png",
      href: "../recipe/item_list/prismarine_crystals/prismarine_crystals.html",
      alt: "Prismarine Crystals",
      chance: "90%",
      amount: "1-8"
    },
    ],
    stats: {
     xp: "5-15",
     hp: 12,
    },
    extra: `
      <div class="tip">
        <img class="tip-avatar" src="../avatar/bigeyes.png" alt="Tip avatar"> 
        <div class="tip-box">
          Fih
        </div>
      </div>
    `
  },
  {
    name: "Ottobas",
    imga: "mob_png/ottobas2d.png",
    imgb: "mob_gif/ottobas.gif",
    description: " The Ottobas are large amphibious animals that live deep within the bottom of the 2nd Layer of The Abyss, in the area around the borders of the Inverted Forest.[1] In their homeland, they were known as &quot;the king of jungle rivers&quot;.<br> <br> Found in Layer 2",
    grade: "★★★★",
    details: "Drops:",
    drops: [
    {
      src: "../items/mob_drops/images/ottobas_meat_raw.png",
      href: "/recipe/recipe_menu.html?page=raw_ottobas_meat",
      alt: "Raw Ottobas Meat",
      chance: "100%",
      amount: "4-15"
    },
    ],
    stats: {
     xp: "55-90",
     hp: 90,
    },
    extra: `
      <div class="tip">
        <img class="tip-avatar" src="../avatar/bigeyes.png" alt="Tip avatar"> 
        <div class="tip-box">
          They're delicious.
        </div>
      </div>
    `
  },
  {
    name: "Rohana",
    imga: "mob_png/rohana2d.png",
    imgb: "mob_gif/rohana.gif",
    description: " The Rohana is a bug live in clean water area in Layer 2 and 4. These guys powder and tail can be use to make an elixir which is increase the user strength<br> <br> Found in Layer 2",
    grade: "harmless",
    details: "Drops:",
    drops: [
    {
      src: "../items/mob_drops/images/rohana_powder.png",
      href: "/recipe/recipe_menu.html?page=rohana_powder",
      alt: "Rohana Powder",
      chance: "80%",
      amount: "2"
    },
    {
      src: "../items/mob_drops/images/rohana_tail.png",
      href: "/recipe/recipe_menu.html?page=rohana_tail",
      alt: "Rohana Tail",
      chance: "40%",
      amount: "2"
    },
    ],
    stats: {
     xp: "12-18",
     hp: 10,
    },
    extra: "Tip1"
  },
  {
    name: "Silkfang",
    imga: "mob_png/silkfang2d.png",
    imgb: "mob_gif/silkfang.gif",
    description: " The Silkfang is a large insect that is occasionally seen within the 1st Layer of The Abyss. <br> <br> Found in Layer 1",
    grade: "★★",
    details: "Drops:",
    drops: [
    {
      src: "../items/mob_drops/images/silkfang_eye.png",
      href: "/recipe/recipe_menu.html?page=silkfang_eye",
      alt: "Silkfang Eye",
      chance: "60%",
      amount: "1-2"
    },
    {
      src: "../items/mob_drops/images/silkfang_silk.png",
      href: "/recipe/recipe_menu.html?page=silkfang_silk",
      alt: "Silkfang Silk",
      chance: "60%",
      amount: "1-2"
    },
    {
      src: "../items/mob_drops/images/bundle_of_silkfang_silk.png",
      href: "/recipe/recipe_menu.html?page=bundle_of_silkfang_silk",
      alt: "Bundle Of Silkfang Silk",
      chance: "20%",
      amount: "1"
    },
    ],
    stats: {
     xp: "10-15",
     hp: 22,
    },
    extra: "Tip1"
  },
  {
    name: "Spittleshrub",
    imga: "mob_png/spittleshrub2d.png",
    imgb: "mob_gif/spittleshrub.gif",
    description: " Spittleshrub is a creature disguise as a bush. Their bite really hurt but the berries on their head are ediable <br> <br> Found in Layer 1 & 2 & 4",
    grade: "★★",
    details: "Drops:",
    drops: [
    {
      src: "../items/vanilla/images/glow_berries.png",
      href: "../recipe/item_list/glow_berries/glow_berries.html",
      alt: "Glow Berries",
      chance: "60%",
      amount: "1-2"
    },
    {
      src: "../items/mob_drops/images/plant_matter.png",
      href: "/recipe/recipe_menu.html?page=plant_matter",
      alt: "Plant Matter",
      chance: "60%",
      amount: "1-3"
    },
    {
      src: "../items/mob_drops/images/spittleshrub_root.png",
      href: "/recipe/recipe_menu.html?page=spittleshrub_root",
      alt: "Spittleshrub Root",
      chance: "20%",
      amount: "1"
    },
    {
      src: "../items/vanilla/images/oak_sapling.png",
      href: "../recipe/item_list/oak_sapling/oak_sapling.html",
      alt: "Oak Sapling",
      chance: "3.5%",
      amount: "1"
    },
    {
      src: "../items/vanilla/images/spruce_sapling.png",
      href: "../recipe/item_list/spruce_sapling/spruce_sapling.html",
      alt: "Spruce Sapling",
      chance: "3.5%",
      amount: "1"
    },
    {
      src: "../items/vanilla/images/jungle_sapling.png",
      href: "../recipe/item_list/jungle_sapling/jungle_sapling.html",
      alt: "Jungle Sapling",
      chance: "3.5%",
      amount: "1"
    },
    {
      src: "../items/vanilla/images/acacia_sapling.png",
      href: "../recipe/item_list/acacia_sapling/acacia_sapling.html",
      alt: "Acacia Sapling",
      chance: "3.5%",
      amount: "1"
    },
    {
      src: "../items/vanilla/images/dark_oak_sapling.png",
      href: "../recipe/item_list/dark_oak_sapling/dark_oak_sapling.html",
      alt: "Dark Oak Sapling",
      chance: "3.5%",
      amount: "1"
    },
    ],
    stats: {
     xp: "20-35",
     hp: 20,
    },
    extra: "Tip1"
  },
  {
    name: "Splitjaw",
    imga: "mob_png/splitjaw2d.png",
    imgb: "mob_gif/splitjaw.gif",
    description: " The Crimson Splitjaw is a giant scarlet red reptile with a serpentine body that primarily lives in the steep cliffs of the 3rd Layer of The Abyss. <br> <br> Found in Layer 1 & 2 & 3",
    grade: "★★★★★",
    details: "Drops:",
    drops: [
    {
      src: "../items/mob_drops/images/splitjaw_scales.png",
      href: "/recipe/recipe_menu.html?page=splitjaw_scales",
      alt: "Splitjaw Scales",
      chance: "70%",
      amount: "1-3"
    },
    {
      src: "../items/mob_drops/images/splitjaw_gunk.png",
      href: "/recipe/recipe_menu.html?page=splitjaw_gunk",
      alt: "Splitjaw Gunk",
      chance: "70%",
      amount: "2"
    },
    {
      src: "../items/vanilla/images/diamond.png",
      href: "../recipe/item_list/diamond/diamond.html",
      alt: "Diamond",
      chance: "10%",
      amount: "1"
    },
    {
      src: "../items/vanilla/images/gold_ingot.png",
      href: "../recipe/item_list/gold_ingot/gold_ingot.html",
      alt: "Gold Ingot",
      chance: "15%",
      amount: "1"
    },
    {
      src: "../items/vanilla/images/emerald.png",
      href: "../recipe/item_list/emerald/emerald.html",
      alt: "Emerald",
      chance: "10%",
      amount: "1"
    },
    ],
    stats: {
     xp: "70-115",
     hp: 90,
    },
    extra: "Tip1"
  },
  {
    name: "Tesuchi",
    imga: "mob_png/tesuchi2d.png",
    imgb: "mob_gif/tesuchi.gif",
    description: " The Tesuchi is a reptile creature live in dark forests. Their scales and tail are edible ( kinda weird :D). Their scales can be use as an important ingredient for ancient template for forging<br> <br> Found in Layer 3",
    grade: "harmless",
    details: "Drops:",
    drops: [
    {
      src: "../items/mob_drops/images/tesuchi_tail.png",
      href: "/recipe/recipe_menu.html?page=tesuchi_tail",
      alt: "Tesuchi Tail",
      chance: "100%",
      amount: "1"
    },
    {
      src: "../items/mob_drops/images/tesuchi_scales.png",
      href: "/recipe/recipe_menu.html?page=tesuchi_scales",
      alt: "Tesuchi Scales",
      chance: "80%",
      amount: "1-3"
    },
    {
      src: "../items/special_drops/images/tosubachi.png",
      href: "/recipe/recipe_menu.html?page=tosubachi",
      alt: "Tosubachi",
      chance: "100%",
      amount: "1"
    },
    ],
    stats: {
     xp: "5-10",
     hp: 20,
    },
    extra: `
      <div class="tip">
        <img class="tip-avatar" src="../avatar/bigeyes.png" alt="Tip avatar"> 
        <div class="tip-box">
          You will need them for the best armors.
        </div>
      </div>
    `
  },
    {
    name: "Vinebinder",
    imga: "mob_png/vinebinder2d.png",
    imgb: "mob_gif/vinebinder.gif",
    description: " The Vinebinder is carnivorous plant, absorb nearby small creatures to keep them alive. Their fang have poisonous so make sure to avoid them<br> <br> Found in Layer 1 & 2",
    grade: "★",
    details: "Drops:",
    drops: [
    {
      src: "../items/mob_drops/images/plant_matter.png",
      href: "/recipe/recipe_menu.html?page=plant_matter",
      alt: "Plant Matter",
      chance: "60%",
      amount: "1-2"
    },
    {
      src: "../items/vanilla/images/oak_sapling.png",
      href: "../recipe/item_list/oak_sapling/oak_sapling.html",
      alt: "Oak Sapling",
      chance: "3.5%",
      amount: "1"
    },
    {
      src: "../items/vanilla/images/spruce_sapling.png",
      href: "../recipe/item_list/spruce_sapling/spruce_sapling.html",
      alt: "Spruce Sapling",
      chance: "3.5%",
      amount: "1"
    },
    {
      src: "../items/vanilla/images/jungle_sapling.png",
      href: "../recipe/item_list/jungle_sapling/jungle_sapling.html",
      alt: "Jungle Sapling",
      chance: "3.5%",
      amount: "1"
    },
    {
      src: "../items/vanilla/images/acacia_sapling.png",
      href: "../recipe/item_list/acacia_sapling/acacia_sapling.html",
      alt: "Acacia Sapling",
      chance: "3.5%",
      amount: "1"
    },
    {
      src: "../items/vanilla/images/dark_oak_sapling.png",
      href: "../recipe/item_list/dark_oak_sapling/dark_oak_sapling.html",
      alt: "Dark Oak Sapling",
      chance: "3.5%",
      amount: "1"
    },
    ],
    stats: {
     xp: "10-15",
     hp: 20,
    },
    extra: "Tip1"
  },
    {
    name: "Vineblaster",
    imga: "mob_png/vineblaster2d.png",
    imgb: "mob_gif/vineblaster.gif",
    description: " The Vineblaster is a plant that shoots out poisonous spores.<br> <br> Found in Layer 1 & 2",
    grade: "★★",
    details: "Drops:",
    drops: [
    {
      src: "../items/mob_drops/images/plant_matter.png",
      href: "/recipe/recipe_menu.html?page=plant_matter",
      alt: "Plant Matter",
      chance: "60%",
      amount: "1-2"
    },
    {
      src: "../items/vanilla/images/oak_sapling.png",
      href: "../recipe/item_list/oak_sapling/oak_sapling.html",
      alt: "Oak Sapling",
      chance: "3.5%",
      amount: "1"
    },
    {
      src: "../items/vanilla/images/spruce_sapling.png",
      href: "../recipe/item_list/spruce_sapling/spruce_sapling.html",
      alt: "Spruce Sapling",
      chance: "3.5%",
      amount: "1"
    },
    {
      src: "../items/vanilla/images/jungle_sapling.png",
      href: "../recipe/item_list/jungle_sapling/jungle_sapling.html",
      alt: "Jungle Sapling",
      chance: "3.5%",
      amount: "1"
    },
    {
      src: "../items/vanilla/images/acacia_sapling.png",
      href: "../recipe/item_list/acacia_sapling/acacia_sapling.html",
      alt: "Acacia Sapling",
      chance: "3.5%",
      amount: "1"
    },
    {
      src: "../items/vanilla/images/dark_oak_sapling.png",
      href: "../recipe/item_list/dark_oak_sapling/dark_oak_sapling.html",
      alt: "Dark Oak Sapling",
      chance: "3.5%",
      amount: "1"
    },
    ],
    stats: {
     xp: "10-15",
     hp: 16,
    },
    extra: "Tip1"
  },
    {
    name: "Vinepoofer",
    imga: "mob_png/vinepoofer2d.png",
    imgb: "mob_gif/vinepoofer.gif",
    description: " The Vinepoofer is a plant that explode, spread out their poisonous spore.<br> <br> Found in Layer 1 & 2",
    grade: "★★",
    details: "Drops:",
    drops: [
    {
      src: "../items/mob_drops/images/plant_matter.png",
      href: "/recipe/recipe_menu.html?page=plant_matter",
      alt: "Plant Matter",
      chance: "60%",
      amount: "1-2"
    },
    {
      src: "../items/vanilla/images/oak_sapling.png",
      href: "../recipe/item_list/oak_sapling/oak_sapling.html",
      alt: "Oak Sapling",
      chance: "3.5%",
      amount: "1"
    },
    {
      src: "../items/vanilla/images/spruce_sapling.png",
      href: "../recipe/item_list/spruce_sapling/spruce_sapling.html",
      alt: "Spruce Sapling",
      chance: "3.5%",
      amount: "1"
    },
    {
      src: "../items/vanilla/images/jungle_sapling.png",
      href: "../recipe/item_list/jungle_sapling/jungle_sapling.html",
      alt: "Jungle Sapling",
      chance: "3.5%",
      amount: "1"
    },
    {
      src: "../items/vanilla/images/acacia_sapling.png",
      href: "../recipe/item_list/acacia_sapling/acacia_sapling.html",
      alt: "Acacia Sapling",
      chance: "3.5%",
      amount: "1"
    },
    {
      src: "../items/vanilla/images/dark_oak_sapling.png",
      href: "../recipe/item_list/dark_oak_sapling/dark_oak_sapling.html",
      alt: "Dark Oak Sapling",
      chance: "3.5%",
      amount: "1"
    },
    ],
    stats: {
     xp: "10-15",
     hp: 20,
    },
    extra: "Tip1"
  },
  {
    name: "Woodcrier",
    imga: "mob_png/woodcrier2d.png",
    imgb: "mob_gif/woodcrier.gif",
    description: " The Woodcrier is a deer-like creature. It quite hostile, use their speed and resin antler to attack. Even though their fur is really soft and can be use for decoration <br> <br> Found in Layer 1 & 2",
    grade: "★★★",
    details: "Drops:",
    drops: [
    {
      src: "../items/mob_drops/images/woodcrier_horn.png",
      href: "/recipe/recipe_menu.html?page=woodcrier_horn",
      alt: "Woodcrier Horn",
      chance: "60%",
      amount: "1-2"
    },
    {
      src: "../items/vanilla/images/brown_wool.png",
      href: "../recipe/item_list/brown_wool/brown_wool.html",
      alt: "Brown Wool",
      chance: "60%",
      amount: "1-3"
    },
    ],
    stats: {
     xp: "10-30",
     hp: 30,
    },
    extra: "Tip1"
  },
  /*LAYER 2 (INVERTED FOREST)*/
  {
    name: "Billabonk",
    imga: "mob_png/billabonk2d.png",
    imgb: "mob_gif/billabonk.gif",
    description: " The Billabonk is a small, frog-like creature lives in rainforest in the edge of l2 . <br> <br> Found in Layer 2 ",
    grade: "harmless",
    details: "Drops:",
    drops: [
    {
      src: "../items/mob_drops/images/billabonk_leg_raw.png",
      href: "/recipe/recipe_menu.html?page=raw_billabonk_leg",
      alt: "Raw Billabonk Leg",
      chance: "60%",
      amount: "1-2"
    },
    {
      src: "../items/vanilla/images/lily_pad.png",
      href: "../recipe/item_list/lily_pad/lily_pad.html",
      alt: "Lily Pad",
      chance: "40%",
      amount: "1-2"
    },
    ],
    stats: {
     xp: "1-10",
     hp: 20,
    },
    extra: "Tip1"
  },
  {
    name: "Hisoishi",
    imga: "mob_png/hisoishi2d.png",
    imgb: "mob_gif/hisoishi.gif",
    description: " The crab-like creature that live in a herd. Their shell is a important material for the ghostseeker that able to tunned the lingering souls around the Abyss  <br> <br> Found in Layer 2 ( Inverted Forest ) & 3",
    grade: "",
    details: "Drops:",
    drops: [
    {
      src: "../items/mob_drops/images/hisoishi_claw.png",
      href: "/recipe/recipe_menu.html?page=crystal_hisoishi_claw",
      alt: "Hisoishi Claw",
      chance: "80%",
      amount: "1-3"
    },
    {
      src: "../items/mob_drops/images/hisoishi_shell.png",
      href: "/recipe/recipe_menu.html?page=hisoishi_shell",
      alt: "Hisoishi Shell",
      chance: "20%",
      amount: "1"
    },
    ],
    stats: {
     xp: "10-20",
     hp: 25,
    },
    extra: "Tip1"
  },
  {
    name: "Ikenosuke",
    imga: "mob_png/ikenosuke2d.png",
    imgb: "mob_gif/ikenosuke.gif",
    description: " The Ikenosuke is fish that can be found in small lake in l2. Instead of scales, it has tough, white skin. The taste of its meat has a slight, sweet flavor.<br> <br> Found in Layer 2",
    grade: "harmless",
    details: "Drops:",
    drops: [
    {
      src: "../items/mob_drops/images/ikenosuke_raw.png",
      href: "/recipe/recipe_menu.html?page=raw_ikenosuke",
      alt: "Raw Ikenosuke",
      chance: "60%",
      amount: "1-2"
    },
    {
      src: "../items/vanilla/images/prismarine_crystals.png",
      href: "../recipe/item_list/prismarine_crystals/prismarine_crystals.html",
      alt: "Prismarine Crystals",
      chance: "90%",
      amount: "1-8"
    },
    ],
    stats: {
     xp: "5-15",
     hp: 12,
    },
    extra: "Tip1"
  },
  {
    name: "Inbyo",
    imga: "mob_png/inbyo2d.png",
    imgb: "mob_gif/inbyo.gif",
    description: " The Inbyo is primate creature. Their skillful hand let them climb, throw with their sharp claws make them actual dangerous threat in Layer 2 <br> <br> Found in Layer 2 (Inverted Forest)",
    grade: "★",
    details: "Drops:",
    drops: [
    {
      src: "../items/mob_drops/images/inbyo_meat_raw.png",
      href: "/recipe/recipe_menu.html?page=raw_inbyo_meat",
      alt: "Raw Inbyo Meat",
      chance: "60%",
      amount: "1-2"
    },
    {
      src: "../items/mob_drops/images/inbyo_fur.png",
      href: "/recipe/recipe_menu.html?page=inbyo_fur",
      alt: "Inbyo Fur",
      chance: "60%",
      amount: "1-3"
    },
    ],
    stats: {
     xp: "35-45",
     hp: 25,
    },
    extra: `
      <div class="tip">
        <img class="tip-avatar" src="../avatar/bigeyes.png" alt="Tip avatar"> 
        <div class="tip-box">
          They would stone you to death.
        </div>
      </div>
    `
  },
  {
    name: "Neritantan",
    imga: "mob_png/neritantan2d.png",
    imgb: "mob_gif/neritantan.gif",
    description: " The Neritantan is a creature live around Inverted Forest and Layer 3 grass area. Their primary diet consists of Baracocha fruits. Presumably because of this, their meat is described as very delicious, which makes them suitable for a wide range of dishes. <br> <br> Found in Layer 2 (Inverted Forest) & 3",
    grade: "harmless",
    details: "Drops:",
    drops: [
    {
      src: "../items/mob_drops/images/neritantan_meat_raw.png",
      href: "/recipe/recipe_menu.html?page=raw_neritantan_meat",
      alt: "Raw Neritantan Meat",
      chance: "60%",
      amount: "1-2"
    },
    {
      src: "../items/vanilla/images/beetroot_seeds.png",
      href: "../recipe/item_list/beetroot_seeds/beetroot_seeds.html",
      alt: "Beetroot Seeds",
      chance: "30%",
      amount: "1-2"
    },
    {
      src: "../items/vanilla/images/melon_seeds.png",
      href: "../recipe/item_list/melon_seeds/melon_seeds.html",
      alt: "Melon Seeds",
      chance: "30%",
      amount: "1-2"
    },
    {
      src: "../items/vanilla/images/pumpkin_seeds.png",
      href: "../recipe/item_list/pumpkin_seeds/pumpkin_seeds.html",
      alt: "Pumpkin Seeds",
      chance: "30%",
      amount: "1-2"
    },
    {
      src: "../items/vanilla/images/sweet_berries.png",
      href: "../recipe/item_list/sweet_berries/sweet_berries.html",
      alt: "Sweet Berries",
      chance: "30%",
      amount: "1-2"
    },
    ],
    stats: {
     xp: "5-10",
     hp: 7,
    },
    extra: "Tip1"
  },
  {
    name: "Rockwalker",
    imga: "mob_png/rockwalker2d.png",
    imgb: "mob_gif/rockwalker.gif",
    description: " The Rockwalker is an bug live around Inverted Forest and Layer 3 caves. Their shell evolve that even harder than rock to protect themselve from other threat <br> <br> Found in Layer 2 (Inverted Forest) & 3",
    grade: "★",
    details: "Drops:",
    drops: [
    {
      src: "../items/mob_drops/images/rockwalker_mandible.png",
      href: "/recipe/recipe_menu.html?page=rock-walker_mandible",
      alt: "Rockwalker Mandible",
      chance: "80%",
      amount: "1-4"
    },
    ],
    stats: {
     xp: "10-15",
     hp: 25,
    },
    extra: "Tip1"
  },
  {
    name: "Rohana",
    imga: "mob_png/rohana2d.png",
    imgb: "mob_gif/rohana.gif",
    description: " The Rohana is a bug live in clean water area in Layer 2 and 4. These guys powder and tail can be use to make an elixir which is increase the user strength<br> <br> Found in Layer 2(Inverted Forest) & 4",
    grade: "harmless",
    details: "Drops:",
    drops: [
    {
      src: "../items/mob_drops/images/rohana_powder.png",
      href: "/recipe/recipe_menu.html?page=rohana_powder",
      alt: "Rohana Powder",
      chance: "80%",
      amount: "2"
    },
    {
      src: "../items/mob_drops/images/rohana_tail.png",
      href: "/recipe/recipe_menu.html?page=rohana_tail",
      alt: "Rohana Tail",
      chance: "40%",
      amount: "2"
    },
    ],
    stats: {
     xp: "12-18",
     hp: 10,
    },
    extra: "Tip1"
  },
  {
    name: "Stinger",
    imga: "mob_png/stinger2d.png",
    imgb: "mob_gif/stinger.gif",
    description: " The Stinger is a common bug, live around L2 to L5. Their stings are poisonous <br> <br> Found in Layer 2 & 4 & 5",
    grade: "",
    details: "Drops:",
    drops: [
    {
      src: "../items/mob_drops/images/stinger_wing.png",
      href: "/recipe/recipe_menu.html?page=stinger_wing",
      alt: "Stinger Wing",
      chance: "50%",
      amount: "1"
    },
    {
      src: "../items/mob_drops/images/stinger_horn.png",
      href: "/recipe/recipe_menu.html?page=stinger_horn",
      alt: "Stinger Horn",
      chance: "20%",
      amount: "1"
    },
    ],
    stats: {
     xp: "5-15",
     hp: 16,
    },
    extra: `
      <div class="tip">
        <img class="tip-avatar" src="../avatar/bigeyes.png" alt="Tip avatar"> 
        <div class="tip-box">
          Pokey pokey.
        </div>
      </div>
    `
  },
  /*LAYER 3*/
  {
    name: "Buroguro",
    imga: "mob_png/buroguro2d.png",
    imgb: "mob_gif/buroguro.gif",
    description: " The Buroguro is a firefly-like creature, which produce light in layer 3 caves. Be careful, their stinger contains various of dangerous poison<br> <br> Found in Layer 3",
    grade: "",
    details: "Drops:",
    drops: [
    {
      src: "../items/mob_drops/images/buroguro_lantern.png",
      href: "/recipe/recipe_menu.html?page=buroguro_lantern",
      alt: "Buroguro Lantern",
      chance: "30%",
      amount: "1"
    },
    {
      src: "../items/mob_drops/images/buroguro_stinger.png",
      href: "/recipe/recipe_menu.html?page=buroguro_stinger",
      alt: "Buroguro Stinger",
      chance: "60%",
      amount: "1-2"
    },
    ],
    stats: {
     xp: "50-90",
     hp: 32,
    },
    extra: "Tip1"
  },
  {
    name: "Daikonchu",
    imga: "mob_png/daikonchu2d.png",
    imgb: "mob_gif/daikonchu.gif",
    description: " The Daikonchu is bee-like creature. Live in the cave too long, their eyes grow bigger to capture every light in the cave. These bug pretty chill, only aggresive if you hit them first. There is a myth that delver use their wings and carapaces to make armor. <br> <br> Found in Layer 3",
    grade: "",
    details: "Drops:",
    drops: [
    {
      src: "../items/mob_drops/images/daikonchu_carapace.png",
      href: "/recipe/recipe_menu.html?page=daikonchu_carapace",
      alt: "Daikonchu Carapace",
      chance: "40%",
      amount: "1"
    },
    {
      src: "../items/mob_drops/images/daikonchu_wing.png",
      href: "/recipe/recipe_menu.html?page=daikonchu_wing",
      alt: "Daikonchu Wing",
      chance: "30%",
      amount: "1-2"
    },
    ],
    stats: {
     xp: "15-25",
     hp: 80,
    },
    extra: "Tip1"
  },
  {
    name: "Dosetori",
    imga: "mob_png/dosetori2d.png",
    imgb: "mob_gif/dosetori.gif",
    description: " The Dosetori is a avian creature that live in grass area in Layer 2 and 3. These bad guy have big and sturdy wings. There is a myth that delver use their wings to make leather-like armor. <br> <br> Found in Layer 2",
    grade: "★★",
    details: "Drops:",
    drops: [
    {
      src: "../items/mob_drops/images/dosetori_meat_raw.png",
      href: "/recipe/recipe_menu.html?page=raw_dosetori_meat",
      alt: "Raw Dosetori Meat",
      chance: "100%",
      amount: "1-2"
    },
    {
      src: "../items/mob_drops/images/dosetori_wing.png",
      href: "/recipe/recipe_menu.html?page=dosetori_wing",
      alt: "Dosetori Wing",
      chance: "70%",
      amount: "1-3"
    },
    {
      src: "../items/mob_drops/images/dosetori_bone.png",
      href: "/recipe/recipe_menu.html?page=dosetori_bone",
      alt: "Dosetori Bone",
      chance: "80%",
      amount: "1-3"
    },
    ],
    stats: {
     xp: "20-40",
     hp: 30,
    },
    extra: "Tip1"
  },
  {
    name: "Himushi",
    imga: "mob_png/himushi2d.png",
    imgb: "mob_gif/himushi.gif",
    description: " The Himushi is a snail-like creature. Their skin evolve to handle the heat in magma cave. They also store magma on their back, those can be shoot out when they in danger <br> <br> Found in Layer 3",
    grade: "",
    details: "Drops:",
    drops: [
    {
      src: "../items/vanilla/images/soul_sand.png",
      href: "../recipe/item_list/soul_sand/soul_sand.html",
      alt: "Soul Sand",
      chance: "60%",
      amount: "1-2"
    },
    {
      src: "../items/vanilla/images/magma_block.png",
      href: "../recipe/item_list/magma_block/magma_block.html",
      alt: "Magma Block",
      chance: "60%",
      amount: "1-2"
    },
    {
      src: "../items/mob_drops/images/himushi_core.png",
      href: "/recipe/recipe_menu.html?page=himushi_core",
      alt: "Himushi Core",
      chance: "100%",
      amount: "1"
    },
    ],
    stats: {
     xp: "/",
     hp: 60,
    },
    extra: `
      <div class="tip">
        <img class="tip-avatar" src="../avatar/bigeyes.png" alt="Tip avatar"> 
        <div class="tip-box">
          Flamethrower go brrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr.
        </div>
      </div>
    `
  },
  {
    name: "Hisoishi",
    imga: "mob_png/hisoishi2d.png",
    imgb: "mob_gif/hisoishi.gif",
    description: " The crab-like creature that live in a herd. Their shell is a important material for the ghostseeker that able to tunned the lingering souls around the Abyss  <br> <br> Found in Layer 2 ( Inverted Forest ) & 3",
    grade: "",
    details: "Drops:",
    drops: [
    {
      src: "../items/mob_drops/images/hisoishi_claw.png",
      href: "/recipe/recipe_menu.html?page=crystal_hisoishi_claw",
      alt: "Hisoishi Claw",
      chance: "80%",
      amount: "1-3"
    },
    {
      src: "../items/mob_drops/images/hisoishi_shell.png",
      href: "/recipe/recipe_menu.html?page=hisoishi_shell",
      alt: "Hisoishi Shell",
      chance: "20%",
      amount: "1"
    },
    ],
    stats: {
     xp: "10-20",
     hp: 25,
    },
    extra: "Tip1"
  },
  {
    name: "Ikenosuke",
    imga: "mob_png/ikenosuke2d.png",
    imgb: "mob_gif/ikenosuke.gif",
    description: " The Ikenosuke is fish that can be found in small lake in l2. Instead of scales, it has tough, white skin. The taste of its meat has a slight, sweet flavor.<br> <br> Found in Layer 2 & 3",
    grade: "harmless",
    details: "Drops:",
    drops: [
    {
      src: "../items/mob_drops/images/ikenosuke_raw.png",
      href: "/recipe/recipe_menu.html?page=raw_ikenosuke",
      alt: "Raw Ikenosuke",
      chance: "60%",
      amount: "1-2"
    },
    {
      src: "../items/vanilla/images/prismarine_crystals.png",
      href: "../recipe/item_list/prismarine_crystals/prismarine_crystals.html",
      alt: "Prismarine Crystals",
      chance: "90%",
      amount: "1-8"
    },
    ],
    stats: {
     xp: "5-15",
     hp: 12,
    },
    extra: "Tip1"
  },
  {
    name: "Kakatsumuri",
    imga: "mob_png/kakatsumuri2d.png",
    imgb: "mob_gif/kakatsumuri.gif",
    description: " The Kakatsumuri is a snail-like creature. They are super small and hard to find out. Their tip also is a really important to craft the ghostseeker<br> <br> Found in Layer 3",
    grade: "harmless",
    details: "Drops:",
    drops: [
    {
      src: "../items/mob_drops/images/kakatsumuri_shell.png",
      href: "/recipe/recipe_menu.html?page=kakatsumuri_shell",
      alt: "Kakatsumuri Shell",
      chance: "80%",
      amount: "1"
    },
    {
      src: "../items/mob_drops/images/kakatsumuri_glowing_tip.png",
      href: "/recipe/recipe_menu.html?page=kakatsumuri_glowing_tip",
      alt: "Kakatsumuri Glowing Tip",
      chance: "90%",
      amount: "1"
    },
    ],
    stats: {
     xp: "3-8",
     hp: 5,
    },
    extra: `
      <div class="tip">
        <img class="tip-avatar" src="../avatar/bigeyes.png" alt="Tip avatar"> 
        <div class="tip-box">
          Where the fuk are these thing half the time.
        </div>
      </div>
    `
  },
  {
    name: "Madokajack",
    imga: "mob_png/madokajack2d.png",
    imgb: "mob_gif/madokajack.gif",
    description: " The Madokajack is an flying creature that quite annoying. They hang them around the wall of layer 3. Often drop poop when killed<br> <br> Found in Layer 2 & 3",
    grade: "★",
    details: "Drops:",
    drops: [
    {
      src: "../items/mob_drops/images/madokajack_scales.png",
      href: "/recipe/recipe_menu.html?page=madokajack_scales",
      alt: "Madokajack Scales",
      chance: "70%",
      amount: "1-4"
    },
    {
      src: "../items/mob_drops/images/madokajack_bone.png",
      href: "/recipe/recipe_menu.html?page=madokajack_bone",
      alt: "Madokajack Bone",
      chance: "80%",
      amount: "1-3"
    },
    {
      src: "../items/mob_drops/images/madokajack_eye.png",
      href: "/recipe/recipe_menu.html?page=madokajack_eye",
      alt: "Madokajack Eye",
      chance: "30%",
      amount: "2"
    },
    {
      src: "../items/mob_drops/images/madokajack_poop.png",
      href: "/recipe/recipe_menu.html?page=madokajack_poop",
      alt: "Madokajack Poop",
      chance: "30%",
      amount: "1"
    },
    ],
    stats: {
     xp: "40-60",
     hp: 40,
    },
    extra: "Tip1"
  },
  {
    name: "Neritantan",
    imga: "mob_png/neritantan2d.png",
    imgb: "mob_gif/neritantan.gif",
    description: "The Neritantan is a creature live around Inverted Forest and Layer 3 grass area. Their primary diet consists of Baracocha fruits. Presumably because of this, their meat is described as very delicious, which makes them suitable for a wide range of dishes. <br> <br> Found in Layer 2 (Inverted Forest) & 3",
    grade: "harmless",
    details: "Drops:",
    drops: [
    {
      src: "../items/mob_drops/images/neritantan_meat_raw.png",
      href: "/recipe/recipe_menu.html?page=raw_neritantan_meat",
      alt: "Raw Neritantan Meat",
      chance: "60%",
      amount: "1-2"
    },
    {
      src: "../items/vanilla/images/beetroot_seeds.png",
      href: "../recipe/item_list/beetroot_seeds/beetroot_seeds.html",
      alt: "Beetroot Seeds",
      chance: "30%",
      amount: "1-2"
    },
    {
      src: "../items/vanilla/images/melon_seeds.png",
      href: "../recipe/item_list/melon_seeds/melon_seeds.html",
      alt: "Melon Seeds",
      chance: "30%",
      amount: "1-2"
    },
    {
      src: "../items/vanilla/images/pumpkin_seeds.png",
      href: "../recipe/item_list/pumpkin_seeds/pumpkin_seeds.html",
      alt: "Pumpkin Seeds",
      chance: "30%",
      amount: "1-2"
    },
    {
      src: "../items/vanilla/images/sweet_berries.png",
      href: "../recipe/item_list/sweet_berries/sweet_berries.html",
      alt: "Sweet Berries",
      chance: "30%",
      amount: "1-2"
    },
    ],
    stats: {
     xp: "5-10",
     hp: 7,
    },
    extra: "Tip1"
  },
  {
    name: "Rinsipede",
    imga: "mob_png/rinsipede2d.png",
    imgb: "mob_gif/rinsipede.gif",
    description: "A hostile centipede mob, their segments can be a pretty good source of bonemeal. They can be found in caves in Layer 3 and around Layer 5",
    grade: "★",
    details: "Drops:",
    drops: [
    {
      src: "../items/mob_drops/images/rinsipede_segments.png",
      href: "/recipe/recipe_menu.html?page=rinsipede_segments",
      alt: "Rinsipede Segments",
      chance: "80%",
      amount: "1-2"
    },
    ],
    stats: {
     xp: "15-25",
     hp: 30,
    },
    extra: "Tip1"
  },
  {
    name: "Rockwalker",
    imga: "mob_png/rockwalker2d.png",
    imgb: "mob_gif/rockwalker.gif",
    description: "The Rockwalker is an bug live around Inverted Forest and Layer 3 caves. Their shell evolve that even harder than rock to protect themselve from other threat <br> <br> Found in Layer 2 (Inverted Forest) & 3",
    grade: "★",
    details: "Drops:",
    drops: [
    {
      src: "../items/mob_drops/images/rockwalker_mandible.png",
      href: "/recipe/recipe_menu.html?page=rock-walker_mandible",
      alt: "Rockwalker Mandible",
      chance: "80%",
      amount: "1-4"
    },
    ],
    stats: {
     xp: "10-15",
     hp: 25,
    },
    extra: "Tip1"
  },
  {
    name: "Sakuranbo",
    imga: "mob_png/sakuranbo2d.png",
    imgb: "mob_gif/sakuranbo.gif",
    description: "A lizard mob which spawn in grass area in Layer 3. They are pretty chill and their powder can be use as explosive material and for brewing. <br> <br> Found in Layer 3",
    grade: "harmless",
    details: "Drops:",
    drops: [
    {
      src: "../items/mob_drops/images/sakuranbo_dust.png",
      href: "/recipe/recipe_menu.html?page=sakuranbo_dust",
      alt: "Sakuranbo Dust",
      chance: "90%",
      amount: "1-3"
    },
    ],
    stats: {
     xp: "10-20",
     hp: 10,
    },
    extra: "Tip1"
  },
  {
    name: "Splitjaw",
    imga: "mob_png/splitjaw2d.png",
    imgb: "mob_gif/splitjaw.gif",
    description: "The Crimson Splitjaw is a giant scarlet red reptile with a serpentine body that primarily lives in the steep cliffs of the 3rd Layer of The Abyss. <br> <br> Found in Layer 1 & 2 & 3",
    grade: "★",
    details: "Drops:",
    drops: [
    {
      src: "../items/mob_drops/images/splitjaw_scales.png",
      href: "/recipe/recipe_menu.html?page=splitjaw_scales",
      alt: "Splitjaw Scales",
      chance: "70%",
      amount: "1-3"
    },
    {
      src: "../items/mob_drops/images/splitjaw_gunk.png",
      href: "/recipe/recipe_menu.html?page=splitjaw_gunk",
      alt: "Splitjaw Gunk",
      chance: "70%",
      amount: "2"
    },
    {
      src: "../items/vanilla/images/diamond.png",
      href: "../recipe/item_list/diamond/diamond.html",
      alt: "Diamond",
      chance: "10%",
      amount: "1"
    },
    {
      src: "../items/vanilla/images/gold_ingot.png",
      href: "../recipe/item_list/gold_ingot/gold_ingot.html",
      alt: "Gold Ingot",
      chance: "15%",
      amount: "1"
    },
    {
      src: "../items/vanilla/images/emerald.png",
      href: "../recipe/item_list/emerald/emerald.html",
      alt: "Emerald",
      chance: "10%",
      amount: "1"
    },
    ],
    stats: {
     xp: "70-115",
     hp: 90,
    },
    extra: "Tip1"
  },
  {
    name: "Squidfly",
    imga: "mob_png/squidfly2d.png",
    imgb: "mob_gif/squidfly.gif",
    description: "A flying insect, their disgusting brain suprisingly can boost the user mining speed when used as an ingredient for elixir. <br> <br> Found in Layer 3",
    grade: "★",
    details: "Drops:",
    drops: [
    {
      src: "../items/mob_drops/images/squidfly_brain_raw.png",
      href: "/recipe/recipe_menu.html?page=squidfly_brain",
      alt: "Raw Squidfly Brain",
      chance: "80%",
      amount: "1"
    },
    ],
    stats: {
     xp: "12-18",
     hp: 16,
    },
    extra: "Tip1"
  },
  {
    name: "Yomotsubi",
    imga: "mob_png/yomotsubi.png",
    imgb: "mob_gif/yomotsubi.gif",
    description: "A bettle mob, they are hostile and their shooting attack can cause a huge shockwave which might lead to severe fall damage and cursed. <br> <br> Found in Layer 3",
    grade: "★",
    details: "Drops:",
    drops: [
    {
      src: "../items/mob_drops/images/yomotsubi_wing.png",
      href: "/recipe/recipe_menu.html?page=yomotsubi_wing",
      alt: "Yomotsubi Wing",
      chance: "60%",
      amount: "1-2"
    },
    {
      src: "../items/mob_drops/images/yomotsubi_abdomen_raw.png",
      href: "/recipe/recipe_menu.html?page=yomotsubi_abdomen",
      alt: "Raw Yomotsubi Abdomen",
      chance: "60%",
      amount: "1-2"
    },
    ],
    stats: {
     xp: "25-35",
     hp: 40,
    },
    extra: "Tip1"
  },
// LAYER 4
  {
    name: "Hagamizukin",
    imga: "mob_png/hagamizukin2d.png",
    imgb: "mob_gif/hagamizukin.gif",
    description: "A Fishy Mob, their ugly face represent their personality lol, bite really hurt but their meat is quite delicious. <br> <br> Found in Layer 4 & 5",
    grade: "★",
    details: "Drops:",
    drops: [
    {
      src: "../items/vanilla/images/dried_kelp.png",
      href: "../recipe/item_list/dried_kelp/dried_kelp.html",
      alt: "Dried Kelp",
      chance: "70%",
      amount: "1-3"
    },
    {
      src: "../items/mob_drops/images/hagamizukin_tooth.png",
      href: "/recipe/recipe_menu.html?page=hagamizukin_tooth",
      alt: "Hagamizukin Tooth",
      chance: "60%",
      amount: "1-2"
    },
    {
      src: "../items/mob_drops/images/hagamizukin_raw.png",
      href: "/recipe/recipe_menu.html?page=raw_hagamizukin",
      alt: "Raw Hagamizukin",
      chance: "60%",
      amount: "1-2"
    },
    ],
    stats: {
     xp: "15-20",
     hp: 50,
    },
    extra: "Tip1"
  },
  {
    name: "Giant Hammerbeak",
    imga: "mob_png/hammerbeak2d.png",
    imgb: "mob_gif/hammerbeak.gif",
    description: "Another variant of hammerbeak, their beaks are much larger and may cause confusion to the delver got hit, commonly found in deeper layers.<br> <br> Found in Layer 1 & 2 & 4",
    grade: "★",
    details: "Drops:",
    drops: [
    {
      src: "../items/mob_drops/images/hammerbeak_wing_raw.png",
      href: "/recipe/recipe_menu.html?page=raw_hammerbeak_wing",
      alt: "Raw Hammerbeak Wing",
      chance: "100%",
      amount: "1-3"
    },
    {
      src: "../items/mob_drops/images/hammerbeak_beak.png",
      href: "/recipe/recipe_menu.html?page=hammerbeak_beak",
      alt: "Hammerbeak Beak",
      chance: "60%",
      amount: "1"
    },
    {
      src: "../items/mob_drops/images/hammerbeak_feather.png",
      href: "/recipe/recipe_menu.html?page=hammerbeak_feather",
      alt: "Hammerbeak Feather",
      chance: "70%",
      amount: "1-3"
    },
    {
      src: "../items/mob_drops/images/hammerbeak_egg.png",
      href: "/recipe/recipe_menu.html?page=hammerbeak_egg",
      alt: "Hammerbeak Egg",
      chance: "50%",
      amount: "1-2"
    },
    ],
    stats: {
     xp: "25-45",
     hp: 40,
    },
    extra: "Tip1"
  },
  {
    name: "Hashofu",
    imga: "mob_png/hashofu2d.png",
    imgb: "mob_gif/hashofu.gif",
    description: "A avian creature, I heard legends said they are some kind of phoenix and their body basically burning ash. Their eyes can be use for some ancient forging template. <br> <br> Found in Layer 4 & 5",
    grade: "harmless",
    details: "Drops:",
    drops: [
    {
      src: "../items/mob_drops/images/hashofu_tail_raw.png",
      href: "/recipe/recipe_menu.html?page=hashofu_tail",
      alt: "Raw Hashofu Tail",
      chance: "80%",
      amount: "1"
    },
    {
      src: "../items/mob_drops/images/hashofu_eye.png",
      href: "/recipe/recipe_menu.html?page=hashofu_eye",
      alt: "Hashofu Eye",
      chance: "65%",
      amount: "2"
    },
    {
      src: "../items/mob_drops/images/hashofu_body.png",
      href: "/recipe/recipe_menu.html?page=hashofu_body",
      alt: "Hashofu Body",
      chance: "100%",
      amount: "1-3"
    },
    ],
    stats: {
     xp: "12-18",
     hp: 20,
    },
    extra: "Tip1"
  },
  {
    name: "Horncrier",
    imga: "mob_png/horncrier2d.png",
    imgb: "mob_gif/horncrier.gif",
    description: "A varient of Woodcrier, their horn is much harder and they are much faster. Pretty deadly. <br> <br> Found in Layer 4 & 5 ",
    grade: "★★★★",
    details: "Drops:",
    drops: [
    {
      src: "../items/mob_drops/images/horncrier_horn.png",
      href: "/recipe/recipe_menu.html?page=horncrier_horn",
      alt: "Horncrier Horn (Ponder)",
      chance: "0.1%",
      amount: "1"
    },
    {
      src: "../items/mob_drops/images/horncrier_horn.png",
      href: "/recipe/recipe_menu.html?page=horncrier_horn",
      alt: "Horncrier Horn (Sing)",
      chance: "0.1%",
      amount: "1"
    },
    {
      src: "../items/mob_drops/images/horncrier_horn.png",
      href: "/recipe/recipe_menu.html?page=horncrier_horn",
      alt: "Horncrier Horn (Seek)",
      chance: "0.1%",
      amount: "1"
    },
    {
      src: "../items/mob_drops/images/horncrier_horn.png",
      href: "/recipe/recipe_menu.html?page=horncrier_horn",
      alt: "Horncrier Horn (Feel)",
      chance: "0.1%",
      amount: "1"
    },
    {
      src: "../items/mob_drops/images/horncrier_horn.png",
      href: "/recipe/recipe_menu.html?page=horncrier_horn",
      alt: "Horncrier Horn (Admire)",
      chance: "0.1%",
      amount: "1"
    },
    {
      src: "../items/mob_drops/images/horncrier_horn.png",
      href: "/recipe/recipe_menu.html?page=horncrier_horn",
      alt: "Horncrier Horn (Call)",
      chance: "0.1%",
      amount: "1"
    },
    {
      src: "../items/mob_drops/images/horncrier_horn.png",
      href: "/recipe/recipe_menu.html?page=horncrier_horn",
      alt: "Horncrier Horn (Yearn)",
      chance: "0.1%",
      amount: "1"
    },
    {
      src: "../items/mob_drops/images/horncrier_horn.png",
      href: "/recipe/recipe_menu.html?page=horncrier_horn",
      alt: "Horncrier Horn (Dream)",
      chance: "0.1%",
      amount: "1"
    },
    {
      src: "../items/vanilla/images/white_wool.png",
      href: "../recipe/item_list/white_wool/white_wool.html",
      alt: "White Wool",
      chance: "60%",
      amount: "1-3"
    },
    ],
    stats: {
     xp: "30-60",
     hp: 60,
    },
    extra: "Tip1"
  },
  {
    name: "Ikenosuke",
    imga: "mob_png/ikenosuke2d.png",
    imgb: "mob_gif/ikenosuke.gif",
    description: "The Ikenosuke is fish that can be found in small lake in l2. Instead of scales, it has tough, white skin. The taste of its meat has a slight, sweet flavor.<br> <br> Found in Layer 2 & 3 & 4",
    grade: "harmless",
    details: "Drops:",
    drops: [
    {
      src: "../items/mob_drops/images/ikenosuke_raw.png",
      href: "/recipe/recipe_menu.html?page=raw_ikenosuke",
      alt: "Raw Ikenosuke",
      chance: "60%",
      amount: "1-2"
    },
    {
      src: "../items/vanilla/images/prismarine_crystals.png",
      href: "../recipe/item_list/prismarine_crystals/prismarine_crystals.html",
      alt: "Prismarine Crystals",
      chance: "90%",
      amount: "1-8"
    },
    ],
    stats: {
     xp: "5-15",
     hp: 12,
    },
    extra: "Tip1"
  },
  {
    name: "Kazura",
    imga: "mob_png/kazura2d.png",
    imgb: "mob_gif/kazura.gif",
    description: "Small squid, their white ink sac isnt actually white :D. <br> <br> Found in Layer 4",
    grade: "harmless",
    details: "Drops:",
    drops: [
    {
      src: "../items/mob_drops/images/kazura_squid_ink_sac.png",
      href: "/recipe/recipe_menu.html?page=kazura_squid_ink_sac",
      alt: "Kazura Squid Ink Sac",
      chance: "80%",
      amount: "1-2"
    },
    ],
    stats: {
     xp: "10-15",
     hp: 5,
    },
    extra: "Tip1"
  },
  {
    name: "Kuongatari",
    imga: "mob_png/kuongatari2d.png",
    imgb: "mob_gif/kuongatari.gif",
    description: "An insect mob, once it reach your body, they will lay their disgusting eggs inside you, and once those insects hatch, they will eat you from the inside out <br> <br> Found in Layer 4 & 5",
    grade: "★★★★★",
    details: "Drops:",
    drops: [
    {
      src: "../items/mob_drops/images/kuongatari_juice.png",
      href: "/recipe/recipe_menu.html?page=kuongatari_juice",
      alt: "Kuongatari Juice",
      chance: "30%",
      amount: "1"
    },
    {
      src: "../items/mob_drops/images/kuongatari_silk.png",
      href: "/recipe/recipe_menu.html?page=kuongatari_silk",
      alt: "Kuongatari Silk",
      chance: "30%",
      amount: "1"
    },
    {
      src: "../items/mob_drops/images/kuongatari_abdomen.png",
      href: "/recipe/recipe_menu.html?page=kuongatari_abdomen",
      alt: "Raw Kuongatari Abdomen",
      chance: "35%",
      amount: "1-2"
    },
    ],
    stats: {
     xp: "15-25",
     hp: 30,
    },
    extra: "Tip1"
  },
  {
    name: "Baby Kuongatari",
    imga: "mob_png/kuongatari2d.png",
    imgb: "mob_gif/kuongatari.gif",
    description: "Pluh",
    grade: "★",
    details: "Drops:",
    drops: [
    {
      src: "../items/mob_drops/images/kuongatari_juice.png",
      href: "/recipe/recipe_menu.html?page=kuongatari_juice",
      alt: "Kuongatari Juice",
      chance: "4%",
      amount: "1"
    },
    {
      src: "../items/mob_drops/images/kuongatari_silk.png",
      href: "/recipe/recipe_menu.html?page=kuongatari_silk",
      alt: "Kuongatari Silk",
      chance: "10%",
      amount: "1"
    },
    {
      src: "../items/mob_drops/images/kuongatari_abdomen.png",
      href: "/recipe/recipe_menu.html?page=kuongatari_abdomen",
      alt: "Raw Kuongatari Abdomen",
      chance: "30%",
      amount: "1"
    },
    ],
    stats: {
     xp: "5-15",
     hp: 30,
    },
    extra: "Tip1"
  },
  {
    name: "Makihige",
    imga: "mob_png/makihige2d.png",
    imgb: "mob_gif/makihige.gif",
    description: "A giant octopus-like creature, their shell evolved to be able to withstand the pressure in deeper layer, therefor their shell is necessary for some ancient forging technique. And their tentacle and ink sac can be used in useful things. <br> <br> Found in Layer 4 & 5",
    grade: "harmless",
    details: "Drops:",
    drops: [
    {
      src: "../items/mob_drops/images/makihige_ink_sac.png",
      href: "/recipe/recipe_menu.html?page=makihige_ink_sac",
      alt: "Makihige Ink Sac",
      chance: "60%",
      amount: "1-2"
    },
    {
      src: "../items/mob_drops/images/makihige_shell.png",
      href: "/recipe/recipe_menu.html?page=makihige_shell",
      alt: "Makihige Shell",
      chance: "30%",
      amount: "1-2"
    },
    {
      src: "../items/mob_drops/images/makihige_tentacle.png",
      href: "/recipe/recipe_menu.html?page=makihige_tentacle",
      alt: "Makihige Tentacle",
      chance: "40%",
      amount: "1-2"
    },
    ],
    stats: {
     xp: "15-30",
     hp: 60,
    },
    extra: "Tip1"
  },
  {
    name: "Onitsuchi",
    imga: "mob_png/onitsuchi2d.png",
    imgb: "mob_gif/onitsuchi.gif",
    description: "A avian creature, Their peak is even harder than the hammerbeak beak, you might able to use them for a substitute for flint lol :D <br> <br> Found in Layer 4 & 5",
    grade: "★",
    details: "Drops:",
    drops: [
    {
      src: "../items/mob_drops/images/onitsuchi_wing_raw.png",
      href: "/recipe/recipe_menu.html?page=raw_onitsuchi_wing",
      alt: "Raw Onitsuchi Wing",
      chance: "100%",
      amount: "1-3"
    },
    {
      src: "../items/mob_drops/images/onitsuchi_skull.png",
      href: "/recipe/recipe_menu.html?page=onitsuchi_skull",
      alt: "Onitsuchi Skull",
      chance: "60%",
      amount: "1"
    },
    {
      src: "../items/mob_drops/images/onitsuchi_feather.png",
      href: "/recipe/recipe_menu.html?page=onitsuchi_feather",
      alt: "Onitsuchi Feather",
      chance: "100%",
      amount: "1-3"
    },
    {
      src: "../items/mob_drops/images/onitsuchi_egg.png",
      href: "/recipe/recipe_menu.html?page=onitsuchi_egg",
      alt: "Onitsuchi Egg",
      chance: "50%",
      amount: "1-2"
    },
    ],
    stats: {
     xp: "60-80",
     hp: 50,
    },
    extra: "Tip1"
  },
  {
    name: "Orb Piercer",
    imga: "mob_png/orb_piercer2d.png",
    imgb: "mob_gif/orbpiercer.gif",
    description: "A hedgehog-like creature, delvers consider it as ultimate despair, the worst nightmare of any delver in L4. Crazy damage and poison. Insane amount of spike and HP with tons of negative effect is what i can tell you. Even though their mask is used for backpacks. <br> <br> Found in Layer 4",
    grade: "★",
    details: "Drops:",
    drops: [
    {
      src: "../items/mob_drops/images/orb_piercer_face_fragments.png",
      href: "/recipe/recipe_menu.html?page=orb_piercer_face_fragments",
      alt: "Orb Piercer Face Fragments",
      chance: "100%",
      amount: "1"
    },
    {
      src: "../items/mob_drops/images/orb_piercer_spike.png",
      href: "/recipe/recipe_menu.html?page=orb_piercer_spike",
      alt: "Orb Piercer Spike",
      chance: "100%",
      amount: "2-6"
    },
    ],
    stats: {
     xp: "100-250",
     hp: 180,
    },
    extra: "Tip1"
  },
  {
    name: "Rohana",
    imga: "mob_png/rohana2d.png",
    imgb: "mob_gif/rohana.gif",
    description: "he Rohana is a bug live in clean water area in Layer 2 and 4. These guys powder and tail can be use to make an elixir which is increase the user strength<br> <br> Found in Layer 2(Inverted Forest) & 4",
    grade: "harmless",
    details: "Drops:",
    drops: [
    {
      src: "../items/mob_drops/images/rohana_powder.png",
      href: "/recipe/recipe_menu.html?page=rohana_powder",
      alt: "Rohana Powder",
      chance: "80%",
      amount: "2"
    },
    {
      src: "../items/mob_drops/images/rohana_tail.png",
      href: "/recipe/recipe_menu.html?page=rohana_tail",
      alt: "Rohana Tail",
      chance: "40%",
      amount: "2"
    },
    ],
    stats: {
     xp: "12-18",
     hp: 10,
    },
    extra: "Tip1"
  },
  {
    name: "Shroombear",
    imga: "mob_png/shroombear2d.png",
    imgb: "mob_gif/shroombear.gif",
    description: "A silly pig, the parasite mushroom that co-exist with them is actually really useful if using the right way. Some ancient delver used them for healing serious wounds <br> <br> Found in Layer 4",
    grade: "harmless",
    details: "Drops:",
    drops: [
    {
      src: "../items/mob_drops/images/shroombear_meat_raw.png",
      href: "/recipe/recipe_menu.html?page=shroombear_meat",
      alt: "Raw Shroombear Meat",
      chance: "60%",
      amount: "1-2"
    },
    {
      src: "../items/mob_drops/images/parasitic_watershrooms.png",
      href: "/recipe/recipe_menu.html?page=parasitic_watershrooms",
      alt: "Parasitic Watershrooms",
      chance: "60%",
      amount: "1-2"
    },
    ],
    stats: {
     xp: "3-7",
     hp: 25,
    },
    extra: "Tip1"
  },
  {
    name: "Spiralsquid",
    imga: "mob_png/spiralsquid2d.png",
    imgb: "mob_gif/spiralsquid.gif",
    description: "The Spiralsquid is a squid with a unique shape. Their meat is safe to eat. <br> <br> Found in Layer 1",
    grade: "harmless",
    details: "Drops:",
    drops: [
    {
      src: "../items/vanilla/images/ink_sac.png",
      href: "../recipe/item_list/ink_sac/ink_sac.html",
      alt: "Ink Sac",
      chance: "100%",
      amount: "1-2"
    },
    {
      src: "../items/mob_drops/images/spiralsquid_raw.png",
      href: "/recipe/recipe_menu.html?page=raw_spiralsquid",
      alt: "Raw Spiralsquid",
      chance: "60%",
      amount: "1-2"
    },
    ],
    stats: {
     xp: "5-10",
     hp: 8,
    },
    extra: "Tip1"
  },
  {
    name: "Spittleshrub",
    imga: "mob_png/spittleshrub2d.png",
    imgb: "mob_gif/spittleshrub.gif",
    description: "Spittleshrub is a creature disguise as a bush. Their bite really hurt but the berries on their head are ediable <br> <br> Found in Layer 1 & 2 & 4",
    grade: "★★",
    details: "Drops:",
    drops: [
    {
      src: "../items/vanilla/images/glow_berries.png",
      href: "../recipe/item_list/glow_berries/glow_berries.html",
      alt: "Glow Berries",
      chance: "60%",
      amount: "1-2"
    },
    {
      src: "../items/mob_drops/images/plant_matter.png",
      href: "/recipe/recipe_menu.html?page=plant_matter",
      alt: "Plant Matter",
      chance: "60%",
      amount: "1-3"
    },
    {
      src: "../items/mob_drops/images/spittleshrub_root.png",
      href: "/recipe/recipe_menu.html?page=spittleshrub_root",
      alt: "Spittleshrub Root",
      chance: "20%",
      amount: "1"
    },
    {
      src: "../items/vanilla/images/oak_sapling.png",
      href: "../recipe/item_list/oak_sapling/oak_sapling.html",
      alt: "Oak Sapling",
      chance: "3.5%",
      amount: "1"
    },
    {
      src: "../items/vanilla/images/spruce_sapling.png",
      href: "../recipe/item_list/spruce_sapling/spruce_sapling.html",
      alt: "Spruce Sapling",
      chance: "3.5%",
      amount: "1"
    },
    {
      src: "../items/vanilla/images/jungle_sapling.png",
      href: "../recipe/item_list/jungle_sapling/jungle_sapling.html",
      alt: "Jungle Sapling",
      chance: "3.5%",
      amount: "1"
    },
    {
      src: "../items/vanilla/images/acacia_sapling.png",
      href: "../recipe/item_list/acacia_sapling/acacia_sapling.html",
      alt: "Acacia Sapling",
      chance: "3.5%",
      amount: "1"
    },
    {
      src: "../items/vanilla/images/dark_oak_sapling.png",
      href: "../recipe/item_list/dark_oak_sapling/dark_oak_sapling.html",
      alt: "Dark Oak Sapling",
      chance: "3.5%",
      amount: "1"
    },
    ],
    stats: {
     xp: "20-35",
     hp: 20,
    },
    extra: "Tip1"
  },
  {
    name: "Stinger",
    imga: "mob_png/stinger2d.png",
    imgb: "mob_gif/stinger.gif",
    description: "The Stinger is a common bug, live around L2 to L5. Their stings are poisonous <br> <br> Found in Layer 2 & 4 & 5",
    grade: "★",
    details: "Drops:",
    drops: [
    {
      src: "../items/mob_drops/images/stinger_wing.png",
      href: "/recipe/recipe_menu.html?page=stinger_wing",
      alt: "Stinger Wing",
      chance: "50%",
      amount: "1"
    },
    {
      src: "../items/mob_drops/images/stinger_horn.png",
      href: "/recipe/recipe_menu.html?page=stinger_horn",
      alt: "Stinger Horn",
      chance: "20%",
      amount: "1"
    },
    ],
    stats: {
     xp: "5-15",
     hp: 16,
    },
    extra: "Tip1"
  },
  {
    name: "Swarmshocker",
    imga: "mob_png/swarmshocker2d.png",
    imgb: "mob_gif/swarmshocker.gif",
    description: "Considered as the less dangerous variant of the swarmshocker, their shock still deadly enough to shock someone to death <br> <br> Found in Layer 4 & 5",
    grade: "★",
    details: "Drops:",
    drops: [
    {
      src: "../items/mob_drops/images/swarmshocker_charged_powder.png",
      href: "/recipe/recipe_menu.html?page=swarmshocker_charged_powder",
      alt: "Swarmshocker Charged Powder",
      chance: "30%",
      amount: "1-2"
    },
    ],
    stats: {
     xp: "5-15",
     hp: 20,
    },
    extra: "Tip1"
  },
  {
    name: "Tachikatana",
    imga: "mob_png/tachikatana2d.png",
    imgb: "mob_gif/tachikatana.gif",
    description: "A giant lobster-like creature. Their claws can produce a huge shockwave, blow eveything out of its way. Their claw also considered as a precious material, can handle the pressure of the deep sea. Their meat taste pretty good not gonna lie. <br> <br> Found in Layer 4 & 5",
    grade: "★",
    details: "Drops:",
    drops: [
    {
      src: "../items/mob_drops/images/tachikatana_leg.png",
      href: "/recipe/recipe_menu.html?page=tachikatana_leg",
      alt: "Tachikatana Leg",
      chance: "80%",
      amount: "1-2"
    },
    {
      src: "../items/mob_drops/images/tachikatana_claw.png",
      href: "/recipe/recipe_menu.html?page=tachikatana_claw",
      alt: "Tachikatana Claw",
      chance: "80%",
      amount: "1-2"
    },
    {
      src: "../items/mob_drops/images/tachikatana_scale.png",
      href: "/recipe/recipe_menu.html?page=tachikatana_scale",
      alt: "Tachikatana Scale",
      chance: "80%",
      amount: "2-8"
    },
    ],
    stats: {
     xp: "100-250",
     hp: 180,
    },
    extra: "Tip1"
  },
  {
    name: "Uibuta",
    imga: "mob_png/uibuta2d.png",
    imgb: "mob_gif/uibuta.gif",
    description: "A hippo alike mob, their fang is hard as hell and their bite hurt so bad. Even though their tough skin, their meat taste really good. <br> <br> Found in Layer 4",
    grade: "★",
    details: "Drops:",
    drops: [
    {
      src: "../items/mob_drops/images/uibuta_meat_raw.png",
      href: "/recipe/recipe_menu.html?page=raw_uibuta_meat",
      alt: "Raw Uibuta Meat",
      chance: "100%",
      amount: "2-5"
    },
    {
      src: "../items/mob_drops/images/uibuta_tooth.png",
      href: "/recipe/recipe_menu.html?page=uibuta_tooth",
      alt: "Uibuta Tooth",
      chance: "75%",
      amount: "1-3"
    },
    ],
    stats: {
     xp: "65-95",
     hp: 70,
    },
    extra: "Tip1"
  },
  {
    name: "Abyssal Snail",
    imga: "mob_png/abyssal_snail2d.png",
    imgb: "mob_gif/abyssal_snail.gif",
    description: "A snail-like creature, their shell is pretty useful for some jewelry and their gunks can be used for a kind of addictive substance. (DO NOT CONSUME). <br> <br> Found in Layer 5",
    grade: "harmless",
    details: "Drops:",
    drops: [
    {
      src: "../items/mob_drops/images/abyssal_snail_shell.png",
      href: "/recipe/recipe_menu.html?page=abyssal_snail_shell",
      alt: "Abyssal Snail Shell",
      chance: "70%",
      amount: "1"
    },
    {
      src: "../items/mob_drops/images/abyssal_snail_gunk.png",
      href: "/recipe/recipe_menu.html?page=abyssal_snail_gunk",
      alt: "Abyssal Snail Gunk",
      chance: "70%",
      amount: "1-2"
    },
    ],
    stats: {
     xp: "25-40",
     hp: 40,
    },
    extra: "Tip1"
  },
  {
    name: "Ashimite",
    imga: "mob_png/ashimite2d.png",
    imgb: "mob_gif/ashimite.gif",
    description: "A deer mob, their legs evolve for running in snow biome. Their meat is pretty good and their fur is good source of wools. <br> <br> Found in Layer 5",
    grade: "harmless",
    details: "Drops:",
    drops: [
    {
      src: "../items/mob_drops/images/ashimite_meat_raw.png",
      href: "/recipe/recipe_menu.html?page=raw_ashimite_meat",
      alt: "Raw Ashimite Meat",
      chance: "60%",
      amount: "1-2"
    },
    {
      src: "../items/mob_drops/images/ashimite_hoof.png",
      href: "/recipe/recipe_menu.html?page=ashimite_hoof",
      alt: "Ashimite Hoof",
      chance: "30%",
      amount: "1-2"
    },
    {
      src: "../items/mob_drops/images/ashimite_antlers.png",
      href: "/recipe/recipe_menu.html?page=ashimite_antlers",
      alt: "Ashimite Antlers",
      chance: "30%",
      amount: "1"
    },
    {
      src: "../items/vanilla/images/light_blue_wool.png",
      href: "../recipe/item_list/light_blue_wool/light_blue_wool.html",
      alt: "Light Blue Wool",
      chance: "60%",
      amount: "1-2"
    },
    ],
    stats: {
     xp: "5-10",
     hp: 35,
    },
    extra: "Tip1"
  },
  {
    name: "Chikyuoebi",
    imga: "mob_png/chikyuoebi2d.png",
    imgb: "mob_gif/chikyuoebi.gif",
    description: "A lobster-like creature, they bury themself into the ground, waiting for unfortunate delver to step on them then spike them with its claw, crushing entire body of the victims. <br> <br> Found in Layer 5",
    grade: "★",
    details: "Drops:",
    drops: [
    {
      src: "../items/mob_drops/images/chikyuoebi_raw.png",
      href: "/recipe/recipe_menu.html?page=raw_chikyuoebi",
      alt: "Raw Chikyuoebi",
      chance: "60%",
      amount: "1-2"
    },
    {
      src: "../items/vanilla/images/soul_sand.png",
      href: "../recipe/item_list/soul_sand/soul_sand.html",
      alt: "Soul Sand",
      chance: "60%",
      amount: "2-4"
    },
    {
      src: "../items/vanilla/images/diamond.png",
      href: "../recipe/item_list/diamond/diamond.html",
      alt: "Diamond",
      chance: "5%",
      amount: "1"
    },
    ],
    stats: {
     xp: "70-115",
     hp: 85,
    },
    extra: "Tip1"
  },
  {
    name: "Demonfish",
    imga: "mob_png/demonfish2d.png",
    imgb: "mob_gif/demonfish.gif",
    description: "A fish mob, they quite agressive ( grrrrr ). <br> <br> Found in Layer 5",
    grade: "★",
    details: "Drops:",
    drops: [
    {
      src: "../items/mob_drops/images/demonfish_raw.png",
      href: "/recipe/recipe_menu.html?page=raw_demonfish",
      alt: "Raw Demonfish",
      chance: "60%",
      amount: "1-2"
    },
    {
      src: "../items/vanilla/images/prismarine_shard.png",
      href: "../recipe/item_list/prismarine_shard/prismarine_shard.html",
      alt: "Prismarine Shard",
      chance: "90%",
      amount: "1-8"
    },
    ],
    stats: {
     xp: "5-15",
     hp: 30,
    },
    extra: "Tip1"
  },
  {
    name: "Edusan",
    imga: "mob_png/edusan2d.png",
    imgb: "mob_gif/edusan.gif",
    description: "A big fish, their face look quite scary but they are passive. Their scales can be used for some magic thing. <br> <br> Found in Layer 5",
    grade: "harmless",
    details: "Drops:",
    drops: [
    {
      src: "../items/mob_drops/images/edusan_scale.png",
      href: "/recipe/recipe_menu.html?page=edusan_scale",
      alt: "Edusan Scale",
      chance: "100%",
      amount: "4-8"
    },
    {
      src: "../items/mob_drops/images/edusan_whisker.png",
      href: "/recipe/recipe_menu.html?page=edusan_whisker",
      alt: "Edusan Whisker",
      chance: "20%",
      amount: "1"
    },
    ],
    stats: {
     xp: "35-50",
     hp: 80,
    },
    extra: "Tip1"
  },
  {
    name: "Hagamizukin",
    imga: "mob_png/hagamizukin2d.png",
    imgb: "mob_gif/hagamizukin.gif",
    description: "A Fishy Mob, their ugly face represent their personality lol, bite really hurt but their meat is quite delicious. <br> <br> Found in Layer 4 & 5",
    grade: "★",
    details: "Drops:",
    drops: [
    {
      src: "../items/vanilla/images/dried_kelp.png",
      href: "../recipe/item_list/dried_kelp/dried_kelp.html",
      alt: "Dried Kelp",
      chance: "70%",
      amount: "1-3"
    },
    {
      src: "../items/mob_drops/images/hagamizukin_tooth.png",
      href: "/recipe/recipe_menu.html?page=hagamizukin_tooth",
      alt: "Hagamizukin Tooth",
      chance: "60%",
      amount: "1-2"
    },
    {
      src: "../items/mob_drops/images/hagamizukin_raw.png",
      href: "/recipe/recipe_menu.html?page=raw_hagamizukin",
      alt: "Raw Hagamizukin",
      chance: "60%",
      amount: "1-2"
    },
    ],
    stats: {
     xp: "15-20",
     hp: 50,
    },
    extra: "Tip1"
  },
  {
    name: "Hashofu",
    imga: "mob_png/hashofu2d.png",
    imgb: "mob_gif/hashofu.gif",
    description: "A avian creature, I heard legends said they are some kind of phoenix and their body basically burning ash. Their eyes can be use for some ancient forging template. <br> <br> Found in Layer 4 & 5",
    grade: "harmless",
    details: "Drops:",
    drops: [
    {
      src: "../items/mob_drops/images/hashofu_tail_raw.png",
      href: "/recipe/recipe_menu.html?page=hashofu_tail",
      alt: "Raw Hashofu Tail",
      chance: "80%",
      amount: "1"
    },
    {
      src: "../items/mob_drops/images/hashofu_eye.png",
      href: "/recipe/recipe_menu.html?page=hashofu_eye",
      alt: "Hashofu Eye",
      chance: "65%",
      amount: "2"
    },
    {
      src: "../items/mob_drops/images/hashofu_body.png",
      href: "/recipe/recipe_menu.html?page=hashofu_body",
      alt: "Hashofu Body",
      chance: "100%",
      amount: "1-3"
    },
    ],
    stats: {
     xp: "12-18",
     hp: 20,
    },
    extra: "Tip1"
  },
  {
    name: "Hisomukuro",
    imga: "mob_png/hisomukuro2d.png",
    imgb: "mob_gif/hisomukuro.gif",
    description: "A giant fish, their body is not cover in flesh but some kind of bones instead. They can tune their bone to shoot a shockwave that cause some brain damage, lead to temporary blindness and slowness. <br> <br> Found in Layer 5",
    grade: "★",
    details: "Drops:",
    drops: [
    {
      src: "../items/vanilla/images/bone.png",
      href: "../recipe/item_list/bone/bone.html",
      alt: "Bone",
      chance: "100%",
      amount: "0-5"
    },
    {
      src: "../items/mob_drops/images/hisomukuro_rib.png",
      href: "/recipe/recipe_menu.html?page=hisomukuro_rib",
      alt: "Hisomukuro Rib",
      chance: "70%",
      amount: "2-6"
    },
    ],
    stats: {
     xp: "20-30",
     hp: 80,
    },
    extra: "Tip1"
  },
  {
    name: "Horncrier",
    imga: "mob_png/horncrier2d.png",
    imgb: "mob_gif/horncrier.gif",
    description: "A varient of Woodcrier, their horn is much harder and they are much faster. Pretty deadly. <br> <br> Found in Layer 4 & 5 ",
    grade: "★",
    details: "Drops:",
    drops: [
    {
      src: "../items/mob_drops/images/horncrier_horn.png",
      href: "/recipe/recipe_menu.html?page=horncrier_horn",
      alt: "Horncrier Horn (Ponder)",
      chance: "0.1%",
      amount: "1"
    },
    {
      src: "../items/mob_drops/images/horncrier_horn.png",
      href: "/recipe/recipe_menu.html?page=horncrier_horn",
      alt: "Horncrier Horn (Sing)",
      chance: "0.1%",
      amount: "1"
    },
    {
      src: "../items/mob_drops/images/horncrier_horn.png",
      href: "/recipe/recipe_menu.html?page=horncrier_horn",
      alt: "Horncrier Horn (Seek)",
      chance: "0.1%",
      amount: "1"
    },
    {
      src: "../items/mob_drops/images/horncrier_horn.png",
      href: "/recipe/recipe_menu.html?page=horncrier_horn",
      alt: "Horncrier Horn (Feel)",
      chance: "0.1%",
      amount: "1"
    },
    {
      src: "../items/mob_drops/images/horncrier_horn.png",
      href: "/recipe/recipe_menu.html?page=horncrier_horn",
      alt: "Horncrier Horn (Admire)",
      chance: "0.1%",
      amount: "1"
    },
    {
      src: "../items/mob_drops/images/horncrier_horn.png",
      href: "/recipe/recipe_menu.html?page=horncrier_horn",
      alt: "Horncrier Horn (Call)",
      chance: "0.1%",
      amount: "1"
    },
    {
      src: "../items/mob_drops/images/horncrier_horn.png",
      href: "/recipe/recipe_menu.html?page=horncrier_horn",
      alt: "Horncrier Horn (Yearn)",
      chance: "0.1%",
      amount: "1"
    },
    {
      src: "../items/mob_drops/images/horncrier_horn.png",
      href: "/recipe/recipe_menu.html?page=horncrier_horn",
      alt: "Horncrier Horn (Dream)",
      chance: "0.1%",
      amount: "1"
    },
    {
      src: "../items/vanilla/images/white_wool.png",
      href: "../recipe/item_list/white_wool/white_wool.html",
      alt: "White Wool",
      chance: "60%",
      amount: "1-3"
    },
    ],
    stats: {
     xp: "30-60",
     hp: 60,
    },
    extra: "Tip1"
  },
  {
    name: "Ikonia",
    imga: "mob_png/ikonia2d.png",
    imgb: "mob_gif/ikonia.gif",
    description: "A big camel creature, Their plate on their back is made by some mysterious material with steel. Legends said their plate can used for variou heat weapon such as flamethrower. <br> <br> Found in Layer 5",
    grade: "harmless",
    details: "Drops:",
    drops: [
    {
      src: "../items/mob_drops/images/ikonia_plate.png",
      href: "/recipe/recipe_menu.html?page=ikonia_plate",
      alt: "Ikonia Plate",
      chance: "50%",
      amount: "1"
    },
    ],
    stats: {
     xp: "20-25",
     hp: 160,
    },
    extra: "Tip1"
  },
  {
    name: "Kagi-Tachikiri",
    imga: "mob_png/kagi_tachikiri2d.png",
    imgb: "mob_gif/kagi_tachikiri.gif",
    description: "A flying insect with sharp sting. Their sting affect right into nervous system, cause severe pain, but if used correctly, it can be used for high level fof mining elixir. <br> <br> Found in Layer 5",
    grade: "★",
    details: "Drops:",
    drops: [
    {
      src: "../items/mob_drops/images/kagi_tachikiri_pincer.png",
      href: "/recipe/recipe_menu.html?page=kagi_tachikiri_pincer",
      alt: "Kagi Tachikiri Pincer",
      chance: "70%",
      amount: "1-2"
    },
    ],
    stats: {
     xp: "20-40",
     hp: 50,
    },
    extra: "Tip1"
  },
  {
    name: "Kuongatari",
    imga: "mob_png/kuongatari2d.png",
    imgb: "mob_gif/kuongatari.gif",
    description: "An insect mob, once it reach your body, they will lay their disgusting eggs inside you, and once those insects hatch, they will eat you from the inside out <br> <br> Found in Layer 4 & 5",
    grade: "★",
    details: "Drops:",
    drops: [
    {
      src: "../items/mob_drops/images/kuongatari_juice.png",
      href: "/recipe/recipe_menu.html?page=kuongatari_juice",
      alt: "Kuongatari Juice",
      chance: "30%",
      amount: "1"
    },
    {
      src: "../items/mob_drops/images/kuongatari_silk.png",
      href: "/recipe/recipe_menu.html?page=kuongatari_silk",
      alt: "Kuongatari Silk",
      chance: "30%",
      amount: "1"
    },
    {
      src: "../items/mob_drops/images/kuongatari_abdomen.png",
      href: "/recipe/recipe_menu.html?page=kuongatari_abdomen",
      alt: "Raw Kuongatari Abdomen",
      chance: "35%",
      amount: "1-2"
    },
    ],
    stats: {
     xp: "15-25",
     hp: 30,
    },
    extra: "Tip1"
  },
  {
    name: "Baby Kuongatari",
    imga: "mob_png/kuongatari2d.png",
    imgb: "mob_gif/kuongatari.gif",
    description: "Pluh",
    grade: "★",
    details: "Drops:",
    drops: [
    {
      src: "../items/mob_drops/images/kuongatari_juice.png",
      href: "/recipe/recipe_menu.html?page=kuongatari_juice",
      alt: "Kuongatari Juice",
      chance: "4%",
      amount: "1"
    },
    {
      src: "../items/mob_drops/images/kuongatari_silk.png",
      href: "/recipe/recipe_menu.html?page=kuongatari_silk",
      alt: "Kuongatari Silk",
      chance: "10%",
      amount: "1"
    },
    {
      src: "../items/mob_drops/images/kuongatari_abdomen.png",
      href: "/recipe/recipe_menu.html?page=kuongatari_abdomen",
      alt: "Raw Kuongatari Abdomen",
      chance: "30%",
      amount: "1"
    },
    ],
    stats: {
     xp: "5-15",
     hp: 30,
    },
    extra: "Tip1"
  },
  {
    name: "Makihige",
    imga: "mob_png/makihige2d.png",
    imgb: "mob_gif/makihige.gif",
    description: "A giant octopus-like creature, their shell evolved to be able to withstand the pressure in deeper layer, therefor their shell is necessary for some ancient forging technique. And their tentacle and ink sac can be used in useful things. <br> <br> Found in Layer 4 & 5",
    grade: "harmless",
    details: "Drops:",
    drops: [
    {
      src: "../items/mob_drops/images/makihige_ink_sac.png",
      href: "/recipe/recipe_menu.html?page=makihige_ink_sac",
      alt: "Makihige Ink Sac",
      chance: "60%",
      amount: "1-2"
    },
    {
      src: "../items/mob_drops/images/makihige_shell.png",
      href: "/recipe/recipe_menu.html?page=makihige_shell",
      alt: "Makihige Shell",
      chance: "30%",
      amount: "1-2"
    },
    {
      src: "../items/mob_drops/images/makihige_tentacle.png",
      href: "/recipe/recipe_menu.html?page=makihige_tentacle",
      alt: "Makihige Tentacle",
      chance: "40%",
      amount: "1-2"
    },
    ],
    stats: {
     xp: "15-30",
     hp: 60,
    },
    extra: "Tip1"
  },
  {
    name: "Octoliar",
    imga: "mob_png/octoliar2d.png",
    imgb: "mob_gif/octoliar.gif",
    description: "A hybrid of squid and spider, they can shoot projectiles that cause blindness, nause and bleeding with poison. <br> <br> Found in Layer 5",
    grade: "★",
    details: "Drops:",
    drops: [
    {
      src: "../items/mob_drops/images/octoliar_ink_sac.png",
      href: "/recipe/recipe_menu.html?page=octoliar_ink_sac",
      alt: "Octoliar Ink Sac",
      chance: "60%",
      amount: "1-2"
    },
    {
      src: "../items/mob_drops/images/octoliar_tentacle.png",
      href: "/recipe/recipe_menu.html?page=octoliar_tentacle",
      alt: "Octoliar Tentacle",
      chance: "60%",
      amount: "1-2"
    },
    ],
    stats: {
     xp: "5-15",
     hp: 80,
    },
    extra: "Tip1"
  },
  {
    name: "Onitsuchi",
    imga: "mob_png/onitsuchi2d.png",
    imgb: "mob_gif/onitsuchi.gif",
    description: "A avian creature, Their peak is even harder than the hammerbeak beak, you might able to use them for a substitute for flint lol :D <br> <br> Found in Layer 4 & 5",
    grade: "★",
    details: "Drops:",
    drops: [
    {
      src: "../items/mob_drops/images/onitsuchi_wing_raw.png",
      href: "/recipe/recipe_menu.html?page=raw_onitsuchi_wing",
      alt: "Raw Onitsuchi Wing",
      chance: "100%",
      amount: "1-3"
    },
    {
      src: "../items/mob_drops/images/onitsuchi_skull.png",
      href: "/recipe/recipe_menu.html?page=onitsuchi_skull",
      alt: "Onitsuchi Skull",
      chance: "60%",
      amount: "1"
    },
    {
      src: "../items/mob_drops/images/onitsuchi_feather.png",
      href: "/recipe/recipe_menu.html?page=onitsuchi_feather",
      alt: "Onitsuchi Feather",
      chance: "100%",
      amount: "1-3"
    },
    {
      src: "../items/mob_drops/images/onitsuchi_egg.png",
      href: "/recipe/recipe_menu.html?page=onitsuchi_egg",
      alt: "Onitsuchi Egg",
      chance: "50%",
      amount: "1-2"
    },
    ],
    stats: {
     xp: "60-80",
     hp: 50,
    },
    extra: "Tip1"
  },
  {
    name: "Shiratsubi",
    imga: "mob_png/shiratsubi2d.png",
    imgb: "mob_gif/shiratsubi.gif",
    description: "Another varient of Yomotsubi, the shiver of Layer 5 combine with their wind attack make their attack deliver a chilling effect, which can cause slowness and other negative effect. <br> <br> Found in Layer 5",
    grade: "★",
    details: "Drops:",
    drops: [
    {
      src: "../items/mob_drops/images/shiratsubi_wing.png",
      href: "/recipe/recipe_menu.html?page=shiratsubi_wing",
      alt: "Shiratsubi Wing",
      chance: "60%",
      amount: "1-2"
    },
    {
      src: "../items/mob_drops/images/yomotsubi_abdomen_raw.png",
      href: "/recipe/recipe_menu.html?page=yomotsubi_abdomen",
      alt: "Raw Yomotsubi Abdomen",
      chance: "70%",
      amount: "1-2"
    },
    ],
    stats: {
     xp: "25-35",
     hp: 45,
    },
    extra: "Tip1"
  },
  {
    name: "Spikewalker",
    imga: "mob_png/spikewalker2d.png",
    imgb: "mob_gif/spikewalker.gif",
    description: "A hedgehog-like creature, their body is covered in sharp spikes and will curl up when threatened. <br> <br> Found in Layer 5",
    grade: "★",
    details: "Drops:",
    drops: [
    {
      src: "../items/mob_drops/images/spikewalker_spike.png",
      href: "/recipe/recipe_menu.html?page=spikewalker_spike",
      alt: "Spikewalker Spike",
      chance: "80%",
      amount: "1-3"
    },
    {
      src: "../items/mob_drops/images/spikewalker_meat.png",
      href: "/recipe/recipe_menu.html?page=spikewalker_meat",
      alt: "Spikewalker Meat",
      chance: "60%",
      amount: "1-2"
    },
    ],
    stats: {
     xp: "20-25",
     hp: 40,
    },
    extra: "Tip1"
  },
  {
    name: "Spore Manta",
    imga: "mob_png/sporemanta2d.png",
    imgb: "mob_gif/sporemanta.gif",
    description: "Pluh",
    grade: "★",
    details: "Drops:",
    drops: [
    {
      src: "../items/mob_drops/images/sporemanta_wing.png",
      href: "/recipe/recipe_menu.html?page=spore_manta_wing",
      alt: "Spore Manta Wing",
      chance: "50%",
      amount: "1-2"
    },
    {
      src: "../items/mob_drops/images/sporemanta_powder.png",
      href: "/recipe/recipe_menu.html?page=spore_manta_powder",
      alt: "Spore Manta Powder",
      chance: "70%",
      amount: "1-2"
    },
    ],
    stats: {
     xp: "5-15",
     hp: 30,
    },
    extra: "Tip1"
  },
  {
    name: "Stinger",
    imga: "mob_png/stinger2d.png",
    imgb: "mob_gif/stinger.gif",
    description: "The Stinger is a common bug, live around L2 to L5. Their stings are poisonous <br> <br> Found in Layer 2 & 4 & 5",
    grade: "★",
    details: "Drops:",
    drops: [
    {
      src: "../items/mob_drops/images/stinger_wing.png",
      href: "/recipe/recipe_menu.html?page=stinger_wing",
      alt: "Stinger Wing",
      chance: "50%",
      amount: "1"
    },
    {
      src: "../items/mob_drops/images/stinger_horn.png",
      href: "/recipe/recipe_menu.html?page=stinger_horn",
      alt: "Stinger Horn",
      chance: "20%",
      amount: "1"
    },
    ],
    stats: {
     xp: "5-15",
     hp: 16,
    },
    extra: "Tip1"
  },
  {
    name: "Stingerhead",
    imga: "mob_png/stingerhead2d.png",
    imgb: "mob_gif/stingerhead.gif",
    description: "A big scorpion creature but have 7 tails instead. They are considered the worst thing can happen to a delver, worse than the orb piercer somehow. Their hard shell can be used for some ancient forging material for more durability. Their eyes also contains a critical material for the template. Legends said that you need to cover yourself in burnt dried vomit in order to avoid these creature. <br> <br> Found in the nest in some specific location in Layer 5",
    grade: "★",
    details: "Drops:",
    drops: [
    {
      src: "../items/mob_drops/images/stingerhead_scale.png",
      href: "/recipe/recipe_menu.html?page=stingerhead_scale",
      alt: "Stingerhead Scale",
      chance: "100%",
      amount: "1-2"
    },
    {
      src: "../items/mob_drops/images/stingerhead_flesh.png",
      href: "/recipe/recipe_menu.html?page=stingerhead_flesh",
      alt: "Stingerhead Flesh",
      chance: "100%",
      amount: "1-2"
    },
    {
      src: "../items/mob_drops/images/stingerhead_eye.png",
      href: "/recipe/recipe_menu.html?page=stingerhead_eye",
      alt: "Stingerhead Eye",
      chance: "40%",
      amount: "1-2"
    },
    ],
    stats: {
     xp: "100-250",
     hp: 260,
    },
    extra: "Tip1"
  },
  {
    name: "Swarmhoarder",
    imga: "mob_png/swarmhoarder2d.png",
    imgb: "mob_gif/swarmhoarder.gif",
    description: "A big jelly fish, this guy is dangerous not just with shocking power but also the ability to duplicate itself to 2 swarmshocker when they are dead <br> <br> Found in Layer 5",
    grade: "★★★★",
    details: "Drops:",
    drops: [
    {
      src: "../items/mob_drops/images/swarmshocker_charged_powder.png",
      href: "/recipe/recipe_menu.html?page=swarmshocker_charged_powder",
      alt: "Swarmshocker Charged Powder",
      chance: "60%",
      amount: "1-2"
    },
    {
      src: "../items/mob_drops/images/swarmshocker_jelly.png",
      href: "/recipe/recipe_menu.html?page=swarmhoarder_jelly",
      alt: "Swarmshocker Jelly",
      chance: "60%",
      amount: "1-2"
    },
    {
      src: "../items/vanilla/images/soul_sand.png",
      href: "../recipe/item_list/soul_sand/soul_sand.html",
      alt: "Soul Sand",
      chance: "100%",
      amount: "1"
    },
    ],
    stats: {
     xp: "20-35",
     hp: 70,
    },
    extra: "Tip1"
  },
  {
    name: "Swarmshocker",
    imga: "mob_png/swarmshocker2d.png",
    imgb: "mob_gif/swarmshocker.gif",
    description: "Considered as the less dangerous variant of the swarmshocker, their shock still deadly enough to shock someone to death <br> <br> Found in Layer 4 & 5",
    grade: "★",
    details: "Drops:",
    drops: [
    {
      src: "../items/mob_drops/images/swarmshocker_charged_powder.png",
      href: "/recipe/recipe_menu.html?page=swarmshocker_charged_powder",
      alt: "Swarmshocker Charged Powder",
      chance: "30%",
      amount: "1-2"
    },
    ],
    stats: {
     xp: "5-15",
     hp: 20,
    },
    extra: "Tip1"
  },
  {
    name: "Tachikatana",
    imga: "mob_png/tachikatana2d.png",
    imgb: "mob_gif/tachikatana.gif",
    description: "A giant lobster-like creature. Their claws can produce a huge shockwave, blow eveything out of its way. Their claw also considered as a precious material, can handle the pressure of the deep sea. <br> <br> Found in Layer 4 & 5",
    grade: "★",
    details: "Drops:",
    drops: [
    {
      src: "../items/mob_drops/images/tachikatana_leg.png",
      href: "/recipe/recipe_menu.html?page=tachikatana_leg",
      alt: "Tachikatana Leg",
      chance: "80%",
      amount: "1-2"
    },
    {
      src: "../items/mob_drops/images/tachikatana_claw.png",
      href: "/recipe/recipe_menu.html?page=tachikatana_claw",
      alt: "Tachikatana Claw",
      chance: "80%",
      amount: "1-2"
    },
    {
      src: "../items/mob_drops/images/tachikatana_scale.png",
      href: "/recipe/recipe_menu.html?page=tachikatana_scale",
      alt: "Tachikatana Scale",
      chance: "80%",
      amount: "2-8"
    },
    ],
    stats: {
     xp: "100-250",
     hp: 180,
    },
    extra: "Tip1"
  },
  {
    name: "Titanjaw",
    imga: "mob_png/titanjaw2d.png",
    imgb: "mob_gif/titanjaw.gif",
    description: "A giant mob ( i cant identify what is it look like ), stay in high pressure sea make their shell freaking hard and somehow able to grant the user water breathing through those shell. Their cover with some mysterious explosive pearls too, but never saw them using those for pratical attack. <br> <br> Found in Layer 5",
    grade: "★",
    details: "Drops:",
    drops: [
    {
      src: "../items/mob_drops/images/titanjaw_pearl.png",
      href: "/recipe/recipe_menu.html?page=titanjaw_pearl",
      alt: "Titanjaw Pearl",
      chance: "20%",
      amount: "1"
    },
    {
      src: "../items/mob_drops/images/titanjaw_scale.png",
      href: "/recipe/recipe_menu.html?page=titanjaw_scale",
      alt: "Titanjaw Scale",
      chance: "60%",
      amount: "1-2"
    },
    ],
    stats: {
     xp: "20-25",
     hp: 60,
    },
    extra: "Tip1"
  },
  {
    name: "Uibuta",
    imga: "mob_png/uibuta2d.png",
    imgb: "mob_gif/uibuta.gif",
    description: "Pluh",
    grade: "★",
    details: "Drops:",
    drops: [
    {
      src: "../items/mob_drops/images/uibuta_meat_raw.png",
      href: "/recipe/recipe_menu.html?page=raw_uibuta_meat",
      alt: "Raw Uibuta Meat",
      chance: "100%",
      amount: "2-5"
    },
    {
      src: "../items/mob_drops/images/uibuta_tooth.png",
      href: "/recipe/recipe_menu.html?page=uibuta_tooth",
      alt: "Uibuta Tooth",
      chance: "75%",
      amount: "1-3"
    },
    ],
    stats: {
     xp: "65-95",
     hp: 70,
    },
    extra: "Tip1"
  },
  {
    name: "Virinsipede",
    imga: "mob_png/virinsipede2d.png",
    imgb: "mob_gif/virinsipede.gif",
    description: "Consider as a better version of Rinsipede, Their bite is poisonous and cause a lot of dmg. Stay in a cold biome make their body evolvef to stay warm, especially their legs <br> <br> Found in Layer 5 ",
    grade: "★",
    details: "Drops:",
    drops: [
    {
      src: "../items/mob_drops/images/virinsipede_segments.png",
      href: "/recipe/recipe_menu.html?page=virinsipede_segments",
      alt: "Virinsipede Segments",
      chance: "80%",
      amount: "4-10"
    },
    {
      src: "../items/mob_drops/images/virinsipede_antlers.png",
      href: "/recipe/recipe_menu.html?page=virinsipede_antlers",
      alt: "Virinsipede Antlers",
      chance: "30%",
      amount: "1-2"
    },
    ],
    stats: {
     xp: "15-25",
     hp: 150,
    },
    extra: "Tip1"
  },
];