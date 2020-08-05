import { Text, View, Button, textInput } from 'react-native';
import React, { Component } from 'react';
import DashbaordView from './DashboardView';
import AsyncStorage from '@react-native-community/async-storage';
import { isEmpty, isNull, isUndefined } from 'lodash';
import { connect } from 'react-redux';
import { postDashboardData } from './../../actions/dashboardAction'
import PropTypes from 'prop-types';
import Toast from 'react-native-simple-toast';
import Strings from '../../constants/Strings';

class DashboardContainer extends Component {
    constructor(props) {
        super(props);
      }

      
      onDashboardClick = data => {
        this.props.postDashboardData({ ...data }, {}, err => {
          if (!err) {
            const { postDashboardData = {} } = this.props;
            if (postDashboardData.status == 200) {
           
              const id = ['Id', postDashboardData.data.Id];
              const bookmark = ['hasbookmarkedit', postDashboardData.data.hasBookmarkedit];

              AsyncStorage.multiSet([id, bookmark,], (err, result) => {
                this.props.navigation.navigate('HomeContainer');
            } else {
              Utils.alertWithoutOptions(Strings.error, 'Something went wrong');
            }
        });
      };

 

      async() {
        AsyncStorage.getItem((err, result) => {
          console.log(result);
          let customHeaders = API.getDefaultHeaders();
          let token = result;
          let headers = {
            ...customHeaders};
          API.get(Path.dashboard, { ...customHeaders, ...headers })
            .then((result) => {
              console.log(result);
            }).catch((error) => {
              console.log(error);
            })
        });
      }
    
      render() {
        return (
          <View>
            <DashboardView
            onDashboardClick={this.onDashboardClick}
            />
          </View>
        );
      }
    }
    const mapStateToProps = state => {
      const { dashboardReducer } = state;
      return {
        isloading: dashboardReducer.isLoading,
        error: dashboardReducer.error,
        dashboardData: dashboardReducer.dashboardData,
        HomeData: dashboardReducer.HomeData,
      };
    };
    
    const mapDispatchToProps = dispatch => {
      return {
        postHomeData: (data, headers, callback) => {
          dispatch(postHomeData(data, headers, callback));
        },
      };
    };
    export default connect(mapStateToProps, mapDispatchToProps)(DashbaordContainer);
    
   