
import { TextInput, Text, TouchableOpacity, View } from 'react-native';
import { styles } from './style';

export default function App() {
  return (
    <View style={{ ...styles.container, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 20, color: "white", marginBottom: 20 }}>Todo App</Text>
      <TextInput style={styles.input}> Enter Title</TextInput>
      <TextInput style={styles.input}> Enter Description</TextInput>
      <TouchableOpacity style={styles.submitBtn}><Text style={{ ...styles.text, fontWeight: "bold" }}>Submit</Text></TouchableOpacity>
      <View style={styles.dividerLine}></View>
      <View style={styles.filterContainer}>
        <TouchableOpacity style={styles.filterBtn}><Text style={styles.filterText}>All</Text></TouchableOpacity>
        <TouchableOpacity style={styles.filterBtn}><Text style={styles.filterText}>Active</Text></TouchableOpacity>
        <TouchableOpacity style={styles.filterBtn}><Text style={styles.filterText}>Completed</Text></TouchableOpacity>
      </View>
    </View>
  );
}
