// ═══════════════════════════════════════════════════════════════
// E7 GEAR CHECKER — HERO DATABASE
// Última actualización: Mayo 2026
// Para agregar héroes nuevos: copiar un objeto del array y editar
// ═══════════════════════════════════════════════════════════════

var E7_HEROES = [

// ── 3★ COVENANT ────────────────────────────────────────────────
{id:'adin',name:'Adin',stars:3,element:'earth',cls:'thief',ml:false,top:false,
 role:'dps',sets:['speed','crit'],
 stats:{spd:'fast',crate:'high',cdmg:'high',atkp:'high'},
 notes:'Atacante físico rápido. Necesita C.Rate al 100%.'},

{id:'adlay',name:'Adlay',stars:3,element:'earth',cls:'mage',ml:false,top:false,
 role:'dps',sets:['speed','destruction'],
 stats:{spd:'mid',crate:'high',cdmg:'high',atkp:'high'},
 notes:'Mago de tierra. Buena opción early game.'},

{id:'adventurer-ras',name:'Adventurer Ras',stars:3,element:'fire',cls:'knight',ml:false,top:false,
 role:'tank',sets:['speed','counter'],
 stats:{spd:'fast',hpp:'high',defp:'mid'},
 notes:'Tank que escala por HP. Buena opción F2P.'},

{id:'ainos',name:'Ainos',stars:3,element:'dark',cls:'soulweaver',ml:false,top:false,
 role:'support',sets:['speed','immunity'],
 stats:{spd:'fast',hpp:'mid',res:'mid'},
 notes:'Healer básico. Reemplazar pronto.'},

{id:'ainos-20',name:'Ainos 2.0',stars:3,element:'dark',cls:'soulweaver',ml:false,top:false,
 role:'support',sets:['speed','immunity'],
 stats:{spd:'fast',hpp:'mid',res:'mid'},
 notes:'Versión mejorada de Ainos. Sigue siendo básica.'},

{id:'ains',name:'Ains',stars:3,element:'earth',cls:'warrior',ml:false,top:false,
 role:'dps',sets:['speed','crit'],
 stats:{spd:'mid',crate:'high',cdmg:'high'},
 notes:'Guerrero básico de tierra.'},

{id:'alexa',name:'Alexa',stars:3,element:'ice',cls:'thief',ml:false,top:false,
 role:'debuffer',sets:['speed','effectiveness'],
 stats:{spd:'fast',eff:'high',hpp:'mid'},
 notes:'Debuffer básica. Poison. Reemplazar con mejor debuffer.'},

{id:'aras',name:'Ras',stars:3,element:'fire',cls:'knight',ml:false,top:false,
 role:'tank',sets:['speed','counter'],
 stats:{spd:'fast',hpp:'high',defp:'mid'},
 notes:'El protagonista. Mejorar con SC para ser viable en endgame.'},

{id:'armin',name:'Armin',stars:3,element:'earth',cls:'knight',ml:false,top:false,
 role:'tank',sets:['speed','counter'],
 stats:{spd:'fast',hpp:'high',defp:'high'},
 notes:'Tank básica. Reemplazar por Crimson Armin (SC).'},

{id:'batisse',name:'Batisse',stars:3,element:'fire',cls:'warrior',ml:false,top:false,
 role:'dps',sets:['speed','crit'],
 stats:{spd:'mid',crate:'high',cdmg:'high'},
 notes:'Guerrero fuego básico.'},

{id:'bask',name:'Bask',stars:3,element:'fire',cls:'knight',ml:false,top:false,
 role:'tank',sets:['speed','immunity'],
 stats:{spd:'fast',hpp:'high',defp:'mid'},
 notes:'Knight de fuego. Pasable early game.'},

{id:'bellona',name:'Bellona',stars:3,element:'earth',cls:'ranger',ml:false,top:true,
 role:'dps',sets:['speed','crit'],
 stats:{spd:'fast',crate:'high',cdmg:'high',atkp:'high'},
 notes:'Una de las mejores F2P. Excelente en hunts y arena. Skill 3 hace AoE.'},

{id:'carrot',name:'Carrot',stars:3,element:'fire',cls:'mage',ml:false,top:false,
 role:'dps',sets:['speed','crit'],
 stats:{spd:'mid',crate:'high',cdmg:'high',atkp:'high'},
 notes:'Mago de fuego. Burn DoT.'},

{id:'cecilia',name:'Cecilia',stars:3,element:'fire',cls:'knight',ml:false,top:false,
 role:'tank',sets:['speed','counter'],
 stats:{spd:'mid',hpp:'high',defp:'high'},
 notes:'Knight básica. La ML es mucho mejor.'},

{id:'celeste',name:'Celeste',stars:3,element:'ice',cls:'mage',ml:false,top:false,
 role:'debuffer',sets:['speed','effectiveness'],
 stats:{spd:'fast',eff:'high',hpp:'mid'},
 notes:'Maga de hielo. Debuffs básicos.'},

{id:'charlotte',name:'Charlotte',stars:3,element:'fire',cls:'knight',ml:false,top:false,
 role:'tank',sets:['speed','counter'],
 stats:{spd:'mid',hpp:'high',defp:'high'},
 notes:'Knight fuego. Tiene versión SC que es mejor.'},

{id:'cidd',name:'Cidd',stars:3,element:'earth',cls:'thief',ml:false,top:false,
 role:'dps',sets:['speed','crit'],
 stats:{spd:'fast',crate:'high',cdmg:'high'},
 notes:'Thief de tierra. SC lo mejora mucho.'},

{id:'crozet',name:'Crozet',stars:3,element:'ice',cls:'knight',ml:false,top:false,
 role:'tank',sets:['speed','counter'],
 stats:{spd:'mid',hpp:'high',defp:'high'},
 notes:'Knight de hielo básico.'},

{id:'dingo',name:'Dingo',stars:3,element:'fire',cls:'warrior',ml:false,top:false,
 role:'dps',sets:['speed','crit'],
 stats:{spd:'mid',crate:'high',cdmg:'high'},
 notes:'Guerrero fuego básico.'},

{id:'dominiel',name:'Dominiel',stars:3,element:'ice',cls:'mage',ml:false,top:false,
 role:'dps',sets:['speed','crit'],
 stats:{spd:'mid',crate:'high',cdmg:'high'},
 notes:'Maga de hielo. AoE mage.'},

{id:'gloomyrain',name:'Gloomy Rain',stars:3,element:'dark',cls:'mage',ml:false,top:false,
 role:'debuffer',sets:['speed','effectiveness'],
 stats:{spd:'fast',eff:'high',hpp:'mid'},
 notes:'Debuffer maga oscura.'},

{id:'godmother',name:'Godmother',stars:3,element:'fire',cls:'ranger',ml:false,top:false,
 role:'dps',sets:['speed','crit'],
 stats:{spd:'mid',crate:'high',cdmg:'high'},
 notes:'Ranger fuego básica.'},

{id:'guider-vildred',name:'Guider Vildred',stars:3,element:'earth',cls:'mage',ml:false,top:false,
 role:'dps',sets:['speed','crit'],
 stats:{spd:'fast',crate:'high',cdmg:'high',atkp:'high'},
 notes:'SC de Vildred. AoE fuerte.'},

{id:'hazel',name:'Hazel',stars:3,element:'fire',cls:'soulweaver',ml:false,top:false,
 role:'support',sets:['speed','immunity'],
 stats:{spd:'fast',hpp:'mid',res:'mid'},
 notes:'Healer básica de fuego.'},

{id:'hurado',name:'Hurado',stars:3,element:'earth',cls:'mage',ml:false,top:false,
 role:'dps',sets:['speed','crit'],
 stats:{spd:'mid',crate:'high',cdmg:'high'},
 notes:'Mago básico de tierra.'},

{id:'karin',name:'Karin',stars:3,element:'ice',cls:'thief',ml:false,top:false,
 role:'dps',sets:['speed','crit'],
 stats:{spd:'fast',crate:'high',cdmg:'high'},
 notes:'Thief de hielo rápida. Buena en arena early.'},

{id:'kiris',name:'Kiris',stars:3,element:'earth',cls:'ranger',ml:false,top:false,
 role:'debuffer',sets:['speed','effectiveness'],
 stats:{spd:'fast',eff:'high',hpp:'mid'},
 notes:'Debuffer de veneno. Útil en algunos hunts.'},

{id:'lorina',name:'Lorina',stars:3,element:'dark',cls:'warrior',ml:false,top:false,
 role:'dps',sets:['speed','crit'],
 stats:{spd:'mid',crate:'high',cdmg:'high',atkp:'high'},
 notes:'Excelente DPS F2P para Abyss y PvE. SC mejora mucho.'},

{id:'maya',name:'Maya',stars:3,element:'fire',cls:'knight',ml:false,top:false,
 role:'tank',sets:['speed','counter'],
 stats:{spd:'mid',hpp:'high',defp:'high'},
 notes:'Knight fuego básica.'},

{id:'mirsa',name:'Mirsa',stars:3,element:'dark',cls:'thief',ml:false,top:false,
 role:'dps',sets:['speed','crit'],
 stats:{spd:'fast',crate:'high',cdmg:'high'},
 notes:'Thief oscura básica.'},

{id:'montmorancy',name:'Montmorancy',stars:3,element:'ice',cls:'soulweaver',ml:false,top:true,
 role:'support',sets:['speed','immunity'],
 stats:{spd:'fast',hpp:'mid',res:'high'},
 notes:'Healer + cleanse esencial para Wyvern y PvE. SC mejora mucho.'},

{id:'mucacha',name:'Mucacha',stars:3,element:'fire',cls:'warrior',ml:false,top:false,
 role:'dps',sets:['speed','crit'],
 stats:{spd:'mid',crate:'high',cdmg:'high'},
 notes:'Guerrero fuego básico.'},

{id:'pearlhorizon',name:'Pearl Horizon',stars:3,element:'earth',cls:'mage',ml:false,top:false,
 role:'debuffer',sets:['speed','effectiveness'],
 stats:{spd:'fast',eff:'high',hpp:'mid'},
 notes:'Maga debuffer tierra.'},

{id:'purrgis',name:'Purrgis',stars:3,element:'earth',cls:'warrior',ml:false,top:false,
 role:'tank',sets:['speed','counter'],
 stats:{spd:'mid',hpp:'high',defp:'high'},
 notes:'Guerrero tanque tierra.'},

{id:'requiemknife',name:'Requiem Knife',stars:3,element:'dark',cls:'thief',ml:false,top:false,
 role:'dps',sets:['speed','crit'],
 stats:{spd:'fast',crate:'high',cdmg:'high'},
 notes:'Thief oscura DPS.'},

{id:'romann',name:'Romann',stars:3,element:'ice',cls:'mage',ml:false,top:false,
 role:'debuffer',sets:['speed','effectiveness'],
 stats:{spd:'fast',eff:'high',hpp:'mid'},
 notes:'Mago hielo. AoE con debuffs.'},

{id:'roozid',name:'Roozid',stars:3,element:'earth',cls:'thief',ml:false,top:false,
 role:'support',sets:['speed'],
 stats:{spd:'fast',hpp:'mid'},
 notes:'Pusher de CR. Utilidad específica en PvE speed clear.'},

{id:'schuri',name:'Schuri',stars:3,element:'fire',cls:'ranger',ml:false,top:false,
 role:'dps',sets:['speed','crit'],
 stats:{spd:'fast',crate:'high',cdmg:'high'},
 notes:'Ranger fuego. Speed pusher y DPS.'},

{id:'silk',name:'Silk',stars:3,element:'earth',cls:'ranger',ml:false,top:false,
 role:'support',sets:['speed'],
 stats:{spd:'fast',hpp:'mid'},
 notes:'CR pusher. Útil en PvE early. Reemplazar luego.'},

{id:'surin',name:'Surin',stars:3,element:'fire',cls:'thief',ml:false,top:false,
 role:'debuffer',sets:['speed','effectiveness'],
 stats:{spd:'fast',eff:'high',hpp:'mid'},
 notes:'Bleed debuffer. Niche en hunts.'},

{id:'taranor-guard',name:'Taranor Guard',stars:3,element:'ice',cls:'warrior',ml:false,top:false,
 role:'dps',sets:['speed','crit'],
 stats:{spd:'mid',crate:'high',cdmg:'high'},
 notes:'Guerrero hielo básico.'},

{id:'taranor-royal-guard',name:'Taranor Royal Guard',stars:3,element:'ice',cls:'warrior',ml:false,top:false,
 role:'dps',sets:['speed','crit'],
 stats:{spd:'mid',crate:'high',cdmg:'high'},
 notes:'Versión mejorada de Taranor Guard.'},

{id:'tieria',name:'Tieria',stars:3,element:'earth',cls:'warrior',ml:false,top:false,
 role:'dps',sets:['speed','crit'],
 stats:{spd:'mid',crate:'high',cdmg:'high'},
 notes:'Guerrera tierra básica.'},

{id:'vildred',name:'Vildred',stars:3,element:'earth',cls:'thief',ml:false,top:true,
 role:'dps',sets:['speed','crit','destruction'],
 stats:{spd:'fast',crate:'high',cdmg:'high',atkp:'high'},
 notes:'Excelente AoE thief. Top F2P para speed farm y arena.'},

{id:'yufine',name:'Yufine',stars:3,element:'earth',cls:'warrior',ml:false,top:false,
 role:'dps',sets:['speed','crit'],
 stats:{spd:'mid',crate:'high',cdmg:'high'},
 notes:'Guerrera tierra. Tiene ML (Abyssal Yufine) que es mucho mejor.'},

{id:'zerato',name:'Zerato',stars:3,element:'dark',cls:'mage',ml:false,top:false,
 role:'debuffer',sets:['speed','effectiveness'],
 stats:{spd:'fast',eff:'high',hpp:'mid'},
 notes:'Mago oscuro. Debuffer básico.'},

// ── 4★ COVENANT ────────────────────────────────────────────────
{id:'achates',name:'Achates',stars:4,element:'fire',cls:'soulweaver',ml:false,top:false,
 role:'support',sets:['speed','immunity'],
 stats:{spd:'fast',hpp:'mid',res:'high'},
 notes:'Healer con debuff cleanse. Buena para PvE.'},

{id:'angelica',name:'Angelica',stars:4,element:'ice',cls:'soulweaver',ml:false,top:true,
 role:'support',sets:['speed','immunity'],
 stats:{spd:'fast',hpp:'high',res:'high'},
 notes:'Healer top F2P. Excelente en Wyvern y early endgame.'},

{id:'arowell',name:'Arowell',stars:4,element:'light',cls:'knight',ml:false,top:false,
 role:'tank',sets:['speed','counter'],
 stats:{spd:'mid',hpp:'high',defp:'high',eff:'mid'},
 notes:'Knight luz. Puede debuffear con provoke.'},

{id:'baal-sezan',name:'Baal & Sezan',stars:4,element:'fire',cls:'mage',ml:false,top:false,
 role:'dps',sets:['speed','crit'],
 stats:{spd:'mid',crate:'high',cdmg:'high',atkp:'high'},
 notes:'Mago duo fuego. AoE.'},

{id:'baleygr',name:'Baleygr',stars:4,element:'fire',cls:'warrior',ml:false,top:false,
 role:'dps',sets:['speed','crit'],
 stats:{spd:'mid',crate:'high',cdmg:'high',atkp:'high'},
 notes:'Guerrero fuego. Stun AoE.'},

{id:'briar-witch-iseria',name:'Briar Witch Iseria',stars:4,element:'dark',cls:'thief',ml:false,top:true,
 role:'debuffer',sets:['speed','effectiveness'],
 stats:{spd:'fast',eff:'high',hpp:'mid',crate:'mid'},
 notes:'Top debuffer/support. Dispel y CR reduce. Muy versátil en PvP y PvE.'},

{id:'church-of-ilryos',name:'Church of Ilryos Axe',stars:4,element:'light',cls:'warrior',ml:false,top:false,
 role:'dps',sets:['speed','crit'],
 stats:{spd:'mid',crate:'high',cdmg:'high'},
 notes:'Guerrero luz.'},

{id:'clarissa',name:'Clarissa',stars:4,element:'ice',cls:'warrior',ml:false,top:false,
 role:'dps',sets:['speed','crit'],
 stats:{spd:'fast',crate:'high',cdmg:'high'},
 notes:'Guerrera hielo. Bleed. Excelente para Wyvern con buenos sets.'},

{id:'celine',name:'Celine',stars:4,element:'earth',cls:'thief',ml:false,top:true,
 role:'dps',sets:['speed','crit','counter'],
 stats:{spd:'fast',crate:'high',cdmg:'high'},
 notes:'Top DPS. Counter mechanic. No necesita mucho EFF. Grande en PvP.'},

{id:'corvus',name:'Corvus',stars:4,element:'fire',cls:'warrior',ml:false,top:false,
 role:'tank',sets:['speed','counter'],
 stats:{spd:'mid',hpp:'high',defp:'high'},
 notes:'Tanque fuego. Counter. Tiene ML (Dark Corvus).'},

{id:'destina',name:'Destina',stars:4,element:'earth',cls:'soulweaver',ml:false,top:true,
 role:'support',sets:['speed','immunity'],
 stats:{spd:'fast',hpp:'high',res:'high'},
 notes:'Top healer PvE. Revive y cleanse. Esencial en muchos contenidos.'},

{id:'diene',name:'Diene',stars:4,element:'ice',cls:'soulweaver',ml:false,top:true,
 role:'support',sets:['speed','immunity'],
 stats:{spd:'fast',hpp:'mid',res:'high'},
 notes:'Buffer top. Barrier y ATK buff. Excelente en raids y PvP.'},

{id:'dominiel',name:'Dominiel',stars:4,element:'ice',cls:'mage',ml:false,top:false,
 role:'dps',sets:['speed','crit'],
 stats:{spd:'mid',crate:'high',cdmg:'high'},
 notes:'Maga hielo AoE.'},

{id:'eroica',name:'Eroica',stars:4,element:'earth',cls:'mage',ml:false,top:false,
 role:'dps',sets:['speed','crit'],
 stats:{spd:'mid',crate:'high',cdmg:'high'},
 notes:'Mago tierra.'},

{id:'fairytale-tenebria',name:'Fairytale Tenebria',stars:4,element:'dark',cls:'mage',ml:false,top:false,
 role:'debuffer',sets:['speed','effectiveness'],
 stats:{spd:'fast',eff:'high',hpp:'mid'},
 notes:'Debuffer maga oscura.'},

{id:'free-spirit-tieria',name:'Free Spirit Tieria',stars:4,element:'light',cls:'warrior',ml:false,top:false,
 role:'dps',sets:['speed','crit'],
 stats:{spd:'mid',crate:'high',cdmg:'high'},
 notes:'Guerrera luz. Versión mejorada de Tieria.'},

{id:'furious',name:'Furious',stars:4,element:'ice',cls:'ranger',ml:false,top:true,
 role:'support',sets:['speed','immunity'],
 stats:{spd:'fast',hpp:'mid',res:'mid'},
 notes:'Top soporte PvE. Crit buff. Esencial en hunts.'},

{id:'haste',name:'Haste',stars:4,element:'dark',cls:'thief',ml:false,top:false,
 role:'dps',sets:['speed','crit','counter'],
 stats:{spd:'fast',crate:'high',cdmg:'high'},
 notes:'Thief oscuro counter.'},

{id:'holy-flame-adin',name:'Holy Flame Adin',stars:4,element:'light',cls:'thief',ml:false,top:false,
 role:'dps',sets:['speed','crit'],
 stats:{spd:'fast',crate:'high',cdmg:'high'},
 notes:'Thief luz SC de Adin.'},

{id:'iseria',name:'Iseria',stars:4,element:'earth',cls:'ranger',ml:false,top:true,
 role:'support',sets:['speed','immunity'],
 stats:{spd:'fast',hpp:'mid',res:'mid'},
 notes:'Support top. Skill reset. Increíble en PvE y PvP junto a otros heroes.'},

{id:'judith',name:'Judith',stars:4,element:'fire',cls:'thief',ml:false,top:false,
 role:'support',sets:['speed'],
 stats:{spd:'fast',hpp:'mid'},
 notes:'Speed setter puro. Primer turno claro. Niche en PvP.'},

{id:'khan',name:'Khan',stars:4,element:'fire',cls:'knight',ml:false,top:false,
 role:'tank',sets:['speed','counter'],
 stats:{spd:'mid',hpp:'high',defp:'high'},
 notes:'Tank fuego con counter.'},

{id:'kise',name:'Kise',stars:4,element:'ice',cls:'thief',ml:false,top:false,
 role:'dps',sets:['speed','crit'],
 stats:{spd:'fast',crate:'high',cdmg:'high'},
 notes:'Thief hielo. Tiene ML (Judge Kise) que es mucho mejor.'},

{id:'krau',name:'Krau',stars:4,element:'ice',cls:'knight',ml:false,top:true,
 role:'tank',sets:['speed','counter','hp'],
 stats:{spd:'mid',hpp:'high',defp:'high'},
 notes:'Top tanque hielo. Counter y barrier. Esencial en PvP bruiser.'},

{id:'landy',name:'Landy',stars:4,element:'earth',cls:'ranger',ml:false,top:true,
 role:'dps',sets:['speed','crit','destruction'],
 stats:{spd:'fast',crate:'high',cdmg:'high',atkp:'high'},
 notes:'Top DPS ranger tierra. Bufonada con buffs. Excelente en PvP y raids.'},

{id:'last-piece-kettle',name:'Last Piece Kettle',stars:4,element:'dark',cls:'mage',ml:false,top:false,
 role:'debuffer',sets:['speed','effectiveness'],
 stats:{spd:'fast',eff:'high',hpp:'mid'},
 notes:'Mago oscuro debuffer.'},

{id:'lilias',name:'Lilias',stars:4,element:'fire',cls:'knight',ml:false,top:false,
 role:'support',sets:['speed','immunity'],
 stats:{spd:'fast',hpp:'mid',res:'mid'},
 notes:'Knight soporte fuego. Tiene ML (Conqueror Lilias) que es top tier.'},

{id:'luna',name:'Luna',stars:4,element:'ice',cls:'warrior',ml:false,top:true,
 role:'dps',sets:['speed','crit','destruction'],
 stats:{spd:'mid',crate:'high',cdmg:'high',atkp:'high'},
 notes:'Top DPS. Single target descomunal. Excelente contra tanques.'},

{id:'melissa',name:'Melissa',stars:4,element:'fire',cls:'mage',ml:false,top:true,
 role:'dps',sets:['speed','crit','destruction'],
 stats:{spd:'fast',crate:'high',cdmg:'high',atkp:'high'},
 notes:'Top nuker fuego. Enorme daño single target. Crit set ideal.'},

{id:'mortelix',name:'Mortelix',stars:4,element:'dark',cls:'thief',ml:false,top:false,
 role:'dps',sets:['speed','crit'],
 stats:{spd:'fast',crate:'high',cdmg:'high'},
 notes:'Thief oscuro DPS.'},

{id:'mu-hwan',name:'Mu-Hwan',stars:4,element:'fire',cls:'thief',ml:false,top:false,
 role:'dps',sets:['speed','crit'],
 stats:{spd:'fast',crate:'high',cdmg:'high'},
 notes:'Thief fuego.'},

{id:'orte',name:'Orte',stars:4,element:'earth',cls:'ranger',ml:false,top:false,
 role:'dps',sets:['speed','crit'],
 stats:{spd:'fast',crate:'high',cdmg:'high'},
 notes:'Ranger tierra.'},

{id:'pastur',name:'Pastur',stars:4,element:'dark',cls:'mage',ml:false,top:false,
 role:'debuffer',sets:['speed','effectiveness'],
 stats:{spd:'fast',eff:'high',hpp:'mid'},
 notes:'Mago debuffer oscuro.'},

{id:'pearlhorizon',name:'Pearl Horizon',stars:4,element:'earth',cls:'mage',ml:false,top:false,
 role:'debuffer',sets:['speed','effectiveness'],
 stats:{spd:'fast',eff:'high',hpp:'mid'},
 notes:'Maga SC tierra. Debuffer.'},

{id:'penelope',name:'Penelope',stars:4,element:'dark',cls:'thief',ml:false,top:false,
 role:'dps',sets:['speed','crit'],
 stats:{spd:'fast',crate:'high',cdmg:'high'},
 notes:'Thief oscura. SC útil.'},

{id:'roana',name:'Roana',stars:4,element:'earth',cls:'soulweaver',ml:false,top:true,
 role:'support',sets:['speed','immunity'],
 stats:{spd:'fast',hpp:'high',res:'high'},
 notes:'Top support/counter healer. Counter builds en PvP.'},

{id:'rune',name:'Rune',stars:4,element:'ice',cls:'knight',ml:false,top:false,
 role:'tank',sets:['speed','counter'],
 stats:{spd:'mid',hpp:'high',defp:'high'},
 notes:'Knight hielo básico.'},

{id:'schuri-watcher',name:'Watcher Schuri',stars:4,element:'fire',cls:'ranger',ml:false,top:true,
 role:'dps',sets:['speed','crit','destruction'],
 stats:{spd:'fast',crate:'high',cdmg:'high',atkp:'high'},
 notes:'Top DPS ranger fuego. Ignora defensa. Excelente en PvE y arena.'},

{id:'seaside-bellona',name:'Seaside Bellona',stars:4,element:'ice',cls:'ranger',ml:false,top:true,
 role:'debuffer',sets:['speed','effectiveness'],
 stats:{spd:'fast',eff:'high',hpp:'mid',crate:'mid'},
 noNeedCrate:false,
 notes:'Top debuffer de defensa. Def break garantizado. Esencial en Wyvern y raids.'},

{id:'sigret',name:'Sigret',stars:4,element:'dark',cls:'warrior',ml:false,top:true,
 role:'dps',sets:['speed','crit','destruction'],
 stats:{spd:'mid',crate:'high',cdmg:'high',atkp:'high'},
 notes:'Top DPS dark warrior. Excelente en Wyvern. Mucho daño single target.'},

{id:'sol',name:'Sol',stars:4,element:'fire',cls:'warrior',ml:false,top:false,
 role:'dps',sets:['speed','crit'],
 stats:{spd:'mid',crate:'high',cdmg:'high'},
 notes:'Guerrero fuego básico.'},

{id:'sonia',name:'Sonia',stars:4,element:'light',cls:'soulweaver',ml:false,top:false,
 role:'support',sets:['speed','immunity'],
 stats:{spd:'fast',hpp:'mid',res:'high'},
 notes:'Healer luz básica.'},

{id:'surin',name:'Surin',stars:4,element:'fire',cls:'thief',ml:false,top:false,
 role:'debuffer',sets:['speed','effectiveness'],
 stats:{spd:'fast',eff:'high',hpp:'mid'},
 notes:'Thief fuego. Bleed debuffer.'},

{id:'taeyou',name:'Taeyou',stars:4,element:'earth',cls:'warrior',ml:false,top:false,
 role:'dps',sets:['speed','crit'],
 stats:{spd:'mid',crate:'high',cdmg:'high'},
 notes:'Guerrero tierra.'},

{id:'tamarinne',name:'Tamarinne',stars:4,element:'fire',cls:'soulweaver',ml:false,top:true,
 role:'support',sets:['speed','immunity'],
 stats:{spd:'fast',hpp:'mid',res:'mid'},
 notes:'Top healer/buffer. Idol form da ATK y speed buff al equipo. Esencial.'},

{id:'tenebria',name:'Tenebria',stars:4,element:'dark',cls:'mage',ml:false,top:false,
 role:'dps',sets:['speed','crit'],
 stats:{spd:'mid',crate:'high',cdmg:'high',atkp:'high'},
 notes:'Maga oscura. Tiene versión ML (Specter Tenebria) que es top tier.'},

{id:'tsurin',name:'Tsurin',stars:4,element:'dark',cls:'thief',ml:false,top:false,
 role:'dps',sets:['speed','crit'],
 stats:{spd:'fast',crate:'high',cdmg:'high'},
 notes:'Thief oscura DPS.'},

{id:'tywin',name:'Tywin',stars:4,element:'light',cls:'knight',ml:false,top:false,
 role:'tank',sets:['speed','immunity'],
 stats:{spd:'fast',hpp:'high',defp:'mid'},
 notes:'Knight luz soporte. CR push y buff.'},

{id:'violet',name:'Violet',stars:4,element:'earth',cls:'thief',ml:false,top:true,
 role:'dps',sets:['speed','crit','counter'],
 stats:{spd:'fast',crate:'high',cdmg:'high'},
 notes:'Top DPS thief tierra. Evasión + counter. Muy difícil de matar.'},

{id:'zerato',name:'Zerato',stars:4,element:'dark',cls:'mage',ml:false,top:false,
 role:'debuffer',sets:['speed','effectiveness'],
 stats:{spd:'fast',eff:'high',hpp:'mid'},
 notes:'SC mago oscuro. Dispel AoE.'},

// ── 5★ COVENANT ────────────────────────────────────────────────
{id:'abigail',name:'Abigail',stars:5,element:'fire',cls:'warrior',ml:false,top:false,
 role:'dps',sets:['speed','crit','destruction'],
 stats:{spd:'mid',crate:'high',cdmg:'high',atkp:'high'},
 notes:'Guerrera fuego 5★. DPS sólida.'},

{id:'ambitious-tywin',name:'Ambitious Tywin',stars:5,element:'dark',cls:'knight',ml:false,top:true,
 role:'tank',sets:['speed','immunity','counter'],
 stats:{spd:'fast',hpp:'high',defp:'high'},
 notes:'Top bruiser oscuro. CR push y buff al equipo. Excelente en PvP.'},

{id:'apocalypse-ravi',name:'Apocalypse Ravi',stars:5,element:'dark',cls:'warrior',ml:false,top:true,
 role:'tank',sets:['speed','counter','hp'],
 stats:{spd:'mid',hpp:'high',defp:'high',crate:'mid'},
 notes:'Top bruiser oscura. Auto-sustain y counter. Muy difícil de matar en PvP.'},

{id:'arbiter-vildred',name:'Arbiter Vildred',stars:5,element:'dark',cls:'thief',ml:true,top:true,
 role:'dps',sets:['speed','crit','destruction'],
 stats:{spd:'fast',crate:'high',cdmg:'high',atkp:'high'},
 notes:'Top DPS ML. AoE + revive. Uno de los mejores en PvP cleave y PvE.'},

{id:'arby',name:'Arbiter Vildred',stars:5,element:'dark',cls:'thief',ml:true,top:true,
 role:'dps',sets:['speed','crit','destruction'],
 stats:{spd:'fast',crate:'high',cdmg:'high',atkp:'high'},
 notes:'Top DPS ML. AoE + revive. Uno de los mejores en PvP cleave y PvE.'},

{id:'arunka',name:'Arunka',stars:5,element:'earth',cls:'warrior',ml:false,top:false,
 role:'dps',sets:['speed','crit'],
 stats:{spd:'mid',crate:'high',cdmg:'high',atkp:'high'},
 notes:'Guerrera tierra 5★.'},

{id:'astromancer-elena',name:'Astromancer Elena',stars:5,element:'ice',cls:'soulweaver',ml:true,top:true,
 role:'support',sets:['speed','immunity'],
 stats:{spd:'fast',hpp:'high',res:'high'},
 notes:'Top healer ML hielo. Barrier masivo. Excelente en PvP y PvE.'},

{id:'bystander-hwayoung',name:'Bystander Hwayoung',stars:5,element:'fire',cls:'warrior',ml:false,top:true,
 role:'dps',sets:['speed','hp','destruction'],
 stats:{spd:'fast',hpp:'high',crate:'mid',cdmg:'high'},
 notes:'Top DPS que escala por HP. No necesita tanto ATK%.'},

{id:'cermia',name:'Cermia',stars:5,element:'fire',cls:'warrior',ml:false,top:true,
 role:'dps',sets:['speed','crit','destruction'],
 stats:{spd:'fast',crate:'high',cdmg:'high',atkp:'high'},
 notes:'Top nuker fuego. Tiene ML (Lionheart Cermia) top tier también.'},

{id:'charles',name:'Charles',stars:5,element:'earth',cls:'knight',ml:false,top:true,
 role:'tank',sets:['speed','counter','crit'],
 stats:{spd:'fast',crate:'high',cdmg:'mid',hpp:'mid'},
 notes:'Top bruiser con counter y CR push. Excelente en GvG y arena.'},

{id:'choux',name:'Choux',stars:5,element:'ice',cls:'warrior',ml:false,top:true,
 role:'tank',sets:['speed','hp','counter'],
 stats:{spd:'mid',hpp:'high',defp:'mid',crate:'mid'},
 notes:'Top bruiser hielo. HP scaling. Difícil de matar y hace mucho daño.'},

{id:'cidd-sc',name:'Cidd (SC)',stars:5,element:'earth',cls:'thief',ml:false,top:false,
 role:'dps',sets:['speed','crit'],
 stats:{spd:'fast',crate:'high',cdmg:'high'},
 notes:'Thief tierra SC. DPS sólido.'},

{id:'commander-lorina',name:'Commander Lorina',stars:5,element:'dark',cls:'warrior',ml:false,top:true,
 role:'dps',sets:['speed','crit','destruction'],
 stats:{spd:'mid',crate:'high',cdmg:'high',atkp:'high'},
 notes:'Top DPS F2P SC. Enorme single target. Esencial para Abyss profundo.'},

{id:'commander-pavel',name:'Commander Pavel',stars:5,element:'ice',cls:'ranger',ml:true,top:true,
 role:'dps',sets:['speed','crit','destruction'],
 stats:{spd:'fast',crate:'high',cdmg:'high',atkp:'high'},
 notes:'Top DPS ML ranger hielo. Soulburn OP. Gran opción en PvP y PvE.'},

{id:'conqueror-lilias',name:'Conqueror Lilias',stars:5,element:'dark',cls:'knight',ml:true,top:true,
 role:'support',sets:['speed','immunity'],
 stats:{spd:'fast',hpp:'mid',res:'high'},
 notes:'Top support ML. Provoke AoE + cleanse. Esencial en muchos comps PvP.'},

{id:'corvus-dark',name:'Dark Corvus',stars:5,element:'dark',cls:'warrior',ml:true,top:true,
 role:'tank',sets:['speed','counter','hp'],
 stats:{spd:'mid',hpp:'high',defp:'high',crate:'mid'},
 notes:'Top bruiser ML oscuro. Revive + counter. Muy difícil de derrotar.'},

{id:'crozet-sc',name:'Crimson Armin',stars:5,element:'fire',cls:'knight',ml:false,top:true,
 role:'tank',sets:['speed','counter','immunity'],
 stats:{spd:'fast',hpp:'high',defp:'high'},
 notes:'Top tank F2P SC. Provoke + counter + immunity. Esencial en muchos equipos.'},

{id:'death-dealer-ray',name:'Death Dealer Ray',stars:5,element:'dark',cls:'soulweaver',ml:true,top:true,
 role:'support',sets:['speed','immunity'],
 stats:{spd:'fast',hpp:'mid',res:'high'},
 notes:'Top support ML oscuro. Debuff immunity y heal. Gran versátil.'},

{id:'dizzy',name:'Dizzy',stars:5,element:'dark',cls:'mage',ml:true,top:true,
 role:'debuffer',sets:['speed','effectiveness'],
 stats:{spd:'fast',eff:'high',hpp:'mid'},
 notes:'Top debuffer ML. AoE stuns y debuffs. Necesita EFF alto (200%+ PvP).'},

{id:'drakhan',name:'Drakhan',stars:5,element:'dark',cls:'warrior',ml:false,top:false,
 role:'dps',sets:['speed','crit','destruction'],
 stats:{spd:'mid',crate:'high',cdmg:'high',atkp:'high'},
 notes:'Guerrero oscuro 5★ DPS.'},

{id:'elphelt',name:'Elphelt',stars:5,element:'fire',cls:'ranger',ml:false,top:true,
 role:'dps',sets:['speed','hp','destruction'],
 stats:{spd:'fast',hpp:'high',crate:'high',cdmg:'high'},
 notes:'DPS que escala por HP. No necesita tanto ATK%. Excelente nuker.'},

{id:'emilia',name:'Emilia',stars:5,element:'ice',cls:'soulweaver',ml:false,top:false,
 role:'support',sets:['speed','immunity'],
 stats:{spd:'fast',hpp:'mid',res:'high'},
 notes:'Healer hielo 5★. Barrier y heal.'},

{id:'ervalen',name:'Ervalen',stars:5,element:'earth',cls:'mage',ml:false,top:false,
 role:'dps',sets:['speed','crit','destruction'],
 stats:{spd:'mid',crate:'high',cdmg:'high',atkp:'high'},
 notes:'Mago tierra 5★. Penetración de defensa.'},

{id:'fallen-cecilia',name:'Fallen Cecilia',stars:5,element:'dark',cls:'knight',ml:true,top:true,
 role:'tank',sets:['speed','hp','counter'],
 stats:{spd:'mid',hpp:'high',defp:'mid',crate:'mid'},
 noNeedCrate:false,
 notes:'Top tank/DPS ML. Escala por HP. Counter + barrier. Una de las mejores del juego.'},

{id:'flan',name:'Flan',stars:5,element:'light',cls:'ranger',ml:false,top:true,
 role:'support',sets:['speed','immunity'],
 stats:{spd:'fast',hpp:'mid',res:'high'},
 notes:'Top support. Speed buff masivo y immunity. Esencial en muchos comps cleave.'},

{id:'frieren',name:'Frieren',stars:5,element:'ice',cls:'mage',ml:false,top:true,
 role:'dps',sets:['speed','crit','destruction'],
 stats:{spd:'fast',crate:'high',cdmg:'high',atkp:'high'},
 notes:'Colaboración. Top maga hielo. Gran daño y utility.'},

{id:'general-purrgis',name:'General Purrgis',stars:5,element:'light',cls:'warrior',ml:false,top:false,
 role:'tank',sets:['speed','counter'],
 stats:{spd:'mid',hpp:'high',defp:'high'},
 notes:'Guerrero tanque SC luz.'},

{id:'hecate',name:'Hecate',stars:5,element:'earth',cls:'warrior',ml:false,top:true,
 role:'dps',sets:['speed','crit','destruction'],
 stats:{spd:'fast',crate:'high',cdmg:'high',atkp:'high'},
 notes:'Nueva guerrera tierra 5★. Top DPS reciente.'},

{id:'hwa',name:'Hwayoung',stars:5,element:'fire',cls:'warrior',ml:false,top:true,
 role:'dps',sets:['speed','hp','destruction'],
 stats:{spd:'fast',hpp:'high',crate:'mid',cdmg:'high'},
 notes:'Top DPS que escala por HP. Muy poderosa contra tanques.'},

{id:'judge-kise',name:'Judge Kise',stars:5,element:'light',cls:'thief',ml:true,top:true,
 role:'dps',sets:['speed','crit','destruction'],
 stats:{spd:'fast',crate:'high',cdmg:'high'},
 noNeedCrate:true,
 notes:'Top DPS ML luz. Todos sus ataques son críticos — NO necesita C.Rate. Solo C.Dmg y SPD.'},

{id:'kise-ml',name:'Judge Kise',stars:5,element:'light',cls:'thief',ml:true,top:true,
 role:'dps',sets:['speed','crit','destruction'],
 stats:{spd:'fast',cdmg:'high',atkp:'high'},
 noNeedCrate:true,
 notes:'TOP TIER. Ataques siempre crit — NO necesita C.Rate para nada. Solo C.Dmg alto.'},

{id:'kawerik',name:'Mediator Kawerik',stars:5,element:'dark',cls:'warrior',ml:true,top:false,
 role:'debuffer',sets:['speed','effectiveness'],
 stats:{spd:'fast',eff:'high',hpp:'mid'},
 notes:'ML guerrero oscuro. Seal debuff (bloquea pasivas). Niche pero útil.'},

{id:'krau-ml',name:'Last Rider Krau',stars:5,element:'dark',cls:'knight',ml:true,top:true,
 role:'tank',sets:['speed','counter','hp'],
 stats:{spd:'mid',hpp:'high',defp:'high'},
 notes:'Top bruiser ML oscuro. Counter y barrier. Excelente en PvP.'},

{id:'lilibet',name:'Lilibet',stars:5,element:'earth',cls:'warrior',ml:false,top:false,
 role:'dps',sets:['speed','crit'],
 stats:{spd:'mid',crate:'high',cdmg:'high'},
 notes:'Guerrera tierra 5★. SC disponible.'},

{id:'lionheart-cermia',name:'Lionheart Cermia',stars:5,element:'light',cls:'warrior',ml:true,top:true,
 role:'dps',sets:['speed','crit','destruction'],
 stats:{spd:'fast',crate:'high',cdmg:'high',atkp:'high'},
 noNeedCrate:false,
 notes:'Top DPS ML luz. Todos los ataques son crits con buff — priorizá C.Dmg sobre C.Rate.'},

{id:'luluca',name:'Luluca',stars:5,element:'earth',cls:'mage',ml:false,top:true,
 role:'debuffer',sets:['speed','effectiveness'],
 stats:{spd:'fast',eff:'high',hpp:'mid',crate:'mid'},
 notes:'Top debuffer maga tierra. DEF break y CR push. Excelente en PvP y raids.'},

{id:'luna-ml',name:'New Moon Luna',stars:5,element:'dark',cls:'warrior',ml:true,top:true,
 role:'dps',sets:['speed','crit','destruction'],
 stats:{spd:'mid',crate:'high',cdmg:'high',atkp:'high'},
 notes:'Top DPS ML oscura. Versión mejorada de Luna. Ignora DEF.'},

{id:'martial-ken',name:'Martial Artist Ken',stars:5,element:'dark',cls:'warrior',ml:true,top:true,
 role:'tank',sets:['speed','counter','hp'],
 stats:{spd:'mid',hpp:'high',defp:'mid',crate:'mid'},
 notes:'Top bruiser ML. Counter con crit. Muy difícil de matar. Daño escala con HP perdido.'},

{id:'melissa-ml',name:'Massacre Gothic Lilias',stars:5,element:'dark',cls:'knight',ml:true,top:false,
 role:'support',sets:['speed','immunity'],
 stats:{spd:'fast',hpp:'mid',res:'high'},
 notes:'Knight ML oscura soporte.'},

{id:'midnight-gala-lilias',name:'Midnight Gala Lilias',stars:5,element:'dark',cls:'knight',ml:false,top:true,
 role:'support',sets:['speed','immunity'],
 stats:{spd:'fast',hpp:'mid',res:'high'},
 notes:'Top support fuego. CR push masivo. Esencial en comps cleave.'},

{id:'minuet',name:'Minuet',stars:5,element:'ice',cls:'mage',ml:false,top:false,
 role:'dps',sets:['speed','crit'],
 stats:{spd:'mid',crate:'high',cdmg:'high'},
 notes:'Maga hielo 5★.'},

{id:'muwi',name:'Muwi',stars:5,element:'ice',cls:'warrior',ml:false,top:true,
 role:'dps',sets:['speed','hp','injury'],
 stats:{spd:'fast',hpp:'high',crate:'mid',cdmg:'mid'},
 notes:'Top DPS con Injury set. Reduce HP máximo enemigo. Excelente en PvP.'},

{id:'navy-captain-landy',name:'Navy Captain Landy',stars:5,element:'dark',cls:'ranger',ml:false,top:true,
 role:'dps',sets:['speed','crit','destruction'],
 stats:{spd:'fast',crate:'high',cdmg:'high',atkp:'high'},
 notes:'Versión ML dark de Landy. Top DPS en PvP.'},

{id:'peira',name:'Peira',stars:5,element:'ice',cls:'thief',ml:false,top:true,
 role:'debuffer',sets:['speed','effectiveness'],
 stats:{spd:'fast',eff:'high',hpp:'mid',crate:'mid'},
 notes:'Top debuffer/CR manipulator hielo. Excelente en RTA y arena.'},

{id:'politis',name:'Politis',stars:5,element:'fire',cls:'mage',ml:false,top:true,
 role:'debuffer',sets:['speed','effectiveness'],
 stats:{spd:'fast',eff:'high',hpp:'mid'},
 notes:'Top debuffer fuego. Anti-buff. Excelente en PvP y GvG.'},

{id:'politis-ml',name:'Sea Phantom Politis',stars:5,element:'dark',cls:'mage',ml:true,top:true,
 role:'debuffer',sets:['speed','effectiveness'],
 stats:{spd:'fast',eff:'high',hpp:'mid'},
 notes:'ML versión de Politis. Top tier. Anti-buff AoE y enorme utility.'},

{id:'ram',name:'Ram',stars:5,element:'earth',cls:'mage',ml:false,top:false,
 role:'dps',sets:['speed','crit'],
 stats:{spd:'mid',crate:'high',cdmg:'high'},
 notes:'Mago tierra 5★.'},

{id:'ran',name:'Ran',stars:5,element:'ice',cls:'thief',ml:false,top:true,
 role:'dps',sets:['speed','crit','destruction'],
 stats:{spd:'fast',crate:'high',cdmg:'high',atkp:'high'},
 notes:'Top DPS thief hielo. Extra turn mechanic. Excelente en PvP cleave.'},

{id:'ravi',name:'Ravi',stars:5,element:'fire',cls:'warrior',ml:false,top:true,
 role:'tank',sets:['speed','counter','hp'],
 stats:{spd:'mid',hpp:'high',defp:'mid',crate:'mid'},
 notes:'Top bruiser fuego. Auto-sustain y counter. Versátil en PvP y PvE.'},

{id:'remnant-violet',name:'Remnant Violet',stars:5,element:'dark',cls:'thief',ml:true,top:true,
 role:'dps',sets:['speed','crit','counter'],
 stats:{spd:'fast',crate:'high',cdmg:'high'},
 notes:'Top DPS ML oscuro thief. Evasión + counter. Necesita gear pesado.'},

{id:'ruele',name:'Ruele of Light',stars:5,element:'light',cls:'soulweaver',ml:true,top:true,
 role:'support',sets:['speed','immunity'],
 stats:{spd:'fast',hpp:'high',res:'high'},
 notes:'Top healer ML luz. Revive + cleanse. Esencial en PvP contra cleave.'},

{id:'schuri-ml',name:'ML Schuri',stars:5,element:'dark',cls:'ranger',ml:true,top:false,
 role:'support',sets:['speed'],
 stats:{spd:'fast',hpp:'mid'},
 notes:'ML Schuri. CR pusher oscuro.'},

{id:'senya',name:'Senya',stars:5,element:'earth',cls:'knight',ml:false,top:true,
 role:'tank',sets:['speed','counter','immunity'],
 stats:{spd:'fast',hpp:'high',defp:'high'},
 notes:'Top tank tierra. Provoke + counter. Gran bruiser.'},

{id:'setaria',name:'Setaria',stars:5,element:'light',cls:'mage',ml:false,top:false,
 role:'support',sets:['speed','immunity'],
 stats:{spd:'fast',hpp:'mid',res:'high'},
 notes:'Maga soporte luz 5★.'},

{id:'sinful-angelica',name:'Sinful Angelica',stars:5,element:'dark',cls:'soulweaver',ml:true,top:true,
 role:'support',sets:['speed','immunity'],
 stats:{spd:'fast',hpp:'high',res:'high'},
 notes:'ML dark Angelica. Revive + barrier. Top en PvP contra cleave.'},

{id:'sol-ml',name:'ML Sol',stars:5,element:'dark',cls:'warrior',ml:true,top:false,
 role:'dps',sets:['speed','crit'],
 stats:{spd:'mid',crate:'high',cdmg:'high'},
 notes:'ML Sol. DPS oscuro.'},

{id:'solitaria',name:'Solitaria of the Snow',stars:5,element:'ice',cls:'mage',ml:false,top:true,
 role:'dps',sets:['speed','crit','destruction'],
 stats:{spd:'fast',crate:'high',cdmg:'high',atkp:'high'},
 notes:'Top DPS maga hielo. Barrier + daño masivo.'},

{id:'sp-bari',name:'SP Bari',stars:5,element:'fire',cls:'ranger',ml:false,top:false,
 role:'dps',sets:['speed','crit'],
 stats:{spd:'fast',crate:'high',cdmg:'high'},
 notes:'Ranger fuego SP.'},

{id:'specter-tenebria',name:'Specter Tenebria',stars:5,element:'dark',cls:'mage',ml:true,top:true,
 role:'dps',sets:['speed','crit','destruction'],
 stats:{spd:'fast',crate:'high',cdmg:'high',atkp:'high'},
 notes:'TOP TIER ML. Daño masivo con buffs enemies muertos. CR wipe. Esencial en PvP y raids.'},

{id:'summertime-iseria',name:'Summertime Iseria',stars:5,element:'fire',cls:'ranger',ml:false,top:false,
 role:'support',sets:['speed','immunity'],
 stats:{spd:'fast',hpp:'mid',res:'mid'},
 notes:'Skin/Alt de Iseria. Misma lógica de build.'},

{id:'sylvan-vivian',name:'Sylvan Sage Vivian',stars:5,element:'earth',cls:'mage',ml:true,top:true,
 role:'dps',sets:['speed','crit','destruction'],
 stats:{spd:'fast',crate:'high',cdmg:'high',atkp:'high'},
 notes:'Top DPS ML maga tierra. Barrier + daño masivo. Gran opción PvP y PvE.'},

{id:'taeyou-sc',name:'SC Taeyou',stars:5,element:'earth',cls:'warrior',ml:false,top:false,
 role:'dps',sets:['speed','crit'],
 stats:{spd:'mid',crate:'high',cdmg:'high'},
 notes:'SC Taeyou tierra.'},

{id:'talia',name:'Talia',stars:5,element:'earth',cls:'thief',ml:false,top:false,
 role:'dps',sets:['speed','crit'],
 stats:{spd:'fast',crate:'high',cdmg:'high'},
 notes:'Thief tierra 5★ DPS.'},

{id:'tamain',name:'Tamarinne',stars:5,element:'fire',cls:'soulweaver',ml:false,top:true,
 role:'support',sets:['speed','immunity'],
 stats:{spd:'fast',hpp:'mid',res:'mid'},
 notes:'Top healer/buffer. Idol form da ATK y speed buff al equipo.'},

{id:'troublemaker-crozet',name:'Troublemaker Crozet',stars:5,element:'dark',cls:'knight',ml:false,top:false,
 role:'tank',sets:['speed','counter'],
 stats:{spd:'mid',hpp:'high',defp:'high'},
 notes:'SC Crozet oscuro. Tanque niche.'},

{id:'vivian',name:'Vivian',stars:5,element:'earth',cls:'mage',ml:false,top:true,
 role:'dps',sets:['speed','crit','destruction'],
 stats:{spd:'fast',crate:'high',cdmg:'high',atkp:'high'},
 notes:'Top DPS maga tierra. Barrier + AoE. Excelente en PvP y hunts.'},

{id:'wanderer-silk',name:'Wanderer Silk',stars:5,element:'dark',cls:'ranger',ml:true,top:false,
 role:'support',sets:['speed'],
 stats:{spd:'fast',hpp:'mid'},
 notes:'ML Silk oscura. CR pusher niche.'},

{id:'yufine-abyssal',name:'Abyssal Yufine',stars:5,element:'dark',cls:'knight',ml:true,top:true,
 role:'tank',sets:['speed','counter','hp'],
 stats:{spd:'mid',hpp:'high',defp:'high',crate:'mid'},
 notes:'Top bruiser ML oscura. Counter masivo. Excelente en PvP.'},

{id:'yulha',name:'Yulha',stars:5,element:'earth',cls:'soulweaver',ml:false,top:true,
 role:'support',sets:['speed','immunity'],
 stats:{spd:'fast',hpp:'high',res:'high'},
 notes:'Top healer reciente. Barrier + heal. Muy versátil en PvP y PvE.'},

{id:'zenosyne',name:'Zenosyne',stars:5,element:'dark',cls:'mage',ml:false,top:false,
 role:'dps',sets:['speed','crit'],
 stats:{spd:'mid',crate:'high',cdmg:'high'},
 notes:'Maga oscura 5★ DPS.'},

// ── COLABORACIONES ─────────────────────────────────────────────
{id:'ae-giselle',name:'aespa GISELLE',stars:5,element:'earth',cls:'mage',ml:false,top:false,
 role:'debuffer',sets:['speed','effectiveness'],
 stats:{spd:'fast',eff:'high',hpp:'mid'},
 notes:'Collab aespa. Maga tierra debuffer.'},

{id:'ae-karina',name:'aespa KARINA',stars:5,element:'ice',cls:'knight',ml:false,top:false,
 role:'tank',sets:['speed','counter'],
 stats:{spd:'mid',hpp:'high',defp:'high'},
 notes:'Collab aespa. Knight hielo.'},

{id:'ae-ningning',name:'aespa NINGNING',stars:5,element:'fire',cls:'soulweaver',ml:false,top:false,
 role:'support',sets:['speed','immunity'],
 stats:{spd:'fast',hpp:'mid',res:'mid'},
 notes:'Collab aespa. Healer fuego.'},

{id:'ae-winter',name:'aespa WINTER',stars:5,element:'fire',cls:'thief',ml:false,top:false,
 role:'dps',sets:['speed','crit'],
 stats:{spd:'fast',crate:'high',cdmg:'high'},
 notes:'Collab aespa. Thief fuego DPS.'},

{id:'afternoon-flan',name:'Afternoon Soak Flan',stars:5,element:'fire',cls:'ranger',ml:false,top:true,
 role:'support',sets:['speed','immunity'],
 stats:{spd:'fast',hpp:'mid',res:'high'},
 notes:'TOP TIER support. Speed buff masivo. Esencial en comps cleave.'},

{id:'ak-frieren',name:'Frieren',stars:5,element:'ice',cls:'mage',ml:false,top:true,
 role:'dps',sets:['speed','crit','destruction'],
 stats:{spd:'fast',crate:'high',cdmg:'high',atkp:'high'},
 notes:'Collab Frieren. Top maga hielo DPS con gran utility.'},

{id:'ae-bellona',name:'Seaside Bellona (alt)',stars:5,element:'ice',cls:'ranger',ml:false,top:true,
 role:'debuffer',sets:['speed','effectiveness'],
 stats:{spd:'fast',eff:'high',hpp:'mid'},
 notes:'Alt skin. Misma build que Seaside Bellona.'},

];

