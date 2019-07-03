import { Button } from 'react-native';
import { useCallback } from 'react';

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

  return (
    <Button { ...buttonProps } />
  );
}

export default CrashButton;
