import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <View style={styles.header}>
        <Text style={styles.headerText}>LISTAS</Text>
      </View>

      <View style={styles.animais}>
        <Text style={styles.animaisText}>Animais</Text>
      </View>

      <View style={styles.carros}>
        <Text style={styles.carrosText}>Carros</Text>
      </View>
      <View style={styles.peixes}>
        <Text style={styles.peixesText}>Peixes</Text>
      </View>
      <View style={styles.times}>
        <Text style={styles.timesText}>Times</Text>
      </View>
      <View style={styles.filmes}>
        <Text style={styles.filmesText}>Filmes</Text>
      </View>
      <View style={styles.linguagens}>
        <Text style={styles.linguagensText}>Linguagens</Text>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
  header: {
    alignItems: 'center',
    paddingTop: 25,
    backgroundColor: '#2A9F91',
    paddingBottom: 25,

  },
  headerText: {
    fontSize: 25,
    color: '#fff',
    fontWeight: 'bold',


  },
  animais: {
    alignItems: 'center',
    padding: 30,
    backgroundColor: '#FFA4A4',
    width: 400,
    height: 107,
    margin: 5,
    marginTop: 15

  },
  animaisText: {
    fontSize: 25,
    color: '#C62222',
    fontWeight: 'bold'
  },
  carros: {
    alignItems: 'center',
    padding: 30,
    backgroundColor: '#EDA4FF',
    width: 400,
    margin: 5,
    height: 107,
    marginTop: 15

  },
  carrosText: {
    fontSize: 25,
    color: '#7422C6',
    fontWeight: 'bold'

  },
  peixes: {
    alignItems: 'center',
    padding: 30,
    backgroundColor: '#A4D4FF',
    width: 400,
    marginTop: 15,
    height: 107,
    margin: 5,
  },
  peixesText: {
    fontSize: 25,
    color: '#2277C6',
    fontWeight: 'bold'
  },
  times: {
    alignItems: 'center',
    padding: 30,
    backgroundColor: '#A4FFC3',
    width: 400,
    marginTop: 15,
    margin: 5,
    height: 107,
  },
  timesText: {
    fontSize: 25,
    color: '#22C646',
    fontWeight: 'bold'

  },
  filmes: {
    alignItems: 'center',
    padding: 30,
    backgroundColor: '#D1D6D3',
    width: 400,
    marginTop: 15,
    margin: 5,
    height: 107,

  },
  filmesText: {
    fontSize: 25,
    color: '#434A44',
    fontWeight: 'bold'
  },
  linguagens: {
    alignItems: 'center',
    padding: 30,
    backgroundColor: '#E8EFBD',
    width: 400,
    marginTop: 15,
    margin: 5,
    height: 107,
  },
  linguagensText: {
    fontSize: 25,
    color: '#747D10',
    fontWeight: 'bold'
  }
});

