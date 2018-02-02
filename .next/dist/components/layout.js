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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvbGF5b3V0LmpzIl0sIm5hbWVzIjpbIkhlYWQiLCJOYXYiLCJkZWZhdWx0VGl0bGUiLCJkZWZhdWx0RGVzY3JpcHRpb24iLCJMYXlvdXQiLCJjaGlsZHJlbiIsInRpdGxlIiwiZGVzY3JpcHRpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxBQUFPOzs7O0FBRVAsQUFBTyxBQUFTOzs7Ozs7Ozs7QUFFaEIsSUFBTSxlQUFOLEFBQXFCO0FBQ3JCLElBQU0scUJBQU4sQUFBMkI7O0FBRTNCLElBQU0sU0FBUyxTQUFULEFBQVMsYUFBQTtNQUFBLEFBQUcsZ0JBQUgsQUFBRzt3QkFBSCxBQUFhO01BQWIsQUFBYSxtQ0FBYixBQUFxQixlQUFyQjs4QkFBQSxBQUFtQztNQUFuQyxBQUFtQywrQ0FBbkMsQUFBaUQscUJBQWpEO3lCQUNiLGNBQUE7O2dCQUFBO2tCQUFBLEFBQ0U7QUFERjtBQUFBLEdBQUEsa0JBQ0UsQUFBQzs7Z0JBQUQ7a0JBQUEsQUFDRTtBQURGO0FBQUEscUJBQ0UsY0FBQTs7Z0JBQUE7a0JBQUEsQUFBUztBQUFUO0FBQUEsS0FERixBQUNFLEFBQ0EsZ0RBQU0sU0FBTixBQUFjO2dCQUFkO2tCQUZGLEFBRUUsQUFDQTtBQURBOzhDQUNNLGNBQU4sQUFBaUIsbUJBQWtCLFNBQW5DLEFBQTJDO2dCQUEzQztrQkFIRixBQUdFLEFBQ0E7QUFEQTs4Q0FDTSxNQUFOLEFBQVcsZUFBYyxTQUF6QixBQUFtQztnQkFBbkM7a0JBSkYsQUFJRSxBQUNBO0FBREE7OENBQ00sTUFBTixBQUFXLFlBQVcsU0FBdEIsQUFBOEI7Z0JBQTlCO2tCQUxGLEFBS0UsQUFDQTtBQURBOzhDQUNNLEtBQU4sQUFBVSxvQkFBbUIsTUFBN0IsQUFBa0M7Z0JBQWxDO2tCQU5GLEFBTUUsQUFDQTtBQURBOzhDQUNNLEtBQU4sQUFBVSxRQUFPLE1BQWpCLEFBQXNCLDJDQUEwQyxNQUFoRSxBQUFxRTtnQkFBckU7a0JBUEYsQUFPRSxBQUNBO0FBREE7OENBQ00sS0FBTixBQUFVLGNBQWEsTUFBdkIsQUFBNEI7Z0JBQTVCO2tCQVJGLEFBUUUsQUFDQTtBQURBOzhDQUNNLEtBQU4sQUFBVSxjQUFhLE1BQXZCLEFBQTRCO2dCQUE1QjtrQkFURixBQVNFLEFBQ0E7QUFEQTs4Q0FDTSxLQUFOLEFBQVUsY0FBYSxNQUF2QixBQUE0QjtnQkFBNUI7a0JBVkYsQUFVRSxBQUNBO0FBREE7OENBQ00sS0FBTixBQUFVLGNBQWEsTUFBdkIsQUFBNEI7Z0JBQTVCO2tCQVhGLEFBV0UsQUFDQTtBQURBOzhDQUNNLEtBQU4sQUFBVSxjQUFhLE1BQXZCLEFBQTRCO2dCQUE1QjtrQkFaRixBQVlFLEFBQ0E7QUFEQTs4Q0FDTSxLQUFOLEFBQVUsY0FBYSxNQUF2QixBQUE0QjtnQkFBNUI7a0JBYkYsQUFhRSxBQUNBO0FBREE7OENBQ00sS0FBTixBQUFVLGNBQWEsTUFBdkIsQUFBNEI7Z0JBQTVCO2tCQWRGLEFBY0UsQUFDQTtBQURBOzhDQUNNLEtBQU4sQUFBVSxjQUFhLE1BQXZCLEFBQTRCO2dCQUE1QjtrQkFmRixBQWVFLEFBQ0E7QUFEQTs4Q0FDTSxLQUFOLEFBQVUsY0FBYSxNQUF2QixBQUE0QjtnQkFBNUI7a0JBaEJGLEFBZ0JFLEFBQ0E7QUFEQTs4Q0FDTSxLQUFOLEFBQVUsY0FBYSxNQUF2QixBQUE0QjtnQkFBNUI7a0JBakJGLEFBaUJFLEFBQ0E7QUFEQTs4Q0FDTSxLQUFOLEFBQVUsY0FBYSxNQUF2QixBQUE0QjtnQkFBNUI7a0JBbEJGLEFBa0JFLEFBQ0E7QUFEQTs4Q0FDTSxLQUFOLEFBQVUsY0FBYSxNQUF2QixBQUE0QjtnQkFBNUI7a0JBbkJGLEFBbUJFLEFBQ0E7QUFEQTtnREFDUSxLQUFSLEFBQVk7Z0JBQVo7a0JBckJKLEFBQ0UsQUFvQkUsQUFFRjtBQUZFO3VCQUVGLEFBQUM7O2dCQUFEO2tCQXZCRixBQXVCRSxBQUNBO0FBREE7QUFBQSxzQkFDQSxjQUFBLFNBQUssV0FBTCxBQUFlO2dCQUFmO2tCQUFBLEFBQ0c7QUFESDtLQXhCRixBQXdCRSxBQUdBLDJCQUFBLGNBQUEsU0FBSyxXQUFMLEFBQWU7Z0JBQWY7a0JBQUEsQUFDRTtBQURGOytDQUNVLEtBQVIsQUFBWSxvREFBbUQsV0FBL0QsQUFBeUUsMkVBQTBFLGFBQW5KLEFBQStKO2dCQUEvSjtrQkFERixBQUNFLEFBQ0E7QUFEQTtnREFDUSxLQUFSLEFBQVksd0VBQXVFLFdBQW5GLEFBQTZGLDJFQUEwRSxhQUF2SyxBQUFtTDtnQkFBbkw7a0JBRkYsQUFFRSxBQUNBO0FBREE7Z0RBQ1EsS0FBUixBQUFZLCtFQUE4RSxXQUExRixBQUFvRywyRUFBMEUsYUFBOUssQUFBMEw7Z0JBQTFMO2tCQS9CUyxBQUNiLEFBMkJFLEFBR0U7QUFBQTs7QUEvQk4sQUFvQ0E7O2tCQUFBLEFBQWUiLCJmaWxlIjoibGF5b3V0LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9reWxlZG9oZXJ0eS9TcmMvc3Bpa2VzL25leHRqcy9wZXRhbHVtYWdhcCJ9