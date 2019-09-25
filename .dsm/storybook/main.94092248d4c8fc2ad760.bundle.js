(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{123:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return Task}));var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(1),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);function Task(_ref){var _ref$task=_ref.task,id=_ref$task.id,title=_ref$task.title,state=_ref$task.state,onArchiveTask=_ref.onArchiveTask,onPinTask=_ref.onPinTask;return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"list-item ".concat(state)},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label",{className:"checkbox"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input",{type:"checkbox",defaultChecked:"TASK_ARCHIVED"===state,disabled:!0,name:"checked"}),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span",{className:"checkbox-custom",onClick:function onClick(){return onArchiveTask(id)}})),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"title"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input",{type:"text",value:title,readOnly:!0,placeholder:"Input title"})),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"actions",onClick:function onClick(event){return event.stopPropagation()}},"TASK_ARCHIVED"!==state&&react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a",{onClick:function onClick(){return onPinTask(id)}},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span",{className:"icon-star"}))))}Task.__docgenInfo={description:"",methods:[],displayName:"Task"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Task.js"]={name:"Task",docgenInfo:Task.__docgenInfo,path:"src/components/Task.js"})},276:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return Button}));var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(1),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);__webpack_require__(598);function Button(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button",{className:"button"},"Text"))}Button.__docgenInfo={description:"",methods:[],displayName:"Button"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Button.js"]={name:"Button",docgenInfo:Button.__docgenInfo,path:"src/components/Button.js"})},278:function(module,exports,__webpack_require__){__webpack_require__(279),__webpack_require__(388),module.exports=__webpack_require__(389)},300:function(module,exports){},389:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var _storybook_react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(47),_invisionapp_dsm_storybook__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(275),req=__webpack_require__(596);function loadStories(){req.keys().forEach((function(filename){return req(filename)}))}Object(_invisionapp_dsm_storybook__WEBPACK_IMPORTED_MODULE_1__.initDsm)({addDecorator:_storybook_react__WEBPACK_IMPORTED_MODULE_0__.addDecorator,addParameters:_storybook_react__WEBPACK_IMPORTED_MODULE_0__.addParameters,callback:function callback(){return Object(_storybook_react__WEBPACK_IMPORTED_MODULE_0__.configure)(loadStories,module)}})}.call(this,__webpack_require__(139)(module))},596:function(module,exports,__webpack_require__){var map={"./stories/Button.stories.js":597,"./stories/Task.stories.js":599};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=596},597:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(1),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),_storybook_react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(47),_components_Button__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(276);Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.storiesOf)("Button",module).add("default",(function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Button__WEBPACK_IMPORTED_MODULE_2__.a,null)}),{"in-dsm":{id:"5d8a61799dbb232667bf415c"}})}.call(this,__webpack_require__(139)(module))},598:function(module,exports,__webpack_require__){},599:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){__webpack_require__.d(__webpack_exports__,"task",(function(){return task})),__webpack_require__.d(__webpack_exports__,"actions",(function(){return actions}));var _Users_clayton_bondy_Documents_GitHub_storybook_tests_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(277),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(1),react__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__),_storybook_react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(47),_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(169),_components_Task__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(123);function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(source,!0).forEach((function(key){Object(_Users_clayton_bondy_Documents_GitHub_storybook_tests_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.a)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(source).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}var task={id:"1",title:"Test Task",state:"TASK_INBOX",updatedAt:new Date(2018,0,1,9,0)},actions={onPinTask:Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_3__.action)("onPinTask"),onArchiveTask:Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_3__.action)("onArchiveTask")};Object(_storybook_react__WEBPACK_IMPORTED_MODULE_2__.storiesOf)("Task",module).add("default",(function(){return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Task__WEBPACK_IMPORTED_MODULE_4__.a,Object.assign({task:task},actions))})).add("pinned",(function(){return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Task__WEBPACK_IMPORTED_MODULE_4__.a,Object.assign({task:_objectSpread({},task,{state:"TASK_PINNED"})},actions))})).add("archived",(function(){return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Task__WEBPACK_IMPORTED_MODULE_4__.a,Object.assign({task:_objectSpread({},task,{state:"TASK_ARCHIVED"})},actions))}))}.call(this,__webpack_require__(139)(module))}},[[278,1,2]]]);
//# sourceMappingURL=main.94092248d4c8fc2ad760.bundle.js.map