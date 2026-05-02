// priority: 0

Platform.mods.kubejs.name = 'Phase Coffee™'

StartupEvents.registry("fluid", event => {
    event.create("phase_coffee")
        .thinTexture(0x26110D)
        .bucketColor(0x26110D)
        .displayName('Phase Coffee™')

    event.create("phase_latte")
        .thinTexture(0x6F4E37)
        .bucketColor(0x6F4E37)
        .displayName('Phase Latte™')

    event.create("phase_mocha")
        .thinTexture(0x61432e)
        .bucketColor(0x604020)
        .displayName('Phase Mocha™')

    event.create("phase_coffee_awkward")
        .thinTexture(0x260d0d)
        .bucketColor(0x260d0d)
        .displayName('Awkward Phase Coffee™')
})

StartupEvents.registry("item", event => {
    event.create('pumpkin_spice')
        .displayName('Pumpkin Spice')
        .texture("kubejs:item/brown_dye")
        .tooltip("§o§8Does not actually contain any pumpkin")

    event.create("sakana_pasta")
        .displayName("Sakana's Pasta")
        .texture("kubejs:item/squid_ink_pasta")
        .food(food => {
            food.hunger(20)
            food.saturation(20)
            food.effect("minecraft:nausea", 6000, 0, 1.0)
        })
})



// Visit the wiki for more info - https://kubejs.com/

console.info('Hello, World! (Loaded startup scripts)')

