var money = 1000;
var pollution = 0;
// format: [id,amount]
var machines = [
  ["drill",1]
];
// format: [ItemName,Description,Cost,Sell/Buy,id]
var items = [
  ["Drill MK1","mines ores",250,"buy","drill"],
  ["Raw Copper","smelt me",1,"sell","copper_ore"],
  ["Raw Iron","smelt me",2,"sell","iron_ore"],
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
function listHasItem(id,list) {
  for (let i = 0; i < table.length; i++) {
    if (list[i][0] == id) {
      return i;
    }
  };
  return false;
};
function addItemToInventory(id,amount) {
  let index = listHasItem();
  if (!index) {
    inventory.push([id,amount]);
  } else {
    inventory[index][1] += amount
  }
};
function tick() {
  let booleans = [
    listHasItem("drill",machines)
  ]
  if (booleans[0]) {
    addItemToInventory("iron_ore",machines[booleans[0]][1]);
    addItemToInventory("copper_ore",machines[booleans[0]][1]);
  };
  document.getElementById("machines").innerHTML = machines
};
setInterval(tick,1000)
