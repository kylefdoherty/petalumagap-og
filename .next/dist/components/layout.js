'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _head = require('next/dist/lib/head.js');

var _head2 = _interopRequireDefault(_head);

var _footer = require('./footer');

var _footer2 = _interopRequireDefault(_footer);

var _nav = require('./nav');

var _nav2 = _interopRequireDefault(_nav);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/kyledoherty/Src/spikes/nextjs/petalumagap/components/layout.js';


var defaultTitle = 'Petaluma GAP AVA';
var defaultDescription = "California's newsest American American Viticultural Area (AVA)";
var contentStyles = {};

var Layout = function Layout(_ref) {
  var children = _ref.children,
      _ref$title = _ref.title,
      title = _ref$title === undefined ? defaultTitle : _ref$title,
      _ref$description = _ref.description,
      description = _ref$description === undefined ? defaultDescription : _ref$description;
  return _react2.default.createElement('div', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }, _react2.default.createElement(_head2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }, _react2.default.createElement('title', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }, title), _react2.default.createElement('meta', { charset: 'utf-8', __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  }), _react2.default.createElement('meta', { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge', __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    }
  }), _react2.default.createElement('meta', { name: 'description', content: description, __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    }
  }), _react2.default.createElement('meta', { name: 'viewport', content: 'width=device-width, initial-scale=1', __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    }
  }), _react2.default.createElement('link', { rel: 'apple-touch-icon', href: '/static/vation-theme/images/apple-touch-icon.png', __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    }
  }), _react2.default.createElement('link', { rel: 'icon', href: '/static/vation-theme/images/favicon.ico', type: 'image/x-icon', __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    }
  }), _react2.default.createElement('link', { rel: 'stylesheet', href: '/static/vation-theme/css/bootstrap.min.css', __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    }
  }), _react2.default.createElement('link', { rel: 'stylesheet', href: '/static/vation-theme/css/normalize.css', __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    }
  }), _react2.default.createElement('link', { rel: 'stylesheet', href: '/static/vation-theme/css/font-awesome.min.css', __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    }
  }), _react2.default.createElement('link', { rel: 'stylesheet', href: '/static/vation-theme/css/icomoon.css', __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    }
  }), _react2.default.createElement('link', { rel: 'stylesheet', href: '/static/vation-theme/css/owl.carousel.css', __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    }
  }), _react2.default.createElement('link', { rel: 'stylesheet', href: '/static/vation-theme/css/scrollbar.css', __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    }
  }), _react2.default.createElement('link', { rel: 'stylesheet', href: '/static/vation-theme/css/prettyPhoto.css', __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    }
  }), _react2.default.createElement('link', { rel: 'stylesheet', href: '/static/vation-theme/css/transitions.css', __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    }
  }), _react2.default.createElement('link', { rel: 'stylesheet', href: '/static/vation-theme/css/royalslider.css', __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    }
  }), _react2.default.createElement('link', { rel: 'stylesheet', href: '/static/vation-theme/css/main.css', __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    }
  }), _react2.default.createElement('link', { rel: 'stylesheet', href: '/static/vation-theme/css/color.css', __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    }
  }), _react2.default.createElement('link', { rel: 'stylesheet', href: '/static/vation-theme/css/responsive.css', __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    }
  }), _react2.default.createElement('script', { src: '/static/vation-theme/js/vendor/modernizr-2.8.3-respond-1.4.2.min.js', __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    }
  })), _react2.default.createElement('div', { id: 'tg-wrapper', className: 'tg-wrapper tg-haslayout', __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    }
  }, _react2.default.createElement(_nav2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    }
  }), children, _react2.default.createElement(_footer2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    }
  })), _react2.default.createElement('div', { className: 'petaluma-gap-content__scripts', __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    }
  }, _react2.default.createElement('script', { src: 'https://maps.google.com/maps/api/js?key=AIzaSyCR-KEWAVCn52mSdeVeTqZjtqbmVJyfSus&language=en', __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    }
  }), _react2.default.createElement('script', { src: '/static/vation-theme/js/vendor/jquery-library.js', __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    }
  }), _react2.default.createElement('script', { src: '/static/vation-theme/js/vendor/bootstrap.min.js', __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    }
  }), _react2.default.createElement('script', { src: '/static/vation-theme/js/jquery.singlePageNav.min.js', __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    }
  }), _react2.default.createElement('script', { src: '/static/vation-theme/js/jquery-scrolltofixed.js', __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    }
  }), _react2.default.createElement('script', { src: '/static/vation-theme/js/owl.carousel.min.js', __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    }
  }), _react2.default.createElement('script', { src: '/static/vation-theme/js/jquery.vide.min.js', __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    }
  }), _react2.default.createElement('script', { src: '/static/vation-theme/js/royalslider.min.js', __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    }
  }), _react2.default.createElement('script', { src: '/static/vation-theme/js/scrollbar.min.js', __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    }
  }), _react2.default.createElement('script', { src: '/static/vation-theme/js/isotope.pkgd.js', __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    }
  }), _react2.default.createElement('script', { src: '/static/vation-theme/js/prettyPhoto.js', __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    }
  }), _react2.default.createElement('script', { src: '/static/vation-theme/js/sticky-kit.js', __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    }
  }), _react2.default.createElement('script', { src: '/static/vation-theme/js/countdown.js', __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    }
  }), _react2.default.createElement('script', { src: '/static/vation-theme/js/parallax.js', __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    }
  }), _react2.default.createElement('script', { src: '/static/vation-theme/js/collapse.js', __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    }
  }), _react2.default.createElement('script', { src: '/static/vation-theme/js/countTo.js', __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    }
  }), _react2.default.createElement('script', { src: '/static/vation-theme/js/appear.js', __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    }
  }), _react2.default.createElement('script', { src: '/static/vation-theme/js/gmap3.js', __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    }
  }), _react2.default.createElement('script', { src: '/static/vation-theme/js/main.js', __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    }
  })));
};

