import * as Sharing from "expo-sharing";
import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Clipboard, FlatList } from "react-native";
import { theme } from "../utils/color";
import Card from "../components/Card";
import Message from "../components/Message";
import Button from "../components/Button";
import CustomModal from "../components/Modal";
import axios from "axios";

function Home() {
  const [modalVisible, setModalVisible] = useState(false);
  const [select, setSelect] = useState(-1);
  const [data, setData] = useState([]);
  const [share, setShare] = useState(null);
  const [update, setUpdate] = useState(10);
  const [alert, setAlert] = useState(false);

  const reset = () => {
    setSelect(-1);
  };

  const openModal = () => {
    if (select !== -1) {
      setModalVisible(true);
    } else {
      setAlert(true);
    }
  };

  const selectFilter = () => {
    setModalVisible(false);
  };

  const handleSelectMessage = (id) => {
    setSelect(id);
  };

  const handleUpdate = () => {
    setUpdate((prevState) => prevState + 10);
    setSelect(-1);
  };

  const handleAlert = () => {
    setAlert(false);
  };

  useEffect(() => {
    axios
      .get(`https://api.quotable.io/quotes?limit=${update}`)
      .then((res) => {
        setData(res.data.results);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [update]);

  useEffect(() => {
    if (data.length > 0 && select !== 9999) {
      setShare({
        author: data[select]?.author,
        content: data[select]?.content,
      });
    }
  }, [data, select]);

  const handleShare = async () => {
    const shareOptions = {
      message: share.content + "-" + share.author,
    };

    try {
      await Sharing.shareAsync(shareOptions);
    } catch (error) {
      console.error(error);
    }
  };

  const handleCopyText = async () => {
    const text = share.content + "-" + share.author;

    try {
      await Clipboard.setString(text);
      console.log("Text copied to clipboard:", text);
    } catch (error) {
      console.error("Error copying text:", error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.btnBox}>
        <Button title={"새로고침"} color={theme.green} onPress={handleUpdate} />
        <Button title={"공유하기"} color={theme.blue} onPress={openModal} />
        <Button title={"초기화"} color={theme.red} onPress={reset} />
      </View>
      <CustomModal modalVisible={modalVisible}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>전달하기</Text>

            <View style={styles.shareBox}>
              <Text>{share ? share.content : ""}</Text>
              <Text>- {share ? share.author : ""}</Text>
            </View>

            <View style={styles.modalBtnBox}>
              <Button title={"공유"} color={theme.blue} onPress={handleShare} />
              <Button
                title={"복사"}
                color={theme.green}
                onPress={handleCopyText}
              />
              <Button title={"닫기"} color={theme.red} onPress={selectFilter} />
            </View>
            <Text style={styles.des}>메세지 박스 안 내용만 복사됩니다.</Text>
          </View>
        </View>
      </CustomModal>
      <CustomModal modalVisible={alert}>
        <View style={styles.modalContainer}>
          <View style={styles.alertContent}>
            <Text style={styles.alert}>선택을 먼저 해주세요.</Text>

            <View style={styles.modalBtnBox}>
              <Button title={"확인"} color={theme.blue} onPress={handleAlert} />
            </View>
          </View>
        </View>
      </CustomModal>
      <Card>
        <FlatList
          data={data}
          renderItem={({ item, index }) => {
            return (
              <Message
                key={index}
                id={index}
                select={select}
                title={item.author}
                message={item.content}
                onPress={() => handleSelectMessage(index)}
              />
            );
          }}
        />
      </Card>
    </View>
  );
}

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.white,
  },
  btnBox: {
    width: "100%",
    justifyContent: "center",
    marginVertical: 10,
    flexDirection: "row",
  },

  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(34, 32, 32, 0.5)",
  },
  modalContent: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
    borderWidth: 1,
    borderColor: theme.gray,
  },
  modalTitle: {
    fontSize: 20,
    marginBottom: 15,
  },
  modalBtnBox: {
    flexDirection: "row",
    marginTop: 10,
  },

  des: {
    fontSize: 10,
    color: "gray",
    marginTop: 10,
  },

  shareBox: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: theme.gray,
    marginVertical: 10,
    width: "70%",
    padding: 10,
  },

  alertContent: {
    backgroundColor: "white",
    padding: 40,
    borderRadius: 10,
    alignItems: "center",
    borderWidth: 1,
    borderColor: theme.gray,
  },

  alert: {
    fontSize: 15,
    marginBottom: 15,
    padding: 10,
  },
});
