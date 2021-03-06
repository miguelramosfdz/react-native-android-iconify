var { requireNativeComponent, PropTypes } = require('react-native');

var iface = {
    'IconTextView':{
        name: 'IconTextView',
        propTypes: {
            text: PropTypes.string,
            scaleX: PropTypes.number,
            scaleY: PropTypes.number,
            translateX: PropTypes.number,
            translateY: PropTypes.number,
            rotation: PropTypes.number
        },
    }
};

module.exports = {
    IconTextView: requireNativeComponent('RCTIconTextView', iface['IconTextView'])
};
