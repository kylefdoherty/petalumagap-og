'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _layout = require('../components/layout');

var _layout2 = _interopRequireDefault(_layout);

var _heroImg = require('../components/hero-img');

var _heroImg2 = _interopRequireDefault(_heroImg);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/kyledoherty/Src/spikes/nextjs/petalumagap/pages/index.js?entry';


var SectionHeader = function SectionHeader(_ref) {
  var mainText = _ref.mainText,
      subText = _ref.subText;
  return _react2.default.createElement('div', { className: 'col-xs-12 col-sm-12 col-md-12 col-lg-push-2 col-lg-8', __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    }
  }, _react2.default.createElement('div', { className: 'tg-sectionhead tg-sectionheadvtwo', __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, _react2.default.createElement('div', { className: 'tg-sectiontitle', __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, _react2.default.createElement('h2', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, mainText)), _react2.default.createElement('div', { className: 'tg-description', __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }, _react2.default.createElement('p', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }, subText))));
};

// TODO - eventually can just have the cards on their own and stick them in
// whatever kind of container. Not sure what that will look like yet though
var cardTitleStyles = {
  padding: '0'
};

var FeaturedWineryCard = function FeaturedWineryCard(_ref2) {
  var cardTitleStyles = _ref2.cardTitleStyles,
      feature = _ref2.feature,
      name = _ref2.name,
      description = _ref2.description;
  return _react2.default.createElement('div', { className: 'col-xs-12 col-sm-6 col-md-6 col-lg-6', style: { paddingTop: '40px' }, __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    }
  }, _react2.default.createElement('div', { className: 'tg-feature', __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    }
  }, _react2.default.createElement('figure', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    }
  }, _react2.default.createElement('a', { href: 'javascript:void(0);(0);', __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    }
  }, _react2.default.createElement('img', { src: '/static/vation-theme/images/allhome/1/img-02.jpg', alt: 'image description', __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    }
  }))), _react2.default.createElement('div', { className: 'tg-featurecontent', __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    }
  }, _react2.default.createElement('div', { style: cardTitleStyles, className: 'tg-title tg-titlevone', __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    }
  }, _react2.default.createElement('h3', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    }
  }, _react2.default.createElement('span', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    }
  }, feature), name)), _react2.default.createElement('div', { className: 'tg-description', __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    }
  }, _react2.default.createElement('p', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    }
  }, description)))));
};

var featuredWinery1 = {
  feature: 'Winery Feature',
  name: 'Kastania Vineyards',
  description: 'Lorem ipsum dolor sit amet, eu per legimus referrentur. Ius ne viris repudiare, nominavi sententiae eos in. Et duo salutatus consequat, et epicurei euripidis mei dolor sit amet, consectetuer adipiscing elit.'
};
var featuredWinery2 = {
  feature: 'Winery Feature',
  name: 'Three Sticks',
  description: 'Lorem ipsum dolor sit amet, eu per legimus referrentur. Ius ne viris repudiare, nominavi sententiae eos in. Et duo salutatus consequat, et epicurei euripidis mei dolor sit amet, consectetuer adipiscing elit.'
};

var featuredWineries = [featuredWinery1, featuredWinery2, featuredWinery1, featuredWinery2];

