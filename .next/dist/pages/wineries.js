'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _layout = require('../components/layout');

var _layout2 = _interopRequireDefault(_layout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/kyledoherty/Src/spikes/nextjs/petalumagap/pages/wineries.js?entry';


var wineries = [{
  name: 'Kastania Vineyards',
  img: {
    url: '/static/images/wineries/kastania.jpg',
    altText: 'Kstania Vineyards'
  },
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis pharetra ligula vitae ligula hendrerit sodales sit amet eget neque. Integer porta, tortor facilisis volutpat blandit, neque felis pretium ligula, ultricies dignissim risus nulla sed metus. Cras eu pharetra est.',
  varitelas: ['Pinot Noir', 'Cabernet Franc', 'Cabernet Savingnon'],
  website: 'http://www.kastaniavineyards.com/',
  type: 'Vineyard & Winery'
}, {
  name: 'Black Kite Cellars',
  img: {
    url: '/static/images/wineries/black_kite.jpg',
    altText: 'Kite Cellars'
  },
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis pharetra ligula vitae ligula hendrerit sodales sit amet eget neque. Integer porta, tortor facilisis volutpat blandit, neque felis pretium ligula, ultricies dignissim risus nulla sed metus. Cras eu pharetra est.',
  varitelas: ['Pinot Noir', 'Chardonnay'],
  website: 'http://blackkitecellars.com/',
  type: 'Vineyard & Winery'
}];

var WineryCard = function WineryCard(_ref) {
  var name = _ref.name,
      type = _ref.type,
      img = _ref.img,
      website = _ref.website;
  return _react2.default.createElement('div', { 'class': 'tg-portfolioitem tg-widthhalf business', __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    }
  }, _react2.default.createElement('figure', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    }
  }, _react2.default.createElement('a', { href: website, target: '_blank', __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    }
  }, _react2.default.createElement('img', { src: img.url, alt: img.altText, __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    }
  }), _react2.default.createElement('div', { 'class': 'tg-hover tg-hovervone tg-portfoliohover', __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    }
  }, _react2.default.createElement('h2', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    }
  }, _react2.default.createElement('span', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    }
  }, '+'))))), _react2.default.createElement('div', { 'class': 'tg-portfoliotitle', __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    }
  }, _react2.default.createElement('h2', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    }
  }, _react2.default.createElement('a', { href: website, target: '_blank', __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    }
  }, name)), _react2.default.createElement('span', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    }
  }, _react2.default.createElement('a', { href: website, target: '_blank', __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    }
  }, type))));
};

var Wineries = function Wineries() {
  console.log("boom", wineries);
  return _react2.default.createElement(_layout2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    }
  }, _react2.default.createElement('div', { id: 'tg-innerbanner', className: 'tg-innerbanner', __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    }
  }, _react2.default.createElement('figure', { 'data-vide-bg': 'poster: images/innerpagebanner/img-07.jpg', 'data-vide-options': 'position: 0% 50%', __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    }
  }, _react2.default.createElement('figcaption', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    }
  }, _react2.default.createElement('div', { className: 'container-fluid', __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    }
  }, _react2.default.createElement('div', { className: 'row', __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    }
  }, _react2.default.createElement('div', { className: 'col-xs-12 col-sm-12 col-md-12 col-lg-12', __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    }
  }, _react2.default.createElement('h1', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    }
  }, 'Gap Wineries'), _react2.default.createElement('h2', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    }
  }, 'A Totally New Way to Grow your Business.'))))))), _react2.default.createElement('main', { id: 'tg-main', 'class': 'tg-main tg-sectionspace tg-haslayout tg-bglight', __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    }
  }, _react2.default.createElement('div', { 'class': 'container', __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    }
  }, _react2.default.createElement('div', { 'class': 'row', __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    }
  }, _react2.default.createElement('div', { id: 'tg-portfoliovsix', 'class': 'tg-portfolio tg-portfoliovsix', __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    }
  }, _react2.default.createElement('div', { 'class': 'col-xs-12 col-sm-12 col-md-12 col-lg-12', __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    }
  }, _react2.default.createElement('ul', { id: 'tg-navfilterbale', 'class': 'tg-navfilterbale tg-optionset', __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    }
  }, _react2.default.createElement('li', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    }
  }, _react2.default.createElement('a', { 'class': 'tg-active', 'data-filter': '*', href: '', __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    }
  }, 'All')), _react2.default.createElement('li', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    }
  }, _react2.default.createElement('a', { 'data-filter': '.business', href: '', __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    }
  }, 'Wineries with Tasting Rooms')), _react2.default.createElement('li', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    }
  }, _react2.default.createElement('a', { 'data-filter': '.design', href: '', __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    }
  }, 'Wineries without Tasting Rooms')), _react2.default.createElement('li', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    }
  }, _react2.default.createElement('a', { 'data-filter': '.photography', href: '', __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    }
  }, 'Wineries that Buy Gap Fruit')))), _react2.default.createElement('div', { id: 'tg-galleryfilterable', 'class': 'tg-galleryfilterable', __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    }
  }, wineries.map(function (winery) {
    return _react2.default.createElement(WineryCard, {
      key: winery.name,
      name: winery.name,
      img: winery.img,
      type: winery.type,
      website: winery.website,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77
      }
    });
  })))))));
};

