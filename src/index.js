import { Button } from 'react-native';
import { createElement, useCallback } from 'react';

const CrashButton = ( props ) => {
  const { title, errorMesage } = props;
  const onPress = useCallback(
    () => {
      throw new Error( errorMesage );
    },
    [ errorMesage ]
  );

  const buttonProps = {
    title,
    onPress
  }

  // There seems to be some conflicts with @wordpress/element and using
  // React externals, so I'm avoiding JSX for now and using React's
  // createElement directly.
  return createElement( Button, buttonProps );
}

export default CrashButton;