exports.default = Layout;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvbGF5b3V0LmpzIl0sIm5hbWVzIjpbIkhlYWQiLCJGb290ZXIiLCJOYXYiLCJkZWZhdWx0VGl0bGUiLCJkZWZhdWx0RGVzY3JpcHRpb24iLCJjb250ZW50U3R5bGVzIiwiTGF5b3V0IiwiY2hpbGRyZW4iLCJ0aXRsZSIsImRlc2NyaXB0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsQUFBTzs7OztBQUVQLEFBQU8sQUFBWTs7OztBQUNuQixBQUFPLEFBQVM7Ozs7Ozs7OztBQUVoQixJQUFNLGVBQU4sQUFBcUI7QUFDckIsSUFBTSxxQkFBTixBQUEyQjtBQUMzQixJQUFNLGdCQUFOLEFBQXNCOztBQUV0QixJQUFNLFNBQVMsU0FBVCxBQUFTLGFBQUE7TUFBQSxBQUFHLGdCQUFILEFBQUc7d0JBQUgsQUFBYTtNQUFiLEFBQWEsbUNBQWIsQUFBcUIsZUFBckI7OEJBQUEsQUFBbUM7TUFBbkMsQUFBbUMsK0NBQW5DLEFBQWlELHFCQUFqRDt5QkFDYixjQUFBOztnQkFBQTtrQkFBQSxBQUNFO0FBREY7QUFBQSxHQUFBLGtCQUNFLEFBQUM7O2dCQUFEO2tCQUFBLEFBQ0U7QUFERjtBQUFBLHFCQUNFLGNBQUE7O2dCQUFBO2tCQUFBLEFBQVM7QUFBVDtBQUFBLEtBREYsQUFDRSxBQUNBLGdEQUFNLFNBQU4sQUFBYztnQkFBZDtrQkFGRixBQUVFLEFBQ0E7QUFEQTs4Q0FDTSxjQUFOLEFBQWlCLG1CQUFrQixTQUFuQyxBQUEyQztnQkFBM0M7a0JBSEYsQUFHRSxBQUNBO0FBREE7OENBQ00sTUFBTixBQUFXLGVBQWMsU0FBekIsQUFBbUM7Z0JBQW5DO2tCQUpGLEFBSUUsQUFDQTtBQURBOzhDQUNNLE1BQU4sQUFBVyxZQUFXLFNBQXRCLEFBQThCO2dCQUE5QjtrQkFMRixBQUtFLEFBQ0E7QUFEQTs4Q0FDTSxLQUFOLEFBQVUsb0JBQW1CLE1BQTdCLEFBQWtDO2dCQUFsQztrQkFORixBQU1FLEFBQ0E7QUFEQTs4Q0FDTSxLQUFOLEFBQVUsUUFBTyxNQUFqQixBQUFzQiwyQ0FBMEMsTUFBaEUsQUFBcUU7Z0JBQXJFO2tCQVBGLEFBT0UsQUFDQTtBQURBOzhDQUNNLEtBQU4sQUFBVSxjQUFhLE1BQXZCLEFBQTRCO2dCQUE1QjtrQkFSRixBQVFFLEFBQ0E7QUFEQTs4Q0FDTSxLQUFOLEFBQVUsY0FBYSxNQUF2QixBQUE0QjtnQkFBNUI7a0JBVEYsQUFTRSxBQUNBO0FBREE7OENBQ00sS0FBTixBQUFVLGNBQWEsTUFBdkIsQUFBNEI7Z0JBQTVCO2tCQVZGLEFBVUUsQUFDQTtBQURBOzhDQUNNLEtBQU4sQUFBVSxjQUFhLE1BQXZCLEFBQTRCO2dCQUE1QjtrQkFYRixBQVdFLEFBQ0E7QUFEQTs4Q0FDTSxLQUFOLEFBQVUsY0FBYSxNQUF2QixBQUE0QjtnQkFBNUI7a0JBWkYsQUFZRSxBQUNBO0FBREE7OENBQ00sS0FBTixBQUFVLGNBQWEsTUFBdkIsQUFBNEI7Z0JBQTVCO2tCQWJGLEFBYUUsQUFDQTtBQURBOzhDQUNNLEtBQU4sQUFBVSxjQUFhLE1BQXZCLEFBQTRCO2dCQUE1QjtrQkFkRixBQWNFLEFBQ0E7QUFEQTs4Q0FDTSxLQUFOLEFBQVUsY0FBYSxNQUF2QixBQUE0QjtnQkFBNUI7a0JBZkYsQUFlRSxBQUNBO0FBREE7OENBQ00sS0FBTixBQUFVLGNBQWEsTUFBdkIsQUFBNEI7Z0JBQTVCO2tCQWhCRixBQWdCRSxBQUNBO0FBREE7OENBQ00sS0FBTixBQUFVLGNBQWEsTUFBdkIsQUFBNEI7Z0JBQTVCO2tCQWpCRixBQWlCRSxBQUNBO0FBREE7OENBQ00sS0FBTixBQUFVLGNBQWEsTUFBdkIsQUFBNEI7Z0JBQTVCO2tCQWxCRixBQWtCRSxBQUNBO0FBREE7OENBQ00sS0FBTixBQUFVLGNBQWEsTUFBdkIsQUFBNEI7Z0JBQTVCO2tCQW5CRixBQW1CRSxBQUNBO0FBREE7Z0RBQ1EsS0FBUixBQUFZO2dCQUFaO2tCQXJCSixBQUNFLEFBb0JFLEFBR0Y7QUFIRTt1QkFHRixjQUFBLFNBQUssSUFBTCxBQUFRLGNBQWEsV0FBckIsQUFBK0I7Z0JBQS9CO2tCQUFBLEFBQ0U7QUFERjtxQkFDRSxBQUFDOztnQkFBRDtrQkFERixBQUNFLEFBQ0M7QUFERDtBQUFBLE1BREYsQUFHRSwwQkFBQSxBQUFDOztnQkFBRDtrQkEzQkosQUF3QkUsQUFHRSxBQUdGO0FBSEU7QUFBQSx1QkFHRixjQUFBLFNBQUssV0FBTCxBQUFlO2dCQUFmO2tCQUFBLEFBQ0U7QUFERjsrQ0FDVSxLQUFSLEFBQVk7Z0JBQVo7a0JBREYsQUFDRSxBQUNBO0FBREE7Z0RBQ1EsS0FBUixBQUFZO2dCQUFaO2tCQUZGLEFBRUUsQUFDQTtBQURBO2dEQUNRLEtBQVIsQUFBWTtnQkFBWjtrQkFIRixBQUdFLEFBQ0E7QUFEQTtnREFDUSxLQUFSLEFBQVk7Z0JBQVo7a0JBSkYsQUFJRSxBQUNBO0FBREE7Z0RBQ1EsS0FBUixBQUFZO2dCQUFaO2tCQUxGLEFBS0UsQUFDQTtBQURBO2dEQUNRLEtBQVIsQUFBWTtnQkFBWjtrQkFORixBQU1FLEFBQ0E7QUFEQTtnREFDUSxLQUFSLEFBQVk7Z0JBQVo7a0JBUEYsQUFPRSxBQUNBO0FBREE7Z0RBQ1EsS0FBUixBQUFZO2dCQUFaO2tCQVJGLEFBUUUsQUFDQTtBQURBO2dEQUNRLEtBQVIsQUFBWTtnQkFBWjtrQkFURixBQVNFLEFBQ0E7QUFEQTtnREFDUSxLQUFSLEFBQVk7Z0JBQVo7a0JBVkYsQUFVRSxBQUNBO0FBREE7Z0RBQ1EsS0FBUixBQUFZO2dCQUFaO2tCQVhGLEFBV0UsQUFDQTtBQURBO2dEQUNRLEtBQVIsQUFBWTtnQkFBWjtrQkFaRixBQVlFLEFBQ0E7QUFEQTtnREFDUSxLQUFSLEFBQVk7Z0JBQVo7a0JBYkYsQUFhRSxBQUNBO0FBREE7Z0RBQ1EsS0FBUixBQUFZO2dCQUFaO2tCQWRGLEFBY0UsQUFDQTtBQURBO2dEQUNRLEtBQVIsQUFBWTtnQkFBWjtrQkFmRixBQWVFLEFBQ0E7QUFEQTtnREFDUSxLQUFSLEFBQVk7Z0JBQVo7a0JBaEJGLEFBZ0JFLEFBQ0E7QUFEQTtnREFDUSxLQUFSLEFBQVk7Z0JBQVo7a0JBakJGLEFBaUJFLEFBQ0E7QUFEQTtnREFDUSxLQUFSLEFBQVk7Z0JBQVo7a0JBbEJGLEFBa0JFLEFBQ0E7QUFEQTtnREFDUSxLQUFSLEFBQVk7Z0JBQVo7a0JBbERTLEFBQ2IsQUE4QkUsQUFtQkU7QUFBQTs7QUFsRE4sQUF1REE7O2tCQUFBLEFBQWUiLCJmaWxlIjoibGF5b3V0LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9reWxlZG9oZXJ0eS9TcmMvc3Bpa2VzL25leHRqcy9wZXRhbHVtYWdhcCJ9