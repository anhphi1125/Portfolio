import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  useWindowDimensions,
  ScrollView,
  Linking,
} from "react-native";
import CustomButton from "../Components/CustomButton";

export default function ProjectsScreen() {
  const { width } = useWindowDimensions();
  const isMobile = width < 768; // Ngưỡng để chia mobile và desktop

  const projects = [
    {
      name: "Portfolio App",
      description: "Mobile portfolio to showcase my projects",
      tech: "React Native, JavaScript, Figma",
      image: require('@/assets/images/imgPortfolio.png'),
      git: "https://github.com/anhphi1125/Portfolio",
    },
    {
      name: "Plant & Accessories App",
      description: "A mobile app for matching users based on interests",
      tech: "React Native, JavaScript, Figma",
      image: require("@/assets/images/plants.png"),
      link: "https://youtu.be/9gov7jrhoJc",
      git: "https://github.com/anhphi1125/ASM_CRO102",
    },
    {
      name: "Online Reading App",
      description: "Mobile portfolio to showcase my projects",
      tech: "Android Studio, Java, Figma",
      image: require("@/assets/images/book.png"),
      link: "https://youtu.be/ypzMeKI20EA",
      git: "https://github.com/Jainan21/DAMNhomPokemon",
    },
  ];

  return (
    <ScrollView contentContainerStyle={styles.projects}>
      <View style={{ alignItems: "center" }}>
        <Text style={styles.title}>My Projects</Text>
      </View>
      {projects.map((project, index) => (
        <View
          key={index}
          style={[
            styles.projectCard,
            {
              flexDirection: isMobile ? "column" : "row",
              marginHorizontal: isMobile ? 0 : 222,
            },
          ]}
        >
          {(index % 2 === 0 || isMobile) && (
            <Image
              source={project.image}
              style={isMobile ? styles.imageMobile : styles.projectImage}
            />
          )}
          <View style={styles.inforProject}>
            <Text style={styles.projectName}>{project.name}</Text>
            <Text style={styles.projectDescription}>{project.description}</Text>
            <Text style={styles.projectTech}>{project.tech}</Text>
            {project.link && (
              <CustomButton
              label={"View Project"}
              borderW={1}
              borderColor={"#25282B"}
              radius={24}
              onPress={() => Linking.openURL(project.link)}
            />
            )}
            <CustomButton
              label={"Link code"}
              bg={"#FDC435"}
              borderW={1}
              borderColor={"#FDC435"}
              radius={24}
              onPress={() => Linking.openURL(project.git)}
            />
          </View>
          {index % 2 !== 0 && !isMobile && (
            <Image source={project.image} style={styles.projectImage} />
          )}
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  projects: {
    padding: 16,
    backgroundColor: "#FFFDF9",
  },
  title: {
    fontSize: 40,
    color: "#25282B",
    textAlign: "center",
    marginBottom: 80,
    borderBottomWidth: 4,
    borderBottomColor: "#FDC435",
    maxWidth: 300,
    paddingBottom: 4,
  },
  projectCard: {
    backgroundColor: "#FFF",
    borderRadius: 24,
    marginBottom: 80,
    overflow: "hidden",
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  projectImage: {
    width: "50%",
    height: 500,
    resizeMode: "cover",
  },
  imageMobile: {
    width: "100%",
    height: 200,
    resizeMode: "cover",
  },
  inforProject: {
    flex: 1,
    justifyContent: "center",
    padding: 24,
    gap: 10
  },
  projectName: {
    fontSize: 18,
    color: "#333",
    marginBottom: 8,
  },
  projectDescription: {
    fontSize: 14,
    color: "#666",
    marginVertical: 24,
  },
  projectTech: {
    fontSize: 12,
    color: "#666",
    fontStyle: "italic",
    marginBottom: 12,
  },
});
