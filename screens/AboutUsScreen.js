import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { FontSize, FontFamily, Border, Color } from "../GlobalStyles";

const AboutUsScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.aboutUsScreen}>
      <View style={styles.button}>
        <View style={styles.buttonChild} />
        <Text style={[styles.getStarted, styles.getTypo]}>Get Started</Text>
        <Text style={[styles.getStarted1, styles.getTypo]}>Get Started</Text>
      </View>
      <View style={[styles.aboutUsScreenChild, styles.aboutChildPosition]} />
      <Text style={[styles.about, styles.teamTypo]}>ABOUT</Text>
      <Image
        style={[styles.more3Icon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/more-3.png")}
      />
      <Image
        style={[styles.vectorIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/vector.png")}
      />
      <Image
        style={[styles.vectorIcon1, styles.textPosition]}
        contentFit="cover"
        source={require("../assets/vector1.png")}
      />
      <Image
        style={[styles.vectorIcon2, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/vector2.png")}
      />
      <Pressable
        style={[styles.rectangleParent, styles.rectangleGroupPosition]}
        onPress={() => navigation.navigate("AboutUsScreenTeam")}
      >
        <View style={styles.groupPosition} />
        <Text style={[styles.team, styles.teamTypo]}>Team</Text>
      </Pressable>
      <Pressable
        style={[styles.rectangleGroup, styles.rectangleGroupPosition]}
        onPress={() => navigation.navigate("AboutUsScreenClient")}
      >
        <View style={styles.groupPosition} />
        <Text style={[styles.team, styles.teamTypo]}>Client</Text>
      </Pressable>
      <Pressable
        style={styles.rectangleContainer}
        onPress={() => navigation.navigate("AboutUsScreenExpert")}
      >
        <View style={styles.groupPosition} />
        <Text style={[styles.team, styles.teamTypo]}>Expert</Text>
      </Pressable>
      <Pressable
        style={[styles.groupPressable, styles.rectangleGroupPosition]}
        onPress={() => navigation.navigate("AboutUsScreenDevice")}
      >
        <View style={styles.groupPosition} />
        <Text style={[styles.team, styles.teamTypo]}>{`Device `}</Text>
      </Pressable>
      <Image
        style={[styles.aboutUsScreenItem, styles.aboutLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-3.png")}
      />
      <Image
        style={[styles.aboutUsScreenInner, styles.aboutLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-3.png")}
      />
      <Image
        style={[styles.ellipseIcon, styles.aboutLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-3.png")}
      />
      <Image
        style={[styles.aboutUsScreenChild1, styles.aboutLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-3.png")}
      />
      <Image
        style={styles.groupChat1Icon}
        contentFit="cover"
        source={require("../assets/groupchat-1.png")}
      />
      <Image
        style={styles.user1Icon}
        contentFit="cover"
        source={require("../assets/user-1.png")}
      />
      <Image
        style={[styles.expert1Icon, styles.iconPosition2]}
        contentFit="cover"
        source={require("../assets/expert-1.png")}
      />
      <Image
        style={[styles.pcbBoard1Icon, styles.iconPosition2]}
        contentFit="cover"
        source={require("../assets/pcbboard-1.png")}
      />
      <View style={[styles.aboutUsScreenChild2, styles.aboutChildPosition]} />
      <Image
        style={[styles.homeIcon, styles.iconPosition1]}
        contentFit="cover"
        source={require("../assets/home.png")}
      />
      <Image
        style={[styles.vectorIcon3, styles.iconPosition1]}
        contentFit="cover"
        source={require("../assets/vector3.png")}
      />
      <Image
        style={[styles.taskIcon, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/task.png")}
      />
      <Image
        style={[styles.controlIcon, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/control.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  getTypo: {
    display: "none",
    fontSize: FontSize.size_lg,
    left: "20%",
    top: "26.15%",
    width: "60.38%",
    height: "49.23%",
    textAlign: "center",
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    position: "absolute",
  },
  aboutChildPosition: {
    borderRadius: Border.br_xl,
    left: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
  },
  teamTypo: {
    textAlign: "center",
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  textPosition: {
    top: "2.19%",
    position: "absolute",
  },
  vectorIconLayout: {
    width: "5.56%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  rectangleGroupPosition: {
    left: "33.33%",
    right: "14.17%",
    width: "52.5%",
    height: "7.5%",
    position: "absolute",
  },
  aboutLayout: {
    height: 62,
    width: 61,
    left: 50,
    position: "absolute",
  },
  iconPosition2: {
    width: 40,
    left: 60,
    position: "absolute",
  },
  iconPosition1: {
    top: "90.94%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  iconPosition: {
    top: "90.63%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  buttonChild: {
    borderRadius: Border.br_4xs,
    backgroundColor: "#132a17",
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
  },
  getStarted: {
    color: Color.colorBlack,
  },
  getStarted1: {
    color: Color.colorSnow,
  },
  button: {
    height: "65.31%",
    width: "80.56%",
    top: "18.28%",
    right: "9.72%",
    bottom: "16.41%",
    left: "9.72%",
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    position: "absolute",
  },
  aboutUsScreenChild: {
    height: "15.78%",
    top: "-3.44%",
    bottom: "87.66%",
    backgroundColor: Color.colorAntiquewhite,
  },
  about: {
    height: "4.53%",
    width: "25.28%",
    top: "5.78%",
    left: "37.5%",
    fontSize: FontSize.size_lgi,
    color: Color.colorBlack,
  },
  more3Icon: {
    height: "3.75%",
    width: "6.67%",
    top: "6.25%",
    right: "85.83%",
    bottom: "90%",
    left: "7.5%",
  },
  text: {
    left: "6.67%",
    fontSize: FontSize.size_sm,
    fontWeight: "700",
    fontFamily: FontFamily.poppinsBold,
    textAlign: "left",
    color: Color.colorBlack,
  },
  groupPosition: {
    backgroundColor: Color.colorSeagreen,
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    position: "absolute",
    width: "100%",
  },
  team: {
    height: "35.42%",
    width: "89.42%",
    top: "14.58%",
    left: "7.41%",
    fontSize: FontSize.size_2xl,
    color: Color.colorWhite,
  },
  rectangleParent: {
    top: "27.97%",
    bottom: "64.53%",
  },
  rectangleGroup: {
    top: "40.78%",
    bottom: "51.72%",
  },
  rectangleContainer: {
    top: "53.59%",
    right: "14.44%",
    bottom: "38.91%",
    left: "33.06%",
    width: "52.5%",
    height: "7.5%",
    position: "absolute",
  },
  groupPressable: {
    top: "66.41%",
    bottom: "26.09%",
  },
  aboutUsScreenItem: {
    top: 200,
  },
  aboutUsScreenInner: {
    top: 297,
  },
  ellipseIcon: {
    top: 400,
  },
  aboutUsScreenChild1: {
    top: 495,
  },
  groupChat1Icon: {
    top: 200,
    left: 53,
    width: 54,
    height: 58,
    position: "absolute",
  },
  user1Icon: {
    top: 300,
    left: 55,
    width: 50,
    height: 50,
    position: "absolute",
  },
  expert1Icon: {
    top: 400,
    height: 43,
  },
  pcbBoard1Icon: {
    top: 500,
    height: 38,
  },
  aboutUsScreenChild2: {
    height: "14.53%",
    top: "87.66%",
    bottom: "-2.19%",
    backgroundColor: Color.colorPeachpuff,
  },
  homeIcon: {
    height: "5.31%",
    width: "10%",
    right: "82.78%",
    bottom: "3.75%",
    left: "7.22%",
  },
  vectorIcon3: {
    height: "4.22%",
    width: "10.83%",
    right: "6.11%",
    bottom: "4.84%",
    left: "83.06%",
  },
  taskIcon: {
    height: "4.84%",
    width: "9.44%",
    right: "59.72%",
    bottom: "4.53%",
    left: "30.83%",
  },
  controlIcon: {
    height: "5%",
    width: "10.28%",
    right: "33.33%",
    bottom: "4.38%",
    left: "56.39%",
  },
  aboutUsScreen: {
    backgroundColor: Color.colorMediumseagreen,
    flex: 1,
    height: 640,
    overflow: "hidden",
    width: "100%",
  },
});

export default AboutUsScreen;
