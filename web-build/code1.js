gdjs.LoseCode = {};
gdjs.LoseCode.GDJogarObjects1_1final = [];

gdjs.LoseCode.GDSairObjects1_1final = [];

gdjs.LoseCode.GDTitleLoseObjects1= [];
gdjs.LoseCode.GDTitleLoseObjects2= [];
gdjs.LoseCode.GDJogarObjects1= [];
gdjs.LoseCode.GDJogarObjects2= [];
gdjs.LoseCode.GDSairObjects1= [];
gdjs.LoseCode.GDSairObjects2= [];
gdjs.LoseCode.GDTituloObjects1= [];
gdjs.LoseCode.GDTituloObjects2= [];


gdjs.LoseCode.asyncCallback19596516 = function (runtimeScene, asyncObjectsList) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "Game");
}}
gdjs.LoseCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.LoseCode.asyncCallback19596516(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.LoseCode.eventsList1 = function(runtimeScene) {

{



}


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

gdjs.LoseCode.GDJogarObjects1.length = 0;

gdjs.LoseCode.GDSairObjects1.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{gdjs.LoseCode.GDJogarObjects1_1final.length = 0;
gdjs.LoseCode.GDSairObjects1_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Jogar"), gdjs.LoseCode.GDJogarObjects2);
for (var i = 0, k = 0, l = gdjs.LoseCode.GDJogarObjects2.length;i<l;++i) {
    if ( gdjs.LoseCode.GDJogarObjects2[i].IsHovered((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_1 = true;
        gdjs.LoseCode.GDJogarObjects2[k] = gdjs.LoseCode.GDJogarObjects2[i];
        ++k;
    }
}
gdjs.LoseCode.GDJogarObjects2.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.LoseCode.GDJogarObjects2.length; j < jLen ; ++j) {
        if ( gdjs.LoseCode.GDJogarObjects1_1final.indexOf(gdjs.LoseCode.GDJogarObjects2[j]) === -1 )
            gdjs.LoseCode.GDJogarObjects1_1final.push(gdjs.LoseCode.GDJogarObjects2[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("Sair"), gdjs.LoseCode.GDSairObjects2);
for (var i = 0, k = 0, l = gdjs.LoseCode.GDSairObjects2.length;i<l;++i) {
    if ( gdjs.LoseCode.GDSairObjects2[i].IsHovered((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_1 = true;
        gdjs.LoseCode.GDSairObjects2[k] = gdjs.LoseCode.GDSairObjects2[i];
        ++k;
    }
}
gdjs.LoseCode.GDSairObjects2.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.LoseCode.GDSairObjects2.length; j < jLen ; ++j) {
        if ( gdjs.LoseCode.GDSairObjects1_1final.indexOf(gdjs.LoseCode.GDSairObjects2[j]) === -1 )
            gdjs.LoseCode.GDSairObjects1_1final.push(gdjs.LoseCode.GDSairObjects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.LoseCode.GDJogarObjects1_1final, gdjs.LoseCode.GDJogarObjects1);
gdjs.copyArray(gdjs.LoseCode.GDSairObjects1_1final, gdjs.LoseCode.GDSairObjects1);
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

gdjs.copyArray(runtimeScene.getObjects("Jogar"), gdjs.LoseCode.GDJogarObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.LoseCode.GDJogarObjects1.length;i<l;++i) {
    if ( gdjs.LoseCode.GDJogarObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.LoseCode.GDJogarObjects1[k] = gdjs.LoseCode.GDJogarObjects1[i];
        ++k;
    }
}
gdjs.LoseCode.GDJogarObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "tear-paper-103161.mp3", false, 100, 1);
}
{ //Subevents
gdjs.LoseCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Sair"), gdjs.LoseCode.GDSairObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.LoseCode.GDSairObjects1.length;i<l;++i) {
    if ( gdjs.LoseCode.GDSairObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.LoseCode.GDSairObjects1[k] = gdjs.LoseCode.GDSairObjects1[i];
        ++k;
    }
}
gdjs.LoseCode.GDSairObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.stopGame(runtimeScene);
}}

}


};

gdjs.LoseCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.LoseCode.GDTitleLoseObjects1.length = 0;
gdjs.LoseCode.GDTitleLoseObjects2.length = 0;
gdjs.LoseCode.GDJogarObjects1.length = 0;
gdjs.LoseCode.GDJogarObjects2.length = 0;
gdjs.LoseCode.GDSairObjects1.length = 0;
gdjs.LoseCode.GDSairObjects2.length = 0;
gdjs.LoseCode.GDTituloObjects1.length = 0;
gdjs.LoseCode.GDTituloObjects2.length = 0;

gdjs.LoseCode.eventsList1(runtimeScene);

return;

}

gdjs['LoseCode'] = gdjs.LoseCode;
