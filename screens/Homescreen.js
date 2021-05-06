import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      oxygen:'',
    };
  }

  speak = () => {
      var oxygen = this.state.name;
      this.state.name === ''
      
      var pulseRate = this.state.name;
      this.state.name === ''
    
      var feverLevel = this.state.name;
      this.state.name === ''
      
  };

  render() {
    return (
      <View style={styles.container}>
        <Image
          style={{
            width: 150,
            height: 150,
            alignSelf: 'center',
          }}
          source={{         
            uri:
              'https://thumbs.dreamstime.com/b/health-check-icon-creative-design-healthcare-icons-collection-two-color-web-apps-software-print-usage-143789191.jpg',
          }}
        />
        <TextInput
          style={styles.inputBox}
          onChangeText={(text) => {
            this.setState({ name: text });
          }}
        />
       <Text style={styles.buttonText}>OXYGEN LEVEL</Text>
          <TextInput
          style={styles.inputBox}
          onChangeText={(text) => {
            this.setState({ name: text });
          }}
        />
         <Text style={styles.buttonText}>PULSE RATE</Text>
       
          <TextInput
          style={styles.inputBox}
          onChangeText={(text) => {
            this.setState({ name: text });
            
          }}
        />
        <Text style={styles.buttonText}>FEVER LEVEL</Text>

         <View style={styles.buttonsContainer}>
             <TouchableOpacity
              style={styles.report}
              onPress={() => {
                this.props.navigation.navigate('ReportScreen');
                
              }}>
              <Text>REPORT</Text>
            </TouchableOpacity>
          </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },

  inputBox: {
    margin: 10,
    width: '80%',
    height: 50,
    alignSelf: 'center',
    textAlign: 'center',
    borderWidth: 2,
    
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    
  },
   buttonsContainer: {
    alignSelf: 'center',
    marginTop: 40,
  },
 report: {
    
    fontSize: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderRadius: 50,
    margin: 10,
    width: 200,
    height: 50,
    backgroundColor:"rgb(0, 221, 255)",
    fontWeight: 'bold',      
    },
});
