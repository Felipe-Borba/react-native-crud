import { TouchableOpacity } from 'react-native';

import { View } from "../../components/View";
import { Text } from "../../components/Text";
import { RootStackScreenProps } from '../../navigation/types';

export default function NotFoundScreen({ navigation }: RootStackScreenProps<'NotFound'>) {
  return (
    <View>
      <Text>This screen doesn't exist.</Text>
      <TouchableOpacity onPress={() => navigation.replace('Root')}>
        <Text>Go to home screen!</Text>
      </TouchableOpacity>
    </View>
  );
}

