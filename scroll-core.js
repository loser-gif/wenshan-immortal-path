// A bounded golden-core opening: three layers, two routes, one closing trial.
export const CORE_COST={stones:12000,jade:200,herbs:120};
export const CORE_EXP=60000;
export const CORE_NEED=[140000,220000,220000];
export const CORE_GEAR={
 dawnSword:{name:'朝曦剑',slot:'weapon',quality:'epic',atk:155,price:10500,gate:21},
 dawnRobe:{name:'朝曦道衣',slot:'robe',quality:'epic',def:86,hp:480,price:11000,gate:21},
 dawnCharm:{name:'朝曦灵珏',slot:'charm',quality:'epic',atk:43,def:29,hp:320,price:9800,gate:21},
 dawnCrown:{name:'丹霞道冠',slot:'head',quality:'epic',def:26,hp:170,price:6800,gate:21},
 dawnBoots:{name:'流霞履',slot:'boots',quality:'epic',def:22,hp:245,price:6800,gate:21},
 dawnBelt:{name:'赤金束带',slot:'belt',quality:'epic',hp:370,price:6800,gate:21}
};
export const CORE_TECHNIQUES=[
 {id:'coreBreath',name:'金息吐纳篇',source:'merchant',gate:21,desc:'每重单次修为 +20%；作辅修时技能每重回复1.5%气血',gain:.20,max:3,cost:5000},
 {id:'coreWard',name:'丹华固元诀',source:'merchant',gate:22,desc:'每重气血 +5%、护体 +3%；作辅修时每重增加15%护体值的技能护盾',hp:.05,def:.03,max:3,cost:6000}
];
export const CORE_AREAS=[
 {id:'dawn',name:'丹霞渡',gate:21,chapter:'core',desc:'丹霞照亮云海，新结的金丹在潮声中渐稳。渡口雷隼以穿甲雷羽试探来人。',enemy:'霞雷隼',hp:12000,atk:580,def:250,seconds:145,stones:650,ore:58,herbs:36,jade:25,accessories:['dawnCrown','dawnBoots','dawnBelt'],loot:['dawnSword','dawnRobe','dawnCharm']},
 {id:'furnace',name:'鸣金古炉',gate:22,chapter:'core',desc:'古炉不炼金铁，只收天地余响。护炉灵会汲取来人的生息，护体与续战各有用处。',enemy:'鸣金护炉灵',hp:16500,atk:680,def:280,seconds:155,stones:820,ore:75,herbs:45,jade:32,accessories:['dawnCrown','dawnBoots','dawnBelt'],loot:['dawnSword','dawnRobe','dawnCharm']}
];
export const CORE_TRIAL={name:'金丹初试 · 一息成丹',hp:22000,atk:760,def:310};
export const CORE_EVENTS={
 dawn:{title:'云海第一封信',text:'渡口的小修士问，结成金丹以后是否还会害怕。你望着来时的山路，把答案写在霞光里。',choices:[{id:'insight',label:'留下一段修行心得',rewards:{exp:1800},result:'丹息渐稳，修为 +1800。'},{id:'herbs',label:'帮他整理药篓',rewards:{herbs:45},result:'渡口分得灵草 +45。'}]},
 furnace:{title:'空炉里的回音',text:'炉中最后一声锤响来自百年前。守炉人把一块旧铁交给你，请你带它走出山谷，听听今日的风。',choices:[{id:'ore',label:'淬出旧铁新光',rewards:{ore:100},result:'旧铁重生，玄铁 +100。'},{id:'insight',label:'听完百年余音',rewards:{exp:2400},result:'道音入心，修为 +2400。'}]}
};
