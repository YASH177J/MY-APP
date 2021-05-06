import * as React from 'react';
import { Text, View, StyleSheet,Image,TouchableOpacity } from 'react-native';
import db from '../config';


class ReportScreen extends React.Component{
 constructor() {
    super();
    this.state = {
      oxygenLevel: [],
      pulseRate: [],
      feverLevel:[]
    };
  }

  getTodaysDate(){
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1;

    var yyyy = today.getFullYear();
    if (dd < 10) {
      dd = '0' + dd;
    }
    if (mm < 10) {
      mm = '0' + mm;
    }
    today = dd + '-' + mm + '-' + yyyy;
    return today;
  }

  componentDidMount = async () => {
    var today = await this.getTodaysDate();

    var students_ref = db.ref('/').on('value',(data)=>{
      var class_a = data.val();
      var oxygenLevel = []
      var pulseRate = []
      var feverLevel =[]
      for(var i in class_a){
        if(class_a[i][today] === 'present'){
          oxygenLevel.push(class_a[i])
        }
        if(class_a[i][today] === 'absent'){
          pulseRate.push(class_a[i])
        }
         if(class_a[i][today] === 'absent'){
          feverLevel.push(class_a[i])
        }
      }

      oxygenLevel.sort(function(a, b) {
        return a.roll_no - b.roll_no;
      });
  
      pulseRate.sort(function(a, b) {
        return a.roll_no - b.roll_no;
      });

      feverLevel.sort(function(a, b) {
        return a.roll_no - b.roll_no;
      });

      this.setState({
        oxygenLevel : oxygenLevel,
        pulseRate : pulseRate,
        feverLevel : feverLevel
      })
    })
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={{ flex: 0.1 }}>
          
        </View>
         <TouchableOpacity onPress={()=>{
        this.props.navigation.navigate('HomeScreen')
        
      }}>
      
      <Image style={styles.img}source={{
            uri:
              ' https://image.flaticon.com/icons/png/512/2756/2756728.png',
          }}/>        
            )
           
      </TouchableOpacity>
        <View style={styles.present}>
          {
            this.state.oxygenLevel.map((student, index)=>(
                <Text style={{fontSize:18}}>{student.name}</Text>
              )
            )
          }
        </View>

        <View style={styles.absent}>
          {
            this.state.pulseRate.map((student, index)=>(
                <Text style={{fontSize:18}}>{student.name}</Text>
              )
            )
          }
        </View>
        <View style={{flex:0.1, flexDirection:'row', justifyContent:'space-around'}}>

         <Text style={styles.text}>THIS IS YOUR TODAY'S REPORT   
      </Text>
         
          <Text style={styles.text}>OxygenLevel: {this.state.oxygenLevel.length}</Text>
          <Text style={styles.text}>PulseRate: {this.state.pulseRate.length}</Text>
          <Text style={styles.text}>FeverLevel: {this.state.feverLevel.length}</Text>

        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  img: {
    width: 150,
    height: 150,
    marginTop: 30,
    alignSelf: 'center'
  },
  text:{
    fontSize:14, 
    fontWeight:'bold',
    alignSelf:'center', 
    marginTop:60
  },
});



export default ReportScreen;