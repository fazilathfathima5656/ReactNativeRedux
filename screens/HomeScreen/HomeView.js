import {
    Text,
    View,
    Image,
    TouchableOpacity,
    StyleSheet,
    TextInput,
  } from 'react-native';
  import React, {Component} from 'react';
  import styles from './styles';
  import {Card} from 'react-native-elements';
  
  class HomeView extends Component {
    constructor(props) {
      super(props);
      this.state = {
          data:{
          Id:'',
          username:'',
          userImage:'',
          description:'',
      };
    }

    onHomeClick = () => {
        let id = this.state.data.Id;
        let username = this.state.data.username;
        let userimage = this.state.data.userImage;
        let description = this.state.data.description;
          this.props.onNewDashboardClick(data);
        }
      };
    
  
 
    renderimage() {
      return (
        <View style={styles.pic}>
          <Image
            source={{
              uri:
                'https://images.pexels.com/photos/853168/pexels-photo-853168.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
            }}
            style={{
              width: 400,
              height: 270,
              alignItems: 'center',
              marginTop: 25,
              marginLeft: 7,
              borderRadius: 10,
            }}
            resizeMode="cover"
          />
        </View>
      );
    }
  
   
    rendercard() {
      return (
        <Card
        containerStyle={{
          alignContent: 'center',
          alignItems: 'center',
          justifyContent: 'center',
          height: 180,
          width: 190,
          borderRadius: 10,
          marginLeft: 220,
          marginTop: -181,
        }}>
            <View style={styles.icon}>
     <TextInput>{this.onHomeClick()}</TextInput>
        <Text
          style={{
            color: 'black',
            fontSize: 14,
            fontWeight: 'normal',
            marginTop: 8,
          }}>
         {this.props.userName}
        </Text>
        </View>
      </Card>
      );
    }
  
    render() {
      return (
        <View>
          {this.rendermethod()}
          {this.rendercard()}
        </View>
      );
    }
  }
  
  export default DashboardView;
  