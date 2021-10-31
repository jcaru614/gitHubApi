import React from 'react';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import { SafeAreaView, Text, View, TouchableOpacity } from 'react-native';
import { gitHubRequest } from '../services/actions';
import { styles } from './Main.styles';

const Main = () => {
  const dispatch = useDispatch();
  const gitHubCommits = useSelector((state: RootStateOrAny) => state.reducer.commits);
  console.log('useSelector ', gitHubCommits);
  const getData = () => {
    dispatch(gitHubRequest());
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.title}>GitHubAPI</Text>
        <TouchableOpacity style={styles.button} onPress={getData}>
          <Text>Click Here</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Main;
