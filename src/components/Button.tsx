import React, { Children } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
interface ButtonProps {
  children: string;
  type?: 'primary' | 'secondary';
  onPress: () => void;
}

export const Button: React.FunctionComponent<ButtonProps> = ({
  type = 'primary',
  children,
  onPress,
}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View
        style={[
          { paddingHorizontal: 6, paddingVertical: 9, borderRadius: 2 },
          { backgroundColor: type === 'primary' ? 'purple' : 'blue' },
        ]}
      >
        <Text
          style={{
            textAlign: 'center',
            color: type === 'primary' ? 'white' : 'blue',
          }}
        >
          {children}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
