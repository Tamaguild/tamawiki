export const DATA = {
  player: './models/player_model.glb',
  playerScale: 1.5,

  hats: [
    {
      name: "Tama Hat",
      model: './models/tama_hat.glb',

      scale: 1.5,
      position: { x: -0.75, y: 1.25, z: -1 },
      rotation: { x: 0, y: 0, z: 0 }
    },
    {
      name: "Cool Hat",
      model: './models/feather_hat_black.glb',

      scale: 1.2,
      position: { x: 0.7, y: 0.8, z: 1.0 },
      rotation: { x: 0, y: 0, z: 0 }
    }
  ],

  backpacks: [
    {
      name: "Default Backpack",
      model: './models/default_backpack.glb',

      scale: 1.5,
      position: { x: 0.75, y: 0.75, z: 1.1 },
      rotation: { x: 0, y: Math.PI, z: 0 }
    },
    {
      name: "Big Bag",
      model: './models/satchel.glb',

      scale: 1.8,
      position: { x: 0.7, y: 0.6, z: 1.2 },
      rotation: { x: 0, y: Math.PI, z: 0 }
    }
  ]
};