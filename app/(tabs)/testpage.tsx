import React from "react";
import { StyleSheet, View, SafeAreaView } from "react-native";

const Flex = () => {
  return (

    <SafeAreaView style={{flex: 1, paddingTop: 60}}>
    <View
      style={[
        styles.container,
        {
          // Try setting `flexDirection` to `"row"`.
          flexDirection: "column",
        },
      ]}
    >
        <View style={{ flex: 1, flexDirection: 'row', paddingHorizontal: 20, paddingVertical: 20, gap: 10, backgroundColor: 'white'}}>
            <View style={{ flex: 1, backgroundColor: "grey" }} />
            <View style={{ flex: 1, backgroundColor: "grey" }} />
        </View>
      <View style={{ flex: 2, backgroundColor: "darkorange" }} />
      <View style={{ flex: 3, backgroundColor: "green" }} />
    </View>
    </SafeAreaView>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Flex;
