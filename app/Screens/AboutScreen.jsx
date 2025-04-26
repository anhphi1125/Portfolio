import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  useWindowDimensions,
  ScrollView,
} from "react-native";
import CustomButton from "@/app/Components/CustomButton";
import { useNavigation } from "@react-navigation/native";

export default function AboutScreen() {
  const navigation = useNavigation();
  const { width } = useWindowDimensions();
  const isMobile = width < 768; // breakpoint tùy chỉnh cho mobile

  const skills = [
    "React Native",
    "JavaScript",
    "HTML",
    "CSS",
    "Figma",
    "Node.js",
    "MongoDB",
    "Firebase",
    "SQLite",
  ];

  return (
    <ScrollView style={styles.container}>
      <View
        style={[
          styles.aboutContainer,
          {
            flexDirection: isMobile ? "column" : "row",
            paddingHorizontal: isMobile ? 24 : 120,
            alignItems: isMobile ? "center" : "flex-start",
          },
        ]}
      >
        <View style={[styles.about, { width: isMobile ? "100%" : "60%" }]}>
          <Text style={[styles.title, isMobile && { fontSize: 36 }]}>
            About Me
          </Text>
          <Text style={[styles.description, isMobile && { fontSize: 18 }]}>
            My name is Đào Thị Ánh Phi. I am a frontend developer who loves
            building web and mobile apps that are easy to use and work well on
            all devices. I have skills in React, React Native, and JavaScript. I
            turn Figma designs into simple, user‑friendly interfaces. My work
            includes a personal portfolio website and a mobile app for plant
            accessories—both show I can make interfaces that look good and work
            smoothly on different screens. I always keep learning and hope to
            master modern patterns like MVVM and Clean Architecture so I can
            build projects that grow and stay easy to maintain.
          </Text>
          <Text style={styles.skillsTitle}>Skills</Text>
          <View style={styles.skillsList}>
            {skills.map((skill, index) => (
              <View key={index} style={styles.skillChip}>
                <Text style={styles.skillText}>{skill}</Text>
              </View>
            ))}
          </View>
        </View>
        <Image
          source={require("@/assets/images/person.png")}
          style={[
            styles.person,
            {
              width: isMobile ? "80%" : "30%",
              marginTop: isMobile ? 24 : 0,
              maxHeight: isMobile ? 250 : 400,
            },
          ]}
        />
      </View>

      <View
        style={[
          styles.hightContainer,
          {
            paddingHorizontal: isMobile ? 24 : 120,
          },
        ]}
      >
        <Text style={[styles.skillsTitle, { fontSize: 24, fontWeight: "bold" }]}>
          Highlighted Experience
        </Text>
        <Text style={[styles.skillsTitle, { color: "#828282" }]}>
          <Text style={{ fontWeight: "bold" }}>Portfolio Website</Text>: Developed a
          responsive portfolio website using React JS, JavaScript, and CSS, based on
          provided Figma designs, showcasing technical skills and frontend development.
        </Text>
        <Text style={[styles.skillsTitle, { color: "#828282" }]}>
          <Text style={{ fontWeight: "bold" }}>Plant and Accessories Selling App</Text>:
          Built core frontend features like product listing and shopping cart using
          React Native, implementing provided Figma designs for mobile devices.
        </Text>

        <Text
          style={[
            styles.skillsTitle,
            { fontSize: 24, marginTop: 16, fontWeight: "bold" },
          ]}
        >
          Career Goals
        </Text>
        <Text style={[styles.skillsTitle, { color: "#828282" }]}>
          I aspire to excel in frontend development by building innovative web
          and mobile applications. My goal is to deepen my expertise in React
          and frontend development, master MVVM and Clean Architecture, and
          contribute to creative projects in a dynamic tech environment.
        </Text>

        <View style={{ alignSelf: "center", marginVertical: 24 }}>
          <CustomButton
            label={"Get in Touch"}
            bg={"#FDC435"}
            borderW={2}
            radius={8}
            borderColor={"#FDC435"}
            onPress={() => navigation.navigate("Contact")}
          />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  hightContainer: {
    paddingHorizontal: 120,
    justifyContent: "center",
  },
  aboutContainer: {
    flexDirection: "row",
    paddingHorizontal: 120,
    justifyContent: "space-between",
    marginVertical: 48,
    overflow: "hidden",
    width: "100%",
  },
  person: {
    resizeMode: "contain",
    width: "30%",
    maxHeight: 400,
  },
  container: {
    flex: 1,
    backgroundColor: "#FFF",
  },
  about: {
    padding: 16,
    width: "60%",
  },
  title: {
    fontSize: 48,
    color: "#25282B",
  },
  description: {
    fontSize: 24,
    color: "#828282",
    marginVertical: 32,
  },
  skillsTitle: {
    fontSize: 20,
    color: "#333",
    marginBottom: 16,
  },
  skillsList: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
  },
  skillChip: {
    backgroundColor: "#E0E0E0",
    borderRadius: 16,
    paddingVertical: 6,
    paddingHorizontal: 12,
  },
  skillText: {
    fontSize: 14,
    color: "#333",
  },
});