// ── SETS INFO ──────────────────────────────────────────────────
var E7_SETS = {
  'speed':       {name:'Speed',      bonus:'+45% SPD base',        icon:'💨', color:'#00cfff'},
  'crit':        {name:'Critical',   bonus:'+12% C.Rate (×2)',      icon:'⚡', color:'#ffcc44'},
  'destruction': {name:'Destruction',bonus:'+40% C.Dmg (×4)',       icon:'💥', color:'#ff4455'},
  'counter':     {name:'Counter',    bonus:'25% chance de counter',  icon:'🔁', color:'#b088ff'},
  'immunity':    {name:'Immunity',   bonus:'Immunity a debuffs (×2)',icon:'🛡', color:'#00e676'},
  'effectiveness':{name:'Effectiveness',bonus:'+20% EFF (×2)',      icon:'🎯', color:'#9060ff'},
  'resistance':  {name:'Resistance', bonus:'+20% RES (×2)',         icon:'🔒', color:'#4080ff'},
  'hp':          {name:'HP',         bonus:'+15% HP (×2)',          icon:'❤️', color:'#ff6688'},
  'defense':     {name:'Defense',    bonus:'+15% DEF (×2)',         icon:'🛡️', color:'#6080ff'},
  'injury':      {name:'Injury',     bonus:'Reduce HP máx enemigo', icon:'🩸', color:'#cc0044'},
  'revenge':     {name:'Revenge',    bonus:'36% chance counter',    icon:'⚔️', color:'#ff8800'},
  'penetration': {name:'Penetration',bonus:'+20% penetración DEF',  icon:'🗡️', color:'#ff4400'},
  'rage':        {name:'Rage',       bonus:'+30% C.Dmg, -30% C.Rate',icon:'😡',color:'#ff2200'},
};
