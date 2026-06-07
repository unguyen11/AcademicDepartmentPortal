// Redirect to login page

import { Redirect } from "expo-router";

export default function Home() {
  return <Redirect href="/login" />;
}