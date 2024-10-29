import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';

const BlitzRosterReport: React.FC = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Roster Report</Text>
        <View style={styles.legend}>
          <View style={styles.legendItem}>
            <RiskIndicator riskLevel="Low" />
            <Text style={styles.legendText}>Low</Text>
          </View>
          <View style={styles.legendItem}>
            <RiskIndicator riskLevel="Medium" />
            <Text style={styles.legendText}>Medium</Text>
          </View>
          <View style={styles.legendItem}>
            <RiskIndicator riskLevel="High" />
            <Text style={styles.legendText}>High</Text>
          </View>
        </View>
      </View>

      {/* Roster Table */}
      <View style={styles.table}>
        <View style={styles.tableHeader}>
          <Text style={styles.tableHeaderText}>Player</Text>
          <Text style={styles.tableHeaderText}>Position</Text>
          <Text style={styles.tableHeaderText}>Risk</Text>
        </View>
        <RosterRow player="#1" position="WR" risk="95%" riskLevel="High" />
        <RosterRow player="#2" position="QB" risk="93%" riskLevel="High" />
        <RosterRow player="#3" position="DB" risk="85%" riskLevel="High" />
        <RosterRow player="#4" position="WR" risk="60%" riskLevel="Medium" />
        <RosterRow player="#5" position="RB" risk="45%" riskLevel="Medium" />
        <RosterRow player="#6" position="WR" risk="30%" riskLevel="Low" />
        <RosterRow player="#7" position="LB" risk="0%" riskLevel="Low" />
      </View>
    </ScrollView>
  );
};

// Component to render each row in the roster
type RosterRowProps = {
  player: string;
  position: string;
  risk: string;
  riskLevel: 'Low' | 'Medium' | 'High';
};

const RosterRow: React.FC<RosterRowProps> = ({ player, position, risk, riskLevel }) => (
  <View style={styles.tableRow}>
    <Text style={styles.tableData}>{player}</Text>
    <RiskIndicator riskLevel={riskLevel} />
    <Text style={styles.tableData}>{position}</Text>
    <Text style={styles.tableData}>{risk}</Text>
  </View>
);

// Component to render risk level indicator
type RiskIndicatorProps = {
  riskLevel: 'Low' | 'Medium' | 'High';
};

const RiskIndicator: React.FC<RiskIndicatorProps> = ({ riskLevel }) => {
  const backgroundColor =
    riskLevel === 'High' ? '#ff6a6a' :
    riskLevel === 'Medium' ? '#ffd966' :
    '#a8d9ff';

  return <View style={[styles.riskIndicator, { borderColor: backgroundColor }]} />;
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  legend: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },
  legendItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  legendText: {
    marginLeft: 5,
    fontSize: 14,
    color: '#333',
  },
  table: {
    marginTop: 20,
  },
  tableHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  tableHeaderText: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#333',
    flex: 1,
    textAlign: 'center',
  },
  tableRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
  },
  tableData: {
    fontSize: 16,
    flex: 1,
    textAlign: 'center',
    color: '#333',
  },
  riskIndicator: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    marginHorizontal: 10,
  },
});

export default BlitzRosterReport;



