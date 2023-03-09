Events.on(ContentInitEvent, e => {
//Stone
	 Vars.content.block("kamek-wall-stone").attributes.set(Attribute.get("stone"), 1);
//Iron
	 Vars.content.block("kamek-floor-ore-iron").attributes.set(Attribute.get("iron"), 0.25);
	 Vars.content.block("kamek-floor-stone").attributes.set(Attribute.get("iron"), 0.0025);
//Drills
	 Vars.content.block("kamek-block-drill-stone").attribute = Attribute.get("stone");
	 Vars.content.block("kamek-block-drill-iron").attribute = Attribute.get("iron");
});