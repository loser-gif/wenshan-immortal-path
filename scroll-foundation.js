// The foundation chapter adds content; the original qi chapter keeps its identifiers and rewards.
export const FOUNDATION_PATHS={
 edge:{name:'锋行道基',short:'破防攻伐',normal:{atk:.10,pierce:.08},heaven:{atk:.15,pierce:.12}},
 guard:{name:'厚土道基',short:'护身续战',normal:{hp:.12,def:.06,guardHeal:.015},heaven:{hp:.18,def:.09,guardHeal:.025}},
 flow:{name:'灵息道基',short:'吐纳积累',normal:{gain:.40},heaven:{gain:.60}}
};
export const FOUNDATION_NEED=[5000,7000,10000,14000,19000,26000,35000,46000,60000,80000];
export const FOUNDATION_GEAR={
 tideSword:{name:'归潮剑',slot:'weapon',quality:'epic',atk:70,set:'tide',price:2400,gate:11},
 tideRobe:{name:'归潮法衣',slot:'robe',quality:'epic',def:40,hp:220,set:'tide',price:2600,gate:11},
 tideCharm:{name:'归潮珏',slot:'charm',quality:'epic',atk:18,def:14,hp:140,set:'tide',price:2200,gate:11},
 cloudCrown:{name:'浮云道冠',slot:'head',quality:'epic',def:10,hp:70,price:1500,gate:11},
 cloudBoots:{name:'凌波履',slot:'boots',quality:'epic',def:8,hp:100,price:1500,gate:11},
 cloudBelt:{name:'流光束带',slot:'belt',quality:'epic',hp:155,price:1500,gate:11},
 emberSword:{name:'赤霄剑',slot:'weapon',quality:'epic',atk:115,set:'ember',price:5800,gate:16},
 emberRobe:{name:'赤霄道袍',slot:'robe',quality:'epic',def:62,hp:350,set:'ember',price:6200,gate:16},
 emberCharm:{name:'赤霄环',slot:'charm',quality:'epic',atk:30,def:21,hp:230,set:'ember',price:5400,gate:16},
 starCrown:{name:'照星道冠',slot:'head',quality:'epic',def:18,hp:120,price:3800,gate:16},
 starBoots:{name:'踏星履',slot:'boots',quality:'epic',def:15,hp:175,price:3800,gate:16},
 starBelt:{name:'周天束带',slot:'belt',quality:'epic',hp:265,price:3800,gate:16},
 skyMirror:{name:'观澜镜',slot:'charm',quality:'artifact',atk:35,def:30,hp:260,passive:'护体 +8%；单次修为 +10%',price:0,gate:20}
};
export const FOUNDATION_TECHNIQUES=[
 {id:'foundationBreath',name:'凝元真诀',source:'merchant',gate:11,desc:'每重修为 +30%、护体 +2%',gain:.30,def:.02,max:5,cost:1200},
 {id:'meridian',name:'通脉要诀',source:'merchant',gate:13,desc:'每重气血 +8%、修炼间隔缩短2%',hp:.08,speed:.02,max:5,cost:1600},
 {id:'jadeFoundation',name:'沧溟御气篇',source:'jade',gate:13,trial:4,desc:'每重修为 +20%、护体 +7%；可作术修主辅功法',gain:.20,def:.07,max:3,cost:300},
 {id:'bladeFoundation',name:'破霄剑经',source:'blade',gate:13,trial:4,desc:'每重攻伐 +15%、修为 +10%；可作剑修主辅功法',atk:.15,gain:.10,max:3,cost:300},
 {id:'stoneFoundation',name:'镇岳金身诀',source:'stone',gate:13,trial:4,desc:'每重气血 +18%、护体 +10%；可作体修主辅功法',hp:.18,def:.10,max:3,cost:300}
];
export const FOUNDATION_AREAS=[
 {id:'reed',name:'浮芦汀',gate:11,chapter:'foundation',desc:'云海之上，芦花藏着一条新仙路。',enemy:'泽灵巡卫',hp:1800,atk:160,def:62,seconds:105,stones:170,ore:22,herbs:14,jade:8,accessories:['cloudCrown','cloudBoots','cloudBelt'],loot:['tideSword','tideRobe','tideCharm']},
 {id:'forge',name:'赤砾谷',gate:13,chapter:'foundation',desc:'旧炉余火未熄，赤岩凝成披甲守将。',enemy:'赤炉甲将',hp:3000,atk:210,def:95,seconds:115,stones:240,ore:32,herbs:12,jade:10,accessories:['cloudCrown','cloudBoots','cloudBelt'],loot:['tideSword','tideRobe','tideCharm']},
 {id:'mirror',name:'照影湖',gate:16,chapter:'foundation',desc:'湖面映出另一种可能，出招前须辨虚实。',enemy:'照影镜灵',hp:4400,atk:280,def:120,seconds:125,stones:340,ore:32,herbs:25,jade:15,accessories:['starCrown','starBoots','starBelt'],loot:['emberSword','emberRobe','emberCharm']},
 {id:'abyss',name:'沉星渊',gate:19,chapter:'foundation',desc:'群星沉入深渊，守关者以道音叩问来人。',enemy:'沉星镇渊使',hp:6200,atk:355,def:165,seconds:135,stones:480,ore:45,herbs:30,jade:20,accessories:['starCrown','starBoots','starBelt'],loot:['emberSword','emberRobe','emberCharm']}
];
export const FOUNDATION_TRIALS=[
 {name:'问基试 · 定心',hp:6800,atk:365,def:175},
 {name:'问基试 · 观潮',hp:8300,atk:415,def:205},
 {name:'筑基终试 · 开山',hp:10000,atk:465,def:235}
];

