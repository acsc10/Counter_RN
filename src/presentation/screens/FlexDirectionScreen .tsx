import { StyleSheet, View } from "react-native"

export const FlexDirectionScreen = () => {
  return (
    <View style={styles.container}>
            <View style={[ styles.box, styles.box1]}/>
            <View style={[ styles.box, styles.box2]}/>
            <View style={[ styles.box, styles.box3]}/>
            <View style={[ styles.box, styles.box1]}/>
            <View style={[ styles.box, styles.box2]}/>
            <View style={[ styles.box, styles.box3]}/>
            <View style={[ styles.box, styles.box1]}/>
            <View style={[ styles.box, styles.box2]}/>
            <View style={[ styles.box, styles.box3]}/>
    </View>
  )
}


const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: 'gray',
        flexDirection: 'row',
        // justifyContent: 'flex-end',
        // alignItems: 'flex-end'
        justifyContent: 'space-between',
        flexWrap:'wrap',
        gap: 25
        
    },
    box: {
        width: 100,
        height: 100,
        
    },
    box1:{
        backgroundColor: '#5256D6',
        alignSelf: 'flex-start' // controlar la alineación de un elemento flex individualmente
    },
    box2:{
        backgroundColor: '#4240a2',
        // flex:2
    },
    box3:{
        backgroundColor:'#2e2d71',
        // flex:3
    }
    
})