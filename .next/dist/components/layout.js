'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _head = require('next/dist/lib/head.js');

var _head2 = _interopRequireDefault(_head);

var _nav = require('./nav');

var _nav2 = _interopRequireDefault(_nav);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/kyledoherty/Src/spikes/nextjs/petalumagap/components/layout.js';


var defaultTitle = 'Petaluma GAP AVA';
var defaultDescription = "California's newsest American American Viticultural Area (AVA)";

var Layout = function Layout(_ref) {
  var children = _ref.children,
      _ref$title = _ref.title,
      title = _ref$title === undefined ? defaultTitle : _ref$title,
      _ref$description = _ref.description,
      description = _ref$description === undefined ? defaultDescription : _ref$description;
  return _react2.default.createElement('div', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, _react2.default.createElement(_head2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }, _react2.default.createElement('title', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }, title), _react2.default.createElement('meta', { charset: 'utf-8', __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }), _react2.default.createElement('meta', { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge', __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }), _react2.default.createElement('meta', { name: 'description', content: description, __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  }), _react2.default.createElement('meta', { name: 'viewport', content: 'width=device-width, initial-scale=1', __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    }
  }), _react2.default.createElement('link', { rel: 'apple-touch-icon', href: '/static/vation-theme/images/apple-touch-icon.png', __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    }
  }), _react2.default.createElement('link', { rel: 'icon', href: '/static/vation-theme/images/favicon.ico', type: 'image/x-icon', __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    }
  }), _react2.default.createElement('link', { rel: 'stylesheet', href: '/static/vation-theme/css/bootstrap.min.css', __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    }
  }), _react2.default.createElement('link', { rel: 'stylesheet', href: '/static/vation-theme/css/normalize.css', __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    }
  }), _react2.default.createElement('link', { rel: 'stylesheet', href: '/static/vation-theme/css/font-awesome.min.css', __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    }
  }), _react2.default.createElement('link', { rel: 'stylesheet', href: '/static/vation-theme/css/icomoon.css', __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    }
  }), _react2.default.createElement('link', { rel: 'stylesheet', href: '/static/vation-theme/css/owl.carousel.css', __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    }
  }), _react2.default.createElement('link', { rel: 'stylesheet', href: '/static/vation-theme/css/scrollbar.css', __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    }
  }), _react2.default.createElement('link', { rel: 'stylesheet', href: '/static/vation-theme/css/prettyPhoto.css', __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    }
  }), _react2.default.createElement('link', { rel: 'stylesheet', href: '/static/vation-theme/css/transitions.css', __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    }
  }), _react2.default.createElement('link', { rel: 'stylesheet', href: '/static/vation-theme/css/royalslider.css', __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    }
  }), _react2.default.createElement('link', { rel: 'stylesheet', href: '/static/vation-theme/css/main.css', __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    }
  }), _react2.default.createElement('link', { rel: 'stylesheet', href: '/static/vation-theme/css/color.css', __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    }
  }), _react2.default.createElement('link', { rel: 'stylesheet', href: '/static/vation-theme/css/responsive.css', __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    }
  }), _react2.default.createElement('script', { src: '/static/vation-theme/js/vendor/modernizr-2.8.3-respond-1.4.2.min.js', __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    }
  })), _react2.default.createElement(_nav2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    }
  }), _react2.default.createElement('div', { className: 'container-fluid', __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    }
  }, children), _react2.default.createElement('div', { className: 'scripts', __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    }
  }, _react2.default.createElement('script', { src: 'https://code.jquery.com/jquery-3.1.1.slim.min.js', integrity: 'sha384-A7FZj7v+d/sdmMqp/nOQwliLvUsJfDHW+k9Omg/a/EheAdgtzNs3hpfag6Ed950n', crossorigin: 'anonymous', __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    }
  }), _react2.default.createElement('script', { src: 'https://cdnjs.cloudflare.com/ajax/libs/tether/1.4.0/js/tether.min.js', integrity: 'sha384-DztdAPBWPRXSA/3eYEEUWrWCy7G5KFbe8fFjk5JAIxUYHKkDx6Qin1DkWx51bBrb', crossorigin: 'anonymous', __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    }
  }), _react2.default.createElement('script', { src: 'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/js/bootstrap.min.js', integrity: 'sha384-vBWWzlZJ8ea9aCX4pEW3rVHjgjt7zpkNpZk+02D9phzyeVkE+jo0ieGizqPLForn', crossorigin: 'anonymous', __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    }
  })));
};

