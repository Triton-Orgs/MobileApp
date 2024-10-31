// src/components/UsersList.js
import React from "react";
import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  StyleSheet,
} from "react-native";
import { useQuery } from "@tanstack/react-query";
import { fetchUsers } from "@/api/users";

export default function UsersList() {
  // Use React Query to fetch users with a descriptive query key
  const {
    data: users,
    isLoading,
    isError,
    error,
  } = useQuery({ queryKey: ["users"], queryFn: fetchUsers });

  // Loading state
  if (isLoading) {
    return (
      <ActivityIndicator style={styles.centered} size="large" color="#0000ff" />
    );
  }

  // Error state
  if (isError) {
    return <Text style={styles.errorText}>Error: {error.message}</Text>;
  }

  // Render list of users
  return (
    <FlatList
      data={users}
      keyExtractor={(item) => item._id.toString()}
      renderItem={({ item }) => (
        <View style={styles.userContainer}>
          <Text style={styles.userName}>{item.name}</Text>
          <Text style={styles.userEmail}>{item.email}</Text>
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  centered: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  errorText: {
    color: "red",
    fontSize: 16,
    textAlign: "center",
    marginTop: 20,
  },
  userContainer: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  userName: {
    fontSize: 18,
  },
  userEmail: {
    color: "gray",
  },
});
