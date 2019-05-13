import React, { Component } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export default class Todo extends Component {
    state = {
        isEditing: false,
        isCompleted: false
    };

    render() {
        const { isCompleted, isEditing } = this.state;
        return (
            <View style={styles.container}>
                <View style={styles.column}>
                    <TouchableOpacity onPress={this._toggleCompletedTodo}>
                        <View style={[styles.circle, isCompleted ? styles.completedCircle : styles.uncompletedCircle]} />
                    </TouchableOpacity>
                    <Text style={[styles.text, isCompleted ? styles.compltedText : styles.uncompltedText]}> Hello I'm To Do</Text>
                </View>

                <View styles={styles.column}>
                    {isEditing ? (
                        <View style={styles.action}>
                            <TouchableOpacity onPress={this._finishEditin}>
                                <View style={styles.actionContainer}>
                                    <Text style={styles.actionText}>✅</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    ) : (
                            <View style={styles.actions}>
                                <TouchableOpacity onPressOut={this._startEditin}>
                                    <View style={styles.actionContainer}>
                                        <Text style={styles.actionText}>🖌</Text>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <View style={styles.actionContainer}>
                                        <Text style={styles.actionText}>❎</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        )}
                </View>
            </View>
        );
    }

    _toggleCompletedTodo = () => {
        this.setState(prevState => {
            return {
                isCompleted: !prevState.isCompleted
            };
        })
    }

    _startEditin = () => {
        this.setState({
            isEditing: true
        })
    }

    _finishEditin = () => {
        this.setState({
            isEditing: false
        })
    }

}

const styles = StyleSheet.create({
    container: {
        width: width - 80,
        borderBottomColor: "#bbb",
        borderBottomWidth: StyleSheet.hairlineWidth,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    text: {
        fontWeight: "600",
        fontSize: 20,
        marginVertical: 20
    },
    circle: {
        width: 30,
        height: 30,
        borderRadius: 15,
        borderColor: "red",
        borderWidth: 3,
        marginRight: 20
    },
    completedCircle: {
        borderColor: "#bbb"
    },
    uncompletedCircle: {
        borderColor: "#F23657"
    },

    compltedText: {
        color: "#bbb",
        textDecorationLine: "line-through"
    },
    uncompltedText: {
        color: "#353839"
    },
    column: {
        flexDirection: "row",
        alignItems: "center",
        width: width / 2,
        justifyContent: "space-between"
    },
    actions: {
        flexDirection: "row"
    },
    actionContainer: {
        marginVertical: 10,
        marginHorizontal: 10
    }
});