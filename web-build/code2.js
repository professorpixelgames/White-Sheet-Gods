gdjs.WinCode = {};
gdjs.WinCode.GDJogarObjects1_1final = [];

gdjs.WinCode.GDSairObjects1_1final = [];

gdjs.WinCode.GDNewTextObjects1= [];
gdjs.WinCode.GDNewTextObjects2= [];
gdjs.WinCode.GDJogarObjects1= [];
gdjs.WinCode.GDJogarObjects2= [];
gdjs.WinCode.GDSairObjects1= [];
gdjs.WinCode.GDSairObjects2= [];
gdjs.WinCode.GDTituloObjects1= [];
gdjs.WinCode.GDTituloObjects2= [];


gdjs.WinCode.asyncCallback19596516 = function (runtimeScene, asyncObjectsList) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "Game");
}}
gdjs.WinCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.WinCode.asyncCallback19596516(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.WinCode.eventsList1 = function(runtimeScene) {

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

gdjs.WinCode.GDJogarObjects1.length = 0;

gdjs.WinCode.GDSairObjects1.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{gdjs.WinCode.GDJogarObjects1_1final.length = 0;
gdjs.WinCode.GDSairObjects1_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Jogar"), gdjs.WinCode.GDJogarObjects2);
for (var i = 0, k = 0, l = gdjs.WinCode.GDJogarObjects2.length;i<l;++i) {
    if ( gdjs.WinCode.GDJogarObjects2[i].IsHovered((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_1 = true;
        gdjs.WinCode.GDJogarObjects2[k] = gdjs.WinCode.GDJogarObjects2[i];
        ++k;
    }
}
gdjs.WinCode.GDJogarObjects2.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.WinCode.GDJogarObjects2.length; j < jLen ; ++j) {
        if ( gdjs.WinCode.GDJogarObjects1_1final.indexOf(gdjs.WinCode.GDJogarObjects2[j]) === -1 )
            gdjs.WinCode.GDJogarObjects1_1final.push(gdjs.WinCode.GDJogarObjects2[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("Sair"), gdjs.WinCode.GDSairObjects2);
for (var i = 0, k = 0, l = gdjs.WinCode.GDSairObjects2.length;i<l;++i) {
    if ( gdjs.WinCode.GDSairObjects2[i].IsHovered((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_1 = true;
        gdjs.WinCode.GDSairObjects2[k] = gdjs.WinCode.GDSairObjects2[i];
        ++k;
    }
}
gdjs.WinCode.GDSairObjects2.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.WinCode.GDSairObjects2.length; j < jLen ; ++j) {
        if ( gdjs.WinCode.GDSairObjects1_1final.indexOf(gdjs.WinCode.GDSairObjects2[j]) === -1 )
            gdjs.WinCode.GDSairObjects1_1final.push(gdjs.WinCode.GDSairObjects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.WinCode.GDJogarObjects1_1final, gdjs.WinCode.GDJogarObjects1);
gdjs.copyArray(gdjs.WinCode.GDSairObjects1_1final, gdjs.WinCode.GDSairObjects1);
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

gdjs.copyArray(runtimeScene.getObjects("Jogar"), gdjs.WinCode.GDJogarObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.WinCode.GDJogarObjects1.length;i<l;++i) {
    if ( gdjs.WinCode.GDJogarObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.WinCode.GDJogarObjects1[k] = gdjs.WinCode.GDJogarObjects1[i];
        ++k;
    }
}
gdjs.WinCode.GDJogarObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "tear-paper-103161.mp3", false, 100, 1);
}
{ //Subevents
gdjs.WinCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Sair"), gdjs.WinCode.GDSairObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.WinCode.GDSairObjects1.length;i<l;++i) {
    if ( gdjs.WinCode.GDSairObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.WinCode.GDSairObjects1[k] = gdjs.WinCode.GDSairObjects1[i];
        ++k;
    }
}
gdjs.WinCode.GDSairObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.stopGame(runtimeScene);
}}

}


};

gdjs.WinCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.WinCode.GDNewTextObjects1.length = 0;
gdjs.WinCode.GDNewTextObjects2.length = 0;
gdjs.WinCode.GDJogarObjects1.length = 0;
gdjs.WinCode.GDJogarObjects2.length = 0;
gdjs.WinCode.GDSairObjects1.length = 0;
gdjs.WinCode.GDSairObjects2.length = 0;
gdjs.WinCode.GDTituloObjects1.length = 0;
gdjs.WinCode.GDTituloObjects2.length = 0;

gdjs.WinCode.eventsList1(runtimeScene);

return;

}

gdjs['WinCode'] = gdjs.WinCode;
