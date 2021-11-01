import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EDEEF0',
    alignItems: 'center',
  },
  title: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 35,
    marginVertical: 5,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#11355F',
    width: 315,
    height: 50,
    borderRadius: 10,
    elevation: 5,
    shadowColor: 'gray',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
  },
  btnText: {
    color: '#fff',
    fontSize: 20,
  },
  textInput: {
    backgroundColor: '#fff',
    padding: 10,
    width: 149,
    height: 50,
    borderRadius: 10,
    borderWidth: 4,
    borderColor: '#11355F',
    shadowColor: '#11355F',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 10,
    marginHorizontal: 10,
  },
  subContainer: {
    padding: 10,
    marginVertical: 5,
  },
  content: {
    backgroundColor: '#fff',
    borderColor: 'gray',
    borderWidth: 4,
    borderRadius: 10,
    marginVertical: 2,
    padding: 5,
  },
  flex: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  subText: {
    fontSize: 15,
    flexShrink: 1,
    flexWrap: 'wrap',
  },
});
