import React from 'react';
import PropTypes from 'prop-types';
import {Text} from 'react-native';

import { satoshiToBitcoin } from '../../../unitsService';

const Btc = ({ satoshi }) => <Text>{satoshiToBitcoin(satoshi).toNumber()} BTC</Text>;

Btc.propTypes = {
  satoshi: PropTypes.number.isRequired,
};

export default Btc;
