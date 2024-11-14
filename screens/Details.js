import * as React from "react";
import { StyleSheet, View, Text, Pressable, ActivityIndicator } from "react-native";
import { Image } from "expo-image"; // Use expo-image to handle images
import { useNavigation } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { FontSize, FontFamily, Border, Color } from "../GlobalStyles";
import axios from 'axios';

const Details = () => {
  const navigation = useNavigation();
  const [isPressed, setIsPressed] = React.useState(false);

  // State to store the fetched image URL
  const [imageUrl, setImageUrl] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(true);  // To show a loading indicator

  // Fetch data from API
  React.useEffect(() => {
    axios.get("https://production-myentobackend.onrender.com/api/v1/auth/get-all-results")
      .then(response => {
        // Assuming the API returns an image URL in the response
        if (response.data && response.data.imageUrl) {
          setImageUrl(response.data.imageUrl);
        } else {
          console.log("No image URL found in response");
        }
      })
      .catch(error => {
        console.error("Error fetching data:", error);
      })
      .finally(() => {
        setIsLoading(false);  // Set loading to false after the fetch is complete
      });
  }, []);  // Empty dependency array means this effect runs once when the component mounts

  // Load fonts
  const [fontsLoaded] = useFonts({
    "Poppins-Bold": require("../assets/fonts/Poppins-Bold.ttf"),
  });

  if (!fontsLoaded || isLoading) {
    return <ActivityIndicator size="large" color={Color.colorBlack} style={styles.loading} />;
  }

  const handleControl = () => {
    // Navigate to ControlOn or any other screen
    navigation.navigate("ControlOn");
  };

  return (
    <View style={styles.aboutUsScreen}>
      <View style={[styles.aboutUsScreenChild, styles.aboutChildPosition]} />
      <Text style={[styles.about, styles.teamTypo]}>Details</Text>
      <Pressable
        style={styles.vectorIconPNG}
        onPress={() => navigation.navigate("Stats")}
      >
        <Image
          style={styles.vectorIconPNG}
          contentFit="cover"
          source={require("../assets/vector7.png")}
        />
      </Pressable>
      <Image
        style={[styles.more3Icon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/more-3.png")}
      />
      
      {/* Conditionally render the image if imageUrl is available */}
      {imageUrl ? (
        <Image
          style={styles.fetchedImage}
          contentFit="cover"
          source={{ uri: imageUrl }} // Use the image URL from the API
        />
      ) : (
        <Text style={styles.errorMessage}>Failed to load image</Text>
      )}
    </View>
  );
};
  // State for displaying additional detection information
  const [detectionInfo, setDetectionInfo] = useState({
    numberOfBugs: 0,
    bugsConfidenceScore: 0,
    numberOfPanicles: 0,
    paniclesConfidenceScore: 0,
  });

    const panicleCounts = detections.map((d) => d.numberOfPanicles);
    const bugCounts = detections.map((d) => d.numberOfBugs);

        // Update detection information (using the most recent detection)
        if (detections.length > 0) {
          const latestDetection = detections[detections.length - 1];
          setDetectionInfo({
            numberOfBugs: latestDetection.numberOfBugs,
            bugsConfidenceScore: latestDetection.bugsConfidenceScore,
            numberOfPanicles: latestDetection.numberOfPanicles,
            paniclesConfidenceScore: latestDetection.paniclesConfidenceScore,
          });
        }

  {/* New Container for Additional Data */}
  <View style={styles.infoContainer}>
  <Text style={styles.infoText}>
    Bugs Detected: {detectionInfo.numberOfBugs}
  </Text>
  <Text style={styles.infoText}>
    Bugs Confidence: {detectionInfo.bugsConfidenceScore.toFixed(2)}%
  </Text>
  <Text style={styles.infoText}>
    Panicles Detected: {detectionInfo.numberOfPanicles}
  </Text>
  <Text style={styles.infoText}>
    Panicles Confidence: {detectionInfo.paniclesConfidenceScore.toFixed(2)}%
  </Text>
</View>

const styles = StyleSheet.create({
  aboutChildPosition: {
    borderRadius: Border.br_xl,
    left: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
  },
  vectorIconPNG: {
    height: "15.47%",
    width: "25.53%",
    top: "7.28%",
    right: "86.81%",
    bottom: "93.25%",
    left: "3.67%",
    position: "absolute",
    overflow: "hidden"
  },
  addDeviceChild: {
    height: "85%",
    top: "25.03%",
    right: "0%",
    bottom: "-2.03%",
    left: "0%",
    borderRadius: Border.br_xl,
    backgroundColor: "#132A17",
    position: "absolute",
    width: "100%",
  },
  teamTypo: {
    textAlign: "center",
    fontFamily: 'Poppins-SemiBold',
    fontWeight: "600",
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  aboutUsScreenChild: {
    height: "15.78%",
    top: "-3.44%",
    bottom: "87.66%",
    backgroundColor: "#F9E2D0",
  },
  about: {
    height: "8.53%",
    width: "40.28%",
    top: "6.78%",
    left: "30.5%",
    fontSize: 25,
    fontFamily: 'Poppins-SemiBold',
    color: Color.colorBlack,
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 2,
  },
  aboutUsScreen: {
    backgroundColor: Color.colorMediumseagreen,
    flex: 1,
    height: "100%",
    overflow: "hidden",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  Instruct: {
    color: "white",
    fontSize: 20,
    fontFamily: 'Poppins-SemiBold',
    bottom: 100,
    right: 90,
    textShadowColor: '#000',  
    textShadowOffset: { width: 1, height: 1 },  
    textShadowRadius: 3,  
    letterSpacing: 1, 
  },
  Description: {
    color: "#F6D4BA",
    fontSize: 18,
    fontFamily: 'Poppins-SemiBold',
    bottom: 85,
    right: 5,
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 2,
  },
  buttonContainer: {
    backgroundColor: "#3A7D44", // Button background color
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 100,
    elevation: 3,
  },
  buttonText: {
    fontSize: 30,
    fontFamily: "Poppins-Bold",
    color: "#fff", // Button text color
    fontWeight: "bold",
  },
  fetchedImage: {
    width: 300,  // Adjust width as needed
    height: 300, // Adjust height as needed
    borderRadius: 10,
    marginTop: 20,  // Add space between elements
  },
  loading: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  errorMessage: {
    fontSize: 18,
    color: "red",
    textAlign: "center",
    marginTop: 20,
  },
  infoContainer: {
    backgroundColor: '#f1f1f1',
    padding: 15,
    borderRadius: 10,
    marginTop: 20,
    width: '90%',
    alignItems: 'center',
    top: 550,
    left: 20,
    },
    infoText: {
    fontSize: 16,
    marginBottom: 5,
},
});

export default Details;
