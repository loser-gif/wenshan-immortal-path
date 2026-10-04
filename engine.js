export const OFFLINE_CAP=8*60*60;
export const REALMS=[
 {name:'凡人',title:'山门之外',need:80,rate:1},
 {name:'炼气',title:'引气归元',need:1800,rate:2},
 {name:'筑基',title:'道基初成',need:12000,rate:6},
 {name:'金丹',title:'丹成无悔',need:60000,rate:15},
 {name:'元婴',title:'神游天地',need:220000,rate:35},
 {name:'化神',title:'一念山海',need:800000,rate:80},
 {name:'炼虚',title:'返照太虚',need:2600000,rate:180},
 {name:'合体',title:'身与道合',need:8000000,rate:380},
 {name:'大乘',title:'万法归一',need:25000000,rate:800},
 {name:'渡劫',title:'九霄问心',need:72000000,rate:1700},
 {name:'真仙',title:'长生未央',need:180000000,rate:3600}
];
export const STAGES=['初期','中期','后期','圆满'];
export const ZONES=[
 {name:'青岚山径',tag:'山雨初晴',level:0,desc:'山雾中藏着初生灵草。山魈守住石阶，也守着你第一场试炼。',enemy:'山魈',seconds:60,stones:4,herbs:1,ore:1},
 {name:'听雨竹海',tag:'竹影藏锋',level:1,desc:'墨竹深处灵泉不歇。草木繁盛，是采药养炉的好去处。',enemy:'墨竹妖',seconds:75,stones:7,herbs:3,ore:1},
 {name:'沉星古墟',tag:'故人无声',level:2,desc:'旧剑沉入星沙，玄铁散落其间。残阵仍记得前人的锋芒。',enemy:'守墟剑影',seconds:90,stones:12,herbs:1,ore:4},
 {name:'九霄云渡',tag:'天门将启',level:3,desc:'渡口悬于流云之上。雷海淬出晶髓，也磨砺问道之心。',enemy:'劫雷化身',seconds:120,stones:22,herbs:3,ore:3},
 {name:'照夜寒潭',tag:'一潭星火',level:5,desc:'星火落入千年寒潭。冷月下的古灵，守着更丰厚的灵藏。',enemy:'照夜蛟灵',seconds:150,stones:55,herbs:8,ore:8},
 {name:'太虚天隙',tag:'虚空回响',level:7,desc:'天地在此开出一线缝隙。每一次回响，都像未来的自己。',enemy:'太虚道影',seconds:180,stones:130,herbs:18,ore:20},
 {name:'归墟仙台',tag:'万象归真',level:9,desc:'石阶尽头不见天门，唯有一面照心古镜。最后的守关人，也许正是你。',enemy:'归墟镜灵',seconds:240,stones:280,herbs:40,ore:45}
];
export const SECTS=[
 {id:'qinglan',name:'青岚观',motto:'以静养真，以道观山',effect:'自动修炼效率 +15%',desc:'擅长长养心性，适合闭关积累。'},
 {id:'yujian',name:'御剑台',motto:'一剑出鞘，万山回声',effect:'攻伐 +15%',desc:'注重实战，更早击败秘境守关者。'},
 {id:'danxia',name:'丹霞谷',motto:'草木有情，炉火有灵',effect:'丹药炼制时间 -20%',desc:'让巡山所得更快化作修行资粮。'}
];
export const TECHNIQUES=[
 {id:'heart',name:'通玄心经',desc:'每级自动修炼效率 +12%',max:20},
 {id:'sword',name:'松风剑诀',desc:'每级攻伐 +6%',max:20},
 {id:'body',name:'玄纹护身诀',desc:'每级气血 +5%、护体 +2',max:20},
 {id:'travel',name:'御风步',desc:'每级巡山耗时 -2%（最高 -30%）',max:15}
];
export const RECIPES=[
 {id:'heal',name:'回春丹',item:'pills',description:'恢复 35 + 当前境界 × 10 气血',cost:{herbs:3,stones:8},seconds:20,station:1},
 {id:'break',name:'破境丹',item:'breakPills',description:'跨越大境界时消耗；小境界不需要',cost:{herbs:8,ore:3,shards:1,stones:40},seconds:90,station:1},
 {id:'spirit',name:'聚灵丹',item:'spiritPills',description:'服用后自动修炼翻倍 30 分钟，可叠加至 8 小时',cost:{herbs:12,ore:2,stones:35},seconds:90,station:2}
];
export const RESOURCE_NAMES={stones:'灵石',herbs:'灵草',ore:'玄铁',shards:'灵髓',contribution:'贡献',breakPills:'破境丹'};
const finite=(n,max=1e14)=>Number.isFinite(n)&&n>=0&&n<=max;
export const levelName=s=>REALMS[s.realm].name+(s.realm?STAGES[s.stage]:'');
export const finished=s=>s.realm===10&&s.stage===3&&s.completed;
export const needExp=s=>Math.floor(REALMS[s.realm].need*(s.realm?[1,1.8,3,4.8][s.stage]:1));
export const majorBreak=s=>s.realm===0||s.stage===3;
export const nextName=s=>finished(s)?'仙途圆满':s.realm===10&&s.stage===3?'长生道成':majorBreak(s)?REALMS[s.realm+1].name+'初期':REALMS[s.realm].name+STAGES[s.stage+1];
export const sectRank=s=>[0,100,500,2000,8000].filter(n=>s.sectEarned>=n).length-1;
export const rankName=s=>['外门弟子','内门弟子','亲传弟子','执事','长老'][sectRank(s)];
export const idleRate=s=>REALMS[s.realm].rate*(1+s.techniques.heart*.12+sectRank(s)*.05+(s.sect==='qinglan'?.15:0));
export const maxHp=s=>Math.floor((48+s.realm*30+s.stage*8+s.armor*14)*(1+s.techniques.body*.05));
export const maxEnergy=s=>10+s.realm*2;
export const attack=s=>Math.floor((9+s.realm*9+s.stage*3+s.weapon*6)*(1+s.techniques.sword*.06)*(s.sect==='yujian'?1.15:1));
export const armor=s=>s.realm+2*s.armor+2*s.techniques.body;
export const power=s=>attack(s)*3+armor(s)*4+Math.floor(maxHp(s)/5);
export const enemyStats=z=>({hp:Math.floor(26*Math.pow(2.1,z)),attack:Math.floor(7*Math.pow(1.65,z))});
export const expeditionSeconds=(s,z=s.expedition?.zone??0)=>Math.round(ZONES[z].seconds*(1-s.techniques.travel*.02));
export const isBusy=s=>!!(s.battle||s.encounter);
export function createState(now=Date.now()){return {version:2,revision:0,tutorial:{version:1,status:'active',step:0,seen:[],performed:[]},runId:now.toString(36)+'-'+Math.random().toString(36).slice(2,8),name:'无名客',realm:0,stage:0,day:1,exp:0,insight:0,stones:16,herbs:2,ore:0,pills:1,breakPills:0,spiritPills:0,shards:0,weapon:0,armor:0,hp:48,energy:10,zone:0,encounter:null,battle:null,won:0,visited:0,ending:false,completed:false,cleared:ZONES.map(()=>false),lastTick:now,lastMeditate:0,lastRest:0,lastErrand:0,expCarry:0,energyCarry:0,hpCarry:0,insightCarry:0,contributionCarry:0,boostUntil:0,sect:null,contribution:0,sectEarned:0,techniques:{heart:0,sword:0,body:0,travel:0},furnace:1,forge:1,job:null,expedition:null,expeditionRounds:0,offlineReport:null,history:[{day:1,text:'你在山脚醒来，掌心玉简浮现「问山」二字。一缕灵气开始自行运转，漫长的仙途由此而生。',kind:'story'}]};}
export function log(s,text,kind='normal'){s.history.unshift({day:s.day,text,kind});s.history=s.history.slice(0,80);return text;}
export function requirements(s){if(finished(s))return [];const big=majorBreak(s),r=s.realm;return [{label:'修为',value:s.exp,need:needExp(s)},{label:'道悟',value:s.insight,need:r===0?2:big?(r+1)*8:r*4+s.stage*2+2},{label:'灵髓',value:s.shards,need:big&&r>0?r*r+2:0},{label:'灵石',value:s.stones,need:big&&r>0?r*r*r*90+25:0},{label:'破境丹',value:s.breakPills,need:big&&r>0?Math.ceil(r/2):0}];}
export const canBreak=s=>!finished(s)&&!isBusy(s)&&requirements(s).every(r=>r.value>=r.need);
export function addExp(s,n){const before=s.exp;if(!finished(s))s.exp=Math.min(needExp(s),s.exp+Math.max(0,Math.floor(n)));return s.exp-before;}
export function techniqueCost(s,id){const lv=s.techniques[id];return {contribution:20*(lv+1)*(lv+1),stones:30*(lv+1)*(lv+1)};}
export const canAfford=(s,cost)=>Object.entries(cost).every(([k,n])=>s[k]>=n);
function spend(s,cost){for(const [k,n] of Object.entries(cost))s[k]-=n;}
export function equipmentCost(s,item){const lv=s[item];return {ore:6+lv*4,shards:Math.floor(lv/3),stones:35*(lv+1)*(lv+1)};}
export function stationCost(s,id){return {ore:20*s[id],stones:100*s[id]*s[id]};}
export function craftingPlan(s,id,qty=1){
 if(![1,5].includes(qty))return null;
 const rec=RECIPES.find(r=>r.id===id);if(rec){const cost=Object.fromEntries(Object.entries(rec.cost).map(([k,v])=>[k,v*qty]));const secs=Math.max(10,Math.ceil(rec.seconds*(s.sect==='danxia'?.8:1)/(1+(s.furnace-1)*.1)));return {id,name:rec.name,item:rec.item,qty,cost,seconds:secs*qty,required:rec.station,station:'furnace'};}
 if(['weapon','armor'].includes(id)&&qty===1&&s[id]<30){const seconds=60*(s[id]+1);return {id,name:id==='weapon'?'淬炼佩剑':'淬炼法衣',item:id,qty:1,cost:equipmentCost(s,id),seconds,required:Math.ceil((s[id]+1)/3),station:'forge'};}
 return null;
}
export function advance(s,now=Date.now()){
 const report={elapsed:0,credited:0,capped:false,exp:0,stones:0,herbs:0,ore:0,shards:0,insight:0,contribution:0,rounds:0,crafted:null};
 if(!Number.isFinite(now)||now<0)return report;
 if(now<s.lastTick)return report;
 const raw=(now-s.lastTick)/1000;if(raw<.001)return report;
 const seconds=Math.min(raw,OFFLINE_CAP),from=s.lastTick,until=from+seconds*1000;report.elapsed=raw;report.credited=seconds;report.capped=raw>OFFLINE_CAP;
 const cuts=[0,seconds];const boostEnd=(s.boostUntil-from)/1000;if(boostEnd>0&&boostEnd<seconds)cuts.push(boostEnd);if(s.sect)for(const target of [100,500,2000,8000]){const at=(target-s.sectEarned)*60-s.contributionCarry;if(at>0&&at<seconds)cuts.push(at);}cuts.sort((a,b)=>a-b);let income=0;for(let i=0;i<cuts.length-1;i++){const t=(cuts[i]+cuts[i+1])/2;const earned=s.sect?s.sectEarned+Math.floor((s.contributionCarry+t)/60):s.sectEarned;const rank=[0,100,500,2000,8000].filter(n=>earned>=n).length-1;const rate=REALMS[s.realm].rate*(1+s.techniques.heart*.12+rank*.05+(s.sect==='qinglan'?.15:0));income+=(cuts[i+1]-cuts[i])*rate*(from+t*1000<s.boostUntil?2:1);}const potential=s.expCarry+income;const whole=Math.floor(potential+1e-7);report.exp=addExp(s,whole);s.expCarry=s.exp>=needExp(s)?0:Math.max(0,potential-whole);
 s.insightCarry+=seconds;report.insight=Math.floor(s.insightCarry/300);s.insight+=report.insight;s.insightCarry%=300;
 s.energyCarry+=seconds;const en=Math.floor(s.energyCarry/45);s.energy=Math.min(maxEnergy(s),s.energy+en);s.energyCarry%=45;
 if(!s.battle){s.hpCarry+=seconds;const heal=Math.floor(s.hpCarry/15);s.hp=Math.min(maxHp(s),s.hp+heal);s.hpCarry%=15;}
 if(s.sect){s.contributionCarry+=seconds;report.contribution=Math.floor(s.contributionCarry/60);s.contribution+=report.contribution;s.sectEarned+=report.contribution;s.contributionCarry%=60;}
 if(s.expedition){const e=s.expedition,z=ZONES[e.zone];e.progress+=seconds;const roundTime=expeditionSeconds(s,e.zone),rounds=Math.floor(e.progress/roundTime);e.progress%=roundTime;if(rounds){report.rounds=rounds;report.stones=rounds*z.stones;report.herbs=rounds*z.herbs;report.ore=rounds*z.ore;report.shards=(Math.floor((e.rounds+rounds)/5)-Math.floor(e.rounds/5))*(e.zone>=3?2:1);e.rounds+=rounds;s.expeditionRounds+=rounds;for(const k of ['stones','herbs','ore','shards'])s[k]+=report[k];}}
 if(s.job){s.job.remaining=Math.max(0,s.job.remaining-seconds);if(s.job.remaining===0){const job=s.job;report.crafted={name:job.name,qty:job.qty};s[job.item]+=job.qty;if(job.item==='armor')s.hp=Math.min(maxHp(s),s.hp+14);log(s,`${job.name}完成${['weapon','armor'].includes(job.item)?'':' ×'+job.qty}，已收入行囊。`,'gain');s.job=null;}}
 s.lastTick=now;return report;
}
export function act(s,type,payload={},random=Math.random,now=Date.now()){
 const fail=text=>({ok:false,text}),success=text=>({ok:true,text});
 if(type==='dismissOffline'){s.offlineReport=null;return success('已收好此行所得。');}
 if(type==='stopExpedition'){s.expedition=null;return success(log(s,'巡山灵傀已召回，所得均已收入行囊。'));}
 if(['cultivate','rest','breakthrough','joinSect','errand','learn','upgradeStation','startCraft','buy','craft'].includes(type)&&isBusy(s))return fail('先处理眼前的奇遇，再安排下一程。');
 if(type==='cultivate'){const wait=Math.ceil((s.lastMeditate+60000-now)/1000);if(wait>0)return fail(`气息尚未平复，${wait} 秒后可再凝神。`);if(s.energy<2)return fail('精力不足，先调息或稍候恢复。');if(s.exp>=needExp(s))return fail('修为已满，先完成破境。');s.lastMeditate=now;s.energy-=2;s.day++;const gain=addExp(s,Math.floor(idleRate(s)*45));s.insight++;return success(log(s,`你凝神吐纳，修为 +${gain}，道悟 +1。自动修炼仍在继续。`,'gain'));}
 if(type==='rest'){const wait=Math.ceil((s.lastRest+60000-now)/1000);if(wait>0)return fail(`${wait} 秒后可再次调息。`);s.lastRest=now;s.day++;s.hp=maxHp(s);s.energy=Math.min(maxEnergy(s),s.energy+4);return success(log(s,'你调息养神，气血回满，精力 +4。','rest'));}
 if(type==='breakthrough'){if(!canBreak(s))return fail('破境条件尚未齐备。');const req=requirements(s);for(const q of req){const k={'灵髓':'shards','灵石':'stones','破境丹':'breakPills'}[q.label];if(k)s[k]-=q.need;}s.exp=0;s.expCarry=0;const was=levelName(s);if(s.realm===10&&s.stage===3){s.completed=true;}else if(majorBreak(s)){s.realm++;s.stage=0;}else s.stage++;s.day++;s.hp=maxHp(s);s.energy=maxEnergy(s);s.ending=false;return success(log(s,`【破境】${was} → ${finished(s)?'长生道成':levelName(s)}。${s.realm===1?'宗门已向你敞开，去寻一门自己的道。':'灵气再行周天，眼前天地又宽一重。'}`,'break'));}
 if(type==='challenge'){const z=Number(payload.zone);if(!Number.isInteger(z)||!ZONES[z]||ZONES[z].level>s.realm)return fail('境界尚不足以踏入此地。');if(isBusy(s))return fail('先完成眼前的际遇。');if(s.energy<2||s.hp<10)return fail('挑战需要 2 精力、至少 10 气血。');s.zone=z;s.energy-=2;s.day++;s.visited++;s.encounter={id:'beast',zone:z};return legacyAct(s,'choice',{choice:'fight'},random);}
 if(type==='startExpedition'){const z=Number(payload.zone);if(!Number.isInteger(z)||!ZONES[z]||!s.cleared[z])return fail('先亲手击败此地守关者，才能解锁巡山。');if(s.expedition?.zone===z)return fail('灵傀已在此地巡山。');s.expedition={zone:z,progress:0,rounds:0};return success(log(s,`灵傀前往${ZONES[z].name}。此后将反复巡山，离线亦可结算，单次离线最多 8 小时。`,'gain'));}
 if(type==='joinSect'){const sect=SECTS.find(x=>x.id===payload.id);if(s.realm<1)return fail('炼气后方可拜入宗门。');if(!sect)return fail('宗门不存在。');if(s.sect===sect.id)return fail('你已在此宗门。');if(s.sect&&s.stones<200)return fail('改换宗门需要 200 灵石，所学功法保留。');if(s.sect)s.stones-=200;s.sect=sect.id;return success(log(s,`你拜入${sect.name}。${sect.motto}。所学功法与现有贡献均保留。`,'story'));}
 if(type==='errand'){if(!s.sect)return fail('先拜入一座宗门。');if(s.lastErrand+60000>now)return fail('宗门差事每分钟可完成一次。');const cost=payload.id==='herbs'?{herbs:5}:payload.id==='ore'?{ore:5}:null;if(!cost)return fail('请选择采药供奉或玄铁供奉。');if(!canAfford(s,cost))return fail('供奉材料不足。');spend(s,cost);s.lastErrand=now;const n=8+s.realm*2;s.contribution+=n;s.sectEarned+=n;return success(log(s,`宗门收下你的供奉，贡献 +${n}。`,'gain'));}
 if(type==='learn'){const tech=TECHNIQUES.find(x=>x.id===payload.id);if(!s.sect||!tech)return fail('拜入宗门后可研习功法。');if(s.techniques[tech.id]>=tech.max)return fail('这门功法已修至圆满。');const cost=techniqueCost(s,tech.id);if(!canAfford(s,cost))return fail('贡献或灵石不足。');spend(s,cost);s.techniques[tech.id]++;return success(log(s,`${tech.name}精进至 ${s.techniques[tech.id]} 重。`,'gain'));}
 if(type==='upgradeStation'){const id=payload.id;if(!['furnace','forge'].includes(id)||s[id]>=10)return fail('此炉已臻上品。');const cost=stationCost(s,id);if(!canAfford(s,cost))return fail('升级所需玄铁或灵石不足。');spend(s,cost);s[id]++;return success(log(s,`${id==='furnace'?'丹炉':'锻炉'}升至 ${s[id]} 阶。`,'gain'));}
 if(type==='startCraft'){if(s.job)return fail('炉火未熄，请等当前炼制完成。');const plan=craftingPlan(s,payload.id,Number(payload.qty??1));if(!plan)return fail('配方或数量无效。');if(s[plan.station]<plan.required)return fail(`需要 ${plan.required} 阶${plan.station==='furnace'?'丹炉':'锻炉'}。`);if(!canAfford(s,plan.cost))return fail('炼制材料不足。');spend(s,plan.cost);s.job={...plan,remaining:plan.seconds};return success(log(s,`${plan.name}${plan.qty>1?' ×'+plan.qty:''}已入炉，材料已扣除。`,'gain'));}
 if(type==='useSpirit'){if(s.spiritPills<1)return fail('行囊中没有聚灵丹。');if(s.boostUntil>=now+OFFLINE_CAP*1000)return fail('聚灵时间已达 8 小时上限。');s.spiritPills--;s.boostUntil=Math.min(now+OFFLINE_CAP*1000,Math.max(now,s.boostUntil)+1800000);return success(log(s,'聚灵丹化开，自动修炼效率翻倍 30 分钟。','gain'));}
 if(type==='craft')return act(s,'startCraft',{id:'heal',qty:1},random,now);
 if(type==='buy'&&['weapon','armor'].includes(payload.item))return act(s,'startCraft',{id:payload.item,qty:1},random,now);
 if(type==='buy'&&payload.item==='ore'){if(s.stones<15)return fail('灵石不足。');s.stones-=15;s.ore+=5;return success(log(s,'你以 15 灵石换得 5 份玄铁。','gain'));}
 return legacyAct(s,type,payload,random);
}

