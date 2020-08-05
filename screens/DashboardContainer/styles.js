import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  maincontainer: {
    backgroundColor: AppColors.Dashboard,
  },
  header: {
    height:20,
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image:{
      display:'flex',
      flex:4,
      marginLeft:20,
      marginRight:20,
      borderRadius:6,
  },
  like: {
  display:'flex',
  flex:3,
  flexDirection: 'row',
  marginTop: 0,
  marginBottom: 5,
  marginLeft:20,
  marginRight:20,

  },
  row1: {
    borderRadius: 15,
    marginTop: 10,
  },
});
 
 
export default styles;
