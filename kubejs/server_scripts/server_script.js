// priority: 0
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

ServerEvents.recipes(event => {

    for(const item of itemsToHide) {
        event.remove({output: item})
        event.remove({input: item})
    }

    for(const fluid of fluidsToHide) {
        event.remove({output: fluid})
        event.remove({input: fluid})
    }

    event.remove({output:  "ravencoffee:coffee_beans"})

    // Coffee Cherries to Coffee beans
    event.custom({
        "type": "create:crushing",
        "ingredients": [
            {
                "item": "ravencoffee:coffee_cherries"
            }
        ],
        "results": [
            {
                "item": "ravencoffee:coffee_beans",
                "count": 1
            }
        ],
        "processingTime": 20
    })

    // Coffee Cherries to Coffee beans
    event.custom({
        "type": "create:mixing",
        "ingredients": [
            {
                "item": "ravencoffee:coffee_cherries"
            }
        ],
        "results": [
            {
                "item": "ravencoffee:coffee_beans"
            }
        ]
    })

    event.custom({
        "type": "farmersdelight:cutting",
        "ingredients": [
            {
                "item": "ravencoffee:coffee_cherries"
            }
        ],
        "result": [
            {
                "item": "ravencoffee:coffee_beans"
            }
        ],
        "tool": {
            "tag": "forge:tools/knives"
        }
    })

    // Roasted Coffee to ground Coffee
    event.custom({
        "type": "create:milling",
        "ingredients": [
            {
                "item": "ravencoffee:coffee_beans_roasted"
            }
        ],
        "results": [
            {
                "item": "ravencoffee:coffee_beans_roasted_ground",
                "count": 1,
                "chance": 0.5
            }
        ],
        "processingTime": 150
    })
    event.custom({
        "type": "create:crushing",
        "ingredients": [
            {
                "item": "ravencoffee:coffee_beans_roasted"
            }
        ],
        "results": [
            {
                "item": "ravencoffee:coffee_beans_roasted_ground",
                "count": 1
            }
        ],
        "processingTime": 150
    })

    // ground Coffee to Phase Coffee TM
    event.custom({
        "type": "create:mixing",
        "ingredients": [
            {
                "fluid": "minecraft:water", amount: 250
            },
            {
                "item": "ravencoffee:coffee_beans_roasted_ground", count: 2
            },
            {
                "item": "ravencoffee:coffee_beans_roasted_ground"
            }
        ],
        "results": [
            {
                "fluid": "kubejs:phase_coffee", amount: 250
            }
        ],
        "heatRequirement": "heated"
    })

    // Latte Recipe
    event.custom({
        "type": "create:mixing",
        "ingredients": [
            {
                "fluid": "kubejs:phase_coffee", amount: 250
            },
            {
                "fluid": "minecraft:milk", amount: 750
            }
        ],
        "results": [
            {
                "fluid": "kubejs:phase_latte", amount: 1000
            }
        ],
    })

    // Mocha Recipe
    event.custom({
        "type": "create:mixing",
        "ingredients": [
            {
                "fluid": "kubejs:phase_coffee", amount: 125
            },
            {
                "fluid": "create:chocolate", amount: 125
            },
            {
                "fluid": "minecraft:milk", amount: 375
            }
        ],
        "results": [
            {
                "fluid": "kubejs:phase_mocha", amount: 625
            }
        ],
    })
    event.custom({
        "type": "create:mixing",
        "ingredients": [
            {
                "fluid": "kubejs:phase_latte", amount: 500
            },
            {
                "fluid": "create:chocolate", amount: 125
            }
        ],
        "results": [
            {
                "fluid": "kubejs:phase_mocha", amount: 625
            }
        ],
    })

    // Awkward Coffee Recipe
    event.custom({
        "type": "create:mixing",
        "ingredients": [
            {
                "fluid": "kubejs:phase_coffee", amount: 1000
            },
            {
                "item": "minecraft:nether_wart"
            }
        ],
        "results": [
            {
                "fluid": "kubejs:phase_coffee_awkward", amount: 1000
            }
        ],
        "heatRequirement": "heated"
    })

    // Pumpkin Spice
    event.custom({
        "type": "create:mixing",
        "ingredients": [
            {
                "item": "croptopia:cinnamon"
            },
            {
                "item": "croptopia:cinnamon"
            },
            {
                "item": "croptopia:ginger"
            },
            {
                "item": "croptopia:nutmeg"
            },
        ],
        "results": [
            {
                "count": 4,
                "item": "kubejs:pumpkin_spice"
            }
        ]
    })

    // Whipping Cream
    event.custom({
        "type": "create:mixing",
        "ingredients": [
            {
                "item": "croptopia:vanilla"
            },
            {
                "item": "minecraft:sugar"
            },
            {
                "fluid": "minecraft:milk", amount: 100
            },
        ],
        "results": [
            {
                "count": 4,
                "item": "croptopia:whipping_cream"
            }
        ]
    })

    // Melong Juice
    event.custom({
        "type": "create:mixing",
        "heatRequirement": "heated",
        "ingredients": [
            {
                "item": "minecraft:melon_slice"
            },
            {
                "item": "minecraft:sugar"
            },
            {
                "fluid": "minecraft:water", amount: 1000
            },
        ],
        "results": [
            {
                "fluid": "farmersrespite:melon_juice", amount: 1000
            }
        ]
    })

    // Liquid Chorus
    event.custom({
        "type": "create:compacting",
        "ingredients": [
            {
                "item": "minecraft:popped_chorus_fruit"
            }
        ],
        "results": [
            {
                "fluid": "integrateddynamics:liquid_chorus", amount: 500
            }
        ]
    })

    // Sakana Pasta
    event.custom({
        "type": "create:mixing",
        "heatRequirement": "heated",
        "ingredients": [
            {
                "item": "minecraft:egg"
            },
            {
                "item": "minecraft:egg"
            },
            {
                "item": "croptopia:greenonion"
            },
            {
                "item": "croptopia:greenonion"
            },
            {
                "item": "farmersdelight:minced_beef"
            },
            {
                "fluid": "create_central_kitchen:tomato_sauce",
                "amount": 400
            },
            {
                "item": "croptopia:soy_sauce"
            },
            {
                "item": "minecraft:sugar"
            },
            {
                "item": "supplementaries:soap"
            }
        ],
        "results": [
            {
                "item": "kubejs:sakana_pasta", "count": 3
            }
        ]
    })

    event.custom({
        "type": "create:deploying",
        "ingredients": [
            {
                "item": "ravencoffee:cup_medium"
            },
            {
                "item": "minecraft:white_dye"
            }
        ],
        "results": [
            {
                "item": "ravencoffee:coffee_mug"
            }
        ]
    })

    event.custom({
        "type": "create:pressing",
        "ingredients": [
            {
                "item": "minecraft:clay_ball"
            }
        ],
        "results": [
            {
                "item": "ravencoffee:cup_small_unfired"
            }
        ]
    })

    event.recipes.createSequencedAssembly([
	    'ravencoffee:cup_medium_unfired',
	        ], 'minecraft:clay_ball', [
		    event.recipes.createDeploying('minecraft:clay_ball', ['ravencoffee:clay_ball', 'minecraft:clay_ball']),
	    	event.recipes.createPressing('ravencoffee:clay_ball', ['ravencoffee:clay_ball', 'minecraft:clay_ball']),
	    ]).transitionalItem('ravencoffee:clay_ball').loops(1).id('create/sequenced_assembly/cup_medium_unfired')

    event.recipes.createSequencedAssembly([
        'ravencoffee:cup_large_unfired',
            ], 'ravencoffee:cup_medium_unfired', [
    		event.recipes.createDeploying('ravencoffee:cup_medium_unfired', ['ravencoffee:cup_medium_unfired', 'minecraft:clay_ball']),
    		event.recipes.createPressing('ravencoffee:large_clay_ball', ['ravencoffee:large_clay_ball', 'minecraft:clay_ball']),
    	]).transitionalItem('ravencoffee:large_clay_ball').loops(1).id('create/sequenced_assembly/cup_large_unfired')


    // Fill cup of Coffee
    /*event.remove({output:  "ravencoffee:cup_small_brew_basic"})
    event.remove({output: "ravencoffee:coffee_mug_brew_basic"})
    event.remove({output: "ravencoffee:cup_medium_brew_basic"})
    event.remove({output:  "ravencoffee:cup_large_brew_basic"})*/

    event.custom({
        "type": "create:filling",
        "ingredients": [
            {
                "item": "ravencoffee:cup_small"
            },
            {
                "fluid": "kubejs:phase_coffee", amount: 125
            }
        ],
        "results": [
            {
                "item": "ravencoffee:cup_small_brew_basic"
            }
        ]
    })
    event.custom({
        "type": "create:filling",
        "ingredients": [
            {
                "item": "ravencoffee:cup_medium"
            },
            {
                "fluid": "kubejs:phase_coffee", amount: 250
            }
        ],
        "results": [
            {
                "item": "ravencoffee:cup_medium_brew_basic"
            }
        ]
    })
    event.custom({
        "type": "create:filling",
        "ingredients": [
            {
                "item": "ravencoffee:coffee_mug"
            },
            {
                "fluid": "kubejs:phase_coffee", amount: 250
            }
        ],
        "results": [
            {
                "item": "ravencoffee:coffee_mug_brew_basic"
            }
        ]
    })
    event.custom({
        "type": "create:filling",
        "ingredients": [
            {
                "item": "ravencoffee:cup_large"
            },
            {
                "fluid": "kubejs:phase_coffee", amount: 375
            }
        ],
        "results": [
            {
                "item": "ravencoffee:cup_large_brew_basic"
            }
        ]
    })

    // Apple Coffee
    event.custom({
        "type": "create:deploying",
        "ingredients": [
            {
                "item": "ravencoffee:coffee_mug_brew_basic"
            },
            {
                "item": "minecraft:apple"
            }
        ],
        "results": [
            {
                "item": "ravencoffee:coffee_mug_brew_apple"
            }
        ]
    })
    event.custom({
        "type": "create:deploying",
        "ingredients": [
            {
                "item": "ravencoffee:cup_medium_brew_basic"
            },
            {
                "item": "minecraft:apple"
            }
        ],
        "results": [
            {
                "item": "ravencoffee:cup_medium_brew_apple"
            }
        ]
    })
    event.custom({
        "type": "create:deploying",
        "ingredients": [
            {
                "item": "ravencoffee:cup_large_brew_basic"
            },
            {
                "item": "minecraft:apple"
            }
        ],
        "results": [
            {
                "item": "ravencoffee:cup_large_brew_apple"
            }
        ]
    })

    // Berry Coffee
    event.custom({
        "type": "create:deploying",
        "ingredients": [
            {
                "item": "ravencoffee:coffee_mug_brew_basic"
            },
            {
                "item": "minecraft:sweet_berries"
            }
        ],
        "results": [
            {
                "item": "ravencoffee:coffee_mug_brew_berry"
            }
        ]
    })
    event.custom({
        "type": "create:deploying",
        "ingredients": [
            {
                "item": "ravencoffee:cup_medium_brew_basic"
            },
            {
                "item": "minecraft:sweet_berries"
            }
        ],
        "results": [
            {
                "item": "ravencoffee:cup_medium_brew_berry"
            }
        ]
    })
    event.custom({
        "type": "create:deploying",
        "ingredients": [
            {
                "item": "ravencoffee:cup_large_brew_basic"
            },
            {
                "item": "minecraft:sweet_berries"
            }
        ],
        "results": [
            {
                "item": "ravencoffee:cup_large_brew_berry"
            }
        ]
    })

    // Honey Coffee
    event.remove({output: "ravencoffee:cup_medium_brew_honey"})
    event.remove({output: "ravencoffee:coffee_mug_brew_honey"})
    event.remove({output:  "ravencoffee:cup_large_brew_honey"})

    event.custom({
        "type": "create:filling",
        "ingredients": [
            {
                "item": "ravencoffee:coffee_mug_brew_basic"
            },
            {
                "fluid": "create:honey", amount: 100
            }
        ],
        "results": [
            {
                "item": "ravencoffee:coffee_mug_brew_honey"
            }
        ]
    })
    event.custom({
        "type": "create:filling",
        "ingredients": [
            {
                "item": "ravencoffee:cup_medium_brew_basic"
            },
            {
                "fluid": "create:honey", amount: 100
            }
        ],
        "results": [
            {
                "item": "ravencoffee:cup_medium_brew_honey"
            }
        ]
    })
    event.custom({
        "type": "create:filling",
        "ingredients": [
            {
                "item": "ravencoffee:cup_large_brew_basic"
            },
            {
                "fluid": "create:honey", amount: 150
            }
        ],
        "results": [
            {
                "item": "ravencoffee:cup_large_brew_honey"
            }
        ]
    })

    // Fill cup of Chocolate
    event.remove({output: "ravencoffee:coffee_mug_brew_chocolate"})
    event.remove({output: "ravencoffee:cup_medium_brew_chocolate"})
    event.remove({output:  "ravencoffee:cup_large_brew_chocolate"})

    event.custom({
        "type": "create:filling",
        "ingredients": [
            {
                "item": "ravencoffee:cup_medium"
            },
            {
                "fluid": "create:chocolate", amount: 250
            }
        ],
        "results": [
            {
                "item": "ravencoffee:cup_medium_brew_chocolate"
            }
        ]
    })
    event.custom({
        "type": "create:filling",
        "ingredients": [
            {
                "item": "ravencoffee:coffee_mug"
            },
            {
                "fluid": "create:chocolate", amount: 250
            }
        ],
        "results": [
            {
                "item": "ravencoffee:coffee_mug_brew_chocolate"
            }
        ]
    })
    event.custom({
        "type": "create:filling",
        "ingredients": [
            {
                "item": "ravencoffee:cup_large"
            },
            {
                "fluid": "create:chocolate", amount: 375
            }
        ],
        "results": [
            {
                "item": "ravencoffee:cup_large_brew_chocolate"
            }
        ]
    })

    // Fill cup of Latte
    event.remove({output: "ravencoffee:coffee_mug_brew_milk"})
    event.remove({output: "ravencoffee:cup_medium_brew_milk"})
    event.remove({output:  "ravencoffee:cup_large_brew_milk"})

    event.custom({
        "type": "create:filling",
        "ingredients": [
            {
                "item": "ravencoffee:cup_medium"
            },
            {
                "fluid": "kubejs:phase_latte", amount: 250
            }
        ],
        "results": [
            {
                "item": "ravencoffee:cup_medium_brew_milk"
            }
        ]
    })
    event.custom({
        "type": "create:filling",
        "ingredients": [
            {
                "item": "ravencoffee:coffee_mug"
            },
            {
                "fluid": "kubejs:phase_latte", amount: 250
            }
        ],
        "results": [
            {
                "item": "ravencoffee:coffee_mug_brew_milk"
            }
        ]
    })
    event.custom({
        "type": "create:filling",
        "ingredients": [
            {
                "item": "ravencoffee:cup_large"
            },
            {
                "fluid": "kubejs:phase_latte", amount: 375
            }
        ],
        "results": [
            {
                "item": "ravencoffee:cup_large_brew_milk"
            }
        ]
    })

    // Fill cup of Mocha
    event.remove({output: "ravencoffee:coffee_mug_brew_mocha"})
    event.remove({output: "ravencoffee:cup_medium_brew_mocha"})
    event.remove({output:  "ravencoffee:cup_large_brew_mocha"})

    event.custom({
        "type": "create:filling",
        "ingredients": [
            {
                "item": "ravencoffee:cup_medium"
            },
            {
                "fluid": "kubejs:phase_mocha", amount: 250
            }
        ],
        "results": [
            {
                "item": "ravencoffee:cup_medium_brew_mocha"
            }
        ]
    })
    event.custom({
        "type": "create:filling",
        "ingredients": [
            {
                "item": "ravencoffee:coffee_mug"
            },
            {
                "fluid": "kubejs:phase_mocha", amount: 250
            }
        ],
        "results": [
            {
                "item": "ravencoffee:coffee_mug_brew_mocha"
            }
        ]
    })
    event.custom({
        "type": "create:filling",
        "ingredients": [
            {
                "item": "ravencoffee:cup_large"
            },
            {
                "fluid": "kubejs:phase_mocha", amount: 375
            }
        ],
        "results": [
            {
                "item": "ravencoffee:cup_large_brew_mocha"
            }
        ]
    })

    // Fill cup of Awkward Coffee
    event.remove({output: "ravencoffee:coffee_mug_brew_awkward"})
    event.remove({output: "ravencoffee:cup_medium_brew_awkward"})
    event.remove({output:  "ravencoffee:cup_large_brew_awkward"})

    event.custom({
        "type": "create:filling",
        "ingredients": [
            {
                "item": "ravencoffee:cup_medium"
            },
            {
                "fluid": "kubejs:phase_coffee_awkward", amount: 250
            }
        ],
        "results": [
            {
                "item": "ravencoffee:cup_medium_brew_awkward"
            }
        ]
    })
    event.custom({
        "type": "create:filling",
        "ingredients": [
            {
                "item": "ravencoffee:coffee_mug"
            },
            {
                "fluid": "kubejs:phase_coffee_awkward", amount: 250
            }
        ],
        "results": [
            {
                "item": "ravencoffee:coffee_mug_brew_awkward"
            }
        ]
    })
    event.custom({
        "type": "create:filling",
        "ingredients": [
            {
                "item": "ravencoffee:cup_large"
            },
            {
                "fluid": "kubejs:phase_coffee_awkward", amount: 375
            }
        ],
        "results": [
            {
                "item": "ravencoffee:cup_large_brew_awkward"
            }
        ]
    })

    // Nether Coffee Sequence
    //event.remove({output: "ravencoffee:coffee_mug_brew_nether"})
    //event.remove({output: "ravencoffee:cup_medium_brew_nether"})
    //event.remove({output:  "ravencoffee:cup_large_brew_nether"})

    event.custom({
        "type": "create:sequenced_assembly",
        "ingredient": {
            "item": "ravencoffee:coffee_mug_brew_awkward"
        },
        "loops": 1,
        "results": [
            {
                "item": "ravencoffee:coffee_mug_brew_nether"
            }
        ],
        "sequence": [
            {
                "type": "create:deploying",
                "ingredients": [
                    {
                        "item": "ravencoffee:coffee_mug_brew_awkward"
                    },
                    {
                        "item": "minecraft:blaze_powder"
                    }
                ],
                "results": [
                    {
                        "item": "ravencoffee:coffee_mug_brew_awkward"
                    }
                ]
            },
            {
                "type": "create:deploying",
                "ingredients": [
                    {
                        "item": "ravencoffee:coffee_mug_brew_awkward"
                    },
                    {
                        "item": "minecraft:blaze_powder"
                    }
                ],
                "results": [
                    {
                        "item": "ravencoffee:coffee_mug_brew_awkward"
                    }
                ]
            },
        ],
        "transitionalItem": {
            "item": "ravencoffee:coffee_mug_brew_awkward"
        }
    })
    event.custom({
        "type": "create:sequenced_assembly",
        "ingredient": {
            "item": "ravencoffee:cup_medium_brew_awkward"
        },
        "loops": 1,
        "results": [
            {
                "item": "ravencoffee:cup_medium_brew_nether"
            }
        ],
        "sequence": [
            {
                "type": "create:deploying",
                "ingredients": [
                    {
                        "item": "ravencoffee:cup_medium_brew_awkward"
                    },
                    {
                        "item": "minecraft:blaze_powder"
                    }
                ],
                "results": [
                    {
                        "item": "ravencoffee:cup_medium_brew_awkward"
                    }
                ]
            },
            {
                "type": "create:deploying",
                "ingredients": [
                    {
                        "item": "ravencoffee:cup_medium_brew_awkward"
                    },
                    {
                        "item": "minecraft:blaze_powder"
                    }
                ],
                "results": [
                    {
                        "item": "ravencoffee:cup_medium_brew_awkward"
                    }
                ]
            },
        ],
        "transitionalItem": {
            "item": "ravencoffee:cup_medium_brew_awkward"
        }
    })
    event.custom({
        "type": "create:sequenced_assembly",
        "ingredient": {
            "item": "ravencoffee:cup_large_brew_awkward"
        },
        "loops": 1,
        "results": [
            {
                "item": "ravencoffee:cup_large_brew_nether"
            }
        ],
        "sequence": [
            {
                "type": "create:deploying",
                "ingredients": [
                    {
                        "item": "ravencoffee:cup_large_brew_awkward"
                    },
                    {
                        "item": "minecraft:blaze_powder"
                    }
                ],
                "results": [
                    {
                        "item": "ravencoffee:cup_large_brew_awkward"
                    }
                ]
            },
            {
                "type": "create:deploying",
                "ingredients": [
                    {
                        "item": "ravencoffee:cup_large_brew_awkward"
                    },
                    {
                        "item": "minecraft:blaze_powder"
                    }
                ],
                "results": [
                    {
                        "item": "ravencoffee:cup_large_brew_awkward"
                    }
                ]
            },
            {
                "type": "create:deploying",
                "ingredients": [
                    {
                        "item": "ravencoffee:cup_large_brew_awkward"
                    },
                    {
                        "item": "minecraft:blaze_powder"
                    }
                ],
                "results": [
                    {
                        "item": "ravencoffee:cup_large_brew_awkward"
                    }
                ]
            },
        ],
        "transitionalItem": {
            "item": "ravencoffee:cup_large_brew_awkward"
        }
    })

    // Carrot Coffee
    event.custom({
        "type": "create:deploying",
        "ingredients": [
            {
                "item": "ravencoffee:coffee_mug_brew_basic"
            },
            {
                "item": "minecraft:carrot"
            }
        ],
        "results": [
            {
                "item": "ravencoffee:coffee_mug_brew_carrot"
            }
        ]
    })
    event.custom({
        "type": "create:deploying",
        "ingredients": [
            {
                "item": "ravencoffee:cup_medium_brew_basic"
            },
            {
                "item": "minecraft:carrot"
            }
        ],
        "results": [
            {
                "item": "ravencoffee:cup_medium_brew_carrot"
            }
        ]
    })
    event.custom({
        "type": "create:deploying",
        "ingredients": [
            {
                "item": "ravencoffee:cup_large_brew_basic"
            },
            {
                "item": "minecraft:carrot"
            }
        ],
        "results": [
            {
                "item": "ravencoffee:cup_large_brew_carrot"
            }
        ]
    })

    // Karat Coffee
    event.remove({id: "ravencoffee:coffee_mug_brew_carrot_golden_from_brew_carrot"})
    event.remove({id: "ravencoffee:cup_medium_brew_carrot_golden_from_brew_carrot"})
    event.remove({id:  "ravencoffee:cup_large_brew_carrot_golden_from_brew_carrot"})

    event.custom({
        "type": "create:deploying",
        "ingredients": [
            {
                "item": "ravencoffee:coffee_mug_brew_basic"
            },
            {
                "item": "minecraft:golden_carrot"
            }
        ],
        "results": [
            {
                "item": "ravencoffee:coffee_mug_brew_carrot_golden"
            }
        ]
    })
    event.custom({
        "type": "create:deploying",
        "ingredients": [
            {
                "item": "ravencoffee:cup_medium_brew_basic"
            },
            {
                "item": "minecraft:golden_carrot"
            }
        ],
        "results": [
            {
                "item": "ravencoffee:cup_medium_brew_carrot_golden"
            }
        ]
    })
    event.custom({
        "type": "create:deploying",
        "ingredients": [
            {
                "item": "ravencoffee:cup_large_brew_basic"
            },
            {
                "item": "minecraft:golden_carrot"
            }
        ],
        "results": [
            {
                "item": "ravencoffee:cup_large_brew_carrot_golden"
            }
        ]
    })

    event.custom({
        "type": "create:sequenced_assembly",
        "ingredient": {
            "item": "ravencoffee:coffee_mug_brew_carrot"
        },
        "loops": 4,
        "results": [
            {
                "item": "ravencoffee:coffee_mug_brew_carrot_golden"
            }
        ],
        "sequence": [
            {
                "type": "create:deploying",
                "ingredients": [
                    {
                        "item": "ravencoffee:coffee_mug_brew_carrot"
                    },
                    {
                        "item": "minecraft:gold_nugget"
                    }
                ],
                "results": [
                    {
                        "item": "ravencoffee:coffee_mug_brew_carrot"
                    }
                ]
            },
        ],
        "transitionalItem": {
            "item": "ravencoffee:coffee_mug_brew_carrot"
        }
    })
    event.custom({
        "type": "create:sequenced_assembly",
        "ingredient": {
            "item": "ravencoffee:cup_medium_brew_carrot"
        },
        "loops": 4,
        "results": [
            {
                "item": "ravencoffee:cup_medium_brew_carrot_golden"
            }
        ],
        "sequence": [
            {
                "type": "create:deploying",
                "ingredients": [
                    {
                        "item": "ravencoffee:cup_medium_brew_carrot"
                    },
                    {
                        "item": "minecraft:gold_nugget"
                    }
                ],
                "results": [
                    {
                        "item": "ravencoffee:cup_medium_brew_carrot"
                    }
                ]
            },
        ],
        "transitionalItem": {
            "item": "ravencoffee:cup_medium_brew_carrot"
        }
    })
    event.custom({
        "type": "create:sequenced_assembly",
        "ingredient": {
            "item": "ravencoffee:cup_large_brew_carrot"
        },
        "loops": 4,
        "results": [
            {
                "item": "ravencoffee:cup_large_brew_carrot_golden"
            }
        ],
        "sequence": [
            {
                "type": "create:deploying",
                "ingredients": [
                    {
                        "item": "ravencoffee:cup_large_brew_carrot"
                    },
                    {
                        "item": "minecraft:gold_nugget"
                    }
                ],
                "results": [
                    {
                        "item": "ravencoffee:cup_large_brew_carrot"
                    }
                ]
            },
        ],
        "transitionalItem": {
            "item": "ravencoffee:cup_large_brew_carrot"
        }
    })

    // Cookies and Cream Coffee
    event.remove({output: "ravencoffee:coffee_mug_brew_cookiesandcream"})
    event.remove({output: "ravencoffee:cup_medium_brew_cookiesandcream"})
    event.remove({output:  "ravencoffee:cup_large_brew_cookiesandcream"})

    event.shapeless(
        Item.of('ravencoffee:coffee_mug_brew_cookiesandcream', 1), 
        [
            'ravencoffee:coffee_mug_brew_milk',
            'croptopia:whipping_cream',
            '2x minecraft:cookie', 	       // arg 2: the array of inputs
        ]
    )
    event.shapeless(
        Item.of('ravencoffee:cup_medium_brew_cookiesandcream', 1), 
        [
            'ravencoffee:cup_medium_brew_milk',
            'croptopia:whipping_cream',
            '2x minecraft:cookie', 	       // arg 2: the array of inputs
        ]
    )
    event.shapeless(
        Item.of('ravencoffee:cup_large_brew_cookiesandcream', 1), 
        [
            'ravencoffee:cup_large_brew_milk',
            'croptopia:whipping_cream',
            '3x minecraft:cookie', 	       // arg 2: the array of inputs
        ]
    )

    event.custom({
        "type": "create:sequenced_assembly",
        "ingredient": {
            "item": "ravencoffee:coffee_mug_brew_milk"
        },
        "loops": 1,
        "results": [
            {
                "item": "ravencoffee:coffee_mug_brew_cookiesandcream"
            }
        ],
        "sequence": [
            {
                "type": "create:deploying",
                "ingredients": [
                    {
                        "item": "ravencoffee:coffee_mug_brew_milk"
                    },
                    {
                        "item": "croptopia:whipping_cream"
                    }
                ],
                "results": [
                    {
                        "item": "ravencoffee:coffee_mug_brew_milk"
                    }
                ]
            },
            {
                "type": "create:deploying",
                "ingredients": [
                    {
                        "item": "ravencoffee:coffee_mug_brew_milk"
                    },
                    {
                        "item": "minecraft:cookie"
                    }
                ],
                "results": [
                    {
                        "item": "ravencoffee:coffee_mug_brew_milk"
                    }
                ]
            },
            {
                "type": "create:deploying",
                "ingredients": [
                    {
                        "item": "ravencoffee:coffee_mug_brew_milk"
                    },
                    {
                        "item": "minecraft:cookie"
                    }
                ],
                "results": [
                    {
                        "item": "ravencoffee:coffee_mug_brew_milk"
                    }
                ]
            },
        ],
        "transitionalItem": {
            "item": "ravencoffee:coffee_mug_brew_milk"
        }
    })
    event.custom({
        "type": "create:sequenced_assembly",
        "ingredient": {
            "item": "ravencoffee:cup_medium_brew_milk"
        },
        "loops": 1,
        "results": [
            {
                "item": "ravencoffee:cup_medium_brew_cookiesandcream"
            }
        ],
        "sequence": [
            {
                "type": "create:deploying",
                "ingredients": [
                    {
                        "item": "ravencoffee:cup_medium_brew_milk"
                    },
                    {
                        "item": "croptopia:whipping_cream"
                    }
                ],
                "results": [
                    {
                        "item": "ravencoffee:cup_medium_brew_milk"
                    }
                ]
            },
            {
                "type": "create:deploying",
                "ingredients": [
                    {
                        "item": "ravencoffee:cup_medium_brew_milk"
                    },
                    {
                        "item": "minecraft:cookie"
                    }
                ],
                "results": [
                    {
                        "item": "ravencoffee:cup_medium_brew_milk"
                    }
                ]
            },
            {
                "type": "create:deploying",
                "ingredients": [
                    {
                        "item": "ravencoffee:cup_medium_brew_milk"
                    },
                    {
                        "item": "minecraft:cookie"
                    }
                ],
                "results": [
                    {
                        "item": "ravencoffee:cup_medium_brew_milk"
                    }
                ]
            },
        ],
        "transitionalItem": {
            "item": "ravencoffee:cup_medium_brew_milk"
        }
    })
    event.custom({
        "type": "create:sequenced_assembly",
        "ingredient": {
            "item": "ravencoffee:cup_large_brew_milk"
        },
        "loops": 1,
        "results": [
            {
                "item": "ravencoffee:cup_large_brew_cookiesandcream"
            }
        ],
        "sequence": [
            {
                "type": "create:deploying",
                "ingredients": [
                    {
                        "item": "ravencoffee:cup_large_brew_milk"
                    },
                    {
                        "item": "croptopia:whipping_cream"
                    }
                ],
                "results": [
                    {
                        "item": "ravencoffee:cup_large_brew_milk"
                    }
                ]
            },
            {
                "type": "create:deploying",
                "ingredients": [
                    {
                        "item": "ravencoffee:cup_large_brew_milk"
                    },
                    {
                        "item": "minecraft:cookie"
                    }
                ],
                "results": [
                    {
                        "item": "ravencoffee:cup_large_brew_milk"
                    }
                ]
            },
            {
                "type": "create:deploying",
                "ingredients": [
                    {
                        "item": "ravencoffee:cup_large_brew_milk"
                    },
                    {
                        "item": "minecraft:cookie"
                    }
                ],
                "results": [
                    {
                        "item": "ravencoffee:cup_large_brew_milk"
                    }
                ]
            },
            {
                "type": "create:deploying",
                "ingredients": [
                    {
                        "item": "ravencoffee:cup_large_brew_milk"
                    },
                    {
                        "item": "minecraft:cookie"
                    }
                ],
                "results": [
                    {
                        "item": "ravencoffee:cup_large_brew_milk"
                    }
                ]
            },
        ],
        "transitionalItem": {
            "item": "ravencoffee:cup_large_brew_milk"
        }
    })

    // Phantasmal Coffee
    event.remove({output: "ravencoffee:coffee_mug_brew_phantasm"})
    event.remove({output: "ravencoffee:cup_medium_brew_phantasm"})
    event.remove({output:  "ravencoffee:cup_large_brew_phantasm"})

    event.custom({
        "type": "create:haunting",
        "ingredients": [
            {
                "item": "ravencoffee:coffee_mug_brew_nether"
            }
        ],
        "results": [
            {
                "item": "ravencoffee:coffee_mug_brew_phantasm"
            }
        ]
    })
    event.custom({
        "type": "create:haunting",
        "ingredients": [
            {
                "item": "ravencoffee:cup_medium_brew_nether"
            }
        ],
        "results": [
            {
                "item": "ravencoffee:cup_medium_brew_phantasm"
            }
        ]
    })
    event.custom({
        "type": "create:haunting",
        "ingredients": [
            {
                "item": "ravencoffee:cup_large_brew_nether"
            }
        ],
        "results": [
            {
                "item": "ravencoffee:cup_large_brew_phantasm"
            }
        ]
    })

    // Pumpkin Spice Latte
    event.remove({output: "ravencoffee:coffee_mug_brew_pumpkinspicelatte"})
    event.remove({output: "ravencoffee:cup_medium_brew_pumpkinspicelatte"})
    event.remove({output:  "ravencoffee:cup_large_brew_pumpkinspicelatte"})

    event.shapeless(
        Item.of('ravencoffee:coffee_mug_brew_pumpkinspicelatte', 1), 
        [
            'ravencoffee:coffee_mug_brew_milk',
            'croptopia:whipping_cream',
            '2x kubejs:pumpkin_spice', 	       // arg 2: the array of inputs
        ]
    )
    event.shapeless(
        Item.of('ravencoffee:cup_medium_brew_pumpkinspicelatte', 1), 
        [
            'ravencoffee:cup_medium_brew_milk',
            'croptopia:whipping_cream',
            '2x kubejs:pumpkin_spice', 	       // arg 2: the array of inputs
        ]
    )
    event.shapeless(
        Item.of('ravencoffee:cup_large_brew_pumpkinspicelatte', 1), 
        [
            'ravencoffee:cup_large_brew_milk',
            'croptopia:whipping_cream',
            '3x kubejs:pumpkin_spice', 	       // arg 2: the array of inputs
        ]
    )

    event.custom({
        "type": "create:sequenced_assembly",
        "ingredient": {
            "item": "ravencoffee:coffee_mug_brew_milk"
        },
        "loops": 1,
        "results": [
            {
                "item": "ravencoffee:coffee_mug_brew_pumpkinspicelatte"
            }
        ],
        "sequence": [
            {
                "type": "create:deploying",
                "ingredients": [
                    {
                        "item": "ravencoffee:coffee_mug_brew_milk"
                    },
                    {
                        "item": "croptopia:whipping_cream"
                    }
                ],
                "results": [
                    {
                        "item": "ravencoffee:coffee_mug_brew_milk"
                    }
                ]
            },
            {
                "type": "create:deploying",
                "ingredients": [
                    {
                        "item": "ravencoffee:coffee_mug_brew_milk"
                    },
                    {
                        "item": "kubejs:pumpkin_spice",
                    }
                ],
                "results": [
                    {
                        "item": "ravencoffee:coffee_mug_brew_milk"
                    }
                ]
            },
        ],
        "transitionalItem": {
            "item": "ravencoffee:coffee_mug_brew_milk"
        }
    })
    event.custom({
        "type": "create:sequenced_assembly",
        "ingredient": {
            "item": "ravencoffee:cup_medium_brew_milk"
        },
        "loops": 1,
        "results": [
            {
                "item": "ravencoffee:cup_medium_brew_pumpkinspicelatte"
            }
        ],
        "sequence": [
            {
                "type": "create:deploying",
                "ingredients": [
                    {
                        "item": "ravencoffee:cup_medium_brew_milk"
                    },
                    {
                        "item": "croptopia:whipping_cream"
                    }
                ],
                "results": [
                    {
                        "item": "ravencoffee:cup_medium_brew_milk"
                    }
                ]
            },
            {
                "type": "create:deploying",
                "ingredients": [
                    {
                        "item": "ravencoffee:cup_medium_brew_milk"
                    },
                    {
                        "item": "kubejs:pumpkin_spice",
                    }
                ],
                "results": [
                    {
                        "item": "ravencoffee:cup_medium_brew_milk"
                    }
                ]
            },
        ],
        "transitionalItem": {
            "item": "ravencoffee:cup_medium_brew_milk"
        }
    })
    event.custom({
        "type": "create:sequenced_assembly",
        "ingredient": {
            "item": "ravencoffee:cup_large_brew_milk"
        },
        "loops": 1,
        "results": [
            {
                "item": "ravencoffee:cup_large_brew_pumpkinspicelatte"
            }
        ],
        "sequence": [
            {
                "type": "create:deploying",
                "ingredients": [
                    {
                        "item": "ravencoffee:cup_large_brew_milk"
                    },
                    {
                        "item": "croptopia:whipping_cream"
                    }
                ],
                "results": [
                    {
                        "item": "ravencoffee:cup_large_brew_milk"
                    }
                ]
            },
            {
                "type": "create:deploying",
                "ingredients": [
                    {
                        "item": "ravencoffee:cup_large_brew_milk"
                    },
                    {
                        "item": "kubejs:pumpkin_spice",
                    }
                ],
                "results": [
                    {
                        "item": "ravencoffee:cup_large_brew_milk"
                    }
                ]
            },
        ],
        "transitionalItem": {
            "item": "ravencoffee:cup_large_brew_milk"
        }
    })

    // Pumpkin Spice Latte with Pumpkin
    event.remove({output: "ravencoffee:coffee_mug_brew_pumpkinspicelatte_with_pumpkin"})
    event.remove({output: "ravencoffee:cup_medium_brew_pumpkinspicelatte_with_pumpkin"})
    event.remove({output:  "ravencoffee:cup_large_brew_pumpkinspicelatte_with_pumpkin"})

    event.shapeless(
        Item.of('ravencoffee:coffee_mug_brew_pumpkinspicelatte_with_pumpkin', 1), 
        [
            'ravencoffee:coffee_mug_brew_pumpkinspicelatte',
            'create_central_kitchen:pumpkin_pie_slice',
        ]
    )
    event.shapeless(
        Item.of('ravencoffee:cup_medium_brew_pumpkinspicelatte_with_pumpkin', 1), 
        [
            'ravencoffee:cup_medium_brew_pumpkinspicelatte',
            'create_central_kitchen:pumpkin_pie_slice',
        ]
    )
    event.shapeless(
        Item.of('ravencoffee:cup_large_brew_pumpkinspicelatte_with_pumpkin', 1), 
        [
            'ravencoffee:cup_large_brew_pumpkinspicelatte',
            'create_central_kitchen:pumpkin_pie_slice',
        ]
    )

    event.custom({
        "type": "create:deploying",
        "ingredients": [
            {
                "item": "ravencoffee:coffee_mug_brew_pumpkinspicelatte"
            },
            {
                "item": "create_central_kitchen:pumpkin_pie_slice"
            }
        ],
        "results": [
            {
                "item": "ravencoffee:coffee_mug_brew_pumpkinspicelatte_with_pumpkin"
            }
        ]
    })
    event.custom({
        "type": "create:deploying",
        "ingredients": [
            {
                "item": "ravencoffee:cup_medium_brew_pumpkinspicelatte"
            },
            {
                "item": "create_central_kitchen:pumpkin_pie_slice"
            }
        ],
        "results": [
            {
                "item": "ravencoffee:cup_medium_brew_pumpkinspicelatte_with_pumpkin"
            }
        ]
    })
    event.custom({
        "type": "create:deploying",
        "ingredients": [
            {
                "item": "ravencoffee:cup_large_brew_pumpkinspicelatte"
            },
            {
                "item": "create_central_kitchen:pumpkin_pie_slice"
            }
        ],
        "results": [
            {
                "item": "ravencoffee:cup_large_brew_pumpkinspicelatte_with_pumpkin"
            }
        ]
    })

    // Melon Coffee
    event.custom({
        "type": "create:filling",
        "ingredients": [
            {
                "item": "ravencoffee:cup_medium_brew_basic"
            },
            {
                "fluid": "farmersrespite:melon_juice", amount: 100
            }
        ],
        "results": [
            {
                "item": "ravencoffee:cup_medium_brew_melon"
            }
        ]
    })
    event.custom({
        "type": "create:filling",
        "ingredients": [
            {
                "item": "ravencoffee:coffee_mug_brew_basic"
            },
            {
                "fluid": "farmersrespite:melon_juice", amount: 100
            }
        ],
        "results": [
            {
                "item": "ravencoffee:coffee_mug_brew_melon"
            }
        ]
    })
    event.custom({
        "type": "create:filling",
        "ingredients": [
            {
                "item": "ravencoffee:cup_large_brew_basic"
            },
            {
                "fluid": "farmersrespite:melon_juice", amount: 150
            }
        ],
        "results": [
            {
                "item": "ravencoffee:cup_large_brew_melon"
            }
        ]
    })

    // Glistering Melon Coffee
    event.custom({
        "type": "create:sequenced_assembly",
        "ingredient": {
            "item": "ravencoffee:coffee_mug_brew_melon"
        },
        "loops": 4,
        "results": [
            {
                "item": "ravencoffee:coffee_mug_brew_melon_golden"
            }
        ],
        "sequence": [
            {
                "type": "create:deploying",
                "ingredients": [
                    {
                        "item": "ravencoffee:coffee_mug_brew_melon"
                    },
                    {
                        "item": "minecraft:gold_nugget"
                    }
                ],
                "results": [
                    {
                        "item": "ravencoffee:coffee_mug_brew_melon"
                    }
                ]
            },
        ],
        "transitionalItem": {
            "item": "ravencoffee:coffee_mug_brew_melon"
        }
    })
    event.custom({
        "type": "create:sequenced_assembly",
        "ingredient": {
            "item": "ravencoffee:cup_medium_brew_melon"
        },
        "loops": 4,
        "results": [
            {
                "item": "ravencoffee:cup_medium_brew_melon_golden"
            }
        ],
        "sequence": [
            {
                "type": "create:deploying",
                "ingredients": [
                    {
                        "item": "ravencoffee:cup_medium_brew_melon"
                    },
                    {
                        "item": "minecraft:gold_nugget"
                    }
                ],
                "results": [
                    {
                        "item": "ravencoffee:cup_medium_brew_melon"
                    }
                ]
            },
        ],
        "transitionalItem": {
            "item": "ravencoffee:cup_medium_brew_melon"
        }
    })
    event.custom({
        "type": "create:sequenced_assembly",
        "ingredient": {
            "item": "ravencoffee:cup_large_brew_melon"
        },
        "loops": 4,
        "results": [
            {
                "item": "ravencoffee:cup_large_brew_melon_golden"
            }
        ],
        "sequence": [
            {
                "type": "create:deploying",
                "ingredients": [
                    {
                        "item": "ravencoffee:cup_large_brew_melon"
                    },
                    {
                        "item": "minecraft:gold_nugget"
                    }
                ],
                "results": [
                    {
                        "item": "ravencoffee:cup_large_brew_melon"
                    }
                ]
            },
        ],
        "transitionalItem": {
            "item": "ravencoffee:cup_large_brew_melon"
        }
    })

    // End Blend
    event.custom({
        "type": "create:sequenced_assembly",
        "ingredient": {
            "item": "ravencoffee:coffee_mug_brew_basic"
        },
        "loops": 1,
        "results": [
            {
                "item": "ravencoffee:coffee_mug_brew_end"
            }
        ],
        "sequence": [
            {
                "type": "create:deploying",
                "ingredients": [
                    {
                        "item": "ravencoffee:coffee_mug_brew_basic"
                    },
                    {
                        "item": "endersdelight:ender_shard"
                    }
                ],
                "results": [
                    {
                        "item": "ravencoffee:coffee_mug_brew_basic"
                    }
                ]
            },
            {
                "type": "create:filling",
                "ingredients": [
                    {
                        "item": "ravencoffee:coffee_mug_brew_basic"
                    },
                    {
                        "fluid": "integrateddynamics:liquid_chorus", amount: 100
                    }
                ],
                "results": [
                    {
                        "item": "ravencoffee:coffee_mug_brew_basic"
                    }
                ]
            },
            {
                "type": "create:deploying",
                "ingredients": [
                    {
                        "item": "ravencoffee:coffee_mug_brew_basic"
                    },
                    {
                        "item": "minecraft:chorus_fruit"
                    }
                ],
                "results": [
                    {
                        "item": "ravencoffee:coffee_mug_brew_basic"
                    }
                ]
            },
        ],
        "transitionalItem": {
            "item": "ravencoffee:coffee_mug_brew_basic"
        }
    })
    event.custom({
        "type": "create:sequenced_assembly",
        "ingredient": {
            "item": "ravencoffee:cup_medium_brew_basic"
        },
        "loops": 1,
        "results": [
            {
                "item": "ravencoffee:cup_medium_brew_end"
            }
        ],
        "sequence": [
            {
                "type": "create:deploying",
                "ingredients": [
                    {
                        "item": "ravencoffee:cup_medium_brew_basic"
                    },
                    {
                        "item": "endersdelight:ender_shard"
                    }
                ],
                "results": [
                    {
                        "item": "ravencoffee:cup_medium_brew_basic"
                    }
                ]
            },
            {
                "type": "create:filling",
                "ingredients": [
                    {
                        "item": "ravencoffee:cup_medium_brew_basic"
                    },
                    {
                        "fluid": "integrateddynamics:liquid_chorus", amount: 100
                    }
                ],
                "results": [
                    {
                        "item": "ravencoffee:cup_medium_brew_basic"
                    }
                ]
            },
            {
                "type": "create:deploying",
                "ingredients": [
                    {
                        "item": "ravencoffee:cup_medium_brew_basic"
                    },
                    {
                        "item": "minecraft:chorus_fruit"
                    }
                ],
                "results": [
                    {
                        "item": "ravencoffee:cup_medium_brew_basic"
                    }
                ]
            },
        ],
        "transitionalItem": {
            "item": "ravencoffee:cup_medium_brew_basic"
        }
    })
    event.custom({
        "type": "create:sequenced_assembly",
        "ingredient": {
            "item": "ravencoffee:cup_large_brew_basic"
        },
        "loops": 1,
        "results": [
            {
                "item": "ravencoffee:cup_large_brew_end"
            }
        ],
        "sequence": [
            {
                "type": "create:deploying",
                "ingredients": [
                    {
                        "item": "ravencoffee:cup_large_brew_basic"
                    },
                    {
                        "item": "endersdelight:ender_shard"
                    }
                ],
                "results": [
                    {
                        "item": "ravencoffee:cup_large_brew_basic"
                    }
                ]
            },
            {
                "type": "create:filling",
                "ingredients": [
                    {
                        "item": "ravencoffee:cup_large_brew_basic"
                    },
                    {
                        "fluid": "integrateddynamics:liquid_chorus", amount: 150
                    }
                ],
                "results": [
                    {
                        "item": "ravencoffee:cup_large_brew_basic"
                    }
                ]
            },
            {
                "type": "create:deploying",
                "ingredients": [
                    {
                        "item": "ravencoffee:cup_large_brew_basic"
                    },
                    {
                        "item": "minecraft:chorus_fruit"
                    }
                ],
                "results": [
                    {
                        "item": "ravencoffee:cup_large_brew_basic"
                    }
                ]
            },
        ],
        "transitionalItem": {
            "item": "ravencoffee:cup_large_brew_basic"
        }
    })

    // Coffee Éclair
    event.custom({
        "type": "create:filling",
        "ingredients": [
            {
                "item": "minecraft:bread"
            },
            {
                "fluid": "kubejs:phase_coffee", amount: 300
            }
        ],
        "results": [
            {
                "item": "ravencoffee:coffee_eclair",
                "count": 3
            }
        ]
    })

    /*event.shapeless(
        Item.of('ravencoffee:cup_small_brew_basic', 1),
        [
            'ravencoffee:cup_small',
            'ravencoffee:coffee_beans_roasted_ground',
            '2x minecraft:cookie', 	       // arg 2: the array of inputs
        ]
    )*/



    // Coffee Cake
    event.remove({id:  "farmersrespite:coffee_cake"})

    event.shaped(
        Item.of('farmersrespite:coffee_cake'), 
        [
            'MSM',
            'CEC', // arg 2: the shape (array of strings)
            'WWW'
        ],
        {
            M: '#forge:milk',
            S: 'minecraft:sugar',
            C: 'ravencoffee:coffee_beans_roasted_ground',
            E: 'minecraft:egg',
            W: 'minecraft:wheat'
        }
    )

    event.custom({
        "type": "create:filling",
        "ingredients": [
            {
                "item": "createaddition:chocolate_cake"
            },
            {
                "fluid": "kubejs:phase_coffee", amount: 1000
            }
        ],
        "results": [
            {
                "item": "farmersrespite:coffee_cake",
            }
        ]
    })

    // Tiramisu
    event.custom({
        "type": "create:filling",
        "ingredients": [
            {
                "item": "createaddition:cake_base_baked"
            },
            {
                "fluid": "kubejs:phase_coffee", amount: 1000
            }
        ],
        "results": [
            {
                "item": "ravencoffee:tiramisu_block",
            }
        ]
    })

    // Tiramisu Slice
    event.custom({
        "type": "farmersdelight:cutting",
        "ingredients": [
            {
                "item": "ravencoffee:tiramisu_block"
            }
        ],
        "result": [
            {
                "item": "ravencoffee:tiramisu_slice",
                "count": 16
            }
        ],
        "tool": {
            "tag": "forge:tools/knives"
        }
    })

    // Fumos
    event.shaped(
        Item.of('minecraft:carved_pumpkin', 1, {"CustomModelData": 1, display: {Name: '[{"text": "Amanogawa Shiina", "italic": true, "color": "#c1bdfe"}]'}}), 
        [
            '   ',
            'AWB', // arg 2: the shape (array of strings)
            ' W '
        ],
        {
            W: 'minecraft:white_wool',
            A: '#forge:dyes/purple',
            B: '#forge:dyes/white',
        }
    )

    event.shaped(
        Item.of('minecraft:carved_pumpkin', 1, {"CustomModelData": 2, display: {Name: '[{"text": "Chiisaka Airi", "italic": true, "color": "#ad989f"}]'}}), 
        [
            '   ',
            'AWB', // arg 2: the shape (array of strings)
            ' W '
        ],
        {
            W: 'minecraft:white_wool',
            A: '#forge:dyes/brown',
            B: '#forge:dyes/pink',
        }
    )

    event.shaped(
        Item.of('minecraft:carved_pumpkin', 1, {"CustomModelData": 3, display: {Name: '[{"text": "Dizzy Dokuro", "italic": true, "color": "#950c21"}]'}}), 
        [
            '   ',
            'AWB', // arg 2: the shape (array of strings)
            ' W '
        ],
        {
            W: 'minecraft:white_wool',
            A: '#forge:dyes/blue',
            B: '#forge:dyes/red',
        }
    )

    event.shaped(
        Item.of('minecraft:carved_pumpkin', 1, {"CustomModelData": 4, display: {Name: '[{"text": "Ember Amane", "italic": true, "color": "#9999ff"}]'}}), 
        [
            '   ',
            'AWB', // arg 2: the shape (array of strings)
            ' W '
        ],
        {
            W: 'minecraft:white_wool',
            A: '#forge:dyes/black',
            B: '#forge:dyes/magenta',
        }
    )

    event.shaped(
        Item.of('minecraft:carved_pumpkin', 1, {"CustomModelData": 5, display: {Name: '[{"text": "Fujikura Uruka", "italic": true, "color": "#556996"}]'}}), 
        [
            '   ',
            'AWB', // arg 2: the shape (array of strings)
            ' W '
        ],
        {
            W: 'minecraft:white_wool',
            A: '#forge:dyes/blue',
            B: '#forge:dyes/blue',
        }
    )

    event.shaped(
        Item.of('minecraft:carved_pumpkin', 1, {"CustomModelData": 6, display: {Name: '[{"text": "Hakushika Iori", "italic": true, "color": "#7bd7e4"}]'}}), 
        [
            '   ',
            'AWB', // arg 2: the shape (array of strings)
            ' W '
        ],
        {
            W: 'minecraft:white_wool',
            A: '#forge:dyes/white',
            B: '#forge:dyes/light_blue',
        }
    )

    event.shaped(
        Item.of('minecraft:carved_pumpkin', 1, {"CustomModelData": 7, display: {Name: '[{"text": "Himemiya Rie", "italic": true, "color": "#ffb5da"}]'}}), 
        [
            '   ',
            'AWB', // arg 2: the shape (array of strings)
            ' W '
        ],
        {
            W: 'minecraft:white_wool',
            A: '#forge:dyes/pink',
            B: '#forge:dyes/yellow',
        }
    )

    event.shaped(
        Item.of('minecraft:carved_pumpkin', 1, {"CustomModelData": 9, display: {Name: '[{"text": "Kaneko Lumi", "italic": true, "color": "#9889ea"}]'}}), 
        [
            '   ',
            'AWB', // arg 2: the shape (array of strings)
            ' W '
        ],
        {
            W: 'minecraft:white_wool',
            A: 'croptopia:lemon',
            B: '#forge:dyes/yellow',
        }
    )

    event.shaped(
        Item.of('minecraft:carved_pumpkin', 1, {"CustomModelData": 8, display: {Name: '[{"text": "Jelly Hoshiumi", "italic": true, "color": "#cce8f6"}]'}}), 
        [
            '   ',
            'AWB', // arg 2: the shape (array of strings)
            ' W '
        ],
        {
            W: 'minecraft:white_wool',
            A: '#forge:dyes/light_blue',
            B: '#forge:dyes/yellow',
        }
    )

    event.shaped(
        Item.of('minecraft:carved_pumpkin', 1, {"CustomModelData": 10, display: {Name: '[{"text": "Komachi Panko", "italic": true, "color": "#b4d1cd"}]'}}), 
        [
            '   ',
            'AWB', // arg 2: the shape (array of strings)
            ' W '
        ],
        {
            W: 'minecraft:white_wool',
            A: '#forge:dyes/brown',
            B: '#forge:dyes/cyan',
        }
    )

    event.shaped(
        Item.of('minecraft:carved_pumpkin', 1, {"CustomModelData": 11, display: {Name: '[{"text": "Erina Makina", "italic": true, "color": "#1e65ab"}]'}}), 
        [
            '   ',
            'AWB', // arg 2: the shape (array of strings)
            ' W '
        ],
        {
            W: 'minecraft:white_wool',
            A: '#forge:dyes/blue',
            B: '#forge:dyes/white',
        }
    )

    event.shaped(
        Item.of('minecraft:carved_pumpkin', 1, {"CustomModelData": 12, display: {Name: '[{"text": "Pipkin Pippa", "italic": true, "color": "#fdd0e4"}]'}}), 
        [
            '   ',
            'AWB', // arg 2: the shape (array of strings)
            ' W '
        ],
        {
            W: 'minecraft:white_wool',
            A: '#forge:dyes/pink',
            B: '#forge:dyes/pink',
        }
    )

    event.shaped(
        Item.of('minecraft:carved_pumpkin', 1, {"CustomModelData": 13, display: {Name: '[{"text": "Remilia Nephys", "italic": true, "color": "#d3223c"}]'}}), 
        [
            '   ',
            'AWB', // arg 2: the shape (array of strings)
            ' W '
        ],
        {
            W: 'minecraft:white_wool',
            A: '#forge:dyes/red',
            B: '#forge:dyes/black',
        }
    )

    event.shaped(
        Item.of('minecraft:carved_pumpkin', 1, {"CustomModelData": 14, display: {Name: '[{"text": "Lia", "italic": true, "color": "#fe3892"}]'}}), 
        [
            '   ',
            'AWB', // arg 2: the shape (array of strings)
            ' W '
        ],
        {
            W: 'minecraft:white_wool',
            A: '#forge:dyes/magenta',
            B: '#forge:dyes/yellow',
        }
    )

    event.shaped(
        Item.of('minecraft:carved_pumpkin', 1, {"CustomModelData": 15, display: {Name: '[{"text": "Shisui Michiru", "italic": true, "color": "#210063"}]'}}), 
        [
            '   ',
            'AWB', // arg 2: the shape (array of strings)
            ' W '
        ],
        {
            W: 'minecraft:white_wool',
            A: '#forge:dyes/purple',
            B: '#forge:dyes/black',
        }
    )

    event.shaped(
        Item.of('minecraft:carved_pumpkin', 1, {"CustomModelData": 16, display: {Name: '[{"text": "Tenma Maemi", "italic": true, "color": "#8979a0"}]'}}), 
        [
            '   ',
            'AWB', // arg 2: the shape (array of strings)
            ' W '
        ],
        {
            W: 'minecraft:white_wool',
            A: '#forge:dyes/purple',
            B: '#forge:dyes/light_gray',
        }
    )

    event.shaped(
        Item.of('minecraft:carved_pumpkin', 1, {"CustomModelData": 17, display: {Name: '[{"text": "Utatane Nasa", "italic": true, "color": "#febb4d"}]'}}), 
        [
            '   ',
            'AWB', // arg 2: the shape (array of strings)
            ' W '
        ],
        {
            W: 'minecraft:white_wool',
            A: '#forge:dyes/yellow',
            B: '#forge:dyes/purple',
        }
    )

    event.shaped(
        Item.of('minecraft:carved_pumpkin', 1, {"CustomModelData": 19, display: {Name: '[{"text": "Eimi Isami", "italic": true, "color": "#ffa566"}]'}}), 
        [
            '   ',
            'AWB', // arg 2: the shape (array of strings)
            ' W '
        ],
        {
            W: 'minecraft:white_wool',
            A: '#forge:dyes/orange',
            B: '#forge:dyes/gray',
        }
    )

    event.shaped(
        Item.of('minecraft:carved_pumpkin', 1, {"CustomModelData": 20, display: {Name: '[{"text": "Hikanari Hina", "italic": true, "color": "#9beef2"}]'}}), 
        [
            '   ',
            'AWB', // arg 2: the shape (array of strings)
            ' W '
        ],
        {
            W: 'minecraft:white_wool',
            A: '#forge:dyes/white',
            B: '#forge:dyes/light_blue',
        }
    )

    event.shaped(
        Item.of('minecraft:carved_pumpkin', 1, {"CustomModelData": 21, display: {Name: '[{"text": "Muu Muyu", "italic": true, "color": "#d4bcf1"}]'}}), 
        [
            '   ',
            'AWB', // arg 2: the shape (array of strings)
            ' W '
        ],
        {
            W: 'minecraft:white_wool',
            A: '#forge:dyes/purple',
            B: '#forge:dyes/purple',
        }
    )

    event.shaped(
        Item.of('minecraft:carved_pumpkin', 1, {"CustomModelData": 22, display: {Name: '[{"text": "Runie Ruse", "italic": true, "color": "#f083c0"}]'}}), 
        [
            '   ',
            'AWB', // arg 2: the shape (array of strings)
            ' W '
        ],
        {
            W: 'minecraft:white_wool',
            A: '#forge:dyes/magenta',
            B: '#forge:dyes/black',
        }
    )

    event.shaped(
        Item.of('minecraft:carved_pumpkin', 1, {"CustomModelData": 23, display: {Name: '[{"text": "Saya Sairroxs", "italic": true, "color": "#a74458"}]'}}), 
        [
            '   ',
            'AWB', // arg 2: the shape (array of strings)
            ' W '
        ],
        {
            W: 'minecraft:white_wool',
            A: '#forge:dyes/red',
            B: '#forge:dyes/orange',
        }
    )

    event.shaped(
        Item.of('minecraft:carved_pumpkin', 1, {"CustomModelData": 24, display: {Name: '[{"text": "Ayase Yuu", "italic": true, "color": "#192f60"}]'}}), 
        [
            '   ',
            'AWB', // arg 2: the shape (array of strings)
            ' W '
        ],
        {
            W: 'minecraft:white_wool',
            A: '#forge:dyes/blue',
            B: '#forge:dyes/black',
        }
    )

    event.shaped(
        Item.of('minecraft:carved_pumpkin', 1, {"CustomModelData": 25, display: {Name: '[{"text": "Gram Pico", "italic": true, "color": "#FFFFFF"}]'}}), 
        [
            '   ',
            'AWB', // arg 2: the shape (array of strings)
            ' W '
        ],
        {
            W: 'minecraft:white_wool',
            A: '#forge:dyes/white',
            B: '#forge:dyes/white',
        }
    )


    event.shaped(
        Item.of('minecraft:carved_pumpkin', 1, {"CustomModelData": 26, display: {Name: '[{"text": "Kaminari Clara", "italic": true, "color": "#fff799"}]'}}), 
        [
            '   ',
            'AWB', // arg 2: the shape (array of strings)
            ' W '
        ],
        {
            W: 'minecraft:white_wool',
            A: '#forge:dyes/yellow',
            B: '#forge:dyes/light_blue',
        }
    )

    event.shaped(
        Item.of('minecraft:carved_pumpkin', 1, {"CustomModelData": 27, display: {Name: '[{"text": "Kannagi Loki", "italic": true, "color": "#b8282b"}]'}}), 
        [
            '   ',
            'AWB', // arg 2: the shape (array of strings)
            ' W '
        ],
        {
            W: 'minecraft:white_wool',
            A: '#forge:dyes/red',
            B: '#forge:dyes/cyan',
        }
    )

    event.shaped(
        Item.of('minecraft:carved_pumpkin', 1, {"CustomModelData": 28, display: {Name: '[{"text": "Kokoromo Memory", "italic": true, "color": "#ffb7ff"}]'}}), 
        [
            '   ',
            'AWB', // arg 2: the shape (array of strings)
            ' W '
        ],
        {
            W: 'minecraft:white_wool',
            A: '#forge:dyes/pink',
            B: '#forge:dyes/magenta',
        }
    )

    event.shaped(
        Item.of('jaffabricate:orange_sapling', 1),
        [
            'WW ',
            'A  ', // arg 2: the shape (array of strings)
            '   '
        ],
        {
            W: 'jaffabricate:orange',
            A: '#minecraft:saplings',
        }
    )
	//Sound of Steam
	event.remove({ id: 'pipeorgans:pressing/brass_reed' })
	event.custom({
		type: "createaddition:rolling",
		input: { "tag": "forge:nuggets/brass" },
		result: { "item": 'pipeorgans:brass_reed' }
	}).id('kubejs:rolling/brass_reed')

})
// Visit the wiki for more info - https://kubejs.com/
console.info('Loaded server scripts!')

