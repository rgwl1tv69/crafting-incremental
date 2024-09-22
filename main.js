var money = 1000;
var pollution = 0;
var machines = [];
// format: [ItemName,Description,Cost,Sell/Buy,id]
var items = [
  ["Drill MK1","mines ores",250,"buy","drill"],
  ["Raw Copper","smelt me",2,"sell","copper_ore"],
  ["Raw Iron","smelt me",4,"sell","iron_ore"],
  ["Copper Ingot","very useful",5,"sell","copper_ingot"],
  ["Iron Ingot","very useful",10,"sell","iron_ingot"],
  ["Furnace","used to smelt ores",100,"buy","furnace"],
  ["Assembler","crafts things",10000,"buy","assembler"]
];
var production = [];
// format: [id,amount]
var inventory = [
  ["drill",2],
  ["assembler",1],
  ["furnace",1],
];
var function inventoryHasItem(id) {
  for (let i = 0; i < inventory.length; i++) {
    if (inventory[i][0] == id) {
      return i;
    }
  };
  return false;
};
var function tick() {
  
};
