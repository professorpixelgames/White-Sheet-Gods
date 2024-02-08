
gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator = gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator || {};

/**
 * Behavior generated from Top-down movement animator
 */
gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator = class TopDownMovementAnimator extends gdjs.RuntimeBehavior {
  constructor(instanceContainer, behaviorData, owner) {
    super(instanceContainer, behaviorData, owner);
    this._runtimeScene = instanceContainer;

    this._onceTriggers = new gdjs.OnceTriggers();
    this._behaviorData = {};
    this._sharedData = gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.getSharedData(
      instanceContainer,
      behaviorData.name
    );
    
    this._behaviorData.TopDownMovement = behaviorData.TopDownMovement !== undefined ? behaviorData.TopDownMovement : "";
    this._behaviorData.IsScalingAnimation = behaviorData.IsScalingAnimation !== undefined ? behaviorData.IsScalingAnimation : true;
    this._behaviorData.AnimationName = behaviorData.AnimationName !== undefined ? behaviorData.AnimationName : "Walk";
    this._behaviorData.DirectionCount = behaviorData.DirectionCount !== undefined ? behaviorData.DirectionCount : Number("0") || 0;
    this._behaviorData.AngleOffset = behaviorData.AngleOffset !== undefined ? behaviorData.AngleOffset : Number("0") || 0;
    this._behaviorData.AnimationDirection = Number("0") || 0;
  }

  // Hot-reload:
  updateFromBehaviorData(oldBehaviorData, newBehaviorData) {
    
    if (oldBehaviorData.TopDownMovement !== newBehaviorData.TopDownMovement)
      this._behaviorData.TopDownMovement = newBehaviorData.TopDownMovement;
    if (oldBehaviorData.IsScalingAnimation !== newBehaviorData.IsScalingAnimation)
      this._behaviorData.IsScalingAnimation = newBehaviorData.IsScalingAnimation;
    if (oldBehaviorData.AnimationName !== newBehaviorData.AnimationName)
      this._behaviorData.AnimationName = newBehaviorData.AnimationName;
    if (oldBehaviorData.DirectionCount !== newBehaviorData.DirectionCount)
      this._behaviorData.DirectionCount = newBehaviorData.DirectionCount;
    if (oldBehaviorData.AngleOffset !== newBehaviorData.AngleOffset)
      this._behaviorData.AngleOffset = newBehaviorData.AngleOffset;
    if (oldBehaviorData.AnimationDirection !== newBehaviorData.AnimationDirection)
      this._behaviorData.AnimationDirection = newBehaviorData.AnimationDirection;

    return true;
  }

  // Properties:
  
  _getTopDownMovement() {
    return this._behaviorData.TopDownMovement !== undefined ? this._behaviorData.TopDownMovement : "";
  }
  _setTopDownMovement(newValue) {
    this._behaviorData.TopDownMovement = newValue;
  }
  _getIsScalingAnimation() {
    return this._behaviorData.IsScalingAnimation !== undefined ? this._behaviorData.IsScalingAnimation : true;
  }
  _setIsScalingAnimation(newValue) {
    this._behaviorData.IsScalingAnimation = newValue;
  }
  _toggleIsScalingAnimation() {
    this._setIsScalingAnimation(!this._getIsScalingAnimation());
  }
  _getAnimationName() {
    return this._behaviorData.AnimationName !== undefined ? this._behaviorData.AnimationName : "Walk";
  }
  _setAnimationName(newValue) {
    this._behaviorData.AnimationName = newValue;
  }
  _getDirectionCount() {
    return this._behaviorData.DirectionCount !== undefined ? this._behaviorData.DirectionCount : Number("0") || 0;
  }
  _setDirectionCount(newValue) {
    this._behaviorData.DirectionCount = newValue;
  }
  _getAngleOffset() {
    return this._behaviorData.AngleOffset !== undefined ? this._behaviorData.AngleOffset : Number("0") || 0;
  }
  _setAngleOffset(newValue) {
    this._behaviorData.AngleOffset = newValue;
  }
  _getAnimationDirection() {
    return this._behaviorData.AnimationDirection !== undefined ? this._behaviorData.AnimationDirection : Number("0") || 0;
  }
  _setAnimationDirection(newValue) {
    this._behaviorData.AnimationDirection = newValue;
  }
}

/**
 * Shared data generated from Top-down movement animator
 */
gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.SharedData = class TopDownMovementAnimatorSharedData {
  constructor(sharedData) {
    
    this.NewAnimationDirection = Number("0") || 0;
    this.AnimationFrame = Number("0") || 0;
  }
  
  // Shared properties:
  
  _getNewAnimationDirection() {
    return this.NewAnimationDirection !== undefined ? this.NewAnimationDirection : Number("0") || 0;
  }
  _setNewAnimationDirection(newValue) {
    this.NewAnimationDirection = newValue;
  }
  _getAnimationFrame() {
    return this.AnimationFrame !== undefined ? this.AnimationFrame : Number("0") || 0;
  }
  _setAnimationFrame(newValue) {
    this.AnimationFrame = newValue;
  }
}

gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.getSharedData = function(instanceContainer, behaviorName) {
  if (!instanceContainer._TopDownMovementAnimator_TopDownMovementAnimatorSharedData) {
    const initialData = instanceContainer.getInitialSharedDataForBehavior(
      behaviorName
    );
    instanceContainer._TopDownMovementAnimator_TopDownMovementAnimatorSharedData = new gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.SharedData(
      initialData
    );
  }
  return instanceContainer._TopDownMovementAnimator_TopDownMovementAnimatorSharedData;
}

// Methods:
gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.onCreatedContext = {};
gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.onCreatedContext.GDObjectObjects1= [];
gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.onCreatedContext.GDObjectObjects2= [];
gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.onCreatedContext.GDObjectObjects3= [];


gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.onCreatedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.onCreatedContext.GDObjectObjects1, gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.onCreatedContext.GDObjectObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.onCreatedContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.onCreatedContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("TopDownMovement")).diagonalsAllowed() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.onCreatedContext.GDObjectObjects2[k] = gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.onCreatedContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.onCreatedContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.onCreatedContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.onCreatedContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.onCreatedContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setDirectionCount(8);
}
}}

}


