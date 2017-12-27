import React, { Component } from 'react'
import { View, Text, Button, ScrollView } from 'react-native'

class Home extends Component {
  render() {
    return (
      <ScrollView contentContainerStyle={{
        backgroundColor: '#f8f8f8',
        flex: 1,
        alignItems: 'center'
      }}>
        <Text>
          Home
        </Text>
        <View
          style={{
            width: '90%',
            height: 180,
            backgroundColor: '#ffffff',
            shadowColor: 'rgba(0,0,0,0.06)', // gba(0,0,0,0.06)
            shadowOffset: {
              width: 0,
              height: 3
            },
            shadowOpacity: 1,
            shadowRadius: 6,
            elevation: 2
          }}
        />
        <View style={{ height: 20 }} />
        <View
          style={{
            width: '90%',
            height: 180,
            backgroundColor: '#ffffff',
            shadowColor: 'rgba(0,0,0,0.06)', // gba(0,0,0,0.06)
            shadowOffset: {
              width: 0,
              height: 3
            },
            shadowOpacity: 1,
            shadowRadius: 6,
            elevation: 2
          }}
        />
          
      </ScrollView>
    )
  }
}

export default Home