function legacyAct(s,type,payload={},random=Math.random){
 const fail=text=>({ok:false,text});const success=text=>({ok:true,text});
 if(['cultivate','rest','explore','breakthrough','buy','craft'].includes(type)&&isBusy(s))return fail('先处理眼前的奇遇，再安排下一程。');
 if(type==='cultivate'){
  if(s.energy<2)return fail('精力不足，先歇息一日。');
  s.energy-=2;s.day++;const n=7+s.realm*5;addExp(s,n);s.insight++;return success(log(s,`你收心入定，听见灵气如溪水流过经脉。修为 +${n}，道悟 +1。`,'gain'));
 }
 if(type==='rest') {s.day++;s.hp=maxHp(s);s.energy=maxEnergy(s);return success(log(s,'你枕着松风睡了一夜。醒来时，气血与精力尽复。','rest'));}
 if(type==='breakthrough'){
  if(!canBreak(s))return fail('破境条件尚未齐备。');
  const r=REALMS[s.realm];s.shards-=r.shards;s.stones-=r.stones;s.exp=0;s.realm++;s.day++;s.hp=maxHp(s);s.energy=maxEnergy(s);s.ending=s.realm===5;
  const lines=['','第一缕灵气归于丹田。自此，你已走过仙凡之间那道无形的门。','灵气凝而不散，道基终于筑成。你知道，这条路已经可以走得更远。','百转灵气结成一粒金丹。万籁俱静，只闻心中一声清鸣。','丹破婴生，神识第一次越过山巅。你看见天地，也看见来时的自己。','雷云散去，万山皆明。你终于懂得：仙途从未在天上，而在每一次不曾回头的选择里。'];
  return success(log(s,`【${REALMS[s.realm].name}】${lines[s.realm]}`,'break'));
 }
 if(type==='explore'){
  const z=Number(payload.zone);if(!Number.isInteger(z)||!ZONES[z]||ZONES[z].level>s.realm)return fail('这片天地尚未向你开放。');
  if(s.energy<2)return fail('精力不足，先回洞府歇息。');
  if(s.hp<10)return fail('气血太低，先歇息或服用回春丹。');
  s.zone=z;s.energy-=2;s.day++;s.visited++;
  const n=Math.min(4,Math.floor(random()*5));const events=['spring','traveler','ruin','beast','herb'];
  // The first two trips teach choices, then offer a guaranteed first battle.
  const id=s.visited===1?'spring':s.visited===2?'beast':events[n];s.encounter={id,zone:z};return success('山路尽头，有了新的际遇。');
 }
 if(type==='choice'){
  if(!s.encounter||s.battle)return fail('此刻没有待处理的奇遇。');
  const {id,zone:z}=s.encounter;const choice=payload.choice;const allowed={spring:['drink','gather'],traveler:['help','talk'],ruin:['study','search'],beast:['fight','leave'],herb:['gather','guard']}[id];
  if(!allowed?.includes(choice))return fail('请选择眼前的一条路。');
  if(choice==='help'&&s.herbs<1)return fail('需要 1 株灵草。');
  s.encounter=null;
  if(choice==='fight'||choice==='guard'){
   const foe=enemyStats(z);const hp=foe.hp; s.battle={name:ZONES[z].enemy,hp,maxHp:hp,attack:foe.attack,turn:1,qi:2,zone:z};return success(log(s,`${ZONES[z].enemy}拦住去路。你握紧手中长剑，凝神以待。`,'combat'));
  }
  if(choice==='leave')return success(log(s,'你收敛气息，沿侧旁的小路退去。留得从容，也是修行。'));
  if(id==='spring'&&choice==='drink'){const n=10+z*7;addExp(s,n);s.hp=Math.min(maxHp(s),s.hp+16);s.insight++;return success(log(s,`灵泉入喉，身心澄明。修为 +${n}，气血 +16，道悟 +1。`,'gain'));}
  if(id==='spring'&&choice==='gather'){s.herbs+=3+z;s.stones+=7+z*4;return success(log(s,`你将泉边的灵草收入行囊。灵草 +${3+z}，灵石 +${7+z*4}。`,'gain'));}
  if(id==='traveler'&&choice==='help'){s.herbs--;s.shards++;s.insight+=2;return success(log(s,'你将一株灵草赠予负伤的行者。他以一枚灵髓相谢，临别授你两句心诀。灵髓 +1，道悟 +2。','gain'));}
  if(id==='traveler'&&choice==='talk'){s.insight+=2;addExp(s,8+z*5);return success(log(s,'你与行者围炉论道。原来世间的路不止一条。道悟 +2，修为略有精进。','gain'));}
  if(id==='ruin'&&choice==='study'){s.insight+=3;addExp(s,12+z*8);return success(log(s,`你拂去碑上青苔，将失落的心法默记于心。道悟 +3，修为 +${12+z*8}。`,'gain'));}
  if(id==='ruin'&&choice==='search'){s.shards++;s.stones+=8+z*6;s.hp=Math.max(1,s.hp-(5+z*3));return success(log(s,`旧阵震动，你带着宝物脱身。灵髓 +1，灵石 +${8+z*6}；气血 -${5+z*3}。`,'gain'));}
  if(id==='herb'&&choice==='gather'){s.herbs+=2+z;s.stones+=6+z*4;return success(log(s,`你避开妖兽，只采走外围的灵草。灵草 +${2+z}，灵石 +${6+z*4}。`,'gain'));}
 }
 if(type==='combat'){
  const b=s.battle;if(!b)return fail('此刻没有斗法。');const move=payload.move;
  if(!['attack','skill','guard','flee','pill'].includes(move))return fail('招式无效。');
  if(move==='skill'&&b.qi<1)return fail('真气不足，守势可恢复 1 点真气。');
  if(move==='pill'&&s.pills<1)return fail('没有回春丹了。');
  if(move==='flee'){const loss=Math.max(0,b.attack-armor(s));s.hp=Math.max(1,s.hp-loss);s.battle=null;return success(log(s,`你借山势脱离战局，气血 -${loss}。`,'combat'));}
  let text='';let defend=false;
  if(move==='pill'){s.pills--;const heal=Math.min(35+s.realm*10,maxHp(s)-s.hp);s.hp+=heal;text=`回春丹入腹，气血 +${heal}。`;}
  else if(move==='guard'){defend=true;b.qi=Math.min(2,b.qi+1);text='你立下守势，恢复 1 点真气。';}
  else{const damage=attack(s)+(move==='skill'?8+s.realm*3:0);if(move==='skill')b.qi--;b.hp=Math.max(0,b.hp-damage);text=`${move==='skill'?'御气一剑':'你挥剑'}造成 ${damage} 点伤害。`;}
  if(b.hp<=0){const stones=13+b.zone*11;const xp=12+b.zone*9;s.stones+=stones;s.shards++;s.herbs++;addExp(s,xp);s.insight++;s.won++;s.ore+=3+b.zone*2;s.cleared[b.zone]=true;if(s.sect){s.contribution+=3;s.sectEarned+=3;}s.battle=null;return success(log(s,`${text}胜！灵石 +${stones}，灵髓 +1，灵草 +1，玄铁 +${3+b.zone*2}，修为 +${xp}，道悟 +1。已解锁此地巡山。`,'gain'));}
  const charged=b.turn%3===0;let hit=Math.max(1,b.attack+(charged?6+b.zone*3:0)-armor(s));if(defend)hit=Math.max(1,Math.floor(hit*.3));s.hp=Math.max(0,s.hp-hit);b.turn++;
  if(s.hp<=0){const lost=Math.floor(s.stones*.15);s.stones-=lost;s.hp=Math.ceil(maxHp(s)*.5);s.battle=null;s.day++;return success(log(s,`${text}你不敌昏倒，被采药人送回洞府。遗失 ${lost} 灵石，气血恢复至一半。`,'loss'));}
  return success(log(s,`${text}${b.name}${charged?'蓄力一击':'反击'}，你受到 ${hit} 点伤害。`,'combat'));
 }
 if(type==='usePill'){if(s.battle)return act(s,'combat',{move:'pill'},random);if(s.pills<1)return fail('没有回春丹了。');if(s.hp===maxHp(s))return fail('气血充盈，暂时不必服丹。');s.pills--;const n=Math.min(35+s.realm*10,maxHp(s)-s.hp);s.hp+=n;return success(log(s,`你服下回春丹，气血 +${n}。`,'gain'));}
 if(type==='craft'){if(s.herbs<3||s.stones<8)return fail('炼丹需要 3 株灵草与 8 枚灵石。');s.herbs-=3;s.stones-=8;s.pills++;return success(log(s,'炉火缓缓熄灭，一枚回春丹凝成。','gain'));}
 if(type==='buy'){
  const item=payload.item;if(item==='shard'){if(s.stones<28)return fail('灵石不足。');s.stones-=28;s.shards++;return success(log(s,'你从坊市购得一枚灵髓。','gain'));}
  if(item==='pill'){if(s.stones<12)return fail('灵石不足。');s.stones-=12;s.pills++;return success(log(s,'你购入一枚回春丹，收入行囊。','gain'));}
  if(!['weapon','armor'].includes(item))return fail('无此物品。');const costs=item==='weapon'?[25,65,120]:[30,70,130];const cost=costs[s[item]];if(cost===undefined)return fail('法器已臻上品。');if(s.stones<cost)return fail('灵石不足。');s.stones-=cost;s[item]++;if(item==='armor')s.hp+=12;return success(log(s,`${item==='weapon'?'佩剑':'法衣'}淬炼至 ${s[item]} 阶。`,'gain'));
 }
 return fail('此事暂不可行。');
}


