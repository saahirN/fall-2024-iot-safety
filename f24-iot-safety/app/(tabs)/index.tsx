import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';

const BlitzApp: React.FC = () => {
  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>blitz</Text>
      </View>

      {/* Position Breakdown (Placeholder) */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Position Break Down</Text>
        <View style={styles.chartPlaceholder}>
          <Text>Chart Placeholder</Text>
        </View>
      </View>

      {/* Top 3 Players in Alerts */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Top 3 Players in Alerts</Text>
        <View style={styles.table}>
          <TableRow headers={['Player Name', 'Position', 'Alerts', 'Impacts']} />
          <TableRow data={['#28 Billings', 'RB', '6', '81']} />
          <TableRow data={['#14 Williams', 'WR', '4', '31']} />
          <TableRow data={['#39 Ruth', 'TE/FB', '2', '43']} />
        </View>
      </View>

      {/* Top 3 Players in Load */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Top 3 Players in Load</Text>
        <View style={styles.table}>
          <TableRow headers={['Player Name', 'Position', 'Load']} />
          <TableRow data={['#28 Billings', 'RB', '47%']} />
          <TableRow data={['#26 Little', 'TE/FB', '42%']} />
          <TableRow data={['#39 Billings', 'TE/FB', '39%']} />
        </View>
      </View>
    </ScrollView>
  );
};

// Reusable table row component with type annotations
type TableRowProps = {
  headers?: string[];
  data?: string[];
};

const TableRow: React.FC<TableRowProps> = ({ headers, data }) => (
  <View style={styles.tableRow}>
    {(headers || data)?.map((item, index) => (
      <Text key={index} style={headers ? styles.tableHeader : styles.tableData}>
        {item}
      </Text>
    ))}
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  header: {
    paddingVertical: 10,
    alignItems: 'center',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  section: {
    marginVertical: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  chartPlaceholder: {
    height: 220,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#e1e1e1',
    borderRadius: 10,
  },
  table: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
  },
  tableRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  tableHeader: {
    fontWeight: 'bold',
    fontSize: 14,
    color: '#333',
  },
  tableData: {
    fontSize: 14,
    color: '#333',
  },
});

export default BlitzApp;


