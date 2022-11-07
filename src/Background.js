
import {  View,ImageBackground, Text } from 'react-native';

const Background = ({children}) => {
  return (
    <View>
        <ImageBackground source={require("../assets/one.jpeg")} 
         style={{height:'100%',width:'100%'}} />
         <View style={{position:"absolute"}}>
            {children}
         </View>
    </View>
  );
}

export default Background;