exports.default = Wineries;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL3dpbmVyaWVzLmpzIl0sIm5hbWVzIjpbIkxheW91dCIsIndpbmVyaWVzIiwibmFtZSIsImltZyIsInVybCIsImFsdFRleHQiLCJkZXNjcmlwdGlvbiIsInZhcml0ZWxhcyIsIndlYnNpdGUiLCJ0eXBlIiwiV2luZXJ5Q2FyZCIsIldpbmVyaWVzIiwiY29uc29sZSIsImxvZyIsIm1hcCIsIndpbmVyeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBWTs7Ozs7Ozs7O0FBRW5CLElBQU07UUFDSixBQUNRLEFBQ047O1NBQUssQUFDRSxBQUNMO2FBSkosQUFFTyxBQUVNLEFBRVg7QUFKSyxBQUNIO2VBSEosQUFNZSxBQUNiO2FBQVcsQ0FBQSxBQUFDLGNBQUQsQUFBZSxrQkFQNUIsQUFPYSxBQUFpQyxBQUM1QztXQVJGLEFBUVcsQUFDVDtRQVZhLEFBQ2YsQUFTUTtBQVRSLEFBQ0UsQ0FGYTtRQVlmLEFBQ1EsQUFDTjs7U0FBSyxBQUNFLEFBQ0w7YUFKSixBQUVPLEFBRU0sQUFFWDtBQUpLLEFBQ0g7ZUFISixBQU1lLEFBQ2I7YUFBVyxDQUFBLEFBQUMsY0FQZCxBQU9hLEFBQWUsQUFDMUI7V0FSRixBQVFXLEFBQ1Q7UUFyQkosQUFBaUIsQUFZZixBQVNRO0FBVFIsQUFDRTs7QUFZSixJQUFNLGFBQWEsU0FBYixBQUFhLGlCQUFBO01BQUEsQUFBRyxZQUFILEFBQUc7TUFBSCxBQUFTLFlBQVQsQUFBUztNQUFULEFBQWUsV0FBZixBQUFlO01BQWYsQUFBb0IsZUFBcEIsQUFBb0I7eUJBQ3ZDLGNBQUEsU0FBSyxTQUFMLEFBQVc7Z0JBQVg7a0JBQUEsQUFDRTtBQURGO0dBQUEsa0JBQ0UsY0FBQTs7Z0JBQUE7a0JBQUEsQUFDRTtBQURGO0FBQUEscUJBQ0UsY0FBQSxPQUFHLE1BQUgsQUFBUyxTQUFTLFFBQWxCLEFBQXlCO2dCQUF6QjtrQkFBQSxBQUNFO0FBREY7NENBQ08sS0FBSyxJQUFWLEFBQWMsS0FBSyxLQUFLLElBQXhCLEFB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QUFBLGNBQUE7O2dCQUFBO2tCQUFBLEFBQUk7QUFBSjtBQUFBLHFCQUFJLGNBQUEsT0FBRyxlQUFILEFBQWUsZ0JBQWUsTUFBOUIsQUFBbUM7Z0JBQW5DO2tCQUFBO0FBQUE7S0FOVixBQUNFLEFBQ0UsQUFJRSxBQUFJLEFBR1IsbURBQUEsY0FBQSxTQUFLLElBQUwsQUFBUSx3QkFBdUIsU0FBL0IsQUFBcUM7Z0JBQXJDO2tCQUFBLEFBRUk7QUFGSjtjQUVJLEFBQVMsSUFBSSxrQkFBVSxBQUNyQjt5Q0FDRSxBQUFDO1dBQ00sT0FEUCxBQUNjLEFBQ1o7WUFBTSxPQUZSLEFBRWUsQUFDYjtXQUFLLE9BSFAsQUFHYyxBQUNaO1lBQU0sT0FKUixBQUllLEFBQ2I7ZUFBUyxPQUxYLEFBS2tCOztrQkFMbEI7b0JBREYsQUFDRSxBQVFIO0FBUkc7QUFDRSxLQURGO0FBakNwQixBQUNFLEFBZ0JFLEFBQ0UsQUFDRSxBQUNFLEFBU0UsQUFFSSxBQW1CakI7QUFwREQsQUFzREE7O2tCQUFBLEFBQWUiLCJmaWxlIjoid2luZXJpZXMuanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL1VzZXJzL2t5bGVkb2hlcnR5L1NyYy9zcGlrZXMvbmV4dGpzL3BldGFsdW1hZ2FwIn0=