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

var CardPair = function CardPair(_ref2) {
  var cardOne = _ref2.cardOne,
      cardTwo = _ref2.cardTwo;
  return _react2.default.createElement('div', { className: 'tg-features', __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    }
  }, _react2.default.createElement('div', { className: 'col-xs-12 col-sm-6 col-md-6 col-lg-6', __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    }
  }, _react2.default.createElement('div', { className: 'tg-feature', __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    }
  }, _react2.default.createElement('figure', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    }
  }, _react2.default.createElement('a', { href: 'javascript:void(0);(0);', __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    }
  }, _react2.default.createElement('img', { src: '/static/vation-theme/images/allhome/1/img-01.jpg', alt: 'image description', __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    }
  }))), _react2.default.createElement('div', { className: 'tg-featurecontent', __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    }
  }, _react2.default.createElement('div', { style: cardTitleStyles, className: 'tg-title tg-titlevone', __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    }
  }, _react2.default.createElement('h3', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    }
  }, _react2.default.createElement('span', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    }
  }, cardOne.feature), cardOne.name)), _react2.default.createElement('div', { className: 'tg-description', __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    }
  }, _react2.default.createElement('p', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    }
  }, cardOne.description))))), _react2.default.createElement('div', { className: 'col-xs-12 col-sm-6 col-md-6 col-lg-6', __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    }
  }, _react2.default.createElement('div', { className: 'tg-feature', __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    }
  }, _react2.default.createElement('figure', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    }
  }, _react2.default.createElement('a', { href: 'javascript:void(0);(0);', __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    }
  }, _react2.default.createElement('img', { src: '/static/vation-theme/images/allhome/1/img-02.jpg', alt: 'image description', __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    }
  }))), _react2.default.createElement('div', { className: 'tg-featurecontent', __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    }
  }, _react2.default.createElement('div', { style: cardTitleStyles, className: 'tg-title tg-titlevone', __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    }
  }, _react2.default.createElement('h3', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    }
  }, _react2.default.createElement('span', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    }
  }, cardTwo.feature), cardTwo.name)), _react2.default.createElement('div', { className: 'tg-description', __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    }
  }, _react2.default.createElement('p', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    }
  }, cardOne.description))))));
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

exports.default = function () {
  return _react2.default.createElement(_layout2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    }
  }, _react2.default.createElement(_heroImg2.default, {
    header: 'Petaluma Gap',
    subHeader: 'The newsest and most interesting American Viticulture Area in the U.S.',
    cta: 'Checkout the Wineries',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    }
  }), _react2.default.createElement('section', { className: 'tg-sectionspace tg-haslayout tg-paddingbottomzero', __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    }
  }, _react2.default.createElement('div', { className: 'container', __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    }
  }, _react2.default.createElement('div', { className: 'row', __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    }
  }, _react2.default.createElement(SectionHeader, {
    mainText: 'Featured Gap Wineries',
    subText: 'Mauris in rutrum nunc. Aenean in lectus id mi sollicitudin placerat. Sed porta ac libero eget maximus. Donec dictum, sem quis ullamcorper porta,',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    }
  }), _react2.default.createElement(CardPair, { cardOne: featuredWinery1, cardTwo: featuredWinery2, __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    }
  })))));
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIkxheW91dCIsIkhlcm9JbWciLCJTZWN0aW9uSGVhZGVyIiwibWFpblRleHQiLCJzdWJUZXh0IiwiY2FyZFRpdGxlU3R5bGVzIiwicGFkZGluZyIsIkNhcmRQYWlyIiwiY2FyZE9uZSIsImNhcmRUd28iLCJmZWF0dXJlIiwibmFtZSIsImRlc2NyaXB0aW9uIiwiZmVhdHVyZWRXaW5lcnkxIiwiZmVhdHVyZWRXaW5lcnkyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQU8sQUFBYTs7Ozs7Ozs7O0FBRXBCLElBQU0sZ0JBQWdCLFNBQWhCLEFBQWdCLG9CQUFBO01BQUEsQUFBRyxnQkFBSCxBQUFHO01BQUgsQUFBYSxlQUFiLEFBQWE7eUJBQ2pDLGNBQUEsU0FBSyxXQUFMLEFBQWU7Z0JBQWY7a0JBQUEsQUFDRTtBQURGO0dBQUEsa0JBQ0UsY0FBQSxTQUFLLFdBQUwsQUFBZTtnQkFBZjtrQkFBQSxBQUNFO0FBREY7cUJBQ0UsY0FBQSxTQUFLLFdBQUwsQUFBZTtnQkFBZjtrQkFBQSxBQUNFO0FBREY7cUJBQ0UsY0FBQTs7Z0JBQUE7a0JBQUEsQUFBSztBQUFMO0FBQUEsS0FGSixBQUNFLEFBQ0UsQUFFRiw0QkFBQSxjQUFBLFNBQUssV0FBTCxBQUFlO2dCQUFmO2tCQUFBLEFBQ0U7QUFERjtxQkFDRSxjQUFBOztnQkFBQTtrQkFBQSxBQUNHO0FBREg7QUFBQSxLQVBjLEFBQ3BCLEFBQ0UsQUFJRSxBQUNFO0FBUFI7O0FBY0E7QUFDQTtBQUNBLElBQU07V0FBTixBQUF3QixBQUNiO0FBRGEsQUFDdEI7O0FBR0YsSUFBTSxXQUFXLFNBQVgsQUFBVyxnQkFBQTtNQUFBLEFBQUcsZ0JBQUgsQUFBRztNQUFILEFBQVksZ0JBQVosQUFBWTt5QkFDM0IsY0FBQSxTQUFLLFdBQUwsQUFBZTtnQkFBZjtrQkFBQSxBQUVFO0FBRkY7R0FBQSxrQkFFRSxjQUFBLFNBQUssV0FBTCxB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