// Optional field trials reuse known gear identities and the existing economy.
export const FOUNDATION_FIELD_TRIALS={
 reed:{name:'芦汀截潮',gate:12,hp:2700,atk:288,def:62,enemy:'回潮阵眼',rule:'蓄势回合回复10%最大气血；这一回合的技能伤害会等额抵消回潮。',counter:'技能压制回血，或以守势承接后持续输出；血量不足时先保命。',story:'摆渡人每夜把船系在同一根芦桩上，天亮却总被潮水推回原处。你循着水纹找到阵眼，决定替他截断这道回潮。',ending:'潮声渐平，旧渡船终于抵达对岸。摆渡人把一双淬过芦露的靴履留在船头。',gear:{base:'cloudBoots',stat:'hp',value:24},rewards:{stones:700,ore:65,jade:18}},
 forge:{name:'赤炉解甲',gate:14,hp:4500,atk:378,def:95,enemy:'熔甲守炉人',rule:'常态护体提高60%；守势接下蓄势招，或成功闪避任意一击，下一次出剑或技能面对的护体降至原来的45%。',counter:'破防术法可穿过熔甲；守住裂甲炎斩，再用高倍率招式抓住破绽。',story:'守炉人的甲壳早已和旧炉连在一起。他并非拦路，只是在等一个能接住最后一锤的人，让炉火有处归去。',ending:'最后一锤落定，赤炉熄火。守炉人将余温锻进归潮剑，交到你手中。',gear:{base:'tideSword',stat:'atk',value:8},rewards:{stones:1000,ore:100,jade:25}},
 mirror:{name:'照影辨真',gate:17,hp:6600,atk:504,def:120,enemy:'复照镜影',rule:'连续两回合使用相同攻击（出剑或技能）会反震12%本次伤害；蓄势时技能仍额外反震18%。',counter:'交替出剑与技能；守势、闪避或服丹会打断重复招式。蓄势时以守势应对。',story:'湖边修士留下了一封未寄出的信。镜影不停重复落笔的动作，却从来写不出第二句话。试着换一种招式，也许能让它向前。',ending:'你收剑停笔，镜影终于写完那封信。湖面凝出一枚淬炼过的赤霄环，照见的已不是昨日。',gear:{base:'emberCharm',stat:'def',value:8},rewards:{stones:1500,ore:100,jade:40}},
 abyss:{name:'沉星守灯',gate:20,hp:9300,atk:639,def:165,enemy:'负星守灯者',rule:'硬接一击先增加1层星压，每层使本次攻伐提高8%，最多3层；守势先清除2层，成功闪避清空。',counter:'留意星压，不要连续硬接。护体、护盾与回血能延长续战；守势同时补回被封去的真气。',story:'沉星渊底有一盏快要熄灭的灯。守灯者肩上落满星砂，只有接替他撑过这一阵，灯火才能被送回山上。',ending:'星砂散去，灯火重新明亮。守灯者将护过灯芯的赤霄道袍赠你，山路上多了一点暖光。',gear:{base:'emberRobe',stat:'hp',value:30},rewards:{stones:2200,ore:150,jade:60}}
};
export const FOUNDATION_FIELD_EVENTS={
 reed:{title:'渡船的另一岸',text:'摆渡人问你，渡过云海之后还会不会回头。你把芦花放进船舱，听他讲起第一位乘客。',insight:'听一段渡河往事',jade:'收下芦露灵髓'},
 forge:{title:'余温留字',text:'赤炉旁的石壁刻着历代工匠的名字。最后一个名字只刻了一半，炉火却仍替他照亮剩下的笔画。',insight:'补全炉边旧记',jade:'收拢炉心结晶'},
 mirror:{title:'未寄的信',text:'湖面浮着一封没有收信人的信。你读到一半，水中的字迹变成了自己来时的脚印。',insight:'读完镜中来信',jade:'捞起凝光灵髓'},
 abyss:{title:'山上的灯',text:'深渊里传来守灯者的低声吟唱。他说每一粒落星都记得山上的方向，只是很久没有人问过。',insight:'记下引星歌',jade:'拾取灯下星髓'}
};
