const SI = {
    templates: "",
    dispatcher: "",
    storage: "",
    cache: "",
    filter: "",
    placeholder: "",
    creator: "",
    "creator:fallback": "",
    resolver: "",
    logger: "",
    "logger:composer": "",
    "component:extractor:strategy": "",
    "component:extractor": "",
    "component:black_white_list": "",
    "placeholder:meta": "",
    "placeholder:brackets": "",
    "template:pattern": "",
    "factory:template": "",
    "creator:template": "",
    "factory:template:resolver": "",
    "factory:placeholder": "",
    "factory:placeholder:resolver": "",
    "factory:obsidian:file_modifiable": "",
    "factory:obsidian:file": "",
    "factory:obsidian:meta": "",
    delimiter: "",
    "getter:delimiter": "",
    "getter:obsidian:leaves": "",
    "facade:obsidian": "",
    "feature": "",
    feature_toggle: "",
    manager: "",
    composer: "",
    "manager:composer": "",
    "feature:composer": "",
    "obsidian:app": "",
    "service:note:link": "",
    "modal:change:approve": "",
    "alias:modifier": "",
    "alias:modifier:strategy": "",
    "factory:alias:modifier:strategy": "",
    "factory:feature": ""
};

for (const key of Object.keys(SI)) {
    //@ts-ignore
    SI[key] = Symbol.for(key);
}

export default SI;
