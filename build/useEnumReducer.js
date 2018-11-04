"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.createHook = void 0;

var _react = require("react");

// type Config = { useReducer :: React.Hook };
// useReducer :: Config -> (Reducer, State) -> [ State, EnumTagType -> () ]
var createHook = function createHook(_ref) {
  var useReducer = _ref.useReducer;
  return function (reducer, initialState) {
    return useReducer(function (state, action) {
      return reducer(action)(state);
    }, initialState);
  };
}; // useReducer :: (Reducer, State) -> [ State, EnumTagType -> () ]


exports.createHook = createHook;

var _default = createHook({
  useReducer: _react.useReducer
});

exports.default = _default;