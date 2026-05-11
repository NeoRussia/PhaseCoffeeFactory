// priority: 0

ClientEvents.lang('en_us', event => {
    event.renameItem('jaffabricate:orange', 'Jaffa Orange')
    event.renameItem('jaffabricate:bare_jaffa_cake', 'Jaffa Orange Jelly Cake')
	event.renameItem('jaffabricate:orange_jelly', 'Jaffa Orange Jelly')
	event.renameItem('jaffabricate:orange_sapling', 'Jaffa Orange Sapling')
	event.renameItem('jaffabricate:orange_leaves', 'Jaffa Orange Tree Leaves')
	event.renameItem('jaffabricate:orange_leaves_alt', 'Jaffa Orange Tree Leaves')
})

ItemEvents.tooltip(event => {
    event.add(['jaffabricate:orange', 'jaffabricate:orange_sapling'], '§vAuthentic Palestinian orange!')
})

