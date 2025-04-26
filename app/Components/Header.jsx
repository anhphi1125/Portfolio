import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Modal,
  useWindowDimensions,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

export default function Header({onNavigate}) {
  const [menuVisible, setMenuVisible] = useState(false);
  const { width } = useWindowDimensions();
  const isMobile = width < 768;

  const handlePress = (section) => {
    onNavigate(section);
    setMenuVisible(false);
  };

  return (
    <View style={styles.header}>
      <Text style={styles.logo}>Đào Thị Ánh Phi</Text>

      {isMobile ? (
        <>
          <TouchableOpacity onPress={() => setMenuVisible(true)}>
            <Ionicons name="menu" size={28} color="#333" />
          </TouchableOpacity>

          <Modal visible={menuVisible} transparent animationType="fade">
            <TouchableOpacity
              style={styles.modalOverlay}
              onPress={() => setMenuVisible(false)}
              activeOpacity={1}
            >
              <View style={styles.modalMenu}>
                {["Home", "About", "Projects", "Contact"].map((item) => (
                  <TouchableOpacity key={item} onPress={() => handlePress(item)}>
                    <Text style={styles.modalItem}>{item}</Text>
                  </TouchableOpacity>
                ))}
              </View>
            </TouchableOpacity>
          </Modal>
        </>
      ) : (
        <View style={styles.nav}>
          {["Home", "About", "Projects", "Contact"].map((item) => (
            <TouchableOpacity key={item} onPress={() => handlePress(item)}>
              <Text style={styles.navItem}>{item}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 60,
    paddingHorizontal: 16,
    backgroundColor: "#fff",
    elevation: 4,
    boxShadow: "0px 2px 3.84px rgba(0,0,0,0.25)",
  },
  logo: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
  },
  nav: {
    flexDirection: "row",
    gap: 20,
  },
  navItem: {
    fontSize: 16,
    color: "#333",
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.4)",
    justifyContent: "flex-end",
  },
  modalMenu: {
    backgroundColor: "#fff",
    padding: 20,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  modalItem: {
    fontSize: 18,
    marginVertical: 10,
    color: "#333",
  },
});
