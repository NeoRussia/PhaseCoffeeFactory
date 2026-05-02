const itemsToHide = [
    "minecraft:tipped_arrow",
    "sophisticatedstorage:inaccessible_slot",
    "alexsmobs:stink_ray_empty_inventory",
    "rftoolsutility:teleport_probe",
    "rftoolsutility:superharvestingtool",
    "rftoolsstorage:crafting_manager",
    "integratedtunnels:dummy_pickaxe",
    "create_new_age:incomplete_enchanted_golden_apple",
    "ravencoffee:coffee_beans_magma_ground",
    "tombstone:advancement_0",
    "tombstone:advancement_1",
    "tombstone:advancement_2",
    "tombstone:advancement_3",
    "tombstone:advancement_4",
    "tombstone:advancement_5",
    "tombstone:advancement_6",
    "tombstone:advancement_7",
    "tombstone:advancement_8",
    "tombstone:advancement_9",
    "tombstone:advancement_10",
    "tombstone:advancement_11",
    "tombstone:advancement_12",
    "tombstone:advancement_13",
    "tombstone:advancement_14",
    "tombstone:advancement_15",
    "immersiveengineering:fake_icon_birthday",
    "immersiveengineering:fake_icon_lucky",
    "immersiveengineering:fake_icon_drillbreak",
    "immersiveengineering:fake_icon_ravenholm",
    "immersiveengineering:fake_icon_fried",
    "immersiveengineering:fake_icon_bttf",
    "industrialforegoing:transporter",
    "biomesoplenty:liquid_null",
    "biomesoplenty:bop_icon",
    "mekanismgenerators:wind_generator",

    "croptopia:coffee",
    "croptopia:pumpkin_spice_latte",
    "croptopia:coffee_beans",
    "croptopia:coffee_seed",

    "farmersrespite:coffee_beans_sack",
    "farmersrespite:coffee_berries",
    "farmersrespite:wild_coffee_bush",
    "farmersrespite:coffee_beans",
    "farmersrespite:coffee_berries",

    "farmersrespite:coffee",
    "farmersrespite:long_coffee",
    "farmersrespite:strong_coffee",

    "thermal:coffee",
    "thermal:coffee_seeds",
    "thermal:coffee_block",


];

const fluidsToHide = [
    "coffeecraft:coffee_fluid",
    "farmersrespite:coffee",
    "farmersrespite:long_coffee",
    "farmersrespite:strong_coffee",
];

JEIEvents.hideItems(event => {
    for(const item of itemsToHide) {
        event.hide(item)
    }
});

