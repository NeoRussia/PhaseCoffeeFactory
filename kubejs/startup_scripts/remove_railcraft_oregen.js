WorldgenEvents.remove(event => {
    var rcOreList = [
        'railcraft:sulfur_ore',
        'railcraft:deepslate_sulfur_ore',
        'railcraft:saltpepper_ore',
        'railcraft:lead_ore',
        'railcraft:deepslate_lead_ore',
        'railcraft:nickel_ore',
        'railcraft:deepslate_nickel_ore',
        'railcraft:silver_ore',
        'railcraft:deepslate_silver_ore',
        'railcraft:tin_ore',
        'railcraft:deepslate_tin_ore',
        'railcraft:zinc_ore',
        'railcraft:deepslate_zinc_ore'
    ];

    event.removeOres(props => {
        props.blocks = rcOreList
    });
})
