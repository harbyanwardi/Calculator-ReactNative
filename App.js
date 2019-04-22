import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

export default class App extends React.Component {
  
  constructor(){
    super()
    this.state = {
      resultText: "",
      evalText: ""
    }
   
  }

  buttonPressed(text){
    //TODO: get values

    if(text== '='){
      return this.calculateResult()
    }
    this.setState({
      resultText: this.state.resultText+text
    })
   
    console.log(text)
  }

  calculateResult(){
    const text = this.state.resultText
    const hasil = eval(text)
    this.setState({
      evalText: hasil
    })
  }
  
  operate(operan){
    switch(operan){
      case 'DEL':
        let text = this.state.resultText.split('')
        text.pop();
        this.setState({
          resultText: text.join('')
        })
      case '+':
      case '-':
      case '*':
      case '/':
      const lastChar = this.state.resultText.split('').pop()
      if(this.operan.indexOf(lastChar) > 0) return
        if(this.state.text == "" ) return
        this.setState({
          resultText: this.state.resultText + operan
        })
    }
  }

  click(){
    alert('siap siap meluncur');
  }
  render() {
    let rows = []
    let nums = [[1,2,3],[4,5,6],[7,8,9],['.',0,'=']]
    for (let i = 0; i < 4;  i++){
      let row = []
      for(let j=0; j<3; j++){
        row.push(<TouchableOpacity key={nums[i][j]} onPress={() => this.buttonPressed(nums[i][j])} style={styles.btn}>
          <Text style={styles.btnText}>{nums[i][j]}</Text>
        </TouchableOpacity>)
      }
      rows.push(<View key={nums[i]} style={styles.row}>{row}</View>)
    }

    this.operan = ['DEL','+','-','*','/']
    let ops = []
    for (let i=0; i<5; i++){
      ops.push(<TouchableOpacity key={this.operan[i]} onPress={() => this.operate(this.operan[i])} style={styles.btn}>
        <Text style={styles.btnText}>{this.operan[i]}</Text>
      </TouchableOpacity>)
    }
    return (
      <View style={styles.container}>
        <View style={styles.calculation}>
          <Text style={styles.calculationText}>{this.state.resultText}</Text>
        </View>
        <View style={styles.result}>
          <Text style={styles.resultText}>{this.state.evalText}</Text>
        </View>
        <View style={styles.button}>
          <View style={styles.number}>
           {rows}
          </View>
          <View style={styles.operation}>
           {ops}
          </View>
        </View>
      </View>
    
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
  calculation: {
    padding: 30,
    flex: 1.5,
    backgroundColor: 'white',
    justifyContent: 'center'
  },
  btnText: {
    fontSize: 30,
    color: 'white'
  },
  calculationText: {
    textAlign: 'right',
    fontSize: 30,
    color: 'black'
  },
  resultText: {
    textAlign: 'right',
    fontSize: 40,
    color: 'white'
  },
  result: {
    flex: 0.5,
    paddingRight: 30,
    backgroundColor: 'orange',
    justifyContent: 'center'
   
  },
  button: {
   flex: 3,
    flexDirection: 'row'
  },
  row: {
    flex:1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  number: {
    flex: 3,
    backgroundColor: 'grey',
  },
  operation: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'space-around',
    alignItems: 'center'
  }
 
});