JEIEvents.addItems(event => {
    event.add(Item.of('minecraft:carved_pumpkin', 1, {"CustomModelData": 28, display: {Name: '[{"text": "Kokoromo Memory", "italic": true, "color": "#ffb7ff"}]'}}))
    event.add(Item.of('minecraft:carved_pumpkin', 1, {"CustomModelData": 1, display: {Name: '[{"text": "Amanogawa Shiina", "italic": true, "color": "#c1bdfe"}]'}}))
    event.add(Item.of('minecraft:carved_pumpkin', 1, {"CustomModelData": 2, display: {Name: '[{"text": "Chiisaka Airi", "italic": true, "color": "#ad989f"}]'}}))
    event.add(Item.of('minecraft:carved_pumpkin', 1, {"CustomModelData": 3, display: {Name: '[{"text": "Dizzy Dokuro", "italic": true, "color": "#950c21"}]'}}))
    event.add(Item.of('minecraft:carved_pumpkin', 1, {"CustomModelData": 4, display: {Name: '[{"text": "Ember Amane", "italic": true, "color": "#9999ff"}]'}}))
    event.add(Item.of('minecraft:carved_pumpkin', 1, {"CustomModelData": 5, display: {Name: '[{"text": "Fujikura Uruka", "italic": true, "color": "#556996"}]'}}))
    event.add(Item.of('minecraft:carved_pumpkin', 1, {"CustomModelData": 6, display: {Name: '[{"text": "Hakushika Iori", "italic": true, "color": "#7bd7e4"}]'}}))
    event.add(Item.of('minecraft:carved_pumpkin', 1, {"CustomModelData": 7, display: {Name: '[{"text": "Himemiya Rie", "italic": true, "color": "#ffb5da"}]'}}))
    event.add(Item.of('minecraft:carved_pumpkin', 1, {"CustomModelData": 9, display: {Name: '[{"text": "Kaneko Lumi", "italic": true, "color": "#9889ea"}]'}}))
    event.add(Item.of('minecraft:carved_pumpkin', 1, {"CustomModelData": 8, display: {Name: '[{"text": "Jelly Hoshiumi", "italic": true, "color": "#cce8f6"}]'}}))
    event.add(Item.of('minecraft:carved_pumpkin', 1, {"CustomModelData": 10, display: {Name: '[{"text": "Komachi Panko", "italic": true, "color": "#b4d1cd"}]'}}))
    event.add(Item.of('minecraft:carved_pumpkin', 1, {"CustomModelData": 11, display: {Name: '[{"text": "Erina Makina", "italic": true, "color": "#1e65ab"}]'}}))
    event.add(Item.of('minecraft:carved_pumpkin', 1, {"CustomModelData": 12, display: {Name: '[{"text": "Pipkin Pippa", "italic": true, "color": "#fdd0e4"}]'}}))
    event.add(Item.of('minecraft:carved_pumpkin', 1, {"CustomModelData": 13, display: {Name: '[{"text": "Remilia Nephys", "italic": true, "color": "#d3223c"}]'}}))
    event.add(Item.of('minecraft:carved_pumpkin', 1, {"CustomModelData": 14, display: {Name: '[{"text": "Lia", "italic": true, "color": "#fe3892"}]'}}))
    event.add(Item.of('minecraft:carved_pumpkin', 1, {"CustomModelData": 15, display: {Name: '[{"text": "Shisui Michiru", "italic": true, "color": "#210063"}]'}}))
    event.add(Item.of('minecraft:carved_pumpkin', 1, {"CustomModelData": 16, display: {Name: '[{"text": "Tenma Maemi", "italic": true, "color": "#8979a0"}]'}}))
    event.add(Item.of('minecraft:carved_pumpkin', 1, {"CustomModelData": 17, display: {Name: '[{"text": "Utatane Nasa", "italic": true, "color": "#febb4d"}]'}}))
    event.add(Item.of('minecraft:carved_pumpkin', 1, {"CustomModelData": 19, display: {Name: '[{"text": "Eimi Isami", "italic": true, "color": "#ffa566"}]'}}))
    event.add(Item.of('minecraft:carved_pumpkin', 1, {"CustomModelData": 20, display: {Name: '[{"text": "Hikanari Hina", "italic": true, "color": "#9beef2"}]'}}))
    event.add(Item.of('minecraft:carved_pumpkin', 1, {"CustomModelData": 21, display: {Name: '[{"text": "Muu Muyu", "italic": true, "color": "#d4bcf1"}]'}}))
    event.add(Item.of('minecraft:carved_pumpkin', 1, {"CustomModelData": 22, display: {Name: '[{"text": "Runie Ruse", "italic": true, "color": "#f083c0"}]'}}))
    event.add(Item.of('minecraft:carved_pumpkin', 1, {"CustomModelData": 23, display: {Name: '[{"text": "Saya Sairroxs", "italic": true, "color": "#a74458"}]'}}))
    event.add(Item.of('minecraft:carved_pumpkin', 1, {"CustomModelData": 24, display: {Name: '[{"text": "Ayase Yuu", "italic": true, "color": "#192f60"}]'}}))
    event.add(Item.of('minecraft:carved_pumpkin', 1, {"CustomModelData": 25, display: {Name: '[{"text": "Gram Pico", "italic": true, "color": "#FFFFFF"}]'}}))
    event.add(Item.of('minecraft:carved_pumpkin', 1, {"CustomModelData": 26, display: {Name: '[{"text": "Kaminari Clara", "italic": true, "color": "#fff799"}]'}}))
    event.add(Item.of('minecraft:carved_pumpkin', 1, {"CustomModelData": 27, display: {Name: '[{"text": "Kannagi Loki", "italic": true, "color": "#b8282b"}]'}}))
});

JEIEvents.hideFluids(event => {
    for(const fluid of fluidsToHide) {
        event.hide(fluid)
    }
});