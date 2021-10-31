import React from 'react';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import { SafeAreaView, Text, View, TouchableOpacity, ScrollView } from 'react-native';
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
      <Text style={styles.title}>GitHubAPI</Text>
      <TouchableOpacity style={styles.button} onPress={getData}>
        <Text style={styles.btnText}>Get Commits</Text>
      </TouchableOpacity>
      <View style={styles.subContainer}>
        <ScrollView>
          {gitHubCommits.length ? (
            gitHubCommits.map((item: Record<any, any>, i: number) => {
              return (
                <View style={styles.content} key={i}>
                  <View style={styles.flex}>
                    <Text style={styles.text}>Author: </Text>
                    <Text style={styles.subText}>{item?.commit?.author?.name}</Text>
                  </View>

                  <View style={styles.flex}>
                    <Text style={styles.text}>Hash: </Text>
                    <Text style={styles.subText}>{item?.commit?.tree?.sha}</Text>
                  </View>

                  <View style={styles.flex}>
                    <Text style={styles.text}>Message: </Text>
                    <Text style={styles.subText}>{item?.commit?.message}</Text>
                  </View>
                </View>
              );
            })
          ) : (
            <Text style={styles.text}>No Commits Yet</Text>
          )}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Main;