{

/* Reuse gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.onCreatedContext.GDObjectObjects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.onCreatedContext.GDObjectObjects1.length;i<l;++i) {
    if ( !(gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.onCreatedContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("TopDownMovement")).diagonalsAllowed()) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.onCreatedContext.GDObjectObjects1[k] = gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.onCreatedContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.onCreatedContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.onCreatedContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.onCreatedContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.onCreatedContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setDirectionCount(4);
}
}}

}


};gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.onCreatedContext.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.onCreatedContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.onCreatedContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.onCreatedContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getDirectionCount() == 0 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.onCreatedContext.GDObjectObjects1[k] = gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.onCreatedContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.onCreatedContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.onCreatedContext.eventsList0(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};

gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.onCreated = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
, "TopDownMovement": this._getTopDownMovement()
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.onCreatedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.onCreatedContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.onCreatedContext.GDObjectObjects3.length = 0;

gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.onCreatedContext.eventsList1(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.onActivateContext = {};
gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.onActivateContext.GDObjectObjects1= [];
gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.onActivateContext.GDObjectObjects2= [];


gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.onActivateContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.onActivateContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.onActivateContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.onActivateContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).SetAnimationDirection((gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.onActivateContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).Direction((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


};

gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.onActivate = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
, "TopDownMovement": this._getTopDownMovement()
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.onActivateContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.onActivateContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.onActivateContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.doStepPostEventsContext = {};
gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.doStepPostEventsContext.GDObjectObjects1= [];
gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.doStepPostEventsContext.GDObjectObjects2= [];


gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.doStepPostEventsContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

/* Reuse gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.doStepPostEventsContext.GDObjectObjects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.doStepPostEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.doStepPostEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getIsScalingAnimation() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.doStepPostEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.doStepPostEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.doStepPostEventsContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.doStepPostEventsContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.doStepPostEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.doStepPostEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).SetAnimationSpeedScale((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


};gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.doStepPostEventsContext.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.doStepPostEventsContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.doStepPostEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.doStepPostEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("TopDownMovement")).getSpeed() == 0 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.doStepPostEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.doStepPostEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.doStepPostEventsContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.doStepPostEventsContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.doStepPostEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.doStepPostEventsContext.GDObjectObjects1[i].pauseAnimation();
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.doStepPostEventsContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.doStepPostEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.doStepPostEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("TopDownMovement")).getSpeed() > 0 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.doStepPostEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.doStepPostEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.doStepPostEventsContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.doStepPostEventsContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.doStepPostEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.doStepPostEventsContext.GDObjectObjects1[i].playAnimation();
}
}
{ //Subevents
gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.doStepPostEventsContext.eventsList0(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.doStepPostEventsContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.doStepPostEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.doStepPostEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._sharedData._setNewAnimationDirection((gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.doStepPostEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).Direction((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))));
}
}}

}


{



}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.doStepPostEventsContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (Math.abs((( gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.doStepPostEventsContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.doStepPostEventsContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).DirectionDifference((( gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.doStepPostEventsContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.doStepPostEventsContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._sharedData._getNewAnimationDirection()), eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getAnimationDirection(), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)))) > 0.5 + 0.03125);
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.doStepPostEventsContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.doStepPostEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.doStepPostEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).SetAnimationDirection((gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.doStepPostEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._sharedData._getNewAnimationDirection()), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


};

gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.doStepPostEvents = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
, "TopDownMovement": this._getTopDownMovement()
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.doStepPostEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.doStepPostEventsContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.doStepPostEventsContext.eventsList1(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.AnimationNameContext = {};
gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.AnimationNameContext.GDObjectObjects1= [];
gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.AnimationNameContext.GDObjectObjects2= [];


gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.AnimationNameContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.AnimationNameContext.GDObjectObjects1);
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = (( gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.AnimationNameContext.GDObjectObjects1.length === 0 ) ? "" :gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.AnimationNameContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getAnimationName()); }}}

}


};

gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.AnimationName = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
, "TopDownMovement": this._getTopDownMovement()
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.AnimationNameContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.AnimationNameContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.AnimationNameContext.eventsList0(runtimeScene, eventsFunctionContext);

return "" + eventsFunctionContext.returnValue;
}
gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.SetAnimationNameContext = {};
gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.SetAnimationNameContext.GDObjectObjects1= [];
gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.SetAnimationNameContext.GDObjectObjects2= [];


gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.SetAnimationNameContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.SetAnimationNameContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.SetAnimationNameContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.SetAnimationNameContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getAnimationName() != (typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("Value") : "") ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.SetAnimationNameContext.GDObjectObjects1[k] = gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.SetAnimationNameContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.SetAnimationNameContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.SetAnimationNameContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.SetAnimationNameContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.SetAnimationNameContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setAnimationName((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("Value") : ""));
}
}{for(var i = 0, len = gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.SetAnimationNameContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.SetAnimationNameContext.GDObjectObjects1[i].setAnimationName((gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.SetAnimationNameContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getAnimationName()) + gdjs.evtTools.common.toString((gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.SetAnimationNameContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getAnimationDirection())));
}
}}

}


};

gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.SetAnimationName = function(Value, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
, "TopDownMovement": this._getTopDownMovement()
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
if (argName === "Value") return Value;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.SetAnimationNameContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.SetAnimationNameContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.SetAnimationNameContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.IsScalingAnimationContext = {};
gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.IsScalingAnimationContext.GDObjectObjects1= [];
gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.IsScalingAnimationContext.GDObjectObjects2= [];


gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.IsScalingAnimationContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.IsScalingAnimationContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.IsScalingAnimationContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.IsScalingAnimationContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getIsScalingAnimation() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.IsScalingAnimationContext.GDObjectObjects1[k] = gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.IsScalingAnimationContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.IsScalingAnimationContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = true; }}}

}


};

gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.IsScalingAnimation = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
, "TopDownMovement": this._getTopDownMovement()
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.IsScalingAnimationContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.IsScalingAnimationContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.IsScalingAnimationContext.eventsList0(runtimeScene, eventsFunctionContext);

return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.SetIsScalingAnimationContext = {};
gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.SetIsScalingAnimationContext.GDObjectObjects1= [];
gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.SetIsScalingAnimationContext.GDObjectObjects2= [];


gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.SetIsScalingAnimationContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !(typeof eventsFunctionContext !== 'undefined' ? !!eventsFunctionContext.getArgument("Value") : false);
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.SetIsScalingAnimationContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.SetIsScalingAnimationContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.SetIsScalingAnimationContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setIsScalingAnimation(false);
}
}{for(var i = 0, len = gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.SetIsScalingAnimationContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.SetIsScalingAnimationContext.GDObjectObjects1[i].setAnimationSpeedScale(1);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (typeof eventsFunctionContext !== 'undefined' ? !!eventsFunctionContext.getArgument("Value") : false);
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.SetIsScalingAnimationContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.SetIsScalingAnimationContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.SetIsScalingAnimationContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setIsScalingAnimation(true);
}
}{for(var i = 0, len = gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.SetIsScalingAnimationContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.SetIsScalingAnimationContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).SetAnimationSpeedScale((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


};

gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.SetIsScalingAnimation = function(Value, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
, "TopDownMovement": this._getTopDownMovement()
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
if (argName === "Value") return Value;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.SetIsScalingAnimationContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.SetIsScalingAnimationContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.SetIsScalingAnimationContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.SetAnimationSpeedScaleContext = {};
gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.SetAnimationSpeedScaleContext.GDObjectObjects1= [];
gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.SetAnimationSpeedScaleContext.GDObjectObjects2= [];


gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.SetAnimationSpeedScaleContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.SetAnimationSpeedScaleContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.SetAnimationSpeedScaleContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.SetAnimationSpeedScaleContext.GDObjectObjects1[i].setAnimationSpeedScale((gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.SetAnimationSpeedScaleContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("TopDownMovement")).getSpeed()) / (gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.SetAnimationSpeedScaleContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("TopDownMovement")).getMaxSpeed()));
}
}}

}


};

gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.SetAnimationSpeedScale = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
, "TopDownMovement": this._getTopDownMovement()
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.SetAnimationSpeedScaleContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.SetAnimationSpeedScaleContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.SetAnimationSpeedScaleContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.DirectionContext = {};
gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.DirectionContext.GDObjectObjects1= [];
gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.DirectionContext.GDObjectObjects2= [];


gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.DirectionContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.DirectionContext.GDObjectObjects1);
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = ((( gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.DirectionContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.DirectionContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("TopDownMovement")).getAngle()) + eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getAngleOffset()) * eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getDirectionCount() / 360; }}}

}


};

gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.Direction = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
, "TopDownMovement": this._getTopDownMovement()
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.DirectionContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.DirectionContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.DirectionContext.eventsList0(runtimeScene, eventsFunctionContext);

return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.DirectionDifferenceContext = {};
gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.DirectionDifferenceContext.GDObjectObjects1= [];
gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.DirectionDifferenceContext.GDObjectObjects2= [];


gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.DirectionDifferenceContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = gdjs.evtTools.common.mod(gdjs.evtTools.common.mod(eventsFunctionContext.getArgument("Direction") - eventsFunctionContext.getArgument("OtherDirection"), eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getDirectionCount()) + eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getDirectionCount() / 2, eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getDirectionCount()) - eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getDirectionCount() / 2; }}}

}


};

gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.DirectionDifference = function(Direction, OtherDirection, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
, "TopDownMovement": this._getTopDownMovement()
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
if (argName === "Direction") return Direction;
if (argName === "OtherDirection") return OtherDirection;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.DirectionDifferenceContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.DirectionDifferenceContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.DirectionDifferenceContext.eventsList0(runtimeScene, eventsFunctionContext);

return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.SetAnimationDirectionContext = {};
gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.SetAnimationDirectionContext.GDObjectObjects1= [];
gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.SetAnimationDirectionContext.GDObjectObjects2= [];


gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.SetAnimationDirectionContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.SetAnimationDirectionContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.SetAnimationDirectionContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.SetAnimationDirectionContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setAnimationDirection(gdjs.evtTools.common.mod(gdjs.evtTools.common.mod(Math.round(eventsFunctionContext.getArgument("Value")), eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getDirectionCount()) + eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getDirectionCount(), eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getDirectionCount()));
}
}{for(var i = 0, len = gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.SetAnimationDirectionContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.SetAnimationDirectionContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._sharedData._setAnimationFrame((gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.SetAnimationDirectionContext.GDObjectObjects1[i].getAnimationFrame()));
}
}{for(var i = 0, len = gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.SetAnimationDirectionContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.SetAnimationDirectionContext.GDObjectObjects1[i].setAnimationName((gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.SetAnimationDirectionContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getAnimationName()) + gdjs.evtTools.common.toString((gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.SetAnimationDirectionContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getAnimationDirection())));
}
}{for(var i = 0, len = gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.SetAnimationDirectionContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.SetAnimationDirectionContext.GDObjectObjects1[i].setAnimationFrame((gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.SetAnimationDirectionContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._sharedData._getAnimationFrame()));
}
}}

}


};

gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.SetAnimationDirection = function(Value, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
, "TopDownMovement": this._getTopDownMovement()
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
if (argName === "Value") return Value;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.SetAnimationDirectionContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.SetAnimationDirectionContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.SetAnimationDirectionContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator.prototype.doStepPreEvents = function() {
  this._onceTriggers.startNewFrame();
};


gdjs.registerBehavior("TopDownMovementAnimator::TopDownMovementAnimator", gdjs.evtsExt__TopDownMovementAnimator__TopDownMovementAnimator.TopDownMovementAnimator);
