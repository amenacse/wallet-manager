import React from "react"
import { Text, View } from "react-native";
import Toast from "react-native-toast-message";
import Colors from "../../../resources/colors";
import { CustomIcon } from "../icons/custom-icon";

const commonStyles = {
    container: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        minHeight: 48,
        padding: 14,
        width: "100%",
        shadowColor: Colors.black,
        shadowOpacity: 0.1,
        shadowOffset: {width: 0, height: 10},
        elevation: 10
    },
    contentContainer: {
        paddingHorizontal: 14
    },
    text: {
        color: Colors.white,
        fontSize: 14,
        fontWeight: "normal"
    },
    icon: {
        color: Colors.white,
        fontSize: 20,
        marginRight: 10
    },
    close: {
        color: Colors.white,
        fontSize: 12,
        marginLeft: 15
    }
}
export const toastConfig = {
    success: ({ text1, text2, props }) => (
        <View>
            <View style={[commonStyles.container, { backgroundColor: Colors.toastSuccess }]}>
                <View style={{flexDirection: "row", flex: 1}}>
                    <CustomIcon name="circle-check-fill" style={commonStyles.icon} />
                    <View style={{flex: 1}}><Text style={commonStyles.text}>{text1}</Text></View>
                </View>
                <View style={{flexDirection: "row", alignItems: "center"}}>
                    <Text style={[commonStyles.text, {fontWeight: "bold"}]} onPress={props.onAction}>{text2}</Text>
                    <CustomIcon name="cross" style={commonStyles.close} onPress={()=>Toast.hide()} />
                </View>
            </View>
        </View>
    ),
    error: ({ text1, text2, props }) => (
        <View style={[commonStyles.container, { backgroundColor: Colors.toastError }]}>
            <View style={{flexDirection: "row", flex: 1}}>
                <CustomIcon name="circle-exclamation-fill" style={commonStyles.icon} />
                <View style={{flex: 1}}><Text style={commonStyles.text}>{text1}</Text></View>
            </View>
            <View style={{flexDirection: "row", alignItems: "center"}}>
                <Text style={[commonStyles.text, {fontWeight: "bold"}]} onPress={props.onAction}>{text2}</Text>
                <CustomIcon name="cross" style={commonStyles.close} onPress={()=>Toast.hide()} />
            </View>
        </View>
    ),
    errorInfo: ({ text1 }) => (
        <View style={[commonStyles.container, { backgroundColor: Colors.toastError }]}>
            <View style={{flex: 1}}><Text style={[commonStyles.text, {textAlign:"center", width: "100%"}]}>{text1}</Text></View>
        </View>
    ),
    warning: ({ text1, text2, props }) => (
        <View style={[commonStyles.container, { backgroundColor: Colors.toastWarning }]}>
            <View style={{flexDirection: "row", flex: 1}}>
                <CustomIcon name="triangle-exclamation-fill" style={commonStyles.icon} />
                <View style={{flex: 1}}><Text style={commonStyles.text}>{text1}</Text></View>
            </View>
            <View style={{flexDirection: "row", alignItems: "center"}}>
                <Text style={[commonStyles.text, {fontWeight: "bold"}]} onPress={props.onAction}>{text2}</Text>
                <CustomIcon name="cross" style={commonStyles.close} onPress={()=>Toast.hide()} />
            </View>
        </View>
    )
  }
