import { Dimensions, Platform } from 'react-native';

export const DEVICE_HEIGHT = Dimensions.get('window').height;
export const DEVICE_WIDTH = Dimensions.get('window').width;

export const PRIMARY_PADDING_HORIZONTAL = Platform.select({ ios: 8, android: 20 });

export const bottomSheetHeight = DEVICE_HEIGHT > 600 ? DEVICE_HEIGHT / 3 : 220;

