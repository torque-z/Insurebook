import {
  Text,
  Button,
  View,
  Image,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import Modal from "react-native-modal";
import { FontAwesome } from "@expo/vector-icons";
import SelectDropdown from "react-native-select-dropdown";
import React, { useState } from "react";
import OutlineInput from "react-native-outline-input";
import styles from "./Styles";
import * as ImagePicker from "expo-image-picker";
import DateTimePicker from "@react-native-community/datetimepicker";
import TopBar from "./common/TopBar";

const VehicleInput = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isDateTimePickerVisible, setisDateTimePickerVisible] = useState(false);
  const [pickedImagePath, setPickedImagePath] = useState("");

  const [isModalVisible, setIsModalVisible] = React.useState(false);
  const handleModal = () => setIsModalVisible(() => !isModalVisible);

  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);

  const data = ["2 Wheleer", "4 Wheeler", "Misc"];

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setShow(false);
    setDate(currentDate);
  };

  const showImagePicker = async () => {
    const permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setPickedImagePath(result.assets[0].uri);
      console.log(result.assets[0].uri);
    }
  };

  const openCamera = async () => {
    const permissionResult = await ImagePicker.requestCameraPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("You've refused to allow this appp to access your camera!");
      return;
    }

    const result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setPickedImagePath(result.assets[0].uri);
      console.log(result.assets[0].uri);
    }
  };

  const changeDate = () => {
    setShow(true);
  };
  return (
    <SafeAreaView style={styles.mainContainer}>
      <TopBar title="Add Customer" />
      <View style={{ marginTop: 25 }}>
        <View style={styles.btnm}>
          <OutlineInput
            value={email}
            onChangeText={(e) => setEmail(e)}
            label="Name"
          />
        </View>
        <View style={styles.btnm}>
          <OutlineInput
            value={password}
            onChangeText={(e) => setPassword(e)}
            label="Vehicle Number"
          />
        </View>
        <View style={styles.btnm}>
          <OutlineInput
            value={password}
            onChangeText={(e) => setPassword(e)}
            label="Vehicle Owner Name"
          />
        </View>
        <View style={styles.btnm}>
          <OutlineInput
            value={password}
            onChangeText={(e) => setPassword(e)}
            label="Phone Number"
          />
        </View>
        <View style={styles.btnm}>
          <OutlineInput
            height={120}
            value={password}
            onChangeText={(e) => setPassword(e)}
            label="Notes"
          />
        </View>
        <View style={{ marginLeft: 0 }}>
          <SelectDropdown
            data={data}
            // onSelect={(selectedItem, index) => {
            //   // this.setCategoryType(selectedItem);
            // }}
            defaultButtonText={"Select Location"}
            buttonStyle={styles.dropdown1BtnStyle}
            buttonTextStyle={styles.dropdown1BtnTxtStyle}
            renderDropdownIcon={(isOpened) => {
              return (
                <FontAwesome
                  name={isOpened ? "chevron-up" : "chevron-down"}
                  color={"#444"}
                  size={10}
                />
              );
            }}
            dropdownIconPosition={"right"}
            dropdownStyle={styles.dropdown1DropdownStyle}
          />
        </View>
        <View
          style={{
            width: "80%",
            height: 80,
            flexDirection: "column",
            justifyContent: "space-around",
          }}
        >
          <TouchableOpacity
            onPress={changeDate}
            style={{ flexDirection: "row", justifyContent: "space-around" }}
          >
            <Text style={{ color: "#404143" }}>Start Date</Text>
            <Text>
              {date.getDate() +
                "/" +
                date.getMonth() +
                "/" +
                date.getFullYear()}
            </Text>
            {show && (
              <DateTimePicker
                testID="dateTimePicker"
                value={date}
                mode={"date"}
                is24Hour={true}
                onChange={onChange}
              />
            )}
          </TouchableOpacity>
          <TouchableOpacity
            onPress={changeDate}
            style={{ flexDirection: "row", justifyContent: "space-around" }}
          >
            <Text style={{ color: "#404143" }}>End Date</Text>
            <Text>
              {date.getDate() +
                "/" +
                date.getMonth() +
                "/" +
                date.getFullYear()}
            </Text>
            {show && (
              <DateTimePicker
                testID="dateTimePicker"
                value={date}
                mode={"date"}
                is24Hour={true}
                onChange={onChange}
              />
            )}
          </TouchableOpacity>
        </View>

        <View style={{ marginTop: 20 }}>
          <View style={styles.separator} />
          <Button title="Add Image" onPress={handleModal} />
          <Modal isVisible={isModalVisible}>
            <View style={{ flex: 1 }}>
              <View style={styles.btni}>
                <Button onPress={showImagePicker} title="Select an image" />
              </View>
              <View style={styles.btni}>
                <Button onPress={openCamera} title="Open camera" />
              </View>
              <Button title="Hide modal" onPress={handleModal} />
            </View>
          </Modal>
        </View>

        <View style={{ marginTop: 20 }}>
          <Button title="Add Customer"></Button>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default VehicleInput;
