import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Border, FontFamily, Color, FontSize } from "../GlobalStyles";

const AboutUsScreenExpert = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.aboutUsScreenExpert}>
      <View style={[styles.aboutUsScreenExpertChild, styles.aboutPosition]} />
      <Text style={[styles.expert, styles.expertTypo]}>EXPERT</Text>
      <Image
        style={[styles.more6Icon, styles.iconLayout1]}
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
        style={[styles.vectorIcon2, styles.vectorIconLayout2]}
        contentFit="cover"
        source={require("../assets/vector2.png")}
      />
      <Image
        style={[styles.vectorIcon3, styles.vectorIconLayout1]}
        contentFit="cover"
        source={require("../assets/vector4.png")}
      />
      <Image
        style={[styles.vectorIcon4, styles.vectorIconLayout1]}
        contentFit="cover"
        source={require("../assets/vector4.png")}
      />
      <Image
        style={[styles.vectorIcon5, styles.vectorIconLayout1]}
        contentFit="cover"
        source={require("../assets/vector4.png")}
      />
      <Image
        style={[styles.vectorIcon6, styles.vectorIconLayout1]}
        contentFit="cover"
        source={require("../assets/vector4.png")}
      />
      <Image
        style={[styles.vectorIcon7, styles.vectorIconLayout1]}
        contentFit="cover"
        source={require("../assets/vector4.png")}
      />
      <Image
        style={[styles.vectorIcon8, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/vector5.png")}
      />
      <Image
        style={[styles.vectorIcon9, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/vector6.png")}
      />
      <View style={styles.button}>
        <Image
          style={[styles.buttonChild, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/rectangle-12.png")}
        />
        <Text style={[styles.getStarted, styles.getPosition]}>Get Started</Text>
        <Text style={[styles.getStarted1, styles.getStarted1Typo]}>
          Get Started
        </Text>
      </View>
      <View style={[styles.aboutUsScreenExpertItem, styles.aboutPosition]} />
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
      <Text style={[styles.weAreCollaborating, styles.getStarted1Typo]}>
        We are collaborating with Mr. Daryl Hernandez, an entomologist with 12
        years of experience in urban pest management, agriculture, and the
        pesticide industry. Mr. Hernandez is a key expert from Raidex Solutions
        Inc., a company renowned for its innovative pest control solutions. His
        extensive knowledge and practical expertise in managing agricultural
        pests provide a solid foundation for our research efforts.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  aboutPosition: {
    borderRadius: Border.br_xl,
    left: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
  },
  expertTypo: {
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
  vectorIconLayout2: {
    width: "5.56%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  vectorIconLayout1: {
    bottom: "50.47%",
    top: "48.59%",
    width: "1.67%",
    height: "0.94%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  vectorIconLayout: {
    bottom: "65.94%",
    top: "32.34%",
    width: "2.22%",
    height: "1.72%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
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
  getStarted1Typo: {
    color: Color.colorSnow,
    textAlign: "center",
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    position: "absolute",
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
  aboutUsScreenExpertChild: {
    height: "15.78%",
    top: "-3.12%",
    bottom: "87.34%",
    backgroundColor: Color.colorAntiquewhite,
  },
  expert: {
    height: "4.53%",
    width: "25.28%",
    top: "6.25%",
    left: "38.33%",
    fontSize: FontSize.size_lgi,
  },
  more6Icon: {
    height: "3.75%",
    width: "6.67%",
    top: "6.56%",
    right: "85.83%",
    bottom: "89.69%",
    left: "7.5%",
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
  vectorIcon3: {
    right: "53.89%",
    left: "44.44%",
  },
  vectorIcon4: {
    right: "51.11%",
    left: "47.22%",
  },
  vectorIcon5: {
    right: "48.33%",
    left: "50%",
  },
  vectorIcon6: {
    right: "45.56%",
    left: "52.78%",
  },
  vectorIcon7: {
    right: "42.78%",
    left: "55.56%",
  },
  vectorIcon8: {
    right: "10.28%",
    left: "87.5%",
  },
  vectorIcon9: {
    right: "85.56%",
    left: "12.22%",
  },
  buttonChild: {
    top: "0%",
    bottom: "0%",
    borderRadius: Border.br_4xs,
    left: "0%",
    right: "0%",
    height: "100%",
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
    top: "16.72%",
    right: "9.72%",
    bottom: "52.5%",
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
  aboutUsScreenExpertItem: {
    height: "14.53%",
    top: "87.81%",
    bottom: "-2.34%",
    backgroundColor: Color.colorPeachpuff,
  },
  homeIcon: {
    height: "5.31%",
    width: "10%",
    right: "82.78%",
    bottom: "3.59%",
    left: "7.22%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  vector: {
    left: "83.06%",
    right: "6.11%",
    bottom: "4.69%",
    width: "10.83%",
    height: "4.22%",
  },
  taskIcon: {
    height: "4.84%",
    width: "9.44%",
    right: "59.72%",
    bottom: "4.38%",
    left: "30.83%",
  },
  controlIcon: {
    height: "5%",
    width: "10.28%",
    right: "33.33%",
    bottom: "4.22%",
    left: "56.39%",
  },
  weAreCollaborating: {
    height: "37.5%",
    width: "90%",
    top: "50.63%",
    left: "3.89%",
    fontSize: FontSize.size_smi,
  },
  aboutUsScreenExpert: {
    backgroundColor: Color.colorMediumseagreen,
    flex: 1,
    height: 640,
    overflow: "hidden",
    width: "100%",
  },
});

export default AboutUsScreenExpert;
