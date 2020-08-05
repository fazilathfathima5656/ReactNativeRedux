import {  View  } from 'react-native';
import React, { Component } from 'react';
import HomeView from './HomeView';

class HomeContainer extends Component {
    constructor(props) {
        super(props);
      }

      onDashboardClick = data => {
        this.props.postdashboardData({...data}, {}, err => {
          if (!err) {
            const {dashboardData = {}} = this.props;
            if (dashboardData.status == 201) {
              console.log(dashboardData.data);
              //   Utils.alertWithoutOptions('Sucess', dashboardData.data.message);
              AsyncStorage.multiSet([id, title]);
            } else {
              Utils.alertWithoutOptions(Strings.error, 'Something went wrong');
            }
          } else {
            Utils.alertWithoutOptions(Strings.error, 'Something went wrong');
          }
        });
      };
    
     
    
      render() {
        return (
          <HomeView
            onNewDashboardClick={this.onDashboardClick}
            
          />
        );
      }
    }



const mapStateToProps = state => {
    const {dashboardReducer} = state;
    return {
      isloading: dashboardReducer.isLoading,
      error: dashboardReducer.error,
      dashboardData: dashboardReducer.dashboardData,
      homeData: dashboardReducer.homeData,
    };
  };
  
  const mapDispatchToProps = dispatch => {
    return {
      postDashboardData: (data, headers, callback) => {
        dispatch(postDashboardData(data, headers, callback));
      },
    };
  };
  export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
  
