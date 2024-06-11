import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Border, FontFamily, Color, FontSize } from "../GlobalStyles";

const AboutUsScreenTeam = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.aboutUsScreenTeam}>
      <View style={[styles.aboutUsScreenTeamChild, styles.aboutPosition]} />
      <Text style={[styles.team, styles.teamTypo]}>TEAM</Text>
      <Image
        style={[styles.more4Icon, styles.iconLayout1]}
        contentFit="cover"
        source={require("../assets/more-3.png")}
      />
      <Image
        style={[styles.vectorIcon, styles.iconLayout1]}
        contentFit="cover"
        source={require("../assets/vector.png")}
      />
      <Image
        style={[styles.vectorIcon1, styles.textPosition]}
        contentFit="cover"
        source={require("../assets/vector1.png")}
      />
      <Image
        style={[styles.vectorIcon2, styles.vectorIconLayout1]}
        contentFit="cover"
        source={require("../assets/vector2.png")}
      />
      <View style={styles.button}>
        <Image
          style={[styles.buttonChild, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/rectangle-1.png")}
        />
        <Text style={[styles.getStarted, styles.getPosition]}>Get Started</Text>
        <Text style={[styles.getStarted1, styles.ourTeamIsTypo]}>
          Get Started
        </Text>
      </View>
      <Text style={[styles.ourTeamIs, styles.ourTeamIsTypo]}>
        Our team is composed of four members: Aaron, Dhan, Arwen and Andrew.
        With diverse expertise in Intelligent Systems (Arwen and Andrew), System
        Administration (Aaron), and Data Science (Dhan), we believe that our
        combined efforts and unique insights enable us to produce high-quality
        and meaningful research. Together, we are committed to achieve
        excellence and make a significant impact in our field.
      </Text>
      <Image
        style={[styles.vectorIcon3, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/vector4.png")}
      />
      <Image
        style={[styles.vectorIcon4, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/vector4.png")}
      />
      <Image
        style={[styles.vectorIcon5, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/vector4.png")}
      />
      <Image
        style={[styles.vectorIcon6, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/vector4.png")}
      />
      <Image
        style={[styles.vectorIcon7, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/vector4.png")}
      />
      <View style={[styles.aboutUsScreenTeamItem, styles.aboutPosition]} />
      <Image
        style={[styles.homeIcon, styles.vectorPosition]}
        contentFit="cover"
        source={require("../assets/home.png")}
      />
      <Pressable
        style={[styles.vector, styles.vectorPosition]}
        onPress={() => navigation.navigate("AboutUsScreen")}
      >
        <Image
          style={styles.iconLayout}
          contentFit="cover"
          source={require("../assets/vector3.png")}
        />
      </Pressable>
      <Image
        style={[styles.taskIcon, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/task.png")}
      />
      <Image
        style={[styles.controlIcon, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/control1.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  aboutPosition: {
    borderRadius: Border.br_xl,
    left: "0.28%",
    right: "-0.28%",
    position: "absolute",
    width: "100%",
  },
  teamTypo: {
    textAlign: "center",
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    color: Color.colorBlack,
    position: "absolute",
  },
  iconLayout1: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  textPosition: {
    top: "2.19%",
    position: "absolute",
  },
  vectorIconLayout1: {
    width: "5.56%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  iconLayout: {
    height: "100%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    width: "100%",
  },
  getPosition: {
    display: "none",
    fontSize: FontSize.size_lg,
    left: "20%",
    top: "26.14%",
    width: "60.38%",
    height: "49.24%",
  },
  ourTeamIsTypo: {
    color: Color.colorSnow,
    textAlign: "center",
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    position: "absolute",
  },
  vectorIconLayout: {
    bottom: "50.94%",
    top: "48.13%",
    width: "1.67%",
    height: "0.94%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  vectorPosition: {
    top: "91.09%",
    position: "absolute",
  },
  iconPosition: {
    top: "90.78%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  aboutUsScreenTeamChild: {
    height: "15.78%",
    top: "-2.97%",
    bottom: "87.19%",
    backgroundColor: Color.colorAntiquewhite,
  },
  team: {
    height: "4.53%",
    width: "25.28%",
    top: "6.41%",
    left: "38.61%",
    fontSize: FontSize.size_lgi,
  },
  more4Icon: {
    height: "3.75%",
    width: "6.67%",
    top: "6.72%",
    right: "85.56%",
    bottom: "89.53%",
    left: "7.78%",
    position: "absolute",
  },
  text: {
    left: "6.67%",
    fontSize: FontSize.size_sm,
    fontWeight: "700",
    fontFamily: FontFamily.poppinsBold,
    textAlign: "left",
    color: Color.colorBlack,
    top: "2.19%",
  },
  buttonChild: {
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: Border.br_4xs,
    position: "absolute",
  },
  getStarted: {
    textAlign: "center",
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    color: Color.colorBlack,
    position: "absolute",
  },
  getStarted1: {
    display: "none",
    fontSize: FontSize.size_lg,
    left: "20%",
    top: "26.14%",
    width: "60.38%",
    height: "49.24%",
  },
  button: {
    height: "30.78%",
    width: "80.56%",
    top: "16.41%",
    right: "9.72%",
    bottom: "52.81%",
    left: "9.72%",
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    position: "absolute",
  },
  ourTeamIs: {
    height: "37.5%",
    width: "92.22%",
    top: "50.31%",
    left: "5%",
    fontSize: FontSize.size_smi,
  },
  vectorIcon3: {
    right: "54.72%",
    left: "43.61%",
  },
  vectorIcon4: {
    right: "51.94%",
    left: "46.39%",
  },
  vectorIcon5: {
    right: "49.17%",
    left: "49.17%",
  },
  vectorIcon6: {
    right: "46.39%",
    left: "51.94%",
  },
  vectorIcon7: {
    right: "43.61%",
    left: "54.72%",
  },
  aboutUsScreenTeamItem: {
    height: "14.53%",
    top: "87.81%",
    bottom: "-2.34%",
    backgroundColor: Color.colorPeachpuff,
  },
  homeIcon: {
    height: "5.31%",
    width: "10%",
    right: "82.5%",
    bottom: "3.59%",
    left: "7.5%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  vector: {
    left: "83.33%",
    right: "5.83%",
    bottom: "4.69%",
    width: "10.83%",
    height: "4.22%",
  },
  taskIcon: {
    height: "4.84%",
    width: "9.44%",
    right: "59.44%",
    bottom: "4.38%",
    left: "31.11%",
  },
  controlIcon: {
    height: "5%",
    width: "10.28%",
    right: "33.06%",
    bottom: "4.22%",
    left: "56.67%",
  },
  aboutUsScreenTeam: {
    backgroundColor: Color.colorMediumseagreen,
    flex: 1,
    height: 640,
    overflow: "hidden",
    width: "100%",
  },
});

export default AboutUsScreenTeam;
