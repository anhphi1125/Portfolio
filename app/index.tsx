import React, { useRef, useState } from "react";
import {
  ScrollView,
  View,
  NativeScrollEvent,
  NativeSyntheticEvent,
} from "react-native";
import Header from "./Components/Header";
import HomeScreen from "./Screens/HomeScreen";
import AboutScreen from "./Screens/AboutScreen";
import ProjectsScreen from "./Screens/ProjectScreen";
import ContactScreen from "./Screens/ContactScreen";

type Section = "Home" | "About" | "Projects" | "Contact";

export default function Index() {
  const scrollRef = useRef<ScrollView>(null);
  const [sectionPositions, setSectionPositions] = useState<
    Record<Section, number>
  >({} as Record<Section, number>);

  const handleLayout =
    (section: Section) => (event: NativeSyntheticEvent<any>) => {
      const { y } = event.nativeEvent.layout;
      setSectionPositions((prev) => ({ ...prev, [section]: y }));
    };

  const scrollToSection = (section: Section) => {
    const y = sectionPositions[section];
    if (scrollRef.current && y !== undefined) {
      scrollRef.current.scrollTo({ y, animated: true });
    }
  };

  return (
    <View style={{flex: 1}}>
      <Header onNavigate={scrollToSection} />
      <ScrollView ref={scrollRef} style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
        <View onLayout={handleLayout("Home")}>
          <HomeScreen onNavigate={scrollToSection}/>
        </View>
        <View onLayout={handleLayout("About")}>
          <AboutScreen />
        </View>
        <View onLayout={handleLayout("Projects")}>
          <ProjectsScreen />
        </View>
        <View onLayout={handleLayout("Contact")}>
          <ContactScreen />
        </View>
      </ScrollView>
    </View>
  );
}
