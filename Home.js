import { createDrawerNavigator } from "@react-navigation/drawer";
import { Tasks } from "./Tasks";
import { Task } from "./Task";

export function Home() {
  const Drawer = createDrawerNavigator();

  return (
    <Drawer.Navigator initialRouteName="Task">
      <Drawer.Screen name='Tasks' component={Tasks} />
      <Drawer.Screen name='Task' component={Task} />
    </Drawer.Navigator>
  );
}
