import { View, Text, Button } from "react-native";
import { useState } from "react";
import DateTimePicker from "@react-native-community/datetimepicker";
import * as Notifications from "expo-notifications";

export default function MeditationClock() {
  const [time, setTime] = useState(new Date());
  const [show, setShow] = useState(false);

  async function setReminder() {
    await Notifications.requestPermissionsAsync();

    await Notifications.scheduleNotificationAsync({
  content: {
    title: "Meditation time",
    body: "It’s time to relax and breathe",
  },
  trigger: {
    type: Notifications.SchedulableTriggerInputTypes.CALENDAR,
    hour: time.getHours(),
    minute: time.getMinutes(),
    repeats: true,
  },
});


    alert("Meditation reminder set");
  }

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#EAD6E6",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={{ fontSize: 26, marginBottom: 20 }}>
        Choose meditation time
      </Text>

      <Button title="Select time" onPress={() => setShow(true)} />

      {show && (
        <DateTimePicker
          value={time}
          mode="time"
          display="spinner"
          onChange={(event, selected) => {
            setShow(false);
            if (selected) setTime(selected);
          }}
        />
      )}

      <View style={{ marginTop: 20 }}>
        <Button title="Set meditation" onPress={setReminder} />
      </View>
    </View>
  );
}
