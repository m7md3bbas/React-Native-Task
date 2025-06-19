import React from 'react';
import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
  FlatList,
} from 'react-native';
import { styles } from './style';
export default function App() {
  const dummyTodos = [
    { id: '1', title: 'Learn React Native', description: 'Basics and setup', done: false },
    { id: '2', title: 'Create Todo App', description: 'Build the UI', done: true },
  ];

  return (
    <View style={{ ...styles.container, justifyContent: 'center', alignItems: 'center', paddingTop: 80 }}>
      <Text style={{ fontSize: 20, color: "black", marginBottom: 20, textAlign: 'center', fontWeight: 'bold' }}>Todo App</Text>

      <TextInput style={{ ...styles.input, textAlign: 'center', borderRadius: 18 }} placeholder="Enter Title" />
      <TextInput style={{ ...styles.input, textAlign: 'center', borderRadius: 18 }} placeholder="Enter Description" />

      <TouchableOpacity style={styles.submitBtn}>
        <Text style={{ ...styles.text, textAlign: 'center' }}>Submit</Text>
      </TouchableOpacity>

      <View style={styles.dividerLine}></View>

      <View style={styles.filterContainer}>
        <TouchableOpacity style={styles.activeFilterBtn}>
          <Text style={{ ...styles.activeFilterText, textAlign: 'center' }}>All</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.filterBtn}>
          <Text style={{ ...styles.filterText, textAlign: 'center' }}>Active</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.filterBtn}>
          <Text style={{ ...styles.filterText, textAlign: 'center' }}>Completed</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        style={styles.todosContainer}
        contentContainerStyle={{ alignItems: 'center' }}
        data={dummyTodos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={{ marginVertical: 5, alignItems: 'center' }}>
            <Text
              style={[
                { fontSize: 18, color: 'black', textAlign: 'center' },
                item.done && styles.doneTodo,
              ]}
            >
              {item.title}
            </Text>
            <Text
              style={[
                { fontSize: 14, color: '#555', textAlign: 'center' },
                item.done && styles.doneTodo,
              ]}
            >
              {item.description}
            </Text>
          </View>
        )}
      />
    </View>
  );
}
