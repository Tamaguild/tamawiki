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
        src: "icondrop/okibo_fur.png",
        href: "../recipe/item_list/okibo_fur/okibo_fur",
        alt: "Okibo Fur",
        chance: "60%",
        amount: "1-2"
      },
      { 
        src: "icondrop/raw_okibo_meat.png",
        href: "../recipe/item_list/okibo_meat/okibo_meat",
        alt: "Raw Okibo Meat",
        chance: "70%",
        amount: "1-2"
      }
     ],
     stats: {
       hp: 20,
       type: "Passive"
    },
      extra: `
      <div class="tip">
        <img class="tip-avatar" src="avatar/bigeyes.png" alt="Tip avatar"> 
        <div class="tip-box">
          Cutieeeeeee
        </div>
      </div>
    `
  },
]