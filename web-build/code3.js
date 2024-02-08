gdjs.MenuCode = {};
gdjs.MenuCode.GDJogarObjects1_1final = [];

gdjs.MenuCode.GDSairObjects1_1final = [];

gdjs.MenuCode.GDJogarObjects1= [];
gdjs.MenuCode.GDJogarObjects2= [];
gdjs.MenuCode.GDSairObjects1= [];
gdjs.MenuCode.GDSairObjects2= [];
gdjs.MenuCode.GDTituloObjects1= [];
gdjs.MenuCode.GDTituloObjects2= [];


gdjs.MenuCode.asyncCallback19596516 = function (runtimeScene, asyncObjectsList) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "Game");
}}
gdjs.MenuCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.MenuCode.asyncCallback19596516(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.MenuCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.sound.preloadSound(runtimeScene, "tear-paper-103160.mp3");
}{gdjs.evtTools.sound.preloadSound(runtimeScene, "scissors-cutting-paper-1-101193.mp3");
}}

}


{

gdjs.MenuCode.GDJogarObjects1.length = 0;

gdjs.MenuCode.GDSairObjects1.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{gdjs.MenuCode.GDJogarObjects1_1final.length = 0;
gdjs.MenuCode.GDSairObjects1_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Jogar"), gdjs.MenuCode.GDJogarObjects2);
for (var i = 0, k = 0, l = gdjs.MenuCode.GDJogarObjects2.length;i<l;++i) {
    if ( gdjs.MenuCode.GDJogarObjects2[i].IsHovered((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_1 = true;
        gdjs.MenuCode.GDJogarObjects2[k] = gdjs.MenuCode.GDJogarObjects2[i];
        ++k;
    }
}
gdjs.MenuCode.GDJogarObjects2.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.MenuCode.GDJogarObjects2.length; j < jLen ; ++j) {
        if ( gdjs.MenuCode.GDJogarObjects1_1final.indexOf(gdjs.MenuCode.GDJogarObjects2[j]) === -1 )
            gdjs.MenuCode.GDJogarObjects1_1final.push(gdjs.MenuCode.GDJogarObjects2[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("Sair"), gdjs.MenuCode.GDSairObjects2);
for (var i = 0, k = 0, l = gdjs.MenuCode.GDSairObjects2.length;i<l;++i) {
    if ( gdjs.MenuCode.GDSairObjects2[i].IsHovered((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_1 = true;
        gdjs.MenuCode.GDSairObjects2[k] = gdjs.MenuCode.GDSairObjects2[i];
        ++k;
    }
}
gdjs.MenuCode.GDSairObjects2.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.MenuCode.GDSairObjects2.length; j < jLen ; ++j) {
        if ( gdjs.MenuCode.GDSairObjects1_1final.indexOf(gdjs.MenuCode.GDSairObjects2[j]) === -1 )
            gdjs.MenuCode.GDSairObjects1_1final.push(gdjs.MenuCode.GDSairObjects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.MenuCode.GDJogarObjects1_1final, gdjs.MenuCode.GDJogarObjects1);
gdjs.copyArray(gdjs.MenuCode.GDSairObjects1_1final, gdjs.MenuCode.GDSairObjects1);
}
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(19594956);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "scissors-cutting-paper-1-101193.mp3", false, 100, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Jogar"), gdjs.MenuCode.GDJogarObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDJogarObjects1.length;i<l;++i) {
    if ( gdjs.MenuCode.GDJogarObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDJogarObjects1[k] = gdjs.MenuCode.GDJogarObjects1[i];
        ++k;
    }
}
gdjs.MenuCode.GDJogarObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "tear-paper-103161.mp3", false, 100, 1);
}
{ //Subevents
gdjs.MenuCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Sair"), gdjs.MenuCode.GDSairObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDSairObjects1.length;i<l;++i) {
    if ( gdjs.MenuCode.GDSairObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDSairObjects1[k] = gdjs.MenuCode.GDSairObjects1[i];
        ++k;
    }
}
gdjs.MenuCode.GDSairObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.stopGame(runtimeScene);
}}

}


};

gdjs.MenuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.MenuCode.GDJogarObjects1.length = 0;
gdjs.MenuCode.GDJogarObjects2.length = 0;
gdjs.MenuCode.GDSairObjects1.length = 0;
gdjs.MenuCode.GDSairObjects2.length = 0;
gdjs.MenuCode.GDTituloObjects1.length = 0;
gdjs.MenuCode.GDTituloObjects2.length = 0;

gdjs.MenuCode.eventsList1(runtimeScene);

return;

}

gdjs['MenuCode'] = gdjs.MenuCode;
