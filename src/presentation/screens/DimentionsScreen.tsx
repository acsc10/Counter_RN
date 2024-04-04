import {StyleSheet, View, useWindowDimensions} from 'react-native';
import {Text} from 'react-native-paper';

export const DimentionsScreen = () => {
  const {width, height} = useWindowDimensions();
  return (
    <View>
      <View style={{...styles.container, width: width * 0.5}}>
        {/* <Text style={styles.title}> DimentionsScreen </Text> */}
        <View style={styles.purpleBox} />
      </View>
      <Text style= {styles.title}>
        Width: {width} , Height: {height}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 300,
    backgroundColor: 'red',
  },
  title: {
    textAlign: 'center',
    fontSize: 30
  },
  purpleBox: {
    backgroundColor: 'purple',
    width: '50%',
    height: '50%',
  },
});