exports.default = function () {
  return _react2.default.createElement(_layout2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    }
  }, _react2.default.createElement(_heroImg2.default, {
    header: 'Petaluma Gap',
    subHeader: 'The newsest and most interesting American Viticulture Area in the U.S.',
    cta: 'Checkout the Wineries',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    }
  }), _react2.default.createElement('section', { className: 'tg-sectionspace tg-haslayout tg-paddingbottomzero', __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    }
  }, _react2.default.createElement('div', { className: 'container', __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    }
  }, _react2.default.createElement('div', { className: 'row', __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    }
  }, _react2.default.createElement(SectionHeader, {
    mainText: 'Featured Gap Wineries',
    subText: 'Mauris in rutrum nunc. Aenean in lectus id mi sollicitudin placerat. Sed porta ac libero eget maximus. Donec dictum, sem quis ullamcorper porta,',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    }
  }), featuredWineries.map(function (winery) {
    return _react2.default.createElement(FeaturedWineryCard, {
      feature: winery.feature,
      name: winery.name,
      description: winery.description,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81
      }
    });
  })))), _react2.default.createElement('section', { 'class': 'tg-sectionspace tg-haslayout tg-bgaboutus', __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    }
  }, _react2.default.createElement('div', { 'class': 'container', __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    }
  }, _react2.default.createElement('div', { 'class': 'row', __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    }
  }, _react2.default.createElement('div', { 'class': 'col-xs-12 col-sm-12 col-md-12 col-lg-12', __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    }
  }, _react2.default.createElement('div', { 'class': 'tg-aboutus', __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    }
  }, _react2.default.createElement('div', { 'class': 'tg-sectionhead tg-sectionheadvthree', __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    }
  }, _react2.default.createElement('div', { 'class': 'tg-sectiontitle', __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    }
  }, _react2.default.createElement('h2', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    }
  }, _react2.default.createElement('span', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    }
  }, 'Based in Sydney, Australia'), 'We\u2019re a digital studio that believe in the power of great ideas.'))), _react2.default.createElement('div', { 'class': 'tg-description', __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    }
  }, _react2.default.createElement('p', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105
    }
  }, 'Lorem ipsum dolor sit amet, eu per legimus referrentur. Ius ne viris repudiare, nominavi sententiae eos in. Et duo salutatus consequat, Lorem ipsum dolor sit amet, eu per legimus referrentur. Ius ne viris repudiare, nominavi sententiae.')), _react2.default.createElement('div', { 'class': 'tg-themefeatures tg-themefeaturesvtwo', __source: {
      fileName: _jsxFileName,
      lineNumber: 107
    }
  }, _react2.default.createElement('div', { 'class': 'tg-themefeature', __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    }
  }, _react2.default.createElement('span', { 'class': 'tg-themefeatureicon', __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    }
  }, _react2.default.createElement('i', { 'class': 'icon-lightbulb', __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    }
  })), _react2.default.createElement('h3', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    }
  }, 'Designing Department'), _react2.default.createElement('div', { 'class': 'tg-description', __source: {
      fileName: _jsxFileName,
      lineNumber: 111
    }
  }, _react2.default.createElement('p', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112
    }
  }, 'Lorem ipsum dolor sit amet, eu per legimus referrentur. Ius ne viris repudiare, nominavi sententiae eos consequat.'))), _react2.default.createElement('div', { 'class': 'tg-themefeature', __source: {
      fileName: _jsxFileName,
      lineNumber: 115
    }
  }, _react2.default.createElement('span', { 'class': 'tg-themefeatureicon', __source: {
      fileName: _jsxFileName,
      lineNumber: 116
    }
  }, _react2.default.createElement('i', { 'class': 'icon-lightbulb', __source: {
      fileName: _jsxFileName,
      lineNumber: 116
    }
  })), _react2.default.createElement('h3', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117
    }
  }, 'Designing Department'), _react2.default.createElement('div', { 'class': 'tg-description', __source: {
      fileName: _jsxFileName,
      lineNumber: 118
    }
  }, _react2.default.createElement('p', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119
    }
  }, 'Lorem ipsum dolor sit amet, eu per legimus referrentur. Ius ne viris repudiare, nominavi sententiae eos consequat.'))), _react2.default.createElement('div', { 'class': 'tg-themefeature', __source: {
      fileName: _jsxFileName,
      lineNumber: 122
    }
  }, _react2.default.createElement('span', { 'class': 'tg-themefeatureicon', __source: {
      fileName: _jsxFileName,
      lineNumber: 123
    }
  }, _react2.default.createElement('i', { 'class': 'icon-lightbulb', __source: {
      fileName: _jsxFileName,
      lineNumber: 123
    }
  })), _react2.default.createElement('h3', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124
    }
  }, 'Designing Department'), _react2.default.createElement('div', { 'class': 'tg-description', __source: {
      fileName: _jsxFileName,
      lineNumber: 125
    }
  }, _react2.default.createElement('p', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126
    }
  }, 'Lorem ipsum dolor sit amet, eu per legimus referrentur. Ius ne viris repudiare, nominavi sententiae eos consequat.')))))))), _react2.default.createElement('ul', { className: 'tg-statistics', __source: {
      fileName: _jsxFileName,
      lineNumber: 134
    }
  }, _react2.default.createElement('li', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135
    }
  }, _react2.default.createElement('h3', { 'data-from': '0', 'data-to': '200000', 'data-speed': '5000', 'data-refresh-interval': '50', __source: {
      fileName: _jsxFileName,
      lineNumber: 136
    }
  }, '200,000'), _react2.default.createElement('h4', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137
    }
  }, 'Total Acres')), _react2.default.createElement('li', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139
    }
  }, _react2.default.createElement('h3', { 'data-from': '0', 'data-to': '4000', 'data-speed': '5000', 'data-refresh-interval': '50', __source: {
      fileName: _jsxFileName,
      lineNumber: 140
    }
  }, '4,000'), _react2.default.createElement('h4', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141
    }
  }, 'Acres of Vineyards')), _react2.default.createElement('li', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143
    }
  }, _react2.default.createElement('h3', { 'data-from': '0', 'data-to': '80', 'data-speed': '5000', 'data-refresh-interval': '50', __source: {
      fileName: _jsxFileName,
      lineNumber: 144
    }
  }, '80'), _react2.default.createElement('h4', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145
    }
  }, 'Plus Vineyards')), _react2.default.createElement('li', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147
    }
  }, _react2.default.createElement('h3', { 'data-from': '0', 'data-to': '150', 'data-speed': '5000', 'data-refresh-interval': '50', __source: {
      fileName: _jsxFileName,
      lineNumber: 148
    }
  }, '150'), _react2.default.createElement('h4', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149
    }
  }, 'Yrs Farming Grapes')))));
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIkxheW91dCIsIkhlcm9JbWciLCJTZWN0aW9uSGVhZGVyIiwibWFpblRleHQiLCJzdWJUZXh0IiwiY2FyZFRpdGxlU3R5bGVzIiwicGFkZGluZyIsIkZlYXR1cmVkV2luZXJ5Q2FyZCIsImZlYXR1cmUiLCJuYW1lIiwiZGVzY3JpcHRpb24iLCJwYWRkaW5nVG9wIiwiZmVhdHVyZWRXaW5lcnkxIiwiZmVhdHVyZWRXaW5lcnkyIiwiZmVhdHVyZWRXaW5lcmllcyIsIm1hcCIsIndpbmVyeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBWTs7OztBQUNuQixBQUFPLEFBQWE7Ozs7Ozs7OztBQUVwQixJQUFNLGdCQUFnQixTQUFoQixBQUFnQixvQkFBQTtNQUFBLEFBQUcsZ0JBQUgsQUFBRztNQUFILEFBQWEsZUFBYixBQUFhO3lCQUNqQyxjQUFBLFNBQUssV0FBTCxBQUFlO2dCQUFmO2tCQUFBLEFBQ0U7QUFERjtHQUFBLGtCQUNFLGNBQUEsU0FBSyxXQUFMLEFBQWU7Z0JBQWY7a0JBQUEsQUFDRTtBQURGO3FCQUNFLGNBQUEsU0FBSyxXQUFMLEFBQWU7Z0JBQWY7a0JBQUEsQUFDRTtBQURGO3FCQUNFLGNBQUE7O2dCQUFBO2tCQUFBLEFBQUs7QUFBTDtBQUFBLEtBRkosQUFDRSxBQUNFLEFBRUYsNEJBQUEsY0FBQSxTQUFLLFdBQUwsQUFBZTtnQkFBZjtrQkFBQSxBQUNFO0FBREY7cUJBQ0UsY0FBQTs7Z0JBQUE7a0JBQUEsQUFDRztBQURIO0FBQUEsS0FQYyxBQUNwQixBQUNFLEFBSUUsQUFDRTtBQVBSOztBQWNBO0FBQ0E7QUFDQSxJQUFNO1dBQU4sQUFBd0IsQUFDYjtBQURhLEFBQ3RCOztBQUdGLElBQU0scUJBQXFCLFNBQXJCLEFBQXFCLDBCQUFBO01BQUEsQUFBRyx3QkFBSCxBQUFHO01BQUgsQUFBb0IsZ0JBQXBCLEFBQW9CO01BQXBCLEFBQTZCLGFBQTdCLEFBQTZCO01BQTdCLEFB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WTtnQkFBWjtrQkFBQSxBQUFrQztBQUFsQzswQ0FBcUMsU0FBSCxBQUFTO2dCQUFUO2tCQURwQyxBQUNFLEFBQWtDLEFBQ2xDO0FBRGtDO3VCQUNsQyxjQUFBOztnQkFBQTtrQkFBQTtBQUFBO0FBQUEsS0FGRixBQUVFLEFBQ0EseUNBQUEsY0FBQSxTQUFLLFNBQUwsQUFBVztnQkFBWDtrQkFBQSxBQUNFO0FBREY7cUJBQ0UsY0FBQTs7Z0JBQUE7a0JBQUE7QUFBQTtBQUFBLEtBaENoQixBQUNFLEFBQ0UsQUFDRSxBQUNFLEFBU0UsQUFlRSxBQUdFLEFBQ0UsQUFRZCw4SUFBQSxjQUFBLFFBQUksV0FBSixBQUFjO2dCQUFkO2tCQUFBLEFBQ0U7QUFERjtxQkFDRSxjQUFBOztnQkFBQTtrQkFBQSxBQUNFO0FBREY7QUFBQSxxQkFDRSxjQUFBLFFBQUksYUFBSixBQUFjLEtBQUksV0FBbEIsQUFBMEIsVUFBUyxjQUFuQyxBQUE4QyxRQUFPLHlCQUFyRCxBQUEyRTtnQkFBM0U7a0JBQUE7QUFBQTtLQURGLEFBQ0UsQUFDQSw0QkFBQSxjQUFBOztnQkFBQTtrQkFBQTtBQUFBO0FBQUEsS0FISixBQUNFLEFBRUUsQUFFRixpQ0FBQSxjQUFBOztnQkFBQTtrQkFBQSxBQUNFO0FBREY7QUFBQSxxQkFDRSxjQUFBLFFBQUksYUFBSixBQUFjLEtBQUksV0FBbEIsQUFBMEIsUUFBTyxjQUFqQyxBQUE0QyxRQUFPLHlCQUFuRCxBQUF5RTtnQkFBekU7a0JBQUE7QUFBQTtLQURGLEFBQ0UsQUFDQSwwQkFBQSxjQUFBOztnQkFBQTtrQkFBQTtBQUFBO0FBQUEsS0FQSixBQUtFLEFBRUUsQUFFRix3Q0FBQSxjQUFBOztnQkFBQTtrQkFBQSxBQUNFO0FBREY7QUFBQSxxQkFDRSxjQUFBLFFBQUksYUFBSixBQUFjLEtBQUksV0FBbEIsQUFBMEIsTUFBSyxjQUEvQixBQUEwQyxRQUFPLHlCQUFqRCxBQUF1RTtnQkFBdkU7a0JBQUE7QUFBQTtLQURGLEFBQ0UsQUFDQSx1QkFBQSxjQUFBOztnQkFBQTtrQkFBQTtBQUFBO0FBQUEsS0FYSixBQVNFLEFBRUUsQUFFRixvQ0FBQSxjQUFBOztnQkFBQTtrQkFBQSxBQUNFO0FBREY7QUFBQSxxQkFDRSxjQUFBLFFBQUksYUFBSixBQUFjLEtBQUksV0FBbEIsQUFBMEIsT0FBTSxjQUFoQyxBQUEyQyxRQUFPLHlCQUFsRCxBQUF3RTtnQkFBeEU7a0JBQUE7QUFBQTtLQURGLEFBQ0UsQUFDQSx3QkFBQSxjQUFBOztnQkFBQTtrQkFBQTtBQUFBO0FBQUEsS0F2RkssQUFDYixBQStCRSxBQXdDRSxBQWFFLEFBRUU7QUF2RlYiLCJmaWxlIjoiaW5kZXguanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL1VzZXJzL2t5bGVkb2hlcnR5L1NyYy9zcGlrZXMvbmV4dGpzL3BldGFsdW1hZ2FwIn0=