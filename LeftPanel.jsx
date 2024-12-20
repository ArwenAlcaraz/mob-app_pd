import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Border, FontSize, Color } from "../GlobalStyles";

const LeftPanel = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.leftPanel}>
      <View style={styles.leftPanelChild} />
      <View style={styles.leftPanelChild} />
      <Text style={[styles.home, styles.homeTypo]}>HOME</Text>
      <Image
        style={[styles.more2Icon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/more-3.png")}
      />
      <View style={[styles.button, styles.buttonShadowBox2]}>
        <View style={[styles.buttonChild, styles.buttonChildPosition]} />
        <Text style={[styles.getStarted, styles.getTypo4]}>Get Started</Text>
        <Text style={[styles.getStarted1, styles.getTypo4]} />
      </View>
      <View style={[styles.button1, styles.buttonShadowBox1]}>
        <View style={[styles.buttonChild, styles.buttonChildPosition]} />
        <Text style={[styles.getStarted2, styles.getTypo3]}>Get Started</Text>
        <Text style={[styles.getStarted3, styles.getTypo3]} />
      </View>
      <View style={[styles.button2, styles.buttonPosition]}>
        <View style={[styles.buttonChild, styles.buttonChildPosition]} />
        <Text style={[styles.getStarted2, styles.getTypo3]}>Get Started</Text>
        <Text style={[styles.getStarted3, styles.getTypo3]} />
      </View>
      <View style={[styles.button3, styles.buttonShadowBox]}>
        <View style={[styles.buttonChild, styles.buttonChildPosition]} />
        <Text style={[styles.getStarted2, styles.getTypo3]}>Get Started</Text>
        <Text style={[styles.getStarted3, styles.getTypo3]} />
      </View>
      <View style={[styles.button4, styles.buttonShadowBox]}>
        <View style={[styles.buttonChild, styles.buttonChildPosition]} />
        <Text style={[styles.getStarted2, styles.getTypo3]}>Get Started</Text>
        <Text style={[styles.getStarted3, styles.getTypo3]} />
      </View>
      <View style={[styles.button5, styles.buttonShadowBox]}>
        <View style={[styles.buttonChild, styles.buttonChildPosition]} />
        <Text style={[styles.getStarted2, styles.getTypo3]}>Get Started</Text>
        <Text style={[styles.getStarted3, styles.getTypo3]} />
      </View>
      <View style={styles.button6}>
        <View style={[styles.buttonChild3, styles.buttonChildPosition]} />
        <Text style={[styles.getStarted12, styles.getTypo2]}>Get Started</Text>
        <Text style={[styles.getStarted13, styles.getTypo2]} />
      </View>
      <Text style={styles.aboutRiceEar}>ABOUT RICE EAR BUGS</Text>
      <Image
        style={[styles.leftPanelInner, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-3.png")}
      />
      <Image
        style={[styles.outputOnlinepngtools22, styles.ellipseIconLayout]}
        contentFit="cover"
        source={require("../assets/outputonlinepngtools-2-2.png")}
      />
      <Text style={[styles.myento, styles.myentoText]}>MyEnto</Text>
      <View style={[styles.button7, styles.button7Layout]}>
        <Image
          style={[styles.rectangleIcon, styles.buttonChildPosition]}
          contentFit="cover"
          source={require("../assets/rectangle-1.png")}
        />
        <Text style={[styles.getStarted14, styles.getTypo1]}>Get Started</Text>
        <Text style={[styles.getStarted15, styles.getTypo1]} />
      </View>
      <Text style={[styles.historyData, styles.usernameTypo]}>
        History Data
      </Text>
      <Image
        style={[styles.dicons, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/AddDevice.png")}
      />
      <Image
        style={[styles.dicons1, styles.diconsPosition]}
        contentFit="cover"
        source={require("../assets/info.png")}
      />
      <Image
        style={[styles.dicons2, styles.diconsPosition]}
        contentFit="cover"
        source={require("../assets/DeviceStats.png")}
      />
      <View style={styles.button8}>
        <View style={[styles.buttonChild4, styles.buttonChildPosition]} />
        <Text style={[styles.getStarted16, styles.getTypo]}>Get Started</Text>
        <Text style={[styles.getStarted17, styles.getTypo]}>Get Started</Text>
      </View>
      <Image
        style={[styles.vectorIcon, styles.vectorIconPosition]}
        contentFit="cover"
        source={require("../assets/vector6.png")}
      />
          <Pressable
        style={[styles.vectorIcon, styles.vectorIconPosition]}
        onPress={() => navigation.navigate("HomeScreen")}
      >
      </Pressable>
      <Text style={[styles.username, styles.usernameTypo]}>USERNAME</Text>
      <Pressable
        style={[styles.information, styles.addDeviceTypo]}
        onPress={() => navigation.navigate("AboutUsScreen")}
      >
        <Text style={styles.information1}>INFORMATION</Text>
      </Pressable>

      <Text style={[styles.settings, styles.settingsTypo]}>SETTINGS</Text>
      <Pressable
        style={[styles.logOut, styles.logOutPosition]}
        onPress={() => navigation.navigate("LogOut")}
      >
        <Text style={styles.logOut1}>LOG OUT</Text>
      </Pressable>
      <Image
        style={[styles.vectorIcon1, styles.vectorIconPosition]}
        contentFit="cover"
        source={require("../assets/information.png")}
      />
      <Image
        style={[styles.vectorIcon2, styles.vectorIconPosition]}
        contentFit="cover"
        source={require("../assets/settings.png")}
      />
      <Image
        style={[styles.vectorIcon3, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/logout.png")}
      />
      <Pressable
        style={styles.layer3}
        onPress={() => navigation.navigate("SettingsDropDown")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/layer-3.png")}
        />
      </Pressable>
      <Image
        style={[styles.ellipseIcon, styles.ellipseIconLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-31.png")}
      />
      <Image
        style={styles.outputOnlinepngtools221}
        contentFit="cover"
        source={require("../assets/outputonlinepngtools-2-21.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  homeTypo: {
    textAlign: "center",
    fontFamily: 'Poppins-SemiBold',
    fontWeight: "600",
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  buttonShadowBox2: {
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
  buttonChildPosition: {
    borderRadius: Border.br_4xs,
    left: "0%",
    right: "0%",
    top: "0%",
    bottom: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
  },
  getTypo4: {
    display: "none",
    fontSize: FontSize.size_lg,
    left: "20%",
    top: "26.18%",
    width: "60.38%",
    height: "49.24%",
    textAlign: "center",
    fontFamily: 'Poppins-SemiBold',
    fontWeight: "600",
    position: "absolute",
  },
  buttonShadowBox1: {
    left: "51.11%",
    right: "16.39%",
    width: "32.5%",
    height: "15.94%",
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
  getTypo3: {
    width: "60.34%",
    height: "49.22%",
    display: "none",
    fontSize: FontSize.size_lg,
    left: "20%",
    top: "26.18%",
    textAlign: "center",
    fontFamily: 'Poppins-SemiBold',
    fontWeight: "600",
    position: "absolute",
  },
  buttonPosition: {
    bottom: "29.69%",
    top: "54.38%",
  },
  buttonShadowBox: {
    left: "15.28%",
    right: "52.22%",
    width: "32.5%",
    height: "15.94%",
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
  getTypo2: {
    top: "26%",
    height: "49%",
    display: "none",
    fontSize: FontSize.size_lg,
    left: "20%",
    width: "60.38%",
    textAlign: "center",
    fontFamily: 'Poppins-SemiBold',
    fontWeight: "600",
    position: "absolute",
  },
  ellipseIconLayout: {
    width: "31.06%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
    left: "24%",
  },
  myentoText: {
    textShadowRadius: 4,
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowColor: "rgba(0, 0, 0, 0.25)",
  },
  button7Layout: {
    width: "23.61%",
    left: "19.72%",
  },
  getTypo1: {
    top: "26.13%",
    width: "60.35%",
    height: "49.25%",
    display: "none",
    fontSize: FontSize.size_lg,
    left: "20%",
    textAlign: "center",
    fontFamily: 'Poppins-SemiBold',
    fontWeight: "600",
    position: "absolute",
  },
  usernameTypo: {
    color: Color.colorSeagreen,
    textAlign: "center",
    fontFamily: 'Poppins-SemiBold',
    fontWeight: "600",
    position: "absolute",
  },
  addDeviceTypo: {
    left: "55.56%",
    color: Color.colorSeagreen,
    height: "4.81%",
    width: "42.61%",
    fontSize: FontSize.size_smi,
    textAlign: "center",
    fontFamily: 'Poppins-SemiBold',
    fontWeight: "600",
    position: "absolute",
  },
  diconsPosition: {
    top: "54.84%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  getTypo: {
    top: "26.15%",
    height: "49.22%",
    display: "none",
    fontSize: FontSize.size_lg,
    left: "20%",
    width: "60.38%",
    textAlign: "center",
    fontFamily: 'Poppins-SemiBold',
    fontWeight: "600",
    position: "absolute",
  },
  vectorIconPosition: {
    left: "6.39%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  logOutPosition: {
    left: "17.78%",
    position: "absolute",
  },
  settingsTypo: {
    color: "white",
    fontSize: 22,
    textShadowRadius: 4,
    textShadowOffset: {
      width: 0,
      height: 4,
      left: 17,
    },
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    textAlign: "center",
    fontFamily: 'Poppins-SemiBold',
    fontWeight: "600",
  },
  leftPanelChild: {
    height: "15.78%",
    top: "-3.12%",
    right: "0.28%",
    bottom: "87.34%",
    left: "-0.28%",
    borderRadius: Border.br_xl,
    backgroundColor: Color.colorAntiquewhite,
    position: "absolute",
    width: "100%",
  },
  home: {
    width: "25.28%",
    top: "6.25%",
    fontSize: FontSize.size_lgi,
    color: Color.colorBlack,
    left: "38.06%",
    height: "4.53%",
  },
  more2Icon: {
    height: "3.75%",
    width: "6.67%",
    top: "6.56%",
    right: "86.11%",
    bottom: "89.69%",
    left: "7.22%",
    maxWidth: "100%",
    position: "absolute",
  },
  buttonChild: {
    backgroundColor: Color.colorGray_100,
  },
  getStarted: {
    color: Color.colorBlack,
  },
  getStarted1: {
    color: Color.colorSnow_100,
  },
  button: {
    height: "26.56%",
    bottom: "1.41%",
    left: "9.72%",
    right: "9.72%",
    top: "72.03%",
    width: "80.56%",
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
  },
  getStarted2: {
    color: Color.colorBlack,
  },
  getStarted3: {
    color: Color.colorSnow_100,
  },
  button1: {
    bottom: "46.88%",
    top: "37.19%",
  },
  button2: {
    left: "51.11%",
    right: "16.39%",
    width: "32.5%",
    height: "15.94%",
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
  button3: {
    bottom: "46.88%",
    top: "37.19%",
  },
  button4: {
    bottom: "46.88%",
    top: "37.19%",
  },
  button5: {
    bottom: "29.69%",
    top: "54.38%",
  },
  buttonChild3: {
    backgroundColor: Color.colorPeachpuff_100,
  },
  getStarted12: {
    color: Color.colorBlack,
  },
  getStarted13: {
    color: Color.colorSnow_100,
  },
  button6: {
    bottom: "24.84%",
    height: "3.13%",
    left: "9.72%",
    right: "9.72%",
    top: "72.03%",
    width: "80.56%",
    position: "absolute",
  },
  aboutRiceEar: {
    width: "41.39%",
    left: "29.17%",
    color: Color.colorMediumseagreen,
    fontSize: FontSize.size_smi,
    height: "3.13%",
    top: "72.03%",
    textAlign: "center",
    fontFamily: 'Poppins-SemiBold',
    fontWeight: "600",
    position: "absolute",
  },
  leftPanelInner: {
    height: "14.22%",
    width: "25.83%",
    top: "14.84%",
    right: "36.11%",
    bottom: "70.94%",
    left: "38.06%",
    position: "absolute",
  },
  outputOnlinepngtools22: {
    height: "13.25%",
    top: "16.56%",
    right: "38.06%",
    bottom: "72.19%",
    left: "40.89%",
  },
  myento: {
    height: "5%",
    width: "45.56%",
    top: "29.06%",
    left: "28.06%",
    fontSize: FontSize.size_8xl,
    letterSpacing: 4.3,
    color: Color.colorDarkslategray,
    textAlign: "center",
    fontFamily: 'Poppins-SemiBold',
    fontWeight: "600",
    position: "absolute",
  },
  rectangleIcon: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  getStarted14: {
    color: Color.colorBlack,
  },
  getStarted15: {
    color: Color.colorSnow_100,
  },
  button7: {
    height: "12.5%",
    top: "37.5%",
    right: "56.67%",
    bottom: "50%",
    left: "19.72%",
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
  historyData: {
    top: "49.06%",
    height: "2.81%",
    color: Color.colorSeagreen,
    fontSize: FontSize.size_smi,
    left: "19.72%",
    width: "23.61%",
  },
  addDevice: {
    top: "49.06%",
  },
  information: {
    top: "53.24%",
    left: "25.98%",
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 2,
  },
  dicons: {
    height: "8.91%",
    width: "19.44%",
    top: "38.91%",
    right: "22.78%",
    bottom: "52.19%",
    left: "57.78%",
    position: "absolute",
  },
  dicons1: {
    height: "11.56%",
    width: "20%",
    right: "22.22%",
    bottom: "33.59%",
    left: "57.78%",
  },
  dicons2: {
    height: "13.44%",
    width: "23.89%",
    right: "56.39%",
    bottom: "31.72%",
    left: "19.72%",
  },
  buttonChild4: {
    backgroundColor: "#132A17",
  },
  getStarted16: {
    color: Color.colorBlack,
  },
  getStarted17: {
    color: Color.colorSnow_100,
  },
  button8: {
    height: "100.63%",
    top: "-0.62%",
    right: "20.83%",
    left: "-1.39%",
    bottom: "0%",
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    width: "80.56%",
    position: "absolute",
  },
  vectorIcon: {
    height: "2.5%",
    width: "4.17%",
    top: "3.59%",
    right: "89.44%",
    bottom: "93.91%",
  },
  username: {
    top: "30%",
    left: "18.89%",
    fontSize: 27,
    textShadowRadius: 4,
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowColor: "rgba(0, 0, 0, 0.25)",
  },
  information1: {
    top: "-299.06%",
    left: "-89.98%",
    color: Color.colorWhite,
    fontSize: 22,
    textShadowRadius: 4,
    textShadowOffset: {
      width: 0,
      height: 4,
      left: 25,
    },
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    textAlign: "center",
    fontFamily: 'Poppins-SemiBold',
    fontWeight: "600",
  },
  settings: {
    top: "48.44%",
    left: "17.78%",
    position: "absolute",
  },
  logOut1: {
    color: Color.colorWhite,
    fontSize: 22,
    textShadowRadius: 4,
    textShadowOffset: {
      width: 0,
      height: 4,
      left: 25,
    },
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    textAlign: "center",
    fontFamily: 'Poppins-SemiBold',
    fontWeight: "600",
  },
  logOut: {
    top: "58.91%",
  },
  vectorIcon1: {
    height: "3.71%",
    width: "7.89%",
    top: "39.44%",
    right: "84.72%",
    bottom: "56.25%",
  },
  vectorIcon2: {
    height: "3.84%",
    width: "8.61%",
    top: "48.81%",
    right: "85%",
    bottom: "47.34%",
  },
  vectorIcon3: {
    height: "3.87%",
    width: "6.83%",
    top: "58.75%",
    right: "85.83%",
    bottom: "36.72%",
    left: "7.22%",
    maxWidth: "100%",
    position: "absolute",
  },
  icon: {
    height: "100%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    width: "100%",
  },
  layer3: {
    left: "52.78%",
    top: "50%",
    right: "54.72%",
    bottom: "48.91%",
    width: "2.5%",
    height: "1.09%",
    position: "absolute",
  },
  ellipseIcon: {
    height: 120,
    width: 140,
    top: "15.16%",
    right: "50.28%",
    bottom: "71.25%",
    left: "26.67%",
  },
  outputOnlinepngtools221: {
    height: "10.78%",
    width: "23.28%",
    top: "16.88%",
    bottom: "72.34%",
    left: "27.5%",
    right: "52.22%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  leftPanel: {
    backgroundColor: Color.colorMediumseagreen,
    flex: 1,
    height: 640,
    overflow: "hidden",
    width: "100%",
  },
});

export default LeftPanel;
