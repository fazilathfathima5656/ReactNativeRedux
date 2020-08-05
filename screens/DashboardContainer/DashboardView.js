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
import Gallery from './assets/gallery.svg';
import Like from './assets/like.svg';
import Calender from './assets/calender.svg';
import Bookmarks from './assets/Bookmarks.svg';

class DashboardView extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  this.data = {};
}

onClick = () => {
  this.props.onClick(dashboarddata);
};

  rendermethod() {
    return (
      <View>
        <View style={styles.header}></View>
        <View>
          <View>
            <TextInput style={{color: 'Blue', fontsize: 10}}>All</TextInput>
          </View>
          <View>
            <TextInput style={{color: 'black', fontsize: 10}}>
              Bookmarks
            </TextInput>
          </View>
        </View>
      </View>
    );
  }

  rendericons() {
    return (
      <View style={styles.image}>
        <TouchableOpacity>
          <View>
            <Gallery height={20} width={20} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View>
            <Gallery height={20} width={20} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View>
            <Gallery height={20} width={20} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View>
            <Gallery height={20} width={20} />
          </View>
        </TouchableOpacity>
      </View>
    );
  }

  renderimage() {
    return (
      <View>
        <Image
          source={{
            uri:
              'https://images.pexels.com/photos/853168/pexels-photo-853168.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
          }}
          style={{
            width: 400,
            height: 270,
            alignItems: 'center',
            marginTop: 10,
            marginLeft: 7,
            borderRadius: 6,
          }}
          resizeMode="cover"
        />
      </View>
    );
  }

  renderlikecalenderbookmark() {
    <View style={styles.like}>
      <Like height={10} width={10} />
      <Calender height={10} width={10} />
      <Bookmarks height={10} width={10} />
    </View>;
  }

  renderimage1() {
    return (
      <View>
        <Image
          source={{
            uri:
              'https://images.pexels.com/photos/853168/pexels-photo-853168.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
          }}
          style={{
            width: 400,
            height: 270,
            alignItems: 'center',
            marginTop: 10,
            marginLeft: 7,
            borderRadius: 6,
          }}
          resizeMode="cover"
        />
      </View>
    );
  }

  render() {
    return (
      <View>
        {this.rendermethod()}
        {this.rendericons()}
        {this.renderimage()}
        {this.renderlikecalenderbookmark()}
        {this.renderimage1()}
      </View>
    );
  }
}

export default DashboardView;
