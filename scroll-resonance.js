// Original, bounded set content. Effects are additive and derived from saved choices.
export const RESONANCE_GEAR={
 stoneTablet:{name:'镇岳碑',slot:'charm',quality:'artifact',def:3,hp:18,price:0,gate:4},
 earthBanner:{name:'厚土幡',slot:'charm',quality:'artifact',def:5,hp:35,price:0,gate:13},
 mistLamp:{name:'照息灯',slot:'charm',quality:'artifact',atk:2,hp:20,price:0,gate:6},
 moonDisc:{name:'清辉轮',slot:'charm',quality:'artifact',def:4,hp:35,price:0,gate:16},
 starDial:{name:'引星盘',slot:'charm',quality:'artifact',atk:3,def:2,price:0,gate:8},
 tidePearl:{name:'归潮珠',slot:'charm',quality:'artifact',atk:4,hp:25,price:0,gate:11}
};
export const RESONANCE_TREASURES={
 stoneTablet:{area:'cliff',source:'玄铁崖首通',effect:'基础护体 +3、气血 +18；山河系列'},
 earthBanner:{area:'forge',source:'赤砾谷首通',effect:'基础护体 +5、气血 +35；山河系列'},
 mistLamp:{area:'marsh',source:'照月泽首通',effect:'基础攻伐 +2、气血 +20；灵照系列'},
 moonDisc:{area:'mirror',source:'照影湖首通',effect:'基础护体 +4、气血 +35；灵照系列'},
 starDial:{area:'peak',source:'落星峰首通',effect:'基础攻伐 +3、护体 +2；星澜系列'},
 tidePearl:{area:'reed',source:'浮芦汀首通',effect:'基础攻伐 +4、气血 +25；星澜系列'}
};
export const TREASURE_RESONANCES=[
 {id:'mountains',name:'山河共鸣',style:'稳固根基',members:['bell','stoneTablet','earthBanner'],tiers:[{count:2,def:.04,text:'护体 +4%'},{count:3,hp:.05,text:'气血上限 +5%'}]},
 {id:'breathing',name:'灵照共鸣',style:'吐纳积累',members:['mountainSeal','mistLamp','moonDisc'],tiers:[{count:2,gain:.08,text:'单次修为 +8%'},{count:3,speed:.05,text:'修炼减时 +5%'}]},
 {id:'stars',name:'星澜共鸣',style:'攻伐破防',members:['skyMirror','starDial','tidePearl'],tiers:[{count:2,atk:.04,text:'攻伐 +4%'},{count:3,pierce:.04,text:'技能忽略护体 +4个百分点（总计最多85%）'}]}
];
export const TECHNIQUE_COMBOS=[
 {id:'edge',name:'剑息破岳',style:'破防',recipes:[{id:'edge-qi',chapter:'qi',main:'sword',aux:'cycle',pierce:.06,text:'技能忽略护体 +6个百分点（总计最多85%）'},{id:'edge-foundation',chapter:'foundation',main:'bladeFoundation',aux:'meridian',pierce:.10,text:'技能忽略护体 +10个百分点（总计最多85%）'}]},
 {id:'guard',name:'玄身护元',style:'护盾',recipes:[{id:'guard-qi',chapter:'qi',main:'body',aux:'breath',shield:.20,text:'技能护盾额外增加20%护体值'},{id:'guard-foundation',chapter:'foundation',main:'stoneFoundation',aux:'foundationBreath',shield:.35,text:'技能护盾额外增加35%护体值'}]},
 {id:'sustain',name:'回澜养息',style:'续航',recipes:[{id:'sustain-qi',chapter:'qi',main:'breath',aux:'body',guardHeal:.01,text:'守势额外回复1%最大气血'},{id:'sustain-foundation',chapter:'foundation',main:'jadeFoundation',aux:'meridian',guardHeal:.015,text:'守势额外回复1.5%最大气血'}]},
 {id:'cultivation',name:'周天归元',style:'减时 · 增修',recipes:[{id:'cultivation-qi',chapter:'qi',main:'cycle',aux:'breath',gain:.10,speed:.04,text:'单次修为 +10%；修炼减时 +4%'},{id:'cultivation-foundation',chapter:'foundation',main:'foundationBreath',aux:'cycle',gain:.15,speed:.06,text:'单次修为 +15%；修炼减时 +6%'}]}
];
