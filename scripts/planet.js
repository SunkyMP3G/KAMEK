Events.on(ContentInitEvent, e => {
    Vars.content.planet("kamek").generator = new ErekirPlanetGenerator();
});