import { View, Text, FlatList, Dimensions, TouchableOpacity } from "react-native";
import { router } from "expo-router";

const { width, height } = Dimensions.get("window");

const slides = [
  {
    id: "1",
    title: "Welcome to\nSafeMind",
    text: "app that will help you",
  },
  {
    id: "2",
    title: "Support Bot",
    text:
      "a bot that can provide you with the necessary support if you recall a traumatic moment.",
  },
  {
    id: "3",
    title: "Meditation.",
    text:
      "It promotes relaxation, reduces stress, and helps restore emotional balance.",
  },
];

export default function Onboarding() {
  return (
    <FlatList
      data={slides}
      horizontal
      pagingEnabled
      showsHorizontalScrollIndicator={false}
      keyExtractor={(item) => item.id}
      renderItem={({ item, index }) => (
        <View
          style={{
            width,
            height,
            backgroundColor: "#EAD6E6",
            padding: 30,
            justifyContent: "space-between",
          }}
        >
          <View style={{ marginTop: 120 }}>
            <Text style={{ fontSize: 34, fontWeight: "600" }}>
              {item.title}
            </Text>
            <Text style={{ marginTop: 20, fontSize: 16 }}>
              {item.text}
            </Text>
          </View>

          <TouchableOpacity
            style={{ alignSelf: "flex-end" }}
            onPress={() => {
              if (index === slides.length - 1) {
                router.replace("/(tabs)");
              }
            }}
          >
            <Text style={{ fontSize: 28 }}>›</Text>
          </TouchableOpacity>
        </View>
      )}
    />
  );
}