exports.default = Layout;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvbGF5b3V0LmpzIl0sIm5hbWVzIjpbIkhlYWQiLCJOYXZpZ2F0aW9uIiwiZGVmYXVsdFRpdGxlIiwiZGVmYXVsdERlc2NyaXB0aW9uIiwiTGF5b3V0IiwiY2hpbGRyZW4iLCJ0aXRsZSIsImRlc2NyaXB0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsQUFBTzs7OztBQUVQLEFBQU8sQUFBZ0I7Ozs7Ozs7OztBQUV2QixJQUFNLGVBQU4sQUFBcUI7QUFDckIsSUFBTSxxQkFBTixBQUEyQjs7QUFFM0IsSUFBTSxTQUFTLFNBQVQsQUFBUyxhQUFBO01BQUEsQUFBRyxnQkFBSCxBQUFHO3dCQUFILEFBQWE7TUFBYixBQUFhLG1DQUFiLEFBQXFCLGVBQXJCOzhCQUFBLEFBQW1DO01BQW5DLEFBQW1DLCtDQUFuQyxBQUFpRCxxQkFBakQ7eUJBQ2IsY0FBQTs7Z0JBQUE7a0JBQUEsQUFDRTtBQURGO0FBQUEsR0FBQSxrQkFDRSxBQUFDOztnQkFBRDtrQkFBQSxBQUNFO0FBREY7QUFBQSxxQkFDRSxjQUFBOztnQkFBQTtrQkFBQSxBQUFTO0FBQVQ7QUFBQSxLQURGLEFBQ0UsQUFDQSxnREFBTSxTQUFOLEFBQWM7Z0JBQWQ7a0JBRkYsQUFFRSxBQUNBO0FBREE7OENBQ00sY0FBTixBQUFpQixtQkFBa0IsU0FBbkMsQUFBMkM7Z0JBQTNDO2tCQUhGLEFBR0UsQUFDQTtBQURBOzhDQUNNLE1BQU4sQUFBVyxlQUFjLFNBQXpCLEFBQW1DO2dCQUFuQztrQkFKRixBQUlFLEFBQ0E7QUFEQTs4Q0FDTSxNQUFOLEFBQVcsWUFBVyxTQUF0QixBQUE4QjtnQkFBOUI7a0JBTEYsQUFLRSxBQUNBO0FBREE7OENBQ00sS0FBTixBQUFVLG9CQUFtQixNQUE3QixBQUFrQztnQkFBbEM7a0JBTkYsQUFNRSxBQUNBO0FBREE7OENBQ00sS0FBTixBQUFVLFFBQU8sTUFBakIsQUFBc0IsMkNBQTBDLE1BQWhFLEFBQXFFO2dCQUFyRTtrQkFQRixBQU9FLEFBQ0E7QUFEQTs4Q0FDTSxLQUFOLEFBQVUsY0FBYSxNQUF2QixBQUE0QjtnQkFBNUI7a0JBUkYsQUFRRSxBQUNBO0FBREE7OENBQ00sS0FBTixBQUFVLGNBQWEsTUFBdkIsQUFBNEI7Z0JBQTVCO2tCQVRGLEFBU0UsQUFDQTtBQURBOzhDQUNNLEtBQU4sQUFBVSxjQUFhLE1BQXZCLEFBQTRCO2dCQUE1QjtrQkFWRixBQVVFLEFBQ0E7QUFEQTs4Q0FDTSxLQUFOLEFBQVUsY0FBYSxNQUF2QixBQUE0QjtnQkFBNUI7a0JBWEYsQUFXRSxBQUNBO0FBREE7OENBQ00sS0FBTixBQUFVLGNBQWEsTUFBdkIsQUFBNEI7Z0JBQTVCO2tCQVpGLEFBWUUsQUFDQTtBQURBOzhDQUNNLEtBQU4sQUFBVSxjQUFhLE1BQXZCLEFBQTRCO2dCQUE1QjtrQkFiRixBQWFFLEFBQ0E7QUFEQTs4Q0FDTSxLQUFOLEFBQVUsY0FBYSxNQUF2QixBQUE0QjtnQkFBNUI7a0JBZEYsQUFjRSxBQUNBO0FBREE7OENBQ00sS0FBTixBQUFVLGNBQWEsTUFBdkIsQUFBNEI7Z0JBQTVCO2tCQWZGLEFBZUUsQUFDQTtBQURBOzhDQUNNLEtBQU4sQUFBVSxjQUFhLE1BQXZCLEFBQTRCO2dCQUE1QjtrQkFoQkYsQUFnQkUsQUFDQTtBQURBOzhDQUNNLEtBQU4sQUFBVSxjQUFhLE1BQXZCLEFBQTRCO2dCQUE1QjtrQkFqQkYsQUFpQkUsQUFDQTtBQURBOzhDQUNNLEtBQU4sQUFBVSxjQUFhLE1BQXZCLEFBQTRCO2dCQUE1QjtrQkFsQkYsQUFrQkUsQUFDQTtBQURBOzhDQUNNLEtBQU4sQUFBVSxjQUFhLE1BQXZCLEFBQTRCO2dCQUE1QjtrQkFuQkYsQUFtQkUsQUFDQTtBQURBO2dEQUNRLEtBQVIsQUFBWTtnQkFBWjtrQkFyQkosQUFDRSxBQW9CRSxBQUVGO0FBRkU7dUJBRUYsQUFBQzs7Z0JBQUQ7a0JBdkJGLEFBdUJFLEFBQ0E7QUFEQTtBQUFBLHNCQUNBLGNBQUEsU0FBSyxXQUFMLEFBQWU7Z0JBQWY7a0JBQUEsQUFDRztBQURIO0tBeEJGLEFBd0JFLEFBR0EsMkJBQUEsY0FBQSxTQUFLLFdBQUwsQUFBZTtnQkFBZjtrQkFBQSxBQUNFO0FBREY7K0NBQ1UsS0FBUixBQUFZLG9EQUFtRCxXQUEvRCxBQUF5RSwyRUFBMEUsYUFBbkosQUFBK0o7Z0JBQS9KO2tCQURGLEFBQ0UsQUFDQTtBQURBO2dEQUNRLEtBQVIsQUFBWSx3RUFBdUUsV0FBbkYsQUFBNkYsMkVBQTBFLGFBQXZLLEFBQW1MO2dCQUFuTDtrQkFGRixBQUVFLEFBQ0E7QUFEQTtnREFDUSxLQUFSLEFBQVksK0VBQThFLFdBQTFGLEFBQW9HLDJFQUEwRSxhQUE5SyxBQUEwTDtnQkFBMUw7a0JBL0JTLEFBQ2IsQUEyQkUsQUFHRTtBQUFBOztBQS9CTixBQW9DQTs7a0JBQUEsQUFBZSIsImZpbGUiOiJsYXlvdXQuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2t5bGVkb2hlcnR5L1NyYy9zcGlrZXMvbmV4dGpzL3BldGFsdW1hZ2FwIn0=