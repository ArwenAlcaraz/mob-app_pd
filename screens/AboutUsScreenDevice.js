import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Border, FontFamily, Color, FontSize } from "../GlobalStyles";

const AboutUsScreenDevice = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.aboutUsScreenDevice}>
      <View style={[styles.aboutUsScreenDeviceChild, styles.aboutLayout]} />
      <Text style={[styles.device, styles.deviceTypo]}>DEVICE</Text>
      <Image
        style={[styles.more7Icon, styles.iconLayout]}
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
        style={[styles.vectorIcon2, styles.vectorIconLayout1]}
        contentFit="cover"
        source={require("../assets/vector2.png")}
      />
      <Text
        style={[styles.theTeamIs, styles.deviceTypo]}
      >{`The team is composed of four members, `}</Text>
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
      <View style={[styles.aboutUsScreenDeviceItem, styles.aboutLayout]} />
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
          style={[styles.icon, styles.iconLayout]}
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
        source={require("../assets/control.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  aboutLayout: {
    borderRadius: Border.br_xl,
    position: "absolute",
    width: "100%",
  },
  deviceTypo: {
    textAlign: "center",
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    color: Color.colorBlack,
    position: "absolute",
  },
  iconLayout: {
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
  vectorIconLayout: {
    bottom: "54.53%",
    top: "44.53%",
    width: "1.67%",
    height: "0.94%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  vectorPosition: {
    top: "90.94%",
    position: "absolute",
  },
  iconPosition: {
    top: "90.63%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  aboutUsScreenDeviceChild: {
    height: "15.78%",
    top: "-2.5%",
    right: "0%",
    bottom: "86.72%",
    left: "0%",
    backgroundColor: Color.colorAntiquewhite,
  },
  device: {
    height: "4.53%",
    width: "25.28%",
    top: "6.88%",
    left: "38.33%",
    fontSize: FontSize.size_lgi,
  },
  more7Icon: {
    height: "3.75%",
    width: "6.67%",
    top: "7.19%",
    right: "85.83%",
    bottom: "89.06%",
    left: "7.5%",
    maxWidth: "100%",
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
  theTeamIs: {
    height: "2.81%",
    width: "64.17%",
    top: "46.56%",
    left: "9.72%",
    fontSize: 11,
  },
  vectorIcon3: {
    right: "54.44%",
    left: "43.89%",
  },
  vectorIcon4: {
    right: "51.67%",
    left: "46.67%",
  },
  vectorIcon5: {
    right: "48.89%",
    left: "49.44%",
  },
  vectorIcon6: {
    right: "46.11%",
    left: "52.22%",
  },
  vectorIcon7: {
    right: "43.33%",
    left: "55%",
  },
  aboutUsScreenDeviceItem: {
    height: "14.53%",
    top: "87.66%",
    right: "-0.28%",
    bottom: "-2.19%",
    left: "0.28%",
    backgroundColor: Color.colorPeachpuff,
  },
  homeIcon: {
    height: "5.31%",
    width: "10%",
    right: "82.5%",
    bottom: "3.75%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    left: "7.5%",
  },
  icon: {
    height: "100%",
    width: "100%",
    maxWidth: "100%",
  },
  vector: {
    left: "83.33%",
    right: "5.83%",
    bottom: "4.84%",
    width: "10.83%",
    height: "4.22%",
  },
  taskIcon: {
    height: "4.84%",
    width: "9.44%",
    right: "59.44%",
    bottom: "4.53%",
    left: "31.11%",
  },
  controlIcon: {
    height: "5%",
    width: "10.28%",
    right: "33.06%",
    bottom: "4.38%",
    left: "56.67%",
  },
  aboutUsScreenDevice: {
    backgroundColor: Color.colorMediumseagreen,
    flex: 1,
    height: 640,
    overflow: "hidden",
    width: "100%",
  },
});

export default AboutUsScreenDevice;
