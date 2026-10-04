import {canBreak,isBusy,requirements,needExp,levelName,nextName,finished} from './engine.js?v=2.2.0';
export const GUIDE_STEPS=[
 {id:'cultivate',title:'先认识修炼',description:'修为会自动增长，不用一直点。凝神吐纳可以立即增加修为和 1 道悟；每分钟一次，消耗 2 精力。修为满了，就要手动突破。',target:'[data-action="cultivate"]',tab:'home',label:'找到凝神吐纳',done:s=>s.lastMeditate>0||s.realm>0||s.exp>=needExp(s),hint:'实际凝神一次后，这一步会标记为已完成。若修为已满，也可以继续下一步。'},
 {id:'challenge',title:'亲手赢一场斗法',description:'去历练中的青岚山径，挑战山魈。御气一剑伤害高、消耗真气；敌人蓄势时，守势可以减伤并恢复真气。获胜会得到材料和 1 道悟。',target:'[data-challenge="0"]',tab:'world',label:'找到青岚山径',done:s=>s.cleared[0]||s.won>0,hint:'先挑战一次守关，才会开放这个地点的自动巡山。输了不会清空进度。'},
 {id:'expedition',title:'让材料自动进袋',description:'通关后，开启自动巡山。灵傀会反复收集灵石、灵草、玄铁，且不消耗精力。一次只能巡一地，离线也会结算。',target:'[data-expedition="0"]',tab:'world',label:'找到自动巡山',done:s=>!!s.expedition||s.expeditionRounds>0,hint:'如果已经有灵傀在巡山，不需要重新派遣或切换地点。'},
 {id:'breakthrough',title:'条件齐备，再突破',description:'修为是一条进度条，道悟是突破资格。条件全满足后，手动突破。道悟不会被消耗；还差什么、去哪里获得，突破卡片都会列出。',target:'.goal',tab:'home',label:'查看突破条件',done:s=>s.realm>0||finished(s),hint:'初次突破需要 80 修为与 2 道悟。凝神与首次斗法各给 1 道悟；自动修炼每 5 分钟也会获得 1。'},
 {id:'sect',title:'拜入宗门，学一门功法',description:'炼气后可以选择宗门。每分钟自动获得 1 贡献，贡献和灵石可用来研习功法，提升修炼、攻伐、防御或巡山效率。',target:'.sect-list',tab:'sect',label:'查看宗门',done:s=>!!s.sect,hint:'青岚观偏修炼，御剑台偏战斗，丹霞谷偏炼丹。已有宗门的道友无需换门。'},
 {id:'craft',title:'把材料炼成实力',description:'百艺的丹房可以炼丹，炼器页可以强化装备。材料在开炉时扣除，倒计时结束后自动入袋。炼丹、炼器共用一个制作任务。',target:'[data-craft="heal"][data-qty="1"]',tab:'bag',artTab:'alchemy',label:'找到回春丹配方',done:s=>!!s.job||s.tutorial.performed.includes('startCraft')||s.furnace>1||s.forge>1||s.pills>1||s.breakPills>0||s.spiritPills>0,hint:'第一炉可以炼回春丹：3 灵草 + 8 灵石。炼气之后跨大境界才需要破境丹，小境界不需要。'}
];
export function guideInfo(s){const index=Math.min(5,s.tutorial.step),base=GUIDE_STEPS[index];const info={...base,index,done:base.done(s)};
 if(isBusy(s)&&['cultivate','challenge','breakthrough','sect','craft'].includes(base.id)){info.tab='home';info.target=s.battle?'.combat-actions':'.choice-list';info.label=s.battle?'继续眼前斗法':'处理眼前奇遇';info.hint='先完成当前斗法或奇遇，再继续这一步；也可以暂时跳过教程。';}
 else if(base.id==='expedition'&&s.expedition){info.tab='home';info.target='.activity-grid';info.label='看看正在进行的巡山';}
 else if(base.id==='expedition'&&!s.cleared[0]){info.target='[data-challenge="0"]';info.label='先挑战青岚山径';}
 else if(base.id==='cultivate'&&s.exp>=needExp(s)){info.target='.goal';info.label='修为已满，查看突破';}
 else if(base.id==='sect'&&s.realm===0){info.tab='home';info.target='.goal';info.label='先查看炼气突破条件';}
 else if(base.id==='sect'&&s.sect){info.target='.technique-grid';info.label='看看已学功法';}
 else if(base.id==='craft'&&s.job){info.target='.job-card';info.label='看看当前炼制任务';}
 return info;}
