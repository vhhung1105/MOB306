import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";
import {useState} from 'react';

export default function App() {
  // const [tên_biến_state, tên_pt_thay_đổi_gt_state] = useState(gt_mặc định);
  const [countState, setCountState] = useState(0);
  const [showStatus, setShowStatus] = useState(true);

  // Phần code logic:
  let name = "VHH";
  let age = 20;

  if (age > 20) {
    name = 'NDAT - Người lớn';
  } else {
    name = 'NDAT - Trẻ em';
  }
  // Hàm hiển thị nội dung theo mong muốn
  function showData (label = '', value = '') {
    return label + ': ' + value;
  }
  // arrow function
  const arrowShowData = (label = '', value = '') => {
    return label + ': ' + value;
  };
  const arrowMiniShowData = (label = '', value = '') => (label + ': ' + value);

  // Ví dụ về tăng biến count
  let count = 0;
  const tangCount = () => count++;

  return (
    <View style={styles.container}>
      <Button
        title={'Bấm để Ẩn Hiện giao diện'}
        onPress={() => setShowStatus(!showStatus)}
      />
      {
        showStatus
          ? <>
              <Text style={styles.text}>Count: {count}</Text>
              <Button
                title={'Bấm để tăng gt count'}
                onPress={() => tangCount()}
              />
            </>
          : null
      }


      <Text style={styles.text}>Count state: {countState}</Text>
      <Button
        title={'Bấm để tăng gt countState'}
        onPress={() => setCountState(countState + 1)}
      />


      {/* Đưa giá trị biến vào trong cặp ngoặc nhọn {} */}
      <Text style={styles.text}> {name} - PH12345</Text>
      <Text style={styles.text}>
        {arrowShowData('Email', 'hungvhph19351@fpt.edu.vn')}
      </Text>
      <Text style={styles.text}>
        {arrowMiniShowData('SDT', '0817658303')}
      </Text>
      {/* Alt + Shift + Mũi tên xuống: để sao chép dòng */}
      {/* Ctrl + D: Bôi vào những phần nội dung giống nhau */}
      {/* Ctrl + X: Nếu không bôi văn bản thì sẽ xoá cả dòng */}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  text: {
    // tên của phần thay đổi giao diện
    color: "red",
    fontStyle: "italic",
    fontWeight: "bold",
    fontSize: 30,
  },
});