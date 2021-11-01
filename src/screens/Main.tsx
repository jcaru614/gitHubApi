import React, { useState } from 'react';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import { SafeAreaView, Text, TextInput, View, TouchableOpacity, ScrollView } from 'react-native';
import { gitHubRequest } from '../services/actions';
import Spinner from '../components/Spinner';
import { styles } from './Main.styles';

const Main = () => {
  const dispatch = useDispatch();
  const [userText, setUserText] = useState('');
  const [repoText, setRepoText] = useState('');
  const gitHubCommits = useSelector((state: RootStateOrAny) => state.reducer.commits);
  const spinner = useSelector((state: RootStateOrAny) => state.reducer.spinner);

  const getData = () => {
    dispatch(gitHubRequest({ userText, repoText }));
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>GitHubAPI</Text>
      <TouchableOpacity style={styles.button} onPress={getData} testID="btn">
        <Text style={styles.btnText}>Get Commits</Text>
      </TouchableOpacity>
      <View style={styles.flex}>
        <TextInput
          style={styles.textInput}
          placeholder="user name"
          onChangeText={(text) => setUserText(text)}
          value={userText}
        />
        <TextInput
          style={styles.textInput}
          placeholder="repo"
          onChangeText={(text) => setRepoText(text)}
          value={repoText}
        />
      </View>
      <View style={styles.subContainer}>
        <View>{spinner ? <Spinner /> : null}</View>
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
                    <Text style={styles.subText}>{item?.sha}</Text>
                  </View>

                  <View style={styles.flex}>
                    <Text style={styles.text}>Message: </Text>
                    <Text style={styles.subText}>{item?.commit?.message}</Text>
                  </View>
                </View>
              );
            })
          ) : (
            <View style={styles.subContainer}>
              <Text style={styles.text}>No Commits Yet</Text>
            </View>
          )}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Main;
