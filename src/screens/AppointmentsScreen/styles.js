import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: "flex-start",
  },
  buttonsContainer: {
    flexDirection: "row",
    alignItems: 'center',  // Centra los elementos verticalmente
    justifyContent: 'center', // Centra los elementos horizontalmente
  },
  appointmentContainer: {
    marginTop: 16,
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    paddingBottom: 16,
  },
  textHome: {
    fontSize: 30,
    marginBottom: 20,
    marginTop: 30
  },
  dateText: {
    fontSize: 20,
    color: '#333'
  },
  input: {
    height: 48,
    borderRadius: 5,
    overflow: 'hidden',
    backgroundColor: 'white',
    paddingLeft: 16,
    flex: 1,
    marginRight: 5
  },
  button: {
    height: 120,
    width: 120,
    borderRadius: 100,
    backgroundColor: '#fff0000',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    margin:5,
    
  },
  buttonUpdate: {
    height: 28,
    borderRadius: 5,
    backgroundColor: '#00FF00',
    minWidth: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 7,
    padding: 5
  },
  buttonDelete: {
    height: 28,
    borderRadius: 5,
    backgroundColor: '#dc0000',
    minWidth: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 7,
    padding: 5
  },
  buttonText: {
    color: 'white',
    fontSize: 20
  },
  listContainer: {
    marginTop: 20,
    padding: 20
  },
  
})