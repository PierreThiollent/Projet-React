import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';

export default class HomeScreen extends React.Component {
  render() {
    return (
    <View style={styles.container}>
        <View style={styles.header}>
            <Image
                source={require('../assets/Images/logo.png')}
                style={{marginBottom: 30}}
            />
            <Text style={styles.headerLabel}>Découvre le domaine du Web en t'amusant</Text>
        </View>
        <View style={styles.buttons}>
                <TouchableOpacity style={styles.buttonFacebook} onPress={() => this.props.navigation.navigate('ProfileScreen')}>
                    <Text style={styles.label}>Connexion avec Facebook</Text>
                </TouchableOpacity>
    
                <TouchableOpacity style={styles.buttonInvite} onPress={() => this.props.navigation.navigate('ProfileScreen')}>
                    <Text style={styles.label}>Invité</Text>
                </TouchableOpacity>
        </View>
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#FFCC66',
  },

  header: {
    flex: 1, 
    alignItems: 'center',
    justifyContent: 'center'
    },

  headerLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#4267B2',
  },

  buttons: {
    flex: 1, 
    alignItems: 'center',
    justifyContent: 'center'
},

  buttonInvite: {
    width: 150,
    height: 40,
    backgroundColor: '#D9D9D9',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
    borderRadius: 5,
  },

  buttonFacebook: {
    width: 250,
    height: 50,
    backgroundColor: '#4267B2',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
  },

  label: {
    fontSize: 16,
    fontWeight: 'normal',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#FFF',
  },
});