export function tutorialControl(s,command){const t=s.tutorial;if(command==='replay'){t.status='active';t.step=0;t.seen=[];return true;}if(command==='pause'){t.status='paused';return true;}if(command==='resume'){t.status='active';return true;}if(command==='previous'){t.step=Math.max(0,t.step-1);t.status='active';return true;}if(command==='next'&&!guideInfo(s).done)return false;if(command==='next'||command==='skip'){if(!t.seen.includes(t.step))t.seen.push(t.step);if(t.step===5)t.status='done';else t.step++;return true;}return false;}
export function noteTutorialAction(s,type){if(!s.tutorial.performed.includes(type))s.tutorial.performed.push(type);s.tutorial.performed=s.tutorial.performed.slice(-30);}
export function nextTask(s,now=Date.now()){
 if(s.battle)return {title:'先完成眼前斗法',text:`正与${s.battle.name}交手。注意敌方是否蓄势，必要时用守势减伤。`,label:'继续斗法',tab:'home',target:'.combat-actions'};
 if(s.encounter)return {title:'先选择这次奇遇的走向',text:'每个选项下都写了收益或代价，选一条适合当前状态的路。',label:'查看奇遇',tab:'home',target:'.choice-list'};
 if(canBreak(s))return {title:`可以突破至${nextName(s)}了`,text:'条件全部齐备，成功率 100%。突破后会继续积累新的修为。',label:'查看并突破',tab:'home',target:'.goal'};
 const missing=requirements(s).filter(r=>r.value<r.need);
 if(s.exp>=needExp(s)&&missing.length){const r=missing[0],routes={'道悟':['world','[data-explore="0"]','赢一场守关或随缘探访可获得道悟；每 5 分钟也会自动 +1。'],'灵髓':['world','.zone-list','挑战、巡山每 5 趟，或在行囊坊市购买。'],'灵石':['world','.zone-list','开启自动巡山，持续收集灵石。'],'破境丹':['bag','[data-craft="break"]','在丹房炼制破境丹，所需材料来自巡山。']};const [tab,target,text]=routes[r.label]??['home','.goal','查看下方具体要求。'];return {title:`修为已满，还差 ${Math.ceil(r.need-r.value)} ${r.label}`,text,label:`去获取${r.label}`,tab,target,artTab:tab==='bag'?'alchemy':undefined};}
 if(s.realm===0&&s.lastMeditate===0&&s.exp<needExp(s))return {title:'从一次凝神吐纳开始',text:'自动修炼已经在进行。手动凝神能更快增长修为，同时获得 1 道悟。',label:'找到凝神吐纳',tab:'home',target:'[data-action="cultivate"]'};
 if(!s.cleared[0])return {title:'打通青岚山径',text:'击败山魈，拿到道悟与材料，并解锁自动巡山。',label:'前往第一场历练',tab:'world',target:'[data-challenge="0"]'};
 if(!s.expedition)return {title:'派出灵傀，持续收材料',text:'已通关的地点可以自动巡山，不耗精力，也不需要一直在线。',label:'选择巡山地点',tab:'world',target:'.zone-list'};
 if(s.realm>=1&&!s.sect)return {title:'选择一座宗门',text:'加入后会自动积累贡献，可以研习功法，长期提升实力。',label:'前往宗门',tab:'sect',target:'.sect-list'};
 return {title:'修炼与巡山，都在继续',text:'可以放心离开，单次离线最多结算 8 小时。下次回来先看能否突破，再用材料学习功法或炼丹。',label:'查看下一境界',tab:'home',target:'.goal'};
}
