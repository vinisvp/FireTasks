import { createDrawerNavigator } from "@react-navigation/drawer";
import { Tasks } from "./Tasks";
import { Task } from "./Task";

export function Home({ route, navigation }) {
  const Drawer = createDrawerNavigator();
  //const { user } = route.params;
  /*navigation.setOptions({
    title: `Olá ${user.email}`
  });*/

  return (
    <Drawer.Navigator initialRouteName="Tasks">
      <Drawer.Screen name='Tasks' component={Tasks}
        options={{
          title: "Tarefas"
        }}
      />
      <Drawer.Screen name='Task' component={Task}
        options={{
          title: "Criar Tarefa"
        }}
      />
    </Drawer.Navigator>
  );
}