export function validateSave(data,now=Date.now()){
 if(!data||![1,2].includes(data.version)||typeof data!=='object')return null;
 const isOld=data.version===1;const s={...createState(now),...data,version:2};
 const ints=['realm','stage','day','exp','insight','stones','herbs','ore','pills','breakPills','spiritPills','shards','weapon','armor','hp','energy','zone','won','visited','contribution','sectEarned','furnace','forge','expeditionRounds','revision'];
 if(ints.some(k=>!finite(s[k])||!Number.isInteger(s[k])))return null;
 if(s.realm>10||s.stage>3||s.weapon>30||s.armor>30||s.zone>=ZONES.length||s.day<1||s.furnace<1||s.furnace>10||s.forge<1||s.forge>10)return null;
 if(typeof s.name!=='string'||typeof s.runId!=='string'||typeof s.completed!=='boolean'||!Array.isArray(s.history))return null;s.name=s.name.slice(0,12);s.history=s.history.filter(h=>typeof h?.text==='string'&&Number.isInteger(h.day)).map(h=>({...h,kind:['story','normal','gain','rest','break','combat','loss'].includes(h.kind)?h.kind:'normal'})).slice(0,80);
 if(isOld){if(s.realm>5)return null;const oldNeeds=[24,70,140,240,360,0];const fraction=oldNeeds[s.realm]?Math.min(1,s.exp/oldNeeds[s.realm]):0;s.stage=0;s.exp=Math.floor(needExp(s)*fraction);s.completed=false;s.ending=false;s.lastTick=now;s.forge=Math.max(1,Math.ceil(Math.max(s.weapon,s.armor)/3));s.cleared=ZONES.map((z,i)=>i<Math.min(s.realm,4));if(s.realm===0&&s.won>0)s.cleared[0]=true;log(s,'【仙途新章】旧境界、道号与行囊均已保留。自动修炼、宗门与百艺已开启；离线收益从本次更新起计算。','story');}
 s.techniques={heart:0,sword:0,body:0,travel:0,...s.techniques};if(TECHNIQUES.some(t=>!Number.isInteger(s.techniques[t.id])||s.techniques[t.id]<0||s.techniques[t.id]>t.max))return null;
 if(s.sect&&!SECTS.some(x=>x.id===s.sect))return null;
 if(!Array.isArray(s.cleared)||s.cleared.length!==ZONES.length)return null;s.cleared=s.cleared.map(Boolean);
 for(const k of ['lastTick','lastMeditate','lastRest','lastErrand','boostUntil','expCarry','energyCarry','hpCarry','insightCarry','contributionCarry'])if(!finite(s[k],1e16))return null;
 for(const k of ['lastMeditate','lastRest','lastErrand'])s[k]=Math.min(s[k],now);s.boostUntil=Math.min(s.boostUntil,now+OFFLINE_CAP*1000);
 s.hp=Math.min(s.hp,maxHp(s));s.energy=Math.min(s.energy,maxEnergy(s));s.exp=Math.min(s.exp,needExp(s));
 if(s.encounter&&(!['spring','traveler','ruin','beast','herb'].includes(s.encounter.id)||!Number.isInteger(s.encounter.zone)||!ZONES[s.encounter.zone]))return null;
 if(s.battle&&(!Number.isInteger(s.battle.zone)||!ZONES[s.battle.zone]||typeof s.battle.name!=='string'||!['hp','maxHp','attack','turn','qi'].every(k=>finite(s.battle[k])&&Number.isInteger(s.battle[k]))||s.battle.qi>2||s.battle.hp>s.battle.maxHp||s.battle.turn<1))return null;
 if(s.encounter&&s.battle)return null;
 if(s.expedition&&(!Number.isInteger(s.expedition.zone)||!s.cleared[s.expedition.zone]||!finite(s.expedition.progress,240)||!Number.isInteger(s.expedition.rounds)||s.expedition.rounds<0))return null;
 if(s.job&&(!['pills','breakPills','spiritPills','weapon','armor'].includes(s.job.item)||!['heal','break','spirit','weapon','armor'].includes(s.job.id)||![1,5].includes(s.job.qty)||!finite(s.job.remaining,100000)||!finite(s.job.seconds,100000)||s.job.remaining>s.job.seconds||typeof s.job.name!=='string'))return null;
 if(!s.tutorial||s.tutorial.version!==1||!['active','paused','done'].includes(s.tutorial.status)||!Number.isInteger(s.tutorial.step)||s.tutorial.step<0||s.tutorial.step>5||!Array.isArray(s.tutorial.seen)||!Array.isArray(s.tutorial.performed)){s.tutorial={version:1,status:'active',step:0,seen:[],performed:[]};}else{s.tutorial={...s.tutorial,seen:s.tutorial.seen.filter(n=>Number.isInteger(n)&&n>=0&&n<6),performed:s.tutorial.performed.filter(x=>typeof x==='string').slice(-30)};}
 return s;
}
