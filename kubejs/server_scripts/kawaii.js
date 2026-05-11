// priority: 1
// temporary unification



ServerEvents.tags('item', event => {
    event.add('ravencoffee:brew_ingredients', 'kawaiidishes:coffee_powder')
    event.add('ravencoffee:roasted_beans', 'kawaiidishes:roasted_coffee_beans')
    event.add('ravencoffee:cups', 'kawaiidishes:mug')
    event.add('ravencoffee:cups_medium', 'kawaiidishes:mug')
})

ServerEvents.recipes(event => {
    event.remove({ output : 'kawaiidishes:mug'})
    event.shapeless('kawaiidishes:coffee_powder', ['ravencoffee:coffee_beans_roasted_ground']);
    event.shapeless('ravencoffee:coffee_beans_roasted_ground', ['kawaiidishes:coffee_powder']);
    event.shapeless('ravencoffee:coffee_cherries', ['kawaiidishes:coffee_fruit']);
    event.shapeless('kawaiidishes:coffee_fruit', ['ravencoffee:coffee_cherries']);
    event.shapeless('kawaiidishes:mug', ['ravencoffee:coffee_mug']);
    event.shapeless('ravencoffee:coffee_mug', ['kawaiidishes:mug']);

})